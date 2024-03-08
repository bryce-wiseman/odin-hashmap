class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}


class HashMap {
    constructor(num) {
        this.headNode = null
        this.size = num
        this.list = []
        for (let i = 0; i < this.size; i++) {
            this.list[i] = undefined
        }
    }

    //key to hash code
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += (key.charCodeAt(i) + 4)
  }
        return hashCode
    }

    //use key to write or overwrite new value
    set(key, value) {
        let nodeKey = this.hash(key)
        let nodeIndex = nodeKey % this.size
        let nodeVal = value
        this.list[nodeIndex] = new Node(nodeKey, nodeVal)
    }

    //takes key and returns associated value
    get(key) {
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                if (this.list[i].key == key) {
                return this.list[i].value
                }
            }
        }
    }

    //takes key and returns either true or false
    has(key) {
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                if (this.list[i].key == key) {
                return true
                }
            }
        }
        return false
    } 

    //if key exists exists in the hashmap, remove it and return true, else return false
    remove(key) {
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                if (this.list[i].key == key) {
                this.list.splice(i, 1, undefined)
                }
            }
        }
    }

    //returns length of hashmap
    length() {
        return this.size
    }

    //clears all data in hashmap
    clear() {
        for (let i = 0; i < this.size; i++) {
            this.list[i] = undefined
        }
        console.log(this.list)
    }

    //returns array of keys
    keys() {
        let keyArr = []
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                keyArr.push(this.list[i].key)
            }
        }
        return keyArr
    }

    //returns array of values
    values() {
        let valArr = []
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                valArr.push(this.list[i].value)
            }
        }
        return valArr
    }

    //returns array of each key:value pair
    entries() {
        let entryArr = []
        for (let i = 0; i < this.size; i++) {
            if (this.list[i] != undefined) {
                entryArr.push(`[${this.list[i].key}, ${this.list[i].value}]`)
            }
        }
        return entryArr
    }
}

// testing the functions
let HM = new HashMap(16)

console.log(HM)
console.log(HM.hash("hello"))

HM.set("hello", "hello world")
HM.set("here", "im here world")
HM.set("goodbye", "goodbye world")

console.log(HM.get(552))
console.log(HM.has(552))

HM.remove(552)
console.log(HM.length())

console.log(HM.keys())
console.log(HM.values())
console.log(HM.entries())