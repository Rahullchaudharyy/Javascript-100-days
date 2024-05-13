let CheckTheTriangle = (a, b, c) => {
    if (a === b && b === c) {
        console.log("Equilateral");
    } else if (a === b || b === c || c === a) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}

CheckTheTriangle(3, 1, 1);
