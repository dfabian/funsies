$( document ).ready(function() {
  //https://www.reddit.com/r/learnprogramming/comments/2y3ljg/error_when_calling_the_reddit_api_for_jsonp_return/

  $.ajax({
      url: "http://reddit.com/r/listentothis/new/.json?jsonp=callbackFunction",
      dataType: 'jsonp',
      jsonpCallback : 'callbackFunction',
      data: JSON.stringify(),
      success: function(response) {
          console.log( response ); // server response
          $('#holdIt').append('word');

        //   console.log(response.data.children);
        var items = [];
          $.each(response.data.children, function(index, el) {
              console.log("index ", index);
              console.log("element ", el.data.author);
              console.log("media ", el.data.media_embed.content);
              // items.push("<div>" + el.data.media_embed.content + "</div>");

              $('#results').append(
                  "<pre>"
                   + el.data.media_embed.content +
                  "</pre>"
              );

          });

      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });





});
