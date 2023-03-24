export function log(message) {
  // @ts-ignore
  if (import.meta.env.VITE_APP_DEV === true) {
    console.log(message);
  }
}
