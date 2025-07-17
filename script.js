/**********************
 * Script KetsonBot 🤖
 * Envío automático de curiosidades Pokémon en WhatsApp Web
 * Compatible con la versión actual del botón de envío
 * Por Tomás Nardi
 **********************/

const pokemonSetsInfoOld= [
  {
    set: "Base Set (1999)",
    curiosidades: [
      "Algunas cartas Charizard tienen un error de impresión conocido como el 'Hot Stamp,' donde el holograma presenta un brillo irregular. Este error es especialmente valioso.",
      "Las cartas que parecen auténticas pero tienen impresiones de baja calidad o problemas de color se conocen como 'falsos' y pueden ser muy valiosas en el mercado de coleccionistas debido a su escasez.",
      "En el set Base, existe una versión rara del Pikachu con mejillas rojas en lugar de las amarillas estándar. Esta variación es muy codiciada.",
      "Algunas cartas de Blastoise tienen un error conocido como 'cut line,' donde la carta parece cortada imperfectamente, creando variaciones raras.",
      "El Blastoise Base Set con el error 'No Stage' es una carta rara y valiosa con un error de impresión en el campo 'Stage', lo que la hace muy codiciada entre coleccionistas.",
      "En algunas impresiones, el texto de Alakazam muestra un error en la descripción de su habilidad que no aparece en otras versiones.",
      "Existen cartas Raichu con una impresión del holograma que presenta una variación en el brillo, creando versiones raras.",
      "Las cartas de Nidoking tienen variaciones en la intensidad del holograma, algunas con áreas más brillantes o irregulares.",
      "Algunas cartas Mewtwo tienen errores en el color de fondo que crean versiones ligeramente diferentes.",
      "Las cartas de Machamp en algunas versiones presentan un patrón de holograma irregular, aumentando su rareza.",
      "En algunas cartas de Alakazam hay un error en los habilidades dice : Poder de Pokemon: Tantos Intercambios de daño como quieras...y deberia decir: Poder de Pokemon. Intercambio de daño.",
      "Existen cartas de Wartorle, en la que su evolucion anterior es el mismo y no squirtle, debido a su error su valor ronda los 90 usd.",
      "Existen cartas Machoke con variaciones en la impresión del texto que pueden resultar en versiones raras.",
      "Se sospechaba que el Prerelase raichu de base set habia sido parte de esa accion de marketing de Wizards of the Coast, porque se decia que habia cartas prerelase en circulacion, lo cual nunca pudo ser comprobado hasta que un dia aparecio graduada en PSA un raichu con la estampa de PRERELEASE, su valor actual es incalculabe.",
    ]
  },
  {
    set: "Jungle (1999)",
    curiosidades: [
      "Algunas cartas de Eevee tienen errores en el texto de evolución, donde se mencionan evoluciones incorrectas, lo que las convierte en un objeto de colección raro.",
      "Las cartas Holo de Clefable presentan patrones de holograma diferentes dependiendo del lote de impresión, lo que crea versiones variantes de la carta.",
      "Existen cartas de Vaporeon con un patrón de holograma inconsistente, donde algunas tienen un brillo más intenso que otras.",
      "Algunas cartas Jigglypuff tienen un error en el color del fondo, con tonos que varían sutilmente entre impresiones.",
      "Las cartas de Wigglytuff presentan errores en la ubicación del texto en algunos lotes, lo que resulta en variaciones raras.",
      "Algunas cartas de Pidgeot tienen una impresión del holograma que muestra variaciones sutiles en el brillo y el patrón.",
      "Existen cartas Rhydon con errores en el texto que crean diferencias entre las versiones del set.",
      "Las cartas de Flareon presentan variaciones en el patrón del holograma que pueden hacer que algunas versiones sean más valiosas.",
      "Algunas cartas Tangela tienen errores en el color de fondo que resultan en variaciones sutiles en el diseño.",
      "Algunas cartas de Butterfree 1st edition ingles salieron con un error en la estampa del 1 que lo hacen parecer una 'D'"
    ]
  },
  {
    set: "Fossil (1999)",
    curiosidades: [
      "Algunas cartas de Articuno tienen errores en el holograma que presentan burbujas o áreas irregulares, lo que las hace altamente coleccionables.",
      "En algunas versiones del set, el texto del ataque de Gengar tiene errores gramaticales o inconsistencias que la hacen destacar entre las cartas.",
      "Existen cartas de Kabutops con variaciones en la impresión del hologramadia  que afectan la intensidad del brillo.",
      "Algunas cartas de Lapras presentan un error en la tinta del ataque, creando diferencias sutiles en el color.",
      "Las cartas de Ditto presentan variaciones raras en el holograma debido a errores de impresión que afectan el patrón de brillo.",
      "Algunas cartas de Omastar presentan variaciones en la calidad del holograma, haciendo que algunas versiones sean más valoradas.",
      "Las cartas de Kabuto a veces tienen errores en el color del fondo debido a problemas de impresión.",
      "Existen cartas Psyduck con errores en el texto de su habilidad, creando versiones raras.",
      "Las cartas de Rhyhorn presentan errores de impresión que resultan en diferencias sutiles en el color.",
      "Sabian que hay un krabby con un error que le significo una suba de valor altisima por su rareza, consiste en un missprint que se puede ver en el logo del set. Al krabby con error le falta una falange.",
      "Algunas cartas de Geodude tienen errores en la tinta de la carta que pueden hacerlas más valiosas"
    ]
  },
  {
    set: "Team Rocket (2000)",
    curiosidades: [
      "Existen cartas Dark Charizard que no tienen el número '20/82' impreso, lo que indica una tirada de impresión limitada y un alto valor en el mercado.",
      "Algunas cartas de Dark Blastoise tienen errores de tinta que crean variaciones de color sutiles, aumentando su valor coleccionable.",
      "Las cartas de Dark Raichu a veces presentan un error en la proporción del holograma, creando versiones con diferentes patrones de brillo.",
      "Existen variaciones en el color del fondo de Dark Golbat debido a errores en la impresión, que son altamente coleccionables.",
      "Algunas cartas de Dark Hypno tienen errores en el texto de su ataque que varían entre impresiones, creando versiones raras.",
      "Las cartas de Dark Gyarados a veces presentan errores en el color del holograma que afectan el brillo.",
      "Algunas cartas de Dark Machamp tienen variaciones en el color del fondo y el texto.",
      "Las cartas de Dark Kadabra presentan errores en el texto del ataque que hacen que algunas versiones sean más valiosas.",
      "Existen cartas de Dark Persian con variaciones en el diseño del holograma debido a errores de impresión.",
      "Algunas cartas de Dark Arbok tienen variaciones en el diseño del fondo debido a errores en la impresión."
    ]
  },
  {
    set: "Neo Genesis (2000)",
    curiosidades: [
      "La carta Lugia presenta un raro error de impresión en el texto de su ataque que varía entre las impresiones, haciendo que algunas versiones sean más valiosas.",
      "En algunas cartas Typhlosion, el holograma presenta una variación en el brillo y los patrones, lo que genera versiones variantes.",
      "Existen variaciones raras en el color del fondo de Chikorita debido a errores de impresión en el set Neo Genesis.",
      "Algunas cartas de Totodile presentan errores en la tinta del ataque, creando versiones con diferencias sutiles en el color.",
      "Las cartas de Cyndaquil a veces presentan un error en el texto de su habilidad, lo que las convierte en versiones raras y valiosas.",
      "Existen cartas Wobbuffet con errores en el texto que crean versiones raras en el set Neo Genesis.",
      "Algunas cartas Misdreavus tienen variaciones en el holograma que afectan el brillo y el patrón.",
      "Las cartas de Noctowl presentan errores en la tinta del ataque que resultan en versiones raras.",
      "Las cartas de Houndoom a veces presentan errores en el holograma que afectan el brillo y la intensidad.",
      "Existen cartas Skiploom con errores de impresión en el color del fondo que crean versiones raras."
    ]
  },
  {
    set: "Pokemon Films",
    curiosidades: [
      "En 'Pokémon: The First Movie', la canción 'Don’t Say You Love Me' de M2M fue originalmente escrita para una película de Disney, pero fue cedida para el filme de Pokémon debido a su popularidad y ajuste en el tono emocional.",
      "En 'Pokémon: The Movie 2000', el diseño del Cinnabar Island fue inspirado por el imaginario de un volcán antiguo y abandonado que fue en parte modelado tras una antigua leyenda japonesa sobre volcanes.",
      "En 'Pokémon: Jirachi—Wishing Star', el Pokémon Jirachi fue basado en una figura del folclore japonés conocida como 'Tanabata', que se relaciona con deseos y estrellas fugaces.",
      "En 'Pokémon: Lucario and the Mystery of Mew', la escena en la que Lucario conversa con el espíritu de su antiguo maestro fue animada utilizando técnicas de captura de movimiento para capturar expresiones más sutiles.",
      "En 'Pokémon: Detective Pikachu', el diseño de los personajes de fondo como los ciudadanos de Ryme City incluye un easter egg de varios Pokémon disfrazados como humanos y viceversa, que solo son visibles en segundo plano.",
      "En 'Pokémon: The Movie 2000', el equipo de animación incluyó una serie de mensajes secretos en el fondo de la película que solo pueden ser vistos cuando se reproducen las escenas a una velocidad muy lenta.",
      "En 'Pokémon: Genesect and the Legend Awakened', se creó una versión alternativa de la película que presentaba un final diferente, donde Genesect se unía a Ash y Pikachu en lugar de ser derrotado.",
      "En 'Pokémon: Hoopa and the Clash of Ages', la batalla final entre los Pokémon legendarios fue inspirada en un combate de gladiadores del Imperio Romano, con referencias a la arquitectura y el estilo de combate.",
      "En 'Pokémon: The Rise of Darkrai', el personaje de Darkrai fue inspirado en una combinación de mitos griegos y criaturas del folclore africano, con un diseño que refleja una amalgama de diferentes culturas.",
      "En 'Pokémon: The Power of Us', se hizo un homenaje a la serie original de Pokémon incluyendo personajes secundarios de episodios clásicos en el fondo de algunas escenas del festival.",
      "En 'Pokémon: The First Movie', la escena donde Mewtwo destruye el laboratorio fue animada utilizando técnicas de animación que eran innovadoras para la época, causando problemas técnicos en algunas copias de la película debido a su complejidad.",
      "En 'Pokémon: The Movie 2000', el diseño del arte de la película incluyó una escena que inicialmente mostró a los Pokémon legendarios luchando en un festival, pero fue eliminada para mantener el enfoque en la historia principal.",
      "En 'Pokémon: Jirachi—Wishing Star', el personaje de Jirachi fue inicialmente diseñado para parecer más similar a un dragón, pero se cambió para adaptarse mejor al concepto de un Pokémon mítico.",
      "En 'Pokémon: Lucario and the Mystery of Mew', el guion original tenía a Lucario como un villano en lugar de un héroe, pero el cambio se realizó para ofrecer una narrativa más profunda y emocional.",
      "En 'Pokémon: Detective Pikachu', el diseño de Pikachu fue inspirado en parte por el concepto de un Pikachu en el manga original, el cual tenía un diseño más agresivo y menos amigable.",
      "En 'Pokémon: The Movie 2000', el equipo de producción escondió un montón de referencias a la cultura pop de los años 90 dentro de la película, como posters de bandas y marcas de la época en el fondo de varias escenas.",
      "En 'Pokémon: Genesect and the Legend Awakened', el color rojo de Genesect fue influenciado por la popularidad de los robots rojos en la cultura japonesa, como los robots en series de anime y manga.",
      "En 'Pokémon: Hoopa and the Clash of Ages', se incluyó una escena que presenta una criatura parecida a un dinosaurio que fue un guiño a las películas de kaiju japonesas, aunque la escena fue eliminada en el corte final.",
      "En 'Pokémon: The Rise of Darkrai', la elección de la ciudad de Alamos Town como escenario fue inspirada en una combinación de ciudades europeas famosas por su arquitectura antigua y misteriosa.",
      "En 'Pokémon: The Power of Us', se creó un Pokémon completamente nuevo, Zeraora, para la película, y el equipo de producción ocultó su existencia hasta el lanzamiento para mantener el misterio."

    ]
  },
  {
    set: "Pokémon Series",
    curiosidades: [
      "En la primera temporada de 'Pokémon', el nombre original de Ash Ketchum en Japón era Satoshi, en honor a Satoshi Tajiri, el creador de Pokémon.",
      "El diseño de Pikachu se inspiró en la apariencia de un hámster, aunque su diseño ha evolucionado con el tiempo.",
      "El famoso 'Team Rocket' (Jessie, James y Meowth) fue creado como una parodia de los villanos de las series de acción y su dinámica cómica se convirtió en un pilar de la serie.",
      "En la serie, hay más de 800 Pokémon diferentes, pero Pikachu siempre ha sido el más icónico y reconocido a nivel mundial.",
      "En el episodio titulado 'Electric Shock Showdown', se hizo una referencia a la serie de anime 'Dragon Ball' con un guiño a Goku.",
      "El primer episodio de Pokémon se emitió en Japón el 1 de abril de 1997, y desde entonces ha habido más de 1,200 episodios en total.",
      "El Pokémon Gyarados fue inspirado por el mito japonés del carpa que se convierte en dragón al nadar río arriba, simbolizando la perseverancia.",
      "El anime ha presentado numerosos cameos de otros animes y personajes, incluyendo a personajes de 'Yo-kai Watch' y 'Digimon' en algunas versiones.",
      "En el episodio 'Battle Frontier', el Pokémon Deoxys fue diseñado para tener diferentes formas, cada una representando una emoción o estado diferente.",
      "La serie ha enfrentado críticas por su representación de temas como la violencia y la competencia, lo que llevó a cambios en el contenido a lo largo de los años.",
      "Durante el desarrollo de la serie, los creadores tuvieron que adaptar muchos elementos para hacerla accesible a una audiencia global, incluyendo cambios en el guion y la cultura.",
      "El Pokémon Eevee es conocido por sus múltiples evoluciones, y su diseño se basa en un zorro, un perro y un gato.",
      "En varias temporadas, se han introducido personajes recurrentes como Misty y Brock, quienes han sido parte del viaje de Ash en diferentes momentos.",
      "Cada temporada presenta nuevas regiones, inspiradas en lugares del mundo real, lo que permite una rica diversidad cultural en el anime."
    ]
  },
  {
    set: "Ilustration Rare",
    curiosidades: [
      "Algunas cartas Alternative Arts presentan Pokémon en poses que parecen burlarse de las mecánicas del juego, como Pikachu usando un ataque de tipo agua en una escena de playa.",
      "En la carta Alternative Art de Charizard, se incluye un pequeño homenaje a una famosa obra de arte clásico, lo que la convierte en una pieza de conversación en la comunidad de coleccionistas.",
      "Unas cartas Special Illustration Rare tienen ilustraciones que parecen tener elementos de surrealismo, donde Pokémon están situados en paisajes oníricos, desafiando la lógica del mundo Pokémon.",
      "Las Illustration Rares a veces incluyen detalles ocultos que solo son visibles bajo ciertas luces o ángulos, lo que convierte la búsqueda de estas cartas en una aventura casi de detectives.",
      "En algunos sets, ciertas cartas Alternative Arts hacen guiños a otros videojuegos o franquicias populares, como referencias a personajes de la saga de 'Legend of Zelda' escondidos en el fondo.",
      "Existen cartas que, cuando se juntan, crean una imagen más grande, como un mural, lo que incita a los coleccionistas a buscar la colección completa para ver el arte en su totalidad.",
      "Algunas cartas Special Illustration Rare muestran a Pokémon interactuando con elementos del mundo real, como un Gengar en una cafetería, lo que añade un toque humorístico y cotidiano.",
      "Las ilustraciones en estas cartas a veces son tan detalladas que los fanáticos han comenzado a crear teorías sobre lo que podría estar ocurriendo en la escena, casi como si fueran mini historias.",
      "Ciertas cartas Alternative Arts han llegado a incluir pequeños easter eggs de otras cartas dentro del diseño, creando un laberinto de referencias que solo los más observadores pueden captar.",
      "Algunas cartas de Illustration Rare presentan Pokémon en situaciones absurdas, como un Snorlax atrapado en un parque de atracciones, lo que lleva a los coleccionistas a reírse de la narrativa.",
      "Las ilustraciones de algunas cartas Alternative Arts han sido inspiradas por movimientos artísticos poco convencionales, como el arte pop o el graffiti, brindando un aire moderno al juego.",
      "Las cartas Alternative Arts han llegado a incluir referencias a memes populares de Internet, lo que ha encantado a la nueva generación de jugadores y coleccionistas."
    ]
  }
];

