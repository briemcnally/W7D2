export const fetchTodos = () => {
  //returns a promise
  return $.ajax ({
    url: '/api/todos',
    method: 'GET',
    dataType: 'json',
  });

};
window.fetchTodos = fetchTodos;
//
// export default fetchTodos;
