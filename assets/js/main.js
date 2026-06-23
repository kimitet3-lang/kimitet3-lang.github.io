// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Copy Short Prompt to Clipboard
document.querySelectorAll('.btn-copy').forEach(button => {
  button.addEventListener('click', async function() {
    const promptText = this.getAttribute('data-prompt');
    try {
      await navigator.clipboard.writeText(promptText);
      const originalText = this.innerText;
      this.innerText = '✅ Copied!';
      this.style.background = '#10b981'; // Green
      setTimeout(() => {
        this.innerText = originalText;
        this.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });
});
