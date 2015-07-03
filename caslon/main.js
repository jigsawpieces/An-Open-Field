
function habitatClick (){
	$('ul.habitats li a').click(function(){
		$(this).addClass('active');
		
		$('ul.habitats, ul.locations').removeClass('menu-hide').find('a').removeClass('text-hide');
		$('.landing-container, footer p, .poem-container').fadeOut(1000);
		$("ul.habitats li a, footer a").removeClass("active");

		// make all other habitats transparent
		$('ul.habitats li a').not(this).addClass('inactive');
		
		// fade in locations list and make vertical line appear
		$('ul.locations').css('background-image','url(list-vert.png)');
		$('ul.locations li, .sidebar').fadeIn(1000);
		
		//remove all previous active classes
		$("ul.locations li a").removeClass("active selected-location");
		// new active class to selected link
		$("ul.locations li a."+ this.id+"").addClass("active");
		
		$('ul.habitats li a').click(function(){
			
			$('ul.habitats li a').removeClass("active");
			$(this).addClass('active');
		});
	});
}

function locationsClick(){
	$('ul.locations li a').click(function(){
		$('ul.habitats, ul.locations').removeClass('menu-hide');
		$("ul.habitats li a").removeClass("text-hide");
		$("ul.locations li a").removeClass("selected-location text-hide");
		$('.landing-container, footer p').fadeOut(1000);
		//remove previously selected items
		$("ul.habitats li a, footer a").removeClass("active");
		// hide all the poems
		$('.poem-container').removeClass("selected-poem").hide();
		
		// fade in the right poem
		$("."+ this.id +"").parent().addClass("selected-poem").fadeIn(1000);

		$(".sidebar").fadeIn(1000);
		
		// make the location selected in the list
		$(this).addClass('selected-location');
		$("ul.locations li a").removeClass("active");

		// remove the vertical ul line
		//$('ul.locations').css('background-image','none');
					
		// show associated habitats
		var getClass = $(this).attr('class').toString().split(' ');
		
		$.each(getClass, function (i, getClass) {
			$('ul.habitats li a#'+ getClass +'').addClass('active');
		});
		
	});
}

function keywordClick(){
	$('.poem p a, footer p a, .glossary p a').click(function(){			
		$(this).addClass('active');
	});
}

function addArrow(){
	$(".poem-container .poem:nth-child(2):not('.fevered-sleep')").append("<div class='arrow'><div class='left empty'></div><div class='right full'></div></div>");
	$(".brockley .arrow, .lytham .arrow, .southwark .arrow, .tooting .arrow, .totteridge .arrow, .penrhyndeudraeth .arrow, .preston .arrow, .saltdean .arrow, .lambeth .arrow").find(".right").removeClass("full").addClass("empty");
	$(".poem-container div[class*='-2']").find(".right").removeClass("full").addClass("empty");
	$(".poem-container div[class*='-2']").find(".left").removeClass("empty").addClass("full");
	$(".gorleston-2, .lockton-2, .poynings-2").find(".right").removeClass("empty").addClass("full");
	$(".gorleston-3, .lockton-3, .poynings-3").find(".right").removeClass("full").addClass("empty");
	$(".gorleston-3, .lockton-3, .poynings-3").find(".left").removeClass("empty").addClass("full");
}

function arrowRight(){
	$('.right.full').click(function(){
		$(this).parents('.poem-container').fadeOut(0).next().fadeIn(1000);
	});
}

function arrowLeft(){
	$('.left.full').click(function(){
		$(this).parents('.poem-container').fadeOut(0).prev().fadeIn(1000);
	});
}

function footerLinks(){
	$('footer a, footer img').click(function(){
		
		var idName = $(this).attr('id');

		$(".landing-container, .index-container, .poem-container").fadeOut(0);
		$("ul.locations li").fadeIn(0);
		$("ul.habitats, ul.locations").addClass('menu-hide');
		$("ul.menu-hide li a").removeClass('active inactive');
		$('.poem-container.'+idName+', .sidebar').fadeIn(1000);
	});
}

function sideBar(){
	$('.sidebar').click(function(){
		$('.poem-container, .sidebar').fadeOut(10);
		$('.landing-container, footer p').fadeIn(1000);
		$("ul.habitats, ul.locations").addClass('menu-hide');
		$("ul.menu-hide li a, footer a").removeClass('active inactive selected-location');
		linksRandom();
	});
}

function selectedLocation(){
	var poemName = $(".selected-poem").find('.poem').attr('class').replace('poem ','')
	
	$('ul.habitats, ul.locations').removeClass('menu-hide').find('a').removeClass('text-hide selected-location ');
	$("ul.habitats li a").removeClass("active text-hide");

	var selectedLocation = $("ul.locations li a#" + poemName + "");
	
	selectedLocation.addClass("selected-location");

		var getClass = $(selectedLocation).attr('class').toString().split(' ');
		
		$.each(getClass, function (i, getClass) {
			$('ul.habitats li a#'+ getClass +'').addClass('active');
	});
}

