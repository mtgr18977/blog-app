// createBlog.js
// Script to create a blog with the extracted posts

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//const marked = require('marked'); // Ensure marked is imported correctly
const { marked } = require('marked');


// Configuration
const POSTS_JSON_PATH = path.join(__dirname, 'posts', 'posts.json');
const TEMPLATES_FOLDER = path.join(__dirname, 'templates');
const PUBLIC_FOLDER = path.join(__dirname, 'public');

// Create necessary directories
if (!fs.existsSync(TEMPLATES_FOLDER)) {
  fs.mkdirSync(TEMPLATES_FOLDER, { recursive: true });
}
if (!fs.existsSync(PUBLIC_FOLDER)) {
  fs.mkdirSync(PUBLIC_FOLDER, { recursive: true });
}

// Create CSS file
const cssContent = `
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Container styles */
.container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Header styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title-container {
  flex: 1;
  text-align: center;
}

.nav-container {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.search-container {
  flex: 1;
  text-align: center;
}

/* Main content area */
.content-container {
  padding: 30px;
  margin: 0 auto;
  text-align: left;
}

/* Post list styles */
.post-list {
  text-align: left;
  margin-top: 20px;
}

.post-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.post-title {
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bold;
}

.post-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.post-title a:hover {
  color: #007BFF;
}

.post-date {
  color: #666;
  font-size: 0.9rem;
}

/* Navigation links */
nav a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

nav a:hover {
  color: #007BFF;
}

/* Individual post page */
.post-content {
  text-align: left;
  line-height: 1.8;
}

.post-content p {
  margin-bottom: 15px;
}

/* Search form */
.search-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 180px;
  transition: border-color 0.3s;
}

.search-form input:focus {
  border-color: #007BFF;
  outline: none;
}

.search-form button {
  padding: 8px 16px;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-form button:hover {
  background-color: #0056b3;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
  
  .title-container, .nav-container, .search-container {
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
  }
}
`;

// Write CSS file to the public directory
//fs.writeFileSync(cssPath, cssContent, 'utf8');

// Create main HTML template
const mainTemplate = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{pageTitle}}</title>
  <link rel="stylesheet" href="/style.css" type="text/css">
</head>
<body>
  <div class="container">
    <header>
      <div class="title-container">
        <h1>Here be dragons</h1>
      </div>
      <div class="nav-container">
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
      </div>
      <div class="search-container">
        <form class="search-form" action="/search" method="GET">
          <input type="text" name="q" placeholder="Busca">
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
    
    <main class="content-container">
      {{content}}
    </main>
  </div>
  <script>
    // Simple client-side JavaScript
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Blog loaded successfully!');
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), mainTemplate, 'utf8');

// Function to render template with content
function renderTemplate(template, data) {
  let result = template;
  Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, data[key]);
  });
  return result;
}

// Add function to parse markdown files
// Update the parseMarkdownFile function to use marked correctly
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const [, frontMatter, ...bodyParts] = content.split('---');
  
  // Parse front matter
  const metadata = {};
  frontMatter.trim().split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key) {
      let value = valueParts.join(':').trim();
      if (key === 'tags') {
        try {
          value = JSON.parse(value);
        } catch (e) {
          value = [];
        }
      }
      metadata[key.trim()] = value;
    }
  });

  // Use marked to parse markdown content into HTML
  const htmlContent = marked(bodyParts.join('---').trim());

  return {
    ...metadata,
    content: htmlContent, // Use parsed HTML content
    slug: path.basename(filePath, '.md')
  };
}

// Load posts data at the top level
const POSTS_DIR = path.join(__dirname, 'posts');
let postsData = [];

if (fs.existsSync(POSTS_DIR)) {
  const markdownFiles = fs.readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md'));
  
  postsData = markdownFiles
    .map(file => parseMarkdownFile(path.join(POSTS_DIR, file)))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
} else {
  console.error(`Posts directory not found at ${POSTS_DIR}`);
  process.exit(1);
}

// Configuration
const BUILD_FOLDER = path.join(__dirname, 'build'); // Change to build directory

// Create necessary directories
if (!fs.existsSync(BUILD_FOLDER)) {
  fs.mkdirSync(BUILD_FOLDER, { recursive: true });
}

// Write CSS file to the build directory
const cssPath = path.join(BUILD_FOLDER, 'style.css');
fs.writeFileSync(cssPath, cssContent, 'utf8');

// Write HTML template to the build directory
fs.writeFileSync(path.join(BUILD_FOLDER, 'index.html'), mainTemplate, 'utf8');

// Function to generate static files
function generateStaticFiles() {
  // Generate static files logic here
  // For example, generate HTML pages for each post
  postsData.forEach(post => {
    const postHTML = renderTemplate(mainTemplate, {
      pageTitle: post.title,
      content: post.content
    });
    fs.writeFileSync(path.join(BUILD_FOLDER, `${post.slug}.html`), postHTML, 'utf8');
  });

  console.log('Static files generated successfully in the build directory.');
}

// Generate static files
generateStaticFiles();

// Remove server initialization code
// function initServer() { ... }
// function startServer() { ... }

// Start the server
// Remove the app.listen call from here
// Remove the extra closing brace here
// }

// Function to create server with automatic port handling
function startServer() {
  // Remove the call to initServer() since it's not defined
  // Remove the server initialization code if not needed
  // const server = require('http').createServer(app);

  // Error handler for the server
  // server.on('error', (error) => {
  //   if (error.code === 'EADDRINUSE') {
  //     console.log(`Port ${PORT} is already in use. Trying on port ${PORT + 1}...`);
  //     // Try the next port by incrementing by 1
  //     setTimeout(() => {
  //       server.close();
  //       // Try next port
  //       process.env.PORT = Number(PORT) + 1;
  //       startServer();
  //     }, 1000);
  //   } else {
  //     console.error('Server error:', error);
  //     process.exit(1);
  //   }
  // });

  // Try to listen on the specified port
  // const currentPort = process.env.PORT || PORT;
  // server.listen(currentPort, () => {
  //   console.log(`Blog server running at http://localhost:${currentPort}`);
  //   console.log(`Total posts loaded: ${postsData.length}`);
  // });
}

// Remove the call to startServer() if not needed
// startServer();