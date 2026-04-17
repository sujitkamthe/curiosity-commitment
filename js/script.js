/* ═══════════════════════════════════════════
   Curiosity & Commitment — Shared JS
   ═══════════════════════════════════════════ */

// ─── Theme Toggle ───
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('cc-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
}

(function initTheme() {
  const saved = localStorage.getItem('cc-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }
})();

// ─── Mobile Menu ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  if (nav && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Close menu on link click
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
});

// ─── Mobile Dropdown Toggle ───
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        e.stopPropagation();
        var dropdown = toggle.closest('.nav-dropdown');
        var wasOpen = dropdown.classList.contains('open');
        document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
        if (!wasOpen) dropdown.classList.add('open');
      }
    });
  });
});

// ─── Nav Scroll Effect ───
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Active Nav Link (page-based) ───
(function setActiveNav() {
  var currentPage = document.body.getAttribute('data-current-page');
  if (!currentPage) return;
  document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index' && href === 'index.html')) {
      link.classList.add('active');
      var dropdown = link.closest('.nav-dropdown');
      if (dropdown) dropdown.classList.add('active');
    }
  });
})();

// ─── Accordion ───
function toggleAccordion(header) {
  var item = header.parentElement;
  var wasOpen = item.classList.contains('open');
  item.parentElement.querySelectorAll('.accordion-item').forEach(function(i) { i.classList.remove('open'); });
  if (!wasOpen) item.classList.add('open');
}

// ─── Tabs ───
function switchTab(event, tabId) {
  var container = event.target.closest('.tabs');
  container.querySelectorAll('.tab-header').forEach(function(h) { h.classList.remove('active'); });
  container.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ─── Fade-In Observer ───
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });
});

// ─── Checklist Persistence (localStorage) ───
document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  checkboxes.forEach(function(cb) {
    var key = 'cc-check-' + cb.id;
    if (localStorage.getItem(key) === 'true') cb.checked = true;
    cb.addEventListener('change', function() {
      localStorage.setItem(key, cb.checked);
      updateProgress();
      updateNextMoves();
    });
  });
  updateProgress();
  updateNextMoves();
});

// ─── Progress Counter (self-assessment page) ───
function updateProgress() {
  var bar = document.getElementById('progressFill');
  var label = document.getElementById('progressLabel');
  if (!bar || !label) return;

  var total = document.querySelectorAll('.checklist-item input[type="checkbox"]').length;
  var checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
  var pct = total > 0 ? Math.round((checked / total) * 100) : 0;

  bar.style.width = pct + '%';
  label.textContent = checked + ' of ' + total + ' (' + pct + '%)';
}

// ─── Next Moves (self-assessment page) ───
function updateNextMoves() {
  var panel = document.getElementById('nextMoves');
  if (!panel) return;

  var candidates = [];
  document.querySelectorAll('section.fade-in').forEach(function(sec) {
    var h2 = sec.querySelector('h2');
    var checklist = sec.querySelector('.checklist');
    if (!h2 || !checklist) return;
    if (/Reading Your Score|Smallest Next Steps/i.test(h2.textContent)) return;

    var linkEl = sec.querySelector('.section-intro a');
    var link = linkEl ? linkEl.getAttribute('href') : null;
    var items = checklist.querySelectorAll('.checklist-item');
    if (items.length === 0) return;

    var checked = 0;
    var firstUnchecked = null;
    items.forEach(function(item) {
      var cb = item.querySelector('input[type="checkbox"]');
      if (cb.checked) { checked++; }
      else if (!firstUnchecked) { firstUnchecked = item.querySelector('label'); }
    });
    if (!firstUnchecked) return;

    candidates.push({
      name: h2.textContent.replace(/\s+/g, ' ').trim(),
      link: link,
      pct: checked / items.length,
      action: firstUnchecked.innerHTML,
      checked: checked,
      total: items.length
    });
  });

  var anyChecked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length > 0;

  if (!anyChecked) {
    panel.innerHTML = '<p style="font-size:0.95rem;margin:0;">Tick some items above to see your three smallest next steps appear here.</p>';
    return;
  }

  if (candidates.length === 0) {
    panel.innerHTML = '<p style="font-size:0.95rem;margin:0;">You\u2019ve ticked everything. Quietly remarkable. Come back in three months \u2014 the bar you hold yourself to should have risen.</p>';
    return;
  }

  candidates.sort(function(a, b) { return a.pct - b.pct; });
  var picks = candidates.slice(0, 3);

  var html = '<p style="margin:0 0 16px;font-size:0.95rem;">Out of the ' + candidates.length + ' area' + (candidates.length === 1 ? '' : 's') + ' with something still open, these look like the smallest, most concrete next steps. Pick <strong>one</strong> \u2014 not all three \u2014 and try it this week.</p>';
  html += '<ol class="next-moves-list">';
  picks.forEach(function(p) {
    html += '<li class="next-move">';
    html += '<div class="next-move-label">' + p.name + ' &middot; ' + p.checked + '/' + p.total + ' ticked</div>';
    html += '<div class="next-move-action">' + p.action + '</div>';
    if (p.link) {
      html += '<a href="' + p.link + '" class="next-move-link">Open the chapter &rarr;</a>';
    }
    html += '</li>';
  });
  html += '</ol>';
  panel.innerHTML = html;
}
