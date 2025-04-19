{
  "name": "blog-migration",
  "version": "1.0.0",
  "description": "Blog migration from CSV to custom publishing system",
  "main": "createBlog.js",
  "homepage": "https://mtgr18977.github.io/blog-app",
  "scripts": {
      "extract": "node extractPosts.js",
      "start": "node createBlog.js",
      "start:alt": "PORT=3001 node createBlog.js",
      "start:custom": "cross-env PORT=$npm_config_port node createBlog.js",
      "setup": "npm install && npm run extract && npm run start",
      "build": "node createBlog.js",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
  },
  "dependencies": {
      "cross-env": "^7.0.3",
      "express": "^4.18.2",
      "marked": "^15.0.8",
      "papaparse": "^5.4.1"
  },
  "devDependencies": {
      "gh-pages": "^5.0.0"
  },
  "engines": {
      "node": ">=14.0.0"
  }
}
