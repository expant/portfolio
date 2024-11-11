import gsap from "gsap";

export default () => {
  const mainContainer = document.querySelector('.main-container');

  // document.fonts.ready.then((fontFaceSet) => {
  //   const fontFaces = [...fontFaceSet];
    
  //   // mainContainer.classList.add('block');
  //   mainContainer.classList.remove('opacity-0');
  //   mainContainer.classList.add('opacity-100');

  //   // setTimeout(() => {
      
  //   // }, 3000)

  //   console.log(fontFaces);
  //   console.log(fontFaces.map((f) => f.status));
  // });
  const preloaderWrap = document.querySelector('#preloaderWrap');
  const preloader = preloaderWrap.querySelector('#preloader');
  const preloaderText = preloader.querySelector('#preloaderText');
  const tl = gsap.timeline();
  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    preloaderText.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);

      tl.to(preloaderText, { opacity: 0, delay: 0.5 })
        .to(preloader, { scale: 30, duration: 2 })
        .to(preloaderWrap, { display: 'none' })
        .to(mainContainer, { opacity: '1' });
    }
  }, 1);
};