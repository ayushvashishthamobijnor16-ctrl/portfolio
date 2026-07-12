const entries = document.querySelectorAll('.entry');
  const io = new IntersectionObserver((entries_) => {
    entries_.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.2 });
  entries.forEach(el => io.observe(el));
