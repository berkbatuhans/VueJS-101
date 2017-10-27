Vue.component('VueCart',{
  props: {
    cart:{ type: Array, required: true, //default: () => { return []}
    },
    // title tipi String
    // title gerekli
    title:{ type: String, required: true },
    type: { type: String, required: true }
  },
  methods: {
    // Delete butonuna tıklayınca tetiklenecek olan method
    // cart içerisinden siler
    removeFromCart(index) {
      this.cart.splice(index, 1);
    }
  },
  computed: {
    // Subtotal alanının hesaplanmasını yapar.
    cartTotal() {
      let total = 0;
      // cart içindeki itemleri forEach ile döner ve total değerine
      // item.price değerini toplar
      this.cart.forEach((item) => {
        total += parseFloat(item.price, 10)
      });
      // toFixed noktadan sonra son 2 hane göstermesini sağlar.
      return total.toFixed(2);
    },
    isShoppingCart(){
      return this.type == 'shoppingCart'
    },
    isSavedCart(){
      return this.type == 'savedCart'
    }
  },
  //props: ['cart'],
  template: `
  <div class="card-wrapper">
  <h2>{{title}}</h2>
  <p v-if="!cart.length">No item in cart.</p>
  <div class="cart">
    <div class="item" v-for="(item, index) in cart">
      <div class="image">
        <a v-bind:href="item.url">
          <img v-bind:src="item.image" />
        </a>
      </div>
      <div class="info">
        <h4>{{item.name}}</h4>
        <p class="seller">by {{item.seller}}</p>
        <p class="status available" v-if="item.isAvailable">In Stock</p>
        <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
        <a href="#" v-on:click="removeFromCart(index)">Delete</a>

        <a href="#" class="secondary" v-on:click="saveForLater(index)" v-if="isShoppingCart">Save for later</a>
        <a href="#" class="secondary" v-on:click="saveForLater(index)" v-if="isSavedCart">Moved to cart</a>
      </div>
      <p class="price">\${{item.price}}</p>
    </div>
    <div class="subtotal">
      Subtotal ({{cart.length}} items): <span class="price">\${{cartTotal}}</span>
    </div>
  </div>
  </div>`,
})


new Vue({
  el: '#root',
  name: 'Cart',
  data: {
    isLoading: true,
    cart: [],
    saved: []
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    saveForLater(index) {
      const item = this.cart.splice(index, 1);
      this.saved.push(item[0]);
    },
    moveToCart(index) {
      const item = this.saved.splice(index, 1);
      this.cart.push(item[0]);
    }
  },
  computed: {
    cartTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += parseFloat(item.price, 10)
      });
      return total.toFixed(2);
    }
  },
  created() {
    fetch('./data.json')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.isLoading = false;
        this.cart = response.cart;
        this.saved = response.saved;
      })
  }

});
