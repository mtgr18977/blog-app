// createBlog.js
// Script to create a blog with the extracted posts

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { marked } = require('marked');

// Configurar o marked para respeitar quebras de linha
marked.setOptions({
  mangle: false,
  breaks: true,    // Respeitar quebras de linha simples
  gfm: true,       // GitHub Flavored Markdown
  headerIds: false // Opcional: remove IDs automáticos dos headers
});

try {
  // Configurações
  const BUILD_FOLDER = path.join(__dirname, 'build');
  const POSTS_FOLDER = path.join(__dirname, 'posts');
  const TEMPLATES_FOLDER = path.join(__dirname, 'templates');
  const PUBLIC_FOLDER = path.join(__dirname, 'public');



  // Criar diretórios necessários
  [BUILD_FOLDER, POSTS_FOLDER, TEMPLATES_FOLDER].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Serve static files from public directory
  app.use(express.static(PUBLIC_FOLDER));
  
  // Create a route for about.html
  app.get('/about', (req, res) => res.sendFile(path.join(BUILD_FOLDER, 'about.html')));


  // Serve static files from build directory
  app.use(express.static(BUILD_FOLDER));
  // Configuration
  const POSTS_JSON_PATH = path.join(__dirname, 'posts', 'posts.json');

  // Configuração da paginação
  const POSTS_PER_PAGE = 6;



// Create main HTML template
  const mainTemplate = fs.readFileSync(path.join(TEMPLATES_FOLDER, 'main.html'), 'utf8');

  // Função para escapar chaves no conteúdo
  function escapeContent(content) {
    // Substitui { por \{ e } por \} apenas quando não são parte de uma variável de template
    return content.replace(/([^{]){([^{])/g, '$1\\{$2')
                  .replace(/([^}])}([^}])/g, '$1\\}$2');
}

// Add function to parse markdown files
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

  postsData = postsData.map(post => ({
    ...post,
    content: marked(escapeContent(post.content)) // Escapa as chaves antes de processar o markdown
  }));

  // Função para gerar arquivos estáticos
  function generateStaticFiles() {
    // Calcular número total de páginas
    const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

    // Gerar páginas de índice (index.html, page2.html, etc)
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      // Pegar posts para a página atual
      const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
      const endIndex = startIndex + POSTS_PER_PAGE;
      const currentPosts = postsData.slice(startIndex, endIndex);

      // Gerar HTML dos posts
      const postsHTML = currentPosts.map(post => `
        <article class="post-preview">
          <h2><a href="${post.slug}.html">${post.title}</a></h2>
          <div class="post-meta">
            <span class="post-date">${new Date(post.date).toLocaleDateString('pt-BR')}</span>
          </div>
          <div class="post-excerpt">
            ${post.content.substring(0, 200)}...
          </div>
          <a href="${post.slug}.html" class="read-more">Read more</a>
        </article>
      `).join('\n');

      // Gerar paginação
      const paginationHTML = `
        <nav class="pagination">
          ${currentPage > 1 ? `<a href="${currentPage === 2 ? 'index.html' : `page${currentPage-1}.html`}">←</a>` : ''}
          <span class="page-numbers">
            ${Array.from({length: totalPages}, (_, i) => i + 1)
              .map(pageNum => `
                <a href="${pageNum === 1 ? 'index.html' : `page${pageNum}.html`}" 
                  class="${pageNum === currentPage ? 'current' : ''}">${pageNum}</a>
              `).join('')}
          </span>
          ${currentPage < totalPages ? `<a href="page${currentPage+1}.html">→</a>` : ''}
        </nav>
      `;

      // Gerar página completa
      const pageHTML = renderTemplate(mainTemplate, {
        pageTitle: `Blog - Here be dragons ${currentPage > 1 ? `- Página ${currentPage}` : ''}`,
        content: `
          <div class="content-container">
            <h1>Últimos Posts</h1>
            <div class="posts-list">
              ${postsHTML}
            </div>
            ${paginationHTML}
          </div>
        `
      });

      // Salvar arquivo
      const fileName = currentPage === 1 ? 'index.html' : `page${currentPage}.html`;
      fs.writeFileSync(path.join(BUILD_FOLDER, fileName), pageHTML, 'utf8');
    }

    // Gerar páginas individuais dos posts
  postsData.forEach(post => {
    const postHTML = renderTemplate(mainTemplate, {
      pageTitle: post.title,
        content: `
          <article class="post-content">
            <h1>${post.title}</h1>
            <div class="post-meta">
              <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('pt-BR')}</time>
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
<div class="content-container">
  <h1>Sobre</h1>
  <div class="about-text">
    <p>Este é um blog pessoal onde compartilho pensamentos e reflexões sobre tecnologia, política, sociedade e outros temas.</p>

    <h2>O nome do blog</h2>
    <p>"Here be dragons" é uma frase que cartógrafos medievais usavam para marcar territórios inexplorados em seus mapas. Hoje, uso essa expressão como metáfora para explorar ideias e temas diversos.</p>

    <h2>Contato</h2>
    <p>Você pode me encontrar em:</p>

    <ul class="contact-list">
      <li>
        <a href="https://github.com/mtgr18977" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Paulo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </li>
      <li>
        <a href="mailto:paulo@paulogpd.com.br" aria-label="Enviar email para Paulo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
          Email
        </a>
      </li>
      <li>
        <a href="https://bsky.app/profile/paulogpd.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="BlueSky de Paulo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.68 14.77c-1.32.84-3.03 1.34-4.87 1.47-.1-.42-.17-.86-.17-1.31 0-.24.02-.48.05-.71 1.74-.15 3.33-.62 4.63-1.35.64-.36 1.24-.81 1.79-1.35.58-.57.98-1.26 1.19-2.02.2-.74.2-1.53.02-2.3-.19-.8-.56-1.55-1.08-2.2-.54-.67-1.23-1.24-2.03-1.67-.8-.43-1.7-.7-2.68-.79-.23-.02-.46-.04-.7-.04s-.47.02-.7.04c-.98.09-1.88.36-2.68.79-.8.43-1.49 1-2.03 1.67-.52.65-.89 1.4-1.08 2.2-.17.77-.18 1.56.02 2.3.21.76.61 1.45 1.19 2.02.55.54 1.15.99 1.79 1.35 1.3.73 2.89 1.2 4.63 1.35.03.23.05.47.05.71 0 .45-.07.89-.17 1.31-1.84-.13-3.55-.63-4.87-1.47C6.5 16.11 5.25 14.7 4.58 13.03c-.14-.35-.26-.71-.36-1.08-.09-.36-.15-.72-.19-1.1-.04-.37-.06-.75-.06-1.13s.02-.76.06-1.13c.04-.38.1-.74.19-1.1.1-.37.22-.73.36-1.08C5.25 5.3 6.5 3.89 8.32 3.23c.36-.13.73-.25 1.11-.34.37-.09.74-.15 1.12-.19C10.92 2.66 11.29 2.6 11.68 2.6c.38 0 .76.02 1.13.06.38.04.75.1 1.12.19.38.09.75.21 1.11.34 1.82.66 3.07 2.07 3.74 3.74.14.35.26.71.36 1.08.09.36.15.72.19 1.1.04.37.06.75.06 1.13s-.02.76-.06 1.13c-.04.38-.1.74-.19 1.1-.1.37-.22.73-.36 1.08-.67 1.67-1.92 3.08-3.74 3.74z"/>
           </svg>
          BlueSky
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  .contact-list {
    list-style: none; /* Remove os marcadores padrão da lista */
    padding-left: 0;  /* Remove o padding padrão à esquerda */
  }

  .contact-list li {
    margin-bottom: 10px; /* Espaço entre os itens da lista */
  }

  .contact-list a {
    display: inline-flex; /* Alinha o ícone e o texto na mesma linha */
    align-items: center;  /* Centraliza verticalmente o ícone e o texto */
    text-decoration: none; /* Garante que não haja sublinhado */
    color: var(--link-color); /* Usa a variável de cor do link definida anteriormente */
    gap: 8px; /* Espaço entre o ícone e o texto */
  }

  .contact-list a:hover {
    color: var(--link-hover-color); /* Usa a variável de cor do link ao passar o mouse */
  }

  .contact-list a svg {
    width: 20px;  /* Tamanho do ícone */
    height: 20px; /* Tamanho do ícone */
    fill: currentColor; /* Faz o SVG herdar a cor do link (incluindo no hover) */
  }
</style>
      `
    });

    // Salvar arquivo about.html
    fs.writeFileSync(path.join(BUILD_FOLDER, 'about.html'), aboutHTML, 'utf8');

  console.log('Static files generated successfully.');
}

  // Gerar arquivos estáticos
generateStaticFiles();

  // Iniciar servidor apenas em desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
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
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Função para renderizar templates
function renderTemplate(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] || match;
  });
}