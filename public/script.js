new Vue({
  el: "#app",
  data: {
    total: 0,
    items: [
      { id: 0, title: 'Item 1', price: 9.99},
      { id: 1, title: 'Item 2', price: 9.99},
      { id: 2, title: 'Item 3', price: 9.99}
    ],
		cart: []
  },
  methods: {
    addItem: function(index){
      this.total += this.items[index].price;
      var item = this.items[index];
      var found = false;
      for(var i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === item.id) {
          this.cart[i].qty++;
          found = true;
        }
      }
      if(!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          qty: 1
        });
      }
    },
    inc: function(item){
      item.qty++;
      this.total += item.price;
    },
    dec: function(item) {
      item.qty--;
      this.total += item.price;
      if(item.qty <= 0){
        for(var i = 0; i < this.cart.length; i++){
          if (this.cart[i].id === item.id){
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },
  filters: {
    currency: function(price){
        return '$'.concat(price.toFixed(2));
    }
  }
});
