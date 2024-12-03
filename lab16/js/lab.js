/*
    Lab: JSON and APIs
    Author: Coralie Norenberg
    Date: November 2024
*/

// Using the core $.ajax() method
$.ajax({
    url: "https://xkcd.com/info.0.json",  // URL of the XKCD comic API
    type: "GET",  // HTTP GET method
    dataType: "jsonp",  // Using JSONP to avoid CORS issues
    success: function(comicObj) {
        // Extract comic details
        var comicTitle = comicObj.title;
        var comicImg = comicObj.img;
        var comicAlt = comicObj.alt;

        // Generate HTML content for comic
        var comicHTML = '<h3>' + comicTitle + '</h3>' +
                        '<img src="' + comicImg + '" alt="' + comicAlt + '" title="' + comicAlt + '">' +
                        '<p>' + comicAlt + '</p>';

        // Display the comic in the container
        $('#comic-container').html(comicHTML);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});