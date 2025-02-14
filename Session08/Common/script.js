document.addEventListener("DOMContentLoaded", function () {
    var toastElement = document.getElementById("liveToast");
    var toast = new bootstrap.Toast(toastElement);
    setInterval(function () {
        toast.show();
    }, 30000);
});