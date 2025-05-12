document.querySelectorAll('.branch').forEach(branch => {
    branch.addEventListener('click', () => {
      const url = branch.getAttribute('data-url');
      window.location.href = url;
    });
  });
  