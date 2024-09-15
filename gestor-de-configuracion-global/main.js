// main.js
import Config from './config.js';

const appConfig = new Config();

appConfig.setSetting('theme', 'light');
appConfig.setSetting('language', 'es');

document.getElementById('theme').textContent = `Tema: ${appConfig.getSetting('theme')}`;
document.getElementById('language').textContent = `Idioma: ${appConfig.getSetting('language')}`;
