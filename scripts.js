const ready = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

document.documentElement.classList.add('js');

ready(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open', !expanded);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  const scrollTopButton = document.querySelector('[data-scroll-top]');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }

  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10%' },
      );

      revealTargets.forEach((el) => observer.observe(el));
    }
  }

  const formatNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const animateCounter = (el) => {
      const target = Number(el.dataset.count || 0);
      if (!Number.isFinite(target)) return;
      const prefix = el.dataset.countPrefix || '';
      const suffix = el.dataset.countSuffix || '';
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = `${prefix}${formatNumber(current)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach((el) => {
        const target = Number(el.dataset.count || el.textContent || 0);
        if (!Number.isFinite(target)) return;
        const prefix = el.dataset.countPrefix || '';
        const suffix = el.dataset.countSuffix || '';
        el.textContent = `${prefix}${formatNumber(target)}${suffix}`;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.6 },
      );

      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  const carouselRoot = document.querySelector('[data-carousel]');
  if (carouselRoot) {
    const track = carouselRoot.querySelector('[data-carousel-track]');
    const slides = track ? Array.from(track.children) : [];
    const prevButton = carouselRoot.querySelector('[data-carousel-prev]');
    const nextButton = carouselRoot.querySelector('[data-carousel-next]');
    const dotsContainer = carouselRoot.querySelector('[data-carousel-dots]');
    let activeIndex = 0;
    let autoTimer = null;
    const autoDelay = 9000;

    const updateDots = () => {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('button').forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.setAttribute('aria-selected', String(isActive));
        dot.tabIndex = isActive ? 0 : -1;
      });
    };

    const showSlide = (index, isManual = false) => {
      if (!slides.length) return;
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === activeIndex);
        slide.setAttribute('aria-hidden', slideIndex === activeIndex ? 'false' : 'true');
      });
      updateDots();
      if (isManual) restartAuto();
    };

    const restartAuto = () => {
      if (prefersReducedMotion || !slides.length) return;
      clearTimeout(autoTimer);
      autoTimer = window.setTimeout(() => {
        showSlide(activeIndex + 1);
      }, autoDelay);
    };

    if (dotsContainer && slides.length > 1) {
      dotsContainer.innerHTML = '';
      slides.forEach((_slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'testimonials__dot';
        dot.setAttribute('aria-label', `事例 ${index + 1}`);
        dot.dataset.index = String(index);
        dot.addEventListener('click', () => showSlide(index, true));
        const wrapper = document.createElement('li');
        wrapper.appendChild(dot);
        dotsContainer.appendChild(wrapper);
      });
    }

    prevButton?.addEventListener('click', () => showSlide(activeIndex - 1, true));
    nextButton?.addEventListener('click', () => showSlide(activeIndex + 1, true));

    carouselRoot.addEventListener('pointerenter', () => {
      if (autoTimer) {
        clearTimeout(autoTimer);
      }
    });

    carouselRoot.addEventListener('pointerleave', () => {
      restartAuto();
    });

    showSlide(0);
    restartAuto();
  }

  const langToggle = document.querySelector('[data-lang-toggle]');
  const langNotice = document.querySelector('[data-lang-notice]');
  let langNoticeTimer = null;

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const pressed = langToggle.getAttribute('aria-pressed') === 'true';
      langToggle.setAttribute('aria-pressed', String(!pressed));
      if (!langNotice) return;
      langNotice.hidden = false;
      window.clearTimeout(langNoticeTimer);
      langNoticeTimer = window.setTimeout(() => {
        langNotice.hidden = true;
      }, 6000);
    });
  }

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const feedback = contactForm.querySelector('[data-feedback]');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        if (feedback) {
          feedback.textContent = '入力内容をご確認ください。必須項目が未入力です。';
          feedback.classList.add('is-error');
          feedback.classList.remove('is-success');
        }
        return;
      }

      if (feedback) {
        feedback.textContent = '送信が完了しました。担当者より1営業日以内にご連絡いたします。';
        feedback.classList.add('is-success');
        feedback.classList.remove('is-error');
      }

      contactForm.reset();
    });
  }
});
