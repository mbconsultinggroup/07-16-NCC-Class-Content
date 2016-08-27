// SETUP VARIABLES
// ==========================================================
// PLEASE SEE API GUIDE FOR ALL AVAILABLE QUERY PARMETERS https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json
// This variable will be pre-programmed with our authentication key (the one we received when we registered)

//API VARS
var apiKey = "f7f26ea7cdc64c60bbdce7b4a567cfc8",
		searchTerm, // used for q query parameter to search article body, headline and byline
		beginDate = '00010101',
 		endDate = '20160827';
// These variables will hold the results we get from the user's inputs via HTML
var numResults 	= 5,
		startYear 	= 0,
		endYear		= 0;
// Based on the queryTerm we will create a queryURL
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;


// FUNCTIONS
// ==========================================================


// This runQuery function expects
function runQuery(){

  $('#wellSection').empty();
	if(numResults > 0){

		// The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "data"
		$.ajax({
			url: queryURL,
			method: 'GET',
			data: {
				q: searchTerm,
				begin_date: beginDate,
				end_date: endDate
			}

		}).done(function(data) {
				// Loop through and provide the correct number of articles
				for (var i=0; i< numResults; i++) {

						$('#wellSection').append($('<div class="well" id="articleWell-' + i + '"">'));

						// Confirm that the specific JSON for the article isn't missing any details
						// If the article has a headline include the headline in the HTML
						if(data.response.docs[i].headline)
						{
							$("#articleWell-"+ i).append('<h3 class="articleHeadline"><span class="label label-primary">' + (i + 1) + '</span><strong>   ' + data.response.docs[i].headline.main + "</strong></h3>");
						}

						// If the article has a Byline include the headline in the HTML
						if( data.response.docs[i].byline && data.response.docs[i].byline.hasOwnProperty("original"))
						{
							$("#articleWell-"+ i).append('<h5>' + data.response.docs[i].byline.original + "</h5>");
						}

						// Then display the remaining fields in the HTML (Section Name, Date, URL)
						$("#articleWell-"+ i).append('<h5>Section: ' + data.response.docs[i].section_name + "</h5>");
						$("#articleWell-"+ i).append('<h5>' + Date(data.response.docs[i].pub_date).toLocaleString() + "</h5>");
						$("#articleWell-"+ i).append("<a href='" + data.response.docs[i].web_url + "'>" + data.response.docs[i].web_url + "</a>");

				}
			});
		}

}

// METHODS
// ==========================================================
$('#searchTerm').change(function(event){
	searchTerm = event.target.value;
	console.log(searchTerm);
});

$('#startYear').change(function(event){
	if(parseInt(event.target.value)){
		beginDate = event.target.value + '0101';
	}else{
		beginDate = '00010101';
	}
});

$('#endYear').change(function(event){
	if(parseInt(event.target.value)){
		endDate = event.target.value + '0101';
	}else{
		endDate = '20160827';
	}
});

$('#numRecordsSelect').change(function(event){
	if(parseInt(event.target.value)){
		numResults = event.target.value;
	}
});

// On Click button associated with the Search Button
$('#runSearch').on('click', runQuery);

// This button clears the top articles section
$('#clearAll').on('click', function(){
	$("#wellSection").empty();
});
