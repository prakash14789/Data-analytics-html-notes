// Table converter: Markdown → HTML for module lesson files
const fs = require('fs');

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function convertTablesToHTML(content) {
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect a table block: line contains at least one | separating content
    if (/^\s*\|.+\|/.test(line)) {
      // Collect all consecutive table lines
      const tableLines = [];
      while (i < lines.length && /^\s*\|.+\|/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }

      // Find separator row index
      let sepIdx = -1;
      for (let j = 0; j < tableLines.length; j++) {
        const cells = tableLines[j].split('|').slice(1, -1);
        const isSep = cells.length > 0 && cells.every(c => /^[\s\-:]+$/.test(c));
        if (isSep) { sepIdx = j; break; }
      }
      if (sepIdx === -1) sepIdx = 1;

      const headerRows = tableLines.slice(0, sepIdx);
      const bodyRows   = tableLines.slice(sepIdx + 1);

      const getCells = row => row.split('|').slice(1, -1).map(c => c.trim());

      let html = '<div class="table-wrapper"><table class="lesson-table">';

      // thead
      if (headerRows.length > 0) {
        html += '<thead>';
        headerRows.forEach(row => {
          html += '<tr>';
          getCells(row).forEach(c => { html += '<th>' + escapeHTML(c) + '</th>'; });
          html += '</tr>';
        });
        html += '</thead>';
      }

      // tbody
      if (bodyRows.length > 0) {
        html += '<tbody>';
        bodyRows.forEach(row => {
          html += '<tr>';
          getCells(row).forEach(c => { html += '<td>' + escapeHTML(c) + '</td>'; });
          html += '</tr>';
        });
        html += '</tbody>';
      }

      html += '</table></div>';
      result.push(html);
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}

const files = [
  'js/modules/module1_stats.js',
  'js/modules/module2_excel.js'
];

files.forEach(filePath => {
  const original = fs.readFileSync(filePath, 'utf8');
  const converted = convertTablesToHTML(original);
  fs.writeFileSync(filePath, converted, 'utf8');
  
  // Count conversions
  const tableCount = (converted.match(/<table class="lesson-table">/g) || []).length;
  console.log(`✅ ${filePath}: ${tableCount} tables converted to HTML`);
});

console.log('\nDone! All markdown tables are now proper HTML tables.');
