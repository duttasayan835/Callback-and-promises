async function getc() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    ),
  ]);
  let combinedData = {
    todo: data1,
    post: data2,
  };
  return combinedData;
}
getc().then((data) => {
  console.log(data);
});

//OUTPUT
// {
//     todo: {
//       userId: 1,
//       id: 1,
//       title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//       body: 'quia et suscipit\n' +
//         'suscipit recusandae consequuntur expedita et cum\n' +
//         'reprehenderit molestiae ut ut quas totam\n' +
//         'nostrum rerum est autem sunt rem eveniet architecto'
//     },
//     post: undefined
//   }
