interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {

  constructor( public name: string) {
   
  }
  say(message: string): void {
    console.log(message); 
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '.....';
  }

  loveKimchi() {
    console.log('love kimchi');
  }
}

const jay = new KoreanProgrammer('jay');

abstract class Korean implements Person {
  
  public abstract jumin: number;

  constructor(public name: string) {
    
  }

  say(message: string) {
    console.log(message);
  }

  abstract loveKimchi(): void; 
}

class KoreanProgrammer2 extends Korean implements Programmer{

  constructor(public name: string, public jumin: number) {
    super(name);
  }

  say(message: string): void {
    console.log(message); 
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '.....';
  }

  loveKimchi() {
    console.log('love kimchi');
  }

}

const jay2 = new KoreanProgrammer2('jay', 2222);