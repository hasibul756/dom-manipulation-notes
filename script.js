document.addEventListener('DOMContentLoaded', function() {
    let test = document.getElementById('test');
    test.innerText = "Hello";
    test.style.color = "red";
    test.classList.add('active');
});