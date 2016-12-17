/**
 *   @author kulman, Sawyer  (Kulmans@gmail.com)
 *   @version 0.0.3
 *   @summary final exam code || created: 12.14.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const IO = require('fs');

let customerName, meal, price;
let customerInfo[];

function main() {
    setCustomerName();
    setMeal();
    setprice();
}

main();

function populateCustomerInfo() {
    let fileContents = IO.readFileSync(`Exam.csv`, 'utf8');
    let lines = fileContents.toString().split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        customerInfo.push(lines[i].toString().split(/,/));
    }
}

function setCustomerName() {
    customerName = PROMPT.question(`Please enter your name:`);
}

function setMeal() {
    meal = PROMPT.question('What kind of food are you in the mood for?')
}