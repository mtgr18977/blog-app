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
const BUILD_FOLDER = path.join(__dirname, 'build');
const CSS_FILE = path.join(BUILD_FOLDER, 'style.css');

// Create necessary directories
if (!fs.existsSync(TEMPLATES_FOLDER)) {
  fs.mkdirSync(TEMPLATES_FOLDER, { recursive: true });
}
if (!fs.existsSync(PUBLIC_FOLDER)) {
  fs.mkdirSync(PUBLIC_FOLDER, { recursive: true });
}
if (!fs.existsSync(BUILD_FOLDER)) {
  fs.mkdirSync(BUILD_FOLDER, { recursive: true });
}

// Serve static files from build directory
app.use(express.static(BUILD_FOLDER));

// Create CSS file
const cssContent = `/* Reset and base styles */
:root {
  /* Cores */
  --primary-color: #0056b3;
  --primary-color-darker: #004085;
  --text-color: #212529;
  --text-color-light: #6c757d;
  --background-color-body: #f8f9fa;
  --background-color-container: #ffffff;
  --border-color-light: #dee2e6;
  --border-color-medium: #ced4da;
  --link-color: var(--primary-color);
  --link-hover-color: var(--primary-color-darker);

  /* Fontes */
  --font-family-sans: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-family-serif: 'Merriweather', 'Georgia', serif;

  /* Tamanhos e Espaçamentos */
  --base-font-size: 1rem;
  --line-height-base: 1.6;
  --line-height-content: 1.75;
  --spacing-unit: 1rem;
  --container-max-width: 1100px;

  /* Outros */
  --border-radius-base: 6px;
  --border-radius-small: 4px;
  --shadow-base: 0 2px 10px rgba(0, 0, 0, 0.075);
  --transition-speed: 0.25s;
}

/* Reset e Base */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family-sans);
  line-height: var(--line-height-base);
  color: var(--text-color);
  background-color: var(--background-color-body);
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-unit);
}

/* Header */
header {
  background-color: var(--background-color-container);
  padding: calc(var(--spacing-unit) * 1.5);
  margin-bottom: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius-base);
  box-shadow: var(--shadow-base);
}

.title-container h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: var(--font-family-serif);
}

.nav-container {
  margin: 1rem 0;
  text-align: center;
}

nav a {
  color: var(--link-color);
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  transition: color var(--transition-speed);
}

nav a:hover {
  color: var(--link-hover-color);
}

/* Search Form */
.search-container {
  margin: 1rem 0;
}

.search-form {
  display: flex;
  gap: 0.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.search-form input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color-medium);
  border-radius: var(--border-radius-small);
  font-size: 1rem;
}

.search-form button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

.search-form button:hover {
  background-color: var(--link-hover-color);
}

/* Posts List */
.posts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.post-preview {
  background-color: var(--background-color-container);
  border-radius: var(--border-radius-base);
  padding: 1.5rem;
  box-shadow: var(--shadow-base);
  transition: transform var(--transition-speed);
}

.post-preview:hover {
  transform: translateY(-5px);
}

.post-preview h2 {
  margin-bottom: 1rem;
  font-family: var(--font-family-serif);
}

.post-preview h2 a {
  color: var(--text-color);
  text-decoration: none;
  transition: color var(--transition-speed);
}

.post-preview h2 a:hover {
  color: var(--link-color);
}

.post-meta {
  color: var(--text-color-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-excerpt {
  color: var(--text-color);
  line-height: var(--line-height-content);
  margin-bottom: 1rem;
}

/* Estilos para imagens nos posts */
.post-excerpt img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius-base);
  margin: 0.5rem 0;
  display: block;
  box-shadow: var(--shadow-base);
}

/* Ajuste para posts sem imagens */
.post-excerpt p {
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* Ajuste para blockquotes nos excerpts */
.post-excerpt blockquote {
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-left: 3px solid var(--primary-color);
  background-color: rgba(52, 152, 219, 0.1);
  font-style: italic;
}

.read-more {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-small);
  transition: background-color var(--transition-speed);
}

.read-more:hover {
  background-color: var(--link-hover-color);
  color: white;
  text-decoration: none;
}

/* Content Container */
.content-container {
  background-color: var(--background-color-container);
  border-radius: var(--border-radius-base);
  padding: 2rem;
  box-shadow: var(--shadow-base);
}

/* Responsive Design */
@media (max-width: 768px) {
  :root {
    --base-font-size: 0.9rem;
  }

  .container {
    padding: 0.5rem;
  }

  .posts-list {
    grid-template-columns: 1fr;
  }

  .title-container h1 {
    font-size: 2rem;
  }

  .search-form {
    flex-direction: column;
  }

  .search-form button {
    width: 100%;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #3498db;
    --primary-color-darker: #2980b9;
    --text-color: #ecf0f1;
    --text-color-light: #bdc3c7;
    --background-color-body: #1a1a1a;
    --background-color-container: #2d2d2d;
    --border-color-light: #404040;
    --border-color-medium: #505050;
  }
}

/* Estilos da paginação */
.pagination {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.prev-page,
.next-page {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  line-height: 1;
  background-color: var(--background-color-container);
  border: 1px solid var(--border-color-medium);
  border-radius: var(--border-radius-small);
  color: var(--text-color);
  text-decoration: none;
  transition: all var(--transition-speed);
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev-page:hover,
.next-page:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.page-numbers a {
  padding: 0.5rem 0.75rem;
  background-color: var(--background-color-container);
  border: 1px solid var(--border-color-medium);
  border-radius: var(--border-radius-small);
  color: var(--text-color);
  text-decoration: none;
  transition: all var(--transition-speed);
  min-width: 2.5rem;
  text-align: center;
}

.page-numbers a.current {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-numbers a:hover:not(.current) {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Responsividade da paginação */
@media (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .page-numbers {
    order: 2;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  .prev-page {
    order: 1;
  }

  .next-page {
    order: 3;
  }
}

/* Para telas muito pequenas */
@media (max-width: 480px) {
  .page-numbers a:not(.current) {
    display: none;
  }

  .page-numbers a.current {
    display: inline-block;
  }
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-text {
  line-height: 1.8;
}

.about-text h1 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-family: var(--font-family-serif);
}

.about-text h2 {
  color: var(--text-color);
  margin: 2rem 0 1rem;
  font-family: var(--font-family-serif);
}

.about-text p {
  margin-bottom: 1rem;
}

.about-text ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.about-text ul li {
  margin: 0.5rem 0;
}

.about-text a {
  color: var(--link-color);
  text-decoration: none;
  transition: color var(--transition-speed);
}

.about-text a:hover {
  color: var(--link-hover-color);
  text-decoration: underline;
}

/* Estilos para páginas de post individual */
.post-content {
  max-width: 800px;
  margin: 0 auto;
  font-family: var(--font-family-serif);
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-content h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.post-content .post-meta {
  font-family: var(--font-family-sans);
  color: var(--text-color-light);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color-light);
}

.post-content p {
  margin-bottom: 1.5rem;
}

.post-content a {
  color: var(--link-color);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color var(--transition-speed);
}

.post-content a:hover {
  color: var(--link-hover-color);
}

.post-content blockquote {
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  border-left: 4px solid var(--primary-color);
  background-color: var(--background-color-body);
  font-style: italic;
  border-radius: 0 var(--border-radius-base) var(--border-radius-base) 0;
}

.post-content blockquote p:last-child {
  margin-bottom: 0;
}

.post-content img {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius-base);
  margin: 2rem auto;
  display: block;
  box-shadow: var(--shadow-base);
}

.post-content hr {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid var(--border-color-light);
}

.post-content ul,
.post-content ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.post-content li {
  margin-bottom: 0.5rem;
}

.post-content code {
  font-family: monospace;
  background-color: var(--background-color-body);
  padding: 0.2rem 0.4rem;
  border-radius: var(--border-radius-small);
  font-size: 0.9em;
}

.post-content pre {
  background-color: var(--background-color-body);
  padding: 1.5rem;
  border-radius: var(--border-radius-base);
  overflow-x: auto;
  margin: 1.5rem 0;
}

.post-content pre code {
  background-color: transparent;
  padding: 0;
}

/* Responsividade para posts */
@media (max-width: 768px) {
  .post-content {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .post-content h1 {
    font-size: 2rem;
  }

  .post-content blockquote {
    padding: 1rem;
    margin: 1.5rem 0;
  }
}

/* Dark mode ajustes para posts */
@media (prefers-color-scheme: dark) {
  .post-content blockquote {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .post-content code {
    background-color: rgba(255, 255, 255, 0.05);
  }
}
`;

