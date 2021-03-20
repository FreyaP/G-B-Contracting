window.onscroll = () => {
    var links = document.getElementsByClassName("navLink");
    var i;

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "rgb(255, 255, 255, 0.8)";
        document.getElementById("header-img").style.width = "3rem";
        for (i = 0; i < links.length; i++) {
            links[i].style.color = "#272D31";
        }
        hamburger.style.color = "#272D31";
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementById("header-img").style.width = "5rem";
        for (i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        hamburger.style.color = "white";
    }
}

const hamburger = document.querySelector('button[aria-expanded]');


hamburger.addEventListener('click', ({ target }) => {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
   
})



