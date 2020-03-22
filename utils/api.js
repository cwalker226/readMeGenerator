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

// 9c8e9cd396a272c970768b6ecfe542667d27f624