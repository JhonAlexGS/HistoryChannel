export const codeHistory = [
  {
    year: '3000 AC',
    title: 'Primeros Algoritmos',
    description: 'Los babilonios desarrollan algoritmos para resolver ecuaciones matemáticas.',
    icon: '📜',
    details: 'Los antiguos babilonios crearon tablillas de arcilla con instrucciones paso a paso para resolver ecuaciones cuadráticas y sistemas de ecuaciones lineales.',
    impact: 'Establecieron el concepto fundamental de secuencias de instrucciones lógicas, la base de todos los algoritmos modernos.',
    funFact: 'Una tablilla babilónica de 1800 AC (YBC 7289) calcula la raíz cuadrada de 2 con precisión de 6 decimales.'
  },
  {
    year: '1842',
    title: 'Primer Programa',
    description: 'Ada Lovelace escribe el primer algoritmo destinado a ser procesado por una máquina.',
    icon: '👩‍💻',
    details: 'Ada Lovelace creó un algoritmo para calcular los números de Bernoulli usando la Máquina Analítica de Charles Babbage, que nunca fue construida.',
    impact: 'Fue la primera persona en reconocer que las computadoras podían ir más allá del simple cálculo numérico.',
    funFact: 'Ada Lovelace es considerada la primera programadora de la historia, 100 años antes de que existiera la primera computadora.'
  },
  {
    year: '1936',
    title: 'Máquina de Turing',
    description: 'Alan Turing describe la Máquina de Turing, base teórica de la computación moderna.',
    icon: '⚙️',
    details: 'Un modelo matemático abstracto que define una máquina capaz de resolver cualquier problema computable mediante la manipulación de símbolos en una cinta infinita.',
    impact: 'Estableció los límites teóricos de la computación y demostró que algunos problemas son incomputables.',
    funFact: 'La Máquina de Turing fue creada para resolver el "Problema de la Decisión" de Hilbert, demostrando que no existe un algoritmo universal.'
  },
  {
    year: '1945',
    title: 'ENIAC',
    description: 'Se completa ENIAC, la primera computadora electrónica de propósito general.',
    icon: '💻',
    details: 'ENIAC pesaba 30 toneladas, ocupaba 167 m², contenía 17,468 tubos de vacío y consumía 150 kW de electricidad.',
    impact: 'Revolucionó el cálculo científico, siendo 1000 veces más rápida que las computadoras electromecánicas de la época.',
    funFact: 'Las primeras programadoras de ENIAC fueron 6 mujeres matemáticas, conocidas como las "ENIAC Girls".'
  },
  {
    year: '1958',
    title: 'Primer Compilador',
    description: 'Grace Hopper desarrolla el primer compilador de lenguaje de programación.',
    icon: '🔧',
    details: 'El compilador A-0 traducía código matemático simbólico a lenguaje máquina, eliminando la necesidad de programar en código binario.',
    impact: 'Permitió a los programadores escribir código en un lenguaje más cercano al inglés, democratizando la programación.',
    funFact: 'Grace Hopper popularizó el término "bug" después de encontrar una polilla real atascada en la computadora Harvard Mark II.'
  },
  {
    year: '1969',
    title: 'ARPANET',
    description: 'Nace ARPANET, precursor de Internet, conectando 4 universidades.',
    icon: '🌐',
    details: 'El 29 de octubre de 1969 se envió el primer mensaje entre UCLA y Stanford. El sistema intentó enviar "LOGIN" pero se cayó en la "O".',
    impact: 'Creó la primera red de conmutación de paquetes, revolucionando las telecomunicaciones y sentando las bases de Internet.',
    funFact: 'El primer mensaje enviado fue "LO" porque el sistema se cayó antes de completar "LOGIN".'
  },
  {
    year: '1971',
    title: 'Email Inventado',
    description: 'Ray Tomlinson envía el primer correo electrónico.',
    icon: '📧',
    details: 'Tomlinson eligió el símbolo @ para separar el nombre del usuario del nombre de la computadora, creando el formato usuario@host.',
    impact: 'Transformó la comunicación mundial, convirtiéndose en una de las aplicaciones más utilizadas de Internet.',
    funFact: 'Tomlinson no recuerda qué decía el primer email, probablemente fue algo como "QWERTYUIOP".'
  },
  {
    year: '1983',
    title: 'Internet',
    description: 'ARPANET adopta TCP/IP, marcando el nacimiento oficial de Internet.',
    icon: '🌍',
    details: 'El 1 de enero de 1983, conocido como "Flag Day", todas las máquinas de ARPANET cambiaron a TCP/IP simultáneamente.',
    impact: 'Estandarizó la comunicación entre redes diferentes, permitiendo el crecimiento exponencial de Internet.',
    funFact: 'En 1983, Internet tenía solo 562 hosts conectados. Hoy son más de 4.5 mil millones de dispositivos.'
  },
  {
    year: '1989',
    title: 'World Wide Web',
    description: 'Tim Berners-Lee inventa la World Wide Web en el CERN.',
    icon: '🕸️',
    details: 'Berners-Lee creó HTTP, HTML y el primer navegador/editor web llamado "WorldWideWeb" en una computadora NeXT.',
    impact: 'Democratizó el acceso a la información y revolucionó la forma en que compartimos conocimiento globalmente.',
    funFact: 'La primera página web sigue en línea: http://info.cern.ch/hypertext/WWW/TheProject.html'
  },
  {
    year: '1991',
    title: 'Linux',
    description: 'Linus Torvalds lanza la primera versión del kernel Linux.',
    icon: '🐧',
    details: 'Linus, un estudiante finlandés de 21 años, compartió su sistema operativo como "hobby" que "no será grande y profesional como GNU".',
    impact: 'Se convirtió en el kernel más utilizado del mundo, alimentando servidores, smartphones Android y supercomputadoras.',
    funFact: 'Linus quería llamarlo "Freax" pero el administrador del servidor FTP lo nombró "Linux" sin permiso.'
  },
  {
    year: '2008',
    title: 'GitHub',
    description: 'Lanzamiento de GitHub, revolucionando la colaboración en código.',
    icon: '🐙',
    details: 'Fundada por Tom Preston-Werner, Chris Wanstrath y PJ Hyett, GitHub combinó Git con una interfaz web y herramientas sociales.',
    impact: 'Transformó el desarrollo de software de código abierto, con más de 100 millones de desarrolladores y 330 millones de repositorios.',
    funFact: 'El proyecto más popular de GitHub es freeCodeCamp, seguido de TensorFlow y VS Code.'
  },
  {
    year: '2015',
    title: 'Era del Open Source',
    description: 'El código abierto se convierte en el estándar de la industria.',
    icon: '🔓',
    details: 'Microsoft, antes enemiga del open source, abraza Linux y compra GitHub. Google, Facebook y otros gigantes abren sus proyectos.',
    impact: 'El 90% de las empresas Fortune 500 usan software open source. Linux domina el 96.3% de los servidores web.',
    funFact: 'En 2001, Steve Ballmer llamó a Linux "un cáncer". En 2020, Microsoft lanzó WSL2 con un kernel Linux completo.'
  }
];

