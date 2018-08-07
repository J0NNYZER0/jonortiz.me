export const HOST = (process.env.NODE_ENV === 'production') ? 'https://mind-ctrl.herokuapp.com' : 'http://0.0.0.0:3000';
export const API = (process.env.NODE_ENV === 'production') ? 'https://droog.rocks' : 'http://0.0.0.0:8000';
export const HEADERS = {
  JSON: {
    GET: () => ({
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        //'x-droog-auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJtaW5kLWN0cmwiLCJzY29wZSI6IlsgJ3B1YmxpYycgXSJ9.1EnFANh_Ho9XP-HHNtJJjZHa83wcpskceTd0fIyNEmE',
        //'x-droog-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjkyLCJ1c2VybmFtZSI6Impvbi5vcnRpekBtZS5jb20iLCJpc19zdWJzY3JpYmVkIjowLCJzY29wZSI6WyJwdWJsaWMiXX0.1CFxZjwM0H1sschZFZP6zIzu-3-s9nsvlDQlRjkxG6o',
        'Origin': HOST
      },
      credentials: 'include',
    }),
    POST: (data) => ({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'x-droog-auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJtaW5kLWN0cmwiLCJzY29wZSI6WyJwdWJsaWMiXX0.oTq25rO6vt9DQ_jdBcMEMP1vHJ4DQdwV7VkQI2uuwsM',
        //'x-droog-auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJtaW5kLWN0cmwiLCJzY29wZSI6IlsgJ3B1YmxpYycgXSJ9.1EnFANh_Ho9XP-HHNtJJjZHa83wcpskceTd0fIyNEmE',
        'Origin': HOST
      },
      body: JSON.stringify(data)
    }),
    DELETE: {
      method: 'DELETE'
    },
    PUT: {}
  },
  URL_ENCODED: {
    GET: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'x-www-form-urlencoded',
      'Origin': HOST
    }
  }
};
