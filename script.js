let input = "";
let functions = [];

function addToInput(value) {
	input += value;
	document.getElementById("answer").value = input;
}

function clearInput() {
	input = "";
	functions = [];
	document.getElementById("answer").value = "";
}

function addFunction(value) {
	functions.push(value);
	input += value;
	document.getElementById("answer").value = input;
}

function calculate() {
	// 関数を適用する
	for (let i = 0; i < functions.length; i++) {
		input = input.replace(functions[i], functions[i] + "parseFloat(");
	}
	input += ")".repeat(functions.length);
	
	// 計算する
	let result = eval(input);
	
	// 結果を表示する
	document.getElementById("answer").value = result;
	input = "";
	functions = [];
}

