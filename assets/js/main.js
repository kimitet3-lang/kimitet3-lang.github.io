const status = document.querySelector('#copy-status');

document.querySelectorAll('.btn-copy').forEach((button) => {
  button.addEventListener('click', async () => {
    const prompt = button.dataset.prompt || '';
    try {
      await navigator.clipboard.writeText(prompt);
      status.textContent = 'Prompt copied to your clipboard.';
    } catch {
      status.textContent = 'Copy was blocked by the browser. Open PROMPTS.md to copy it manually.';
    }
  });
});
