(function($) {
	
	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
		$('#cubeTransition>div:eq(0)').addClass('visible');

	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {

		$('#cubeTransition>div>.content:eq(' + (current- 1) + ')').fadeOut();
		$('#cubeTransition>div>.content:eq(' + (next- 1) + ')').css('display', 'block');
		

		if($('.welcome').hasClass('visible')) {
			$('.content__info2--block div:first-child').animate({'top':'0', 'opacity':'1'}, 1500 );
			$('.content__info2--block div:first-child').css({'top':'0','opacity':'1'});
		} else {
			$('.content__info2--block div:first-child').css({'top':'7rem','opacity':'0'});
		};

		if($('.advantages').hasClass('visible')) {
		$('.content__window').fadeIn(1000).animate({'top': '50%'});
		$('.content__window-shadow').delay(2000).fadeIn().animate({'top':'57%','right':'-12%'});

		} else {
			$('.content__window').css({'top': '-10%', 'display': 'none'});
			$('.content__window-shadow').css({'top':'50%','right':'-15%', 'display': 'none'});
		};
		
		
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass('visible');
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);	
		$('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
		$('#bullets>li:eq(' + (next - 1) + ')').addClass('active');
		setTimeout(function() {
			
		}, 50)
		
		animationOut(current - 1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass('visible');
		}, 500)

			

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			
			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 600)
		
	}

	$(document).ready(

	function() {
    
    //for scroll by mouse or MAC track pad
      var indicator = new WheelIndicator({
      callback: function(e){   
          if (e.direction == 'down') {
            trans('down')
          } else {
            trans('up')
          }
      }
    });
    indicator.getOption('preventMouse'); // true


		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down')
				} else if (direction == "down") {
					trans('up')
				}
			}
		});


		$('#bullets>li').on('click', function() {
			openIndex($(this).index() + 1);
		});

		$('.content__nav--page-number').on('click', function(){
			openIndex($(this).index() + 1);
		})

	});
})(jQuery);