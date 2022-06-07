/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  return response.data;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let obj of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${obj.show.id}">
         <div class="card" data-show-id="${obj.show.id}">
           <div class="card-body">
             <h5 class="card-title">${obj.show.name}</h5>
             <p class="card-text">${obj.show.summary}</p>
           </div>
         </div>
       </div>
      `
    );
    $item.click(function () {
      getEpisodes(obj.show.id);
    });
    $showsList.append($item);
  }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);
  populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  const response = await axios.get(
    `http://api.tvmaze.com/shows/${id}/episodes`
  );
  $("li").remove();

  for (let obj of response.data) {
    let $name = `<li id="episode">${obj.id}- ${obj.name}, Season ${obj.season}, Ep.${obj.number}</li>`;
    $("#episodes-list").append($name);
  }
  $("#episodes-area").show();
}
