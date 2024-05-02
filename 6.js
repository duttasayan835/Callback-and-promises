async function data() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const d = await response.json();
  console.log(d);
}
data();
//OUTPUT:{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
