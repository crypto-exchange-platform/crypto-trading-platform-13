export const particlesConfig = {
  particles: {
    number: { value: 120 },
    color: { value: '#ffffff' },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#86B13F', 
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false },
    },
    modes: {
      grab: {
        distance: 500,
        line_linked: { opacity: 1 },
      },
    },
  },
};
 