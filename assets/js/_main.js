/*! Plugin options and other jQuery stuff */

// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});

// FitVids options
$(function() {
  $("article").fitVids();
});

$(".close-menu").click(function () {
  $(".menu").toggleClass("disabled");
  $(".links").toggleClass("enabled");
});

$(".about").click(function () {
  $("#about").css('display','block');
});

$(".close-about").click(function () {
  $("#about").css('display','');
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

/***********************************************************************************
  
Mailchimp
  
************************************************************************************/

var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

$(function() {
    if ($('form').length > 0) {
        $('form').submit(function(e) {
            var $this = $(this);
            var isValid = true;
            $('.error').removeClass('error');

            // Email Id Validation
            if (emailfilter.test($("#email").val()) == false) {
                $("#email").addClass('error');
                isValid = false;
            }

            if (isValid) {
                // If email is is valid, submit form through ajax
                $.ajax({
                    type: "GET",
                    url: $this.attr('action'),
                    data: $this.serialize(),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert("Could not connect to the registration server.");
                    },
                    success: function(data) {
                        if (data.result != "success") {
                            // Something went wrong, parse data.msg string and display message
                            alert("Sorry, something went wrong... try again.");
                        } else {
                            $('#pre-subscribe').fadeOut(500);
                            $('#post-subscribe').delay(500).fadeIn(500);
                        }
                    }
                });
            }

            return false;
        });
    }
});