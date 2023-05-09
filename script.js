/* The myReverse() method reverses an array in place and returns the reference
   to the same array */
Array.prototype.myReverse = function() {
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
        let tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
        i += 1;
        j -= 1;
    }
}
// let arr = [1,2,3];
// arr.myReverse();
// console.log(arr); -> [3,2,1]

/* The myPop() method removes the last element from an array and returns that element. 
   This method changes the length of the array. */
const myPop = function() {    
    if (this.length > 0) {
        return this[this.length-1];
        this.length -= 1;
    } else {
        return undefined;
    }
}
// const ar2 = [1,2,3,8];
// Array.prototype.myPop = myPop;
// console.log(ar2.myPop());


/* The myConcat() method can be used to merge two or more arrays.
   This method does not change the existing arrays, but instead returns a new array */
function myConcat(...arrays) {
    let answer = this;
    for (let i = 0; i < arrays.length; i++){
        const item = arrays[i];
        for (let j = 0; j <  item.length; j++) {
            answer.push(item[j]);
        }
    }
    return answer;
   
}
// const a = [1,2];
// const b = [4,5];
// Array.prototype.myConcat = myConcat;
// const c = a.myConcat(b);
// console.log(c);

/* The myPush() method adds the specified elements to the end of an array
   and returns the new length of the array */
function myPush(...values) {
    const { length: arrayLength } = this;
    const { length: valuesLength } = values;
   
    for (let i = 0; i < valuesLength; i ++) {
      this[arrayLength + i] = values[i];
    }
    return this.length;
}
// const A = [1,2];
// Array.prototype.myPush = myPush;
// console.log(A.myPush(6,7,8))


/* The myEvery() method tests whether all elements in the array pass
   the test implmented by the provided function. It returns a Boolean value */
function myEvery(callback) {
    for (let i = 0; i < this.length; i++) {
        const val = this[i];
        if (!callback(val, i, this)) {
            return false;
        }
    }
    return true;
}
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 20];
// Array.prototype.myEvery = myEvery;
// console.log(array1.myEvery(isBelowThreshold));


/* The mySome() method tests whether at least one element in the array passes
   the test implemented by the provided function. It returns true if, in the array,
   it finds an element for which the provided function returns true; otherwise
   it returns false. It doesn't change the existing array. */
function mySome(callback) {
    for (let i = 0; i < this.length; i++) {
        const val = this[i];
        if (callback(val, i, this)) {
            return true;
        }
    }
    return false;
}