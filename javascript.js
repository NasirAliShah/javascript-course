function orderMylogic(val) {
  if (val < 5) {
    console.log('Less than 5');
  } else if (val < 10) {
    console.log('Less than 10');
  } else {
    return 'Greater than or equal to 10'
  }
}

function chainIfElse(num) {
  if (num < 5) {
    return 'Tiny'
  } else if (num < 10) {
    return 'Small'
  } else if (num < 15) {
    return 'Medium'
  } else if (num < 20) {
    return 'Large'
  } else {
    return "Huge"
  }

}
function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha'
      break;
    case 2:
      answer = 'beta'
      break;
    case 3:
      answer = 'gamma'
      break;
    case 4:
      answer = 'delta'
      break;
  }
  return answer
}
function switchOfStuff(val) {
  let answer = '';
  switch (val) {
    case 'a':
      answer = 'alpha'
      break;
    case 'b':
      answer = 'beta'
      break;
    case 'c':
      answer = 'gamma'
      break;
    case 'd':
      answer = 'delta'
      break;
    default:
      answer = 'stuff'
      break
  }
  return answer
}
function sequentialSize(val) {
  let answer = ''
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low'
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid'
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High'
      break;
  }
  return answer
}
function isLess(a, b) {
  return a < b
}
var count = 0
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break
  }
  let holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet'
  }

  return card + ' ' + holdbet;
}
var ourDog = {
  "name": "billy",
  "legs": 4,
  "tails": 1,
  "friends": ['everything !']
}
var ownDog = {
  "name": "quinzy",
  "legs": 3,
  "tails": 2,
  "friends": []
}

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j]
    }
  }
  return product
}
let myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
}
while (i < 5)

let contacts = [{
  "firstName": "Nasir",
  "lastName": "Shah",
  "number": "1234",
  "likes": ["Pizza", "banana", "mango"]
},
{
  "firstName": "Amar",
  "lastName": "Shah",
  "number": "5678",
  "likes": ["apple", "banana", "mango"]
},
{
  "firstName": "Nooh",
  "lastName": "Shah",
  "number": "4321",
  "likes": ["Mango", "juize", "kela"]
},
{
  "firstName": "Dawood",
  "lastName": "Shah",
  "number": "987",
  "likes": ["kababa", "charg", "gosht"]
}]

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property"
    }

  }
  return "no such content"
}
function chekSign(num) {
  return num > 0 ? "positive" : num < 0 ? "Negative" : 'zero'
}
// console.log(chekSign(-1));
// let data = lookUpProfile('Nasir', "likes");
// console.log(data);

// console.log(i, myArray);

// let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// console.log(product);
// cc(2);
// cc('K');
// cc(10);
// cc('K');
// cc('A')
// console.log(cc(4));
// console.log(isLess(8, 5))
// console.log(sequentialSize(9));
// console.log(caseInSwitch(4));
// console.log(switchOfStuff(2));
// console.log(chainIfElse(20))
// orderMylogic(3)