/**
 * Función para obtener un dato curioso aleatorio de un set de cartas Pokémon antiguo.
 * Usa un array `pokemonSetsInfoOld` que debe estar definido previamente en tu entorno.
 */
function obtenerDatoCuriosoOld() {
  const randomIndex = Math.floor(Math.random() * pokemonSetsInfoOld.length);
  const setSeleccionado = pokemonSetsInfoOld[randomIndex];
  const randomCuriosityIndex = Math.floor(Math.random() * setSeleccionado.curiosidades.length);
  const curiosidadSeleccionada = setSeleccionado.curiosidades[randomCuriosityIndex];

  return {
    set: setSeleccionado.set,
    curiosidad: curiosidadSeleccionada
  };
}


function obtenerDatoCuriosoOld() {
  const randomIndex = Math.floor(Math.random() * pokemonSetsInfoOld.length);
  const setSeleccionado = pokemonSetsInfoOld[randomIndex];
  const randomCuriosityIndex = Math.floor(Math.random() * setSeleccionado.curiosidades.length);
  const curiosidadSeleccionada = setSeleccionado.curiosidades[randomCuriosityIndex];

  return {
    set: setSeleccionado.set,
    curiosidad: curiosidadSeleccionada
  };
}

async function enviarScript(scriptText, tiempoDeEspera = 1200, enviarComoBloque = false) {
  const main = document.querySelector('#main');
  const textarea = main?.querySelector('div[contenteditable="true"]');

  if (!textarea) {
    throw new Error('No hay una conversación abierta');
  }

  try {
    if (enviarComoBloque) {
      textarea.focus();
      document.execCommand('insertText', false, scriptText.trim());
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, tiempoDeEspera));

      const sendButton =
        main.querySelector('span[data-icon="wds-ic-send-filled"]')?.closest('button') ||
        main.querySelector('button[aria-label="Send"]');

      if (!sendButton) throw new Error('No se encontró el botón de enviar mensaje');

      sendButton.click();
      return 1;
    } else {
      const lines = scriptText
        .split(/[\n\t]+/)
        .map((line) => line.trim())
        .filter((line) => line);

      for (const line of lines) {
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        await new Promise((resolve) => setTimeout(resolve, tiempoDeEspera));

        const sendButton =
          main.querySelector('span[data-icon="wds-ic-send-filled"]')?.closest('button') ||
          main.querySelector('button[aria-label="Send"]');

        if (!sendButton) throw new Error('No se encontró el botón de enviar mensaje');

        sendButton.click();
        await new Promise((resolve) => setTimeout(resolve, tiempoDeEspera));
      }

      return lines.length;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// --------------------------
// Ejecución del mensaje
// --------------------------

// Obtener dato curioso aleatorio de sets Pokémon antiguos
const { set: setOld, curiosidad: datoCuriosoOld } = obtenerDatoCuriosoOld();

// Mensaje con curiosidad Pokémon, enviado línea por línea
const mensajeCuriosidad = `
  ¡Hola, humanos! 🤖, soy el Profe Ket: 🎉🔍
  Hoy, les traigo algo de ... ${setOld} 🌟
  Dato : ${datoCuriosoOld}
  ¿Lo sabías? 🥳
`;

// Enviar mensaje
enviarScript(mensajeCuriosidad)
  .then((e) => console.log(`✅ Código finalizado, ${e} mensajes enviados.`))
  .catch(console.error);
