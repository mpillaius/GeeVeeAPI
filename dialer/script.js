$(document).ready(function(){
	var pad = $("#pad");
	var num = $("#number");
	var del = $("#delete");

	num.width(pad.width() - 60);
	del.css("margin-left", num.width()+20);
	del.hide();

	$("#pad td").on('touchstart', function(){
		if(!$(this).hasClass('call-icon')){
			$(this).addClass('pressed');
			num.text(num.text() + $(this).text());
		}
		else{
			if(num.text().trim() != ''){
				var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
	    			if (filter.test(num.text().trim())) {
					var iframe = document.createElement("IFRAME");
					iframe.setAttribute("src", 'data:text/plain,');
					document.documentElement.appendChild(iframe);
					window.frames[0].window.alert('Call will be initialized!');
					iframe.parentNode.removeChild(iframe);

					var number = num.text().trim();
					num.text('');
					del.hide();
					$.post('gv.php', {number: number}, function(){ });
				}
			}
		}
	});
	$("#pad td").on('touchend', function(){
		if(!$(this).hasClass('call-icon')){
			del.show();
			$(this).removeClass('pressed');
		}
	});
	
	del.on("touchend", function(){
		var numText = num.text();
		if(numText.length){
			var trimmed = numText.substr(0, numText.length - 1);
			num.text(trimmed);
			if(trimmed == ''){
				$(this).hide();
			}
		}
	});
});