export const programmingLanguages = [
  {
    year: '1957',
    title: 'FORTRAN',
    description: 'Primer lenguaje de programación de alto nivel, diseñado para cálculo científico.',
    icon: '🔢',
    color: '#1e90ff',
    details: 'Desarrollado por John Backus en IBM, FORTRAN (FORmula TRANslation) permitía escribir ecuaciones matemáticas casi como en papel.',
    impact: 'Revolucionó la programación científica y sigue usándose en supercomputadoras para simulaciones climáticas y físicas.',
    funFact: 'El primer compilador de FORTRAN tardó 18 años-persona en desarrollarse, pero reducía el tiempo de programación en un 95%.'
  },
  {
    year: '1958',
    title: 'LISP',
    description: 'Lenguaje para procesamiento de listas, fundamental en IA.',
    icon: '🧠',
    color: '#3fb68b',
    details: 'Creado por John McCarthy en MIT, LISP fue el segundo lenguaje de alto nivel y el primero con recolección de basura automática.',
    impact: 'Dominó la investigación en IA durante décadas. Introdujo conceptos como funciones de primera clase y recursión.',
    funFact: 'LISP tiene más paréntesis que cualquier otro lenguaje. Un chiste dice: "LISP = Lots of Irritating Superfluous Parentheses".'
  },
  {
    year: '1972',
    title: 'C',
    description: 'Dennis Ritchie crea C, base de sistemas operativos modernos.',
    icon: '⚡',
    color: '#555555',
    details: 'Creado en Bell Labs para desarrollar UNIX. C combina la eficiencia del ensamblador con abstracciones de alto nivel.',
    impact: 'Unix, Linux, Windows, macOS y la mayoría de sistemas operativos están escritos en C. Es el "lenguaje de los lenguajes".',
    funFact: 'C se llama así porque evolucionó del lenguaje B, que a su vez derivó de BCPL. El siguiente en la secuencia sería D.'
  },
  { year: '1983', title: 'C++', description: 'Bjarne Stroustrup añade programación orientada a objetos a C.', icon: '➕', color: '#00599c' },
  { year: '1987', title: 'Perl', description: 'Larry Wall crea Perl para procesamiento de texto y administración de sistemas.', icon: '🐪', color: '#39457e' },
  {
    year: '1991',
    title: 'Python',
    description: 'Guido van Rossum lanza Python, enfocado en legibilidad y simplicidad.',
    icon: '🐍',
    color: '#3776ab',
    details: 'Nombrado por Monty Python, no por la serpiente. Guido lo creó durante las vacaciones de Navidad como sucesor de ABC.',
    impact: 'Se convirtió en el lenguaje #1 en IA/ML, ciencia de datos y educación. Usado por Google, Netflix, NASA e Instagram.',
    funFact: 'El Zen de Python dice "Simple es mejor que complejo" pero Python tiene 79 palabras reservadas vs 32 de C.'
  },
  {
    year: '1995',
    title: 'Java',
    description: 'Sun Microsystems lanza Java con el lema "Write Once, Run Anywhere".',
    icon: '☕',
    color: '#f89820',
    details: 'Originalmente llamado "Oak", luego "Green", finalmente "Java" por el café que bebían los desarrolladores.',
    impact: 'Domina aplicaciones empresariales y Android. 3 mil millones de dispositivos ejecutan Java.',
    funFact: 'Java fue diseñado inicialmente para TV interactiva, pero era "demasiado avanzado" para la TV por cable de 1990.'
  },
  {
    year: '1995',
    title: 'JavaScript',
    description: 'Brendan Eich crea JavaScript en 10 días para Netscape Navigator.',
    icon: '🌟',
    color: '#f7df1e',
    details: 'Creado en mayo de 1995 en solo 10 días. Originalmente llamado "Mocha", luego "LiveScript", finalmente "JavaScript" por marketing.',
    impact: 'Se convirtió en el único lenguaje que corre nativamente en todos los navegadores. Node.js lo llevó al servidor.',
    funFact: 'JavaScript no tiene nada que ver con Java, excepto el nombre. Fue un truco de marketing aprovechando la popularidad de Java.'
  },
  { year: '2000', title: 'C#', description: 'Microsoft lanza C# como parte de su plataforma .NET.', icon: '🎵', color: '#239120' },
  { year: '2009', title: 'Go', description: 'Google lanza Go, diseñado para programación concurrente.', icon: '🏃', color: '#00add8' },
  { year: '2010', title: 'Rust', description: 'Mozilla lanza Rust, enfocado en seguridad y rendimiento.', icon: '🦀', color: '#ce422b' },
  { year: '2014', title: 'Swift', description: 'Apple lanza Swift para desarrollo iOS/macOS.', icon: '🍎', color: '#fa7343' },
  { year: '2020', title: 'Lenguajes Modernos', description: 'TypeScript, Kotlin, y otros lenguajes modernos ganan popularidad.', icon: '🚀', color: '#3178c6' }
];

