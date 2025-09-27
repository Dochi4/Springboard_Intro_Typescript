console.log("HELLO");
var adminDOM = {
    username: "dwojodwjmdwo",
    age: 34,
};
var adminDOM2 = {
    username: "dwo",
    age: 34444444444444,
};
function printUsername(user) {
    console.log("USERNAME:", user.username);
    console.log("AGE:", user.age);
}
printUsername(adminDOM);
printUsername(adminDOM2);
console.log("DOGGG");
var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log("CLICKED ME");
});
