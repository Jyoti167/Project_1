var cross=document.querySelector("#cross")
var equal_to=document.querySelector("#equal-to")
var content=document.querySelector(".content")
var container=document.querySelector(".container1")
var img=document.querySelector(".img")
equal_to.addEventListener("click",function(){
    content.style.transform="translateX(0%)"
})

cross.addEventListener("click",function(){
    content.style.transform="translateX(100%)"
})
function show() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
show()
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

// var gsap=gsap.timeline()
gsap.from(".container1 nav h1",{
  opacity:0,
  duration:2,
  y:30,
})
gsap.from(".container1 .img img",{
    opacity:0,
    duration:2,
    delay:0,
    y:30,
})
gsap.from(".img h1",{
    opacity:0,
    duration:3,
    y:30,
    delay:1,
})
gsap.from("#h4",{
    opacity:0,
    duration:3,
    y:30,
    delay:0.5,
})
gsap.from("#arrow",{
  opacity:0,
  duration:3,
  y:30,
  dealy:1,
})
gsap.from(".container2 img",{
  opacity:0,
  duration:2,
  y:30,
  // delay:3,
  // scrollTrigger:{
  //   trigger:".container2 img",
  //   scroll:".body",
  //   markers:true,
  //   // scrub:true,
  //   // pin:true,
  //   start:"top-50%",
  //   end:"top-55%",
    
  // },
})
gsap.from("#content3 ",{
    opacity:0,
    duration:3,
    y:30,
    // delay:3,
    // scrollTrigger:{
    //   trigger:"#content3",
    //   scroll:"body",
    //   markers:true,
    // },
})
gsap.from(".content3 #arrow",{
    opacity:0,
    duration:3,
    y:30,
    delay:3,
})
gsap.from(".container3 h1",{
    opacity:0,
    duration:3,
    y:30,
    delay:5,
})
gsap.from(".container3 h4",{
    opacity:0,
    duration:3,
    y:30,
    delay:5.2,
})
gsap.from(".container3 button",{
        opacity:0,
        duration:2,
        y:30,
        delay:5.3,
    })
gsap.from("#content4",{
      opacity:0,
      duration:2,
      y:30,
      delay:5.6,
  })
gsap.from("#content5",{
    opacity:0,
    duration:2,
    y:30,
    delay:5.8,
})
gsap.from(".signup h1",{
  opacity:0,
  duration:2,
  y:30,
  delay:6,
})
gsap.from(".signup h1",{
  opacity:0,
  duration:2,
  y:30,
  delay:6.2
})
gsap.from(".signup input",{
  opacity:0,
  duration:2,
  y:30,
  delay:6.4,
})
gsap.from(".signup button",{
  opacity:0,
  duration:2,
  y:30,
  delay:6.6
})
gsap.from("#follow",{
  opacity:0,
  duration:2,
  y:30,
  delay:6.8,
})
gsap.from("#icon",{
  opacity:0,
  duration:2,
  y:30,
  delay:6.9,
})
gsap.from(".container7 img",{
  opacity:0,
  duration:2,
  y:30,
  delay:7,
})
gsap.from(".container6",{
  opacity:0,
  duration:2,
  y:30,
  delay:7.3
})
gsap.from("#first",{
  opacity:0,
  duration:2,
  y:30,
  delay:7.5
})
gsap.from("#second",{
  opacity:0,
  duration:2,
  y:30,
  delay:7.7
})
gsap.from("footer",{
  opacity:0,
  duration:2,
  y:30,
  delay:7.9,
})