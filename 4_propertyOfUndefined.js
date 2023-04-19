// Reading property of undefined error

let student = {
    firstName : "Alex",
    lastName : "Miller"
};

console.log( student.fullName );
console.log( student.languages.proficient );

// .fullName is not defined in variable
//  Cannot read properties of undefined (reading 'proficient')
// cannot access a property of a value that is not defined or unknown

let student = {
    firstName : "Alex",
    lastName : "Miller",
    languages: {
        proficiency: "master";
};