export function log(message) {
  // @ts-ignore
  if (import.meta.env.VITE_APP_DEV === 'true') {
    console.log(message);
  }
}

export function devModeWarning() {
  // @ts-ignore
  if (import.meta.env.VITE_APP_DEV === 'true') {
    console.warn('DEV mode is on!');
  }
}
