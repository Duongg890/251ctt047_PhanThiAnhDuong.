function show(name, price, info)
{
    document.getElementById("roomName").textContent =
    name;

    document.getElementById("roomPrice").textContent =
    "Giá phòng: " + price;

    document.getElementById("roomInfo").textContent =
    "Tiện nghi: " + info;
}

function bookRoom()
{
    alert("Đặt phòng thành công!");
}