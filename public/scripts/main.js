
import React      from 'react';
import AppActions from './actions/app-actions';
import AppStore   from './stores/app-store';
import AddToCart  from './components/app-add-to-cart';
import Reflux     from 'reflux';

var TimeActions = Reflux.createActions(['tick'])

var TimeStore = Reflux.createStore({
  listenables: [TimeActions],

  onTick: function(tick) {
    this.trigger(tick);

    if (tick === 0) return;

    setTimeout(() => TimeActions.tick(tick - 1), 1000);
  }
})

let HelloWorld = React.createClass({


  mixins: [Reflux.connect(TimeStore, 'tick')],
  render() {
    return (<div>
            <AddToCart />
              <p onClick={AppActions.addItem}>Hello World How ARE YOU</p>
           </div>);
  }
})


React.render(<HelloWorld />, document.body);
