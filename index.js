function actions() {
    const weather = document.getElementById("weather").value;
    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    if (weather === "" || mood === "") {
        document.getElementById("img-sun").style.display = "none";
        document.getElementById("img-rain").style.display = "none";
        result.textContent = "Please select a weather and mood!";
    }

    if (weather === "sunny" && mood === "sad") {
        document.getElementById("img-rain").style.display = "none";
        document.getElementById("img-sun").style.display = "block";
        result.innerText = ("Listen to a song and wear sunglass.");

    } else if (weather === "sunny" && mood === "happy") {
        document.getElementById("img-rain").style.display = "none";
        document.getElementById("img-sun").style.display = "block";
        result.innerHTML = ("Sing a song and wear sunglasses.");


    } else if (weather === "rainy" && mood === "sad") {
        document.getElementById("img-sun").style.display = "none";
        document.getElementById("img-rain").style.display = "block";
        result.innerHTML = ("Bring an umbrella and feel the rain.");


    } else if (weather === "rainy" && mood === "happy") {
        document.getElementById("img-sun").style.display = "none";
        document.getElementById("img-rain").style.display = "block";
        result.innerHTML = ("Bring an umbrella and dance in the rain.");

    } else {
        document.getElementById(img - sun).style.display = none;
        result.innerHTML = ("Just do whatever you want to do!");
    }


}