// main.js
import Config from './config.js';

// Crea una instancia de Config
const appConfig = new Config();

// Actualiza la configuración
appConfig.setSetting('theme', 'light');
appConfig.setSetting('language', 'es');

// Muestra la configuración en la pantalla
document.getElementById('theme').textContent = `Tema: ${appConfig.getSetting('theme')}`;
document.getElementById('language').textContent = `Idioma: ${appConfig.getSetting('language')}`;
