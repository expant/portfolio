import gsap from "gsap";

const redColor = '#DC2626';

const playGsap = (element, eventName) => eventName === 'mousemove'
  ? gsap.to(element, { color: redColor, duration: 0.2 })
  : gsap.to(element, { color: 'white', duration: 0.2, delay: 0.5 });

const animateTextNodes = (element) => {
  const words = element.textContent.split(' ');
  element.innerHTML = words
    .map((word, i) => i === 0
      ? `<span class="px-1 bg-red-600">${word}</span>`
      : `<span class="-mx-2 px-2.5">${word}</span>`
    )
    .join(' ');

  const wordsElement = element.querySelectorAll('span:not(:first-child)');
  wordsElement.forEach((wordEl) => {
    wordEl.addEventListener('mousemove', () => playGsap(wordEl, 'mousemove'));
    wordEl.addEventListener('mouseleave', () => playGsap(wordEl, 'mouseleave'));
  });
};

export default () => {
  const textContact = document.querySelector('#text-contact');
  animateTextNodes(textContact);
}; 