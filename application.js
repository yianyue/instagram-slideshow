// access token: 1422443644.1fb234f.da4d709164014af592cb05946caa1125
// client id: b49c63480edd40ee96c3bf68cfeef191

$(document).ready(function(){
  var TOKEN = '1422443644.1fb234f.da4d709164014af592cb05946caa1125';
  var tag = 'lighthouse';

  // DOM manipulation
  var displayImage= function(imgUrl){
    var frame = $('#main-image');
    frame.empty;
    frame.append('<img src="'+imgUrl+'">');
  }

  $.ajax({
    method: "GET",
    url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token='+TOKEN,
    dataType: 'jsonp'
  }).done(function(response){
    // var nextUrl = response.pagination.next_url;
    var images = response.data.map(function(obj){
      return obj.images.standard_resolution.url;
    });
    displayImage(images[1]);
  });


});