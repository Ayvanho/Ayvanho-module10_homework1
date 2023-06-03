<button id="iconBtn" class="btn"><i id="icon" class="fas fa-home"></i></button>

<!-- Подключение библиотеки Font Awesome для иконок -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

<script>
  const iconBtn = document.getElementById('iconBtn');
  const icon = document.getElementById('icon');

  iconBtn.addEventListener('click', () => {
    if (icon.classList.contains('fa-home')) {
      icon.classList.remove('fa-home');
      icon.classList.add('fa-rocket');
    } else {
      icon.classList.remove('fa-rocket');
      icon.classList.add('fa-home');
    }
  });
</script>
