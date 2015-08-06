// access token: 1422443644.1fb234f.da4d709164014af592cb05946caa1125
// client id: b49c63480edd40ee96c3bf68cfeef191

$(document).ready(function(){
  var clientId = 'b49c63480edd40ee96c3bf68cfeef191';
  var tag = 'lighthouse';
  var url = 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=';

  // DOM manipulation
  var slideShow = function(imageUrls){    
    var imgTag = $('#main-image img');  
    var i = 1;
    // show the first image immediately
    imgTag.attr('src', imageUrls[i]);
    var interval = setInterval(function(){
      imgTag.attr('src', imageUrls[i]);
      i += 1;
      if(i == imageUrls.length()) clearInterval(interval);
    }, 1000);
  }

  var getImages = function(url){
    $.ajax({
      method: "GET",
      url: url+clientId,
      dataType: 'jsonp'
    }).done(function(response){
      // var nextUrl = response.pagination.next_url;
      var images = response.data.map(function(obj){
        return obj.images.standard_resolution.url;
      });
      slideShow(images);
    });
  }

  getImages(url);

});