# 🥩 Beef Inventory App

A simple CLI app for tracking meat inventory - perfect for learning basic programming concepts!

## What This App Does

Track cuts of beef with:

- **Cut type** (e.g., "ribeye", "ground_beef")
- **Quantity** (number of packages)
- **Weight** (in pounds)
- **Location** (freezer location)
- **State** (frozen/consumed)
- **Packed date**

## Quick Start

```bash
# See all available commands
node beef.js help

# Add some meat
node beef.js add "ribeye" 2 1.5 "freezer_a"

# Check what you have
node beef.js list

# Read details of a specific package
node beef.js read pkg_abc123

# Update quantity
node beef.js update pkg_abc123 qty 1

# Update weight (auto-marks as consumed if ≤ 0.05 lbs)
node beef.js update pkg_abc123 weight 0.03

# Delete a package
node beef.js delete pkg_abc123
```

## Demo the Full Flow

Run this to see all CRUD operations in action:

```bash
node test_beef.js
```

## Learning Notes

### What You're Using Now

- **Data types**: strings, numbers, objects
- **Conditionals**: if/else statements
- **Positional arguments**: `process.argv[2]`, `process.argv[3]`, etc.
- **Basic CRUD**: Create, Read, Update, Delete

### What You'll Learn Next

1. **Loops** - to parse command flags and print nice tables
2. **Functions** - to avoid repeating code
3. **File I/O** - to save data between sessions
4. **JSON** - to store and load data

### Current Limitations

- Data disappears when you close the terminal (in-memory only)
- No pretty formatting for the list command
- Basic error handling

## Example Session

```bash
# Add some meat
$ node beef.js add "ribeye" 2 1.5 "freezer_a"
{ "ok": true, "id": "pkg_mf1mlwjh" }

# Add more
$ node beef.js add "ground_beef" 1 0.75 "freezer_b"
{ "ok": true, "id": "pkg_mf1mlwja" }

# See what you have
$ node beef.js list
{ "pkg_mf1mlwjh": { ... }, "pkg_mf1mlwja": { ... } }

# Update quantity
$ node beef.js update pkg_mf1mlwjh qty 1
{ "ok": true, "id": "pkg_mf1mlwjh", "qty": 1, "weightLb": 1.5, "state": "frozen" }
```

## Next Steps (When You're Ready!)

Check the TODOs in `beef.js` for your next learning challenges:

1. Add command flags (--cut=, --qty=)
2. Save data to a file
3. Make the list command prettier
4. Add validation
5. Add a "move" command

Happy coding! 🚀
