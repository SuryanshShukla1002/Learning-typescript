let greeting: string = "Hey there its suryansh shukla";
// greeting = 4  will give an error check as greeting is a string type
console.log(greeting);

// number
let userId: number = 3456;

// boolean
let isloggedIn: boolean = false;
isloggedIn.valueOf();

// any
let x: any = "suty";
x = 2232; /* with any type safety restriction removes */

let hero;
function gethero() {
  return true;
}
hero = gethero;

export {};
