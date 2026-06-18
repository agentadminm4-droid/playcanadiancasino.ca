/* ========================================
   PlayCanadianCasino.ca v3 - Main JavaScript
   Vanilla JS, no dependencies.
   Handles:
     1. News hero card render (from inline JSON)
     2. Nav scroll-spy
     3. Nav compact-on-scroll
     4. Mobile hamburger + overlay menu
     5. Smooth scroll for in-page anchors
     6. Fade-in on scroll (light version)
   ======================================== */

(function () {
    'use strict';

    // Mark the page as JS-ready so the .fade-in rules can hide elements.
    // If JS is blocked, this class is never added and content stays visible.
    document.documentElement.classList.add('js-fade-ready');

    document.addEventListener('DOMContentLoaded', function () {
        renderNewsHero();
        initNav();
        initMobileMenu();
        initSmoothScroll();
        initFadeIn();
    });

    /* ---------- 1. News hero render (single lead-story layout) ---------- */
    function renderNewsHero() {
        var grid = document.getElementById('news-hero-grid');
        var dataEl = document.getElementById('news-data');
        if (!grid || !dataEl) return;

        var articles;
        try { articles = JSON.parse(dataEl.textContent); }
        catch (e) { console.warn('news-data parse error', e); return; }
        if (!Array.isArray(articles) || !articles.length) return;

        // Render only the most recent article as a large "lead story" card.
        // The remaining articles remain available in #news-data for the
        // "More news" section further down the page, and for future use.
        var lead = articles[0];
        var url = 'blog/' + lead.slug + '.html';

        grid.className = 'news-hero-feature';
        grid.innerHTML =
            '<article class="news-feature">' +
                '<a class="news-feature__media" href="' + url + '" aria-label="' + escapeHtml(lead.title) + '">' +
                    '<img src="' + lead.image + '" alt="' + escapeHtml(lead.title) + '" loading="eager" decoding="async">' +
                '</a>' +
                '<div class="news-feature__body">' +
                    '<span class="news-feature__eyebrow">Latest Story</span>' +
                    '<time class="news-feature__date" datetime="' + lead.date + '">' + formatDate(lead.date) + '</time>' +
                    '<h2 class="news-feature__title"><a href="' + url + '">' + escapeHtml(lead.title) + '</a></h2>' +
                    '<p class="news-feature__excerpt">' + escapeHtml(lead.excerpt) + '</p>' +
                    '<a class="news-feature__cta" href="' + url + '">Read full article →</a>' +
                '</div>' +
            '</article>';
    }

    function truncate(s, words) {
        var parts = s.split(/\s+/);
        return parts.length > words ? parts.slice(0, words).join(' ') + '…' : s;
    }
    function formatDate(iso) {
        try {
            // Parse the ISO date as a LOCAL date (no 'Z' suffix) so the displayed
            // day matches the date in the JSON, not the previous day in timezones
            // west of UTC (e.g. Eastern Time UTC-4 would otherwise show June 11
            // as June 10).
            var parts = iso.split('-');
            var d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
        } catch (e) { return iso; }
    }
    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
        });
    }

    /* ---------- 2 & 3. Nav: scroll-spy + compact-on-scroll ---------- */
    function initNav() {
        var header = document.querySelector('.header');
        var links = document.querySelectorAll('.nav-desktop a[href^="#"]');
        if (!header) return;

        // Map link href -> target section
        var linkMap = {};
        links.forEach(function (a) {
            var id = a.getAttribute('href').slice(1);
            if (id) linkMap[id] = a;
        });
        var sections = Object.keys(linkMap)
            .map(function (id) { return document.getElementById(id); })
            .filter(Boolean);

        var ticking = false;
        function onScroll() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () {
                var y = window.pageYOffset;

                // Compact header
                if (y > 100) header.classList.add('is-scrolled');
                else header.classList.remove('is-scrolled');

                // Scroll-spy: pick the last section whose top is above 1/3 viewport
                var threshold = window.innerHeight * 0.33;
                var current = null;
                for (var i = 0; i < sections.length; i++) {
                    var s = sections[i];
                    var top = s.getBoundingClientRect().top;
                    if (top <= threshold) current = s.id;
                    else break;
                }
                Object.keys(linkMap).forEach(function (id) {
                    linkMap[id].classList.toggle('is-active', id === current);
                });

                ticking = false;
            });
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- 4. Mobile hamburger + overlay ---------- */
    function initMobileMenu() {
        var btn = document.querySelector('.hamburger');
        var overlay = document.querySelector('.mobile-overlay');
        if (!btn || !overlay) return;

        function close() {
            btn.classList.remove('is-open');
            overlay.classList.remove('is-open');
            document.body.style.overflow = '';
            btn.setAttribute('aria-expanded', 'false');
        }
        function open() {
            btn.classList.add('is-open');
            overlay.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            btn.setAttribute('aria-expanded', 'true');
        }
        btn.addEventListener('click', function () {
            overlay.classList.contains('is-open') ? close() : open();
        });
        // Close when a link is clicked
        overlay.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', close);
        });
        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
        });
    }

    /* ---------- 5. Smooth scroll for in-page links ---------- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                var id = a.getAttribute('href');
                if (id.length < 2) return;
                var target = document.getElementById(id.slice(1));
                if (!target) return;
                e.preventDefault();
                var headerH = (document.querySelector('.header') || {}).offsetHeight || 0;
                var y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 8;
                window.scrollTo({ top: y, behavior: 'smooth' });
                history.pushState(null, '', id);
            });
        });
    }

    /* ---------- 6. Fade-in on scroll ---------- */
    function initFadeIn() {
        var els = document.querySelectorAll('.fade-in');
        if (!els.length) return;

        // Fallback for very old browsers (no IntersectionObserver):
        // just make everything visible.
        if (!('IntersectionObserver' in window)) {
            els.forEach(function (e) { e.classList.add('visible'); });
            return;
        }

        // Generous rootMargin so elements get revealed as soon as they're
        // even slightly into the viewport. Without this, content far below
        // the fold stays invisible until the user scrolls.
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px 600px 0px' });
        els.forEach(function (e) { io.observe(e); });
    }
})();
