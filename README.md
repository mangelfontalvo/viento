# 🌦️ App Web de Datos Meteorológicos

[![Made with HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)]() 
[![Made with CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)]() 
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)]() 
[![Plotly](https://img.shields.io/badge/Plotly-Graphs-3f4f75?logo=plotly)]() 
[![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?logo=leaflet)]()  

Aplicación web que permite **consultar, visualizar y descargar datos meteorológicos históricos** usando la **API de [Open-Meteo](https://open-meteo.com/)**.  
Incluye un **mapa interactivo** para seleccionar ubicación y una **rosa de vientos dinámica** para analizar la distribución del viento.

---

## 🚀 Funcionalidades

### 📍 Selección de ubicación
- Introducir coordenadas en formato **DMS (grados, minutos, segundos)**.  
- Seleccionar ubicación en un **mapa interactivo** (*Leaflet*).  
- Botón **“Usar mi ubicación”** para obtener coordenadas mediante geolocalización.  
- Visualización del **nombre del lugar detectado** (geocodificación inversa vía Nominatim).  

### 📅 Selección de fechas
- Definir rango de **fecha inicio y fin**.  
- La API devuelve datos horarios para ese período.  

### 📊 Datos meteorológicos
- Variables disponibles:
  - Velocidad del viento (m/s).  
  - Dirección del viento (°).  
  - Temperatura (°C).  
  - Humedad relativa (%).  
  - Presión (mmHg).  
  - Precipitación (mm).  
- Resultados en una **tabla desplazable**.  
- Opción de **descargar datos en Excel (.xlsx)**.  

### 🧭 Rosa de vientos
- Generada con **Plotly.js**.  
- Agrupa el viento en **16 sectores direccionales** y en **intervalos de velocidad**.  
- Incluye **indicador de calmas** (<0.5 m/s) como un **anillo gris fijo en el centro**.  
- Tooltip con el **porcentaje real de calmas**.  
- **Responsiva** y ajusta márgenes automáticamente.  

### ⚙️ Personalización
- Selector integrado en la sección de la rosa para elegir la **posición de la leyenda**:  
  - Arriba  
  - Abajo  
  - Derecha  
  - Izquierda  
- La rosa se **redibuja automáticamente** al cambiar la opción.  

---

## 🛠️ Tecnologías utilizadas
- **HTML5** + **CSS3** → estructura y estilos.  
- **JavaScript ES6** → lógica principal.  
- **[Leaflet.js](https://leafletjs.com/)** → mapa interactivo.  
- **[Nominatim API](https://nominatim.org/)** → geocodificación inversa.  
- **[Open-Meteo API](https://open-meteo.com/)** → datos meteorológicos históricos.  
- **[Plotly.js](https://plotly.com/javascript/)** → visualización de la rosa de vientos.  
- **[SheetJS (XLSX)](https://sheetjs.com/)** → exportación a Excel.  

---

## 📦 Instalación y uso
1. Clona este repositorio o descarga los archivos:  
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
