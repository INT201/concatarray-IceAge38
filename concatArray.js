const { template } = require('@babel/core')

function concatArray(array1, array2) {

if(array1 === null && array2 === null){return undefined}
if (array1 === undefined || array2 === undefined ||array1 === null || array2 === null){
  if (array1 != 0 && array2 === null ){
        return array1
      }else if (array1 === undefined && array2 != 0){
            return array2
          } return undefined
  }
  if(array1 != 0 || array2 != 0){
    return   array1.concat(array2)
  }
if(array1.length === 0 || array2.length != 0){
  return array2
}
if(array1.length != 0 || array2.length === 0){
  return array1
}
if(array1.length === 0 || array2.length === 0){
  return []
}
}

// console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
// console.log(concatArray([ ], ['item1', 'item2', 'item3']))
// console.log(concatArray([10, 6, 5], []))
// console.log(concatArray([],[]))
// console.log(concatArray(undefined, [2, 4, 6, 7]))             //
// console.log(concatArray([2, 4, 6, 7], null))                  //
// console.log(concatArray(undefined, undefined) )           
// console.log(concatArray(null, undefined) )
// console.log(concatArray(undefined, null) )
// console.log(concatArray(null, null) )
module.exports = concatArray
