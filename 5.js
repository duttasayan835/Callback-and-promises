function greet(name) {
  return new Promise((resolve) => {
    const greeting = `Hello,${name}!`;
    resolve(greeting);
  });
}
greet("Sayan").then((message) => {
  console.log(message);
});
//OUTPUT:Hello,Sayan!