export const aiHistory = [
  {
    year: '1950',
    title: 'Test de Turing',
    description: 'Alan Turing propone el Test de Turing para medir inteligencia artificial.',
    icon: '🤖',
    color: '#ff6b6b',
    details: 'En su paper "Computing Machinery and Intelligence", Turing propuso el "juego de imitación" donde un humano intenta distinguir entre una máquina y otro humano.',
    impact: 'Estableció un criterio fundamental para evaluar la inteligencia artificial que sigue siendo debatido hoy.',
    funFact: 'Turing predijo que para el año 2000, las máquinas engañarían al 30% de jueces humanos. En 2014, Eugene Goostman pasó el test engañando al 33%.'
  },
  {
    year: '1956',
    title: 'Nacimiento de la IA',
    description: 'Conferencia de Dartmouth acuña el término "Inteligencia Artificial".',
    icon: '🎓',
    color: '#4ecdc4',
    details: 'John McCarthy, Marvin Minsky, Claude Shannon y Nathaniel Rochester organizaron un taller de 2 meses donde nació oficialmente el campo de la IA.',
    impact: 'Estableció la IA como disciplina académica formal y definió sus objetivos fundamentales.',
    funFact: 'La propuesta original era optimista: creían que simular la inteligencia humana tomaría "un verano". Llevó 70 años y contando.'
  },
  {
    year: '1966',
    title: 'ELIZA',
    description: 'Joseph Weizenbaum crea ELIZA, primer chatbot de la historia.',
    icon: '💬',
    color: '#45b7d1',
    details: 'ELIZA simulaba una psicoterapeutausando coincidencia de patrones. Respondía con preguntas basadas en las palabras clave del usuario.',
    impact: 'Demostró que los humanos tienden a antropomorfizar las máquinas, incluso con interacciones simples.',
    funFact: 'Weizenbaum quedó perturbado cuando su secretaria le pidió privacidad para hablar con ELIZA, creyendo que "entendía" sus problemas.'
  },
  { year: '1974-1980', title: 'Primer Invierno IA', description: 'Reducción de financiamiento por expectativas no cumplidas.', icon: '❄️', color: '#95afc0' },
  { year: '1980', title: 'Sistemas Expertos', description: 'Auge de los sistemas expertos en empresas.', icon: '🎯', color: '#f38181' },
  { year: '1987-1993', title: 'Segundo Invierno IA', description: 'Caída del mercado de LISP y sistemas expertos.', icon: '🌨️', color: '#95afc0' },
  {
    year: '1997',
    title: 'Deep Blue',
    description: 'Deep Blue de IBM derrota al campeón mundial de ajedrez Garry Kasparov.',
    icon: '♟️',
    color: '#4169e1',
    details: 'Deep Blue podía evaluar 200 millones de posiciones por segundo. Kasparov ganó la primera serie en 1996, pero perdió la revancha en 1997.',
    impact: 'Fue un momento histórico que demostró que las máquinas podían superar a los humanos en tareas consideradas puramente intelectuales.',
    funFact: 'Kasparov acusó a IBM de hacer trampa, sugiriendo intervención humana. IBM se negó a mostrar los logs y desmanteló Deep Blue inmediatamente después.'
  },
  {
    year: '2011',
    title: 'Watson en Jeopardy',
    description: 'IBM Watson gana el concurso de televisión Jeopardy.',
    icon: '🏆',
    color: '#f8b500',
    details: 'Watson procesó 200 millones de páginas de información (4 terabytes) usando procesamiento de lenguaje natural para responder preguntas en inglés.',
    impact: 'Demostró que la IA podía entender lenguaje natural complejo, incluyendo juegos de palabras, metáforas e ironía.',
    funFact: 'Watson cometió un error memorable: después de que un oponente dijera incorrectamente "Toronto", Watson repitió "¿Qué es Toronto?"'
  },
  {
    year: '2012',
    title: 'Deep Learning',
    description: 'AlexNet revoluciona el reconocimiento de imágenes con deep learning.',
    icon: '📸',
    color: '#0066cc',
    details: 'AlexNet, creado por Alex Krizhevsky, ganó ImageNet con 15.3% error vs 26.2% del segundo lugar, usando GPUs y redes neuronales profundas.',
    impact: 'Inició la revolución del deep learning moderna. Demostró que más datos + más compute + redes más profundas = mejor rendimiento.',
    funFact: 'AlexNet tenía 60 millones de parámetros. GPT-3 (2020) tiene 175 mil millones, ¡casi 3000 veces más!'
  },
  { year: '2014', title: 'GANs', description: 'Ian Goodfellow inventa las Redes Generativas Antagónicas (GANs).', icon: '🎨', color: '#e77f67' },
  {
    year: '2016',
    title: 'AlphaGo',
    description: 'AlphaGo de DeepMind derrota al campeón mundial de Go.',
    icon: '🎮',
    color: '#596275',
    details: 'AlphaGo venció a Lee Sedol 4-1. Go tiene más posiciones posibles (10^170) que átomos en el universo (10^80), considerado intratable por fuerza bruta.',
    impact: 'Demostró que la IA podía dominar juegos basados en intuición y creatividad, no solo cálculo. AlphaGo Zero aprendió solo jugando contra sí mismo.',
    funFact: 'En la partida 2, AlphaGo hizo la "jugada 37", tan creativa que los comentaristas pensaron que era un error. Resultó ser brillante.'
  },
  {
    year: '2017',
    title: 'Transformers',
    description: 'Google presenta la arquitectura Transformer, base de los LLMs modernos.',
    icon: '⚡',
    color: '#ffa502',
    details: 'El paper "Attention is All You Need" introdujo el mecanismo de self-attention, eliminando la necesidad de recurrencia y convolución.',
    impact: 'Revolucionó el NLP y permitió el escalado a modelos masivos. Es la base de GPT, BERT, Claude, Gemini y todos los LLMs modernos.',
    funFact: 'Los autores originales no imaginaban que escalaría tanto. El modelo original tenía 65M parámetros; GPT-4 tiene ~1.7 trillones.'
  },
  { year: '2018', title: 'GPT-1', description: 'OpenAI lanza GPT-1, primer modelo de la serie GPT.', icon: '📝', color: '#26de81' },
  {
    year: '2020',
    title: 'GPT-3',
    description: 'OpenAI lanza GPT-3 con 175 mil millones de parámetros.',
    icon: '🧠',
    color: '#20bf6b',
    details: 'GPT-3 demostró "few-shot learning": podía realizar tareas nuevas con solo unos ejemplos, sin reentrenamiento.',
    impact: 'Desató la carrera de LLMs. Demostró que escalar modelos genera capacidades emergentes inesperadas.',
    funFact: 'Entrenar GPT-3 costó ~$4.6 millones en compute. Entrenar desde cero hoy costaría >$10 millones por los costos de GPU.'
  },
  {
    year: '2022',
    title: 'ChatGPT',
    description: 'Lanzamiento de ChatGPT, democratizando el acceso a IA conversacional.',
    icon: '💬',
    color: '#00d2d3',
    details: 'Basado en GPT-3.5 con RLHF (Reinforcement Learning from Human Feedback), alcanzó 1 millón de usuarios en 5 días.',
    impact: 'Inició la era de IA generativa mainstream. Llegó a 100 millones de usuarios en 2 meses, el crecimiento más rápido de la historia.',
    funFact: 'ChatGPT es la aplicación de más rápido crecimiento: 100M usuarios en 2 meses. Instagram tardó 2.5 años, TikTok 9 meses.'
  },
  { year: '2023', title: 'Era de los LLMs', description: 'Explosión de modelos de lenguaje: GPT-4, Claude, Gemini, Llama.', icon: '🚀', color: '#1e90ff' },
  { year: '2024', title: 'IA Multimodal', description: 'Modelos que procesan texto, imagen, audio y video simultáneamente.', icon: '🌈', color: '#00a8ff' }
];

