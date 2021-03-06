$(document).ready(function () {
 // Every functions that needs media query checking means that this function behaves differently in desktop & mobile
    var mobileMq = false;
    if(typeof window.matchMedia != "undefined" || typeof window.msMatchMedia != "undefined"){
        mobileMq = window.matchMedia("(max-width: 768px)");
    }
    if(mobileMq){
        mobileMq.addListener(showFooter);
        mobileMq.addListener(showSignIn);
        mobileMq.addListener(videoSize);
    }
    showFooter(mobileMq);
    showSignIn(mobileMq);
    videoSize(mobileMq);

    /* VIDEO */
    function videoSize(mobileMq) {
        if (mobileMq && mobileMq.matches) {
            $('.video-container').find('video.video-js').attr('height', '160px');
        }
    }

    /* SIGNIN SLIDER */
    function showSignIn(mobileMq) {
        if (mobileMq.matches) {
            /* MOBILE MENU */
            $('.logo').find('a').on('click', function(e){
                e.preventDefault();
                var menuIsHidden = $('.navleft').is(":hidden");
                if(menuIsHidden){
                    $('html, body').animate({ scrollTop: 0 }, 0);
                    $('.header').addClass('static');
                    $('.navleft').show();
                } else {
                    $('.navleft').hide();
                    $('.header').removeClass('static');
                }
            });
        } else {
            /* SIGNIN DESKTOP MENU */
            $(".signin").click(function () {
                if ($('.signinslider').width() === 260) {
                    $('.signinslider').animate({width: 0}, 300);
                }
                else {
                    $('.signinslider').animate({width: 260}, 300);
                }
            });

            $(".closer").click(function () {
                if ($('.signinslider').width() === 260) {
                    $('.signinslider').animate({width: 0}, 300);
                }
                else {
                    $('.signinslider').animate({width: 260}, 300);
                }
            });
        }
    }
   $('.closeNews').click(function() {
		
			$('.newsItems').addClass('idle');
		}
	);
    /* COPIED FROM STATIC PAGES */
    /* $('.ext').fancySelect(); */

    /*$(".signinslider").hide();*/

    $('input:text').focus(function () { // onfocus
        $(this).val(''); // clear value
        $(".options").show();
    });


    /*
    $(".footerlinks").click(function () {
        if ($(".slider").is(":hidden")) {
            $(".slider").slideDown("slow");
            $(".up").hide();

        } else {
            $(".slider").slideUp();
            $(".up").show();

        }
    });

     $(".up").hide();
     $(".up").click(function () {
        if ($(".slider").is(":hidden")) {
            $(".slider").slideDown("slow");
            $(".up").hide();
        } else {
            $(".slider").slideUp();
        }
    });*/

    $(".navleft .language-url").click(function () {
        $(".navleft .language-url").toggleClass('active');
    });
    $(".toggler").click(function () {
        $(".slider").slideUp();
        $(".up").show();
    });

    /*var sticky = $('.sticky').waypoint('sticky', {
     offset: 93
     });

     $("#tabs").tabs({
     activate: function( event, ui ) {
     $.waypoints('refresh');
     }
     });
     $('.tooltip-trigger').tooltip({ position: { my: "center bottom-15", at: "top center" } });
     */
    $(".scrollto").click(function() {
        var link = $(this).attr('href').replace(/^.*?(#|$)/,'');
        if(link == 'cost-price-domains'){
            $('#cost-price-domains').show();
        }
        $('.scrollto').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('html, body').animate({
            scrollTop: ($("#"+ link).offset().top) - 93
        }, 400);
        return false;
    });


    /* FOOTER ANIMATION */
    function showFooter(mobileMq) {
        if (mobileMq && mobileMq.matches) {
            $("#sitemap").show();
        } else {
            var sitemapIsHidden = $("#sitemap").hide();
            var sitemapTop = $("#sitemap").height() + $('footer').height() + 30;
            var sitemapToggler = $("#sitemap-toggler");
            sitemapToggler.on('click', function (event) {
                event.preventDefault();
                if (sitemapIsHidden) {
                    $("#sitemap").show().animate({
                        top: "-" + sitemapTop + "px"
                    }, 400, function () {
                        sitemapToggler.find($('.fa')).removeClass('fa-angle-up').addClass('fa-angle-down');
                        sitemapIsHidden = false;
                    });
                } else {
                    $("#sitemap").animate({
                        top: "0px"
                    }, 400, function () {
                        sitemapToggler.find($('.fa')).removeClass('fa-angle-down').addClass('fa-angle-up');
                        sitemapIsHidden = true;
                        $(this).hide();
                    });
                }
            });
        }
    }

    /* TABS */
    var tabTrigger = $('.tab-trigger');
    var tabContent = $('.tab-content');
    var tabActiveClass = 'active';
    tabTrigger.on('click', function(e){
        e.preventDefault();
        tabTrigger.removeClass(tabActiveClass);
        $(this).addClass(tabActiveClass);

        var link = $(this).attr('href');
        tabContent.removeClass(tabActiveClass).hide();
        $(link).show().addClass(tabActiveClass);

        $('html, body').animate({
            scrollTop: $(link).offset().top - 93
        }, 400);

    });

    /* MENU */
    /* $('#header').waypoint('sticky',{
     offset: -30, // Apply "stuck" when element 30px from top

     handler: function(dir) {
     var wrapper = $(this);
     var header = wrapper.children('#header');
     var signin = header.find('.signin');
     var originalHeight = '93px';
     var shortHeight = '60px';
     if(header.hasClass('stuck')){
     header.animate({
     height: shortHeight
     },100);
     signin.animate({
     lineHeight: shortHeight
     },100);
     $('.tagline').animate({
     height: '0'
     },100).hide();
     $('.logo').find('img').animate({
     width: '150px'
     },100)
     } else {
     header.animate({
     height: originalHeight
     }, 100);
     signin.animate({
     lineHeight: originalHeight
     },100);
     $('.tagline').show().animate({
     height: 'auto'
     },100);
     $('.logo').find('img').animate({
     width: '172px'
     },100);
     }
     }
     }); */

    /* LANGUAGE */
    $('.language-url').find('a').each(function(){
        var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        var link = $(this);
        var linkID = link.attr('class');
        var lang;
        if(link.hasClass('lang-en')){
            lang = 'en';
        } else if (link.hasClass('lang-fr')) {
            lang = 'fr';
        } else if (link.hasClass('lang-nl')) {
            lang = 'nl';
        } else if (link.hasClass('lang-zh')) {
            lang = 'zh';
        } else if (link.hasClass('lang-es')) {
            lang = 'es';
        } else if (link.hasClass('lang-pt')) {
            lang = 'pt';
        }else if (link.hasClass('lang-id')) {
            lang = 'id';
        }else if (link.hasClass('lang-ru')) {
            lang = 'ru';
        }else if (link.hasClass('lang-zu')) {
            lang = 'zu';
        }else if (link.hasClass('lang-tr')) {
            lang = 'tr';
        }else if (link.hasClass('lang-vi')) {
            lang = 'vi';
        }else if (link.hasClass('lang-th')) {
            lang = 'th';
        }else if (link.hasClass('lang-de')) {
            lang = 'de';
        }else if (link.hasClass('lang-ar')) {
            lang = 'ar';
        }else if (link.hasClass('lang-nl')) {
            lang = 'nl';
        }else if (link.hasClass('lang-de')) {
            lang = 'de';
        }else if (link.hasClass('lang-ko')) {
            lang = 'ko';
        }else if (link.hasClass('lang-ja')) {
            lang = 'ja';
        }else if (link.hasClass('lang-sv')) {
            lang = 'sv';
        }else if (link.hasClass('lang-it')) {
            lang = 'it';
        }else if (link.hasClass('lang-hi')) {
            lang = 'hi';
        }else if (link.hasClass('lang-ro')) {
            lang = 'ro';
        }
        link.attr('href', '/'+ lang + '/'+filename);
    });

    /* function to set cookie */
    function setTKCookie( cookieName, cookieValue, lifeTime, path, domain, isSecure ) {
        if ( !cookieName ) {
            return false;
        }
        if ( lifeTime == "delete" ) {
            lifeTime = -10;     //this is in the past. Expires immediately.
        }

        /* This next line sets the cookie but does not overwrite other cookies.
        syntax: cookieName=cookieValue[;expires=dataAsString[;path=pathAsString[;domain=domainAsString[;secure]]]]
        Because of the way that document.cookie behaves, writing this here is equivalent to writing
        document.cookie = whatIAmWritingNow + "; " + document.cookie; */
        document.cookie = escape( cookieName ) + "=" + escape( cookieValue ) +
                        ( lifeTime ? ";expires=" + (
                                new Date( ( new Date() ).getTime() + ( 1000 * lifeTime ) )
                        ).toGMTString() : "" ) + ( path ? ";path=" + path : "") + (
                                domain ? ";domain=" + domain : "");

        //check if the cookie has been set/deleted as required
        if( lifeTime < 0 ) {
            if( typeof( retrieveCookie( cookieName ) ) == "string" ) {
                return false;
            }
            return true;
        }
        if( typeof( retrieveCookie( cookieName ) ) == "string" ) {
            return true;
        }
        return false;
    }
    if ($("#langnr").val() != undefined) {
        setTKCookie('mydottk_languagenr', $("#langnr").val(), '86400','/','.freenom.com','false');
    }
    if ($("#lang").val() != undefined) {
        setTKCookie('wwwLn', $("#lang").val(),'86400','/','.freenom.com','false');
    }

    function retrieveCookie( cookieName ) {
        /*  retrieved in the format
            cookieName4=value; cookieName3=value; cookieName2=value; cookieName1=value
            only cookies for this domain and path will be retrieved
        */
        var cookieJar = document.cookie.split( "; " );
        for( var x = 0; x < cookieJar.length; x++ ) {
            var oneCookie = cookieJar[x].split( "=" );
            if( oneCookie[0] == escape( cookieName ) ) {
                return unescape( oneCookie[1] );
            }
        }
        return null;
    }
});

$(document).ready(function($){
	$('.slide').click(function() {
		$('.slide').toggleClass('on');
	});
	$('.drop-down').click(function() {
		$(this).closest('li') // get current LI
		   .toggleClass('active')
		   .siblings() // get adjacent LIs
		   .removeClass('active');
	});
	$('.menu-toggle').click(function() {
		$('body').toggleClass('menu-active');
		window.scrollTo(0,0);
	});
	
	// Hide Header on on scroll down
    var didScroll = false;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.main-header').outerHeight();

    $(window).scroll(function(){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.main-header').removeClass('nav-down').addClass('nav-up');
 $('.drop-down').removeClass('active');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.main-header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
});

$(document).click(function(event) { 
    if(!$(event.target).closest('.drop-down').length) {
        if($('.drop-down.active ul').is(":visible")) {
            $('.drop-down').removeClass('active');
        }
    }        
})
$(document).ready(function(){
	$(window).scroll(function(){
	    if($(this).scrollTop() > 100 ){
	        $('.stickem').addClass("fixed");
	    } else {
	        $('.stickem').removeClass("fixed");
	    }
	});
$('.instructions span').click(function() {
		$('#overlay').addClass('active');
	});
	$('.instructions .Windows10').click(function() {
		$('#overlay').addClass('windows10');
	});
	
	$('.instructions .Windows8').click(function() {
		$('#overlay').addClass('windows8');
	});
	$('.instructions .Windows7').click(function() {
		$('#overlay').addClass('windows7');
	});
	
	$('.instructions .WindowsVista').click(function() {
		$('#overlay').addClass('wvista');
	});
	$('.instructions .WindowsXP').click(function() {
		$('#overlay').addClass('wxp');
	});
	$('.instructions .AppleOSX').click(function() {
		$('#overlay').addClass('osx');
	});
	$('.instructions .ApplemacOS').click(function() {
		$('#overlay').addClass('macos');
	});
	$('.instructions .AppleiOS').click(function() {
		$('#overlay').addClass('ios');
	});
	$('.instructions .Android').click(function() {
		$('#overlay').addClass('android');
	});
	$('.instructions .Linux-FreeBSD').click(function() {
		$('#overlay').addClass('linux');
	});
	$('#overlay .close-overlay').click(function() {
		$('#overlay').removeClass();
		$('#video-why-freenom')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#video-windows10')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('#video-windows8')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
		$('#video-windows7')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
		$('#video-wxp')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
		$('#video-wvista')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
		$('#video-osx')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
		$('#video-macos')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
		$('#video-ios')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
		$('#video-android')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
		$('#video-linux')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
$('#video-why-freenom')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	});
	
	$('.why-freenom').click(function() {
		$('#overlay').addClass('active');
		$('#overlay').addClass('why-freenom');
	});
	
});
