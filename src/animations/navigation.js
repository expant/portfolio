import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const enlargeNavItem = (id) => {
  const sign = id === 'about' ? '-' : '';

  ScrollTrigger.create({
    trigger: `#trigger-${id}`,
    start: 'top center',
    end: 'bottom bottom',
    onEnter: () => {
      gsap.to(`#${id}`, { 
        x: sign + 200,
        y: 100,
        scale: 3,
        duration: 0.5,
      });
    },
    onLeave: () => {
      gsap.to(`#${id}`, { 
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
      });
    },
    scrub: 1,
    toggleActions: 'restart restart reverse restart',
    markers: true,
  });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: `#trigger-${id}`,
  //     start: 'top center',
  //     end: 'center center',
  //     scrub: 1,
  //     toggleActions: 'play reset reverse none',
  //     markers: true,
  //   },
  // })

  // tl.to(`#${id}`, {
  //   x: sign + 200,
  //   y: 100,
  //   scale: 3,
  //   duration: 0.1,
  // });

  // tl.to(`#${id}`, { x: 0, y: 0, scale: 1, duration: 1 });
};

export { enlargeNavItem };