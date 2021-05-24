var slideIndex = 1;
// var width = 
show_slides(slideIndex);

function plus_slide(n) {
  show_slides(slideIndex += n);
}

function show_slides(n) {
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length)
    {
        slideIndex = 1
    }

    if (n < 1) 
    {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "flex";
}

