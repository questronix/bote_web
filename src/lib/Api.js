class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  static get(route, headers) {
    return this.xhr(route, headers, null, 'GET');
  }

  static put(route, headers, params) {
    return this.xhr(route, headers, params, 'PUT')
  }

  static post(route, headers, params) {
    return this.xhr(route, headers, params, 'POST')
  }

  static delete(route, headers, params) {
    return this.xhr(route, headers, params, 'DELETE')
  }

  static xhr(route, headers, params, verb) {
    const url = `${window.location.origin}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.credentials = 'same-origin';
    options.headers = Object.assign({}, this.headers(), headers);
    console.log('AJAX CALL TO WEB-SERVER', {
      url,  
      options
    });
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (!resp.error) {
        return json;
      }
      return json.then(err => {return err});
    });
  }
}
export default Api