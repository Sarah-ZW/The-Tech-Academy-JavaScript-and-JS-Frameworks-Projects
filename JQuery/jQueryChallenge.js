/*
$(document).ready(function() {
  $("button").click(function(){
      $("p").hide();
  });
});

$(document).ready(function() {
    $("button").click(function(){
        $("#id1").hide();
    });
  });
*/
  $(document).ready(function(){
      $('#firstButton').click(function() {
          $(".class2").hide();
      });
  });
/*
  $(document).ready(function(){
      $('button').click(function(){
          $('ul li:first-child').hide();
      });
  });

  $(document).ready(function(){
      $('#iam1').hover(function(){
          alert('You are now in the zone')
        },
        function(){
            alert('You have left the zone');
        });
  });
  */

  $(document).ready(function(){
      $('input').focus(function(){
          $(this).css('background-color','purple');
      });
        $('input').blur(function(){
            $(this).css('background-color', 'green');
        });
  });

  $(document).ready(function(){
      $('#btnHide').click(function(){
          $('#mystery').hide();
      });
        $('#btnShow').click(function(){
            $('#mystery').show();
        });
  });

  $(document).ready(function(){
      $('#newButton').click(function(){
          $('#below').toggle();
      });
  });

  $(document).ready(function(){
      $('#fadeButton').click(function(){
          $('#i1').fadeIn(5000);
          $('#i2').fadeIn(4000);
          $('#i3').fadeIn(3000);
      })
  })

 $(document).ready(function(){
     $('#panel').click(function(){
     $('#panelExtension').slideToggle('slow');
     });
 });

 $(document).ready(function(){
     $('#animateButton').click(function(){
         $('#animateBox').animate({left:'300px', top:'10px'},5000,
         function(){
             alert('I am done moving now!');
         });
     });
     $('#stopAnimation').click(function(){
         $('#animateBox').stop();
     });
 });

 $(document).ready(function(){
     $('#chain').click(function(){
         $('#pickMe').css('color','orange').slideUp(5000).slideDown(2000);
     });
 });

 $(document).ready(function(){
     $('#btn5').click(function(){
         alert('Text: ' + $('#text1').text());
     });
 });

 $(document).ready(function(){
     $('#btnAtt').click(function(){
         $('#newLink').attr('href', 'https://weather.com/');
     });
 });