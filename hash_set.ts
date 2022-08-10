//Hash Table Data Structure

class HashSet {
  //
  size : number;
  object : {
      [key: number] : (number | string)[]
  }
  constructor(size: number = 5) {
      this.size = size
      this.object = {}
  }
  
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

  contains(key: number): boolean {
      let hash = this.createHash(key)
      //checks hash
      if( !this.object.hasOwnProperty(hash) ) return false
      
      //checks key
      if( this.object[hash].find( val => val === key ) ) return true
      
      return false

  }
}