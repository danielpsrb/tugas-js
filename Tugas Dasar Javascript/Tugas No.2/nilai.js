function hitung() {
    const nilai1 = document.getElementById("nilai1").value;
    const nilai2 = document.getElementById("nilai2").value;
  
    if (nilai1 === "" || nilai2 === "") {
      return;
    }
  
    const rataRata = (parseInt(nilai1) + parseInt(nilai2)) / 2;
    const hasilKali = nilai1 * nilai2;
    const hasilKurang = nilai1 - nilai2;
    const hasilBagi = nilai1 / nilai2;
    const hasilTambah = parseInt(nilai1) + parseInt(nilai2);
  
    document.getElementById("rata-rata").textContent = `Nilai rata-rata: ${rataRata}`;
    document.getElementById("hasil-kali").textContent = `Hasil perkalian: ${hasilKali}`;
    document.getElementById("hasil-kurang").textContent = `Hasil pengurangan: ${hasilKurang}`;
    document.getElementById("hasil-bagi").textContent = `Hasil pembagian: ${hasilBagi}`;
    document.getElementById("hasil-tambah").textContent = `Hasil penjumlahan: ${hasilTambah}`;
  }