let title = document.getElementById("title");

fetch("http://localhost:4000/product/api")
  .then((respone) => respone.json())
  .then((data) => {
    title.innerText = data[0].title;
  })
  .catch((err) => {
    console.log(err);
  });
