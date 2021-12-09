

// Back-Tics Syntax:========
// back-tics symbol (` `). It's return string value.
console.log("Back-Tics Syntax:===");

console.log(`ABdullah Al Nomaan`);      // return string Abdullah Al Nomaan

// quotes inside string
console.log(`Abdullah Al "Nomaan"`);    // return string Abdullah Al "Nomaan"

console.log(`Abdullah Al 'Nomaan'`);    // return string Abdullah Al 'Nomaan'

console.log(`Abdullah \`Al\` Nomaan`);  // return string Abdullah `Al` Nomaan

// multiline string
console.log(`Abdullah Al Nomaan
    Abu Hasnat                 
    Mahir Sahriar`);        // return Abdullah Al Nomaan
                            // Abu Hasnat
                            // Mahir Sahriar. Multiline string  
                            



// Interpolation or Variable Substitution:
console.log("Interpolation or Variable Substitution:===");

 let country = "Bangladesh";

 let x = `I love ${country}.
${country} is a small country.`;

 console.log(x);        // return I love Bangladesh. Bangladesh is a small country.




 // Expression Substitution:
console.log("Expression Substitution:===");

 
 let a = 20;
 let b = 10;

 let y = `${country} population is ${a + b}.`;    // return Bangladesh population is 30
 console.log(y);

 let net = `Net number is ${a + b}.`;
 console.log(net)       // return Net number is 30




//  HTML template:



