/*
    Lab: JSON and APIs
    Author: Coralie Norenberg
    Date: November 2024
*/

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (XKCD comic endpoint)
    url: "https://xkcd.com/info.0.json",
    // Type of request (GET request)
    type: "GET",
    // Expected data type from the response
    dataType: "json",
    // What to do when the request is successful
    success: function(comicObj) {
        // Output the title of the comic
        var comicTitle = comicObj.title;

        // Output the comic image
        var comicImg = comicObj.img;
        var comicAlt = comicObj.alt;  // Alt text for the image

        // Create an HTML string for the comic
        var comicHTML = '<h3>' + comicTitle + '</h3>' +
                        '<img src="' + comicImg + '" alt="' + comicAlt + '" title="' + comicAlt + '">' +
                        '<p>' + comicAlt + '</p>';

        // Insert the comic HTML into the #comic-container div
        $('#comic-container').html(comicHTML);
    },
    // What to do if the request fails
    error: function(jqXHR, textStatus, errorThrown) {
        // Log any errors to the console
        console.log("Error:", textStatus, errorThrown);
    }
});
