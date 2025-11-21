# History Channel Tech

Una aplicación web interactiva creada con React que muestra la historia de la programación, los lenguajes de programación y la inteligencia artificial a través de líneas de tiempo visuales.

## Características

- **Historia del Código**: Desde los primeros algoritmos babilonios hasta la era moderna del código abierto
- **Lenguajes de Programación**: Evolución de los lenguajes desde FORTRAN hasta lenguajes modernos
- **Historia de la IA**: Desde el Test de Turing hasta los modelos multimodales actuales
- **Quiz Interactivo**: Pon a prueba tus conocimientos con preguntas sobre cada tema
- **Sistema de Puntuaciones**: Guarda tus mejores puntajes usando localStorage
- **Tabla de Líderes**: Compite por las mejores puntuaciones en cada categoría

## Tecnologías

- React 18
- Vite
- CSS3 con animaciones

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Estructura del Proyecto

```
HistoryChannel/
├── src/
│   ├── components/
│   │   ├── Timeline.jsx
│   │   ├── Timeline.css
│   │   ├── TimelineItem.jsx
│   │   ├── TimelineItem.css
│   │   ├── Quiz.jsx
│   │   ├── Quiz.css
│   │   ├── ScoreBoard.jsx
│   │   └── ScoreBoard.css
│   ├── data/
│   │   ├── historyData.js
│   │   └── quizData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Uso

La aplicación presenta cuatro pestañas principales:

1. **Historia del Código**: Eventos clave en el desarrollo de la programación
2. **Lenguajes de Programación**: Cronología de los principales lenguajes
3. **Inteligencia Artificial**: Hitos importantes en el desarrollo de la IA
4. **Quiz**: Juego interactivo para verificar tu comprensión

### Cómo jugar el Quiz

1. Selecciona un tema (Código, Lenguajes o IA)
2. Responde 5 preguntas aleatorias sobre ese tema
3. Recibe retroalimentación inmediata con explicaciones
4. Guarda tu puntuación con tu nombre
5. Compite en la tabla de mejores puntuaciones

### Sistema de Puntuaciones

- Las puntuaciones se guardan automáticamente en localStorage
- Se mantienen las mejores 10 puntuaciones
- Puedes filtrar puntuaciones por tema
- Las puntuaciones incluyen: nombre, puntaje, porcentaje y fecha

## Licencia

MIT
