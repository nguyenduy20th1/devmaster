document.addEventListener('DOMContentLoaded', function () {
    var output = document.getElementById('bai3');
    var options = [
        'jquery',
        'bootstrap',
        'angular',
        'vue',
        'ember',
        'backbone',
    ];

    var ketqua = options.map(function (e) {
        return e
    })
    output.innerHTML = ketqua.join('<br>');
    console.log(ketqua)
})