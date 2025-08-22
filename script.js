// Conversión GMS -> decimal
function gmsADecimal(g, m, s, dir) {
  let decimal = parseFloat(g) + parseFloat(m)/60 + parseFloat(s)/3600;
  if (["S","O","W"].includes(dir.toUpperCase())) decimal *= -1;
  return decimal.toFixed(6);
}

async function consultarAPI() {
  document.getElementById("status").innerText = "⏳ Consultando API...";

  // Obtener coordenadas
  const lat = gmsADecimal(
    document.getElementById("lat-g").value,
    document.getElementById("lat-m").value,
    document.getElementById("lat-s").value,
    document.getElementById("lat-dir").value
  );

  const lon = gmsADecimal(
    document.getElementById("lon-g").value,
    document.getElementById("lon-m").value,
    document.getElementById("lon-s").value,
    document.getElementById("lon-dir").value
  );

  // Fechas
  const start = document.getElementById("start-date").value;
  const end = document.getElementById("end-date").value;

  if (!lat || !lon || !start || !end) {
    document.getElementById("status").innerText = "⚠️ Completa todos los campos.";
    return;
  }

  // API URL
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&hourly=windspeed_10m,winddirection_10m&timezone=America%2FBogota&wind_speed_unit=kmh&format=csv`;

  try {
    const res = await fetch(url);
    const text = await res.text();

    // Procesar CSV
    const rows = text.split("\n").slice(2).map(r => r.split(","));
    const headers = ["time", "windspeed_10m (km/h)", "winddirection_10m (°)"];
    
    const dataByDate = {};

    rows.forEach(row => {
      if (row.length < 3) return;
      const fecha = row[0].split("T")[0];
      if (!dataByDate[fecha]) dataByDate[fecha] = [headers];
      dataByDate[fecha].push(row);
    });

    // Crear libro Excel
    const wb = XLSX.utils.book_new();
    Object.keys(dataByDate).forEach(fecha => {
      const ws = XLSX.utils.aoa_to_sheet(dataByDate[fecha]);
      XLSX.utils.book_append_sheet(wb, ws, fecha);
    });

    // Descargar
    XLSX.writeFile(wb, `Viento_${start}_a_${end}.xlsx`);

    document.getElementById("status").innerText = "✅ Archivo generado con éxito.";
  } catch (err) {
    document.getElementById("status").innerText = "❌ Error al consultar API.";
    console.error(err);
  }
}
