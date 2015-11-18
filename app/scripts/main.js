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
        var items = [];
          $.each(response.data.children, function(index, el) {
              var iFrame = $('<textarea />').html(el.data.media_embed.content).text();
              //var thumb = el.data.media.oembed.thumbnail_url;
              var createdDate = new Date(el.data.created * 1000);
              var createdDate = el.data.created;
              if (createdDate <= createdDate - 60000) {
                  console.log("index ", index);
                  console.log("element ", el.data.author);
                  console.log("time ", createdDate);
                  //console.log("thumb url ", thumb);
                  //console.log("media ", $('<textarea />').html(el.data.media_embed.content));
                  // items.push("<div>" + el.data.media_embed.content + "</div>");
                  // look at timestamp value -- if the item is less than a week old attach a 'new' class to the element with new css style, if the item is less than a month old, attach a 'somewhat-new' css class, otherwise, give it a default style... page 202, loop throuh the nodes and look for the ones with the 'new' class... add flag icon through looping. display: author, link_flair, and image...

                  //read up on date object, mdn
                  $('#results').append(iFrame);
              } else if (createdDate <= createdDate - 3600000) {
                console.log("more than an hour in the past ", createdDate);
              } else if(createdDate <= createdDate - 3600001){
                console.log("more than two hours in the past ", createdDate);
              } else {
                console.log("meh");
              };

          });

      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });





});
