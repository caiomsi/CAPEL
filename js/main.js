/* =================================================================
   CAPEL — comportamento da página
   DOM puro, sem módulos. Toda busca no DOM é verificada antes do uso.
   ================================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: fundo ao rolar ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- nav: menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha ao navegar para uma âncora
    links.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  }

  /* ---------- vídeo do hero ----------
     autoplay+muted+playsinline cobre a maioria dos navegadores, mas
     iOS em modo de economia de bateria recusa mesmo assim. Se recusar,
     o poster continua no lugar — nada quebra. Com "reduzir movimento"
     ligado, o vídeo nem toca. */
  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    if (reduceMotion) {
      heroVideo.removeAttribute('autoplay');
      heroVideo.pause();
    } else {
      var attempt = heroVideo.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(function () { /* poster assume o lugar */ });
      }
    }
  }

  /* ---------- reveal ao rolar ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(revealables, function (el) {
        el.classList.add('visible');
      });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      Array.prototype.forEach.call(revealables, function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---------- formulário de contato ----------
     Vai para o backend compartilhado MSI-Forms. A origem
     caiomsi.github.io já está liberada; o campo "site" separa os leads
     da CAPEL dos outros projetos hospedados no mesmo domínio. */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#cf-name');
      var email = form.querySelector('#cf-email');
      var message = form.querySelector('#cf-message');
      var service = form.querySelector('#cf-service');
      var company = form.querySelector('#cf-company');
      if (!name || !email || !message) return;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        setStatus('— Preencha nome, contato e mensagem.');
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      setStatus('— Enviando…');

      // O serviço escolhido entra no corpo da mensagem para não depender
      // de um campo novo no backend.
      var body = service && service.value
        ? '[' + service.value + '] ' + message.value.trim()
        : message.value.trim();

      fetch('https://forms.caiomsi.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: 'capel',
          name: name.value.trim(),
          email: email.value.trim(),
          message: body,
          company: company ? company.value : ''
        })
      })
        .then(function (res) { return res.json().catch(function () { return {}; }); })
        .then(function (data) {
          if (data && data.ok) {
            form.reset();
            setStatus('— Recebido. Respondemos rápido.');
          } else {
            setStatus('— ' + ((data && data.error) || 'Algo deu errado. Tenta de novo?'));
          }
        })
        .catch(function () {
          setStatus('— Falha de conexão. Tenta de novo em instantes.');
        })
        .finally(function () {
          if (button) button.disabled = false;
        });
    });
  }

  /* ---------- ano do rodapé ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
