gsap.registerPlugin(ScrollTrigger);

let hero = gsap.timeline();
hero.from(".main-title h3", 0.5, {
  y: -20,
  opacity: 0,
  ease: "easeIn",
});

const wrapper = gsap.utils.toArray(".img-wrapper");
let wrapperAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".scale-part",
    pin: true,
    start: "top top",
    end: () => "+=" + innerHeight * wrapper.length,
    scrub: 4,
    markers: true,
  },
});
/* ============== wrapper-1 ============= */
wrapperAnimation.fromTo(
  "#wrapper-1",
  4,

  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);

/* ============== wrapper-2 ============= */
wrapperAnimation.fromTo(
  "#wrapper-2",
  4,
  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);
/* ============== wrapper-3 ============= */
wrapperAnimation.fromTo(
  "#wrapper-3",
  4,
  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);

/* ============== wrapper-4 ============= */
wrapperAnimation.fromTo(
  "#wrapper-4",
  4,
  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);

/* ============== wrapper-5 ============= */
wrapperAnimation.fromTo(
  "#wrapper-5",
  4,
  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);

/* ============== wrapper-6 ============= */
wrapperAnimation.fromTo(
  "#wrapper-6",
  4,
  {
    scale: 0.7,
    ease: Power2.easeInOut,
  },
  {
    scale: 2.2,
    x: "10rem",
    y: "5rem",
    opacity: 0,
  }
);
wrapperAnimation.to(".scale-part", 0.5, {
  opacity: 0.5,
  backgroundColor: "#fff",
});
