console.log("HELLO");

interface User {
  username: string;
  age: number;
  email?: string;
}

const adminDOM: User = {
  username: "dwojodwjmdwo",
  age: 34,
};
const adminDOM2: User = {
  username: "dwo",
  age: 34444444444444,
};

function printUsername(user: User): void {
  console.log("USERNAME:", user.username);
  console.log("AGE:", user.age);
}

printUsername(adminDOM);

printUsername(adminDOM2);

console.log("DOGGG");

const btn = document.getElementById("btn");

btn?.addEventListener("click", function () {
  console.log("CLICKED ME");
});
