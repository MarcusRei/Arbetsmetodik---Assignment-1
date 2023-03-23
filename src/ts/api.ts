// @ts-ignore
let apiEndpoint: string = import.meta.env.VITE_APP_SR_API_ENDPOINT;

export async function getPodcasts() {
  return await fetch(apiEndpoint)
    .then(data => data.json())
    .then(json => json)
    .catch(error => {
      console.error('nått blev fel:', error);
      return null;
    });
}

export default getPodcasts;
