console.log('\'Allo \'Allo!');
$( document ).ready(function() {
  // $.ajax({
  //     url: "http://query.yahooapis.com/v1/public/yql",
  //
  //     // The name of the callback parameter, as specified by the YQL service
  //     jsonp: "callback",
  //
  //     // Tell jQuery we're expecting JSONP
  //     dataType: "jsonp",
  //
  //     // Tell YQL what we want and that we want JSON
  //     data: {
  //         q: "select title,abstract,url from search.news where query=\"cat\"",
  //         format: "json"
  //     },
  //
  //     // Work with the response
  //     success: function( response ) {
  //         console.log( response ); // server response
  //     }
  // });

  //https://www.reddit.com/r/learnprogramming/comments/2y3ljg/error_when_calling_the_reddit_api_for_jsonp_return/

  $.ajax({
      url: "http://reddit.com/r/listentothis/new/.json?jsonp=callbackFunction",
      dataType: 'jsonp',
      jsonpCallback : 'callbackFunction',
      success: function(response) {
          console.log( response ); // server response
      },
      error: function(xhr, status, error) {
          alert("fail");
      }
  });

});
