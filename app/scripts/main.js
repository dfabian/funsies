$( document ).ready(function() {
  //https://www.reddit.com/r/learnprogramming/comments/2y3ljg/error_when_calling_the_reddit_api_for_jsonp_return/

  $.ajax({
      url: "http://reddit.com/r/listentothis/new/.json?jsonp=callbackFunction",
      dataType: 'jsonp',
      jsonpCallback : 'callbackFunction',
      success: function(response) {
          console.log( response ); // server response
          $('#holdIt').append('word');

        //   console.log(response.data.children);
          $.each(response.data.children, function(index, el) {
              console.log("index ", index);
              console.log("element ", el.data.author);
          });

      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });





});
