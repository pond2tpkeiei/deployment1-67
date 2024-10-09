import { BMI } from './index';
import * as assert from 'assert';

const weight = 60;
const height = 1.75;
const bmi = (weight / (height * height)).toFixed(2);

assert.strictEqual(BMI(weight, height), bmi, `Expected : ${bmi}\nResult : ${BMI(weight, height)}`);