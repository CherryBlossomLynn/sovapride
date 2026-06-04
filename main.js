/* main.js — wires EVENT config to the page and renders the QR code */

(function () {
  "use strict";

  /* ── Helpers ─────────────────────────────────────────────── */
  function el(id) { return document.getElementById(id); }
  function setText(id, html) { const e = el(id); if (e) e.innerHTML = html; }

  /* ── Populate basic info ─────────────────────────────────── */
  document.title = EVENT.title + " — Event Day";
  setText("eventTitle",    EVENT.title);
  setText("eventDate",     EVENT.date);
  setText("eventLocation", "📍 " + EVENT.location);
  setText("aboutText",     EVENT.about);
  setText("locationDetails", EVENT.locationDetails);
  setText("footerText",    EVENT.footerText);

  const mapsLink = el("mapsLink");
  if (mapsLink && EVENT.mapsUrl) mapsLink.href = EVENT.mapsUrl;

  /* ── Schedule ────────────────────────────────────────────── */
  const list = el("scheduleList");
  if (list) {
    list.innerHTML = EVENT.schedule.map(function (item) {
      return `<li>
        <span class="time">${item.time}</span>
        <div>
          <div class="item-title">${item.title}</div>
          ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ""}
        </div>
      </li>`;
    }).join("");
  }

  /* ── Speakers ────────────────────────────────────────────── */
  const grid = el("speakerGrid");
  if (grid) {
    grid.innerHTML = EVENT.speakers.map(function (s) {
      const avatarInner = s.image
        ? `<img src="${s.image}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover;">`
        : `<span>${s.emoji || "👤"}</span>`;
      return `<div class="speaker-card">
        <div class="speaker-avatar">${avatarInner}</div>
        <h3>${s.name}</h3>
        <p>${s.role}</p>
      </div>`;
    }).join("");
  }

  /* ── Contact links ───────────────────────────────────────── */
  const contactGrid = el("contactGrid");
  if (contactGrid) {
    contactGrid.innerHTML = EVENT.contact.map(function (c) {
      return `<a class="contact-item" href="${c.href}" target="_blank" rel="noopener">
        <span class="icon">${c.icon}</span>
        <span>${c.label}</span>
      </a>`;
    }).join("");
  }

  /* ── QR Code ─────────────────────────────────────────────── */
  const qrTarget = EVENT.qrUrl || window.location.href;
  const urlLabel = el("qrUrlLabel");
  if (urlLabel) urlLabel.textContent = qrTarget;

  if (typeof QRCode !== "undefined") {
    new QRCode(el("qrcode"), {
      text:          qrTarget,
      width:         200,
      height:        200,
      colorDark:     "#000000",
      colorLight:    "#ffffff",
      correctLevel:  QRCode.CorrectLevel.H,
    });
  } else {
    // Fallback: show a note if CDN failed (e.g. no internet)
    el("qrcode").innerHTML =
      `<p style="padding:20px;color:#555;font-size:.85rem;">
        QR code requires an internet connection on first load.<br>
        Or save <a href="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js">qrcode.min.js</a>
        locally and update the &lt;script&gt; src in index.html.
      </p>`;
  }

  /* ── Download QR as PNG ──────────────────────────────────── */
  window.downloadQR = function () {
    const canvas = document.querySelector("#qrcode canvas");
    if (!canvas) { alert("QR code not yet generated."); return; }
    const link = document.createElement("a");
    link.download = "event-qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

})();
