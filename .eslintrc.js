module.exports = {
    root: true, // Indica que este es el archivo de configuración raíz para ESLint.
    env: {
      node: true, // Establece que el entorno de ejecución es Node.js. Esto habilita las globales de Node.js.
    },
    parserOptions: {
      ecmaVersion: 'latest', // Configura la versión de ECMAScript que se utilizará. Aquí se establece en la versión más reciente.
    },
    extends: ['eslint:recommended', 'prettier'], // Extiende las reglas recomendadas de ESLint y las reglas de Prettier para formateo.
    plugins: ['prettier'], // Incluye el plugin de Prettier como parte de ESLiint
    rules: {
        'prettier/prettier': 'error', // Reporta errores de Prettier como errores de ESLint 
    }, // Aquí puedes personalizar reglas adicionales
    overrides: [] // Modifica las reglas recomendadas de ESLint
};