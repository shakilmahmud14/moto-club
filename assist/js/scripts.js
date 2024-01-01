jQuery(document).ready(function(){

	// humbar icon js start hare

	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
	// humbar icon js end hare


    // navbar js start hare

    jQuery(".navbar-content ul li a").click(function(){
    	jQuery(".navbar-content li a").removeClass("active")
    	jQuery(this).addClass("active")
    })

    jQuery(".humabar-icon").click(function(){
    	jQuery(".navbar-area").slideToggle()
    })

  	// navbar js end hare
    // feature accordion js start hare
    jQuery(".btn-1").click(function(){
      jQuery(".feature-content span").slideToggle('slow');
    })

 	// accordion js end hare
     jQuery(".learn-btn").click(function(){
      jQuery(".carousel-text span").slideToggle('slow');
    })

    // carousel area accordion js start

    // owl carousel js
     $(".owl-one").owlCarousel({
      autoplay:true,
      items: 1,
      nav:true,
      dots:false,
      loop: true,
    });

     // review section carousel

      $(".owl-two").owlCarousel({
      autoplay:true,
      margin: 30,
      items: 2,
      nav:true,
      dots:false,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });

      // product carousel start hare
      
       $(".owl-three").owlCarousel({
        autoplay:true,
        margin: 20,
        items: 4,
        nav:true,
        dots:false,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });




})