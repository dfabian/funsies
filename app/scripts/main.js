$( document ).ready(function() {
  //https://www.reddit.com/r/learnprogramming/comments/2y3ljg/error_when_calling_the_reddit_api_for_jsonp_return/

  $.ajax({
      url: "http://reddit.com/r/listentothis/new/.json?jsonp=callbackFunction",
      dataType: 'jsonp',
      jsonpCallback : 'callbackFunction',
      success: function(response) {
          console.log( response ); // server response
        var items = [];
          $.each(response.data.children, function(index, el) {
            //   var title = $('<div />').append(el.data.title);
              var currentTime = new Date();
              var UTCseconds = Math.floor((currentTime.getTime() + currentTime.getTimezoneOffset()*60*1000)/1000);
              var createdDate = new Date(el.data.created).getTime();
              console.log("created ", createdDate);
              console.log("current ", UTCseconds);

              var difference = UTCseconds - createdDate;
              console.log("difference ", difference);

              var hourColor = 'default';

              if (difference < 60 * 60) {
                  console.log("less than an hour ");
                  hourColor = 'lessHour';
              } else if (difference < 60 * 120) {
                  console.log("less than two hours ");
                  hourColor = 'lessTwo';
              } else if(difference < 60 * 180){
                console.log("less than three hours ");
                hourColor = 'lessThree';
              } else {
                console.log("more than three hours ");
              };


              if (hourColor === 'lessHour') {
                $('#results').append('<p class="'+hourColor+' new">' + el.data.title + '<i class="glyphicon glyphicon-flag"></i>' + '</p>');
              } else {
                $('#results').append('<p class="'+hourColor+'">' + el.data.title + '</p>');
              }

              $('a').on('click', function(){
                if (this.textContent === 'New') {
                  $('p').hide();
                  $('p.lessHour').show();
                } else if (this.textContent === 'Last Two') {
                  $('p').hide();
                  $('p.lessTwo').show();
                } else if (this.textContent === 'Last Three') {
                  $('p').hide();
                  $('p.lessThree').show();
                } else {
                  $('p').show();
                }
              })



          });
          //add the flag icon for under a hour
          //add links nav to display each time-state
      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });

});
