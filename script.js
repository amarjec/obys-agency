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
loco ();


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
    ease: Power1,
}, "hello")

tl.to ("#loader", {
    delay: 2,
    duration: .4,
    opacity: 0, 
    ease: Power1,  
})

tl.from("#pg1", {
  y: 1200,
  duration: .2,
  ease: Power4,
})

tl.to ("#loader", {
   display: "none",
})

tl.from ("#pg1 #nav h3", {
  opacity: 0,
  duration: .2,
},"nav-hero")

tl.from ("#pg1 .hero h1", {
  y: 120,
  stagger: .2,
  duration: .5,
},"nav-hero")



}
loader();


function cursor(){
  var body = document.querySelector("body");
body.addEventListener("mouseover", function(det){
    gsap.to("#crsr",{
      left: det.x,
      top: det.y,
      ease: Power1,
    });
});
}
cursor();


Shery.makeMagnet("#rnav h3, #lnav i");

function pg3Animation () {
  Shery.imageEffect(".image-div", {
    style: 5,
   config: {"a":{"value":3.21,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7857059734055183},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.15,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}},
   gooey: true,
  })
}
pg3Animation();
