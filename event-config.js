/* ─────────────────────────────────────────────────────────────
   event-config.js  ·  EDIT THIS FILE TO CUSTOMISE YOUR EVENT
   ───────────────────────────────────────────────────────────── */

const EVENT = {

  /* ── Basic Info ─────────────────────────────────────── */
  title:    "Your Event Name Here",
  date:     "Saturday, June 3 2026",
  location: "Venue Name · City, State",

  about: `Welcome! This is a one-day event bringing together amazing people
for a day of talks, networking, and fun. Edit this description in
<strong>event-config.js</strong> to tell your guests what to expect.`,

  /* ── Schedule ────────────────────────────────────────── */
  // time:  displayed label (e.g. "9:00 AM")
  // title: name of the session
  // desc:  optional short description
  schedule: [
    { time: "8:30 AM",  title: "Doors Open & Registration",   desc: "Grab your badge and coffee" },
    { time: "9:00 AM",  title: "Opening Keynote",             desc: "Welcome address from the organiser" },
    { time: "10:00 AM", title: "Session 1",                   desc: "Topic of first session" },
    { time: "11:00 AM", title: "Session 2",                   desc: "Topic of second session" },
    { time: "12:00 PM", title: "Lunch Break",                 desc: "Catering provided — see venue map" },
    { time: "1:00 PM",  title: "Workshop",                    desc: "Hands-on activity" },
    { time: "2:30 PM",  title: "Panel Discussion",            desc: "Q&A with speakers" },
    { time: "4:00 PM",  title: "Closing Remarks",             desc: "" },
    { time: "4:30 PM",  title: "Networking & Drinks",         desc: "Stick around and connect!" },
  ],

  /* ── Speakers / Hosts ────────────────────────────────── */
  // emoji: shown as avatar if no image is provided
  // image: optional path to a photo, e.g. "images/alice.jpg"
  speakers: [
    { name: "Alice Smith",   role: "Keynote Speaker",  emoji: "🎤", image: "" },
    { name: "Bob Johnson",   role: "Workshop Host",    emoji: "🛠️", image: "" },
    { name: "Carol White",   role: "Panel Moderator",  emoji: "🎙️", image: "" },
    { name: "David Lee",     role: "Organiser",        emoji: "📋", image: "" },
  ],

  /* ── Location ────────────────────────────────────────── */
  locationDetails: "123 Main Street, Suite 400, City, State 00000",
  // Paste your Google Maps share link here:
  mapsUrl: "https://maps.google.com/?q=Your+Venue+Address",

  /* ── QR Code URL ─────────────────────────────────────── */
  // This is the URL the QR code will encode.
  // Options:
  //   • Your GitHub Pages URL after publishing, e.g. "https://yourname.github.io/event"
  //   • Any other public link you want guests to visit
  //   • Leave blank to auto-use the current page URL (works when hosted)
  qrUrl: "",

  /* ── Contact & Links ─────────────────────────────────── */
  contact: [
    { icon: "📧", label: "Email Us",       href: "mailto:hello@example.com" },
    { icon: "🌐", label: "Event Website",  href: "https://example.com" },
    { icon: "📸", label: "Instagram",      href: "https://instagram.com/yourhandle" },
    { icon: "🐦", label: "Twitter / X",   href: "https://twitter.com/yourhandle" },
  ],

  /* ── Footer ──────────────────────────────────────────── */
  footerText: "© 2026 Your Event Name · All rights reserved",
};
