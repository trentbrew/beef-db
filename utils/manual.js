// Renders the CLI manual/help text
const { cyan, yellow, green, bold } = require('./highlight');

function renderManual() {
  return (
    bold('=========================\n') +
    bold('🥩 BEEF INVENTORY MANUAL\n') +
    bold('=========================\n\n') +
    'This is the manual for the Beef Inventory CLI app.\n' +
    'Use the following commands to manage your beef packages:\n\n' +
    cyan('  beef help\n') +
    '    Show this manual.\n\n' +
    cyan('  beef add ') +
    yellow('<cut> <qty> <weightLb> <locationId>\n') +
    '    Add a new beef package.\n' +
    '    Example: ' +
    green('beef add "ribeye" 2 1.5 "freezer_a"\n\n') +
    cyan('  beef read ') +
    yellow('<id>\n') +
    '    Show details for a specific package.\n' +
    '    Example: ' +
    green('beef read pkg_abc123\n\n') +
    cyan('  beef update ') +
    yellow('<id> qty <newQty>\n') +
    '    Update the quantity for a package.\n' +
    '    Example: ' +
    green('beef update pkg_abc123 qty 1\n\n') +
    cyan('  beef update ') +
    yellow('<id> weight <newWeightLb>\n') +
    '    Update the weight for a package.\n' +
    '    (If weight ≤ 0.05 lbs, marks as consumed.)\n' +
    '    Example: ' +
    green('beef update pkg_abc123 weight 0.03\n\n') +
    cyan('  beef delete ') +
    yellow('<id>\n') +
    '    Delete a package.\n' +
    '    Example: ' +
    green('beef delete pkg_abc123\n\n') +
    cyan('  beef list\n') +
    '    List all packages.\n\n' +
    bold('-------------------------')
  );
}

module.exports = { renderManual };
