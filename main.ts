import './scss/main.scss';
import { createHtml } from './src/ts/createHtml';
import { devModeWarning } from './src/ts/devMode';
import { toggleLightMode } from './src/ts/toggleDarkmode';

function init() {
  devModeWarning();
  toggleLightMode();
  createHtml();
}

init();