export const videoGamesHistory = [
  {
    year: '1958',
    title: 'Tennis for Two',
    description: 'Primer videojuego de la historia creado en un osciloscopio.',
    icon: '🎾',
    color: '#4ecdc4',
    details: 'Creado por William Higinbotham en el Brookhaven National Laboratory usando un osciloscopio analógico.',
    impact: 'Demostró que las computadoras podían ser usadas para entretenimiento, no solo cálculos científicos.',
    funFact: 'Solo existió durante dos años antes de ser desmantelado. No se patentó porque era propiedad del gobierno.'
  },
  {
    year: '1972',
    title: 'Pong',
    description: 'Atari lanza Pong, el primer videojuego comercialmente exitoso.',
    icon: '🏓',
    color: '#ff6b6b',
    details: 'Creado por Nolan Bushnell y Al Alcorn en Atari. El prototipo se probó en un bar y la máquina se llenó de monedas en días.',
    impact: 'Inició la industria de los videojuegos arcade y estableció a Atari como líder del mercado.',
    funFact: 'El primer Pong arcade instalado en un bar se rompió porque estaba demasiado lleno de monedas.'
  },
  {
    year: '1977',
    title: 'Atari 2600',
    description: 'Lanzamiento de la consola Atari 2600, popularizando los videojuegos en casa.',
    icon: '🕹️',
    color: '#f8b500',
    details: 'Revolucionó el mercado doméstico con cartuchos intercambiables. Vendió más de 30 millones de unidades.',
    impact: 'Estableció el modelo de negocio de consolas + juegos intercambiables que persiste hoy.',
    funFact: 'El peor juego de la historia, E.T. (1982), casi destruye a Atari. Millones de cartuchos fueron enterrados en Nuevo México.'
  },
  {
    year: '1980',
    title: 'Pac-Man',
    description: 'Namco lanza Pac-Man, convirtiéndose en un fenómeno cultural.',
    icon: '👾',
    color: '#ffd700',
    details: 'Diseñado por Toru Iwatani para atraer a mujeres jugadoras. El nombre viene de "paku paku", onomatopeya japonesa para comer.',
    impact: 'Generó más de $14 mil millones en ingresos, más que Star Wars en su tiempo. Creó el merchandising de videojuegos.',
    funFact: 'Existe un patrón perfecto descubierto en 1999 que permite jugar indefinidamente sin morir.'
  },
  {
    year: '1983',
    title: 'Crisis de los Videojuegos',
    description: 'Colapso del mercado de videojuegos en Norteamérica.',
    icon: '💥',
    color: '#95afc0',
    details: 'Saturación del mercado, juegos de baja calidad y pérdida de confianza del consumidor causaron pérdidas masivas.',
    impact: 'Las ventas cayeron 97%. Muchas empresas quebraron. Casi termina con la industria de videojuegos.',
    funFact: 'Nintendo salvó la industria en 1985 con el NES, pero tuvo que llamarlo "Sistema de Entretenimiento" para evitar el estigma.'
  },
  {
    year: '1985',
    title: 'Super Mario Bros',
    description: 'Nintendo lanza Super Mario Bros, redefiniendo los videojuegos de plataformas.',
    icon: '🍄',
    color: '#e74c3c',
    details: 'Creado por Shigeru Miyamoto. Vendió más de 40 millones de copias y salvó a Nintendo.',
    impact: 'Estableció el estándar de juegos de plataformas y convirtió a Mario en el ícono más reconocible de los videojuegos.',
    funFact: 'Mario fue nombrado por el casero italiano del almacén de Nintendo en América, Mario Segale.'
  },
  {
    year: '1989',
    title: 'Game Boy',
    description: 'Nintendo lanza Game Boy, revolucionando los videojuegos portátiles.',
    icon: '🎮',
    color: '#95afc0',
    details: 'Pantalla monocromática de 4 tonos de verde. Batería de 30 horas. Vendió 118 millones de unidades.',
    impact: 'Dominó el mercado portátil durante una década. Tetris lo convirtió en un fenómeno mundial.',
    funFact: 'Sobrevivió a la Guerra del Golfo: un Game Boy quemado en bombardeo todavía funciona y está en exhibición en Nintendo NY.'
  },
  {
    year: '1996',
    title: 'Pokémon Red/Blue',
    description: 'Game Freak lanza Pokémon, creando una de las franquicias más grandes del mundo.',
    icon: '⚡',
    color: '#f1c40f',
    details: 'Creado por Satoshi Tajiri, inspirado en su amor por coleccionar insectos de niño.',
    impact: 'Generó más de $100 mil millones, la franquicia de medios más lucrativa de todos los tiempos.',
    funFact: 'El desarrollo tomó 6 años. Game Freak casi quiebra y Satoshi trabajó sin salario por años.'
  },
  {
    year: '2000',
    title: 'The Sims',
    description: 'Maxis lanza The Sims, el simulador de vida más vendido de la historia.',
    icon: '🏠',
    color: '#27ae60',
    details: 'Creado por Will Wright. Más de 200 millones de copias vendidas en toda la serie.',
    impact: 'Demostró que los juegos sin objetivos definidos podían ser exitosos. Atrajo a audiencias no tradicionales.',
    funFact: 'EA rechazó The Sims inicialmente. Solo se hizo cuando SimCity fue un éxito.'
  },
  {
    year: '2004',
    title: 'World of Warcraft',
    description: 'Blizzard lanza WoW, definiendo los MMORPGs modernos.',
    icon: '⚔️',
    color: '#9b59b6',
    details: 'Alcanzó 12 millones de suscriptores en su pico. Generó más de $9 mil millones en ingresos.',
    impact: 'Estableció el modelo de suscripción mensual. Creó una cultura gaming masiva.',
    funFact: 'Hay más de 244 años de tiempo jugado acumulado. Algunos jugadores han muerto literalmente por jugar sin parar.'
  },
  {
    year: '2009',
    title: 'Minecraft',
    description: 'Markus Persson lanza Minecraft, el videojuego más vendido de la historia.',
    icon: '⛏️',
    color: '#2ecc71',
    details: 'Desarrollado por una sola persona. Microsoft lo compró por $2.5 mil millones en 2014.',
    impact: 'Más de 300 millones de copias vendidas. Usado en educación mundialmente. Creatividad sin límites.',
    funFact: 'Notch lo programó en solo 6 días. La versión final tomó años, pero el prototipo fue increíblemente rápido.'
  },
  {
    year: '2017',
    title: 'Fortnite Battle Royale',
    description: 'Epic Games lanza Fortnite BR, revolucionando el free-to-play.',
    icon: '🪂',
    color: '#3498db',
    details: 'Modo Battle Royale agregado 2 meses después del lanzamiento original. 350 millones de jugadores.',
    impact: 'Generó $9 mil millones en 2 años. Popularizó battle royale y el modelo free-to-play con cosméticos.',
    funFact: 'Travis Scott hizo un concierto virtual visto por 12 millones de jugadores simultáneos.'
  },
  {
    year: '2020',
    title: 'Among Us Explota',
    description: 'Among Us se vuelve viral durante la pandemia.',
    icon: '🚀',
    color: '#e74c3c',
    details: 'Lanzado en 2018, pero explotó en 2020 gracias a streamers. 500 millones de jugadores.',
    impact: 'Demostró que juegos indie pequeños pueden volverse fenómenos virales años después del lanzamiento.',
    funFact: 'Lo desarrollaron solo 3 personas. Casi lo abandonaron antes de volverse viral.'
  }
];

