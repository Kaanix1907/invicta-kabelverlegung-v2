// ============================================================
// INVICTA KABELVERLEGUNG — Business Data
// Alle inhaltlichen Daten zentral hier pflegen
// ============================================================

export const COMPANY = {
  name: "INVICTA Kabelverlegung",
  tagline: "Professionelle Kabelverlegung und Industrieinstallationen",
  city: "Duisburg",
  region: "Nordrhein-Westfalen",
  founded: 2024,
  owner: "Tugkan",
  email: "info@invicta-kabelverlegung.de",
  phone: "+49 1577 1472898",
  phoneHref: "tel:+4915771472898",
  address: "Duisburg, Nordrhein-Westfalen",
  norm: "DIN VDE 0276",
  cableType: "NYY-J",
};

export const HERO = {
  location: "Duisburg · NRW · Deutschlandweit",
  headline: ["Wir verlegen Kabel.", "Aber wir bauen", "mehr als das."],
  subtext:
    "Hinter INVICTA steckt ein Team aus Duisburg, das seinen Beruf ernst nimmt — präzise Arbeit, klare Kommunikation, pünktliche Lieferung.",
  ctaPrimary: "Sprechen Sie uns an",
  ctaSecondary: "Unsere Leistungen",
  stats: [
    { value: "2024", label: "Gegründet in Duisburg" },
    { value: "DIN VDE", label: "Normkonform" },
    { value: "NRW", label: "& bundesweit tätig" },
  ],
  cableSpecs: [
    { key: "Nennspannung", val: "0,6 / 1 kV" },
    { key: "Norm", val: "DIN VDE 0276" },
    { key: "Leiter", val: "Cu · Kl. 2" },
    { key: "Status", val: "LIVE", isLive: true },
  ],
};

export const LEISTUNGEN = [
  {
    num: "01",
    icon: "bolt",
    title: "Erdkabelverlegung",
    desc: "Fachgerechte Verlegung von Energie- und Datenkabeln im Erd- und Freileitungsbereich nach DIN VDE — präzise geplant und sauber ausgeführt.",
  },
  {
    num: "02",
    icon: "industry",
    title: "Industrieinstallation",
    desc: "Elektroinstallationen in Produktionshallen, Industrieanlagen und Gewerbeobjekten — sicher, effizient und normgerecht umgesetzt.",
  },
  {
    num: "03",
    icon: "wrench",
    title: "Wartung & Service",
    desc: "Inspektion, Wartung und Instandhaltung bestehender Kabel- und Elektroanlagen — mit vollständiger Dokumentation und Messprotokoll.",
  },
];

export const STANDORT = {
  headline: ["Verwurzelt in Duisburg.", "Tätig in ganz NRW."],
  text: "Von Duisburg aus bedienen wir Kunden in der gesamten Region Nordrhein-Westfalen und darüber hinaus. Kurze Wege, schnelle Reaktionszeiten.",
  cities: ["Duisburg", "Essen", "Düsseldorf", "Dortmund", "& weitere"],
  imageUrl:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  imageAlt: "Duisburg Stadtbild",
};

export const STATS = [
  { target: 250, suffix: "+", label: "Projekte abgeschlossen" },
  { target: 60, suffix: "+", label: "Zufriedene Kunden" },
  { target: 100, suffix: "%", label: "DIN VDE Normkonform" },
  { target: 24, suffix: "h", label: "Reaktionszeit" },
];

export const PROJEKTE = [
  {
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    tag: "Elektroinstallation",
    title: "Industrieanlage Duisburg-Nord",
    year: "2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tag: "Kabelverlegung",
    title: "Erdkabeltrasse Duisburg",
    year: "2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    tag: "Industrieinstallation",
    title: "Gewerbepark Essen",
    year: "2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    tag: "Industrieinstallation",
    title: "Produktionshalle Düsseldorf",
    year: "2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
    tag: "Schaltanlagenbau",
    title: "Schaltanlagenbau Dortmund",
    year: "2024",
  },
];

export const UEBER_UNS = {
  headline: ["Kein Konzern.", "Ein Team."],
  paragraphs: [
    "Wir sind ein junges Team aus Duisburg, das 2024 angetreten ist mit einem klaren Ziel: Kabelverlegung und Industrieinstallationen so zu machen, wie sie gemacht werden sollten.",
    "Sauber. Pünktlich. So, dass Sie sich danach nicht mehr darum kümmern müssen.",
  ],
  points: [
    "Gegründet 2024 in Duisburg",
    "DIN VDE zertifiziert",
    "Vollständige Dokumentation",
    "Termingarantie",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80",
  imageAlt: "INVICTA Team Duisburg",
};

export const ZITAT = {
  text: 'Ich habe INVICTA gegründet, weil ich selbst gesehen habe, was schlechte Kabelverlegung anrichtet. Unser Name bedeutet \u201eDie Unbesiegte\u201c \u2014 und genau das ist unser Anspruch an jede einzelne Arbeit.',
  author: "Tugkan",
  role: "Inhaber, INVICTA Kabelverlegung · Duisburg",
};

export const KONTAKT = {
  headline: "Jetzt Kontakt aufnehmen",
  subtext:
    "Wir melden uns innerhalb von 24 Stunden bei Ihnen — direkt aus Duisburg.",
  email: COMPANY.email,
  phone: "+49 1577 1472898",
  phoneHref: COMPANY.phoneHref,
};
