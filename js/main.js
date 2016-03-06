// Main JavaScript
jQuery(document).ready( function($)
								{
									//$('.services div').css("visibility","hidden");
									$('.isoleft, .isoright').css("visibility","hidden");
									$(window).scroll(function()
									{
										
															if($(this).scrollTop()>200)
															{
																$('.top').fadeIn(1000);
															}
															else
															{
																$('.top').fadeOut(200);
															}



															// if($(this).scrollTop()>200)
															// {
															// 	$('.services div').css("visibility","visible");
															// 	$('.services div').addClass('animated fadeInRight');
															// }

															if($(this).scrollTop()>600)
															{
																$('.isoleft, .isoright').css("visibility","visible");
																$('.isoleft').addClass('animated fadeInLeft');
																$('.isoright').addClass('animated fadeInRight');
															}
															
									});
										

									$('.top').click(function() {
										
									            $('html, body').animate({
										        scrollTop: 0}, 500);
									                })
						});

							