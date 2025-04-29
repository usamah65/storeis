function toggleDarkMode() {
  let body = document.body;
  let header = document.querySelector('header');
  let navLinks = document.querySelectorAll('nav a');
  let tombol = document.getElementById('theme-toggle');

  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  navLinks.forEach(function(link) {
    link.classList.toggle('dark-mode');
  });
  tombol.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    tombol.textContent = "🌞";
  } else {
    tombol.textContent = "🌙";
  }
}

function showSection(id) {
  let semuaSection = document.querySelectorAll('.section');
  semuaSection.forEach(function(bagian) {
    bagian.classList.remove('active');
  });

  let bagianYangDipilih = document.getElementById(id);
  bagianYangDipilih.classList.add('active');

  let semuaLink = document.querySelectorAll('nav a');
  semuaLink.forEach(function(link) {
    link.classList.remove('active-link');
  });

  event.target.classList.add('active-link');
}

// accordions
document.addEventListener('DOMContentLoaded', function() {
  let semuaTombolAccordion = document.querySelectorAll('.accordion-btn');

  semuaTombolAccordion.forEach(function(tombol) {
    tombol.addEventListener('click', function() {
      let item = tombol.parentElement;
      item.classList.toggle('active');
    });
  });
});

// validasi kontak pake popup
function submitForm(event) {
  event.preventDefault();

  let nama = document.getElementById('nama').value.trim();
  let email = document.getElementById('email').value.trim();
  let pesan = document.getElementById('pesan').value.trim();
  let msg = document.getElementById('msg');

  if (nama === "" || email === "" || pesan === "") {
    alert("Harap isi semua form sebelum mengirim!");
    return;
  }

  alert("Pesan kamu berhasil dikirim!");
  msg.textContent = "Pesan berhasil dikirim!";
  msg.style.color = "green";

  // reset form
  document.getElementById('nama').value = "";
  document.getElementById('email').value = "";
  document.getElementById('pesan').value = "";
}
