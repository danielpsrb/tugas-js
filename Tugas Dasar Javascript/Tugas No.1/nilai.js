function hitung() {
    var panjang = parseInt(document.getElementById("panjang").value);
    var lebar = parseInt(document.getElementById("lebar").value);

    if (!panjang || !lebar) {
        document.getElementById("luas").innerHTML = "";
        document.getElementById("keliling").innerHTML = "";
    } else {
        var luas = panjang * lebar;
        var keliling = 2 * (panjang + lebar);

        document.getElementById("luas").innerHTML = "Luas = " + luas + " cm<sup>2</sup>";
        document.getElementById("keliling").innerHTML = "Keliling = " + keliling + " cm<sup>2</sup>";
    }
}