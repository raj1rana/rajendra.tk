var naame = document.getElementById("name").value;
var email = dociument.getElementById('email').value



$('#success').click(function() {
    $.ajax({
        type: “POST”,
        url: “https://mandrillapp.com/api/1.0/messages/send.json”,
        data: {
          ‘key’: ‘4eab28383e158fc358217e73e0d2a578-us3’,
          ‘message’: {
            ‘from_email’: email,
            ‘to’: [
                {
                  ‘email’: ‘RECIPIENT_NO_1@EMAIL.HERE’,
                  ‘name’: name,
                  ‘type’: ‘to’
                },
              ],
            ‘autotext’: ‘true’,
            ‘subject’: ‘!’,
            ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
          }
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
    });
  });