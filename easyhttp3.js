/**
 * EasyHTTP Library, BEFORE converting to async/await
 * Library for making HTTP requests, uses classes and promises, rewritten below line 70
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/
/*
class EasyHTTP {
  // Make an HTTP GET Request, promise
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request, promise
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request, promise
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request, promise
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(() => resolve('Resource Deleted...'))
        .catch(err => reject(err));
    });
  }
}*/

/**
 * EasyHTTP Library, AFTER
 * Library for making HTTP requests, uses async/await
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request
  // async get(url) {
  //   const response = await fetch(url);

  //   const resData = await response.json();
  //   return resData;
  // }

  /* Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    return res;
  }
}

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    return res;
  }
}*/

  // Make an HTTP DELETE Request
  async delete(url, data) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await 'Resource deleted.';
    return res;
  }
}
