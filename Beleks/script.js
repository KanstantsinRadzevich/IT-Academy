document.getElementById('alert').addEventListener('click', function() {
    alert("Данный модуль в настоящее время находится в стадии разработки. Ждем следующий курс!");
});

document.getElementById('submit-review').addEventListener('click', function() {
    let nameReviewer = document.getElementById('name').value;
    document.getElementById('reviws-item-name').innerHTML = ('***' + nameReviewer + '***');
    document.getElementById('reviws-item-content').innerHTML = document.getElementById('reviw-text-area').value;
});

function myWeight() {
    document.getElementById('weight').innerHTML = document.getElementById('weightVal').value;
};