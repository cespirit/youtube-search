$(document).ready(function(){

	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
		
	});

	function getRequest(searchTerm) {
		var params = {
			part: "snippet",
			key: "AIzaSyCrPY0jdtrE5sYaxdin3-Km3h9za8MjibE",
			maxResults: 16,
			order: "relevance",
			q: searchTerm
		}
		url = "https://www.googleapis.com/youtube/v3/search";

		$.getJSON(url, params, function(data) {
			showResults(data.items);
			console.log(data);
		});
	}

	function showResults(videos) {
	    /* Video image thumbnail alt tag */

	    var html ="";
	    var videoImgURL;
	    var videoTitle;
	    $.each(videos, function(index, value) {
	    	var videoURL = "http://youtube.com/watch?v=";
	    	videoURL += value["id"]["videoId"];
	    	videoTitle = value["snippet"]["title"];
	    	videoImgURL = value["snippet"]["thumbnails"]["medium"]["url"];
	    	html += "<a href='" + videoURL + "'>" + "<img src='" + videoImgURL + "' alt='" + videoTitle + " video" + "'></a>";
	    });

	    $("#search-results").html(html);

	}
});

