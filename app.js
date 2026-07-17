(function () {
  const I = window.Icons;
  const data = window.PORTFOLIO_DATA;

  // ---------- Theme Toggling ----------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');

  const getTheme = () => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      if (themeToggleIcon) themeToggleIcon.innerHTML = I.Sun({ size: 20, cls: 'w-5 h-5 text-yellow-500 transition-all duration-500 rotate-0' });
    } else {
      document.documentElement.classList.remove('dark');
      if (themeToggleIcon) themeToggleIcon.innerHTML = I.Moon({ size: 20, cls: 'w-5 h-5 text-indigo-600 transition-all duration-500 rotate-360' });
    }
    localStorage.setItem('theme', theme);
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // Apply theme immediately
  applyTheme(getTheme());

  // ---------- Inject inline icons ----------
  const setIcon = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  setIcon('nav-menu-icon', I.Menu({ size: 24, cls: 'text-foreground' }));
  setIcon('hero-zap', I.Zap({ size: 20, cls: 'w-5 h-5 group-hover:animate-bounce-gentle' }));
  setIcon('hero-code2', I.Code2({ size: 20, cls: 'w-5 h-5 group-hover:rotate-12 transition-transform duration-300' }));
  setIcon('hero-sparkles', I.Sparkles({ size: 24, cls: 'w-6 h-6 text-primary' }));
  setIcon('hero-code2-2', I.Code2({ size: 24, cls: 'w-6 h-6 text-primary' }));
  setIcon('about-code', I.Code({ size: 24, cls: 'w-6 h-6 text-primary' }));
  setIcon('about-user', I.User({ size: 24, cls: 'w-6 h-6 text-primary' }));
  setIcon('about-brief', I.Briefcase({ size: 24, cls: 'w-6 h-6 text-primary' }));
  setIcon('edu-star', I.Star({ size: 16, cls: 'w-4 h-4 animate-pulse' }));
  setIcon('edu-star2', I.Star({ size: 12, cls: 'w-3 h-3 text-primary animate-pulse' }));
  setIcon('edu-star3', I.Star({ size: 12, cls: 'w-3 h-3 text-primary animate-pulse' }));
  setIcon('edu-star4', I.Star({ size: 12, cls: 'w-3 h-3 text-primary animate-pulse' }));
  setIcon('edu-star5', I.Star({ size: 12, cls: 'w-3 h-3 text-primary animate-pulse' }));
  setIcon('edu-cal', I.Calendar({ size: 16, cls: 'w-4 h-4' }));
  setIcon('edu-pin', I.MapPin({ size: 16, cls: 'w-4 h-4' }));
  setIcon('edu-trophy', I.Trophy({ size: 24, cls: 'w-6 h-6 text-white' }));
  setIcon('edu-cap', I.GraduationCap({ size: 32, cls: 'w-8 h-8' }));
  setIcon('proj-arrow', I.ArrowRight({ size: 16 }));
  setIcon('con-mail', I.Mail({ size: 24, cls: 'h-6 w-6 text-primary' }));
  setIcon('con-phone', I.Phone({ size: 24, cls: 'h-6 w-6 text-primary' }));
  setIcon('con-pin', I.MapPin({ size: 24, cls: 'h-6 w-6 text-primary' }));
  setIcon('con-send', I.Send({ size: 16 }));
  setIcon('foot-up', I.ArrowUp({ size: 20 }));

  // ---------- Navbar ----------
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navDesktop = document.getElementById('nav-desktop');
  const navMobileItems = document.getElementById('nav-mobile-items');
  navItems.forEach((item, index) => {
    const id = item.href.substring(1);
    const a = document.createElement('a');
    a.href = item.href;
    a.dataset.section = id;
    a.className = 'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group flex items-center gap-2 text-foreground/70 hover:text-primary hover:bg-primary/10';
    a.innerHTML = '<span>' + item.name + '</span>';
    navDesktop.appendChild(a);

    const ma = document.createElement('a');
    ma.href = item.href;
    ma.dataset.section = id;
    ma.className = 'group relative px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-110 flex items-center gap-4 stagger-animation text-foreground/80 hover:text-primary hover:glassmorphism';
    ma.style.animationDelay = (index * 0.1) + 's';
    ma.innerHTML = '<span>' + item.name + '</span><div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>';
    ma.addEventListener('click', () => setIsMenuOpen(false));
    navMobileItems.appendChild(ma);
  });

  const navbar = document.getElementById('navbar');
  const navMobile = document.getElementById('nav-mobile');
  const navMenuBtn = document.getElementById('nav-menu-btn');
  const navMenuIcon = document.getElementById('nav-menu-icon');
  let isMenuOpen = false;
  const setIsMenuOpen = (v) => {
    isMenuOpen = v;
    if (isMenuOpen) {
      navMobile.classList.remove('opacity-0', 'pointer-events-none');
      navMenuIcon.innerHTML = I.X({ size: 24, cls: 'text-primary' });
      document.body.classList.add('overflow-hidden');
    } else {
      navMobile.classList.add('opacity-0', 'pointer-events-none');
      navMenuIcon.innerHTML = I.Menu({ size: 24, cls: 'text-foreground' });
      document.body.classList.remove('overflow-hidden');
    }
  };
  navMenuBtn.addEventListener('click', () => setIsMenuOpen(!isMenuOpen));
  document.getElementById('nav-mobile-backdrop').addEventListener('click', () => setIsMenuOpen(false));

  let activeSection = 'hero';
  const updateActiveNav = () => {
    document.querySelectorAll('#nav-desktop a, #nav-mobile-items a').forEach((a) => {
      const on = a.dataset.section === activeSection;
      if (a.parentElement.id === 'nav-desktop') {
        a.className = 'relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 group flex items-center gap-2 ' +
          (on ? 'text-primary shadow-xs' : 'text-foreground/75 hover:text-primary hover:bg-primary/10');
        
        // Handle glow element safely without duplicates
        const existingGlow = a.querySelector('.nav-glow');
        if (on) {
          if (!existingGlow) {
            const glow = document.createElement('div');
            glow.className = 'nav-glow absolute inset-0 bg-primary/15 rounded-full animate-pulse-subtle pointer-events-none -z-10 border border-primary/25';
            a.appendChild(glow);
          }
        } else {
          if (existingGlow) {
            existingGlow.remove();
          }
        }
      } else {
        a.className = 'group relative px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-500 hover:scale-110 flex items-center gap-4 stagger-animation ' +
          (on ? 'text-primary glassmorphism shadow-xl' : 'text-foreground/80 hover:text-primary hover:glassmorphism');
      }
    });
  };

  // ---------- Scroll handling (navbar + progress + active section) ----------
  const progressEl = document.getElementById('scroll-progress');
  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    navbar.classList.toggle('py-2', scrolled);
    navbar.classList.toggle('glassmorphism', scrolled);
    navbar.classList.toggle('py-4', !scrolled);
    navbar.classList.toggle('bg-transparent', !scrolled);

    if (scrolled) {
      navbar.classList.remove('border-transparent');
      navbar.classList.add('border-border/45');
    } else {
      navbar.classList.remove('border-border/45');
      navbar.classList.add('border-transparent');
    }

    const sections = navItems.map((i) => i.href.substring(1));
    const scrollPos = window.scrollY + 100;
    for (const s of sections) {
      const el = document.getElementById(s);
      if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        if (activeSection !== s) { activeSection = s; updateActiveNav(); }
        break;
      }
    }

    const contact = document.getElementById('contact');
    const contactTop = contact ? contact.offsetTop : document.documentElement.scrollHeight;
    const maxScroll = contactTop - window.innerHeight;
    const prog = maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0;
    progressEl.style.width = prog + '%';
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ---------- Star Background ----------
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const starBg = document.getElementById('star-background');
  const generateStars = () => {
    starBg.innerHTML = '';
    const n = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    let html = '';
    for (let i = 0; i < n; i++) {
      const size = seededRandom(i * 1) * 3 + 1;
      const x = seededRandom(i * 2) * 100;
      const y = seededRandom(i * 3) * 100;
      const op = seededRandom(i * 4) * 0.5 + 0.5;
      const dur = seededRandom(i * 5) * 4 + 2;
      html += '<div class="star animate-pulse-subtle" style="width:' + size + 'px;height:' + size + 'px;left:' + x + '%;top:' + y + '%;opacity:' + op + ';animation-duration:' + dur + 's"></div>';
    }
    for (let i = 0; i < 4; i++) {
      const size = seededRandom(i * 10 + 1) * 2 + 1;
      const x = seededRandom(i * 10 + 2) * 100;
      const y = seededRandom(i * 10 + 3) * 20;
      const delay = seededRandom(i * 10 + 4) * 15;
      const dur = seededRandom(i * 10 + 5) * 3 + 3;
      html += '<div class="meteor animate-meteor" style="width:' + (size * 50) + 'px;height:' + (size * 2) + 'px;left:' + x + '%;top:' + y + '%;animation-delay:' + delay + 's;animation-duration:' + dur + 's"></div>';
    }
    starBg.innerHTML = html;
  };
  generateStars();
  let starResizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(starResizeTimeout);
    starResizeTimeout = setTimeout(generateStars, 250);
  });

  // ---------- Hero mouse parallax & Card Glow effect ----------
  const shape1 = document.getElementById('hero-shape-1');
  const shape2 = document.getElementById('hero-shape-2');
  window.addEventListener('mousemove', (e) => {
    // Parallax
    if (shape1 && shape2) {
      const mx = (e.clientX / window.innerWidth) * 100;
      const my = (e.clientY / window.innerHeight) * 100;
      shape1.style.transform = 'translate(' + (mx * 0.02) + 'px,' + (my * 0.02) + 'px)';
      shape2.style.transform = 'translate(' + (mx * -0.01) + 'px,' + (my * -0.01) + 'px)';
    }

    // Interactive Card Glow Coordinates
    const cards = document.querySelectorAll('.glow-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // ---------- Hero Typing Effect ----------
  const heroTyping = document.getElementById('hero-typing');
  if (heroTyping) {
    const roles = [
      'MERN Stack',
      'Full-Stack',
      'React & Node',
      'Responsive Web'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typeSpeed = 120;
    const eraseSpeed = 60;
    const delayBetweenRoles = 2000;

    const typeEffect = () => {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        heroTyping.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
      } else {
        heroTyping.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenRoles);
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeEffect, 300);
      } else {
        setTimeout(typeEffect, isDeleting ? eraseSpeed : typeSpeed);
      }
    };
    typeEffect();
  }

  // ---------- Skills ----------
  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: 'Star', color: 'from-purple-500 to-pink-500' },
    { id: 'frontend', label: 'Frontend', icon: 'Code', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', label: 'Backend', icon: 'Database', color: 'from-green-500 to-emerald-500' },
    { id: 'tools', label: 'Tools', icon: 'Wrench', color: 'from-orange-500 to-red-500' },
  ];
  let activeCategory = 'all';
  const skillFilters = document.getElementById('skill-filters');
  const skillsGrid = document.getElementById('skills-grid');
  const skillRefs = [];
  const visibleSkills = new Set();

  const renderSkillFilters = () => {
    skillFilters.innerHTML = '';
    skillCategories.forEach((cat) => {
      const stats = getCategoryStats(cat.id);
      const btn = document.createElement('button');
      btn.className = 'group relative px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 border border-border bg-card/45 backdrop-blur-md text-foreground/80 hover:text-primary hover:border-primary/40 cursor-pointer flex items-center gap-2 ' +
        (activeCategory === cat.id ? 'bg-primary/10 text-primary border-primary shadow-xs' : '');
      const iconHtml = I[cat.icon]({ size: 16, cls: 'w-4 h-4 ' + (activeCategory === cat.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary') });
      btn.innerHTML = iconHtml + '<span class="text-xs md:text-sm font-semibold">' + cat.label + '</span>' +
        '<span class="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">' + stats.count + '</span>';
      btn.addEventListener('click', () => { activeCategory = cat.id; visibleSkills.clear(); renderSkillFilters(); renderSkills(); });
      skillFilters.appendChild(btn);
    });
  };

  const getCategoryStats = (cat) => {
    const list = cat === 'all' ? data.skills : data.skills.filter((s) => s.category === cat);
    const avg = list.length ? Math.round(list.reduce((a, s) => a + s.level, 0) / list.length) : 0;
    return { count: list.length, avgLevel: avg };
  };

  const skillIconHtml = (skill) => {
    if (!skill.icon) return '';
    if (skill.icon.indexOf('.') !== -1) {
      return '<img src="' + skill.icon + '" alt="' + skill.name + '" class="w-6 h-6 md:w-8 md:h-8" />';
    }
    if (window.ReactIcons[skill.icon]) return '<div class="w-6 h-6 md:w-8 md:h-8 text-primary flex items-center justify-center">' + window.ReactIcons[skill.icon] + '</div>';
    return '';
  };

  const renderSkills = () => {
    const filtered = data.skills.filter((s) => activeCategory === 'all' || s.category === activeCategory);
    skillRefs.length = 0;
    skillsGrid.innerHTML = '';
    filtered.forEach((skill, index) => {
      const card = document.createElement('div');
      const isVisible = visibleSkills.has(index);
      card.className = 'glow-card group relative p-3 md:p-6 rounded-2xl transition-all duration-700 ease-out ' +
        (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4');
      card.style.transitionDelay = (index * 0.05) + 's';
      card.dataset.index = index;
      const award = skill.level >= 90 ? '<div class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[18px] md:w-[24px] h-[18px] md:h-[24px] bg-primary rounded-full flex items-center justify-center shadow-md border border-background z-20 animate-pulse-subtle">' + I.Award({ size: 14, cls: 'w-[10px] md:w-[14px] h-[10px] md:h-[14px] text-white' }) + '</div>' : '';
      const r = 40, circ = 2 * Math.PI * r;
      const offset = isVisible ? (circ * (1 - skill.level / 100)) : circ;
      const levelLabel = skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner';
      card.innerHTML =
        '<div class="flex items-center gap-2.5 md:gap-3.5 mb-3 md:mb-4 relative z-10"><div class="relative"><div class="w-9 h-9 md:w-11 md:h-11 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">' + skillIconHtml(skill) + '</div>' + award + '</div>' +
        '<div class="flex-1 text-left"><h3 class="font-bold text-xs sm:text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">' + skill.name + '</h3><span class="text-[9px] md:text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">' + skill.category + '</span></div></div>' +
        '<div class="relative flex items-center justify-center my-4 md:my-6 relative z-10"><svg class="transform -rotate-90 w-22 h-22 sm:w-26 sm:h-26 md:w-32 md:h-32" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="6" fill="transparent" class="text-primary/5 dark:text-primary/10"/><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="6" fill="transparent" stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '" class="text-primary transition-all duration-1000 ease-out circular-progress-ring" style="transition-delay:' + (index * 0.05) + 's"/></svg>' +
        '<div class="absolute inset-0 flex flex-col items-center justify-center"><span class="text-sm sm:text-base md:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">' + skill.level + '%</span><span class="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">' + levelLabel + '</span></div></div>' +
        '<div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>';
      skillsGrid.appendChild(card);
      skillRefs.push(card);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index);
          visibleSkills.add(idx);
          const c = entry.target;
          c.classList.remove('opacity-0', 'translate-y-4');
          c.classList.add('opacity-100', 'translate-y-0');
          const ring = c.querySelector('.circular-progress-ring');
          if (ring) {
            const level = filtered[idx].level;
            const r2 = 40;
            const circ2 = 2 * Math.PI * r2;
            ring.style.strokeDashoffset = (circ2 * (1 - level / 100)).toString();
          }
          observer.unobserve(c);
        }
      });
    }, { threshold: 0.1 });
    skillRefs.forEach((r) => observer.observe(r));
  };
  renderSkillFilters();
  renderSkills();

  // ---------- Projects ----------
  const projectsGrid = document.getElementById('projects-grid');
  const projCard = (p) => {
    const desc = p.overview.substring(0, 110) + '...';
    // Get frontend or backend techs as badges
    const tags = (p.techStacks && p.techStacks.frontend ? p.techStacks.frontend.slice(0, 3) : []);
    const tagHtml = tags.map((t) => '<span class="px-2.5 py-1 text-[11px] font-semibold bg-primary/5 text-primary rounded-full border border-primary/10">' + t + '</span>').join('');
    return '<div class="glow-card group rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300">' +
      '<div class="h-52 md:h-56 overflow-hidden relative">' +
      '<img src="' + (p.images[0] || 'assets/placeholder.svg') + '" alt="' + p.title + '" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-out">' +
      '<div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>' +
      '</div>' +
      '<div class="p-6 flex flex-col flex-1 text-left relative z-10">' +
      '<div class="flex flex-wrap gap-1.5 mb-4">' + tagHtml + '</div>' +
      '<h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">' + p.title + '</h3>' +
      '<p class="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">' + desc + '</p>' +
      '<div class="flex justify-between items-center mt-auto pt-4 border-t border-border/30">' +
      '<div class="flex space-x-2.5">' +
      (p.demoUrl ? '<a href="' + p.demoUrl + '" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-card/60 backdrop-blur-md rounded-full border border-border/45 text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-300 flex items-center justify-center" title="Live Demo">' + I.ExternalLink({ size: 18 }) + '</a>' : '') +
      (p.githubUrl ? '<a href="' + p.githubUrl + '" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-card/60 backdrop-blur-md rounded-full border border-border/45 text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-300 flex items-center justify-center" title="GitHub Repository">' + I.Github({ size: 18 }) + '</a>' : '') +
      '</div>' +
      '<a class="btn-secondary flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105" href="project-details?id=' + p.id + '" title="View Project Case Study">' +
      I.Eye({ size: 14 }) + '<span class="leading-none">View Case Study</span></a>' +
      '</div>' +
      '</div>' +
      '<div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>' +
      '</div>';
  };
  if (projectsGrid) {
    projectsGrid.innerHTML = data.projects.map(projCard).join('');
  }

  // ---------- Contact form + toast ----------
  const toastContainer = document.getElementById('toast-container');
  const showToast = (title, desc, destructive) => {
    const t = document.createElement('div');
    t.className = 'px-4 py-3 rounded-lg shadow-lg border ' + (destructive ? 'bg-red-600 text-white' : 'bg-card text-foreground border-border');
    t.innerHTML = '<div class="font-semibold text-sm">' + title + '</div>' + (desc ? '<div class="text-xs opacity-80">' + desc + '</div>' : '');
    toastContainer.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 4000);
  };

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending Message...</span>';

    const done = (ok) => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Send Message</span><span id="con-send"></span>';
      setIcon('con-send', I.Send({ size: 16 }));
      if (ok) {
        showToast('Message Sent Successfully!', "Thank you for reaching out. I will get back to you shortly.");
        form.reset();
      } else {
        showToast('Message Failed', 'Could not send message. Please try again or email me directly.', true);
      }
    };

    const payload = {
      name: form.elements['name'].value,
      email: form.elements['email'].value,
      message: form.elements['message'].value,
      time: new Date().toLocaleString()
    };

    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async (r) => {
        let data = {};
        try { data = await r.json(); } catch (_) {}
        if (r.ok && data.ok) return done(true);
        console.error('send-email failed:', r.status, data.error);
        done(false);
      })
      .catch((err) => { console.error('send-email request error:', err); done(false); });
  });
})();
