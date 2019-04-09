import React, { Component } from 'react'
import DPProductDetailCard from '../../Components/Composite/DPProductDetailCard/index'
import Row from '../../Components/UI/DPRow/index'
import _ from 'lodash';
import { connect } from 'react-redux'
import {
  getProducts,
} from '../../Actions/ProductActions/index';
import {
  getBasketProducts,
  addProductToBasket
} from '../../Actions/BasketActions/index';
import BasketButton from '../../Components/Composite/DPBasketButton';

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      basketProducts: [],
      totalBasketCount: 0
    }
  }
  componentDidMount() {
    this.props.getProducts();
    this.props.getBasketProducts();
  }
  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.state.product !== nextProps.ProductState) {
      const detailItem = _.find(nextProps.ProductState, { "id": this.props.match.params.productId })
      this.setState({ product: detailItem })
    }
    if (this.state.basketProducts !== nextProps.BasketState) {
      let count = 0;
      nextProps.BasketState.map(item => { (count += item.productCount) })

      this.setState({ basketProducts: nextProps.BasketState, totalBasketCount: count })
    }
  }
  addProductsToBasket = () => {
    debugger;
    let stateBaskets = this.state.basketProducts;
    let product = _.find(stateBaskets, { 'productId': this.props.match.params.productId });
    if (product != null) {
      product.productCount += 1;
      const index = _.findIndex(stateBaskets, { 'productId': this.props.match.params.productId });
      stateBaskets[index] = product;
      this.props.addProductToBasket(product);
    }
    else {
      this.setState({ basketProducts: [...this.state.basketProducts, this.state.product] })
      this.props.addProductToBasket(this.state.basketProducts);
    }
    this.setState({ totalBasketCount: this.state.totalBasketCount + 1 })
  }
  render() {
    return (
      <div style={{ backgroundColor: "#eeeeee", height: "100%" }}>
        <div style={{ height: 100, width: "100%", backgroundColor: "black" }}>
          <BasketButton
            productCount={this.state.totalBasketCount}
            onClick={() => alert(JSON.stringify(this.state.basketProducts))} />
        </div>
        <Row style={{ height: "100%", backgroundColor: "#eeeeee", }}>
          {this.state.product ?
            <DPProductDetailCard
              productItem={this.state.product}
              addBasket={() => this.addProductsToBasket()}
            /> : <div />
          }
        </Row>
      </div>

    )
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    ProductState: state.ProductReducer.ProductScreen.Products,
    BasketState: state.BasketReducer.BasketScreen.BasketProducts
  }
}
export default connect(mapStateToProps, {
  getProducts,
  getBasketProducts,
  addProductToBasket
})(ProductDetailScreen)