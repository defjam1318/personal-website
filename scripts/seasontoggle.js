function toggle(id) {
    var season = document.getElementById(id);
    var sw = document.getElementById('switch20');

    if (season.style.display !== 'none') {
        season.style.display = 'none';
    } else {
        season.style.display = 'initial';
    }
}