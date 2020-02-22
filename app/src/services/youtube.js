const axios = require("axios");

const fetchVideos = keywords => {
  return new Promise(function(resolve, reject) {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: <GOOGLE_API_KEY_HERE>, // TODO: REPLACE WITH YOUR API KEY
          q: keywords,
          part: "snippet",
          maxResults: 5,
          type: "video",
          videoEmbeddable: true
        }
      })
      .then(response => {
        console.log(response);
        let { data } = response;
        let { items } = data;
        let videos = items.map(item => {
          let { snippet, id } = item;
          let { title, description, thumbnails } = snippet;
          let thumbnailUrl = thumbnails.medium.url;
          return { id: id.videoId, title, thumbnailUrl, description };
        });

        resolve(videos);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = {
  fetchVideos
};
