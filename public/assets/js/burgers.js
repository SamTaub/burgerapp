$(function () {
    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("id");
        var burgerState = $(this).data("burgerState");

        var newBurgerState = {
            devoured: burgerState
        };

        
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger status to", burgerState);
                // Reload the page to get the updated list
                location.reload();
            }
        );

        //document.getElementsByClassName(devourBurger).style.visibility = "hidden";
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerInput").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
