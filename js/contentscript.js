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
    		$(".img-container img").css("transform", event.data.scale)
    		$(".img-container img").css("margin-top", event.data.margin);
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
    		$(".img-container img").attr("src", img_src);
    		$(".img-container img").css("transform", event.scale)
    		$(".img-container img").css("margin-top", event.margin);
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
			$(".img-container img").css("transform", event.data.scale);
			$(".img-container img").css("margin-top", event.data.margin);
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
			 $(".img-container img").fadeOut(400, function() {
            		$(this).attr('src',img_src);
        		}).fadeIn(400);
			}
			$(".img-container img").css("transform", event.scale);
			$(".img-container img").css("margin-top", event.margin);
	}
	xhr.send();

}

websites = [{url: "https://xkcd.com/info.0.json", key: "img", scale: "scale(1.1)", margin: "85px"},
	{url: "http://www.smbc-comics.com/", key: "#cc-comic", prestr: "", scale: "scale(0.65)", margin: "-235px"},
	{url: "http://sarahcandersen.com/", key: "article img", prestr: "", scale: "scale(0.7)", margin: "-85px"},
	{url: "http://poorlydrawnlines.com/", key: ".post p img", prestr: "", scale: "scale(0.9)", margin: "0px"},
	{url: "http://theawkwardyeti.com/", key: "#comic img", prestr: "", scale: "scale(0.4)", margin: "-430px"},
	{url: "http://www.girlgeniusonline.com/comic.php", key: "#comicbody img", prestr: "", scale: "scale(0.6)", margin: "-205px"},
	{url: "http://oglaf.com/", key: "#strip", prestr: "", scale: "scale(0.9)", margin: "-5px"},
	{url: "http://www.buttercupfestival.com/", key: "center img", prestr: "", scale: "scale(0.95)", margin: "35px"},
	{url: "http://www.gocomics.com/pearlsbeforeswine", key: ".strip", prestr: "", scale: "scale(1.25)", margin: "130px"},
	{url: "http://explosm.net/comics/latest", key: "#main-comic", prestr: "http:", scale: "scale(0.75)", margin: "-55px"}
];

$(document).ready(function() {

	index = Math.floor(Math.random() * 10);
	console.log(index);

	if(index == 0) {
		JSONParse(websites[index]);
	}
	else {
		console.log("DOne");
		HTMLParse(websites[index]);
		console.log("See?");
	}

	$(".xkcd-mlink").click({url: "https://xkcd.com/info.0.json", key: "img", scale: "scale(1.1)", margin: "85px"}, JSONParser);
	$(".smbc-mlink").click({url: "http://www.smbc-comics.com/", key: "#cc-comic", prestr: "", scale: "scale(0.65)", margin: "-235px"}, HTMLParser);
	$(".sarah-mlink").click({url: "http://sarahcandersen.com/", key: "article img", prestr: "", scale: "scale(0.7)", margin: "-85px"}, HTMLParser);
	$(".pdl-mlink").click({url: "http://poorlydrawnlines.com/", key: ".post p img", prestr: "", scale: "scale(0.9)", margin: "0px"}, HTMLParser);
	$(".yeti-mlink").click({url: "http://theawkwardyeti.com/", key: "#comic img", prestr: "", scale: "scale(0.4)", margin: "-430px"}, HTMLParser);
	$(".girl-mlink").click({url: "http://www.girlgeniusonline.com/comic.php", key: "#comicbody img", prestr: "", scale: "scale(0.6)", margin: "-205px"}, HTMLParser);
	$(".oglaf-mlink").click({url: "http://oglaf.com/", key: "#strip", prestr: "", scale: "scale(0.9)", margin: "-5px"}, HTMLParser);
	$(".bcf-mlink").click({url: "http://www.buttercupfestival.com/", key: "center img", prestr: "", scale: "scale(0.95)", margin: "35px"}, HTMLParser);
	$(".pbs-mlink").click({url: "http://www.gocomics.com/pearlsbeforeswine", key: ".strip", prestr: "", scale: "scale(1.25)", margin: "130px"}, HTMLParser);
	$(".cyanide-mlink").click({url: "http://explosm.net/comics/latest", key: "#main-comic", prestr: "http:", scale: "scale(0.75)", margin: "-55px"}, HTMLParser);


});
