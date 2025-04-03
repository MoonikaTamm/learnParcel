import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.querySelector('#app').innerHTML = `
  <div id="cont">
    <div class="container mt-3">
      <button id="but" class="btn btn-danger" type="button" onclick="showAlert()">Don't press me!!</button>
      <div id="alertbox" class="alert alert-info" role="alert"></div>
    </div>
  </div>
`;

window.showAlert=showAlert;

function showAlert() {
    document.getElementById('alertbox').innerHTML = 'Button disabled in 3s.';
    document.getElementById('alertbox').style.display = 'block';
    setTimeout(function() {
      document.getElementById('alertbox').innerHTML = 'Button disabled';
      document.getElementById('but').disabled = true;
    }, 3000);
  }
  