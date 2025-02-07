document.addEventListener('DOMContentLoaded', function(e) {
    var output = document.getElementById('bai2');
    var content = '';

    for (var i = 0; i < 10; i++) {
        content += '<p>';
        for (var j = 0; j <= i; j++) {
            content += j + " ";
        }
        content += '</p>';
    }
    output.innerHTML = content;
    console.log(content);
})