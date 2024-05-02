const book = [
  {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2010,
  },
  {
    title: "The God of small things",
    author: "Arundhati Roy",
    year: 1997,
  },
  {
    title: "A suitable boy",
    author: "Vikram Seth",
    year: 1993,
  },
  {
    title: "the white Tiger",
    author: "Aravind adiga",
    year: 2018,
  },
  {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    year: 1981,
  },
];

function extract_titles(bk, logtitles) {
  const title = book.map((bk) => bk.title);
  logtitles(title);
}
function logtitles(title) {
  title.sort();
  console.log(title.join(", "));
}
extract_titles(book, logtitles);

//OUTPUT:A suitable boy, Midnight's Children, The God of small things, The Namesake, the white Tiger
