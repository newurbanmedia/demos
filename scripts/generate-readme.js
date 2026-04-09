const fs = require('fs');
const path = require('path');

const root = process.cwd();
const readmePath = path.join(root, 'README.md');

// Read each HTML file and extract its <title> tag
function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/<title>([^<]+)<\/title>/i);
    if (match) {
      // Decode HTML entities
      return match[1]
        .replace(/&mdash;/g, '\u2014')
        .replace(/&ndash;/g, '\u2013')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code))
        .trim();
    }
  } catch (e) {
    // fall through
  }
  return null;
}

const files = fs.readdirSync(root)
  .filter(file => file.endsWith('.html'))
  .sort((a, b) => a.localeCompare(b));

const list = files
  .map(file => {
    const title = getTitle(path.join(root, file)) || file.replace('.html', '');
    const encoded = file.replace(/ /g, '%20');
    return `- [${title}](${encoded})`;
  })
  .join('\n');

const readme = fs.readFileSync(readmePath, 'utf8');

const updated = readme.replace(
  /<!-- DIRECTORY_START -->[\s\S]*<!-- DIRECTORY_END -->/,
  `<!-- DIRECTORY_START -->\n${list}\n<!-- DIRECTORY_END -->`
);

fs.writeFileSync(readmePath, updated);
console.log('README updated with', files.length, 'demos');
