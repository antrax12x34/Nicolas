$(document).ready(function () {
  // Select all slides
  const slides = document.querySelectorAll(".slide");
  debugger;
  // loop through slides and set each slides translateX property to index * 100% 
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // select next slide button
  const nextSlide = document.querySelector(".btn-next");

  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;

  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
});

$(document).ready(function () {
    var URL = "https://localhost:7204/Contacts?CarId=1";

    $.get(URL, function (data) {
        debugger;
    });
}); 

    function setName(carlos){
    var carlos = $($(".slide img")[curSlide]).attr("alt");
    $(".DogName").html(carlos);
    };

    setName(carlos);

    $(".btn-next").on("click",function (curslide) {
    setName(rodrigo)
    });

     $(".btn-prev").on("click",function (curSlide) {
    setName(leo);
    });

  