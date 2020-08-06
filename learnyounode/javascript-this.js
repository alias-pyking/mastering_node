// function foo(num) {
// 	console.log(num);
// 	foo.count++;
// }
// foo.count = 0;
// for (let i = 0; i < 10; i++){
// 	if (i > 5) {
// 		foo(i);
// 	}
// }
// console.log(foo.count);
function bar() {
	console.log( this.a );
}
function foo() {
	var a = 2;
	this.bar();
}
foo(); 