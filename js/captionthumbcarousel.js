(function( $ ) {
 
    $.fn.captionthumbcarousel = function(options) {
 
        
        var settings = $.extend({
        start:0,
        numberofthumbs: 4,
        captionTitleTag: 'h1',
        captionContentTag: 'p',
        previousSelector: '.previousimage',
        nextSelector: '.nextimage'
        }, options );
        
        this.hide();
        var number = $(this).find('img').length;
        var current = settings.start;
	    var images = $.makeArray($(this).find('img').clone());
	    var ci = $.makeArray($(this).find('img').clone());
	    
	    for (var i = 0; i < settings.numberofthumbs; i++) {$('#thumblist').append(images[i]);}
	    
	    $.each([number-1, current, current+1], function(i,index) {
		$('#titles').append('<div><' + settings.captionTitleTag + '>' + images[index].attributes['data-title'].value + '</' + settings.captionTitleTag + '><' + settings.captionContentTag + '>' + images[index].attributes['data-content'].value + '</' + settings.captionContentTag + '></div>');
	 	});
	    
	    $('#currentimage').html(ci[current]);
	    
	    $(settings.previousSelector).click(function()
		{
			 $('#thumblist img').last().remove();
			 $('#thumblist').prepend(images[(current-1+number)%number]);
			 $('#titles div').last().remove();
			 $('#titles').prepend('<div><' + settings.captionTitleTag + '>' + images[(current-2+number)%number].attributes['data-title'].value + '</' + settings.captionTitleTag + '><' + settings.captionContentTag + '>' + images[(current-2+number)%number].attributes['data-content'].value + '</' + settings.captionTitleTag + '></div>');
			 
			 current = ((current-1+number)%number);
			 $('#currentimage').html(ci[current]);
		 });
	    
	 $(settings.nextSelector).click(function()
	 {
			 $('#thumblist img').first().remove();
			 $('#thumblist').append(images[(current+settings.numberofthumbs)%number]);
			 $('#titles div').first().remove();
			 $('#titles').append('<div><' + settings.captionTitleTag + '>' + images[(current+2)%number].attributes['data-title'].value + '</' + settings.captionTitleTag + '><' + settings.captionContentTag + '>' + images[(current+2)%number].attributes['data-content'].value + '</' + settings.captionContentTag + '></div>');
			 
			 current = ((current+1)%number);
			 $('#currentimage').html(ci[current]);
	 });
	    
        return;
    };
 
}( jQuery ));	
