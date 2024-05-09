

function hitungUmur() {
  var tahunLahir = parseInt(document.getElementById('tahunLahir').value);
  var tahunSekarang = parseInt(new Date().getFullYear());

  var umur = tahunSekarang - tahunLahir;

  switch (umur) {
    case umur < 1:
      document.getElementById('result').innerHTML = "Anda masih bayi";
      break;
    case umur >= 1 && umur <= 5:
      document.getElementById('result').innerHTML = "Anda masih balita";
      break;
    case umur >= 6 && umur <= 12:
      document.getElementById('result').innerHTML = "Anda masih anak-anak";
      break;
    case umur >= 13 && umur <= 18:
      document.getElementById('result').innerHTML = "Anda masih remaja";
      break;
    case umur >= 19 && umur <= 30:
      document.getElementById('result').innerHTML = "Anda sudah dewasa";
      break;
    case umur >= 31 && umur <= 50:
      document.getElementById('result').innerHTML = "Anda sudah dewasa tua";
      break;
    case umur >= 51:
      document.getElementById('result').innerHTML = "Anda sudah tua";
      break;
    default:
      document.getElementById('result').innerHTML = "Tahun lahir tidak valid";
      break;
  }
}