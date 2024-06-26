// function createPromise<T>(x: T , timeoute: number) {
//   return new Promise<T>((resolve , reject) => {
//     setTimeout(() => {
//       resolve(x);
//     }, timeoute);
//   });
// }

// createPromise(1, 100)
//   .then(v => console.log(v));

//   function createTuple2<T,U>(v: T, v2: U): [T,U] {
//     return [v,v2];
//   }

//   const t1 = createTuple2("USER1" , 1000);

interface DB<T> {
  add(v: T): void;
  get(): T;
}

class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

interface JSONSerialier {
  serialize(): string;

}

class LocalDB<T extends JSONSerialier> implements DB<T> {
  constructor(private localStorageKey: string) {}

  add(v: T) {
    v.serialize();
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : undefined;
  }
}

interface Vegitable {
  v: string;
}
interface Meat {
  m: string;
}
interface Cart2<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart1: Cart2<Vegitable> = {
  getItem() {
    return { v: '' };
  }  
}