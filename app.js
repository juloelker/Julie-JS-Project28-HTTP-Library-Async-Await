const http = new EasyHTTP();

// Get Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'Julie',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

/* Create User, post
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

  */

/*Put a change to a user 
http
  .put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
  */

/*Delete a user */
http
  .delete('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
