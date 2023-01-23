   $('.open_close_nav').click(function(){
    $('.responsive_nav_bar').toggleClass('responsive_bar');
    });
    
    $('.mobile_res_toggle_btn').click(function () {
      $('.mobile_res_toggle_content').toggleClass('responsive_bar');
  });
  
   
   //  banner script start
    $(document).ready(function() {      
      $('.Banner_slider').slick({
          slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        nextArrow: '<a class="banner_next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
      prevArrow: '<a class="banner_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        });
        }); 
      
//  banner script end

//  category script start
$(document).ready(function () {
  $(".product_category_slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          dots: false,
    arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          dots: false,
    arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          dots: false,
    arrows: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 1500,
          dots: false,
    arrows: false,
        },
      },
    ],
  });
});
//  category script end


//  product_list_slider script start
$(document).ready(function () {
   $(".product_list_slider").slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     dots: false,
     arrows: true,
     appendArrows: $('.product_box_slider_arrow_box'),
     nextArrow: '<a class="product_box_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
     prevArrow: '<a class="product_box_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
     responsive: [
       {
         breakpoint: 1400,
         settings: {
           slidesToShow: 5,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 1140,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
     ],
   });
 });
 //  product_list_slider script end

 //  product_list_slider_two script start
$(document).ready(function () {
   $(".product_list_slider_two").slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     dots: false,
     arrows: true,
     appendArrows: $('.product_box_slider_arrow_box_two'),
     nextArrow: '<a class="product_box_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
     prevArrow: '<a class="product_box_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
     responsive: [
       {
         breakpoint: 1400,
         settings: {
           slidesToShow: 5,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 1140,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
     ],
   });
 });
 //  product_list_slider_two script end


 
 //  product_list_slider_three script start
$(document).ready(function () {
   $(".product_list_slider_three").slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     dots: false,
     arrows: true,
     appendArrows: $('.product_box_slider_arrow_box_three'),
     nextArrow: '<a class="product_box_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
     prevArrow: '<a class="product_box_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
     responsive: [
       {
         breakpoint: 1400,
         settings: {
           slidesToShow: 5,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 1140,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
     ],
   });
 });
 //  product_list_slider_three script end