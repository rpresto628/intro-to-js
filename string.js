//string data type  (use /' if needing to use ')
var str1 = 'It\'s Tuesday today!';
//
console.log(str1);

var str2 = "We are learning Javascript today!";
//console.log (str2);

console.log(str1,str2);

var firstName = "Pratima"; //camelCase naming convention//use camelCase for main variable in project
console.log(firstName);

var last_name = "Sakinala"; //snake naming convention//use snake naming convention for object key names
console.log(last_name);

//string concatination
//var fullName = firstName + ' ' + last_name;
//console.log(fullName);

//other way
//var fullName = firstName. concat(' ').concat (last_name);

//var fullName = firstName + ' '+last_name
//console.log (fullName);

var fullName = firstName.concat(' ',last_name);
console.log(fullName);