export const hacksHistory = [
  {
    year: '1988',
    title: 'Morris Worm',
    description: 'Primer gusano de Internet que infectó 6,000 computadoras (10% de Internet).',
    icon: '🐛',
    color: '#e74c3c',
    details: 'Creado por Robert Tappan Morris, estudiante de Cornell. Causó daños estimados en $100 millones.',
    impact: 'Primera condena bajo el Computer Fraud and Abuse Act. Llevó a la creación del CERT.',
    funFact: 'Morris alegó que fue un accidente: un error de programación hizo que el gusano se replicara descontroladamente.'
  },
  {
    year: '2000',
    title: 'Ataque ILOVEYOU',
    description: 'Virus que infectó 50 millones de computadoras en 10 días.',
    icon: '💌',
    color: '#e91e63',
    details: 'Gusano vía email desde Filipinas. Sobrescribía archivos y se enviaba a todos los contactos de Outlook.',
    impact: 'Daños estimados en $10 mil millones. Paralizó sistemas gubernamentales y empresariales mundialmente.',
    funFact: 'Los creadores nunca fueron procesados porque Filipinas no tenía leyes contra hacking en ese momento.'
  },
  {
    year: '2010',
    title: 'Stuxnet',
    description: 'Primer ciberarma que atacó infraestructura física (centrifugadoras nucleares iraníes).',
    icon: '☢️',
    color: '#ff9800',
    details: 'Virus ultra sofisticado creado probablemente por EE.UU. e Israel. Atacó específicamente PLCs de Siemens.',
    impact: 'Destruyó 1,000 centrifugadoras nucleares. Demostró que el ciberespacio es un campo de batalla real.',
    funFact: 'Usó 4 zero-days distintos. Tan sofisticado que solo gobiernos tenían esos recursos.'
  },
  {
    year: '2013',
    title: 'Revelaciones Snowden',
    description: 'Edward Snowden revela programas masivos de vigilancia de la NSA.',
    icon: '🕵️',
    color: '#607d8b',
    details: 'Filtró miles de documentos clasificados revelando PRISM y programas de espionaje masivo.',
    impact: 'Desató debate global sobre privacidad vs seguridad. Cambió políticas de privacidad de grandes empresas.',
    funFact: 'Snowden actualmente vive en Rusia con asilo. EE.UU. lo acusa de espionaje.'
  },
  {
    year: '2014',
    title: 'Heartbleed',
    description: 'Vulnerabilidad en OpenSSL que afectó al 17% de servidores web seguros.',
    icon: '💔',
    color: '#f44336',
    details: 'Bug que permitía robar información de memoria protegida. Existió por 2 años sin ser detectado.',
    impact: 'Comprometió contraseñas, datos privados y claves de cifrado de millones de sitios.',
    funFact: 'El bug era un simple error de validación de solo una línea de código faltante.'
  },
  {
    year: '2016',
    title: 'Mirai Botnet',
    description: 'Botnet de IoT que lanzó el ataque DDoS más grande de la historia.',
    icon: '📹',
    color: '#9c27b0',
    details: 'Infectó cámaras IP y DVRs con contraseñas por defecto. 600,000 dispositivos comprometidos.',
    impact: 'Tumbó grandes sitios: Twitter, Netflix, GitHub, PayPal. Reveló la inseguridad del IoT.',
    funFact: 'El código fue liberado públicamente por los creadores, generando variantes aún más peligrosas.'
  },
  {
    year: '2017',
    title: 'WannaCry Ransomware',
    description: 'Ransomware que infectó 300,000 computadoras en 150 países.',
    icon: '😭',
    color: '#f44336',
    details: 'Explotó EternalBlue, vulnerabilidad de la NSA filtrada. Pidió rescate en Bitcoin.',
    impact: 'Paralizó hospitales del NHS británico. Daños estimados en $4 mil millones.',
    funFact: 'Un investigador de 22 años lo detuvo por accidente al registrar un dominio que funcionó como kill switch.'
  },
  {
    year: '2018',
    title: 'Cambridge Analytica',
    description: 'Escándalo de privacidad de Facebook afectando 87 millones de usuarios.',
    icon: '📊',
    color: '#3f51b5',
    details: 'Cosechó datos de Facebook sin consentimiento para perfilado político.',
    impact: 'Facebook multado con $5 mil millones. Zuckerberg testificó ante el Congreso. Nuevas leyes de privacidad.',
    funFact: 'Los datos fueron obtenidos a través de una app de quiz de personalidad aparentemente inocente.'
  },
  {
    year: '2020',
    title: 'SolarWinds Hack',
    description: 'Ataque a la cadena de suministro que comprometió agencias del gobierno de EE.UU.',
    icon: '🌐',
    color: '#ff5722',
    details: 'Hackers insertaron backdoor en actualizaciones de software de SolarWinds. 18,000 organizaciones afectadas.',
    impact: 'Considerado uno de los ataques cibernéticos más sofisticados de la historia. Atribuido a Rusia.',
    funFact: 'El ataque estuvo activo por 8 meses antes de ser descubierto.'
  },
  {
    year: '2021',
    title: 'Colonial Pipeline',
    description: 'Ransomware que paralizó el oleoducto más grande de EE.UU.',
    icon: '⛽',
    color: '#795548',
    details: 'Grupo DarkSide cifró sistemas. Colonial pagó $4.4 millones en Bitcoin (FBI recuperó parte).',
    impact: 'Declarado estado de emergencia. Escasez de gasolina en costa este. Aceleró regulaciones de ciberseguridad.',
    funFact: 'Todo comenzó porque un empleado usó una contraseña comprometida sin autenticación de dos factores.'
  },
  {
    year: '2024',
    title: 'Era de IA en Hacking',
    description: 'Hackers usan IA para crear malware, phishing y deepfakes sofisticados.',
    icon: '🤖',
    color: '#00bcd4',
    details: 'LLMs generan código malicioso, emails de phishing perfectos y deepfakes convincentes.',
    impact: 'Carrera armamentística entre atacantes con IA y defensores con IA. Nuevo paradigma de seguridad.',
    funFact: 'ChatGPT se negará a crear malware, pero modelos sin filtros están disponibles en la dark web.'
  }
];

