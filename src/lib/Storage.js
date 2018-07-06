class Storage {

  static getKeys(){
    let keys = [];
    for(let i = 0; i < window.localStorage.length; i++){
      keys.push(window.localStorage.key(i));
    }
    return keys;
  }

  static getLength(){
    return window.localStorage.length;
  }
  
  static getKey(key){
    return JSON.parse(window.localStorage.getItem(key));
  }

  static setKey(key, obj){
    if(typeof obj == 'string') obj = JSON.parse(JSON.stringify(obj));
    else obj = JSON.stringify(obj)
    window.localStorage.setItem(key, obj);
  }

  static deleteKey(key){
    return window.localStorage.removeItem(key);
  }

  static clear(){
    window.localStorage.clear();
  }
}

export default Storage