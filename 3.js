const person = {
  first_name: "Reshma",
  last_name: "Das",
  age: 8,
};
function age_in_days(person, logout) {
  let name = `${person.first_name} ${person.last_name}`;
  let age = person.age * 365 + Math.floor(person.age / 4);
  logout(name, age);
}
function logout(name, age) {
  console.log(
    `The full-name of the person is ${name} and age in days is ${age} `
  );
}

age_in_days(person, logout);
//OUTPUT:The full-name of the person is Reshma Das and age in days is 2922
