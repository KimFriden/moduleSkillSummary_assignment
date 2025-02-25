import books from "./books.js";
import arrays_json from "./arrays.js";
import nodes_json from "./nodes.js";

let square = 25;
let inches = 5;
let cube = 30;
let radius = 50;
let name = "Kim";


function log(thing) {
    console.log(thing);
}

function returnSquare(number_square) {
    return number_square * number_square;
}

function inchesToMillimeters(number_inches) {
    return number_inches * 25.4;
}

function returnCube(number_cube) {
    return number_cube * number_cube * number_cube;
}

function radiusOf(number_radius) {
  const pi = 3.14;
  return pi * returnSquare(number_radius);
}

function greet(text_name) {
    return "Hello, " + name + "!";
}

function makeArrayFlat(array) {
    let flattened = [];

    function flatten(arr) {
      for (let index= 0;index< arr.length; index++) {
        if (Array.isArray(arr[index])) {
            flatten(arr[index]);
        } else {
          flattened.push(arr[index]);
        }
      }
    }

    flatten(array);
    return flattened;
}


// nodes
function calculateTheSum(value1) {
  let sum = 0;
  if (value1 !== null) {
    sum += value1.value;
    if (value1.left !== null) {
      sum += calculateTheSum(value1.left);
    }
    if (value1.right !== null) {
      sum += calculateTheSum(value1.right);
    }
  }
  return sum;
}

function getTheDeepestLevel(value2) {
  let deepestLevel = 1;
  let leftLevel = 1;
  let rightLevel = 1;

  if (value2.left !== null) {
    leftLevel += getTheDeepestLevel(value2.left);
  }
  if (value2.right !== null) {
    rightLevel += getTheDeepestLevel(value2.right);
  }

  deepestLevel = Math.max(leftLevel, rightLevel);
  return deepestLevel;
}

function tallyAllNodes(value3) {
  let count = 0;
  if (value3 !== null) {
    count += 1;
    if (value3.left !== null) {
      count += tallyAllNodes(value3.left);
    }
    if (value3.right !== null) {
      count += tallyAllNodes(value3.right);
    }
  }
  return count;
}


// books
function getBooksStartingWithThe(books) {
  const booksOfThe = [];
  for (let index = 0; index < books.length; index++) {
      if (books[index].title.startsWith("The")) {
        booksOfThe.push(books[index]);
      }
  }
  return booksOfThe;
}

function getBooksByAuthorsWithT(books) {
  const booksAuthorWithT = [];
  for (let index = 0; index < books.length; index++) {
      if (books[index].author.includes("t") || books[index].author.includes("T")) {
        booksAuthorWithT.push(books[index]);
      }
  }
  return booksAuthorWithT;
}

function getBooksAfterYear(books, year) {
  let bookCount = 0;
  for (let index = 0; index < books.length; index++) {
      if (books[index].publication_year > year) {
          bookCount++;
      }
  }
  return bookCount;
}

function getBooksBeforeYear(books, year) {
  let bookCount = 0;
  for (let index = 0; index < books.length; index++) {
      if (books[index].publication_year < year) {
          bookCount++;
      }
  }
  return bookCount;
}

function getIsbnForAuthor(books, authorName) {
  const isbnList = [];
  for (let index = 0; index < books.length; index++) {
      if (books[index].author === authorName) {
          isbnList.push(books[index].isbn);
      }
  }
  return isbnList;
}

function sortBooksAlphabetically(books, order = 'ascending') {
  const sorted = [...books];

  for (let index = 0; index < sorted.length; index++) {
      for (let index2 = 0; index2 < sorted.length - 1; index2++) {
          const needsSwap = order === 'ascending'
              ? sorted[index2].title > sorted[index2 + 1].title
              : sorted[index2].title < sorted[index2 + 1].title;

          if (needsSwap) {
              [sorted[index2], sorted[index2 + 1]] = [sorted[index2 + 1], sorted[index2]];
          }
      }
  }
  return sorted;
}


log(`The square of ${square} is ${returnSquare(square)}`);
log(`${square} Inches is ${inchesToMillimeters(inches)} in millimeters`); 
log(`The cube of ${cube} is ${returnCube(cube)} in millimeters`);
log(`Radius of ${radius} is ${radiusOf(radius)}\n`);
log(greet(name));
log(makeArrayFlat(arrays_json));
log(`\nThe calculating the sum of node_json: ${calculateTheSum(nodes_json)}`);
log(`The deepest level of node_json: ${getTheDeepestLevel(nodes_json)}`);
log(`The number of nodes in node_json: ${tallyAllNodes(nodes_json)}`);
log(`\n sorting by Book with "the" in it:`);
console.table(getBooksStartingWithThe(books));
log(`\n sorting by authors with "T":`);
console.table(getBooksByAuthorsWithT(books));
log(`The number of books written after 1992: ${getBooksAfterYear(books, 1992)}`);
log(`The number of books written before 2004: ${getBooksBeforeYear(books, 2004)}`);
log("\nThe isbin list of Author Terry Pratchett:");
console.table(getIsbnForAuthor(books, "Terry Pratchett"));
log("Books sorted by alphabetically in ascending order:");
console.table(sortBooksAlphabetically(books, "ascending"));
log("Books sorted by alphabetically in decending order:");
console.table(sortBooksAlphabetically(books, "decending"));
