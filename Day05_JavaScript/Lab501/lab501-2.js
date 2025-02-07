document.addEventListener("DOMContentLoaded", function () {
    var output = document.getElementById('bai2');
    var content = "";

    for (var i = 0; i < 10; i++) {
        content += "<p>"; // Mở thẻ <p>
        for (var j = 0; j <= i; j++) {
            content += j + " "; // Thêm số vào dòng
        }
        content += "</p>"; // Đóng thẻ <p>
    }

    output.innerHTML = content; // Gán nội dung vào div
});
