/**
 * @param {number} capacity
 */
class Cache {
  contructor(cap) {
    this.mem = new Array(cap)
    this.lastUsed = 0 //defualt to 0

  }
  get(key) {
    return this.mem[key] || -1
  }
  set(key) {
    // if the key is already exists
    if (this.mem[key]) {
      this.mem[key] = key
    }
    
  }
}

var LFUCache = function(capacity) {

}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */