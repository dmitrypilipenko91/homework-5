const greetingModule = (function() {
    const greeting = "Hello";
    let name = "";
    const setName = function(userName) {
        name = userName;
        }
    const sayGreeting = function() {
            return `${greeting} ${name}`;
        }
    return {
        setName: setName,
        sayGreeting: sayGreeting
    }
})()

greetingModule.setName("Dima");
console.log(greetingModule.sayGreeting());