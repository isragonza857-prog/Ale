const mensajesAlejandra = [
   { titulo: "Razón #1: Tu forma de ser", mensaje: "Amo que seas completamente tú, me fascina como ves al mundo y como contagias tu alegria a cualquiera." },
   { titulo: "Razón #2: Tu sonrisa", mensaje: "Me gusta verte sonreir, cada que lo hago haces que me sienta vivo." },
   { titulo: "Razón #3: Tu belleza", mensaje: "No hay nada en el mundo que se compare contigo, al contrario, eres tú que con tu belleza le da color a mis días." },
   { titulo: "Carta #4: La música", mensaje: "A veces agarro la guitarra para tocar acordes melancólicos, pero últimamente me inspiras otro tipo de canciones." },
   { titulo: "Carta #5: El tiempo", mensaje: "Si pudiera detener el tiempo, elegiría cualquiera de los días que he pasado contigo." },
   { titulo: "Carta #6: La paciencia", mensaje: "Gracias por aguantarme estos tres años. Prometo que la espera valdrá la pena." },
   { titulo: "Carta #7: El límite", mensaje: "Como en el cálculo, siento que lo nuestro tiende al infinito." },
   { titulo: "Carta #8: Los detalles", mensaje: "Son tus pequeños detalles los que me hicieron darme cuenta de todo lo que significas para mí." },
   { titulo: "Carta #9: La suerte", mensaje: "A veces pienso en la probabilidad de habernos conocido, y definitivamente tuve suerte." },
   { titulo: "Carta #10: Mi lugar", mensaje: "No importa dónde esté, hablar contigo siempre se siente como estar en casa." },
   { titulo: "Carta #11: El código", mensaje: "Ni el código más complejo que he programado se compara con la magia de entenderte." },
   { titulo: "Carta #12: Tu risa", mensaje: "Esa risa tuya debería ser ilegal por lo mucho que me distrae." },
   { titulo: "Carta #13: El futuro", mensaje: "No suelo planear a tan largo plazo, pero me gusta imaginarte en mis planes." },
   { titulo: "Carta #14: La matriz", mensaje: "Eres la solución exacta a mi sistema de ecuaciones." },
   { titulo: "Carta #15: Los días malos", mensaje: "Incluso en los días donde todo sale mal, un mensaje tuyo reinicia mi sistema." },
   { titulo: "Carta #16: La admiración", mensaje: "Admiro mucho la persona que eres y todo lo que logras." },
   { titulo: "Carta #17: La guitarra", mensaje: "He tratado de componer algo a tu altura, pero todavía me faltan acordes para describirte." },
   { titulo: "Carta #18: La confianza", mensaje: "Gracias por dejarme ser yo mismo contigo, sin filtros ni máscaras." },
   { titulo: "Carta #19: El álgebra", mensaje: "Si nuestro cariño fuera un vector, su magnitud crecería todos los días." },
   { titulo: "Carta #20: La sorpresa", mensaje: "Todavía me sorprende cómo lograste volverte alguien tan vital en mi día a día." },
   { titulo: "Carta #21: La paz", mensaje: "Me das una paz mental que no sabía que necesitaba." },
   { titulo: "Carta #22: Los recuerdos", mensaje: "De estos 3 años, tengo tantos recuerdos que podría llenar un disco duro." },
   { titulo: "Carta #23: La atención", mensaje: "Me encanta escucharte hablar de las cosas que te apasionan." },
   { titulo: "Carta #24: El soporte", mensaje: "Gracias por estar ahí cuando el panorama no era el más claro." },
   { titulo: "Carta #25: La derivada", mensaje: "La tasa de cambio de lo que siento por ti siempre es positiva." },
   { titulo: "Carta #26: Tus ojos", mensaje: "Hay un no sé qué en tu mirada que siempre me deja sin palabras." },
   { titulo: "Carta #27: La melodía", mensaje: "Si fueras una canción, serías esa que no puedo dejar de repetir en Spotify." },
   { titulo: "Carta #28: La aventura", mensaje: "Contigo hasta ir a la tienda se siente como un gran plan." },
   { titulo: "Carta #29: El insomnio", mensaje: "Eres la culpable de un par de desvelos, pero no me quejo." },
   { titulo: "Carta #30: La incondicional", mensaje: "Saber que cuento contigo es el mejor respaldo del mundo." },
   { titulo: "Carta #31: La estética", mensaje: "Tienes una forma tan bonita de ver el mundo." },
   { titulo: "Carta #32: El teorema", mensaje: "No necesito comprobar ninguna hipótesis, sé que lo que siento es real." },
   { titulo: "Carta #33: El impulso", mensaje: "Me motivas a ser una mejor versión de mí mismo todos los días." },
   { titulo: "Carta #34: La compañía", mensaje: "Incluso estar en silencio contigo se siente bien." },
   { titulo: "Carta #35: La suerte II", mensaje: "A veces te miro y pienso: ¿cómo es que sigo soltero? Ah, cierto, te estaba esperando." },
   { titulo: "Carta #36: El algoritmo", mensaje: "Eres el único bucle infinito del que no quiero salir." },
   { titulo: "Carta #37: La espera", mensaje: "Si me hubieran dicho hace 3 años que terminaríamos así, no lo habría creído." },
   { titulo: "Carta #38: Tu voz", mensaje: "Tu nota de voz es la mejor notificación que puede llegar a mi celular." },
   { titulo: "Carta #39: La sintonía", mensaje: "Estamos tan en la misma frecuencia que a veces asusta." },
   { titulo: "Carta #40: El refugio", mensaje: "Eres mi lugar seguro cuando el mundo hace mucho ruido." },
   { titulo: "Carta #41: La magia", mensaje: "Haces que lo ordinario se vuelva extraordinario." },
   { titulo: "Carta #42: El cálculo", mensaje: "Calcular el área bajo la curva de mi cariño por ti daría un resultado indefinido." },
   { titulo: "Carta #43: La certeza", mensaje: "De las pocas certezas que tengo en la vida, tú eres la más bonita." },
   { titulo: "Carta #44: El humor", mensaje: "Nadie entiende mi sentido del humor tan bien como tú." },
   { titulo: "Carta #45: La prioridad", mensaje: "Pasaste de ser una notificación a ser mi chat fijado." },
   { titulo: "Carta #46: El despliegue", mensaje: "Subir este proyecto a internet fue fácil, lo difícil es ocultar lo mucho que me gustas." },
   { titulo: "Carta #47: La conexión", mensaje: "No necesitamos un cable de red, nuestra conexión es directa." },
   { titulo: "Carta #48: La valentía", mensaje: "Me haces querer arriesgarme a cosas que antes me daban miedo." },
   { titulo: "Carta #49: El arte", mensaje: "Si te dibujara, necesitaría usar las mejores herramientas para captar tu esencia." },
   { titulo: "Carta #50: Mitad de camino", mensaje: "Llegamos a la carta 50. Si sigues leyendo esto, es porque vamos por buen camino." },
   { titulo: "Carta #51: La suerte III", mensaje: "Eres el mejor premio que me ha dado la vida." },
   { titulo: "Carta #52: El café", mensaje: "Me gustas más que el café en la mañana antes de un examen." },
   { titulo: "Carta #53: El destino", mensaje: "No creo mucho en el destino, pero contigo hago una excepción." },
   { titulo: "Carta #54: El equilibrio", mensaje: "Le das balance a mi vida cuando todo parece un caos." },
   { titulo: "Carta #55: La promesa", mensaje: "Prometo seguir haciéndote reír hasta que te duela el estómago." },
   { titulo: "Carta #56: El valor", mensaje: "Tienes un valor absoluto incalculable." },
   { titulo: "Carta #57: La sinceridad", mensaje: "Contigo todo fluye natural, sin forzar nada." },
   { titulo: "Carta #58: El abrazo", mensaje: "Tus abrazos reinician mi sistema por completo." },
   { titulo: "Carta #59: La calma", mensaje: "Eres la calma después de la tormenta (con T mayúscula)." },
   { titulo: "Carta #60: El misterio", mensaje: "Sigo intentando descifrar cómo es que eres tan perfecta." },
   { titulo: "Carta #61: La inspiración", mensaje: "Eres mi musa, incluso cuando no estoy tocando la guitarra." },
   { titulo: "Carta #62: El tiempo II", mensaje: "Contigo las horas parecen minutos." },
   { titulo: "Carta #63: El equipo", mensaje: "Hacemos un equipo increíble, ¿no crees?" },
   { titulo: "Carta #64: La dedicación", mensaje: "Hacer 100 cartas no es nada comparado con lo que tú haces por mí." },
   { titulo: "Carta #65: La geometría", mensaje: "De todos los ángulos posibles, desde donde te vea me encantas." },
   { titulo: "Carta #66: El orgullo", mensaje: "Me siento muy afortunado de tener a alguien como tú cerca." },
   { titulo: "Carta #67: La lealtad", mensaje: "Gracias por estar siempre en mi esquina del ring." },
   { titulo: "Carta #68: El brillo", mensaje: "Tienes una luz que ilumina a todos los que te rodean." },
   { titulo: "Carta #69: La distancia", mensaje: "Incluso cuando no estamos juntos, estás en mis pensamientos." },
   { titulo: "Carta #70: El camino", mensaje: "Disfruto cada paso que damos juntos." },
   { titulo: "Carta #71: La ternura", mensaje: "Me derrite la forma en que me tratas." },
   { titulo: "Carta #72: La recompensa", mensaje: "Conocerte fue el premio mayor." },
   { titulo: "Carta #73: El sistema", mensaje: "Hackeaste mi corazón y ni siquiera me di cuenta." },
   { titulo: "Carta #74: La maravilla", mensaje: "Eres mi octava maravilla del mundo." },
   { titulo: "Carta #75: La complicidad", mensaje: "Me encanta que nos entendamos con solo mirarnos." },
   { titulo: "Carta #76: El refugio II", mensaje: "Eres el mejor lugar para escapar de la rutina." },
   { titulo: "Carta #77: La magia II", mensaje: "Contigo todo es más bonito." },
   { titulo: "Carta #78: El infinito", mensaje: "Si sumamos todo lo bueno de estos 3 años, el resultado es infinito." },
   { titulo: "Carta #79: La sorpresa II", mensaje: "Cada día me sorprendes con algo nuevo." },
   { titulo: "Carta #80: La meta", mensaje: "Mi mayor meta es verte feliz." },
   { titulo: "Carta #81: El motor", mensaje: "Eres el impulso que necesito para dar lo mejor de mí." },
   { titulo: "Carta #82: La ecuación", mensaje: "Tú + Yo = La mejor ecuación que he resuelto." },
   { titulo: "Carta #83: El destino II", mensaje: "Estábamos destinados a encontrarnos." },
   { titulo: "Carta #84: La alegría", mensaje: "Llenas mis días de colores." },
   { titulo: "Carta #85: El secreto", mensaje: "Eres mi secreto mejor guardado (aunque ya no tan secreto)." },
   { titulo: "Carta #86: La verdad", mensaje: "La verdad es que me traes loco." },
   { titulo: "Carta #87: El proyecto", mensaje: "Eres el proyecto más importante de mi vida." },
   { titulo: "Carta #88: La fuerza", mensaje: "Me das fuerza cuando siento que no puedo más." },
   { titulo: "Carta #89: La promesa II", mensaje: "Prometo cuidarte y valorarte siempre." },
   { titulo: "Carta #90: La cuenta regresiva", mensaje: "Faltan 10 cartas. Prepárate." },
   { titulo: "Carta #91: La emoción", mensaje: "Siento mariposas cada vez que veo un mensaje tuyo." },
   { titulo: "Carta #92: La decisión", mensaje: "Elegirte fue la mejor decisión que he tomado." },
   { titulo: "Carta #93: El nerviosismo", mensaje: "Todavía me pones nervioso, en el buen sentido." },
   { titulo: "Carta #94: La admiración II", mensaje: "No me canso de verte." },
   { titulo: "Carta #95: El futuro II", mensaje: "Visualizo muchas cosas increíbles contigo." },
   { titulo: "Carta #96: La confesión", mensaje: "Llevo tiempo queriendo decirte algo importante." },
   { titulo: "Carta #97: El momento", mensaje: "Siento que por fin es el momento correcto." },
   { titulo: "Carta #98: La previa", mensaje: "Espero que hayas disfrutado este viaje de mensajes tanto como yo." },
   { titulo: "Carta #99: Casi ahí", mensaje: "Alejandra, gracias por estos 3 años. Eres increíble." },
   { titulo: "Carta #100: La pregunta", mensaje: "Después de tanto tiempo, ecuaciones, risas y momentos... ¿Quieres ser mi novia?" }
];

