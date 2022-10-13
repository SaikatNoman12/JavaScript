
//  String.index() method: 
console.log("String.index() method:");


let x = "Noman Rahim Karim Rahim Helal 'Asraful'";

console.log(x.indexOf("Rahim"));        // return index number 6

console.log(x.indexOf("Karim" , 11));   // return index number 12. Cutting First 11 digit  

console.log(x.indexOf("Kalia"));        // return index number -1

console.log(x.indexOf("'Asraful'"));    // return index number 24




// String.lastIndexOf() method:
console.log("String.lastIndexOf() method:");

let y = "Abul Ali Nahid Abul";

console.log(y.lastIndexOf("Abul"));         // return index number 15

console.log(y.lastIndexOf("Rahim"));        // return index number -1     



let z = "Abul Kasem Abul Noman Auli Abul Nadim";

console.log(z.lastIndexOf("Abul" , 10));     // return index number 0

console.log(z.lastIndexOf("Abul" , 20));     // return index number 11. Cutting Last 20 digit




// String.search():
console.log("String.search():");


let k = "Nadim Mahin Rafik Kamal Rafik";

console.log(k.search("Rafik"));        // return index number 12 

console.log(k.search("Rafik" , 15));        //return index number 12 . Absolutely the second parameter is do not work.




// String.match():
console.log("String.match():");


 let a = "Nadim Mahin AHin Kahin"

 console.log(a.match(/hin/g));      // return an array

 console.log(a.match(/Hin/g));      // return an array 




//  String.includes():
console.log("String.includes():");


let b = "Nadim Mursed Nadi Mahin Nadim";

console.log(b.includes("Nadim"));       // returm true

console.log(b.includes("Faruk"));       // returm false


console.log(b.includes("Nadim" , 13));  // returm true. Cutting Fast 13 digit.




// String.startsWith():
console.log("String.startsWith():");


let c = "Noman is a good boy.Noman is a bad boy.";

console.log(c.startsWith("Noman"));         // return true 

console.log(c.startsWith("Noman" , 21));    // return false. Cutting First 20 digit.

console.log(c.startsWith("Noman" , 20));    // return true. Cutting First 20 digit.




// String.endsWith():
console.log("String.endsWith():");


let d = "Noamn is a gaood boy .Noman is a bad boy";

console.log(d.endsWith("boy"));         // return true

console.log(d.endsWith("boy" ,20));     // return true. Cutting Last 20 digit.

console.log(d.endsWith("boy" , 10));     // return false. Cutting Last 20 digit.











