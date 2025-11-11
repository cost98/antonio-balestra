# Sito Web Dr. Antonio Balestra - Nutrizionista Clinico

## 🎯 Descrizione
Sito web professionale e moderno per il Dr. Antonio Balestra, nutrizionista clinico specializzato in:
- Nutrizione per diabetici
- Piede diabetico  
- Dieta chetogenica
- Piani alimentari personalizzati

## 🚀 Tecnologie
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animazioni)
- **React Icons**

## 📦 Installazione

### 1. Installare Node.js
Assicurati di avere Node.js installato (versione 18 o superiore):
```bash
node --version
```

### 2. Installare le dipendenze
```bash
npm install
```

Se ci sono errori, prova:
```bash
npm install --legacy-peer-deps
```

## 🎨 Avviare il sito in modalità sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su: **http://localhost:3000**

## 🏗️ Build per produzione

### 1. Generare il sito statico
```bash
npm run build
```

Questo creerà una cartella `out/` con tutti i file HTML/CSS/JS pronti per il deploy.

### 2. Testare la build in locale
```bash
npm start
```

## 🌐 Deploy su SiteGround

### Opzione 1: Upload FTP/SFTP
1. Esegui `npm run build`
2. Carica il contenuto della cartella `out/` nella cartella `public_html` di SiteGround
3. Il sito sarà immediatamente online!

### Opzione 2: Node.js Hosting
SiteGround supporta applicazioni Node.js. Contatta il supporto per configurare l'hosting Node.js.

## 📁 Struttura del Progetto

```
antonio-balestra/
├── public/
│   └── images/
│       ├── gallery/     # Foto del Dr. Balestra
│       ├── logos/       # Loghi
│       └── hero/        # Immagini hero (vuota)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principale
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Stili globali
│   └── components/
│       ├── Header.tsx       # Navbar responsive
│       ├── Footer.tsx       # Footer
│       ├── Hero.tsx         # Sezione hero
│       ├── About.tsx        # Chi sono
│       ├── Services.tsx     # Servizi
│       ├── Pathologies.tsx  # Patologie trattate
│       ├── Method.tsx       # Metodo di lavoro
│       ├── Testimonials.tsx # Recensioni
│       └── Contact.tsx      # Form contatti
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## ✨ Features Implementate

### ✅ Design Responsive
- Mobile-first
- Hamburger menu per mobile
- Layout adattivo per tablet e desktop

### ✅ SEO Ottimizzato
- Metadata dinamici
- Export statico per performance massime
- Struttura HTML semantica
- Alt text per immagini

### ✅ Sezioni Homepage
1. **Hero** - Presentazione con CTA
2. **Chi Sono** - Bio e formazione
3. **Servizi** - Card responsive dei servizi
4. **Patologie** - Patologie trattate
5. **Metodo** - Approccio multidisciplinare
6. **Recensioni** - Testimonianze pazienti
7. **Contatti** - Form + info contatto

### ✅ Componenti
- Header sticky con menu mobile
- Footer completo
- Form di contatto validato
- Card animate con hover effects

## 🎨 Personalizzazione Colori

Modifica i colori in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Verde salute
  secondary: { ... } // Blu professionale
}
```

## 📝 TODO / Prossimi Passi

- [ ] Aggiungere animazioni Framer Motion
- [ ] Implementare invio email dal form contatto
- [ ] Creare pagine aggiuntive (Blog, FAQ)
- [ ] Integrare Google Maps per le sedi
- [ ] Aggiungere schema markup JSON-LD
- [ ] Configurare Google Analytics
- [ ] Ottimizzare immagini (WebP)
- [ ] Aggiungere Cookie Consent GDPR

## 📧 Contatti

**Dr. Antonio Balestra**
- Email: info@antoniobalestra.it
- Tel: +39 339 328 4926
- Indirizzo: Via Cascinazza 15, Pavia

---

**Powered by Next.js 14** | Creato con ❤️ per la salute e il benessere
