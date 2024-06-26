interface User {
  name: string;
}
interface Action {
  do(): void;
}

type UserAction = User & Action;

// function createUserAction(): UserAction {
//   return { name: 'jay', do() {}};
// } 

type StringOrNumber = string | number;
type arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
  name: string;
  login(): boolean;
}

class UserImpl implements User2 {
  name: string;
  login(): boolean {
    return true;
  }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}