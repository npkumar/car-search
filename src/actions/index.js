const URL = 'http://localhost:3004';

export function getCars(keyword) {
  console.log(keyword)

  const request = fetch(`${URL}/carsIndex?q=${keyword}`, {
    method: 'GET'
  })
  .then(res => res.json());
  
  return {
    type: 'SEARCH_CARS',
    payload: request
  }
}