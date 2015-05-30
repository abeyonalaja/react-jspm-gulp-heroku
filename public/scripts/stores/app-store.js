
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

  getCatalog(){
    return _catalog;
  },

  addItem(item){
    console.log("Addin Item :: ", item);
    if(!item.inCart){
      item['qty'] = 1;
      item['inCart'] = true;
      _cartItems.push(item);
    } else {
      _cartItems.forEach((cartItem, i ) =>{
        if(cartItem.id===item.id) {
          increaseItem(i);
        }
      });
    }
  },

  removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
  },

  increaseItem(index){
    _cartItems[index].qty++;
  },

  decreaseItem(index){
    if(_cartItems[index].qty>1){
      _cartItems[index].qty--;
    } else {
      removeItem(index);
    }
  }

});

export default AppStore
