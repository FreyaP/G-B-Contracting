window.onscroll = () => { scrollFunction()};



function scrollFunction() {
    var links = document.getElementsByClassName("navLink");
    var i;

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "rgb(255, 255, 255)";
        for (i = 0; i < links.length; i++) {
            links[i].style.color = "#272D31";
        }
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
        for (i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
    }
}