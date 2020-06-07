/*
    Link:
        https://www.codewars.com/kata/5ad0d8356165e63c140014d4
*/

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    else if(exam > 75 && projects >= 5) return 90;
    else if(exam > 50 && projects >= 2) return 75;
    return 0;
}

// Test cases
console.log(finalGrade(92, 5)); // 100
console.log(finalGrade(85, 5)); // 90
console.log(finalGrade(63, 4)); // 75