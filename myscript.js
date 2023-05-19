function loadToBlue() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'loader_icon_blue.svg' // Set the loader image source to blue
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'loader_icon_blue.svg' // Set the loader image button source to blue
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'none'; // Remove background image from divLvl211
	console.log("in loading") // Log a message indicating loading state
	setTimeout(changeColorToBlue, 3000); // Call changeColorToBlue after a delay of 3000ms
}

function loadToPink() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'loader_icon_pink.svg' // Set the loader image source to pink
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'loader_icon_pink.svg' // Set the loader image button source to pink
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'none'; // Remove background image from divLvl211
	console.log("in loading") // Log a message indicating loading state
	setTimeout(changeColorToPink, 3000); // Call changeColorToPink after a delay of 3000ms
}

function loadToYellow() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'loader_icon_yellow.svg' // Set the loader image source to yellow
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'loader_icon_yellow.svg' // Set the loader image button source to yellow
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'none'; // Remove background image from divLvl211
	console.log("in loading") // Log a message indicating loading state
	setTimeout(changeColorToYellow, 3000); // Call changeColorToYellow after a delay of 3000ms
}

function changeColorToYellow() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'url("Yello umbrella.png")'; // Set the background image of divLvl211 to yellow
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to yellow") // Log a message indicating the color change to yellow
}

function changeColorToBlue() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'url("Blue umbrella.png")'; // Set the background image of divLvl211 to blue
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to blue") // Log a message indicating the color change to blue
}

function changeColorToPink() {
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button
	document.getElementsByClassName('divLvl211')[0].style.backgroundImage = 'url("Pink umbrella.png")'; // Set the background image of divLvl211 to pink
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to pink") // Log a message indicating the color change to pink
}

function loadFile(event) {
	var image = document.getElementsByClassName('logoImg')[0]; // Get the logo image element
	image.src = URL.createObjectURL(event.target.files[0]); // Set the source of the logo image to the selected file
	image.style.display='block' // Display the logo image
	var buttonTxt = document.getElementsByClassName("btnTxt")[0]; // Get the button text element
	buttonTxt.innerHTML = event.target.files[0].name // Set the button text to the name of the selected file
	document.getElementsByClassName("closeIcon")[0].style.display = 'block' // Display the close icon
	console.log("file uploaded: " + event.target.files[0].name) // Log a message indicating the uploaded file name
}

function buttonClicked() {
	const realFileBtn = document.getElementById("real-file"); // Get the real file input button
	realFileBtn.click(); // Simulate a click on the real file input button
}

function imageClosed() {
	var image = document.getElementsByClassName('logoImg')[0]; // Get the logo image element
	image.style.display='none' // Hide the logo image
	document.getElementsByClassName("closeIcon")[0].style.display = 'none' // Hide the close icon
	var buttonTxt = document.getElementsByClassName("btnTxt")[0]; // Get the button text element
	buttonTxt.innerHTML = "UPLOAD LOGO" // Reset the button text
}
