let paketDipilih = "";

function buka(paket) {
  paketDipilih = paket;
  document.getElementById("modal").style.display = "flex";
}

function tutup() {
  document.getElementById("modal").style.display = "none";
}

function kirimTG() {
  const req = document.getElementById("req").value || "-";
  const os = document.getElementById("os").value || "-";
  const region = document.getElementById("region").value || "-";
  const sub = document.getElementById("subdomain").value || "-";
  const protect = document.getElementById("protect").value;

  const pesan = `📦 ORDER VPS – Kazumii Cloud

📝 FREE REQ (User)
${req}

⭐ FREE REQ TERBAIK (Seller)
- Tuning performa
- Security basic
- Optimasi jaringan

🖥 Paket : ${paketDipilih}
🧩 OS : ${os}
🌍 Region : ${region}
🌐 Subdomain : ${sub}
🛡 Protect : ${protect}
`;

  const usernameTG = "USERNAME_TELEGRAM_LU"; // GANTI
  window.open(`https://t.me/${usernameTG}?text=${encodeURIComponent(pesan)}`);
}