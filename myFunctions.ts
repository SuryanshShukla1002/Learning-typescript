const addTwo = (num: number) => {
  // num.toUpperCase  you can't do that
  return num + 5;
};
addTwo(6);
// addTwo('6') will not allow as parameter has been assigned with number

const loginUser = (name: string, email: string, isPiad: boolean = false) => {};
loginUser("Surya", "S@gmai.com");

// Arrow function string
const gethello = (s: string): string => {
  return "";
};

const heros = ["thor", "Superman"];
heros.map((hero) => {
  return `hero is ${hero}`;
});

// never (intential crash making for the server)

export {};
