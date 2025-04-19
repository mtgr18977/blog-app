const fs = require('fs');
const path = require('path');

// Diretório onde os arquivos Markdown estão localizados
const POSTS_DIR = path.join(__dirname, 'posts');

// Função para verificar se o arquivo possui front matter
function hasFrontMatter(content) {
  return content.startsWith('---');
}

// Função para extrair o título do Markdown e remover do corpo
function extractAndRemoveTitle(content) {
  // Procura o primeiro título no formato "# Título" ou "Título\n==="
  const titleMatch = content.match(/^# (.+)|^(.+)\n={3,}/m);
  if (titleMatch) {
    const title = titleMatch[1] || titleMatch[2]; // Captura o título
    // Remove o título do corpo do conteúdo
    const updatedContent = content.replace(titleMatch[0], '').trim();
    return { title: title.trim(), content: updatedContent };
  }
  return { title: 'Untitled', content }; // Retorna "Untitled" se não encontrar título
}

// Função para adicionar ou atualizar o front matter
function addOrUpdateFrontMatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Verificar se o arquivo já possui front matter
  if (hasFrontMatter(content)) {
    // Atualizar o front matter existente
    const frontMatterEndIndex = content.indexOf('---', 3) + 3; // Posição do final do front matter
    const frontMatter = content.slice(0, frontMatterEndIndex);
    const bodyContent = content.slice(frontMatterEndIndex).trim();

    // Extrair o título do corpo
    const { title, content: updatedBody } = extractAndRemoveTitle(bodyContent);

    // Atualizar o front matter com o título extraído
    const updatedFrontMatter = frontMatter.replace(/title: .*/, `title: "${title}"`);
    const updatedContent = `${updatedFrontMatter}\n\n${updatedBody}`;

    // Sobrescrever o arquivo com o conteúdo atualizado
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Front matter atualizado: ${filePath}`);
  } else {
    // Adicionar novo front matter
    const { title, content: updatedBody } = extractAndRemoveTitle(content);

    // Criar o front matter
    const frontMatter = `---
title: "${title}"
date: ${new Date().toISOString()}
tags: []
---

`;

    // Adicionar o front matter ao conteúdo existente
    const finalContent = frontMatter + updatedBody;

    // Sobrescrever o arquivo com o conteúdo atualizado
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`Front matter adicionado: ${filePath}`);
  }
}

// Processar todos os arquivos Markdown no diretório
fs.readdirSync(POSTS_DIR).forEach(file => {
  const filePath = path.join(POSTS_DIR, file);
  if (path.extname(file) === '.md') {
    addOrUpdateFrontMatter(filePath);
  }
});

console.log('Todos os arquivos foram processados!');