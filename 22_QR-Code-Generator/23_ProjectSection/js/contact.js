// ===== Helpers
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];

// ===== Sample data (with categories for filtering)
const WEB_PROJECTS = {
  items: [{
    id: 1,
    image: "images/weather_web_app.webp",
    title: "Weather Web Application",
    description: "Get real-time weather updates for any city with sleek, responsive UI, powered by live API data for accurate forecasts and conditions worldwide.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "Jul 2024",
    dateISO: "2024-07-01",
    previewUrl: "https://weather-hafizarham.netlify.app",
    liveUrl: "https://weather-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, API, QA",
    impact: "Fast, accurate data",
    cat: ["web", "mobile"],
    overview: [{
      title: "Responsive Design System",
      detail: "Mobile‑first with fluid layouts ensuring optimal display and usability across all device types and screen sizes."
    },
    {
      title: "Live Data Fetching",
      detail: "Seamless integration with API providing accurate weather forecasts updated instantly as you search locations."
    }
    ]
  },
  {
    id: 2,
    image: "images/Login_Signup_From.webp",
    title: "Login Signup Form",
    description: "Modern, responsive signup/login form with smooth UI, real-time validation and mobile-friendly design for easy and secure user authentication on any device.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "Jun 2024",
    dateISO: "2024-06-01",
    previewUrl: "https://form-hafizarham.netlify.app",
    liveUrl: "https://form-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, Validation",
    impact: "Reduced user errors",
    cat: ["web", "mobile", "ux"],
    overview: [{
      title: "Validation Logic",
      detail: "Checks input instantly to catch errors before submission, improving accuracy and reducing failed form entries."
    },
    {
      title: "Responsive Layout",
      detail: "Adapts fast to any screen size so users get a smooth login/signup experience whether on desktop or mobile."
    }
    ]
  },
  {
    id: 3,
    image: "images/education.webp",
    title: "Educational Website",
    description: "Interactive educational site offering courses, quizzes and resources with a clean UI to boost engagement, learning experience and student success rates.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "Apr 2025",
    dateISO: "2025-04-01",
    previewUrl: "https://eduhub-hafizarham.netlify.app",
    liveUrl: "https://eduhub-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, Pages, QA",
    impact: "Higher session time",
    cat: ["web", "ux"],
    overview: [{
      title: "Course Management",
      detail: "Organizes classes, lessons and quizzes into intuitive modules for efficient study and easier learning progress tracking."
    },
    {
      title: "Engagement Tools",
      detail: "Provides tools like tests, interactive exercises and highlights to increase student participation and retention."
    }
    ]
  },
  {
    id: 4,
    image: "images/netflix_clone.webp",
    title: "Netflix Webpage Clone",
    description: "Responsive Netflix homepage replica with modern UI/UX, dynamic sections, and smooth hover animations replicating the feel of the original streaming platform.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "May 2024",
    dateISO: "2024-05-01",
    previewUrl: "https://eduhub-hafizarham.netlify.app",
    liveUrl: "https://eduhub-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, Interactions",
    impact: "Pixel-accurate clone",
    cat: ["web"],
    overview: [{
      title: "Dynamic Layout",
      detail: "Exact match of Netflix's homepage design with responsive scaling and proper alignment across all devices."
    },
    {
      title: "User Interaction",
      detail: "Smooth hover animations and transitions for thumbnails, menus and interactive elements for an engaging UI."
    }
    ]
  },
  {
    id: 5,
    image: "images/magicpattern-gradient-generator.webp",
    title: "Gradients Generator",
    description: "Generate multi-color CSS gradients instantly with live preview, easy copy, and an interface designed for designers and developers seeking creativity.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "Mar 2025",
    dateISO: "2025-03-01",
    previewUrl: "https://gradients-hafizarham.netlify.app",
    liveUrl: "https://gradients-hafizarham.netlify.app",
    isLive: true,
    role: "UI/UX, Front‑End",
    scope: "System, Handoff",
    impact: "−24% design time",
    cat: ["web", "ux"],
    overview: [{
      title: "Live Preview",
      detail: "Displays instant visual feedback allowing quick adjustments to colors and transparency for precise gradients."
    },
    {
      title: "Export Options",
      detail: "Copy and paste generated CSS gradient code directly into your projects without any formatting issues."
    }
    ]
  },
  {
    id: 6,
    image: "images/todo_webApp.webp",
    title: "TODO Web App",
    description: "Intuitive task manager to add, edit, delete and organize todos efficiently while keeping the UI simple and fully responsive for mobile or desktop.",
    tech: ["HTML", "CSS", "JavaScript"],
    dateLabel: "Feb 2024",
    dateISO: "2024-02-01",
    previewUrl: "https://todolist-hafizarham.netlify.app",
    liveUrl: "https://todolist-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, CRUD",
    impact: "Better productivity",
    cat: ["web", "mobile"],
    overview: [{
      title: "Task Management",
      detail: "Organizes to-dos with add, edit, and delete actions to help users keep track of daily responsibilities easily."
    },
    {
      title: "Mobile Friendly",
      detail: "Adapts to mobile view for on-the-go accessibility so productivity is maintained anywhere at any time."
    }
    ]
  },
  {
    id: 7,
    image: "images/calculator-app.webp",
    title: "Simple Calculator",
    description: "Clean and responsive web calculator supporting basic operations with instant output and intuitive interface, optimized for quick and repeated use.",
    tech: ["Figma", "HTML", "SCSS"],
    dateLabel: "Jan 2024",
    dateISO: "2024-01-01",
    previewUrl: "https://calculator-hafizarham.netlify.app",
    liveUrl: "https://calculator-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, Logic",
    impact: "Quick calculations",
    cat: ["web", "mobile"],
    overview: [{
      title: "Accurate Operations",
      detail: "Performs basic arithmetic correctly and quickly with immediate feedback after each button press."
    },
    {
      title: "User-friendly",
      detail: "Interface is simple and intuitive, making calculations easy even for first-time users."
    }
    ]
  },
  {
    id: 9,
    image: "images/QR-Code-Generator.webp",
    title: "QR Code Generator",
    description: "Instantly creates QR codes from any text or URL with real-time display, customizable options and download capability for quick distribution.",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    dateLabel: "Nov 2024",
    dateISO: "2024-11-01",
    previewUrl: "https://qrcodegenerator-hafizarham.netlify.app",
    liveUrl: "https://qrcodegenerator-hafizarham.netlify.app",
    isLive: true,
    role: "Front‑End",
    scope: "UI, API",
    impact: "Instant results",
    cat: ["web"],
    overview: [{
      title: "Fast Generation",
      detail: "Converts your input into QR code format immediately, without delay or need for additional steps."
    },
    {
      title: "Downloadable",
      detail: "Save QR code as an image file ready for sharing or embedding in digital and printed materials."
    }
    ]
  }
  ]
};

