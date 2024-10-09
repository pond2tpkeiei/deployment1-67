"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMI = BMI;
function BMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}
var weight = 60;
var height = 1.75;
console.log("Your weight: ".concat(weight, " kg.\nYour height: ").concat(height, " m.\nYour BMI: ").concat(BMI(weight, height)));
