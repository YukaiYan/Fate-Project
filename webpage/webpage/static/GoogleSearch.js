/* Return a json that contains 10 search results
 * This function can be called when user clicks "search" button
 * Note that an error may happen when exceeds 100 queries per day
 *
 * Examples of using json:
 *   var item = json.items[i];
 *   var title = item.title;
 *   var snippet = item.snippet;
 */

 (function() {
   "use strict";

   window.addEventListener("load", init);

   function init() {
     let submitButton = document.querySelector(".submit");
     submitButton.disabled = true;
     submitButton.addEventListener("click", submitResult);
     let ratingButton = document.getElementsByName("rating");
     for (let i = 0; i < ratingButton.length; i++) {
       ratingButton[i].addEventListener("click", chooseRating);
     }
     let searchEngine = document.getElementById("search-word");
     searchEngine.addEventListener("keypress", function(e) {
       let key = e.which || e.keyCode;
       if (key == 13) {
         fillColumn();
       }
     });
   }

   function submitResult() {
     let submitButton = document.querySelector(".submit");
     submitButton.disabled = true;
     fillColumn();
   }

   function chooseRating() {
     let submitButton = document.querySelector(".submit");
     submitButton.disabled = false;
   }

   function populateResults(responseData) {
     for (let i = 0; i < 5; i++) { #responseData.items.length
       let title = document.createElement("div");
       let description = document.createElement("div");
       title.className = "title";
       description.className = "description";
       title.innerHTML = responseData.items[i].title;
       description.innerHTML = responseData.items[i].snippet;
       let resultInfo = document.querySelector(".resultInfo");
       resultInfo.appendChild(title);
       resultInfo.appendChild(description);
     }
   }

  function fillColumn() {
    let column = document.querySelector(".resultInfo");
    column.innerHTML = "";
    let search = document.getElementById("search-word");
    let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyADu5e_mxAUXwV55-k_uLdhAOfVaz77w4U&cx=016380682806239544582:uue1xujzz4w&q=" + search.value;
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      .then(populateResults)
      .catch(console.error);
  }

  /**
    * Checks to see if the data that is being fetched can be used.
    * @param {string} response = JSON data that was fetched from the API
    * @return {string} Returns the data that fits the condition
  */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " +
      response.statusText));
    }
  }

})();