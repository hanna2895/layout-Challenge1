// Loop #1

for (let i = 0; i <= 20; i++ ) {
	if (i % 2 === 0) {
		console.log([i] + " is even.")
	} else {
		console.log([i] + " is odd.")
	}
}

// Loop #2

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	} else if (i % 3 === 0) {
		console.log("Fizz")
	} else if (i % 5 === 0) {
			console.log("Buzz")
	} else {
		console.log(i)
	}
}

// Loop #3
let triangle = 'x';

for (let i = 1; i <= 5; i++) {
	console.log(triangle);
	triangle += 'x';
}

// I'm not sure if this is correct. It returns the pattern with a sixth line of "xxxxxx" in the console. I've seen this problem before where it was adding all the x's on one line of code with breaks in it, but I'm not sure if that's what this question is asking because I think that one requires functions. 