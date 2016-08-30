/*$(".xkcd-mlink").click(function() {
	alert("Hi");
	$.get("http://xkcd.com/", function(data) {
		console.log(data);
		alert("Loaded");
	})
})
$.ajax({
			type: "GET",
			crossDomain: "true",
			dataType: "jsonp",
			url: "http://xkcd.com/info.0.json",
			success: function (responseData, textStatus, jqXHR) {
        		console.log("in");
    		},
    		error: function (responseData, textStatus, errorThrown) {
        		alert('POST failed.');
    		}
		});*/


$(document).ready(function() {
	//Parser for xkcd comics. Thankfully, JSON file directly available
	$(".xkcd-mlink").click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://xkcd.com/info.0.json", true);
		xhr.onreadystatechange = function() {
  			if (xhr.readyState == 4) {
    			// innerText does not let the attacker inject HTML elements.
    			info = xhr.responseText;
    			info_obj = jQuery.parseJSON(info);
    			img_src = info_obj["img"];
    			$(".img-container img").attr("src", img_src);
  			}
		}
		xhr.send();
	});

	$(".cyanide-mlink").click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://explosm.net/comics/latest", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				info = xhr.responseText;
				info_obj = jQuery.parseHTML(info);
				img_src = "http:" + $(info_obj).find('#main-comic').attr("src")
				$(".img-container img").attr("src", img_src);
				console.log(img_src);
			}
		}
		xhr.send();
	})


})
