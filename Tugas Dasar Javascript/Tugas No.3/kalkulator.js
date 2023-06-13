function tambah() {
    var nilai1 = parseFloat(document.getElementById("nilai1").value);
    var nilai2 = parseFloat(document.getElementById("nilai2").value);
    document.getElementById("hasil").value = nilai1 + nilai2;
}

function kurang() {
    var nilai1 = parseFloat(document.getElementById("nilai1").value);
    var nilai2 = parseFloat(document.getElementById("nilai2").value);
    document.getElementById("hasil").value = nilai1 - nilai2;
}

function kali() {
    var nilai1 = parseFloat(document.getElementById("nilai1").value);
    var nilai2 = parseFloat(document.getElementById("nilai2").value);
    document.getElementById("hasil").value = nilai1 * nilai2;
}

function bagi() {
    var nilai1 = parseFloat(document.getElementById("nilai1").value);
    var nilai2 = parseFloat(document.getElementById("nilai2").value);
    document.getElementById("hasil").value = nilai1 / nilai2;
}