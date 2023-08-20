// function parseDate(input) {
//     const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
//      console.log('parts.slice(1): ', parts.slice(1));
//     // if (!parts) {
//     //   return null;
//     // }
//     // return parts.slice(1).map((p) => parseInt(p, 10));
//   }
  
//   console.log('  parseDate("2019-01-01"): ',   parseDate("2019-01-01"));
//   console.log('  parseDate("2019-06-19"): ',   parseDate("2019-06-19"));

regex = /".+?"/g

'This is a quote "Hello" to every in the "world"'


const answer = 'This is a quote "Hello" to every in the "world" is a very common expression in CS'.match(regex)

// answer.slice(1)
// console.log(answer)
console.log( answer[0], answer[1]);
// console.log( answer.index);
