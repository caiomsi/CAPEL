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

  /* Não existe formulário nem back-end: todo contato vai direto para o
     WhatsApp, pelos links <a href="https://wa.me/..."> no index.html.
     Por isso o site funciona em qualquer lugar — inclusive abrindo o
     index.html direto do computador, sem internet para o servidor. */

  /* ---------- ano do rodapé ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
