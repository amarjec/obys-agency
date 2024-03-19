function loco () {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco ()


function loader() {
    var tl = gsap.timeline();

tl.from ("#line1-part1 h5, h6", {
    y: 150,
    duration: .5,
    opacity: 0,
    onStart : function() {             // on start function is used here to start couting when the opacity become 1.
        var timer = document.querySelector("#line1-part1 h5")
        var count =0;
        setInterval(function() {
                if(count <= 100) {
                    timer.innerHTML = count++;
         }   
        }, 31)
    }
}, "hello")
tl.from (".line h1, h2", {
    y: 150,
    stagger: .2,
    duration: .5,
    delay: 0.2,
}, "hello")
tl.to ("#loader", {
    delay: 2.4,
    duration: .5,
    top: "-100%",
    display: "none",
}, "loader slide") 

}
loader();