export const devicesHistory = [
  {
    year: '1947',
    title: 'Transistor',
    description: 'Bell Labs inventa el transistor, reemplazando los tubos de vacío.',
    icon: '⚡',
    color: '#ff9800',
    details: 'Inventado por John Bardeen, Walter Brattain y William Shockley. Ganaron el Nobel de Física en 1956.',
    impact: 'Hizo posible la miniaturización. Sin transistores, no existirían smartphones, computadoras modernas ni nada digital.',
    funFact: 'El primer transistor era del tamaño de una mano. Hoy caben 50 mil millones en un chip del tamaño de una uña.'
  },
  {
    year: '1958',
    title: 'Circuito Integrado',
    description: 'Jack Kilby inventa el circuito integrado (microchip).',
    icon: '🔲',
    color: '#9c27b0',
    details: 'Kilby en Texas Instruments y Robert Noyce en Fairchild inventaron versiones independientemente. Kilby ganó el Nobel.',
    impact: 'Permitió poner millones de transistores en un solo chip. Fundamento de toda la electrónica moderna.',
    funFact: 'El primer circuito integrado de Kilby era tosco y feo. Su jefe le dijo que "nunca funcionaría comercialmente".'
  },
  {
    year: '1971',
    title: 'Intel 4004',
    description: 'Primer microprocesador comercial del mundo.',
    icon: '💻',
    color: '#2196f3',
    details: 'Diseñado por Federico Faggin, Ted Hoff y Stanley Mazor. 2,300 transistores a 740 kHz.',
    impact: 'Inició la revolución de las computadoras personales. Toda la CPU en un solo chip.',
    funFact: 'Fue originalmente diseñado para calculadoras. Intel se dio cuenta tarde de que había inventado algo revolucionario.'
  },
  {
    year: '1976',
    title: 'Apple I',
    description: 'Steve Wozniak diseña la Apple I, vendida por Steve Jobs.',
    icon: '🍏',
    color: '#4caf50',
    details: 'Ensamblada a mano por Wozniak. Solo 200 unidades producidas. Vendida a $666.66.',
    impact: 'Inició Apple Computer. Demostró que las computadoras podían ser para individuos, no solo corporaciones.',
    funFact: 'Una Apple I en funcionamiento se vendió en subasta por $905,000 en 2014.'
  },
  {
    year: '1981',
    title: 'IBM PC',
    description: 'IBM lanza la PC, estableciendo el estándar de computadoras personales.',
    icon: '🖥️',
    color: '#607d8b',
    details: 'Arquitectura abierta que cualquiera podía clonar. Intel 8088 a 4.77 MHz. MS-DOS como sistema operativo.',
    impact: 'Estableció el estándar "PC compatible" que domina hasta hoy. Legitimó las PCs en empresas.',
    funFact: 'IBM pensó que el dinero estaba en el hardware. Dejar que Microsoft mantuviera los derechos de DOS fue un error de billones de dólares.'
  },
  {
    year: '1984',
    title: 'Macintosh',
    description: 'Apple lanza la Macintosh, primera computadora personal con GUI exitosa.',
    icon: '🖱️',
    color: '#9e9e9e',
    details: 'Presentada en el famoso comercial "1984" en el Super Bowl. Incluía mouse y GUI revolucionaria.',
    impact: 'Popularizó la interfaz gráfica y el mouse. Cambió para siempre cómo interactuamos con computadoras.',
    funFact: 'Steve Jobs robó la idea de GUI de Xerox PARC durante una visita en 1979. Bill Gates luego "robó" de Mac para Windows.'
  },
  {
    year: '1998',
    title: 'iMac G3',
    description: 'Apple lanza el iMac, salvando a la empresa de la bancarrota.',
    icon: '🎨',
    color: '#00bcd4',
    details: 'Diseñado por Jony Ive. Translúcido y colorido. "i" para Internet. Sin disquetera (revolucionario).',
    impact: 'Salvó a Apple de la quiebra. Vendió 800,000 unidades en 139 días. Inició la era del diseño en tecnología.',
    funFact: 'El iMac venía en 13 colores. "Bondi Blue" fue el más icónico. Influenció diseño de productos por década.'
  },
  {
    year: '2001',
    title: 'iPod',
    description: 'Apple lanza el iPod, revolucionando la música portátil.',
    icon: '🎵',
    color: '#ffffff',
    details: '1,000 canciones en tu bolsillo. Rueda de clic icónica. Funcionaba solo con Mac inicialmente.',
    impact: 'Mató a los reproductores de CD y Walkman. Salvó a la industria musical con iTunes Store.',
    funFact: 'El nombre viene de la frase "Open the pod bay door, HAL" de 2001: Odisea del Espacio.'
  },
  {
    year: '2007',
    title: 'iPhone',
    description: 'Apple lanza el iPhone, redefiniendo los smartphones.',
    icon: '📱',
    color: '#000000',
    details: 'Touchscreen multi-táctil. Sin teclado físico. Sin stylus. "Un iPod, un teléfono y un comunicador de Internet".',
    impact: 'Destruyó a Nokia, BlackBerry y Palm. Creó la economía de apps. Cambió la forma en que vivimos.',
    funFact: 'Steve Ballmer se rio del iPhone: "¿Quién querría un teléfono sin teclado?". Microsoft Mobile murió poco después.'
  },
  {
    year: '2010',
    title: 'iPad',
    description: 'Apple crea la categoría de tablets modernas con el iPad.',
    icon: '📲',
    color: '#3f51b5',
    details: 'Pantalla de 9.7 pulgadas. iOS adaptado. Vendió 3 millones en 80 días.',
    impact: 'Creó el mercado de tablets. Usado en educación, medicina, aviación. Cambió el consumo de medios.',
    funFact: 'Microsoft había intentado tablets por 10 años sin éxito. Apple lo logró eliminando complejidad, no agregándola.'
  },
  {
    year: '2012',
    title: 'Raspberry Pi',
    description: 'Fundación Raspberry Pi lanza computadora de $35 para educación.',
    icon: '🥧',
    color: '#c0392b',
    details: 'Computadora completa del tamaño de una tarjeta de crédito. Diseñada para enseñar programación.',
    impact: 'Vendió más de 50 millones. Democratizó la programación y robótica. Usado en IoT, educación y proyectos DIY.',
    funFact: 'Fue creado porque los estudiantes de Cambridge llegaban sin saber programar. Querían recrear el BBC Micro de los 80s.'
  },
  {
    year: '2015',
    title: 'Apple Watch',
    description: 'Apple entra al mercado de wearables con el Apple Watch.',
    icon: '⌚',
    color: '#34495e',
    details: 'Salud, fitness, notificaciones. Taptic Engine para notificaciones hápticas. Digital Crown para navegación.',
    impact: 'Domina el mercado de smartwatches (50% de cuota). Salvó vidas detectando arritmias y caídas.',
    funFact: 'Inicialmente ridiculizado como "una solución buscando un problema". Ahora vende más que toda la industria relojera suiza.'
  },
  {
    year: '2016',
    title: 'AirPods',
    description: 'Apple lanza AirPods, popularizando los earbuds inalámbricos.',
    icon: '🎧',
    color: '#ecf0f1',
    details: 'Chip W1 para conexión instantánea. Caso de carga. Criticados inicialmente por "verse ridículos".',
    impact: 'Vendió cientos de millones. Generó industria de $30 mil millones en earbuds inalámbricos.',
    funFact: 'Inicialmente fueron el blanco de memes ("se te van a caer"). Ahora son ubicuos y los memes desaparecieron.'
  }
];

