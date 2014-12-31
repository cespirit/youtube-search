$(document).ready(function(){

	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
		$("#query").val("");
	});

	function getRequest(searchTerm) {
		var params = {
			part: "snippet",
			key: "AIzaSyCrPY0jdtrE5sYaxdin3-Km3h9za8MjibE",
			maxResults: 20,
			order: "relevance",
			q: searchTerm,
			type: "video"
		}
		url = "https://www.googleapis.com/youtube/v3/search";

		$.getJSON(url, params, function(data) {
			$(".search-details").html("<p>Results for <strong>&#34;" + searchTerm + "&#34;</strong></p>" );
			showResults(data.items);
			console.log(data);
		});
	}

	function showResults(videos) {
	    var html ="";
	    var videoImgURL;
	    var videoTitle;
	    
	    $.each(videos, function(index, value) {
	    	var videoURL = "http://youtube.com/watch?v=";
	    	videoURL += value["id"]["videoId"];
	    	videoTitle = value["snippet"]["title"];
	    	videoImgURL = value["snippet"]["thumbnails"]["medium"]["url"];
	    	html += "<a href='" + videoURL + "'>" + "<img src='" + videoImgURL +
	    		"' title='" + videoTitle + 
	    		"' alt='" + videoTitle + " video" + "'></a>"; 
	    });

	    $("#search-results").html(html);

	}
});

