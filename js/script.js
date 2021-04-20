$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});

$(function() {
  $('.a0203').hover(function() {
    $('.aa0203').css('display', 'block');
  }, function() {
  	$('.aa0203').css('display', '');
  });
});

$(function() {
  $('.a0204').hover(function() {
    $('.aa0204').css('display', 'block');
  }, function() {
  	$('.aa0204').css('display', '');
  });
});

$(function() {
  $('.a0210').hover(function() {
    $('.aa0210').css('display', 'block');
  }, function() {
  	$('.aa0210').css('display', '');
  });
});

$(function() {
  $('.a0216').hover(function() {
    $('.aa0216').css('display', 'block');
  }, function() {
  	$('.aa0216').css('display', '');
  });
});

$(function() {
  $('.a0220').hover(function() {
    $('.aa0220').css('display', 'block');
  }, function() {
  	$('.aa0220').css('display', '');
  });
});

$(function() {
  $('.a0226').hover(function() {
    $('.aa0226').css('display', 'block');
  }, function() {
  	$('.aa0226').css('display', '');
  });
});

$(function() {
  $('.a0318').hover(function() {
    $('.aa0318').css('display', 'block');
  }, function() {
  	$('.aa0318').css('display', '');
  });
});

$(function() {
  $('.b0104').hover(function() {
    $('.bb0104').css('display', 'block');
  }, function() {
  	$('.bb0104').css('display', '');
  });
});

$(function() {
  $('.b0211').hover(function() {
    $('.bb0211').css('display', 'block');
  }, function() {
  	$('.bb0211').css('display', '');
  });
});

$(function() {
  $('.b0706').hover(function() {
    $('.bb0706').css('display', 'block');
  }, function() {
  	$('.bb0706').css('display', '');
  });
});

$(function() {
  $('.b0707').hover(function() {
    $('.bb0707').css('display', 'block');
  }, function() {
  	$('.bb0707').css('display', '');
  });
});

$(function() {
  $('.b0710').hover(function() {
    $('.bb0710').css('display', 'block');
  }, function() {
  	$('.bb0710').css('display', '');
  });
});

$(function() {
  $('.b0714').hover(function() {
    $('.bb0714').css('display', 'block');
  }, function() {
  	$('.bb0714').css('display', '');
  });
});

$(function() {
  $('.b0715').hover(function() {
    $('.bb0715').css('display', 'block');
  }, function() {
  	$('.bb0715').css('display', '');
  });
});

$(function() {
  $('.b0803').hover(function() {
    $('.bb0803').css('display', 'block');
  }, function() {
  	$('.bb0803').css('display', '');
  });
});

$(function() {
  $('.b1025').hover(function() {
    $('.bb1025').css('display', 'block');
  }, function() {
  	$('.bb1025').css('display', '');
  });
});

$(function() {
  $('.b1026').hover(function() {
    $('.bb1026').css('display', 'block');
  }, function() {
  	$('.bb1026').css('display', '');
  });
});

$(function() {
  $('.b1027').hover(function() {
    $('.bb1027').css('display', 'block');
  }, function() {
  	$('.bb1027').css('display', '');
  });
});

$(function() {
  $('.b1109').hover(function() {
    $('.bb1109').css('display', 'block');
  }, function() {
  	$('.bb1109').css('display', '');
  });
});

$(function() {
  $('.b1125').hover(function() {
    $('.bb1125').css('display', 'block');
  }, function() {
  	$('.bb1125').css('display', '');
  });
});

$(function() {
  $('.b1229').hover(function() {
    $('.bb1229').css('display', 'block');
  }, function() {
  	$('.bb1229').css('display', '');
  });
});

$(function() {
  $('.c0502').hover(function() {
    $('.cc0502').css('display', 'block');
  }, function() {
  	$('.cc0502').css('display', '');
  });
});

$(function() {
  $('.c0726').hover(function() {
    $('.cc0726').css('display', 'block');
  }, function() {
  	$('.cc0726').css('display', '');
  });
});

$(function() {
  $('.c1016').hover(function() {
    $('.cc1016').css('display', 'block');
  }, function() {
  	$('.cc1016').css('display', '');
  });
});

$(function() {
  $('.c1222').hover(function() {
    $('.cc1222').css('display', 'block');
  }, function() {
  	$('.cc1222').css('display', '');
  });
});

$(function() {
  $('.modslist1').hover(function() {
    $('.modslist').css('display', 'block');
  }, function() {
    setTimeout(function(){
    $('.modslist').css('display', '');
    },2000);
  });
});

$(function() {
  $('.infotab1').hover(function() {
    $('.infotab').css('display', 'block');
  }, function() {
    setTimeout(function(){
    $('.infotab').css('display', '');
    },2000);
  });
});