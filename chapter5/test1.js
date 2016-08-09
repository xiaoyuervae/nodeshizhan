function* helloWorldGeneratorFunction() {
	var hello = yield 'hello' ; 
	console.log(hello) ; 
	var world = yield 'world' ; 
	console.log(world);
	return '!' ;  
}

var helloWorldGeneratorFunction = helloWorldGeneratorFunction() ; 
// 我们往next方法里面传入了参数,那么该参数就成为了上一个yield语句的返回值
// 即调用helloWorldGeneratorFunction(2) 就相当于执行了var hello = 2 ;
console.log(helloWorldGeneratorFunction.next(1)); // -> {value: 'hello' , done: false} 
console.log(helloWorldGeneratorFunction.next(2)); // -> 2 {value: 'world' , done: false}
console.log(helloWorldGeneratorFunction.next(3)); // -> 3 {value: '!' , done: true}
console.log(helloWorldGeneratorFunction.next(4)); // -> {value: undefined , done: true}
