//(add,sub,mul,div)
let a = 9;
let b = 8;
console.log("a+b =", a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);



// Avg Salary
const salaries = [42500, 22000, 33330, 40600, 47000];

let total = 0;

for (let i = 0; i<salaries.length; i++) {
    total += salaries[i];
}
const average = total / salaries.length;
console.log("Average Salary:", average);

if(average>=60000){
    console.log("Excellent")
}
else{
    console.log("Good")
}
