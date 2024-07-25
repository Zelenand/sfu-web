function summ(list) {
    return list.reduce((a, b) => a + b, 0);
  }


function find_min(list) {
    return Math.min.apply(Math, list);
}

function count (arr, number){
    return arr.filter(i => i==number).length
}

var list = [1, 1, 2, 3, 4, 5, 6];
console.log(summ(list))
console.log(find_min(list))
console.log(count(list, 1))