
function getEquipment() {
    

    let queryURL = "https://www.dnd5eapi.co/api/classes/" + className;

    $.ajax({
        url:queryURL,
        method: "GET",
    })
        .fail(function(response) {
            console.log("API call failed");
        })
        .done(function(response) {

        })

};