const ready = (callback) => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

document.documentElement.classList.add('js');

ready(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile navigation toggle
  const toggle = document.querySelector('.site-nav__toggle');
  const nav = document.querySelector('.site-nav__links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('site-nav__links--open');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 800 && nav.classList.contains('site-nav__links--open')) {
        nav.classList.remove('site-nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reveal on scroll animations
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.2,
      });

      revealTargets.forEach((target) => revealObserver.observe(target));
    }
  }

  // Hero counters
  const formatNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if (prefersReducedMotion) {
      counters.forEach((el) => {
        const targetValue = parseInt(el.dataset.count || '0', 10);
        if (!Number.isFinite(targetValue)) return;
        const prefix = el.dataset.countPrefix || '';
        const suffix = el.dataset.countSuffix || '';
        el.textContent = `${prefix}${formatNumber(targetValue)}${suffix}`;
      });
    } else {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const targetValue = parseInt(el.dataset.count || '0', 10);
          if (!Number.isFinite(targetValue) || el.dataset.animated) {
            observer.unobserve(el);
            return;
          }

          const prefix = el.dataset.countPrefix || '';
          const suffix = el.dataset.countSuffix || '';
          const duration = 1800;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(targetValue * eased);
            el.textContent = `${prefix}${formatNumber(current)}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.dataset.animated = 'true';
              observer.unobserve(el);
            }
          };

          requestAnimationFrame(step);
        });
      }, { threshold: 0.4 });

      counters.forEach((counter) => counterObserver.observe(counter));
    }
  }

  // News carousel
  const carouselRoot = document.querySelector('[data-news-carousel]');
  if (carouselRoot) {
    const highlight = carouselRoot.querySelector('.news__highlight');
    const items = highlight ? Array.from(highlight.querySelectorAll('.news__item')) : [];
    const prevBtn = carouselRoot.querySelector('[data-news-prev]');
    const nextBtn = carouselRoot.querySelector('[data-news-next]');
    const bulletsList = carouselRoot.querySelector('.news__bullets');
    let activeIndex = 0;
    let autoTimer;
    const rotationDelay = 10000;

    const updateActive = (index, manual = false) => {
      if (!items.length) return;
      const targetIndex = (index + items.length) % items.length;
      if (targetIndex === activeIndex && !manual) return;

      items.forEach((item, itemIndex) => {
        const isActive = itemIndex === targetIndex;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-hidden', String(!isActive));
      });

      const bulletButtons = bulletsList ? bulletsList.querySelectorAll('button[data-news-index]') : [];
      bulletButtons.forEach((button) => {
        const isActive = Number(button.dataset.newsIndex) === targetIndex;
        button.setAttribute('aria-selected', String(isActive));
        button.tabIndex = isActive ? 0 : -1;
      });

      activeIndex = targetIndex;
      restartAuto();
    };

    const restartAuto = () => {
      if (prefersReducedMotion || !items.length) return;
      window.clearTimeout(autoTimer);
      autoTimer = window.setTimeout(() => {
        updateActive(activeIndex + 1);
      }, rotationDelay);
    };

    if (bulletsList) {
      bulletsList.innerHTML = '';
      items.forEach((item, index) => {
        const title = item.querySelector('h3')?.textContent?.trim() || `ニュース${index + 1}`;
        const panelId = item.id || `news-panel-${index}`;
        const tabId = `news-tab-${index}`;
        item.id = panelId;
        item.setAttribute('role', item.getAttribute('role') || 'tabpanel');
        item.setAttribute('aria-labelledby', tabId);
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = title.length > 10 ? `${title.slice(0, 10)}…` : title;
        button.dataset.newsIndex = String(index);
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        button.id = tabId;
        button.setAttribute('aria-controls', panelId);
        button.tabIndex = index === 0 ? 0 : -1;
        button.addEventListener('click', () => updateActive(index, true));
        button.addEventListener('focus', () => restartAuto());
        const listItem = document.createElement('li');
        listItem.appendChild(button);
        bulletsList.appendChild(listItem);
      });
    }

    prevBtn?.addEventListener('click', () => updateActive(activeIndex - 1, true));
    nextBtn?.addEventListener('click', () => updateActive(activeIndex + 1, true));

    carouselRoot.addEventListener('pointerenter', () => {
      if (autoTimer) {
        window.clearTimeout(autoTimer);
      }
    });

    carouselRoot.addEventListener('pointerleave', () => {
      restartAuto();
    });

    updateActive(0);
  }

  // Insights board mock data
  const insightsBoard = document.querySelector('[data-insights-board]');
  if (insightsBoard) {
    const now = new Date();
    const formatTime = (minutesFromNow) => {
      const date = new Date(now.getTime() + minutesFromNow * 60000);
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')} 発`;
    };

    const dataset = [
      { name: '東京本社', departIn: -15, load: 82, status: '通常運行', badge: 'ok' },
      { name: '名古屋支店', departIn: 5, load: 96, status: '増便対応', badge: 'alert' },
      { name: '大阪ハブ', departIn: 20, load: 74, status: '余裕あり', badge: 'ok' },
      { name: '福岡物流センター', departIn: -5, load: 88, status: '積み合わせ可', badge: 'warning' },
    ];

    const buildList = dataset.map((item) => {
      const badgeClass = `insights__badge insights__badge--${item.badge}`;
      const departLabel = item.departIn >= 0 ? `出発予定 ${formatTime(item.departIn)}` : `出発済 ${formatTime(item.departIn)}`;
      const loadLabel = `積載率 ${item.load}%`;
      const capacityLabel = item.load >= 95 ? '残り1台' : item.load >= 85 ? '残り2台' : '余裕あり';

      return `
        <li>
          <span>${item.name}<small>${departLabel}</small></span>
          <span>${loadLabel}<small>${capacityLabel}</small></span>
          <span class="${badgeClass}">${item.status}</span>
        </li>
      `;
    }).join('');

    insightsBoard.innerHTML = `
      <p>各拠点の稼働状況は AI 配車システムと連携して毎朝 6 時に更新されます。</p>
      <ul>${buildList}</ul>
    `;
  }

  // Contact form feedback (mock submission)
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const feedback = contactForm.querySelector('.contact-form__feedback');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        if (feedback) {
          feedback.textContent = '入力内容をご確認ください。必須項目が未入力です。';
          feedback.classList.remove('is-success');
          feedback.classList.add('is-error');
        }
        return;
      }

      if (feedback) {
        feedback.textContent = '送信が完了しました。担当者より 1 営業日以内にご連絡いたします。';
        feedback.classList.remove('is-error');
        feedback.classList.add('is-success');
      }
      contactForm.reset();
    });
  }
});