// ===== Utilities
function bulletsFromDesc(text, max = 2) {
  if (!text) return [];
  const parts = text.split(/[.!?]\s+/).filter(Boolean);
  return parts.slice(0, max);
}

// ===== Card Template (adds reveal + data-cat)
function cardHTML(p, idx) {
  const safeId = (p.id ?? idx);
  const uid = "card-" + safeId;
  const ids = {
    title: uid + "-title",
    drop: uid + "-like",
    tabOv: uid + "-tab-ov",
    tabTech: uid + "-tab-tech",
    tabDet: uid + "-tab-det",
    panOv: uid + "-pan-ov",
    panTech: uid + "-pan-tech",
    panDet: uid + "-pan-det"
  };

  const overviewListHTML = Array.isArray(p.overview) && p.overview.length ?
    p.overview.slice(0, 2).map(o => `
          <li class="bullet">
            <span class="dot" aria-hidden="true"></span>
            <div>
              <h4>${o.title || 'Overview'}</h4>
              <p>${o.detail || ''}</p>
            </div>
          </li>
      `).join('') :
    bulletsFromDesc(p.description, 2).map((txt, i) => `
          <li class="bullet">
            <span class="dot" aria-hidden="true"></span>
            <div>
              <h4>${i === 0 ? 'Responsive Design System' : 'UX Optimization'}</h4>
              <p>${txt}</p>
            </div>
          </li>
      `).join('');

  const techTags = (p.tech || []).map(t => `<span class="tag">${t}</span>`).join('');
  const cat = Array.isArray(p.cat) ? p.cat.join(' ') : 'web';

  return `
      <article class="card reveal" aria-labelledby="${ids.title}" data-cat="${cat}" data-card="${uid}">
        <div class="card__media">
          <img class="card__img" src="${p.image}" alt="${p.title || 'Project image'}">
          ${p.isLive ? `<span class="pill"><span class="dot"></span> LIVE</span>` : ''}

          <button class="drop" id="${ids.drop}" type="button" aria-label="Like this project" aria-pressed="false">
            <!-- Outline heart -->
            <svg class="heart-icon heart-icon--outline" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
            </svg>
            <!-- Filled heart -->
            <svg class="heart-icon heart-icon--fill" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
            </svg>
          </button>
        </div>

        <div class="card__body">
          <header class="head">
            <h3 id="${ids.title}" class="title">${p.title || ''}</h3>
            ${p.dateLabel ? `<time class="date" datetime="${p.dateISO || ''}">${p.dateLabel}</time>` : ''}
          </header>

          <p class="desc">${p.description || ''}</p>

          <div class="seg" role="tablist" aria-label="Card sections">
            <button class="seg__btn is-active" role="tab" aria-selected="true" aria-controls="${ids.panOv}" id="${ids.tabOv}" tabindex="0">Overview</button>
            <button class="seg__btn" role="tab" aria-selected="false" aria-controls="${ids.panTech}" id="${ids.tabTech}" tabindex="-1">Tech</button>
            <button class="seg__btn" role="tab" aria-selected="false" aria-controls="${ids.panDet}" id="${ids.tabDet}" tabindex="-1">Details</button>
          </div>

          <div class="panels">
            <section class="panel is-active" id="${ids.panOv}" role="tabpanel" aria-labelledby="${ids.tabOv}">
              <ul class="bullets" role="list">${overviewListHTML}</ul>
            </section>

            <section class="panel" id="${ids.panTech}" role="tabpanel" aria-labelledby="${ids.tabTech}" hidden>
              <div class="tags">${techTags}</div>
            </section>

            <section class="panel" id="${ids.panDet}" role="tabpanel" aria-labelledby="${ids.tabDet}" hidden>
              <dl class="meta">
                ${p.role ? `<div class="meta-row"><dt>Role</dt><dd>${p.role}</dd></div>` : ''}
                ${p.scope ? `<div class="meta-row"><dt>Scope</dt><dd>${p.scope}</dd></div>` : ''}
                ${p.impact ? `<div class="meta-row"><dt>Impact</dt><dd>${p.impact}</dd></div>` : ''}
              </dl>
            </section>
          </div>
        </div>

        <footer class="card__footer">
          <a href="${p.previewUrl || '#'}" class="btn btn-ghost" target="_blank" rel="noopener" aria-label="Preview">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <circle cx="7" cy="7" r="5.2" fill="none" stroke="#303030" stroke-width="1.5" />
              <circle cx="7" cy="7" r="2" fill="#303030" />
            </svg>
            Preview
          </a>

          <a href="${p.liveUrl || '#'}" class="btn btn-primary" target="_blank" rel="noopener" aria-label="Open live project">
            Live Project
            <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M4.49 2.5H2.16A1.17 1.17 0 0 0 .99 3.67v5.83c0 .31.12.6.33.82.22.21.51.33.82.33h5.83c.31 0 .6-.12.82-.33.21-.22.33-.51.33-.82V7.17M6.83 1.33h3.5m0 0v3.5m0-3.5L4.49 7.17"
                    fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </footer>
      </article>
    `;
}

