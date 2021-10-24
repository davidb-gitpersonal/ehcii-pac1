import { substituirLorems } from './lorem';
import { desplegar } from './acordio';

window.addEventListener("load", () => {
   substituirLorems();
});

window.desplegar = desplegar;


