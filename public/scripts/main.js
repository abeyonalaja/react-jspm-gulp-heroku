
import React      from 'react';
import AppActions from './actions/app-actions';
import AppStore   from './stores/app-store';
import AddToCart  from './components/app-add-to-cart';
import Reflux     from 'reflux';
import Catalog    from './components/app-catalog';

var TimeActions = Reflux.createActions(['tick'])

var TimeStore = Reflux.createStore({
  listenables: [TimeActions],

  onTick: function(tick) {
    this.trigger(tick);

    if (tick === 0) return;

    setTimeout(() => TimeActions.tick(tick - 1), 1000);
  }
})

let App= React.createClass({


  render() {
    return (<div>
            <h1>Lets Shop</h1>
            <Catalog />

           </div>);
  }
})


React.render(<App />, document.body);
