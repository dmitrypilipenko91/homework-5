const greeting = "Hello";
let name = "";
const setName = function(userName) {
    name = userName;
    }
const sayGreeting = function() {
        return `${greeting} ${name}`;
    }
module.exports = {
    setName,
    sayGreeting
}