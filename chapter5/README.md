chapter5基于koa快速开发web应用
=
function 和 function* 
-
> test1.js

``` JavaScript
function* helloWorldGeneratorFunction() {
	var hello = yield 'hello' ; 
	console.log(hello) ; 
	var world = yield 'world' ; 
	console.log(world);
	return '!' ;  
}
var helloWorldGeneratorFunction = helloWorldGeneratorFunction() ; 
```

*生成器函数执行后会返回一个生成器(generator)*

#### 在控制台打印
``` JavaScript
console.log(helloWorldGeneratorFunction.next(1)); // -> {value: 'hello' , done: false} 
console.log(helloWorldGeneratorFunction.next(2)); // -> 2 {value: 'world' , done: false}
console.log(helloWorldGeneratorFunction.next(3)); // -> 3 {value: '!' , done: true}
console.log(helloWorldGeneratorFunction.next(4)); // -> {value: undefined , done: true}
```

打印的结果如上,为什么会这样呢??? 
**我们往next方法里面传入了参数,那么该参数就成为了上一个yield语句的返回值**
**即调用helloWorldGeneratorFunction(2) 就相当于执行了var hello = 2**
后面同理

yield 和 yield*
> test2.js

```JavaScript
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
```

*从test2中的例子可以看出 , yield 和 yield*的区别在于:
**yield只返回函数右值.而yield*则将函数委托(delgate)到另一个生成器(Generator)或可迭代的对象(如字符串,数组,类数组arguments,以及ES6中的Map,Set等)**







