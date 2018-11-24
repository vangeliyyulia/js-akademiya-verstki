function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html", "css", "photoshop"];

		for (let i=0; i<skills.length; i++) {
			document.write("я владею " + skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Accsess granted");
		} else {
			alert("Accsess denied!")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num * num);
	}
	calcPow(4);
};

myFirstApp("Julia", 29);