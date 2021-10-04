/**
 * Application which demonstrates basic features of string class. 
 * 
 */
// String in typescript is considered as sequence of character
//There are multiple methods of string class that we can use while writing application
//Create object of string class as

var str = new String("Marvellous");
var str1 = new String("Infosystems");

//charAt function gives character at specific index.

console.log("str.charAt(0) is: " + str.charAt(0));
console.log("str.charAt(1) is: " + str.charAt(1));

//charCodeAt gives unicode result:

console.log("str.charCodeAT(0) is: " + str.charCodeAt(0));
console.log("str.charCodeAT(1) is: " + str.charCodeAt(1));

//length gives length of the string

console.log("length of str is: " + str.length);
console.log("length of str1 is: " + str1.length);

//Create object of string class as
var ptr = "Marvellous";
var ptr1 = "Infosystems";

//COncat method is used to concat two strings

var final = ptr.concat(ptr1);

console.log("String after concatenation: " + final);

//indexOf method is used to find index of specific subset in string

var ret = ptr1.indexOf("sys");
console.log("Index of sys is: " + ret);


var ret = ptr.indexOf("Pune");
console.log("Index of Pune is: " + ret);


//lastIndexOf method is used to find last index of specific substring in string

var str2 = "MarvellousInfosystemsMarvellousPuneAndNasik";

var ret = str2.lastIndexOf("Marvellous");
console.log("Lst index of Marvellous is: " + ret);

//replace method is used to replace substring with another substring

var replace = /Marvellous/gi;
var str3 = "Marvellous Infosystems Pune & Marvellous Magic Thoughts Pune";
var newstr = str3.replace(replace,"NewMarvellous");
console.log(newstr);

//Search method is used to check whether specific substring is present or not.
 var replace = /Marvellous/gi;
 var str4 = "Marvellous Infosystems Pune & Marvellous Magic Thoughts Pune";

 if ( str4.search(replace) == -1)
 {
     console.log("Does not contain Marvellous");
 }
 else
 {
     console.log("Contains Marvellous");
 }

 //It is used to break string bt considering specific delimeter.

 var str5 = "Marvellous Infosystems Educating for better tomorrow";
 var arr = str5.split(" ",6);
 console.log(arr);

//toString method is used to convert any type of data type into string

var MarvellousStr : number = 112151;
console.log(MarvellousStr.toString());