const fs = require('fs');
const path = require('path');

const root = process.cwd();
const readmePath = path.join(root, 'README.md');
const startMarker = '<!-- DIRECTORY_START -->';
const endMarker = '<!-- DIRECTORY_END -->';

function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/<title>([^<]+)<\/title>/i);
    if (match) {
      return match[1]
        .replace(/&mdash;/g, '\u2014')
        .replace(/&ndash;/g, '\u2013')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code))
        .replace(/\|/g, ',')
        .trim();
    }
  } catch (e) {
    // fall through
  }
  return null;
}

const files = fs.readdirSync(root, { withFileTypes: true })
  .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b));

const list = files.length
  ? files
      .map(file => {
        const title = getTitle(path.join(root, file)) || file.replace(/\.html$/i, '');
        return `- [${title}](./${encodeURI(file)})`;
      })
      .join('\n')
  : '_No HTML demos found in this folder._';

const readme = fs.readFileSync(readmePath, 'utf8');

if (!readme.includes(startMarker) || !readme.includes(endMarker)) {
  throw new Error('README.md must contain DIRECTORY_START and DIRECTORY_END markers.');
}

const updated = readme.replace(
  new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
  `${startMarker}\n${list}\n${endMarker}`
);

fs.writeFileSync(readmePath, updated);
console.log('README updated with', files.length, 'demos');
