function screenshot() {
	let screenshotButton = document.querySelector("#screenshotButton")
	let colorButtons = document.querySelectorAll(".colorButton")
	screenshotButton.style.display = "none";
	for (let i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display = "none"	
	}
	let region = document.querySelector("body"); // whole screen
	html2canvas(region, {
		onrendered: function(canvas) {
			let pngUrl = canvas.toDataURL();
			let img = document.querySelector(".screen");
			img.src = pngUrl;
			document.write(img.outerHTML)
			alert("Right click to save your new wallpaper!")
		},
	});
}

let getQuoteAndAuthor = function getQuoteAndAuthor() {
	let title = document.querySelector("#inputTitle").value
	let quote = document.querySelector("#inputQuote").value.replace(/\r?\n/g, '<br />')
	let author = document.querySelector("#inputAuthor").value
	if (!quote || !author) {
		alert("Please, write the quote and the author")
		return
	}
	
	createQuotePage(title, quote, author)
}

function createQuotePage(title, quote, author){
	let body = document.getElementsByTagName('body')[0]
	let newBody = `<div id="outerDiv">
		<div id="middleDiv">
			<div id="innerDiv">
				<button id="screenshotButton" onclick="screenshot()">“Create Wallpaper”</button>
				<img width="100%" class="screen">
				<h3 id="title">${title}</h3>
				<div class="colorButton" id="titleColor">
					<div class="color colorGray"></div>
					<div class="color colorBlack"></div>
					<div class="color colorRed"></div>
					<div class="color colorBlue"></div>
					<div class="color colorPurple"></div>
				</div>
				<h1 id="quote">“${quote}</h1>
				<div class="colorButton" id="quoteColor">
					<div class="color colorGray"></div>
					<div class="color colorBlack"></div>
					<div class="color colorRed"></div>
					<div class="color colorBlue"></div>
					<div class="color colorPurple"></div>
				</div>
				<h3 id="author">– ${author}</h3>
				<div class="colorButton" id="authorColor">
					<div class="color colorGray"></div>
					<div class="color colorBlack"></div>
					<div class="color colorRed"></div>
					<div class="color colorBlue"></div>
					<div class="color colorPurple"></div>
				</div>
			</div>
		</div>
	</div>`
	body.innerHTML = newBody

	addEvents()
}

function addEvents() {

	document.getElementById("titleColor").addEventListener("click", function(e){
	let title = document.querySelector("#title");
	let targetColor = window.getComputedStyle(e.target).getPropertyValue("background-color")
	console.log(targetColor);
	if (targetColor === "rgba(0, 0, 0, 0)") {
		return
	}
	title.style.color = targetColor
})

document.getElementById("quoteColor").addEventListener("click", function(e){
	let quote = document.querySelector("#quote");
	let targetColor = window.getComputedStyle(e.target).getPropertyValue("background-color")
	if (targetColor === "rgba(0, 0, 0, 0)") {
		return
	}
	quote.style.color = targetColor
})

document.getElementById("authorColor").addEventListener("click", function(e){
	let author = document.querySelector("#author");
	let targetColor = window.getComputedStyle(e.target).getPropertyValue("background-color")
	if (targetColor === "rgba(0, 0, 0, 0)") {
		return
	}
	author.style.color = targetColor
})

}