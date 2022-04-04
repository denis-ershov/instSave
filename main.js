var url = "https://api.instagram.com/oembed?url=https://www.instagram.com/p/fA9uwTtkSN/";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();