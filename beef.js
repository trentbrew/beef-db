#!/usr/bin/env node

// In-memory "DB"
let db = { packages: {} }; // key: id → value: record

// Parse
const argv = process.argv;
const cmd = argv[2];
const a = argv[3];
const b = argv[4];
const c = argv[5];
const d = argv[6];

// Tiny id
const id = 'pkg_' + Date.now().toString(36);

// Helpers without loops/functions:
const print = (x) =>
  console.log(typeof x === 'string' ? x : JSON.stringify(x, null, 2));

// Manual/help renderer
const { renderManual } = require('./utils/manual');

if (!cmd || cmd === 'help') {
  print(renderManual());
  process.exit(0);
}

if (cmd === 'add') {
  // Required: cut, qty, weightLb, locationId
  if (!a || !b || !c || !d) {
    print('Usage: beef add <cut> <qty> <weightLb> <locationId>');
    process.exit(1);
  }
  const record = {
    id,
    cut: String(a),
    qty: Number(b),
    weightLb: Number(c),
    locationId: String(d),
    state: 'frozen',
    packedOn: new Date().toISOString().slice(0, 10),
  };
  db.packages[id] = record;
  print({ ok: true, id });
  process.exit(0);
}

if (cmd === 'read') {
  const rec = db.packages[a];
  if (!rec) {
    print('Not found');
    process.exit(1);
  }
  print(rec);
  process.exit(0);
}

if (cmd === 'update') {
  const rec = db.packages[a];
  if (!rec) {
    print('Not found');
    process.exit(1);
  }
  // update <id> qty <n>  OR  update <id> weight <n>
  if (b === 'qty') {
    rec.qty = Number(c);
  } else if (b === 'weight') {
    rec.weightLb = Number(c);
    if (rec.weightLb <= 0.05) rec.state = 'consumed';
  } else {
    print('Usage: beef update <id> qty <n> | weight <n>');
    process.exit(1);
  }
  print({
    ok: true,
    id: rec.id,
    qty: rec.qty,
    weightLb: rec.weightLb,
    state: rec.state,
  });
  process.exit(0);
}

if (cmd === 'delete') {
  if (!db.packages[a]) {
    print('Not found');
    process.exit(1);
  }
  delete db.packages[a];
  print({ ok: true, id: a });
  process.exit(0);
}

if (cmd === 'list') {
  // No loops: just dump the object for now.
  print(db.packages);
  process.exit(0);
}

// Fallback
print('Unknown command. Try: beef help');
process.exit(1);

/* =========================
   TODOs (for study sessions)
   1) Replace positional args with flags like --cut=, --qty= (will require a tiny loop).
   2) Add an "events" log (add/move/consume) as a plain array and print it in `read`.
   3) Persist db: read/write a db.json file (JSON.stringify / JSON.parse with fs).
   4) Extract repeated code into small functions (after she learns functions).
   5) Replace the object-map with an array and write your first loop to print rows nicely.
   6) Add validation (numbers only, positive, etc).
   7) Add a "move" command: move <id> <newLocationId>.
   8) Make "list" show only not-consumed records (conditionals).
   ========================= */
