import js from '@eslint/js'; // Contiene configuraciones basicas de ESLint
import prettierPlugin from 'eslint-plugin-prettier'; // Integra prettier como una regla de ESLint
import prettierConfig from 'eslint-config-prettier'; // Apaga las reglas de ESLint que podrian entrar en conflicto con Prettier
import globals from 'globals'; // Provee variables globales para diferentes ambientes

export default [
  // Reglas recomendadas de ESLint (antes extends: ['eslint:recommended'])
  js.configs.recommended,
  // Configuracion general de ESLint
  {
    files: ['**/*.js', '**/*.jsx'], // Archivos que seran revisados por ESLint
    languageOptions: {
      ecmaVersion: 'latest', // Configura la versión de ECMAScript que se utilizará. Aquí se establece en la versión más reciente.
      sourceType: 'module', // Especifica que se usaran modulos de ES
      globals: {
        ...globals.node, // Incluye variables globales de Node.js
      },
    },
    plugins: {
      prettier: prettierPlugin, // Incluye el plugin de Prettier como parte de ESLiint
    },
    rules: {
      // Aquí puedes personalizar reglas adicionales
      ...prettierConfig.rules,
      'prettier/prettier': 'error', // Reporta errores de Prettier como errores de ESLint 
    },
  }
];