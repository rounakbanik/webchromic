/*function JSONParser(url, key) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			info = xhr.responseText;
			info_obj = jQuery.parseJSON(info);
			img_src = info_obj[key];
			$(".img-container img").attr("src", img_src);
		}
	}
	xhr.send();
}*/

function JSONParser(event) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", event.data.url, true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
    			// innerText does not let the attacker inject HTML elements.
    		info = xhr.responseText;
    		info_obj = jQuery.parseJSON(info);
    		img_src = info_obj[event.data.key];
    		$(".img-container img").attr("src", img_src);
  		}
	}
	xhr.send();
}

function HTMLParser(event) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", event.data.url, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			info = xhr.responseText;
			info_obj = jQuery.parseHTML(info);
			img_src = event.data.prestr + $(info_obj).find(event.data.key).attr("src");
			$(".img-container img").attr("src", img_src);
		}
	}
	xhr.send();

}

$(document).ready(function() {

	$(".xkcd-mlink").click({url: "https://xkcd.com/info.0.json", key: "img"}, JSONParser);
	$(".cyanide-mlink").click({url: "http://explosm.net/comics/latest", key: "#main-comic", prestr: "http:"}, HTMLParser);
	$(".sarah-mlink").click({url: "http://sarahcandersen.com/", key: "article img", prestr: ""}, HTMLParser);

	/*$(".cyanide-mlink").click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://explosm.net/comics/latest", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				info = xhr.responseText;
				info_obj = jQuery.parseHTML(info);
				img_src = "http:" + $(info_obj).find('#main-comic').attr("src")
				$(".img-container img").attr("src", img_src);
			}
		}
		xhr.send();
	});*/

	/*$(".sarah-mlink").click(function() {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://sarahcandersen.com/", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				info = xhr.responseText;
				info_obj = jQuery.parseHTML(info);
				img_src = $(info_obj).find('article img').attr("src")
				$(".img-container img").attr("src", img_src);
				console.log(img_src);
			}
		}
		xhr.send();
	});*/


});