// ===== Render + Interactions for Web Cards
function renderWeProjects(containerOrId) {
  const container = (typeof containerOrId === 'string') ?
    document.getElementById(containerOrId) :
    (containerOrId || document.getElementById('webDevProjects'));
  if (!container) return;

  // Render cards
  const frag = document.createDocumentFragment();
  WEB_PROJECTS.items.forEach((p, i) => {
    const tpl = document.createElement('template');
    tpl.innerHTML = cardHTML(p, i).trim();
    frag.appendChild(tpl.content.firstElementChild);
  });

  container.innerHTML = '';
  container.appendChild(frag);

  // Restore like state from localStorage
  qsa('.web-cards .card', container).forEach(card => {
    const key = 'like:' + (card.dataset.card || '');
    const liked = localStorage.getItem(key) === '1';
    const btn = card.querySelector('.drop');
    if (btn) {
      btn.classList.toggle('is-liked', liked);
      btn.setAttribute('aria-pressed', String(liked));
    }
  });

  // Interactions (like toggle + segmented tabs)
  container.addEventListener('click', (e) => {
    const likeBtn = e.target.closest?.('.drop');
    const tabBtn = e.target.closest?.('.seg__btn');

    // Heart like toggle (persist per card)
    if (likeBtn) {
      const card = likeBtn.closest('.card');
      const key = 'like:' + (card?.dataset.card || '');
      const isLiked = likeBtn.classList.toggle('is-liked');
      likeBtn.setAttribute('aria-pressed', String(isLiked));
      try { localStorage.setItem(key, isLiked ? '1' : '0'); } catch (err) { }
      return;
    }

    // Segmented tabs (inside card)
    if (tabBtn) {
      const card = tabBtn.closest('.card');
      if (!card) return;
      const tabs = Array.from(card.querySelectorAll('.seg__btn'));
      const panels = Array.from(card.querySelectorAll('.panel'));

      tabs.forEach(t => {
        const on = t === tabBtn;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });

      panels.forEach(p => {
        const show = p.id === tabBtn.getAttribute('aria-controls');
        p.classList.toggle('is-active', show);
        if (show) p.removeAttribute('hidden');
        else p.setAttribute('hidden', '');
      });
      return;
    }
  });

  // Keyboard navigation for tabs
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    if (!activeEl || !activeEl.closest?.('.seg__btn')) return;
    const focusedTab = activeEl;
    const card = focusedTab.closest('.card');
    if (!card) return;

    const tabs = Array.from(card.querySelectorAll('.seg__btn'));
    const idx = tabs.findIndex(x => x === focusedTab);
    if (idx < 0) return;

    let next = idx;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next = (idx + 1) % tabs.length;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      next = (idx - 1 + tabs.length) % tabs.length;
    }
    if (e.key === 'Home') {
      e.preventDefault();
      next = 0;
    }
    if (e.key === 'End') {
      e.preventDefault();
      next = tabs.length - 1;
    }

    if (next !== idx) {
      tabs[next].focus();
      tabs[next].click();
    }
  });
}

