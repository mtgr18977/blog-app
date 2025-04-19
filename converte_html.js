const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

// Diretório onde os arquivos HTML estão localizados
const htmlDir = './medium-posts'; // Substitua pelo caminho correto
const markdownDir = './markdown-posts'; // Diretório de saída

// Certifique-se de que o diretório de saída existe
if (!fs.existsSync(markdownDir)) {
  fs.mkdirSync(markdownDir);
}

// Ler todos os arquivos HTML no diretório
fs.readdirSync(htmlDir).forEach(file => {
  if (path.extname(file) === '.html') {
    const htmlContent = fs.readFileSync(path.join(htmlDir, file), 'utf-8');
    const markdownContent = turndownService.turndown(htmlContent);

    // Salvar o conteúdo convertido como Markdown
    const markdownFile = path.join(markdownDir, `${path.basename(file, '.html')}.md`);
    fs.writeFileSync(markdownFile, markdownContent, 'utf-8');
    console.log(`Converted: ${file} -> ${markdownFile}`);
  }
});