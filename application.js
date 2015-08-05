// access token: 1422443644.1fb234f.da4d709164014af592cb05946caa1125
// client id: b49c63480edd40ee96c3bf68cfeef191
var TOKEN = '1422443644.1fb234f.da4d709164014af592cb05946caa1125';
var tag = 'lighthouse';

$(document).ready(function(){
 $.ajax({
        method: "GET",
        url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token='+TOKEN,
        dataType: 'jsonp'
      }).done(function(response){
        console.log(response);
        });

});