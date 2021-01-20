window.onscroll = () => { scrollFunction()};

function scrollFunction() {
    
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("nav-items").style.color = "blue";
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementById("nav-items").style.color = "white";
    }
}