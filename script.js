document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm_password');
    const errorMessage = document.createElement('span');
    errorMessage.textContent = '*Passwords do not match';
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
  
    function checkPasswordsMatch() {
      const passwordValue = passwordInput.value;
      const confirmValue = confirmInput.value;
  
      if (passwordValue !== confirmValue) {
        passwordInput.style.borderColor = 'red';
        confirmInput.style.borderColor = 'red';
        errorMessage.style.display = 'block';
      } else {
        passwordInput.style.borderColor = 'rgba(200, 200, 200, 0.5)';
        confirmInput.style.borderColor = 'rgba(200, 200, 200, 0.5)';
        errorMessage.style.display = 'none';
      }
    }
  
    passwordInput.addEventListener('input', checkPasswordsMatch);
    confirmInput.addEventListener('input', checkPasswordsMatch);
  
    const formRowDivs = document.querySelectorAll('.form-row .entry');
    formRowDivs.forEach(function (div) {
      div.appendChild(errorMessage.cloneNode(true));
    });
  });
  
