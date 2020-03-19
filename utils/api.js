const axios = require("axios");
const markDown = require("generateMarkdown.js");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl)
    .then(function(res){
      console.log(res.data);
      // const repoNames = [];
      // res.data.forEach(repo => repoNames.push(repo.name));
      // const repoNamesStr = repoNames.join("\n");
      markDown.generateMarkdown(res.data);
    });
  }
};

module.exports = api;
