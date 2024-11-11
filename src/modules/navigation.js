import gsap from "gsap";
import infiniteMarquee from "./infiniteMarquee";

const activeName = 'active-nav';
const redColor = '#DC2626';

const navItems = document.querySelector('#nav').children;
const mobileNavContainer = document.querySelector('#mobile-nav-wrap');

const closeMobileNavContainer = (container, viewport) => {
  if (viewport !== 'mobile') return;
  gsap.to(container, { x: '-100%', duration: 0.5 });
};

const toggleMobileNav = (data, isActive) => {
  const { nav, closeItem, container, tl } = data;
  if (tl.isActive()) {
    return;
  }
  if (isActive) {
    tl.to(container, { x: 0 })
      .from(closeItem, { opacity: 0, x: 100 })
      .from(nav, { opacity: 0 }, '<');
    return;
  }
  tl.to(container, { x: '-100%' });
};

const toggleContent = (activeContentName, newActiveContentName, viewport) => {
  const contentElements = document.querySelector('#content-wrap').children;
  const mobileNavContainer = document.querySelector('#mobile-nav-wrap');
  const mobileNavItems = document.querySelector('nav').children;
  const activeItemDesktop = [...navItems].find((item) => item.classList.contains(activeName));

  const newActiveItemMobile = [...mobileNavItems].find(
    (item) => item.textContent.toLowerCase() === newActiveContentName
  );
  const newActiveItemDesktop = [...navItems].find((item) => {
    const text = item.textContent.trim().toLowerCase();
    return text === newActiveContentName;
  });

  if (newActiveItemDesktop.classList.contains(activeName)) {
    closeMobileNavContainer(mobileNavContainer, viewport);
    return;
  }

  const activeItemMobile = [...mobileNavItems].find(
    (item) => item.textContent.toLowerCase() === activeContentName
  );

  const activeContent = [...contentElements].find((item) => item.id === activeContentName);
  const newActiveContent = [...contentElements].find((item) => item.id === newActiveContentName);
  const newActiveBgAnim = newActiveItemDesktop.querySelector('div');
  const activeBgAnim = activeItemDesktop.querySelector('div');


  activeItemDesktop.classList.remove(activeName);
  activeItemMobile.classList.remove('text-white');

  gsap.killTweensOf(activeContent);
  gsap.killTweensOf(newActiveContent);
  gsap.set(newActiveContent, { x: 0, duration: 0.5 });
  gsap.to(activeContent, { x: -1 * window.innerWidth, duration: 0.5, onComplete: () => {
    activeContent.classList.remove('flex');
    activeContent.classList.add('hidden');
    newActiveContent.classList.remove('hidden');
    newActiveContent.classList.add('flex');
    gsap.from(newActiveContent, { x: window.innerWidth, duration: 0.5 });
    infiniteMarquee();
  }})

  gsap.to(activeBgAnim, { width: '0%' });

  newActiveItemDesktop.classList.add(activeName);
  newActiveItemMobile.classList.add('text-white');

  gsap.to(newActiveBgAnim, { width: '100%' });
  closeMobileNavContainer(mobileNavContainer, viewport);
  infiniteMarquee();
};

const changeActiveNavItem = (event, viewport) => {
  const target = event.currentTarget;
  const textOfNewActive = target.textContent.trim().toLowerCase();
  const activeItemDesktop = [...navItems].find((item) => item.classList.contains(activeName));
  const textOfActive = activeItemDesktop.textContent.trim().toLowerCase();
  toggleContent(textOfActive, textOfNewActive, viewport);
};

const handleMobileNav = (container, currentNavItem) => {
  const nav = container.querySelector('nav');
  const navItems = nav.querySelectorAll('button');
  const currentItemText = currentNavItem.querySelector('span').textContent;
  const closeItem = container.querySelector('#nav-close');
  const menuItem = document.querySelector('#nav-menu');

  const tl = gsap.timeline();
  gsap.set(container, { x: '-100%', duration: 0.5 });
  const data = { nav, closeItem, container, tl };

  navItems.forEach((item) => {
    if (item.textContent === currentItemText) {
      item.classList.add('text-white');
    }
    item.addEventListener('click', (event) => changeActiveNavItem(event, 'mobile'));
  });

  menuItem.addEventListener('click', () => toggleMobileNav(data, true));
  closeItem.addEventListener('click', () => toggleMobileNav(data, false));
}

const styleHoverOnNavItem = (event) => {
  const target = event.currentTarget;
  if (target.classList.contains(activeName)) {
    return;
  }

  const background = target.querySelector('div');
  if (event.type === 'mousemove') {
    gsap.to(background, { width: '100%' });
    return;
  }
  if (event.type === 'mouseleave') {
    gsap.to(background, { width: '0%' });
    return;
  }
};

export default () => {
  const nav = document.querySelector('#nav');
  const navElements = nav.children;
  const active = nav.querySelector('.active-nav');
  const contactBtn = document.querySelector('.contact');

  const backgroundItems = [...navElements].map((item) => item.querySelector('div'));
  backgroundItems.forEach((item) => {
    const isActive = item.parentNode.classList.contains(activeName);
    if (isActive) {
      gsap.set(item, { width: '100%' });
      return;
    }
    gsap.set(item, { width: '0%' })
  });

  [...navElements].forEach((navItem) => {
    navItem.addEventListener('click', (event) => {
      event.stopPropagation();
      changeActiveNavItem(event, 'desktop');
    });

    navItem.addEventListener('mousemove', styleHoverOnNavItem);
    navItem.addEventListener('mouseleave', styleHoverOnNavItem);
  });

  contactBtn.addEventListener('click', () => toggleContent('about', 'contact', 'desktop'));

  handleMobileNav(mobileNavContainer, active);
};