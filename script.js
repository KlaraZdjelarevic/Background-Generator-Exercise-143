var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttoncall = document.querySelector(".buttonRandGenerator");

function colorFirstPageLoad () {
    var color1Load = document.getElementById("color1Load").value = "#ff0000";
    var color2Load = document.getElementById("color2Load").value = "#ffff00";
    body.style.background ="linear-gradient(to right, " + color1Load + ", " + color2Load + ")";
    css.textContent = body.style.background + ";";
}

window.addEventListener("load", colorFirstPageLoad);

function setGradient() {
    body.style.background ="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function RandomHexColGen () {
    const random_hex_color_code1 = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    var ColRan1 = document.getElementById("colorRandom1").value = random_hex_color_code1();
    const random_hex_color_code2 = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    var ColRan2 = document.getElementById("colorRandom2").value = random_hex_color_code2();
    css.textContent1 = "First Random Value " + ColRan1 + " Second Random Value " + ColRan2;
    body.style.background ="linear-gradient(to right, " + ColRan1 + ", " + ColRan2 + ")";
    document.getElementById("GeneratedColors").innerHTML = "First Generated Color: " + ColRan1 + ", Second Generated Color: " + ColRan2;
}

buttoncall.addEventListener("click", RandomHexColGen);

/*https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
https://www.w3schools.com/css/css3_gradients.asp*/

/*  SAME BUT IN HTML FILE WITOUTH calling setGradient in the JavaScript file
    <input oninput="setGradient()" class="color1" type="color" name="colo1" value="#00ff00">
    <input oninput="setGradient()"class="color2" type="color" name="color2" value="#ff0000">*/

/*in HTML the oninput can have just ONE Attribute
vs. in JavaScript we can add a lot more of the functions and Attributes*/