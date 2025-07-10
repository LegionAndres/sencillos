
document.getElementById("evaluacionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const edadUsuario = parseInt(document.getElementById("edad_usuario").value);
  const viveCon = document.getElementById("vive_con").value;
  const interaccionSemanal = parseInt(document.getElementById("interaccionSemanal").value);
  const emocionSocial = document.getElementById("emocionSocial").value.toLowerCase();
  const amigosRedes = parseInt(document.getElementById("amigosRedes").value || 0);
  const amigosDirecto = parseInt(document.getElementById("amigosDirecto").value || 0);
  const calidadChecks = Array.from(document.querySelectorAll('input[name="calidad_social"]:checked')).map(cb => cb.value);
  const comportamiento = document.getElementById("comportamiento_humano")?.value || "";
  const vivienda = document.getElementById("tipo_vivienda")?.value || "";
  const tipoPropiedad = document.getElementById("tipo_propiedad")?.value || "";

  const puntajeCalidad = calidadChecks.length;
  let diagnostico = "";
  let pronostico = "";
  let reaccion = "";

  const totalInteracciones = interaccionSemanal + amigosRedes + amigosDirecto;

  if (totalInteracciones < 5 && puntajeCalidad < 3) {
    diagnostico += "Patrón de aislamiento emocional y social. ";
    pronostico += "Alta probabilidad de retraimiento progresivo. ";
    reaccion += "Puede evitar reuniones, mostrar evitación de contacto visual, y retraimiento. ";
  } else if (totalInteracciones >= 10 && puntajeCalidad >= 5) {
    diagnostico += "Interacciones sociales funcionales y emocionalmente ricas. ";
    pronostico += "Estabilidad emocional probable. ";
    reaccion += "Participación activa, disposición al diálogo y buena gestión emocional. ";
  }

  if (emocionSocial.includes("tristeza") || emocionSocial.includes("ansiedad")) {
    diagnostico += "Presencia de emociones depresivas o ansiosas. ";
    pronostico += "Moderado riesgo de desregulación emocional si persiste. ";
    reaccion += "Llanto frecuente, aislamiento, irritabilidad leve. ";
  } else if (emocionSocial.includes("alegría") || emocionSocial.includes("confianza")) {
    diagnostico += "Estabilidad emocional aparente. ";
    pronostico += "Buen pronóstico si se mantiene el entorno positivo. ";
    reaccion += "Sonrisa constante, iniciativa en comunicación, cooperación. ";
  }

  if (viveCon === "madre_sola") {
    diagnostico += "Entorno centrado en figura materna. ";
    pronostico += "Dependencia emocional moderada posible. ";
    reaccion += "Búsqueda de validación materna, miedo a decepcionar. ";
  } else if (viveCon === "ambos_padres") {
    diagnostico += "Entorno potencialmente equilibrado. ";
    pronostico += "Mayor estabilidad conductual. ";
    reaccion += "Diálogo fluido, roles definidos en casa. ";
  } else if (viveCon === "padre_solo") {
    diagnostico += "Falta de influencia materna. ";
    pronostico += "Necesidad de acompañamiento emocional específico. ";
    reaccion += "Inseguridad emocional o compensación conductual. ";
  }

  if (edadUsuario < 12) {
    diagnostico += "Niñez. ";
    pronostico += "Alta maleabilidad emocional. ";
  } else if (edadUsuario < 18) {
    diagnostico += "Adolescencia. ";
    pronostico += "Alta sensibilidad a la validación externa. ";
  } else if (edadUsuario < 30) {
    diagnostico += "Inicio adultez. ";
    pronostico += "Desarrollo de independencia. ";
  } else if (edadUsuario < 50) {
    diagnostico += "Adultez intermedia. ";
    pronostico += "Estabilidad con equilibrio laboral y emocional. ";
  } else {
    diagnostico += "Adultez mayor. ";
    pronostico += "Riesgo de aislamiento. ";
  }

  document.getElementById("resultado").innerHTML = `
    <h3>🧠 Diagnóstico Integral</h3>
    <p>${diagnostico}</p>
    <h3>📈 Pronóstico Esperado</h3>
    <p>${pronostico}</p>
    <h3>🎭 Reacciones Observadas</h3>
    <p>${reaccion}</p>
  `;
});
