let age = 87;
if (age >= 13 && age <= 19) {
  console.log("u are teen");
}
else if (age > 1 && age < 13) {
  console.log("u are child");
}
else if (age > 19 && age <= 35) {
  console.log("u r young");
}
else {
  console.log("ur old");
}
let result = age > 18 ? 'Eligible for vote' : 'Not Eligible for vote';
console.log(result);
let day = 2;
switch (day) {
  case 1: console.log("monday");
    break;
  case 2: console.log("tuesday");
    break;
  case 3: console.log("wednesday");
    break;
  case 4: console.log("friday");
    break;
  case -5: console.log("saturday");
    break;
  default: console.log("sunday");
    break;
}