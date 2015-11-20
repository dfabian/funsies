$( document ).ready(function() {
  //https://www.reddit.com/r/learnprogramming/comments/2y3ljg/error_when_calling_the_reddit_api_for_jsonp_return/

  $.ajax({
      url: "http://reddit.com/r/listentothis/new/.json?jsonp=callbackFunction",
      dataType: 'jsonp',
      jsonpCallback : 'callbackFunction',
      success: function(response) {
          console.log( response ); // server response
          //http://stackoverflow.com/questions/32857311/how-to-check-and-set-if-current-time-is-out-of-specific-range-javascript-jquery?rq=1
        var items = [];
          $.each(response.data.children, function(index, el) {
              var title = $('<div />').append(el.data.title);
              var date = new Date;
              var currentHour = date.getUTCHours();
              var createdDate = new Date(el.data.created * 1000);
              var hourPosted = createdDate.getUTCHours();
              if (hourPosted < currentHour + 1) {
                  // console.log("index ", index);
                  // console.log("element ", el.data.author);
                  console.log("time ", createdDate);
                  console.log("hour ", hourPosted);
                  console.log("current ", currentHour);

                  // console.log("less than an hour in the past ", createdDate);

                  // look at timestamp value -- if the item is less than a week old attach a 'new' class to the element with new css style, if the item is less than a month old, attach a 'somewhat-new' css class, otherwise, give it a default style... page 202, loop throuh the nodes and look for the ones with the 'new' class... add flag icon through looping. display: author, link_flair, and image...
                  //read up on date object, mdn
                  // $('<div></div>').addClass('test2').insertAfter('#results').text(title);
                  $('#results').append(title, createdDate).addClass('test');

              } else if (hourPosted > currentHour + 2) {
                $('#results').append(title, createdDate);
                console.log("more than an hour in the past ", createdDate);
                console.log("time ", createdDate);
                console.log("hour ", hourPosted);
                console.log("current ", currentHour);
              } else if(hourPosted > currentHour + 6){
                $('#results').append(title, createdDate);
                console.log("more than two hours in the past ", createdDate);
                console.log("time ", createdDate);
                console.log("hour ", hourPosted);
                console.log("current ", currentHour);
              } else {
                $('#results').append(title, createdDate);
                console.log("more than three hours in the past ", createdDate);
                console.log("time ", createdDate);
                console.log("hour ", hourPosted);
                console.log("current ", currentHour);
              };

          });

      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });





});
