async function searchGif(query) {
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  return response;
}

document
  .getElementById("searchForm")
  .addEventListener("submit", async function handleSearch(evt) {
    evt.preventDefault();

    let query = document.getElementById("query").value;
    console.log(query);
    if (!query) return;

    let gifObj = await searchGif(query);
    addGif(gifObj);
  });

function addGif(gifObj) {
  let gif = gifObj.data.data[0];
  console.log(gif);
  let gifBox = document.getElementById("gifBox");
  gifBox.width = "400";
  gifBox.height = "400";
  let gifContainer = document.createElement("img");
  gifContainer.src = `${gif.images.downsized.url}`;
  gifContainer.width = "250";
  gifContainer.id = "container";
  gifBox.append(gifContainer);
}

document.getElementById("remove").addEventListener("click", function () {
  $("#container").remove();
});
