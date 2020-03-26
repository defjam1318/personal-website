function enable(id) {
    var table = document.getElementById(id);
    var month = table.rows.length;
    if (month < 2) {
        table.style.display = 'none';
    }
}
enable();