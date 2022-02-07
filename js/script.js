$('#slide-jackpot-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
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


  

  $('#slide-promotion-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
  })
  
  var x_owl = $('#slide-promotion-carousel');
  x_owl.owlCarousel();
  function goToNext() {    
      x_owl.trigger('next.owl.carousel');
  }
  function goToPrev() {    
      x_owl.trigger('prev.owl.carousel');
  }



