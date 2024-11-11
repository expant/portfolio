import gsap from "gsap";
import debounce from '../utils/debounce.js';

const avatarMiniFollower = document.querySelector('#follower');
const avatarMiniContainer = document.querySelector('#follower-container');
const avatarFollower = document.querySelector('#avatar-follower');
const avatarContainer = document.querySelector('#main-wrap');
const avatarMiniProps = { distance: 50, duration: 1 };
const avatarProps = { distance: 0, duration: 10 };

const playAllFollowers = () => {
  playFollower(avatarMiniFollower, avatarMiniContainer, avatarMiniProps);
  playFollower(avatarFollower, avatarContainer, avatarProps);
};

const playFollower = (follower, container, props) => {
  const { duration, distance } = props;

  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) + distance;
    const y = event.clientY - rect.top;
  
    gsap.killTweensOf(follower);
    const tl = gsap.timeline();
    tl.to(follower, { duration: 0.4, scale: 1, visibility: 'visible' })
      .to(follower, { duration, x, y, ease: "expo.out" }, '<');
  });
  
  container.addEventListener('mouseleave', () => {
    if (follower.id === avatarFollower.id) {
      return;
    }
    gsap.killTweensOf(follower);
    gsap.to(follower, {
      duration: 1,
      scale: 0,
      ease: "expo.out",
    });
  });
};

export default () => {
  // FIXME: аватар из блока about должен анимироваться только когда about активен 
  playAllFollowers();
  window.addEventListener('resize', debounce(() => playAllFollowers(), 250));
}