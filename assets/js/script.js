var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}

// ви можете зробити скільки завгодно слайдів

var slide1 = new Slide(
    "Связаться с нами",
    "contact",
    "public/images/slide1.jpg",
    "contact.html"
);


var slide2 = new Slide(
    "Наши таблицы",
    "table",
    "public/images/slide2.jpg",
    "table.html"
);


var slide3 = new Slide(
    "Наши видео",
    "media",
    "public/images/slide3.jpg",
    "media.html"
);


function buildSlider() {
    var myHTML;
    for (var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            //"<button class='sliderbtn' onclick=" + prevSlide() + ">Prev</button>" +
            //"<button class='submitbtn' onclick=" + nextSlide() + ">Next</button>" +
            "</div>" +
            "</div>";
    }

    document.getElementById('mySlider').innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

    currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === (slideArray.length - 1)) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    currentSlideIndex = nextSlideIndex;
}