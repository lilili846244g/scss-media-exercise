gsap.registerPlugin(ScrollTrigger);

let hero = gsap.timeline();
hero.from(".main-title h3", 2, {
  y: -30,
  opacity: 0,
  ease: "easeIn",
});

hero.from(".hero-text h1 ", 1.5, {
  x: 100,
  scale: 1.5,
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
    //markers: true,
  },
});
/* ============== wrapper-1 ============= */
wrapperAnimation.fromTo(
  "#wrapper-1 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-1",
  4,

  {
    y: "2rem",
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
  "#wrapper-2 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-2",
  4,
  {
    y: "2rem",
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
  "#wrapper-3 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-3",
  4,
  {
    y: "2rem",
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
  "#wrapper-4 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-4",
  4,
  {
    y: "2rem",
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
  "#wrapper-5 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-5",
  4,
  {
    y: "2rem",
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
  "#wrapper-6 .scale-main-title",
  2,

  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);
wrapperAnimation.fromTo(
  "#wrapper-6",
  4,
  {
    y: "2rem",
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
  backgroundColor: "rgb(93, 205, 240)",
});

const hotels = gsap.utils.toArray(".hotel-ovl");
hotels.forEach((hotel) => {
  gsap.from(hotel, 1, {
    x: "-105%",
    ease: Power2.easeInOut,
    scrollTrigger: {
      trigger: hotel,
      start: "top 80%",
      end: "bottom bottom",
      scrub: 4,
      //markers: true,
    },
  });
});

const textBoxs = gsap.utils.toArray(".box-move");
textBoxs.forEach((textBox) => {
  gsap.to(textBox, 1.5, {
    y: "300px",
    ease: Power2.easeInOut,
    scrollTrigger: {
      trigger: textBox,
      start: "top 33%",
      end: "bottom bottom",
      scrub: 4,
      //markers: true,
    },
  });
});

/********** left-1a ***************/
let cardAn1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-1a",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn1.from(".left-1a", 1, {
  x: "-110%",
  ease: Power2.easeInOut,
});
cardAn1.from(".left-1a h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn1.from(".left-1a p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn1.from(".left-1a img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */

/********** right-1b ***************/
let cardAn2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".right-1b",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    markers: true,
  },
});

cardAn2.from(".right-1b", 1, {
  x: "110%",
  ease: Power2.easeInOut,
});
cardAn2.from(".right-1b h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn2.from(".right-1b p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn2.from(".right-1b img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */
/********** left-2c ***************/
let cardAn3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-2c",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn3.from(".left-2c", 1, {
  x: "-110%",
  ease: Power2.easeInOut,
});
cardAn3.from(".left-2c h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn3.from(".left-2c p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn3.from(".left-2c img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */

/********** right-2d ***************/
let cardAn4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".right-2d",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn4.from(".right-2d", 1, {
  x: "110%",
  ease: Power2.easeInOut,
});
cardAn4.from(".right-2d h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn4.from(".right-2d p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn4.from(".right-2d img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */
/********** left-3e ***************/
let cardAn5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-3e",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn5.from(".left-3e", 1, {
  x: "-110%",
  ease: Power2.easeInOut,
});
cardAn5.from(".left-3e h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn5.from(".left-3e p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn5.from(".left-3e img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */

/********** right-3f ***************/
let cardAn6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".right-3f",
    start: "top 95%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn6.from(".right-3f", 1, {
  x: "110%",
  ease: Power2.easeInOut,
});
cardAn6.from(".right-3f h1", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn6.from(".right-3f p", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
cardAn6.from(".right-3f img", 0.2, {
  opacity: 0,
  y: -20,
  ease: Power2.easeIn,
});
/**************************** */

let cardAn7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guidelinr-part",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 4,
    //markers: true,
  },
});

cardAn7.from(".guidelinr", 0.5, {
  opacity: 0,
  x: "-110%",
  ease: Power2.easeInOut,
});
cardAn7.from(".guidelinr h1", 0.5, {
  opacity: 0,
  y: -20,
  ease: Power2.easeInOut,
});
cardAn7.from(".guidelinr p", 0.5, {
  opacity: 0,
  y: -20,
  ease: Power2.easeInOut,
});
cardAn7.from(".guidelinr-img", 0.8, {
  opacity: 0,
  y: -20,
  ease: Power2.easeInOut,
});
