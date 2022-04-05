function delay() {
   return new Promise((resolve) => setTimeout(resolve, 6000));
 }

async function inst() {
   await delay();
   let post = {};

   for (key in data.saved_saved_media) {
      var loc = data.saved_saved_media[key].string_map_data.base.href;
      var id = loc.split('/').slice(-2)[0];
      //console.log(id);
      let opt = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com',
            'X-RapidAPI-Key': 'baf3e80aa8mshfe8d689373c0219p11bb09jsn8e00ad473782'
         }
      };
   
     let url = "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=" + id + "&response_type=feeds";
     let response = await fetch(url, opt);
     let ibase = await response.json();
     //console.log(ibase[0].items[0].caption.text);
     post[key] = {
        img: ibase[0].items[0].image_versions2.candidates[2].url,
        text: ibase[0].items[0].caption.text
     }
     console.log(post[key]);
     console.log('Обработано ' + key);
   }
   console.log(post);
}

inst();