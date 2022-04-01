(function($) {
    "use strict";
    $(document).ready(function() {
        /*---------------------------------------------------
            Isotop filter course 
        ----------------------------------------------------*/
        var $grid = $('.course-filter-items').isotope({
            // options
        });
        // filter items on button click
        $('.filter-course-menu').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // filter items on button active state
        $('.filter-course-menu').on('click', 'li', function() {

            const list = document.querySelectorAll(".filter-course-menu li");

            list.forEach(function(e) {
                e.addEventListener("click", function() {

                    for (let x = 0; x < list.length; x++) {
                        list[x].classList.remove("active-li-btn");
                    }
                    this.classList.add("active-li-btn");

                })
            })

        });

        /*---------------------------------------------------
            mobile menu 
        ----------------------------------------------------*/
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

          

        /*---------------------------------------------------
            Partner Slider
        ----------------------------------------------------*/

       if ($('.partner-wrap').length) {
           $('.partner-wrap').slick({
               infinite: true,
               autoplay: false,
               arrows: true,
               prevArrow: '<button class="partner-prev"><i class="fas fa-angle-double-left"></i></button>',
               nextArrow: '<button class="partner-next"><i class="fas fa-angle-double-right"></i></button>',
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 4,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 1200,
                       settings: {
                           slidesToShow: 4
                       }
                   },
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 3
                       }
                   },
                   {
                       breakpoint: 400,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       }

       
         /*---------------------------------------------------
            Case Slider
        ----------------------------------------------------*/
       if ($('.case-wrap').length) {
           $('.case-wrap').slick({
               infinite: true,
               autoplay: false,
               arrows: true,
               prevArrow: '<button class="case-prev"><i class="fas fa-angle-double-left"></i></button>',
               nextArrow: '<button class="case-next"><i class="fas fa-angle-double-right"></i></button>',
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 1200,
                       settings: {
                           slidesToShow: 3
                       }
                   },
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 2
                       }
                   },
                   {
                       breakpoint: 475,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       }


        /*---------------------------------------------------
           //Testimony Section
        ----------------------------------------------------*/
        
        let reviewContainer = document.querySelector('.review-buttons');
        if (reviewContainer) {
            let currentBtn = document.querySelector('.review-buttons .review-btn.active');
            currentBtn.parentElement.classList.add('active-btn');
            reviewContainer.addEventListener('click', (e)=>{
                let reviewBtn = e.target.parentElement;
                if( 'A' == reviewBtn.nodeName ){
                    e.preventDefault();
                    let clickedIndex = parseInt(reviewBtn.getAttribute('data-review'));
                    let itemList = document.querySelectorAll('.testimony-content .review-single');
                    let currentReview = document.querySelector('.review-single.active');
                    let currentBtn = document.querySelector('.review-buttons .review-btn.active');
                    let currentBtnBox = document.querySelector('.review-buttons .active-btn');
                    currentBtnBox.classList.remove('active-btn');
                    currentReview.classList.remove('active');
                    currentBtn.classList.remove('active');
                    itemList[clickedIndex - 1].classList.add('active');
                    reviewBtn.classList.add('active');
                    reviewBtn.parentElement.classList.add('active-btn');
                }
            });
        }


         /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });


    

      /* Vission Mission Tabs */
        if($('.vission-tabs li').length){
          $('.vission-tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');
            $('.vission-tabs li').removeClass('active');
            $('.vission-tab-content').removeClass('active');
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
          })
        };
        



        
       
        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testimonial-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
        
        


    });


    /*---------------------------------------------------
        back to top button
    ----------------------------------------------------*/
    $(".top-btn").click(function() {
        $('html,body').animate({
            "scrollTop": "0"
        }, 500)
    });

    /*---------------------------------------------------
          back to top button fade in/out
      ----------------------------------------------------*/
    $(window).scroll(function() {
        var scrollValue = $(this).scrollTop();
        if (scrollValue >= 500) {
            $(".top-btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
        }
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).load(function() {
        $("#loading").fadeOut(500);



    })


    /*---------------------------------------------------
        nice select
    ----------------------------------------------------*/
    $('select').niceSelect();

}(jQuery));