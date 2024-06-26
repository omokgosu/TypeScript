interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}

class Cart {
  private store: { [key: string]: Product };

  constructor(public user: User, store: { [key: string]: Product } = {}) {
    this.store = store;
  }

  put(id: string, product: Product) {
    this.store[id] = product;
  }
  
  get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user;
  }
}

const cart2 = new PromotionCart({ name: 'john' });

const cartJohn = new Cart({ name: 'john'});

const cartJay = new Cart({ name: 'jay'});  