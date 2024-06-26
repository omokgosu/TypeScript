interface Props {
  name: string;
  [key: number]: string;
}

const keys: keyof Props = 'name';

interface User {
  name: string;
  age: number;
  hello(msg: string): void;
}

let keysOFUser: keyof User;
keysOFUser = 'age';

let helloMethod: User['hello'];
helloMethod = function(msg: string): void{ console.log(msg)};