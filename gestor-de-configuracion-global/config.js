// config.js
class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
      
      this.settings = {
        theme: 'dark',
        language: 'en',
      };
  
      Config.instance = this;
    }
  
    getSetting(key) {
      return this.settings[key];
    }
  
    setSetting(key, value) {
      this.settings[key] = value;
    }
  }
  
  export default Config;
  