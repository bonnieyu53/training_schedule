
// 1.一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。(Bonnie修改題目為從字串後面找)
const longestCommonWord = ((strs) => {
  if (!strs) return '';
  const allStrs = Array.from(strs).reverse().join('').split(',');
  if (allStrs.length < 2) return '';
  let compare = Array.from(allStrs[0]);
  allStrs.forEach((value) => {
    compare.forEach((item, index) => {
      if (item !== value[index]) {
        compare = compare.slice(0, index);
      }
    });
  });
  return compare.reverse().join('');
});
console.log(longestCommonWord('aeeasdfsaewaf,esadvdsfaf,asdfwaeeaf'));


// 2.將一個字串反轉後回傳。
const reverseStr = ((strs) => {
  if (typeof (strs) !== 'string') return '';
  const reverse = strs.split('').reverse().join('');
  return reverse;
});
console.log(reverseStr());


// 3.給兩個字串s與t，回傳t是否為s的重組字
const compareStr = ((firstStr, secondStr) => {
  if (!firstStr || !secondStr) return '';
  if (firstStr.length !== secondStr.length) return '';
  return firstStr.split('').sort().join('') === secondStr.split('').sort().join('');
});
console.log(compareStr());


// 4.給一個英文字串，將裡面的母音字母反轉。
const reverseAEIOU = ((strs) => {
  if (typeof (strs) !== 'string') return '';
  const strsArry = Array.from(strs);
  const mother = 'aeiou';
  const cardinality = strs.match(/[aeiou]/ig).reverse();
  return strsArry.map((item) => {
    if (mother.indexOf(item.toLowerCase()) !== -1) {
      item = cardinality.shift();
    }

    return item;
  }).join('');
  // return strsArry.join('');
});
console.log(reverseAEIOU('hEllo'));


// 5.給二進制字串，將其換算成對應的十進制數字，需自己寫function
// 反轉後再開始
const binaryToDecimal = ((total) => {
  if (!total) return '';
  let decimaltotal = 0;
  const binaryStrs = Array.from(total).reverse();
  binaryStrs.forEach((value, index) => {
    if (value === '1') {
      decimaltotal += (2 ** index);
    }
  });
  return decimaltotal;
});
console.log(binaryToDecimal());


// 6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。
const fillZero = ((strs) => {
  let abcArray = [];
  let a = parseInt(strs, 10) / 2;
  let b = parseInt(strs, 10) % 2;
  abcArray.push(b);
  if (a !== 0) {
    fillZero(a.toString());
  }
  // const binaryStr = Array.from(strs.toString(2));
  // let i = 0;
  // while (i < 8 - binaryStr.length) {
  //   binaryStr.unshift('0');
  //   i += 1;
  // }
  return abcArray;
});
console.log(fillZero(25));


// 7.將一個數字每個位數相加，直到剩個位數為止。
const numberAddition = ((total) => {
  if (!total) return '';
  let strArray = Array.from(total.toString());
  if (strArray.length === 1) return total;
  let result = 0;
  strArray.forEach(() => {
    result = strArray.reduce((acc, val) => acc + parseInt(val, 10), 0);
    strArray = Array.from(result.toString());
  });
  return result;
});
console.log(numberAddition());


// 8. 反轉一個int整數。
const reverseInt = ((total) => {
  if (!total) return '';
  if (total.length === 1) return total;
  const reverse = Array.from(Math.abs(total).toString()).reverse().join('');
  return (Math.sign(total) < 0) ? +reverse * (-1) : +reverse;
});
console.log(reverseInt());
