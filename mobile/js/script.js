$('#slide-jackpot-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
  })
  
  var c_owl = $('#slide-jackpot-carousel');
  c_owl.owlCarousel();
  function goToNext() {    
      c_owl.trigger('next.owl.carousel');
  }
  function goToPrev() {    
      c_owl.trigger('prev.owl.carousel');
  }