const contenedorBuzon = document.getElementById("buzon");
const misCartas = [];

const fechaInicio = new Date(2026, 6, 21, 0, 0, 0, 0);

mensajesAlejandra.forEach((carta, index) => {
   const fechaDesbloqueo = new Date(fechaInicio);
   fechaDesbloqueo.setDate(fechaDesbloqueo.getDate() + index);

   misCartas.push({
       fechaDesbloqueo: fechaDesbloqueo.toISOString(),
       titulo: carta.titulo,
       mensaje: carta.mensaje
   });
});

function crearCartas() {
   misCartas.forEach((carta, index) => {
       const divCarta = document.createElement("div");
       divCarta.classList.add("letter-container");
       divCarta.dataset.unlock = carta.fechaDesbloqueo;

       divCarta.innerHTML = `
           <div class="envelope locked" id="locked-${index}">
               <div class="locked-content">
                   <h3>Carta #${index + 1}</h3>
                   <p class="timer" id="timer-${index}">Calculando...</p>
               </div>
           </div>

           <div class="envelope ready" id="ready-${index}" style="display: none;" onclick="abrirSobre(${index})">
               <div class="ready-content">
                   <h3>Carta #${index + 1}</h3>
                   <p class="open-text">¡Ábreme!</p>
               </div>
           </div>

           <div class="paper" id="paper-${index}" style="display: none;">
               <h3>${carta.titulo}</h3>
               <p>${carta.mensaje}</p>
           </div>
       `;
       
       contenedorBuzon.appendChild(divCarta);
   });
}

window.abrirSobre = function(index) {
   document.getElementById(`ready-${index}`).style.display = "none";
   document.getElementById(`paper-${index}`).style.display = "flex";
};

crearCartas();

setInterval(() => {
   const ahora = new Date().getTime();
   const contenedores = document.querySelectorAll('.letter-container');

   contenedores.forEach((contenedor, index) => {
       const fechaDesbloqueo = new Date(contenedor.dataset.unlock).getTime();
       const distancia = fechaDesbloqueo - ahora;

       const vistaBloqueada = document.getElementById(`locked-${index}`);
       const vistaLista = document.getElementById(`ready-${index}`);
       const timerText = document.getElementById(`timer-${index}`);

       if (distancia <= 0) {
           if (vistaBloqueada.style.display !== "none") {
               vistaBloqueada.style.display = "none";
               vistaLista.style.display = "flex";
           }
       } else {
           const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
           const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
           const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

           timerText.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
       }
   });
}, 1000);
