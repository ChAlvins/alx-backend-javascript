/* eslint-disable */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "This is the API response" };
      resolve(data);
    }, 2000);
  });
}

export default getResponseFromAPI;
