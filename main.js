// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
	if (num1 > num2) {
		return num1
	}
	else {
		return num2 
	}}

let x= max(1,2)
console.log(x)	

	
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
    	return num1
    }
    if (num2 > num1 && num2 > num3) {
    	return num2 
    }
    if (num3 > num1 && num3 > num2) {
    	return num3 
    }
}

x = maxOfThree(3,2,1)
console.log(x)


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    	return true 
    } 
    else {
    	return false
    }
}

let y = isVowel("a")
console.log(y)

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1, num2){
	return(num1+num2)
}

let z = sum(1,2)
console.log(z) 	


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (num1, num2, num3){
	return(num1+num2+num3)/3
}

let a = avg(1,2,3)
console.log(a)

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength (greeting){
	return getLength.length
}

let h = getLength("how are you?")
console.log(h)

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (num1, num2){
	if (num1 > num2) {
		return true	
	}
	else {
		return false 
	}
}

let c = greaterThan(2,1)
console.log(c)


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet (firstName){
	return "Hello " + firstName
}

let d = greet("Giulia!")
console.log(d)

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib (w1, w2, w3, w4){
	return "Quick brown fox jumps over the fence" + w1 + w2 + w3 + w4
}

let e = madlib("quick", "fox", "fence", "dog")
console.log(e)







