
import React      from 'react';
import AppActions from './actions/app-actions';
import Catalog    from './components/catalog/app-catalog';
import Cart       from './components/cart/app-cart';
import Router     from 'react-router-component';
import Template   from './app-template';

let Locations = Router.Locations;
let Location  = Router.Location;

let App= React.createClass({
  render() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
        </Locations>
      </Template>
    );
  }
})


React.render(<App />, document.body);
