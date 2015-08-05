// access token: 1422443644.1fb234f.da4d709164014af592cb05946caa1125
// client id: b49c63480edd40ee96c3bf68cfeef191

$(document).ready(function(){
  var clientId = 'b49c63480edd40ee96c3bf68cfeef191';
  var tag = 'lighthouse';

  // DOM manipulation
  var slideShow = function(urls){    
    var imgTag = $('#main-image img');  
    var i = 0;
    var interval = setInterval(function(){
      imgTag.attr('src', urls[i]);
      i += 1;
      if(i == 10) clearInterval(interval);
    }, 2000);
  }

  $.ajax({
    method: "GET",
    url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id='+clientId,
    dataType: 'jsonp'
  }).done(function(response){
    // var nextUrl = response.pagination.next_url;
    var images = response.data.map(function(obj){
      return obj.images.standard_resolution.url;
    });
    slideShow(images);
  });

});