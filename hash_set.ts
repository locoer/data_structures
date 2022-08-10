//Hash Table Data Structure

class HashSet {
  /*
   * Can set a number of buckets for the hash table
   * Set for one value (key), it can be modified to store key - value pairs
   * 
  */
  size : number;
  object : {
      [key: number] : (number | string)[]
  }
  constructor(size: number = 5) {
      this.size = size
      this.object = {}
  }
  
  // Creates the hash for the hash table object with the size of buckets
  createHash( key : number ): number {
      return (key % this.size)
  }

  add(key: number): void {
      //checks it doesn't exist
      if ( this.contains(key) ) return
      
      //creates hash and stores the value
      let hash = this.createHash(key)
      
      //checks if hash and array exists, if not it initializes it
      if( !this.object.hasOwnProperty(hash) ) this.object[hash] = []
      //stores the value in the array
      this.object[hash].push(key)

  }

  remove(key: number): void {
      //checks it doesn't exist
      if ( !this.contains(key) ) return
      //gets hash
      let values = this.object[ this.createHash(key) ]
      values.splice(values.indexOf(key), 1)
  }

  //Checks if a value exists in the hash table object
  contains(key: number): boolean {
      let hash = this.createHash(key)
      //checks hash
      if( !this.object.hasOwnProperty(hash) ) return false
      
      //checks key
      if( this.object[hash].find( val => val === key ) ) return true
      
      return false

  }
}