// Write CSS file to build directory
fs.writeFileSync(CSS_FILE, cssContent, 'utf8');

// Create main HTML template
const mainTemplate = fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8');

// Function to render template with content
function renderTemplate(template, data) {
  return template
    .replace(/{{pageTitle}}/g, data.pageTitle)
    .replace(/{{content}}/g, data.content);
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

// Função para gerar arquivos estáticos
function generateStaticFiles() {
  // Gerar HTML pages para cada post
  postsData.forEach(post => {
    const postHTML = renderTemplate(mainTemplate, {
      pageTitle: post.title,
      content: `
        <article class="post-content">
          <h1>${post.title}</h1>
          <div class="post-meta">
            <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          ${post.content}
        </article>
      `
    });
    
    fs.writeFileSync(path.join(BUILD_FOLDER, `${post.slug}.html`), postHTML, 'utf8');
  });

  // Gerar página About
  const aboutHTML = renderTemplate(mainTemplate, {
    pageTitle: 'About - Here be dragons',
    content: `
      <div class="about-content">
        <h1>Sobre</h1>
        <div class="about-text">
          <p>Este é um blog pessoal onde compartilho pensamentos e reflexões sobre tecnologia, política, sociedade e outros temas.</p>
          
          <h2>O nome do blog</h2>
          <p>"Here be dragons" é uma frase que cartógrafos medievais usavam para marcar territórios inexplorados em seus mapas. 
          Hoje, uso essa expressão como metáfora para explorar ideias e temas diversos.</p>
          
          <h2>Contato</h2>
          <p>Você pode me encontrar em:</p>
          <ul>
            <li><a href="https://github.com/seu-usuario">GitHub</a></li>
            <li><a href="https://twitter.com/seu-usuario">Twitter</a></li>
            <li>Email: seu-email@exemplo.com</li>
          </ul>
        </div>
      </div>
    `
  });

  // Salvar arquivo about.html
  fs.writeFileSync(path.join(BUILD_FOLDER, 'about.html'), aboutHTML, 'utf8');

  // Quando geramos o index.html, garantir que o conteúdo está sendo passado corretamente
  const indexHTML = renderTemplate(mainTemplate, {
    pageTitle: 'Blog - Here be dragons',
    content: `
      <div class="content-container">
        <h1>Últimos Posts</h1>
        <div class="posts-list">
          ${postsData.slice(0, 6).map(post => `
            <article class="post-preview">
              <h2><a href="${post.slug}.html">${post.title}</a></h2>
              <div class="post-meta">
                <span class="post-date">${new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div class="post-excerpt">
                ${post.content.substring(0, 200)}...
              </div>
              <a href="${post.slug}.html" class="read-more">Ler mais</a>
            </article>
          `).join('\n')}
        </div>
      </div>
    `
  });

  fs.writeFileSync(path.join(BUILD_FOLDER, 'index.html'), indexHTML, 'utf8');

  console.log('Static files generated successfully in the build directory.');
}

// Gerar arquivos estáticos
generateStaticFiles();

// Iniciar servidor apenas em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  // Function to create server with automatic port handling
  function startServer() {
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
} else {
  // Em produção, apenas gerar os arquivos e encerrar
  process.exit(0);
}