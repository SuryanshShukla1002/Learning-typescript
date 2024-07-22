type User = {
  name: string;
  age: number;
  isPaid: boolean;
};

const createUser = (user: User) => {};

createUser({ name: "Suryansh", age: 18, isPaid: true });

export {};

type users = {
  readonly _id: string;
  name: string;
  age: number;
  isPaid: boolean;
  credcard?: number;
};

let myUser: users = {
  _id: "abc",
  name: "Surya",
  age: 19,
  isPaid: false,
};
// myUser._id = "cde" will not allow as it is readonly property

type cardate = {
  date: string;
};
type cardNumber = {
  cvv: number;
};
type cardDetails = cardate &
  cardate & {
    cvv: number;
  };
