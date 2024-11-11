import gsap from "gsap";
import debounce from '../utils/debounce.js';

const contactElement = document.querySelector('#contact');
const aboutElement = document.querySelector('#about');
const marqueeContact = contactElement.querySelector('.marquee');
const marqueeAbout = aboutElement.querySelector('.marquee');

const playAllMarquee = () => {
  playMarquee(marqueeContact, contactElement, window.innerWidth);
  playMarquee(marqueeAbout, aboutElement, marqueeAbout.offsetWidth);
};

const getGsapTweens = (marquee, widthElement) => {
  const distanceToTranslate = -1 * widthElement;
  const tween = gsap.fromTo(
    marquee.children,
    { x: 0 },
    { x: distanceToTranslate, duration: 5, ease: 'none', repeat: -1 },
  );
  
  const timeScaleTween = gsap.fromTo(tween, { 
    timeScale: 1, 
  }, {
    timeScale: 4, 
    duration: 1,
    paused: true,
  });

  return { tween, timeScaleTween };
};

const updateTimeScale = (event, tween) => {
  if (tween.isActive()) {
    return;
  }

  if (event.deltaY > 0) {
    tween.play();
    setTimeout(() => tween.reverse(), 1000);
  }
};

const playMarquee = (marquee, element, widthElement) => {
  const { tween, timeScaleTween } = getGsapTweens(marquee, widthElement);

  if (element.classList.contains('hidden')) {
    const targets = tween.targets();
    gsap.killTweensOf(targets);
    return;
  }
  tween.play();

  element.addEventListener('wheel', (event) => updateTimeScale(event, timeScaleTween));
};

export default () => {
  playAllMarquee();
  window.addEventListener('resize', debounce(() => playAllMarquee(), 250));
};