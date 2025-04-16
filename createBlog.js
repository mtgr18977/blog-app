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

// Function to initialize the Express server
// Remove the first mainTemplate and cssContent declarations at the top
// Keep only the ones inside initServer()

// Inside initServer(), update the CSS content
// At the top of the file, after the directory creation
// Write CSS file first
const cssPath = path.join(PUBLIC_FOLDER, 'style.css');
fs.writeFileSync(cssPath, cssContent, 'utf8');

// Remove the CSS writing from initServer()
function initServer() {
  // Set static folder
  app.use(express.static(PUBLIC_FOLDER));
  
  // Homepage route
  // Add at the top with other constants
  const POSTS_PER_PAGE = 10;
  
  // Update the homepage route
  app.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);
    
    const paginatedPosts = postsData.slice(startIndex, endIndex);
    
    const postListHTML = `
      <div class="post-list">
        ${paginatedPosts.map(post => {
          const postDate = new Date(post.date);
          const displayDate = isNaN(postDate.getTime()) ? new Date('1983-01-01') : postDate;
    
          return `
            <div class="post-item">
              <h3 class="post-title">
                <a href="/post/${post.slug}">${post.title}</a>
              </h3>
              <div class="post-date">
                ${displayDate.toLocaleDateString('pt-BR')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="pagination">
        <ul class="pagination-list">
          ${page > 1 ? `<li><a href="/?page=${page - 1}" class="pagination-link">&larr; Previous</a></li>` : ''}
          ${Array.from({ length: totalPages }, (_, i) => i + 1).map(num => 
            num === page
              ? `<li><span class="pagination-current">${num}</span></li>`
              : `<li><a href="/?page=${num}" class="pagination-link">${num}</a></li>`
          ).join('')}
          ${page < totalPages ? `<li><a href="/?page=${page + 1}" class="pagination-link">Next &rarr;</a></li>` : ''}
        </ul>
      </div>
    `;
    
    const renderedPage = renderTemplate(
      fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8'),
      {
        pageTitle: 'Blog Home',
        content: postListHTML
      }
    );
    
    res.send(renderedPage);
  });
  
  // Individual post route
  app.get('/post/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = postsData.find(p => (p.slug === slug || p.id === slug));
    
    if (!post) {
      return res.status(404).send('Post not found');
    }
    
    const postHTML = `
      <article>
        <h2>${post.title}</h2>
        <div class="post-date">
          ${new Date(post.publishedDate).toLocaleDateString('pt-BR')}
        </div>
        <div class="post-content">
          ${post.content}
        </div>
        ${post.tags && post.tags.length > 0 ? `
          <div class="post-tags">
            <strong>Tags:</strong> ${post.tags.join(', ')}
          </div>
        ` : ''}
        <p><a href="/">&larr; Voltar para a lista de posts</a></p>
      </article>
    `;
    
    const renderedPage = renderTemplate(
      fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8'),
      {
        pageTitle: post.title,
        content: postHTML
      }
    );
    
    res.send(renderedPage);
  });
  
  // About page route
  app.get('/about', (req, res) => {
    const aboutHTML = `
      <h2>About This Person</h2>
      <p>Stay a while and listen.</p>
      <p>I'm a technical writer @ senhasegura, where I work with information security mainly. On my days off, I start projects I usually never finish. I can say that I'm a communist programmer with a background in many fields of IT, linguistics, and literature.</p>
      <br><h3>Some Projects</h3><br>
      <ul>
        <li>I am trying to be a contributor to the Techscriptor, an app that tries to be the free and open source Hemingway App developed by Constantin Brîncoveanu.</li>
        <li>I am also trying to keep developing the Podrain app. This is a PWA podcast app developed by Joe Sweeney.</li>
        <li>If you'd like, you can access my collection of everyday use "tools". These tools include simple JS scripts that can help you save time (along with the Podrain app and a random number generator for lotteries). Feel free to visit Paulo Duarte Tools @ Netlify.</li>
        <li>I'm a hobbyist game-dev also. You can check a few games I made here and here at itch.io (unity ones).</li>
        <li>From the Techscriptor project, I made a pt-BR editor. I called Verbalize and you can check the post here, the live version here and the source-code here.</li>
        <li>If you want, you can check my portfolio/CV here.</li>
      </ul>
    `;
    
    const renderedPage = renderTemplate(
      fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8'),
      {
        pageTitle: 'About',
        content: aboutHTML
      }
    );
    
    res.send(renderedPage);
  });
  
  // Search route
  app.get('/search', (req, res) => {
    const query = req.query.q?.toLowerCase();
    
    if (!query) {
      return res.redirect('/');
    }
    
    const filteredPosts = postsData.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
    );
    
    const searchResultsHTML = `
      <h2>Resultados da busca: "${query}"</h2>
      
      ${filteredPosts.length === 0 ? '<p>Nenhum resultado encontrado.</p>' : `
        <div class="post-list">
          ${filteredPosts.map(post => `
            <div class="post-item">
              <h3 class="post-title">
                <a href="/post/${post.slug || post.id}">${post.title}</a>
              </h3>
              <div class="post-date">
                ${new Date(post.publishedDate).toLocaleDateString('pt-BR')}
              </div>
            </div>
          `).join('')}
        </div>
      `}
      
      <p><a href="/">&larr; Voltar para a lista de posts</a></p>
    `;
    
    const renderedPage = renderTemplate(
      fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8'),
      {
        pageTitle: `Search: ${query}`,
        content: searchResultsHTML
      }
    );
    
    res.send(renderedPage);
  });
  
  // Start the server
  // Remove the app.listen call from here
}

// Function to create server with automatic port handling
function startServer() {
  // Initialize the Express server with all routes
  initServer();

  // Create server instance without immediately binding to port
  const server = require('http').createServer(app);

  // Error handler for the server
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is already in use. Trying on port ${PORT + 1}...`);
      // Try the next port by incrementing by 1
      setTimeout(() => {
        server.close();
        // Try next port
        process.env.PORT = Number(PORT) + 1;
        startServer();
      }, 1000);
    } else {
      console.error('Server error:', error);
      process.exit(1);
    }
  });

  // Try to listen on the specified port
  const currentPort = process.env.PORT || PORT;
  server.listen(currentPort, () => {
    console.log(`Blog server running at http://localhost:${currentPort}`);
    console.log(`Total posts loaded: ${postsData.length}`);
  });
}

// Start the server
startServer();