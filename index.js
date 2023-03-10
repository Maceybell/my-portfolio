let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  nav: false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1600: {
      items: 4,
      guttter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    400: {
      items: 1,
    },
  },
});