export const internetSocialHistory = [
  {
    year: '1991',
    title: 'Primera Página Web',
    description: 'Tim Berners-Lee publica la primera página web en CERN.',
    icon: '🌐',
    color: '#3498db',
    details: 'La página explicaba qué era la World Wide Web. Solo texto, sin imágenes. Aún está en línea.',
    impact: 'Inició la Web. De ahí a 3 mil millones de sitios web en 30 años.',
    funFact: 'La URL original: http://info.cern.ch/hypertext/WWW/TheProject.html - todavía funciona!'
  },
  {
    year: '1994',
    title: 'Amazon.com',
    description: 'Jeff Bezos funda Amazon como librería online.',
    icon: '📦',
    color: '#ff9900',
    details: 'Inicialmente llamada "Cadabra". Operaba desde el garaje de Bezos. Primer libro vendido: "Fluid Concepts".',
    impact: 'Destruyó el retail tradicional. Vale más de $1 trillón. Cambió cómo compramos todo.',
    funFact: 'Bezos hizo que empleados trabajaran en puertas como escritorios para ahorrar dinero. La "cultura frugal" de Amazon nació ahí.'
  },
  {
    year: '1997',
    title: 'Nace Google',
    description: 'Larry Page y Sergey Brin fundan Google en un garaje.',
    icon: '🔍',
    color: '#4285f4',
    details: 'Originalmente llamado "BackRub". El nombre Google es un juego con "googol" (10^100).',
    impact: 'Dominó las búsquedas (92% cuota mercado). "Google it" es verbo en el diccionario.',
    funFact: 'Su primer servidor estaba hecho de piezas LEGO para sostener discos duros.'
  },
  {
    year: '2003',
    title: 'MySpace',
    description: 'Lanzamiento de MySpace, primera red social masiva.',
    icon: '👥',
    color: '#0066cc',
    details: 'Perfiles personalizables con HTML/CSS. Música, amigos, "Top 8". Adquirida por News Corp por $580M.',
    impact: 'Dominó redes sociales 2005-2008. 100 millones de usuarios. Preparó el terreno para Facebook.',
    funFact: 'Tom Anderson ("Tom de MySpace") era amigo de todos por defecto. Es el rostro más visto de la Internet temprana.'
  },
  {
    year: '2004',
    title: 'Facebook',
    description: 'Mark Zuckerberg lanza Facebook desde su dormitorio en Harvard.',
    icon: '👤',
    color: '#1877f2',
    details: 'Inicialmente "TheFacebook", solo para Harvard. Se expandió a otras universidades, luego al mundo.',
    impact: '3 mil millones de usuarios. Cambió comunicación, política, privacidad. Vale $800 mil millones.',
    funFact: 'Zuckerberg hackeó las bases de datos de Harvard para obtener fotos. Casi lo expulsan.'
  },
  {
    year: '2005',
    title: 'YouTube',
    description: 'Chad Hurley, Steve Chen y Jawed Karim crean YouTube.',
    icon: '▶️',
    color: '#ff0000',
    details: 'Primer video: "Me at the zoo" de Jawed en el zoológico de San Diego. 19 segundos.',
    impact: 'Google lo compró por $1.65 mil millones en 2006. 2 mil millones de usuarios. 500 horas subidas por minuto.',
    funFact: 'YouTube inicialmente iba a ser un sitio de citas por video. Nadie subió videos, así que lo pivotearon.'
  },
  {
    year: '2006',
    title: 'Twitter',
    description: 'Jack Dorsey lanza Twitter, limitando mensajes a 140 caracteres.',
    icon: '🐦',
    color: '#1da1f2',
    details: 'Primer tweet de Jack Dorsey: "just setting up my twttr". Originalmente se llamó "twttr" (sin vocales).',
    impact: 'Cambió periodismo, política y comunicación en tiempo real. Revoluciones organizadas vía Twitter.',
    funFact: 'El límite de 140 caracteres venía de los SMS (160 caracteres - 20 para username). En 2017 lo expandieron a 280.'
  },
  {
    year: '2009',
    title: 'WhatsApp',
    description: 'Ex-empleados de Yahoo crean WhatsApp como alternativa a SMS.',
    icon: '💬',
    color: '#25d366',
    details: 'Fundado por Jan Koum y Brian Acton. "Sin ads, sin juegos, sin trucos".',
    impact: 'Facebook lo compró por $19 mil millones. 2 mil millones de usuarios. Principal app de mensajería mundial.',
    funFact: 'Koum vivió de cupones de comida cuando llegó de Ucrania. Firmó el trato de $19B en la oficina de welfare donde recogía cupones.'
  },
  {
    year: '2010',
    title: 'Instagram',
    description: 'Kevin Systrom y Mike Krieger lanzan Instagram.',
    icon: '📷',
    color: '#e4405f',
    details: 'Inicialmente llamado "Burbn", app de check-in. Pivotearon a fotos + filtros. Primera foto: un perro.',
    impact: 'Facebook lo compró por $1 mil millones en 2012. 2 mil millones de usuarios. Creó cultura de influencers.',
    funFact: 'Instagram fue construido en solo 8 semanas. Llegó a 1 millón de usuarios en 2 meses.'
  },
  {
    year: '2011',
    title: 'Snapchat',
    description: 'Evan Spiegel lanza Snapchat con mensajes que desaparecen.',
    icon: '👻',
    color: '#fffc00',
    details: 'Creado como proyecto de clase en Stanford. Facebook ofreció $3 mil millones, Spiegel rechazó.',
    impact: 'Popularizó contenido efímero y Stories (copiado por Instagram, Facebook, WhatsApp).',
    funFact: 'Zuckerberg intentó comprar Snapchat 3 veces. Cuando fallaron, clonó sus features en Instagram.'
  },
  {
    year: '2016',
    title: 'TikTok (Musical.ly)',
    description: 'ByteDance lanza TikTok, videos cortos con música.',
    icon: '🎵',
    color: '#000000',
    details: 'Fusión de Musical.ly (EE.UU.) y Douyin (China). Algoritmo adictivo de "For You Page".',
    impact: '1 mil millones de usuarios. Cambió consumo de contenido a videos cortos verticales. Amenaza geopolítica.',
    funFact: 'TikTok sabe tanto de ti que varios países lo consideran riesgo de seguridad nacional. India lo prohibió.'
  },
  {
    year: '2022',
    title: 'BeReal',
    description: 'BeReal promueve "redes sociales auténticas" con fotos sin filtros.',
    icon: '📸',
    color: '#000000',
    details: 'Notificación aleatoria diaria. 2 minutos para subir foto frontal + trasera. Sin likes, sin filtros.',
    impact: 'Reacción contra la perfección artificial de Instagram. Viral entre Gen Z.',
    funFact: 'Creado por franceses que querían combatir la ansiedad causada por Instagram. Fue #1 en App Store.'
  }
];

