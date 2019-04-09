import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import Row from '../../Components/UI/DPRow/index'
import BasketButton from '../../Components/Composite/DPBasketButton';
import DPProductCard from '../../Components/Composite/DPProductCard/index'
import {
  getProducts
} from '../../Actions/ProductActions/index';
import {
  getBasketProducts,
} from '../../Actions/BasketActions/index';

//Gerçek bir veri tabanı olmadığından getBasketProducts() actionunu her tetiklediğimde mockApi deki eski verileri okuduğundan sayfalar arası basket count 'u tutarsız görünecektir. 
class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      basketProducts: [],
      totalBasketCount: 0
    }
  }
  componentDidMount() {
    this.props.getProducts();
    this.props.getBasketProducts();
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.products !== nextProps.ProductState) {
      this.setState({ products: nextProps.ProductState })
    }
    if (this.state.basketProducts !== nextProps.BasketState) {
      let count = 0;
      nextProps.BasketState.map(item => { (count += item.productCount) })

      this.setState({ basketProducts: nextProps.BasketState, totalBasketCount: count })
    }
  }

  productItems = () => {
    console.log(this.state.products)
    return (this.state.products ?
      this.state.products.map((item) => {
        return (
          <Link to={`/products/detail/${item.id}`} >
            <DPProductCard
              key={item.id}
              productItem={item}
            />
          </Link>)
      }
      ) : null
    )
  }

  render() {
    return (
      <div style={{ backgroundColor: "#eeeeee", }}>
        <div style={{ height: 100, width: "100%", backgroundColor: "black" }}>
          <BasketButton
            productCount={this.state.totalBasketCount}
            onClick={() => alert(JSON.stringify(this.state.basketProducts))} />
        </div>
        <Row style={{ padding: 15 }}>
          {this.productItems()}
        </Row>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    ProductState: state.ProductReducer.ProductScreen.Products,
    BasketState: state.BasketReducer.BasketScreen.BasketProducts
  }
}
export default connect(mapStateToProps, {
  getProducts,
  getBasketProducts
})(ProductScreen)