document.getElementById("image1")
document.getElementById("btn").addEventListener("click", function() {
    let name = prompt("Can you please tell us your Name?");
    alert(name + "," + "Welcome to the Imperial.");
    alert("Room is Available\nPlease click on the Book Now button to book rooms.");
    location.reload();
});