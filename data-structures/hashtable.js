class HashTable {
  constructor(v) {
    this.storage = [];
    this.volume = v
  }

  hash(key) {
    let k = 0;
    for (let i = 0; i < key.length; i++) {
      k += key.charCodeAt(i);
    }

    return k % (this.volume + 1);
  }

  add(item) {
    if (!item || !item.length === 2) throw new Error('item to add must be key value pair');
    const key = item[0];
    const index = this.hash(key);
    let added = false;
    if (this.storage[index] === undefined) {
      this.storage[index] = [item];
      added = true;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = item[1];
          added = true;
          break;
        }
      }

    }
    if (!added) this.storage[index].push(item);
    console.log(`${item} added`)
  }

  remove(key) {
    const index = this.hash(key);
    let removed = false;
    if (this.storage[index] && this.storage[index].length) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
          console.log(`${key} removed`);
          removed = true;
          if (!this.storage[index].length) delete this.storage[index]
          break;
        }
      }
    }
    if (!removed) console.log(`${key} not removed because it was not found`);
  }

  lookup(key) {
    const index = this.hash(key);
    if (this.storage[index] && this.storage[index].length) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          console.log(`found: ${this.storage[index][i]}`);
          break;
        }
      }
    } else {
      console.log(`${key} not found`)
    }
  }

  printTable() {
    console.log(this.storage);
  }
}

// create new hash table
const aHashTable = new HashTable(5)

// add item to table
aHashTable.add(['jasmin', 'hello']);
aHashTable.add(['los angeles', 'california']);
aHashTable.add(['portland', 'oregon']);
aHashTable.add(['brooklyn', 'new york']);
aHashTable.add(['costa mesa', 'california']);
aHashTable.add(['tucson', 'arizona']);

// overwrite item in table
aHashTable.add(['jasmin', 'heeey'])

// add collision item
aHashTable.add(['nimsaj', 'whoa'])

// remove item
aHashTable.remove('nimsaj')
aHashTable.remove('jasmin')
aHashTable.add(['jasmin', 'hello again'])
// remove non existent item
aHashTable.remove('las vegas')

// lookup item
aHashTable.lookup('jasmin')
aHashTable.lookup('portland')
aHashTable.lookup('not here')

// print the hash table we have so far
aHashTable.printTable();
