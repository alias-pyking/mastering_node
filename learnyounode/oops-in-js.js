const { count } = require("console");

class Person{
	constructor(first, last, age, gender, interests) {
		this._name = {
			first,
			last,
		};
		this._age = age;
		this._gender = gender;
		this._interests = interests;
	}
	greetings() {
		console.log(`Hi! I am ${this._name.first}`);
	}
	farewell() {
		console.log(`${this._name.first} has left the building. Bye for now!.`);
	}
}

const person1 = new Person('Shubham', 'Kumar', 21, 'male', ['Coding']);
person1.greetings();

const person2 = new Person('Vish', 'Sharma', 20, 'female', ['Civil services']);

person2.farewell();

class Teacher extends Person{
	constructor(first, last, age, gender, interests,subject, grade) {
		super(first, last, age, gender, interests);
		this._subject = subject;
		this._grade = grade;
		
	}
	get subject() {
		return this._subject;
	}
	set subject(newSubject) {
		this._subject = newSubject;
	}
}

const teacher = new Teacher('Vishali', 'Sharma', 20, 'female', ['nothing'], 'nothing', '12');
teacher.greetings();
teacher.farewell();
console.log(person1);
console.log(person2);
teacher.subject = 'something';
console.log(teacher.subject);
console.log(teacher);



class Test{
	constructor() {
		this._num = 10;
	}
	get num() {
		return this._num;
	}
	set num(newNum) {
		this._num = newNum;
	}
	print() {
		console.log(this.num());
	}
}

const t1 = new Test();
const t2 = new Test;
t1.num = 20;
t2.num = 90;
console.log(t1);
console.log(t2);