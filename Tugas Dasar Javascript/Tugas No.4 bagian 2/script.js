function proses(){
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var fontSize = document.getElementById("font-size").value;
    var background = document.getElementById("background").value;

    var hasil = "<div style='background-color:" + background + "; font-size:" + fontSize + "px;'>" + "<p style='font-size:" + fontSize + "px;'>Selamat Datang " + nama + "</p>" + "<p style='font-size:" + fontSize + "px;'>Alamat : " + alamat + "</p>" + "</div>";

    document.getElementById("hasil").innerHTML = hasil;
}