
# Clean-Exit – Website

**Auto-Deploy** ist vorbereitet. So geht's am schnellsten:

## Option A: GitHub Pages (automatisch)
1. Neues **GitHub Repo** erstellen, Branch **main**.
2. Alle Dateien hochladen.
3. Unter **Settings → Pages**: "Source: GitHub Actions" wählen.
4. Workflow läuft, danach ist die Seite unter `<dein-user>.github.io/<repo>` online.

## Option B: Netlify (Formular inkl. Versand)
1. Account bei Netlify anlegen.
2. Neues Projekt → "Import from Git" → dieses Repo verbinden.
3. Build Command leer lassen, Publish Directory `.`.
4. Netlify Forms ist aktiviert (Attribut `netlify`). Einsendungen erscheinen unter **Forms**.

## Texte/Angaben anpassen
- `index.html`: Telefonnummer, WhatsApp, E-Mail, Preise, Leistungen.
- `impressum.html`: USt-IdNr., verantwortliche Person, Versicherung.
- `datenschutz.html`: Anbieter/AV aktualisieren.
- `site.config.json`: Basisdaten (werden u. a. für JSON-LD genutzt).

Viel Erfolg mit **Clean-Exit** in Starnberg & München!
