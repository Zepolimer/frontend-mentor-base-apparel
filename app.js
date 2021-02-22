$(document).ready(function() {
    $('#form').trigger("reset");
    $("form :input").attr("autocomplete", "off");
    $('#form').submit(function(e) {
      e.preventDefault();
      var email = $('#email').val();

      $(".error").remove();

      if (email.length < 1) {
        $('#email').after('<span class="error">Email cannot be empty</span>');
        $('#email').addClass('error-icon');
      } else {
        var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Please provide a valide email</span>');
          $('#email').addClass('error-icon');
        }else {   
            $('#email').removeClass('error-icon');      
        }
      }
    }); 
});
