require('dotenv').config();
const express = require('express');
const app = express();
//const port = 3000;
const gitData = {
  "login": "harsh8558",
  "id": 86869652,
  "node_id": "MDQ6VXNlcjg2ODY5NjUy",
  "avatar_url": "https://avatars.githubusercontent.com/u/86869652?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harsh8558",
  "html_url": "https://github.com/harsh8558",
  "followers_url": "https://api.github.com/users/harsh8558/followers",
  "following_url": "https://api.github.com/users/harsh8558/following{/other_user}",
  "gists_url": "https://api.github.com/users/harsh8558/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harsh8558/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harsh8558/subscriptions",
  "organizations_url": "https://api.github.com/users/harsh8558/orgs",
  "repos_url": "https://api.github.com/users/harsh8558/repos",
  "events_url": "https://api.github.com/users/harsh8558/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harsh8558/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harsh Kumar gupta",
  "company": null,
  "blog": "",
  "location": "Lucknow,UP",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-07-03T06:58:10Z",
  "updated_at": "2024-12-31T10:30:14Z"
}
app.get('/',(req, res)=>{
  res.send("<h1>this is your home page</h1>");
})

app.get('/login', (req, res)=>{
  res.send("<h1>this is my login page</h1>")
})
app.get('/github',(req, res)=>{
  res.json(gitData.name);
})

app.listen(process.env.PORt,()=>{
  console.log(`Your server is running on http://localhost:${process.env.PORt}`);
})