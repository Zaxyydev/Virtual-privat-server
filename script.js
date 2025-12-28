let paket = "";

function buka(p) {
  paket = p;
  document.getElementById("modal").style.display = "flex";
}

function tutup() {
  document.getElementById("modal").style.display = "none";
}

function kirimWA() {
  const os = osVal = document.getElementById("os").value;
  const region = document.getElementById("region").value;
  const sub = document.getElementById("subdomain").value;

  if (!os || !region || !sub) {
    alert("OS, REGION, dan SUBDOMAIN wajib diisi!");
    return;
  }

  const username = "Kazumiiv1"; // GANTI

  const text = `
ORDER VPS
=========
PAKET : ${paket}
FREE REQ : ${req.value || "-"}
OS : ${os}
REGION : ${region}
SUBDOMAIN : ${sub}
PROTECT : ${protect.value}
`;

  window.open(
    `https://t.me/${username}?text=${encodeURIComponent(text)}`
  );
}