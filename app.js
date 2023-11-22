const c = console.log.bind(document)
gsap.registerPlugin(ScrollTrigger);

var triangle = document.getElementById("path-line4");
var length = triangle.getTotalLength();
var header = document.querySelector(".header")
var face = document.querySelector(".face")
var contents = document.querySelectorAll(".content")
var farbod = document.getElementById("farbod")
var farbod_length = farbod.getTotalLength()


// triangle.style.strokeDasharray = length;
// triangle.style.strokeDashoffset = length;

farbod.style.strokeDasharray = farbod_length;
farbod.style.strokeDashoffset = farbod_length;




  // gsap.to("#path-line4", {
  //   strokeDashoffset : 0
  //   ,scrollTrigger: {
  //     trigger: ".story",
  //     start: "top 35%",
  //     end: "bottom 10%",
  //     scrub: 0.9,
  //     // markers: true,
  //     id: "scrub"
  //   }
  // });
console.log(farbod.style.strokeDashoffset)

  gsap.to("#farbod", {
    strokeDashoffset: 0,
      duration: 7,
      scrollTrigger: {
        trigger: ".explain2",
        markers: false,
        start: "top 90%",
      }

  })

  // gsap.to(".cls-1", {
  //   strokeDashoffset : 0,
  //   duration: 2
  //   ,scrollTrigger: {
  //     trigger: ".story",
  //     start: "50% 35%",
 
  //   }
  // });

    for (let index = 1; index < contents.length; index++) {
      contents[index].style.display = "none";
    }

    window.addEventListener("scroll", e => {
      // console.log(window.innerWidth)
      if (window.scrollY < face.clientHeight){
        header.style.color = "white"
        console.log("white")
      }
      else {
        header.style.color = "black"
        console.log("black")
      }

    });


dummy = document.querySelector(".dummy")
tabs = document.querySelectorAll(".tab")

dummy.style.left = tabs[0].offsetLeft + 'px'
dummy.style.right = tabs[0].offsetRight + 'px'
dummy.style.width = tabs[0].getBoundingClientRect().width + 'px'


tabs.forEach((tab, index) => {
  tab.addEventListener("click", e =>{
    size = tab.getBoundingClientRect()
    dummy.style.left = tab.offsetLeft + 'px'
    dummy.style.right = tab.offsetRight + 'px'
    dummy.style.width = size.width + 'px'
    dummy.style.height = size.height + 'px'
    contents.forEach(content => {
      content.style.display = "none";
    })
    contents[index].style.display = "block"
    c(index)
  })
});

//tab logic


// tabcontent = document.getElementsByClassName("tabcontent");
// for (i = 0; i < tabcontent.length; i++) {
//   tabcontent[i].style.display = "none";
// }

// tablinks = document.getElementsByClassName("tablinks");
// for (i = 0; i < tablinks.length; i++) {
//   tablinks[i].className = tablinks[i].className.replace(" active", "");
// }

// document.getElementById(cityName).style.display = "block";
// evt.currentTarget.className += " active";
  