// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      sleepy: $("[burger_name=devour]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});