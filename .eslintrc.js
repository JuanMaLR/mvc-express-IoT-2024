module.exports = {
    root: true, // Indica que este es el archivo de configuración raíz para ESLint.
    env: {
      node: true, // Establece que el entorno de ejecución es Node.js. Esto habilita las globales de Node.js.
    },
    parserOptions: {
      ecmaVersion: 'latest', // Configura la versión de ECMAScript que se utilizará. Aquí se establece en la versión más reciente.
    },
    extends: ['eslint:recommended', 'prettier'], // Extiende las reglas recomendadas de ESLint y las reglas de Prettier para formateo.
    rules: {}, // Aquí puedes personalizar reglas adicionales, actualmente está vacío.
    overrides: [] // Modifica las reglas recomendadas de eslint
};