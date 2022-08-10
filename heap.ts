//Max and Min Heap Class

class Heap {
  /* binary tree in array representation where each left child is "2*idx + 1" 
   * and right child is "2*idx + 2". Parent is "(idx-1)/2"
  */
  heapArray : number [];
  type: "max" | "min";

  constructor (nums : number[] = [], type : "max" | "min" = "max") {
    this.type = type
    this.heapArray = []
    if ( nums.length > 0 ){
      nums.forEach( num => this.insertItem(num) )
    }
  }
  get top() : number {
    return this.heapArray.length > 0 ? this.heapArray[0] : 0
  }

  insertItem (num : number) : boolean {
    this.heapArray.push(num)
    this.heapifyUp()
    return true
  }

  removeTop() : number | undefined { 
    const topValue = this.heapArray[0]
    const lastIdx = this.heapArray.length - 1
    //Swaps Values with the last item
    this.heapArray[0] = this.heapArray[ lastIdx]
    this.heapArray[lastIdx] = topValue
    const returnValue = this.heapArray.pop()
    this.heapifyDown()
    return returnValue
  }

  heapifyUp() : void {
    /* Traverse the binary tree from most bottom-right value to the top
     * and swaps the value according to the max or min type
     * parent index = (idx -1) / 2
    */
    let index : number = this.heapArray.length - 1
    const currentValue : number = this.heapArray[index]

    while( index > 0 ) {
      let parentIdx : number = Math.floor( (index - 1) / 2 )
      let parentValue : number = this.heapArray[parentIdx]
      if( this.type === "max" ) {
        if( currentValue >= parentValue ) {
          this.heapArray[parentIdx] = currentValue
          this.heapArray[index] = parentValue
          index = parentIdx
        } else {
          break;
        }
      } else {
        if( currentValue <= parentValue ) {
          this.heapArray[parentIdx] = currentValue
          this.heapArray[index] = parentValue
          index = parentIdx
        } else {
          break;
        }
      }
    }
  }

  heapifyDown() : void {
    /* Traverse the binary tree from top to bottom and
     * swaps the value according to the max or min type
     * Left child index = (2 * idx) + 1
     * Right child index = (2 * idx) + 2
    */
     let index : number = 0
     const currentValue : number = this.heapArray[index]
     const length = this.heapArray.length
 
     while( index < length ) {
       let leftChildIdx : number = (2 * index) + 1
       let rightChildIdx : number = (2 * index) + 2
       let leftValue : number
       let rightValue : number
       let swapIdx : number | null = null

      if( this.type === "max" ) {
        if( leftChildIdx < length ) {
          leftValue = this.heapArray[leftChildIdx]
          if( currentValue < leftValue ) { //checks left child
            swapIdx = leftChildIdx
          }
          if( rightChildIdx < length ) {
            rightValue = this.heapArray[rightChildIdx]
            if( 
              (swapIdx === null && currentValue < rightValue ) ||
              (swapIdx !== null && leftValue < rightValue) //validates if left swap can be made, if not make right swap
              ) {
              swapIdx = rightChildIdx
            }
          }
        }  
      } 
      else { //type === "min"
        if( leftChildIdx < length ) {
          leftValue = this.heapArray[leftChildIdx]
          if( currentValue > leftValue ) { //checks left child
            swapIdx = leftChildIdx
          }
          if( rightChildIdx < length ) {
            rightValue = this.heapArray[rightChildIdx]
            if( 
              (swapIdx === null && currentValue > rightValue ) ||
              (swapIdx !== null && leftValue > rightValue) //validates if left swap can be made, if not make right swap
              ) {
              swapIdx = rightChildIdx
            }
          }
        }
       }

       if( swapIdx === null ) break
       this.heapArray[index] = this.heapArray[swapIdx]
       this.heapArray[swapIdx] = currentValue
       index = swapIdx
       
     }
  }
}