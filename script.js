function toNumber(value) {
  let num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}

window.onload = function () {
  const table = document.getElementById("nilaiTable");
  const rows = table?.tBodies[0]?.rows;

  if (!rows) return; // biar gak error kalau tabel belum ada

  let data = [];

  for (let i = 0; i < rows.length; i++) {
    const nama = rows[i].cells[0].innerText;
    const sandi = toNumber(rows[i].cells[1].innerText);
    const pupk = toNumber(rows[i].cells[2].innerText);
    const pionering = toNumber(rows[i].cells[3].innerText);

    const rata = (sandi + pupk + pionering) / 3;
    rows[i].cells[4].innerText = rata.toFixed(2);
    data.push({ nama, rata });
  }

  data.sort((a, b) => b.rata - a.rata);

  data.forEach((item, index) => {
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].cells[0].innerText === item.nama) {
        rows[i].cells[5].innerText = index + 1;
        break;
      }
    }
  });
};