# Engage-Lives
Gastbyjs site created for St. Paul Churches as a bulliten board for the community

![alt text](https://firebasestorage.googleapis.com/v0/b/engage-lives.appspot.com/o/assets%2FEngageLives.gif?alt=media&token=6217a36c-ec9b-45b7-9bbb-76d8a04eae11 "screencast")

## Install

Note: User needs access to Contenful spaceid and accesstoken to access data from CMS
Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Install dependencies from package.json
```sh
npm install
```

Then you can run it by:
```sh
gatsby develop
```

To watch for css changes npm install gulp and run:
```sh
gulp sass:watch
```

## Deploy

Note: Currently CI deploys on content changes via webhook (requires firebase credentials)

Build the site via gatsby CLI:
```sh
gatsby build
```

Deploy to choice of host.
