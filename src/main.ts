import { Dashboard } from './Pages/Dashboard'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

Dashboard().then(template => {
  app.innerHTML += template;
});