require('dotenv').config({ quiet: true })
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "gouravgodla",
    "id": 98866998,
    "node_id": "U_kgDOBeSXNg",
    "avatar_url": "https://avatars.githubusercontent.com/u/98866998?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gouravgodla",
    "html_url": "https://github.com/gouravgodla",
    "followers_url": "https://api.github.com/users/gouravgodla/followers",
    "following_url": "https://api.github.com/users/gouravgodla/following{/other_user}",
    "gists_url": "https://api.github.com/users/gouravgodla/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gouravgodla/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gouravgodla/subscriptions",
    "organizations_url": "https://api.github.com/users/gouravgodla/orgs",
    "repos_url": "https://api.github.com/users/gouravgodla/repos",
    "events_url": "https://api.github.com/users/gouravgodla/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gouravgodla/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Gourav Singh",
    "company": null,
    "blog": "https://gouravgodla-portfolio.vercel.app/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "🚀 Full Stack Web Developer | MERN Stack | TypeScript | Next.js | Problem Solver | Open to Opportunities",
    "twitter_username": "gouravgodla",
    "public_repos": 35,
    "public_gists": 0,
    "followers": 20,
    "following": 29,
    "created_at": "2022-02-02T05:06:26Z",
    "updated_at": "2025-08-20T07:03:50Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('gourav singh is creating express server')
})
app.get('/login', (req, res) => {
    res.send('please login')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

//it will run on port 4000