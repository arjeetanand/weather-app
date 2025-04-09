const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname); // adjust if needed
const outputFile = path.join(baseDir, 'mergedCodeTestFile.js');

const ignoreDirs = ['node_modules', '.git', 'build']; // folders to skip
const validExtensions = ['.js', '.jsx', '.ts', '.css'];

let mergedContent = '';

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!ignoreDirs.includes(file)) walkDir(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (validExtensions.includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        const code = fs.readFileSync(fullPath, 'utf8');
        mergedContent += `\n// ====== ${relativePath} ======\n${code}\n`;
      }
    }
  }
}

walkDir(baseDir);

// Save to one file
fs.writeFileSync(outputFile, mergedContent, 'utf8');
console.log(`✅ Merged code written to: ${outputFile}`);