export const databasesHistory = [
  {
    year: '1960',
    title: 'IDS (Integrated Data Store)',
    description: 'Charles Bachman crea uno de los primeros sistemas de bases de datos.',
    icon: '💾',
    color: '#34495e',
    details: 'Modelo de red. Desarrollado en General Electric. Bachman ganó el Turing Award en 1973.',
    impact: 'Estableció conceptos fundamentales: esquemas, independencia de datos, DBMS.',
    funFact: 'Bachman es llamado "el padre de las bases de datos". Su trabajo precedió a las BD relacionales.'
  },
  {
    year: '1970',
    title: 'Modelo Relacional',
    description: 'Edgar F. Codd publica el modelo relacional de bases de datos.',
    icon: '📊',
    color: '#3498db',
    details: 'Paper: "A Relational Model of Data for Large Shared Data Banks". Introducción de tablas, filas y columnas.',
    impact: 'Revolucionó las bases de datos. Base de SQL y casi todas las BDs modernas.',
    funFact: 'IBM, empleador de Codd, ignoró su trabajo inicialmente. Oracle aprovechó y dominó el mercado.'
  },
  {
    year: '1974',
    title: 'SQL (Structured Query Language)',
    description: 'IBM desarrolla SQL para trabajar con bases de datos relacionales.',
    icon: '🗃️',
    color: '#00758f',
    details: 'Originalmente llamado SEQUEL. Implementado en System R de IBM.',
    impact: 'Estándar universal para consultas de BD. Usado en casi todas las aplicaciones empresariales.',
    funFact: 'SQL se pronuncia "sequel" o "S-Q-L". La pronunciación correcta es motivo de debates eternos entre desarrolladores.'
  },
  {
    year: '1977',
    title: 'Oracle Database',
    description: 'Larry Ellison funda Oracle, primera BD relacional comercial.',
    icon: '🏛️',
    color: '#f80000',
    details: 'Basado en el paper de Codd. Oracle Database v1 nunca se lanzó (empezaron en v2 para parecer maduros).',
    impact: 'Oracle dominó BDs empresariales por décadas. Vale más de $200 mil millones.',
    funFact: 'El nombre "Oracle" viene de un proyecto de la CIA llamado "Oracle" en el que Ellison trabajó.'
  },
  {
    year: '1995',
    title: 'MySQL',
    description: 'Michael Widenius crea MySQL, base de datos open source.',
    icon: '🐬',
    color: '#00758f',
    details: 'Nombrado por la hija de Widenius, "My". Mascota: delfín llamado Sakila.',
    impact: 'Base del stack LAMP (Linux, Apache, MySQL, PHP). Usado por Facebook, Twitter, YouTube inicialmente.',
    funFact: 'Sun compró MySQL por $1 mil millones. Oracle compró Sun. Widenius odia Oracle y creó MariaDB como fork.'
  },
  {
    year: '1996',
    title: 'PostgreSQL',
    description: 'Lanzamiento de PostgreSQL, BD open source avanzada.',
    icon: '🐘',
    color: '#336791',
    details: 'Sucesor de POSTGRES de Berkeley. Conocido por cumplir estándares y features avanzadas.',
    impact: 'Alternativa robusta a MySQL. Usado por Apple, Instagram, Reddit, Spotify.',
    funFact: 'Se pronuncia "Post-gres-Q-L" pero muchos dicen "Postgres" para simplificar.'
  },
  {
    year: '2007',
    title: 'MongoDB',
    description: 'Lanzamiento de MongoDB, popularizando bases de datos NoSQL.',
    icon: '🍃',
    color: '#4db33d',
    details: 'Documentos JSON en lugar de tablas. "Mongo" de "humongous" (enorme). Schema-less.',
    impact: 'Inició el movimiento NoSQL. Popular en startups y apps web modernas.',
    funFact: 'MongoDB fue creado porque los fundadores estaban frustrados con las limitaciones de SQL en su startup anterior.'
  },
  {
    year: '2009',
    title: 'Redis',
    description: 'Salvatore Sanfilippo crea Redis, BD en memoria ultra-rápida.',
    icon: '⚡',
    color: '#dc382d',
    details: 'REmote DIctionary Server. Key-value store. Escrito en C. Todo en RAM.',
    impact: 'Usado para caching, sesiones, leaderboards. GitHub, Twitter, Snapchat lo usan.',
    funFact: 'Sanfilippo lo creó para su startup de analytics en tiempo real. La startup fracasó pero Redis triunfó.'
  },
  {
    year: '2012',
    title: 'Blockchain/Bitcoin DB',
    description: 'Bitcoin populariza blockchain como base de datos distribuida inmutable.',
    icon: '⛓️',
    color: '#f7931a',
    details: 'BD distribuida donde cada bloque referencia al anterior. Inmutable, transparente, descentralizada.',
    impact: 'Inspiró miles de criptomonedas. Conceptos de BD distribuidas y consenso aplicados más allá de crypto.',
    funFact: 'La blockchain de Bitcoin es de ~500GB y sigue creciendo. Los nodos completos almacenan TODO desde 2009.'
  },
  {
    year: '2020',
    title: 'Bases de Datos en la Nube',
    description: 'AWS, Azure y Google Cloud dominan con BDs serverless y managed.',
    icon: '☁️',
    color: '#ff9900',
    details: 'DynamoDB, CosmosDB, Firestore. Auto-escalables. Pay-per-use. Sin servidores que administrar.',
    impact: 'Democratizaron BDs enterprise. Startups pueden escalar sin DBAs.',
    funFact: 'Amazon DynamoDB maneja trillones de requests al día durante Prime Day. Escala automáticamente.'
  }
];
