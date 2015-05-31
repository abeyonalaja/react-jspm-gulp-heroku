
import Reflux from 'reflux';
import AppActions from '../actions/app-actions';

var _catalog = [];
var cartItems = [];

const AppStore = Reflux.createStore({

  init(){
    for(var i=1; i<9; i++){
      _catalog.push({
        'id'          : 'widget' + i,
        'title'       : 'widget #' + i,
        'summary'     : 'This is an awesome widget',
        'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
        'img'         : '/assets/product.png',
        'cost'        : i
      });
    }
  },

  listenables: [AppActions],
  
  getInitialState(){
    return{cartItems}
  },

  getCatalog(){
    return _catalog;
  },

  addItem(item){
    if(!item.inCart){
      item['qty'] = 1;
      item['inCart'] = true;
      cartItems.push(item);
    } else {
      cartItems.forEach((cartItem, i ) =>{
        if(cartItem.id===item.id) {
          this.increaseItem(i);
        }
      });
    }

    this.trigger(cartItems);
  },

  removeItem(index) {
    cartItems[index].inCart = false;
    cartItems.splice(index, 1);
    this.trigger(cartItems);
  },

  increaseItem(index){
    cartItems[index].qty++;
    this.trigger(cartItems);
  },

  decreaseItem(index){
    if(cartItems[index].qty>1){
      cartItems[index].qty--;
    } else {
      this.removeItem(index);
    }
    this.trigger(cartItems);
  }

});

export default AppStore
