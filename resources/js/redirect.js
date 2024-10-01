document.addEventListener('DOMContentLoaded', function() {
  const redirectUrlElement = document.getElementById('redirectUrl');
  const counterElement = document.getElementById('counter');
  let counter = 4;
  let isRedirect = true;
  const url = window.location.href;
  redirectUrlElement.innerText = url.slice(url.indexOf('?')+1);

  
  
  redirectUrlElement.addEventListener('click', () => {
    localStorage.setItem("travelExpertsIsRedirect", isRedirect);

    window.close();
  });

  let interval = setInterval(() => {
    if(counter >= 0) {
      counterElement.innerText = counter;
      counter--;
    } else {
      clearInterval(interval);
      localStorage.setItem("travelExpertsIsRedirect", isRedirect);
      window.close();
    }
  }, 1000);

  const formElement = document.querySelector('form');
  
  formElement.addEventListener('submit', (e) => {
      e.preventDefault(); 
      clearInterval(interval);
      isRedirect = false;
      localStorage.setItem("travelExpertsIsRedirect", isRedirect);
      window.close();
    });

  


});
