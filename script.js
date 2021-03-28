$('.catalog__nav').slick({
	
	variableWidth: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 426,
      settings: {
		 mobileFirst:true,
        slidesToShow: 1,
		slidesToScroll:1,
      }
    }, 
  ]
});
$('.video__slider').slick({
        infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		mobileFirst: true,
		responsive: [
			{
			breakpoint: 426,
			settings: {	
			slidesToShow: 3,
			slidesToScroll:3,
      }
    }, 
  ]
});
$('.letters__slider').slick({
        infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,	
		mobileFirst: true,
		responsive: [
			{
			breakpoint: 426,
			settings: {	
			slidesToShow: 3,
			slidesToScroll:3,
      }
    }, 
  ]
});