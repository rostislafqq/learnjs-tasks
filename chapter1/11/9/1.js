// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

const loadJson = async (url) => {
  const res = await fetch(url);
  if (res.status == 200) {
    let data = await res.json(); // (3)
    return data;
  }

  throw new Error(res.status);
};
