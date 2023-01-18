var swiper = new Swiper(".myLanding", {
    slidesPerView: 3,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    spaceBetween: 20,
    grabCursor: true,
  });


  var swiper = new Swiper(".myFeatures", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        "@1.75" : {
          slidesPerView: 5,
          spaceBetween: 30,
        }
      },
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  $(".eyeShow").click((e)=>{
    // console.log();
    let imgAttr = $(e.target.parentElement.parentElement.parentElement).find('img').attr('src')
    $(".features-modal img").attr('src',imgAttr)
    let newPrice = $(e.target.parentElement.parentElement.parentElement).find('.newPrice').text()
    $(".features-modal .newPrice").text(newPrice)
  })