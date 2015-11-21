$(document).ready(function(){

  // ga('create', 'UA-70442356-1');
  ga('require', 'linkid');
  // ga('send', 'pageview');

  $('title').text('Sean Sassenrath');

  $('#invalid-request').hide();
  $('#ajax-error').hide();

  $('.contact-scroll').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $('#contact-section').offset().top
    })
  })

  $('#contact-submit').on('click', function(e){
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    if (name.length > 0 && email.length > 0) {
      $.ajax({
        url: 'http://getsimpleform.com/messages/ajax?form_api_token=11545f80afa85c2500d908afd880b345',
        type: 'POST',
        dataType: 'jsonp',
        data: {name: name, email: email, subject: subject, message: message}
      }).done(function() {
        $('#name').hide();
        $('#email').hide();
        $('#subject').hide();
        $('#message').hide();
        $('#invalid-request').hide();
        $('#ajax-error').hide();
        $('#contact-submit').val('Thanks for your message!');
        $('#contact-submit').css("color", "#66CDAA");
        $('#contact-submit').css("border-color", "#66CDAA");
        $('form')[0].reset();
      }).fail(function(){
        $('#ajax-error').show();
      })
    } else {
      $('#invalid-request').show();
    };

  });
});
