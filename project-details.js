(function () {
  const I = window.Icons;
  const data = window.PORTFOLIO_DATA;

  const backIcon = document.getElementById('back-icon');
  if (backIcon) {
    backIcon.innerHTML = I.ArrowLeft({ size: 20, cls: 'w-5 h-5 text-primary' });
  }
  
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => { window.location.href = '/#projects'; });
  }

  // Star background particles
  const seededRandom = (seed) => { const x = Math.sin(seed) * 10000; return x - Math.floor(x); };
  const starBg = document.getElementById('star-background');
  if (starBg) {
    let html = '';
    for (let i = 0; i < 4; i++) {
      const size = seededRandom(i * 10 + 1) * 2 + 1;
      html += '<div class="meteor animate-meteor" style="width:' + (size * 50) + 'px;height:' + (size * 2) + 'px;left:' + (seededRandom(i * 10 + 2) * 100) + '%;top:' + (seededRandom(i * 10 + 3) * 20) + '%;animation-delay:' + (seededRandom(i * 10 + 4) * 15) + 's"></div>';
    }
    starBg.innerHTML = html;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = data.projects.find((p) => p.id === id);
  const content = document.getElementById('content');

  if (!project) {
    if (content) {
      content.innerHTML = '<div class="text-center py-20"><h1 class="text-2xl font-bold">Project not found.</h1><a href="/" class="cosmic-button mt-6">Return Home</a></div>';
    }
    return;
  }

  const { title, images = [], overview, features = [], techStacks = {}, challenges = [], futurePlans = [], demoUrl, githubUrl } = project;

  // Case Study Header
  const headerHtml = `
    <div class="pt-12 pb-12 mb-12 text-left border-b border-border/15">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider mb-4">
        Case Study
      </div>
      <h1 class="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">${title}</h1>
      <p class="text-lg text-muted-foreground leading-relaxed max-w-4xl">${overview}</p>
    </div>
  `;

  // Image Gallery Carousel Template
  let current = 0;
  const galleryHtml = images.length ? `
    <div class="relative w-full rounded-2xl overflow-hidden border border-border/40 shadow-2xl bg-card aspect-video mb-10 flex items-center justify-center">
      <img id="gallery-img" src="${images[0]}" alt="${title} screenshot" class="w-full h-full object-cover transition-all duration-500 ease-out" />
      
      ${images.length > 1 ? `
        <button id="gal-prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-card/60 backdrop-blur-md text-foreground border border-border/40 rounded-full p-2.5 hover:scale-110 hover:bg-card hover:border-primary/45 transition duration-300 z-10 cursor-pointer" aria-label="Previous image">
          <span>${I.ArrowLeft({ size: 20 })}</span>
        </button>
        <button id="gal-next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-card/60 backdrop-blur-md text-foreground border border-border/40 rounded-full p-2.5 hover:scale-110 hover:bg-card hover:border-primary/45 transition duration-300 z-10 cursor-pointer" aria-label="Next image">
          <span>${I.ArrowRight({ size: 20 })}</span>
        </button>
        <div id="gal-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          ${images.map((_, idx) => `<button class="w-2.5 h-2.5 rounded-full border border-white/60 transition-all duration-300 ${idx === 0 ? 'bg-primary border-primary scale-120' : 'bg-white/40'}" data-idx="${idx}" aria-label="Go to slide ${idx + 1}"></button>`).join('')}
        </div>
      ` : ''}
    </div>
  ` : '';

  // Features Template
  const featuresHtml = features.length ? `
    <div class="pt-12 pb-12 border-t border-border/10 text-left">
      <h2 class="text-xl md:text-2xl font-bold text-foreground mb-12 flex items-center gap-2">
        <span class="inline-block w-1.5 h-6 bg-primary rounded-full"></span>Key Product Features
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${features.map((f) => `
          <div class="flex items-start gap-3 bg-card border border-border/80 rounded-xl p-4 transition-transform duration-300 hover:scale-[1.01]">
            <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm font-semibold text-foreground/80 leading-snug">${f}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Challenges Template
  const challengesHtml = challenges.length ? `
    <div class="pt-12 pb-12 border-t border-border/10 text-left">
      <h2 class="text-xl md:text-2xl font-bold text-foreground mb-12 flex items-center gap-2">
        <span class="text-orange-500 flex items-center">${I.AlertTriangle({ size: 22 })}</span>Technical Challenges
      </h2>
      <div class="space-y-4">
        ${challenges.map((c) => `
          <div class="flex items-start gap-4 bg-card border border-border/80 rounded-xl p-5">
            <div class="w-2.5 h-2.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-sm md:text-base text-muted-foreground leading-relaxed">${c}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Future Milestones Template
  const futureHtml = futurePlans.length ? `
    <div class="pt-12 pb-12 border-t border-border/10 text-left">
      <h2 class="text-xl md:text-2xl font-bold text-foreground mb-12 flex items-center gap-2">
        <span class="text-blue-500 flex items-center">${I.Target({ size: 22 })}</span>Future Roadmap
      </h2>
      <div class="space-y-4">
        ${futurePlans.map((p) => `
          <div class="flex items-start gap-4 bg-card border border-border/80 rounded-xl p-5">
            <div class="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-sm md:text-base text-muted-foreground leading-relaxed">${p}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Sidebar Case Specs Card Template
  const sidebarSpecsCard = `
    <div class="glow-card p-6 rounded-3xl text-left space-y-6">
      <h3 class="text-xl font-bold text-foreground border-b border-border/40 pb-3">Project Details</h3>
      
      <!-- Specifications list -->
      <div class="space-y-4 text-sm">
        <div class="flex justify-between py-1.5 border-b border-border/20">
          <span class="text-muted-foreground">Category</span>
          <span class="font-bold text-foreground">Full-Stack Application</span>
        </div>
        <div class="flex justify-between py-1.5 border-b border-border/20">
          <span class="text-muted-foreground">Client/Type</span>
          <span class="font-bold text-foreground">Personal / Milestones</span>
        </div>
        <div class="flex justify-between py-1.5 border-b border-border/20">
          <span class="text-muted-foreground">Development</span>
          <span class="font-bold text-foreground">End-to-End System</span>
        </div>
      </div>

      <!-- Call To Actions -->
      <div class="flex flex-col gap-3 pt-2">
        ${demoUrl ? `
          <a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="cosmic-button w-full flex items-center justify-center gap-2">
            <span>${I.ExternalLink({ size: 16 })}</span>
            <span>Launch Live App</span>
          </a>
        ` : ''}
        ${githubUrl ? `
          <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full flex items-center justify-center gap-2 hover:bg-primary/10">
            <span>${I.Github({ size: 16 })}</span>
            <span>View Source Code</span>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  // Sidebar Tech Stack Tags Template
  const sidebarTechStacks = Object.keys(techStacks).length ? `
    <div class="bg-card/45 border border-border/80 p-6 rounded-3xl text-left space-y-6">
      <h3 class="text-xl font-bold text-foreground border-b border-border/40 pb-3">Technologies Used</h3>
      <div class="space-y-6">
        ${Object.entries(techStacks).filter(([, val]) => val && val.length).map(([cat, stacks]) => `
          <div>
            <h4 class="capitalize text-xs font-bold text-primary uppercase tracking-widest mb-3">${cat.replace('_', ' ')}</h4>
            <div class="flex flex-wrap gap-2">
              ${stacks.map((t) => `<span class="px-3 py-1.5 bg-background text-foreground/80 rounded-lg text-xs font-semibold border border-border/40">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Render Full Split Page Layout
  if (content) {
    content.innerHTML = `
      ${headerHtml}
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Main Details Content -->
        <div class="lg:col-span-8 space-y-2">
          ${galleryHtml}
          ${featuresHtml}
          ${challengesHtml}
          ${futureHtml}
        </div>
        
        <!-- Sidebar Metadata -->
        <div class="lg:col-span-4 space-y-6">
          ${sidebarSpecsCard}
          ${sidebarTechStacks}
        </div>
      </div>
    `;
  }

  // Gallery slider control logic
  if (images.length > 1) {
    const img = document.getElementById('gallery-img');
    const prevBtn = document.getElementById('gal-prev');
    const nextBtn = document.getElementById('gal-next');
    const dots = document.querySelectorAll('#gal-dots button');
    
    if (img && dots.length) {
      const updateGallery = () => {
        img.style.opacity = '0.3';
        setTimeout(() => {
          img.src = images[current];
          img.style.opacity = '1';
        }, 150);
        
        dots.forEach((d, i) => {
          if (i === current) {
            d.className = 'w-2.5 h-2.5 rounded-full border border-primary bg-primary scale-120 transition-all duration-300';
          } else {
            d.className = 'w-2.5 h-2.5 rounded-full border border-white/60 bg-white/40 transition-all duration-300';
          }
        });
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          current = (current === 0 ? images.length - 1 : current - 1);
          updateGallery();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          current = (current === images.length - 1 ? 0 : current + 1);
          updateGallery();
        });
      }

      dots.forEach((d) => {
        d.addEventListener('click', () => {
          current = parseInt(d.dataset.idx);
          updateGallery();
        });
      });
    }
  }

  // Keyboard navigation for image slider
  window.addEventListener('keydown', (e) => {
    if (images.length > 1) {
      if (e.key === 'ArrowLeft') {
        const pBtn = document.getElementById('gal-prev');
        if (pBtn) pBtn.click();
      } else if (e.key === 'ArrowRight') {
        const nBtn = document.getElementById('gal-next');
        if (nBtn) nBtn.click();
      }
    }
  });

  // Dynamic Cursor Glow Event Listener for Case Study Cards
  window.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glow-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

})();
