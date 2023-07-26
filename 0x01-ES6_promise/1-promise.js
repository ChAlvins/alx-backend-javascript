export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      const errorMessage = 'The fake API is not working currently';
      reject(new Error(errorMessage));
    }
  });
}
