const fs = require('fs');
const path = require('path');

// Diretório onde os arquivos Markdown estão localizados
const markdownDir = './markdown-posts'; // Substitua pelo caminho correto
const cleanedDir = './cleaned-markdown'; // Diretório de saída para os arquivos limpos

// Certifique-se de que o diretório de saída existe
if (!fs.existsSync(cleanedDir)) {
  fs.mkdirSync(cleanedDir);
}

// Função para remover tudo acima do primeiro H1
function cleanMarkdownContent(content) {
  // Regex para encontrar o primeiro H1 (linha que começa com # ou ===)
  const firstH1Regex = /^(.*\n)*(.*\n={3,}|# .*)/m;

  // Capturar apenas o conteúdo a partir do primeiro H1
  const match = content.match(firstH1Regex);
  return match ? content.slice(content.indexOf(match[2])).trim() : content.trim();
}

// Processar todos os arquivos Markdown no diretório
fs.readdirSync(markdownDir).forEach(file => {
  if (path.extname(file) === '.md') {
    const markdownContent = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
    const cleanedContent = cleanMarkdownContent(markdownContent);

    // Salvar o conteúdo limpo
    const cleanedFile = path.join(cleanedDir, file);
    fs.writeFileSync(cleanedFile, cleanedContent, 'utf-8');
    console.log(`Cleaned: ${file} -> ${cleanedFile}`);
  }
});