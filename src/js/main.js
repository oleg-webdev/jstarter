import '../css/style.scss';
import 'jquery';
// import Popper from 'popper.js';
// window.Popper = Popper;
// import 'bootstrap';


import {externalConst} from './modules/externalModule';

let testFunc = () => {
	
	console.log(this);
};

let someperson = new testFunc();

function someFunc() {
	let that = this
	that.name = 'Alice';

	let testFunc = function() {
		console.log(that.name);
	};
	testFunc();
}

let person = new someFunc();