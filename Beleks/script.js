document.getElementById('alert').addEventListener('click', function() {
    alert("Данный модуль в настоящее время находится в стадии разработки. Ждем следующий курс!");
});

document.getElementById('submit-review').addEventListener('click', function() {
    let nameReviewer = document.getElementById('name').value;
    document.getElementById('reviw-item-name').innerHTML = ('***' + nameReviewer + '***');
    document.getElementById('reviw-item-content').innerHTML = document.getElementById('text-area').value;
})

function myWeight() {
    document.getElementById('weight').innerHTML = document.getElementById('weightVal').value;
}