// ===== Tabs filtering (uses data-cat on cards)
function initTabsFilter() {
  const tabs = qsa('.tab');

  function setFilter(value) {
    const cards = qsa('.web-cards .card');
    cards.forEach(c => {
      const show = value === 'all' || (c.dataset.cat || '').split(/\s+/).includes(value);
      c.style.display = show ? '' : 'none';
    });
  }
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.setAttribute('aria-selected', 'false'));
      t.setAttribute('aria-selected', 'true');
      setFilter(t.dataset.filter);
    });
  });

  // Deep-link support (#web, #mobile, #ux)
  function applyHash() {
    const deep = location.hash.replace('#', '');
    const allowed = ['web', 'mobile', 'ux'];
    const target = allowed.includes(deep) ? deep : 'all';
    const btn = qs(`.tab[data-filter="${target}"]`) || qs(`.tab[data-filter="all"]`);
    btn?.click();
  }
  window.addEventListener('hashchange', applyHash);
  // initial
  applyHash();
}

// ===== Scroll reveal
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, {
    threshold: .2
  });
  qsa('.reveal').forEach(el => io.observe(el));
}

// ===== Boot
document.addEventListener('DOMContentLoaded', () => {
  renderWeProjects('webDevProjects');
  initReveal();
  initTabsFilter();
});