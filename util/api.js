var api = {
  getData(){
      var url = `./data.json`;
      return fetch(url).then((res) => res.json());
  }
};
module.exports = api;