// 教材一覧の絞り込み（キーワード・レベル）と並び替え。JSが無くても一覧はそのまま見える。
(function () {
  var filters = document.getElementById('filters');
  var list = document.getElementById('list');
  if (!filters || !list) return;
  filters.hidden = false;

  var rows = Array.prototype.slice.call(list.querySelectorAll('.row'));
  var empty = document.getElementById('empty');
  var count = document.getElementById('count');
  var q = document.getElementById('q');
  var state = { q: '', level: '', order: 'new' };

  function press(attr, value) {
    filters.querySelectorAll('[' + attr + ']').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute(attr) === value));
    });
  }

  function render() {
    var words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    rows
      .sort(function (a, b) {
        var d = Number(a.dataset.day) - Number(b.dataset.day);
        return state.order === 'new' ? -d : d;
      })
      .forEach(function (row) {
        var text = row.dataset.search.toLowerCase();
        var ok = (!state.level || row.dataset.level === state.level) &&
          words.every(function (w) { return text.indexOf(w) !== -1; });
        row.hidden = !ok;
        if (ok) shown++;
        list.insertBefore(row, empty);
      });
    empty.hidden = shown > 0;
    count.textContent = shown;
  }

  q.addEventListener('input', function () { state.q = q.value; render(); });
  filters.querySelectorAll('[data-level]').forEach(function (b) {
    b.addEventListener('click', function () { state.level = b.dataset.level; press('data-level', state.level); render(); });
  });
  filters.querySelectorAll('[data-order]').forEach(function (b) {
    b.addEventListener('click', function () { state.order = b.dataset.order; press('data-order', state.order); render(); });
  });
})();
