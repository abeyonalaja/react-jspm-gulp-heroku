
import Reflux from 'reflux';
import AppActions from '../actions/app-actions';

var _catalog = [
    {id:1, title: 'Widget #1', cost: 1},
    {id:2, title: 'Widget #2', cost: 2},
    {id:3, title: 'Widget #3', cost: 3}
  ];

var _cartItems = [];

const AppStore = Reflux.createStore({

  init(){
    this.listenTo(AppActions.addItem, this.addItem);
  },

  addItem(item){

    console.log("Addin Item :: ", item);
  }

});

export default AppStore
