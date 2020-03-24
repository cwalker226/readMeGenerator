const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
    // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    // const queryUrl = `https://api.github.com/users/${username}/public`;
    const queryUrl = "https://api.github.com/graphql";
    const oauth = {Authorization: 'bearer ' + process.env.GH_TOKEN};
    return axios.post(
      queryUrl,
      {query: `{user(login: "${username}") {
        email
        avatarUrl
        }
      }`
      },
      {headers: oauth});
  }
};

module.exports = api;
