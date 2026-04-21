function bookVehicle() {
    let name = document.getElementById("name").value;
    let vehicle = document.getElementById("vehicle").value;

    let booking = name + " booked " + vehicle;

    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = booking;
    list.appendChild(li);

    localStorage.setItem("lastBooking", booking);
}
