let numValue:number;
let stringValue:string;
let booleanValue:boolean;
let undefinedValue:undefined;
let nullValue:null;
let objValue:object;
let symbolValue:symbol;
let anyValue:any;

numValue = 3.3;
stringValue = "hello";
stringValue = 'hello';
stringValue = `
  hello
  ${1 + 1}
  hi
`

booleanValue = true;
undefinedValue = null;
nullValue = undefined;
numValue = null;
numValue= undefined;
anyValue = 1;
anyValue = '1';
anyValue = null;
anyValue = {};

objValue = { name : 'jay'};
objValue = {};
objValue = new String('hello');

symbolValue = Symbol();

let nameList : string[];
nameList = ['1', '3'];

let user1: {name: string, score: number};

user1 = {
  name: 'jay',
  score: 30
}

let tuple2: [number, string];
let tuple3: [number, number, number ];
tuple2 = [1,'hello'];
tuple3 = [1,2,3];