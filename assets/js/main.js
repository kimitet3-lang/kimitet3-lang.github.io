document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Replace this link with your actual Affiliate URL!');
    }
  });
});
