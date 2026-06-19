/*Create a JavaScript program to process an employee salary array by removing invalid salaries, calculating 
the average salary, identifying the highest and lowest salaries, and finding each salary’s difference from 
the average. Use nested loops to detect duplicate salaries and compare every employee’s salary with others. 
Display all results in a clear summary report.

Example Salary Array:
[50000, 60000, -1000, 45000, 60000, 0, 75000, 50000, "abc", 55000,"sajilo" ,"0..11.11.122"]

Expected Output:
* Valid Salaries: [50000, 60000, 45000, 60000, 75000, 50000, 55000]
* Invalid Salaries Removed: -1000, 0, "abc","0..11.11.122"
* Average Salary: 56428.57
* Highest Salary: 75000
* Lowest Salary: 45000
* Duplicate Salaries Found:

  * 50000 appears 2 times
  * 60000 appears 2 times
* Salary Comparisons:

  * 50000 < 60000
  * 60000 > 45000
  * 75000 > 55000
* Summary Report:
  * Total Valid Employees: 7
  * Total Invalid Entries: 5
  * Salary Range: 30000
*/











const salaries = [
    50000,
    60000,
    -1000,
    45000,
    60000,
    0,
    75000,
    50000,
    "abc",
    55000,
    "sajilo",
    "0..11.11.122"
];

let validSalaries = [];
let invalidSalaries = [];










for (let i = 0; i < salaries.length; i++) {

    if (typeof salaries[i] === "number" && salaries[i] > 0) {
        validSalaries.push(salaries[i]);
    } else {
        invalidSalaries.push(salaries[i]);
    }

}









let total = 0;
let highest = validSalaries[0];
let lowest = validSalaries[0];

for (let i = 0; i < validSalaries.length; i++) {

    total += validSalaries[i];

    if (validSalaries[i] > highest) {
        highest = validSalaries[i];
    }
    if (validSalaries[i] < lowest) {
        lowest = validSalaries[i];
    }
}
let average = total / validSalaries.length;










console.log("Salary Difference From Average:");

for (let i = 0; i < validSalaries.length; i++) {

    let difference = validSalaries[i] - average;

    console.log(validSalaries[i] + " => " + difference.toFixed(2));

}







console.log("\nDuplicate Salaries Found:");

let checked = [];

for (let i = 0; i < validSalaries.length; i++) {

    if (checked.includes(validSalaries[i])) {
        continue;
    }

    let count = 0;

    for (let j = 0; j < validSalaries.length; j++) {

        if (validSalaries[i] === validSalaries[j]) {
            count++;
        }

    }

    if (count > 1) {
        console.log(validSalaries[i] + " appears " + count + " times");
    }

    checked.push(validSalaries[i]);

}








console.log("\nSalary Comparisons:");

for (let i = 0; i < validSalaries.length; i++) {

    for (let j = i + 1; j < validSalaries.length; j++) {

        if (validSalaries[i] > validSalaries[j]) {

            console.log(validSalaries[i] + " > " + validSalaries[j]);

        } else if (validSalaries[i] < validSalaries[j]) {

            console.log(validSalaries[i] + " < " + validSalaries[j]);

        } else {

            console.log(validSalaries[i] + " = " + validSalaries[j]);

        }

    }

}
console.log("\n       SUMMARY REPORT       ");
console.log("Valid Salaries:", validSalaries);
console.log("Invalid Salaries :", invalidSalaries);
console.log("Average Salary:", average.toFixed(2));
console.log("Highest Salary:", highest);
console.log("Lowest Salary:", lowest);
console.log("Total Valid Employees:", validSalaries.length);
console.log("Total Invalid Entries:", invalidSalaries.length);
console.log("Salary Range:", highest - lowest);
