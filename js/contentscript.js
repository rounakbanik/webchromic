function JSONParser(event) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", event.data.url, true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
    			// innerText does not let the attacker inject HTML elements.
    		info = xhr.responseText;
    		info_obj = jQuery.parseJSON(info);
    		img_src = info_obj[event.data.key];
    		$(".img-container img").fadeOut(400, function() {
            	$(this).attr('src',img_src);
            	$(".img-container img").css("transform", event.data.scale);
				$(".img-container img").css("margin-top", event.data.margin);
        	}).fadeIn(400);
    		/*$(".img-container img").attr("src", img_src);
    		$(".img-container img").css("transform", event.data.scale)
    		$(".img-container img").css("margin-top", event.data.margin);*/
  		}
	}
	xhr.send();
}

function JSONParse(event) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", event.url, true);
	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4) {
    			// innerText does not let the attacker inject HTML elements.
    		info = xhr.responseText;
    		info_obj = jQuery.parseJSON(info);
    		img_src = info_obj[event.key];
    		$(".img-container img").fadeOut(400, function() {
            		$(this).attr('src',img_src);
            		$(".img-container img").css("transform", event.scale);
					$(".img-container img").css("margin-top", event.margin);
        		}).fadeIn(400);
			//}
    		/*$(".img-container img").attr("src", img_src);
    		$(".img-container img").css("transform", event.scale)
    		$(".img-container img").css("margin-top", event.margin);*/
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
			if(event.data.url == "http://abstrusegoose.com/") {
				image = $(info_obj).find("img").get(1);
				img_src = $(image).attr("src");
			}
			console.log(img_src)
			$(".img-container img").fadeOut(400, function() {
            		$(this).attr('src',img_src);
            		$(".img-container img").css("transform", event.data.scale);
					$(".img-container img").css("margin-top", event.data.margin);
        		}).fadeIn(400);
			//}
			/*$(".img-container img").attr("src", img_src);
			$(".img-container img").css("transform", event.data.scale);
			$(".img-container img").css("margin-top", event.data.margin);*/
		}
	}
	xhr.send();

}

function HTMLParse(event) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", event.url, true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			info = xhr.responseText;
			info_obj = jQuery.parseHTML(info);
			img_src = event.prestr + $(info_obj).find(event.key).attr("src");
			if(event.url == "http://abstrusegoose.com/") {
				image = $(info_obj).find("img").get(1);
				img_src = $(image).attr("src");
			}
			 $(".img-container img").fadeOut(400, function() {
            		$(this).attr('src',img_src);
            		$(".img-container img").css("transform", event.scale);
					$(".img-container img").css("margin-top", event.margin);
        		}).fadeIn(400);
			}
			
	}
	xhr.send();

}

websites = [{url: "https://xkcd.com/info.0.json", key: "img", scale: "scale(1.1)", margin: "85px"},
	{url: "http://sarahcandersen.com/", key: "article img", prestr: "", scale: "scale(0.7)", margin: "-85px"},
	{url: "http://poorlydrawnlines.com/", key: ".post p img", prestr: "", scale: "scale(0.9)", margin: "0px"},
	{url: "http://spikedmath.com/", key: ".asset-body center img", prestr: "", scale: "scale(0.8)", margin: "30px"},
	{url: "http://theawkwardyeti.com/", key: "#comic img", prestr: "", scale: "scale(0.4)", margin: "-230px"},
	{url: "http://www.girlgeniusonline.com/comic.php", key: "#comicbody img", prestr: "", scale: "scale(0.6)", margin: "-205px"},
	{url: "http://oglaf.com/", key: "#strip", prestr: "", scale: "scale(0.9)", margin: "-5px"},
	{url: "http://carbon-comic.com/", key: "#comic img", prestr: "", scale: "scale(0.8)", margin: "20px"},
	{url: "http://www.buttercupfestival.com/", key: "center img", prestr: "", scale: "scale(0.95)", margin: "35px"},
	{url: "http://abstrusegoose.com/", key: "section img", prestr: "", scale: "scale(0.7)", margin:"30px"},
	{url: "http://thisisindexed.com/", key: "#content div:nth-child(2) .entry-content p img", prestr: "", scale: "scale(1.3)", margin: "80px"},
	{url: "http://www.incidentalcomics.com/", key: ".blog-posts .date-outer:first-child .date-posts .post-outer .post-body .separator a img", prestr: "",scale: "scale(0.9)", margin: "10px"},
	{url: "http://www.smbc-comics.com/", key: "#cc-comic img", prestr: "",scale: "scale(1.0)", margin: "10px"},
	   ];

$(document).ready(function() {

	index = Math.floor(Math.random() * websites.length);
	console.log(index);

	if(index == 0) {
		JSONParse(websites[index]);
	}
	else {
		HTMLParse(websites[index]);
	}

	$(".xkcd-mlink").click({url: "https://xkcd.com/info.0.json", key: "img", scale: "scale(1.1)", margin: "85px"}, JSONParser);
	$(".sarah-mlink").click({url: "http://sarahcandersen.com/", key: "article img", prestr: "", scale: "scale(0.7)", margin: "-85px"}, HTMLParser);
	$(".pdl-mlink").click({url: "http://poorlydrawnlines.com/", key: ".post p img", prestr: "", scale: "scale(0.9)", margin: "0px"}, HTMLParser);
	$(".yeti-mlink").click({url: "http://theawkwardyeti.com/", key: "#comic img", prestr: "", scale: "scale(0.4)", margin: "-230px"}, HTMLParser);
	$(".girl-mlink").click({url: "http://www.girlgeniusonline.com/comic.php", key: "#comicbody img", prestr: "", scale: "scale(0.6)", margin: "-205px"}, HTMLParser);
	$(".oglaf-mlink").click({url: "http://oglaf.com/", key: "#strip", prestr: "", scale: "scale(0.9)", margin: "-5px"}, HTMLParser);
	$(".bcf-mlink").click({url: "http://www.buttercupfestival.com/", key: "center img", prestr: "", scale: "scale(0.95)", margin: "35px"}, HTMLParser);
	$(".spiked-mlink").click({url: "http://spikedmath.com/", key: ".asset-body center img", prestr: "", scale: "scale(0.8)", margin: "30px"}, HTMLParser);
	$(".incidental-mlink").click({url: "http://www.incidentalcomics.com/", key: ".blog-posts .date-outer:first-child .date-posts .post-outer .post-body .separator a img", prestr: "", scale: "scale(0.9)", margin: "10px"}, HTMLParser);
	$(".carbon-mlink").click({url: "http://carbon-comic.com/", key: "#comic img", prestr: "", scale: "scale(0.8)", margin: "20px"}, HTMLParser);
	$(".indexed-mlink").click({url: "http://thisisindexed.com/", key: "#content div:nth-child(2) .entry-content p img", prestr: "", scale: "scale(1.3)", margin: "80px"}, HTMLParser);
	$(".abstruse-mlink").click({url: "http://abstrusegoose.com/", key: "section img", prestr: "", scale: "scale(0.7)", margin:"30px"}, HTMLParser);
	$(".smbc-mlink").click({url: "http://www.smbc-comics.com/", key: "#cc-comic img", prestr: "",scale: "scale(1.0)", margin: "10px"}, HTMLParser);
});
