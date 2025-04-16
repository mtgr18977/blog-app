const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Configuration
const CSV_FILE = path.join(__dirname, 'post_export.csv');
const POSTS_DIR = path.join(__dirname, 'posts');

// Create posts directory if it doesn't exist
if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
}

// Read and parse CSV file
const csvContent = fs.readFileSync(CSV_FILE, 'utf8');
Papa.parse(csvContent, {
  header: true,
  complete: (results) => {
    results.data.forEach(post => {
      if (!post.title || !post.content) return; // Skip empty posts

      // Create slug from title
      const slug = post.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove special characters
        .replace(/\s+/g, '_');    // Replace spaces with underscores

      // Create markdown content
      const markdown = `---
title: ${post.title}
date: ${post.publishedDate || new Date().toISOString()}
tags: ${post.tags ? JSON.stringify(post.tags.split(',').map(t => t.trim())) : '[]'}
---

${post.content}
`;

      // Write to file
      fs.writeFileSync(
        path.join(POSTS_DIR, `${slug}.md`),
        markdown,
        'utf8'
      );
    });

    console.log('Posts have been extracted and saved as markdown files!');
  },
  error: (error) => {
    console.error('Error parsing CSV:', error.message);
    process.exit(1);
  }
});
