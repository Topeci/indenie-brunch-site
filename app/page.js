export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Logo Indénié Brunch" />
        </div>
        <div className="nav-links">
          <a href="#apropos">L&apos;événement</a>
          <a href="#programme">Programme</a>
          <a href="#galerie">Galerie</a>
          <a href="#billetterie">Billetterie</a>
          <a href="#actus">Actus</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#billetterie" className="btn-gold">
          Réserver ma place
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-foule.jpg" alt="Foule de l'Indénié Brunch en tenue blanche" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="rule" />
            <span>ÉDITION FESTIVAL · DRESS CODE TOUT BLANC</span>
          </div>
          <h1 className="hero-title">
            La jeunesse de l&apos;Indénié se retrouve en blanc
          </h1>
          <p className="hero-sub">
            Le rendez-vous incontournable de la jeunesse d&apos;Abengourou : musique,
            retrouvailles et éclat, le temps d&apos;un après-midi tout en blanc.
          </p>
          <div className="date-pill">
            <span>19 Décembre 2026 · dès 16h</span>
            <span className="dot" />
            <span>Abengourou, Côte d&apos;Ivoire</span>
          </div>
          <div className="hero-cta">
            <a href="#billetterie" className="btn-gold">
              Réserver mon billet
            </a>
            <a href="#programme" className="btn-outline-light">
              Voir le programme
            </a>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section id="apropos" className="section">
        <div className="about">
          <div className="about-text">
            <span className="eyebrow-label">L&apos;ÉVÉNEMENT</span>
            <h2>Un rendez-vous devenu culte à Abengourou</h2>
            <p>
              Né à Abengourou, l&apos;Indénié Brunch réunit tous les six mois la
              jeunesse de la région dans un concept unique : une seule couleur,
              le blanc, pour une après-midi de partage, de musique live et de
              retrouvailles. Édition après édition, le rendez-vous s&apos;est
              imposé comme un temps fort du calendrier social de l&apos;Indénié.
            </p>
            <div className="chips">
              <span className="chip">6 éditions</span>
              <span className="chip">Dress code blanc</span>
              <span className="chip gold">Partenaire Hennessy Prestige</span>
            </div>
          </div>
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hennessy-prestige.jpg" alt="Ambiance Hennessy Prestige à l'Indénié Brunch" />
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="section">
        <div className="section-heading">
          <span className="eyebrow-label">PROGRAMME</span>
          <h2>Une seule après-midi, plusieurs temps forts</h2>
        </div>
        <div className="program-grid">
          <div className="program-card">
            <h3>DJ sets &amp; orchestre live</h3>
            <p>Une sélection musicale non-stop, du brunch jusqu&apos;à la tombée de la nuit.</p>
          </div>
          <div className="program-card">
            <h3>Show &amp; animations</h3>
            <p>Cracker show, danseurs et surprises tout au long de l&apos;événement.</p>
          </div>
          <div className="program-card">
            <h3>Bar premium</h3>
            <p>Cocktails et cartes signature avec nos partenaires spiritueux.</p>
          </div>
          <div className="program-card">
            <h3>Networking lounge</h3>
            <p>
              Un espace pour se retrouver entre amis, en famille et faire de
              nouvelles rencontres.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="section">
        <div className="section-heading" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", maxWidth: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span className="eyebrow-label">GALERIE</span>
            <h2>L&apos;édition 5 en images</h2>
          </div>
          <a href="#" style={{ fontSize: "14px", fontWeight: 600, borderBottom: "1.5px solid var(--ink)", paddingBottom: "2px" }}>
            Voir toutes les photos →
          </a>
        </div>
        <div className="gallery-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/soiree-1.jpg" alt="Show de feu à l'Indénié Brunch" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/soiree-2.jpg" alt="Ambiance nocturne de l'Indénié Brunch" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/soiree-3.jpg" alt="Public en blanc à l'Indénié Brunch" />
        </div>
      </section>

      {/* BILLETTERIE */}
      <section id="billetterie" className="section">
        <div className="section-heading">
          <span className="eyebrow-label">BILLETTERIE — ÉDITION FESTIVAL</span>
          <h2>Places limitées. Réservez avant le 19 décembre.</h2>
        </div>
        <div className="tickets-grid">
          <div className="ticket-card">
            <span className="ticket-label">STANDARD</span>
            <span className="ticket-price">[PRIX] FCFA</span>
            <div className="ticket-features">
              <span>· Accès général</span>
              <span>· Une boisson offerte</span>
              <span>· Place assise en zone commune</span>
            </div>
            <a href="#" className="btn-line" style={{ textAlign: "center" }}>
              Réserver
            </a>
          </div>
          <div className="ticket-card featured">
            <span className="ticket-label">VIP</span>
            <span className="ticket-price">2000 FCFA</span>
            <div className="ticket-features">
              <span>· Accès zone VIP</span>
              <span>· Bouteille incluse</span>
              <span>· Parking réservé</span>
            </div>
            <a
              href="#"
              className="btn-gold"
              style={{ textAlign: "center", background: "#14110D", color: "#FFFFFF" }}
            >
              Réserver
            </a>
          </div>
          <div className="ticket-card">
            <span className="ticket-label">TABLE VIP (6 pers.)</span>
            <span className="ticket-price">[PRIX] FCFA</span>
            <div className="ticket-features">
              <span>· Table privée</span>
              <span>· 2 bouteilles incluses</span>
              <span>· Accès prioritaire</span>
            </div>
            <a href="#" className="btn-line" style={{ textAlign: "center" }}>
              Réserver
            </a>
          </div>
        </div>
        <div className="payment-note">
          <span>
            Paiement sécurisé disponible via <strong>Wave</strong>, Orange Money et carte
            bancaire
          </span>
        </div>
      </section>

      {/* ACTUS / BLOG */}
      <section id="actus" className="section">
        <div className="section-heading">
          <span className="eyebrow-label">ACTUS</span>
          <h2>Toute l&apos;actualité de l&apos;Indénié Brunch</h2>
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "var(--ink-muted)" }}>
            Annonces, coulisses et retours sur chaque édition — le blog qui garde la
            communauté informée entre deux brunchs.
          </p>
        </div>
        <div className="blog-grid">
          <a href="#" className="blog-card">
            <div className="blog-thumb">[Image article]</div>
            <div className="blog-body">
              <span className="blog-tag">ANNONCE</span>
              <span className="blog-title">[Édition festival : la date et le lieu dévoilés]</span>
              <span className="blog-date">[Date de publication]</span>
            </div>
          </a>
          <a href="#" className="blog-card">
            <div className="blog-thumb">[Image article]</div>
            <div className="blog-body">
              <span className="blog-tag">RÉCAP</span>
              <span className="blog-title">[Retour en images sur l&apos;édition 5]</span>
              <span className="blog-date">[Date de publication]</span>
            </div>
          </a>
          <a href="#" className="blog-card">
            <div className="blog-thumb">[Image article]</div>
            <div className="blog-body">
              <span className="blog-tag">COULISSES</span>
              <span className="blog-title">[Comment on prépare un Indénié Brunch]</span>
              <span className="blog-date">[Date de publication]</span>
            </div>
          </a>
        </div>
      </section>

      {/* NEWSLETTER + FOOTER */}
      <footer id="contact" className="site-footer">
        <div className="newsletter">
          <div>
            <h2>Ne rate aucune édition</h2>
            <p>Inscris-toi pour recevoir la date de la prochaine édition en avant-première.</p>
          </div>
          <form>
            <label htmlFor="newsletter-email" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
              Adresse e-mail
            </label>
            <input id="newsletter-email" type="email" placeholder="Ton adresse e-mail" />
            <button type="submit" className="btn-gold">
              S&apos;inscrire
            </button>
          </form>
        </div>
        <div className="footer-main">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Logo Indénié Brunch" />
            <span className="muted">Abengourou, Côte d&apos;Ivoire</span>
            <span className="muted">Infoline : 07 47 75 02 73 · +33 7 49 04 57 58 (WhatsApp)</span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1712" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1712" strokeWidth="1.6">
                <path d="M14 9h3V6h-3c-2 0-3 1-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.5.5-1 1-1z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1712" strokeWidth="1.6">
                <path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1121 11.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Indénié Brunch — Tous droits réservés</span>
          <span>Un concept événementiel d&apos;Abengourou</span>
        </div>
      </footer>
    </main>
  );
}
