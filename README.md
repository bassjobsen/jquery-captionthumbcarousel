jQuery Carousel with thumbs and captions
=======

This plugin builds a image Carousel with thumbs and captions based on a list of images

#Options

Option | Default | Description
--- | --- | ---
start | `0` | index of the image list of the first image of the carousel
numberofthumbs | `4` | number of thumbs to show in the list
captionTitleTag | `h1` | HTML tag which wraps the caption title
captionCententTag | `p` | HTML tag which wraps the content title
previousSelector | `.previousimage` | CSS selector for the previous button
nextSelector | `.nextimage` | CSS selector for the next button

# Installation

To install copy the *js*, and *css* directories into your project and add the following snippet to the header:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js" type="text/javascript"></script>
    <script src="js/captionthumbcarousel.js" type="text/javascript"></script>
    <link href="css/captionthumbcarousel.css" rel="stylesheet" type="text/css" />

# Example
    
               <!-- list of images -->
    		   <div id="carousel">
					<img src="http://placehold.it/350/0000FF" data-title="blue image 1" data-content="some text 1">
					<img src="http://placehold.it/350/CCEEFF" data-title="yelow image 2" data-content="some text 2">
					<img src="http://placehold.it/350/088A4B" data-title="green image 3" data-content="some text 3" >
					<img src="http://placehold.it/350/C47451" data-title="orange image 4" data-content="some text 4">
					<img src="http://placehold.it/350/000000" data-title="black image 5" data-content="some text 5">
					<img src="http://placehold.it/350/8D38C9" data-title="voilet image 6" data-content="some text 6">
				</div>		
			
			
				<!-- list of thumbs -->	
				<div id="thumblist"></div>
				
				
				
				<button class="nextimage">Next</button>
				<button class="previousimage">Previous</button>	
				
				<!-- current image -->							
				<div id="currentimage"></div>	
				
				<!-- list of captions -->
				<div  id="titles"></div>
	

    <script type="text/javascript">
      $('#carousel').captionthumbcarousel();
    </script>
    
