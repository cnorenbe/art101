/*
    Lab: Fetching Data from Chuck Norris API
    Author: Coralie Norenberg
    Date: November 2024
*/

// Wait for the DOM to be ready before executing any code
$(document).ready(function() {

    // Add a click event listener to the button with ID 'get-joke-btn'
    $('#get-joke-btn').click(function() {

        // Use jQuery's AJAX method to fetch a random Chuck Norris joke from the API
        $.ajax({
            // The URL for the request to get a random Chuck Norris joke
            url: "https://api.chucknorris.io/jokes/random",
            
            // The type of HTTP request (GET request to fetch data)
            type: "GET",
            
            // The type of data we expect to receive back (JSON format)
            dataType: "json",
            
            // The function to call when the request is successful
            success: function(data) {
                // Log the returned data to the console for debugging
                console.log(data);

                // Use JSON.stringify() to convert the joke object into a string and display it
                $('#output').html("<p>" + data.value + "</p>");
            },
            
            // The function to call if the request fails
            error: function(jqXHR, textStatus, errorThrown) {
                // Log the error to the console
                console.log("Error:", textStatus, errorThrown);

                // Display an error message in the output div
                $('#output').html("<p>Sorry, there was an error fetching the joke. Please try again later.</p>");
            }
        });

    });
});
