// Simple ANSI color helpers for CLI output
// Usage: const { cyan, yellow, green, bold } = require('./utils/highlight');

const wrap = (codeStart, codeEnd = '\x1b[0m') => (s) => `${codeStart}${s}${codeEnd}`;

const cyan = wrap('\x1b[36m');
const yellow = wrap('\x1b[33m');
const green = wrap('\x1b[32m');
const bold = wrap('\x1b[1m');

module.exports = { cyan, yellow, green, bold };

