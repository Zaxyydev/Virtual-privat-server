let paketDipilih = "";

function buka(paket) {
  paketDipilih = paket;
  document.getElementById("modal").style.display = "flex";
}

function tutup() {
  document.getElementById("modal").style.display = "none";
}

function kirimTG() {
  const reqUser = document.getElementById("req").value || "-";
  const os = document.getElementById("os").value || "-";
  const region = document.getElementById("region").value || "-";
  const sub = document.getElementById("subdomain").value || "-";
  const protect = document.getElementById("protect").value;

  let detail = "";

  if (paketDipilih === "R4 C2")
    detail = "RAM: 4GB\nCPU: 2 Core\nStorage: 80GB SSD NVMe";
  if (paketDipilih === "R8 C2")
    detail = "RAM: 8GB\nCPU: 2 Core\nStorage: 120GB SSD NVMe";
  if (paketDipilih === "R8 C4")
    detail = "RAM: 8GB\nCPU: 4 Core\nStorage: 160GB SSD NVMe";
  if (paketDipilih === "R16 C2")
    detail = "RAM: 16GB\nCPU: 2 Core\nStorage: 200GB SSD NVMe";
  if (paketDipilih === "R16 C4")
    detail = "RAM: 16GB\nCPU: 4 Core\nStorage: 300GB SSD NVMe";

  const freeReqSeller = `- Tuning performa
- Security basic
- Optimasi jaringan`;

  const pesan = `📦 FORMAT ORDER VPS – Kazumii Cloud

📝 FREE REQ (User)
${reqUser}

⭐ FREE REQ TERBAIK (Seller)
${freeReqSeller}

🖥 Paket : ${paketDipilih}
${detail}

🧩 OS : ${os}
🌍 Region : ${region}
🌐 Subdomain : ${sub}
🛡 Protect : ${protect}

Silakan Langsung Mintak Payment Admin Agar Pesanan Bisa Di Proses 🙏`;

  const usernameTG = "Kazumiiv1"; // TANPA @
  window.open(
    `https://t.me/${usernameTG}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}