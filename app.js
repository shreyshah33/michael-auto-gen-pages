// data comes from data.js

function setData() {
  let urlParams = new URLSearchParams(window.location.search);

  let id;
  try {
    id = parseInt(urlParams.get("id"));
  } catch (e) {
    id = null;
  }

  // populate page
  if (id && data[id]) {
    document.getElementsByTagName("title")[0].innerHTML = data[id].title;
    document.getElementById("title").innerHTML = data[id].title;
    document.getElementById("description").innerHTML = data[id].description;
  } else {
    document.getElementsByTagName("title")[0].innerHTML = "Welcome";
    document.getElementById("title").innerHTML = "Welcome to my blog";
    let desc = "<ul>";
    for (const key in data) {
      desc += `<li><a href="?id=${key}">${data[key].title}</a></li>`;
    }
    desc += "</ul>";
    document.getElementById("description").innerHTML = desc;
  }
}
