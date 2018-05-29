(function(window) {

  if('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('../sw.js');
      console.log('sw register');
    } catch (error) {
      console.log('sw registrer fail');
    }
  }

})(window);
