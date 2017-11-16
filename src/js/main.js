import '../css/style.scss';
import 'jquery';
import 'bootstrap';

import {externalConst} from './modules/externalModule';

{
	let testFunc = () => {
		console.log(externalConst());
	};

	testFunc();
	
}
