# Ristorante Napoli – Restaurant‑Website (DE/EN/IT) mit Online‑Bestellung & Lieferservice

Eine moderne, mehrsprachige Restaurant‑Website mit **Online‑Bestellung**, **Warenkorb**, **Abholung/Lieferung** (Mindestbestellwert, Liefergebühr & Abhol‑Rabatt), optionalem **PayPal‑Checkout**, **Dark Mode**, **SEO (Schema.org/JSON‑LD)** und **Barrierefreiheit (ARIA)**.  
Technologien: **HTML5 · CSS3 · Vanilla JS**

### Screenshot (mit Daten)
![Screenshot mit Daten](./assets/preview.png)

<sub>_Tipp:_ Lege einen Screenshot unter `assets/screenshot.png` ab (oder passe den Pfad an).</sub>

---

## Features
- **Online‑Bestellung** mit Warenkorb, Abhol‑/Liefer‑Umschalter, Abhol‑Rabatt (10 %), Liefergebühr (3,50 €) und Mindestbestellwert (15 €)
- **Mehrsprachig (DE/EN/IT)** via Language‑Switcher, Auswahl wird im `localStorage` gespeichert
- **Responsives UI** (mobil‑freundlich), **Dark‑Mode**, **tastatur‑bedienbar** und ARIA‑Labels
- **PayPal‑Integration** (optional; Sandbox eingebunden – Client‑ID einfach austauschen)
- **SEO**: Meta‑Tags & [Schema.org](https://schema.org) **Restaurant** via JSON‑LD
- Saubere **Code‑Struktur** (HTML/CSS/JS getrennt), leicht anpassbar

---

## Quickstart (lokal)
1. Repo klonen oder ZIP entpacken
2. `index.html` im Browser öffnen  
   _Optional: mit VS Code „Live Server“ verwenden_
3. Sprache oben rechts umschalten (DE/EN/IT)

---

## Konfiguration
| Bereich | Datei | Was anpassen? |
|---|---|---|
| Bestell‑E‑Mail | `script.js` | Im `placeOrder()` die Adresse `bestellung@example.com` durch eure Restaurant‑E‑Mail ersetzen |
| PayPal | `index.html` | Script‑Tag mit eurer **Client‑ID** ersetzen (`client-id=...`) |
| Menü | `script.js` | `MENU`‑Array (Name, Beschreibung, Preis) bearbeiten/erweitern |
| Farben/Branding | `style.css` | Farbvariablen (`--primary`, Trikolore) & Styles anpassen |
| Adresse/Map | `index.html` | Google‑Maps‑Embed oder Platzhalter ersetzen |
| Öffnungszeiten | `index.html` & JSON‑LD | Zeiten im Abschnitt **Öffnungszeiten** und im Schema‑Block anpassen |

**Bestelllogik:**  
- Mindestbestellwert Lieferung: **15,00 €**  
- Liefergebühr: **3,50 €**, entfällt ab **35,00 €**  
- Abholung: **10 % Rabatt** auf die Zwischensumme

> Diese Werte sind in `script.js` (Konstanten `MIN_DELIVERY`, `DELIVERY_FEE`, `PICKUP_DISCOUNT`) hinterlegt.

---

## Internationalisierung (i18n)
- Sprach‑Strings in `script.js` unter `i18n.de`, `i18n.en`, `i18n.it`
- UI‑Texte im HTML sind mit `data-i18n`/`data-i18n-placeholder` markiert
- Sprache wird im `localStorage` persistiert (`lang`)

**Weitere Sprache hinzufügen:** Objekt `i18n.xx` ergänzen, `langSelect`‑Option einfügen, fertig.

---

## Zugänglichkeit & SEO
- Fokus‑Styles, ARIA‑Attribute, semantisches HTML
- Strukturierte Daten (**JSON‑LD** Restaurant), Meta‑Description, Open‑Graph

---

## Struktur
```
.
├── index.html      # Seite: Hero, Menü, Lieferservice, Öffnungszeiten, Reservierung, Kontakt
├── style.css       # Styles (inkl. Trikolore‑Akzente, Dark Mode, Responsiveness)
├── script.js       # i18n, Menü‑Daten, Warenkorb/Checkout, Formular‑Logik, PayPal
└── assets/
    └── screenshot.png   # Screenshot für README (optional)
```

---

## Deployment (GitHub Pages)
1. **Settings → Pages**  
2. **Source:** _Deploy from a branch_ → **Branch:** `main` → **Folder:** `/ (root)` → **Save`**
3. Wartet 1–2 Minuten → Public URL erscheint oben.  
4. Diese URL hier im README bei **Live‑Demo** eintragen.

---

## Test‑Checkliste
- [ ] Bestellung mit **Abholung** und **Lieferung** durchspielen  
- [ ] Mindestbestellwert/ Liefergebühr korrekt?  
- [ ] Sprache umschalten (DE/EN/IT) – Layout & Texte ok?  
- [ ] Dark‑/Light‑Mode prüfen  
- [ ] PayPal‑Sandbox Checkout (optional)

---

## Stack & Tools
**HTML5**, **CSS3**, **Vanilla JS**, **PayPal JS SDK**, **Schema.org/JSON‑LD**

---

## Lizenz
**MIT** – gerne anpassen, falls ihr eine andere Lizenz wünscht.

---

## Credits
Design & Code: André Asprion (Portfolio‑Projekt – „Ristorante Napoli“).  
Icons/Emoji: System/Emoji. PayPal‑Logo/Marke © PayPal.

---

## 💡 Hinweise
- Für reale Zahlungen **PayPal‑Client‑ID** ersetzen und rechtliche Seiten ergänzen (**Impressum**, **Datenschutz**).  
- E‑Mail‑Workflow basiert auf `mailto:` – für professionelle Workflows empfiehlt sich ein kleines Backend (Mailservice/Webhook).
