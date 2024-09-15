// config.js
class Config {
    constructor() {
      // Comprueba si una instancia ya existe
      if (Config.instance) {
        return Config.instance;
      }
      
      // Si no existe, define las configuraciones iniciales
      this.settings = {
        theme: 'dark',
        language: 'en',
      };
  
      // Guarda la instancia en la propiedad estática
      Config.instance = this;
    }
  
    // Método para obtener una configuración
    getSetting(key) {
      return this.settings[key];
    }
  
    // Método para actualizar una configuración
    setSetting(key, value) {
      this.settings[key] = value;
    }
  }
  
  // Exporta la clase
  export default Config;
  