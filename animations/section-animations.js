import gsap from 'gsap';

const fadeUp = (node1) => {
  gsap.to([node1], {
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: 'power3',
    stagger: {
      amount: 0.4,
    },
  });
};

export default fadeUp;