function addLinkClassName(){
	//$('.poem a').addClass("" + $(this).text() + "");
	$('.poem a').each(function(){
		var linkText = $(this).text().toLowerCase().replace('the ','').replace("’","");

		if (linkText == "black backed gulls"){
			linkText = "gulls";
		}
		else if (linkText == "dog"){
			linkText = "dogs";
		}
		else if (linkText == "sparrow"){
			linkText = "sparrows";
		}
		else if (linkText == "squirrel"){
			linkText = "squirrels";
		}
		else if (linkText == "starling"){
			linkText = "starlings";
		}
		else if (linkText == "buzzards"){
			linkText = "buzzard";
		}
		else if (linkText == "hazels"){
			linkText = "hazel";
		}
		else if (linkText == "kites"){
			linkText = "kite";
		}
		else if (linkText == "windmills"){
			linkText = "windmill";
		}
		else if (linkText == "parks"){
			linkText = "park";
		}
		else if (linkText == "oak"){
			linkText = "oaks";
		}
		else if (linkText == "duck"){
			linkText = "ducks";
		}
		else if (linkText == "a big sheet of polythene"){
			linkText = "polythene";
		}
		else if (linkText == "sisters"){
			linkText = "sister";
		}
		else if (linkText == "a lady swimming"){
			linkText = "lady";
		}
		else if (linkText == "robins"){
			linkText = "robin";
		}
		else if (linkText == "planes"){
			linkText = "plane";
		}
		else if (linkText == "woodpeckers"){
			linkText = "woodpecker";
		}
		else if (linkText == "hedgerows"){
			linkText = "hedgerow";
		}
		else if (linkText == "mountain"){
			linkText = "mountains";
		}
		else if (linkText == "benches"){
			linkText = "bench";
		}
		else if (linkText == "butterfly"){
			linkText = "butterflies";
		}
		else if (linkText == "islands"){
			linkText = "island";
		}
		else if (linkText == "fishermens"){
			linkText = "fishermen";
		}
		else if (linkText == "a broken nose"){
			linkText = "nose";
		}
		else if (linkText == "i saw a lady swimming"){
			linkText = "lady";
		}
		else if (linkText == "a curlew"){
			linkText = "curlew";
		}
		else{

		}

		$(this).addClass(linkText);
	
	});
}

function keywordsRandom(){

	$('.poem:not(".about-2, .fevered-sleep") a, .col-3 a').click(function(){
		var linkClass = $(this).attr('class').replace('active','');
		$('footer p').fadeOut(1000);
		$('.poem-container').hide();

		function shuffle(array) {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return array;
		}

		var $all = $(".keyword-" + linkClass + "").not('.selected-poem');

		//var $all = $(".keyword-" + linkClass + "");
		var selected = $(shuffle($all).slice(0, 1));
		
		$('.selected-poem').removeClass('selected-poem');

		selected.addClass('selected-poem').fadeIn(1000);
		
		selectedLocation();

	});

}

function homepageRandom(){

	$('.landing-container a').click(function(){
		
		//var linkClass = $(this).attr('class').replace('active','');
		$('footer p').fadeOut(1000);
		$('.poem-container').hide();

		function shuffle(array) {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return array;
		}

		var $all = $('.beginning');

		//var $all = $(".keyword-" + linkClass + "");
		var selected = $(shuffle($all).slice(0, 1));
		
		$('.selected-poem').removeClass('selected-poem');

		selected.addClass('selected-poem').fadeIn(1000);
		
		selectedLocation();

	});

}

function linksRandom(){

    $('.links a').each(function(){
    	
    	// make position sensitive to size and document's width
	    var posx = Math.floor((Math.random() * 450) + 1).toFixed();
    	var posy = Math.floor((Math.random() * 500) + 1).toFixed();

    	$(this).css({
    		'left':posx+'px',
        	'top':posy+'px',
    	});
    });
}

function replaceSVG(){
	$('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

    });
}

$(document).ready(function() {
	$('.poem-container, .index-container, .sidebar').hide();
	$('ul.habitats li a, ul.locations li a').addClass('text-hide');

	$('.landing-container a').click(function(){
		
		$(".landing-container, .index-container, .poem-container").fadeOut(0);
		$("ul.locations li, .sidebar").fadeIn(0);
		$("ul.habitats, ul.locations").addClass('menu-hide');
		$("ul.menu-hide li a").removeClass('active inactive');
		$('.poem-container.glossary').fadeIn(1000);
	});

	$(".about-2 p a, .fevered-sleep p a").click(function(){
		$(this).addClass('active');
	});
	$('footer p a#about').click(function(){
		$('footer p a#fevered').removeClass('active');
	});
	$('footer p a#fevered').click(function(){
		$('footer p a#about').removeClass('active');
	});

	
	habitatClick();
	locationsClick();
	keywordClick();
	addArrow();
	arrowRight();
	arrowLeft();
	footerLinks();
	sideBar();
	addLinkClassName();
	keywordsRandom();
	homepageRandom();
	linksRandom();


	// event.stopPropagation();
	// 	console.log(nose);
	// 	$(".landing-container, .index-container, .poem-container").fadeOut(0);
	// 	$("ul.locations li").fadeIn(0);
	// 	$("ul.habitats, ul.locations").addClass('menu-hide');
	// 	$("ul.menu-hide li a").removeClass('active inactive');
	// 	$('.poem-container.glossary, .sidebar').fadeIn(1000);
	// });
});
