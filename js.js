window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
	const visual = document.querySelector('.visual');
	const recButton = document.querySelector('.bt');
	var recStatus = 0;
	var rec = [];
	const colors = [
		"#60d394",
		"#ff5722",
		"#8bc34a",
		"#2196f3",
		"#e91e63",
		"#795548"
	];

	const position = [
		"8.3%",
		"24.9%",
		"41.5%",
		"58.1%",
		"74.7%",
		"91.3%"
	];

	recButton.addEventListener('click', function(){
		if (recStatus == 0) {
			recStatus = 1;
			recButton.style.backgroundColor = "#FF3F39";

			console.log("Recording began...");
		}else{
			recStatus = 0;
			recButton.style.backgroundColor = "#31E8DC";
			console.log(rec);
			rec = [];

			console.log("Recording Ended...");
		}


	});

	pads.forEach((pad, index) =>{
		pad.addEventListener('click', function(){
			sounds[index].currentTime = 0;
			sounds[index].play();
			createBubbles(index);
			rec.push(index);
		});
	});

	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.left = position[index];
		bubble.style.animation = "jump 1.5s ease";
		bubble.addEventListener('animationend', function(){
			visual.removeChild(this);
		});
	};
});