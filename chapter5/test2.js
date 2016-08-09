// Array and String
function* GenFunc() {
	yield [1,2] ; 
	yield* [1,2] ; 
	yield '56' ; 
	yield* '78' ; 
}

var genFunc = GenFunc() ; 
console.log(genFunc.next().value); //[ 1, 2 ]
console.log(genFunc.next().value); //1
console.log(genFunc.next().value); //2
console.log(genFunc.next().value); //56
console.log(genFunc.next().value); //7
console.log(genFunc.next().value); //8


//arguments

function* GenFunc() {
	yield arguments ; 
	yield* arguments ;
}

var genFunc = GenFunc(1,2) ; 
console.log(genFunc.next().value); //{ '0': 1, '1': 2 }
console.log(genFunc.next().value); //1
console.log(genFunc.next().value); //2

// Generator
function* Gen1() {
	yield 2 ; 
	yield 3 ;
}
function* Gen2() {
	yield 1; 
	yield* Gen1() ; 
	yield 4 ; 
}

var genFunc = Gen2() ; 
console.log(genFunc.next().value); // 1
console.log(genFunc.next().value); //2
console.log(genFunc.next().value); //3
console.log(genFunc.next().value); //4



