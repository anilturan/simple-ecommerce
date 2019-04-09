import React, { Component } from 'react';
import ProductsScreen from './Screens/ProductsScreen/index'
import ProductDetailScreen from './Screens/ProductDetailScreen/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductsScreen} />
          <Route path="/products/detail/:productId" component={ProductDetailScreen}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
