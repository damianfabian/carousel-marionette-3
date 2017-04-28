import 'jquery';
import 'bootstrap-loader'
import './styles/application.css';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
