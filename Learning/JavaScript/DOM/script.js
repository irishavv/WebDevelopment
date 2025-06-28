// console.log("Rishav Sinha");

// console.log(); -- print 
// console.dir(); ---- document --- its print method/properties console.dir(windows.documents)---window is object .


//DOM Manipulation
// 1. Selecting with id---- document.getElementById("myId"); --- same as below
// 1. Selecting with class---- document.getElementByClassName("myclass"); -- same as below
// 1. Selecting with tag---- let heading =  document.getElementByTagName("p"); ------ console.dir(heading),console.log(heading)


// Query Selector is the best selector -- better way
// document.querySelector("myId/myClass/tag");
// let elements = document.querySelector(".P"); /// return first element

// let allElement = document.querySelectorAll(".p");   // return a nodeList
// console.dir(allElement);



// Properties--------------------   use all properties like  ______.tagName   ----(___ here write node name like div)
// tagName : return tag for element nodes
// innerText : return the text content of the element and all its children
// innerHTML : returns the plain text of HTML contents in the elements
// textContent: return textual content even for hidden elements..


// Q1 

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// //  change the text 
// h2.innerHTML = h2.innerText + " I am a students";
// console.dir(h2.innerText);



// Q2

let divs = document.querySelectorAll(".box");
// console.log(divs);

// console.log(divs[0]);

// divs[0].innerText = "New Value 1";
// divs[1].innerText = "New Value z";
// divs[2].innerText = "New Value 3";

// with for loop

// for(let i = 0; i< divs.length; i++){
//     divs[i].innerText = `new unique value ${i}`;
// }



