$(function () {
    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("id");
        var burgerState = $(this).data("burgerState");

        var newBurgerState = {
            devoured: burgerState
        };

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger status to", burgerState);
                location.reload();
            }
        );

    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerInput").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
    });
});
