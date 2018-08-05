$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newMeal = $(this).data("newmeal");

        var newDevouredState = {
            devoured: newMeal
        };


        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newMeal);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        };


        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");


        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);

                location.reload();
            }
        );
    });
});
