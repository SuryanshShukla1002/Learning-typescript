"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    // num.toUpperCase  you can't do that
    return num + 5;
};
addTwo(6);
// addTwo('6') will not allow as parameter has been assigned with number
var loginUser = function (name, email, isPiad) {
    if (isPiad === void 0) { isPiad = false; }
};
loginUser("Surya", "S@gmai.com");
// Arrow function string 
var gethello = function (s) {
    return "";
};
var heros = ["thor", "Superman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
