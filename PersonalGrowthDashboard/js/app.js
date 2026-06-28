let state = JSON.parse(localStorage.getItem('pgd_state') || '{}');
state = Object.assign({
  streak: 0,
  lastActiveDate: null,
  eqCount: 0,
  techCount: 0,
  newsRead: 0,
  mood: null,
  moodDate: null,
  journal: [],
  tasks: null,
  pathProgress: {},
  challengeIndex: 0,
  scenarioIndex: 0,
  readNews: [],
  expandedPath: null,
  answeredChallenges: {},
  answeredScenarios: {},
}, state);

function saveState() {
  localStorage.setItem('pgd_state', JSON.stringify(state));
}

/* ============================================================
   STREAK TRACKING
============================================================ */
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.lastActiveDate === yesterday.toDateString()) {
      state.streak++;
    } else if (!state.lastActiveDate) {
      state.streak = 1;
    } else if (state.lastActiveDate !== today) {
      state.streak = 1;
    }
    state.lastActiveDate = today;
    // 跨天重置今日隨機換題的記錄
    if (state.todayScenarioPlayIdx !== undefined) delete state.todayScenarioPlayIdx;
    if (state.todayChallengePlayIdx !== undefined) delete state.todayChallengePlayIdx;
    saveState();
  }
}

function getTodayScenarioIdx() {
  const d = new Date();
  const dateSeed = d.getFullYear() * 365 + d.getMonth() * 31 + d.getDate();
  return (dateSeed + 5) % EQ_SCENARIOS.length;
}

function getTodayScenarioIdxToPlay() {
  if (state.todayScenarioPlayIdx !== undefined) {
    return state.todayScenarioPlayIdx;
  }
  const todayIdx = getTodayScenarioIdx();
  if (state.answeredScenarios && state.answeredScenarios[todayIdx] !== undefined) {
    for (let i = 1; i < EQ_SCENARIOS.length; i++) {
      const nextIdx = (todayIdx + i) % EQ_SCENARIOS.length;
      if (state.answeredScenarios[nextIdx] === undefined) {
        return nextIdx;
      }
    }
  }
  return todayIdx;
}

let currentScenarioIdx = getTodayScenarioIdxToPlay();

function renderScenario(idx) {
  const s = EQ_SCENARIOS[idx];
  document.getElementById('scenarioProgress').innerHTML =
    `第 <strong>${idx + 1}</strong> 題，共 ${EQ_SCENARIOS.length} 題`;

  const todayScenarioIdx = getTodayScenarioIdxToPlay();
  const isToday = idx === todayScenarioIdx;
  const backBtn = document.getElementById('btnBackToTodayScenario');
  if (backBtn) {
    backBtn.style.display = isToday ? 'none' : 'inline-block';
  }
  const titleEl = document.getElementById('scenarioChallengeTitle');
  if (titleEl) {
    titleEl.innerHTML = isToday ? '🎯 今日情境挑戰' : '🔍 題庫自主練習';
  }

  const prevScenarioBtn = document.getElementById('btnPrevScenario');
  const nextScenarioBtn = document.getElementById('btnNextScenario');
  if (prevScenarioBtn) prevScenarioBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
  if (nextScenarioBtn) nextScenarioBtn.style.visibility = idx === EQ_SCENARIOS.length - 1 ? 'hidden' : 'visible';

  const answeredOpt = state.answeredScenarios ? state.answeredScenarios[idx] : undefined;
  const hasAnswered = answeredOpt !== undefined;

  // 診斷日誌，方便 F12 調試
  console.log(`[Diagnostic] Scenario ${idx}: isToday=${isToday}, hasAnswered=${hasAnswered}, todayIdx=${todayScenarioIdx}`);

  const shuffleBtn = document.getElementById('btnShuffleScenario');
  if (shuffleBtn) {
    shuffleBtn.style.display = (isToday && !hasAnswered) ? 'inline-block' : 'none';
  }

  const container = document.getElementById('scenarioContainer');
  container.innerHTML = `
    <div class="scenario-card">
      <div class="flex-center gap-8 mb-16" style="gap:8px;margin-bottom:14px">
        <span class="tag tag-orange">情境 ${idx + 1}</span>
        <span style="font-size:16px;font-weight:700">${s.title}</span>
      </div>
      <div class="scenario-situation">
        <strong>📋 情境描述</strong>
        ${s.situation}
      </div>
      <div class="scenario-options">
        ${s.options.map((o, i) => {
          let btnClass = 'option-btn';
          let disabledAttr = hasAnswered ? 'disabled' : '';
          if (hasAnswered) {
            const correctIndex = s.options.findIndex(x => x.correct);
            if (i === correctIndex) btnClass += ' correct';
            else if (i === answeredOpt) btnClass += ' wrong';
          }
          return `
            <button class="${btnClass}" id="opt_${idx}_${i}" onclick="selectOption(${idx}, ${i})" ${disabledAttr}>
              <span class="option-label">${String.fromCharCode(65+i)}</span>
              ${o.text}
            </button>
          `;
        }).join('')}
      </div>
      <div class="scenario-result ${hasAnswered ? 'show' : ''}" id="result_${idx}">
        <strong>✅ 解析</strong>
        ${s.explanation}
      </div>
    </div>
  `;

  // 渲染歷史已答清單方便快速選取複習
  renderScenarioHistory();
}

function selectOption(scenarioIdx, optionIdx) {
  const s = EQ_SCENARIOS[scenarioIdx];
  
  if (!state.answeredScenarios) state.answeredScenarios = {};
  state.answeredScenarios[scenarioIdx] = optionIdx;
  state.eqCount = Object.keys(state.answeredScenarios).length;
  state.scenarioIndex = scenarioIdx;
  saveState();
  updateProgress();

  s.options.forEach((_, i) => {
    const btn = document.getElementById(`opt_${scenarioIdx}_${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === s.options.findIndex(o => o.correct)) btn.classList.add('correct');
      else if (i === optionIdx && !s.options[optionIdx].correct) btn.classList.add('wrong');
    }
  });

  const resultEl = document.getElementById(`result_${scenarioIdx}`);
  if (resultEl) resultEl.classList.add('show');
  
  showToast('🧠 EQ 練習完成！', '#a78bfa');

  // 若答的是當天的每日情境題，則將首頁任務 t1 標記完成
  const todayScenario = getTodayScenarioIdxToPlay();
  if (scenarioIdx === todayScenario) {
    const t = state.tasks?.items?.find(x => x.id === 't1');
    if (t) { t.done = true; saveState(); renderTasks(); }
  }

  // 答完後隱藏換一題按鈕
  const shuffleBtn = document.getElementById('btnShuffleScenario');
  if (shuffleBtn) shuffleBtn.style.display = 'none';
  
  // 即時更新歷史答題清單
  renderScenarioHistory();
}

function nextScenario() {
  currentScenarioIdx = (currentScenarioIdx + 1) % EQ_SCENARIOS.length;
  renderScenario(currentScenarioIdx);
}

function prevScenario() {
  currentScenarioIdx = (currentScenarioIdx - 1 + EQ_SCENARIOS.length) % EQ_SCENARIOS.length;
  renderScenario(currentScenarioIdx);
}

function shuffleScenario() {
  const unanswered = [];
  EQ_SCENARIOS.forEach((s, idx) => {
    if (state.answeredScenarios[idx] === undefined) {
      unanswered.push(idx);
    }
  });

  const choices = unanswered.filter(idx => idx !== currentScenarioIdx);
  const finalChoices = choices.length > 0 ? choices : unanswered;

  if (finalChoices.length === 0) {
    showToast('⚠️ 您已完成所有情境挑戰，無法更換！', '#f87171');
    return;
  }

  const randIdx = finalChoices[Math.floor(Math.random() * finalChoices.length)];
  state.todayScenarioPlayIdx = randIdx;
  saveState();

  const t = state.tasks?.items?.find(x => x.id === 't1');
  if (t) { t.done = false; saveState(); renderTasks(); }

  currentScenarioIdx = randIdx;
  renderScenario(currentScenarioIdx);
  showToast('🔄 已為您更換今日挑戰情境！', '#a78bfa');
}

function renderScenarioHistory() {
  const container = document.getElementById('scenarioHistoryList');
  if (!container) return;

  const answeredIndices = Object.keys(state.answeredScenarios || {})
    .map(Number)
    .filter(idx => idx >= 0 && idx < EQ_SCENARIOS.length);

  if (answeredIndices.length === 0) {
    container.innerHTML = '';
    return;
  }

  answeredIndices.sort((a, b) => a - b);

  container.innerHTML = `
    <div class="history-list-section">
      <div class="history-title">📖 歷史答題回顧（點擊直接複習）</div>
      <div class="history-grid">
        ${answeredIndices.map(idx => {
          const s = EQ_SCENARIOS[idx];
          if (!s) return '';
          const answeredOpt = state.answeredScenarios[idx];
          const isCorrect = s.options[answeredOpt]?.correct;
          return `
            <div class="history-item" onclick="goToScenarioDirect(${idx})">
              <span>情境 ${idx + 1}：${s.title}</span>
              <span class="history-status ${isCorrect ? 'correct' : 'wrong'}">
                ${isCorrect ? '✅ 答對' : '❌ 答錯'}
              </span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function goToScenarioDirect(idx) {
  currentScenarioIdx = idx;
  renderScenario(currentScenarioIdx);
  setTimeout(() => {
    document.getElementById('scenarioProgress')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

function initEQ() {
  currentScenarioIdx = getTodayScenarioIdxToPlay();
  renderScenario(currentScenarioIdx);
  renderTechniques();
  renderJournal();
}

/* ============================================================
   NAVIGATION
============================================================ */
function navigate(pageId) {
  // 偵測是否跨天，若是則重新載入今日任務與題目
  const today = new Date().toDateString();
  if (state.tasks && state.tasks.date !== today) {
    initTasks();
    initEQ();
    initTech();
    updateStreak();
    initDashboard();
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + pageId)?.classList.add('active');
  document.getElementById('nav-' + pageId)?.classList.add('active');
  document.querySelectorAll(`.mobile-nav-item[data-page="${pageId}"]`).forEach(el => el.classList.add('active'));

  if (pageId === 'news') loadNews();
  closeSidebar();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.page));
});

document.querySelectorAll('.mobile-nav-item').forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.page));
});

/* Tabs */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const tabId = this.dataset.tab;
    const parent = this.closest('section');
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('tab-' + tabId)?.classList.add('active');
  });
});

/* Mobile sidebar */
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('show');
});

document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, color = '#34d399') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = color;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ============================================================
   DASHBOARD
============================================================ */
function initDashboard() {
  // Greeting
  const h = new Date().getHours();
  const greet = h < 12 ? '早安！☀️' : h < 18 ? '午安！🌤️' : '晚安！🌙';
  document.getElementById('greetingText').textContent = greet;

  // Date
  const now = new Date();
  document.getElementById('dateDay').textContent = now.getDate();
  document.getElementById('dateStr').textContent =
    now.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', weekday: 'long' });

  // Stats
  document.getElementById('statStreak').textContent = state.streak;
  document.getElementById('statEQ').textContent = state.eqCount;
  document.getElementById('statTech').textContent = state.techCount;
  document.getElementById('statNews').textContent = state.newsRead;
  document.getElementById('streakDisplay').textContent = state.streak;

  // Quote
  const q = QUOTES[new Date().getDate() % QUOTES.length];
  document.getElementById('quoteText').textContent = q.text;
  document.getElementById('quoteAuthor').textContent = '— ' + q.author;

  // Mood
  const todayStr = new Date().toDateString();
  if (state.moodDate === todayStr && state.mood) {
    document.querySelectorAll('.mood-btn').forEach(b => {
      if (b.dataset.mood === state.mood) b.classList.add('selected');
    });
    document.getElementById('moodSaved').textContent = '今日情緒已記錄 ' + state.mood;
  }

  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      state.mood = this.dataset.mood;
      state.moodDate = new Date().toDateString();
      document.getElementById('moodSaved').textContent = '今日情緒已記錄 ' + state.mood;
      saveState();
      showToast('情緒已記錄！');
    });
  });

  // Tasks
  initTasks();
  // Progress
  updateProgress();
}

function getAllPathItems() {
  const items = [];
  CSHARP_PATH.forEach((sec, si) => {
    sec.items.forEach((item, ii) => {
      items.push({ key: `cs_${si}_${ii}`, name: item.name, data: item });
    });
  });
  JS_PATH.forEach((sec, si) => {
    sec.items.forEach((item, ii) => {
      items.push({ key: `js_${si}_${ii}`, name: item.name, data: item });
    });
  });
  return items;
}

function getTodaySeed() {
  const d = new Date();
  return d.getFullYear() * 365 + d.getMonth() * 31 + d.getDate();
}

function getTodayRecommend(allItems) {
  const uncompleted = allItems.filter(item => !state.pathProgress[item.key]);
  if (uncompleted.length === 0) return null;
  const seed = getTodaySeed();
  const idx = seed % uncompleted.length;
  return uncompleted[idx];
}

function getTodayReview(allItems) {
  const completed = allItems.filter(item => state.pathProgress[item.key]);
  if (completed.length === 0) return null;
  const seed = getTodaySeed() + 7;
  const idx = seed % completed.length;
  return completed[idx];
}

function goToPathItem(key) {
  navigate('tech');
  const tabId = key.startsWith('cs') ? 'csharp-path' : 'js-path';
  const tabBtn = document.querySelector(`#page-tech .tab[data-tab="${tabId}"]`);
  if (tabBtn) {
    const parent = tabBtn.closest('section');
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tabBtn.classList.add('active');
    document.getElementById('tab-' + tabId)?.classList.add('active');
  }

  if (!expandedPaths.has(key)) {
    expandedPaths.add(key);
    renderPath(CSHARP_PATH, 'csharpPath', 'cs');
    renderPath(JS_PATH, 'jsPath', 'js');
  }

  setTimeout(() => {
    const el = document.getElementById('item_' + key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

function initTasks() {
  const today = new Date().toDateString();

  if (!state.tasks || state.tasks.date !== today) {
    const allItems = getAllPathItems();
    const recommend = getTodayRecommend(allItems);
    const review = getTodayReview(allItems);

    const todaySecIdx = getTodayScenarioIdx();
    const isTodayScenarioDone = state.answeredScenarios ? (state.answeredScenarios[todaySecIdx] !== undefined) : false;

    const todayChalIdx = getTodayChallengeIdx();
    const isTodayChallengeDone = state.answeredChallenges ? (state.answeredChallenges[todayChalIdx] !== undefined) : false;

    const defaultItems = [
      { id: 't1', text: '完成 1 個 EQ 情境練習', done: isTodayScenarioDone },
      { id: 't2', text: '記錄今日情緒日誌', done: false },
      { id: 't3', text: '完成 1 道 C# / JS 題目', done: isTodayChallengeDone },
      { id: 't4', text: '閱讀 1 篇技術文章', done: false },
    ];

    if (recommend) {
      const isDone = !!state.pathProgress[recommend.key];
      defaultItems.push({
        id: 't5',
        text: `今日學習：【${recommend.name}】`,
        done: isDone,
        type: 'recommend',
        pathKey: recommend.key
      });
    } else {
      defaultItems.push({
        id: 't5',
        text: '學習路徑：您已完成所有學習主題！🎉',
        done: true
      });
    }

    if (review) {
      const isDone = !!state.pathProgress[review.key] ? false : false; // 複習預設為未完成，待使用者本日點擊打勾
      defaultItems.push({
        id: 't6',
        text: `今日複習：【${review.name}】`,
        done: false,
        type: 'review',
        pathKey: review.key
      });
    } else {
      defaultItems.push({
        id: 't6',
        text: '完成 1 個主題後開啟每日複習 📚',
        done: false,
        disabled: true
      });
    }

    state.tasks = { date: today, items: defaultItems };
    saveState();
  }

  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = state.tasks.items.map(t => {
    let textHtml = `<span>${t.text}</span>`;
    if (t.id === 't1') {
      textHtml = `<span class="task-link" onclick="showPage('eq'); backToTodayScenario();" title="點擊前往今日情境挑戰">${t.text} <small style="color:var(--accent-blue);text-decoration:underline;cursor:pointer;margin-left:4px">前往 ➔</small></span>`;
    } else if (t.id === 't3') {
      textHtml = `<span class="task-link" onclick="showPage('tech'); backToTodayChallenge();" title="點擊前往今日程式題">${t.text} <small style="color:var(--accent-blue);text-decoration:underline;cursor:pointer;margin-left:4px">前往 ➔</small></span>`;
    } else if ((t.type === 'recommend' || t.type === 'review') && t.pathKey && !t.disabled) {
      textHtml = `<span class="task-link" onclick="goToPathItem('${t.pathKey}')" title="點擊直接前往學習">${t.text} <small style="color:var(--accent-blue);text-decoration:underline;cursor:pointer;margin-left:4px">前往 ➔</small></span>`;
    }

    return `
      <div class="task-item">
        <div class="task-check ${t.done ? 'done' : ''} ${t.disabled ? 'disabled' : ''}" onclick="${t.disabled ? '' : `toggleTask('${t.id}')`}"></div>
        <div class="task-text ${t.done ? 'done' : ''}">${textHtml}</div>
      </div>
    `;
  }).join('');
}

function toggleTask(id) {
  const task = state.tasks.items.find(t => t.id === id);
  if (task) { task.done = !task.done; saveState(); renderTasks(); }
}

function resetTodayTasks() {
  state.tasks = null;
  initTasks();

  // 清除今日挑戰題的已答紀錄，方便使用者重新測試
  const todayScenario = getTodayScenarioIdxToPlay();
  const todayChallenge = getTodayChallengeIdxToPlay();
  if (state.answeredScenarios) delete state.answeredScenarios[todayScenario];
  if (state.answeredChallenges) delete state.answeredChallenges[todayChallenge];
  
  // 重置對應的作答計數
  state.eqCount = Object.keys(state.answeredScenarios || {}).length;
  state.techCount = Object.keys(state.answeredChallenges || {}).length;
  
  saveState();

  // 重新渲染當前挑戰題
  renderScenario(currentScenarioIdx);
  renderChallenge(currentChallengeIdx);
  updateProgress();

  showToast('🔄 今日挑戰題已重置為未答！', '#34d399');
}

function updateProgress() {
  const eqPct = Math.min(100, (state.eqCount / 10) * 100);
  const csPct = Math.min(100, (Object.keys(state.pathProgress).filter(k=>k.startsWith('cs')).length / 12) * 100);
  const jsPct = Math.min(100, (Object.keys(state.pathProgress).filter(k=>k.startsWith('js')).length / 11) * 100);

  document.getElementById('progEQ').textContent     = Math.round(eqPct) + '%';
  document.getElementById('progCsharp').textContent = Math.round(csPct) + '%';
  document.getElementById('progJs').textContent     = Math.round(jsPct) + '%';
  setTimeout(() => {
    document.getElementById('fillEQ').style.width     = eqPct + '%';
    document.getElementById('fillCsharp').style.width = csPct + '%';
    document.getElementById('fillJs').style.width     = jsPct + '%';
  }, 100);
}



/* ============================================================
   EQ TECHNIQUES
============================================================ */
function renderTechniques() {
  const grid = document.getElementById('techniqueGrid');
  grid.innerHTML = EQ_TECHNIQUES.map(t => `
    <div class="technique-card">
      <span class="technique-icon">${t.icon}</span>
      <div class="technique-name">${t.name}</div>
      <div class="technique-desc">${t.desc}</div>
      <div class="technique-steps">
        ${t.steps.map((s, i) => `
          <div class="technique-step">
            <span class="step-num">${i+1}</span>
            <span>${s}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ============================================================
   JOURNAL
============================================================ */
function saveJournal() {
  const event   = document.getElementById('journalEvent').value.trim();
  const feel    = document.getElementById('journalFeel').value.trim();
  const reflect = document.getElementById('journalReflect').value.trim();
  if (!event) { showToast('請描述發生的事件！', '#f97316'); return; }

  const entry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('zh-TW', { month:'long', day:'numeric', hour:'2-digit', minute:'2-digit' }),
    event, feel, reflect,
    mood: state.mood || '😐'
  };

  state.journal.unshift(entry);
  if (state.journal.length > 50) state.journal.pop();
  saveState();
  clearJournalForm();
  renderJournal();
  showToast('📔 日誌已儲存！');

  // Check task
  const t = state.tasks?.items?.find(x => x.id === 't2');
  if (t) { t.done = true; saveState(); renderTasks(); }
}

function clearJournalForm() {
  document.getElementById('journalEvent').value = '';
  document.getElementById('journalFeel').value = '';
  document.getElementById('journalReflect').value = '';
}

function renderJournal() {
  const container = document.getElementById('journalEntries');
  if (!state.journal.length) {
    container.innerHTML = '<div class="text-sm text-muted">尚無日誌記錄</div>';
    return;
  }
  container.innerHTML = state.journal.map(e => `
    <div class="journal-entry">
      <div class="journal-entry-header">
        <span style="font-size:20px">${e.mood}</span>
        <span style="font-size:14px;font-weight:600">${e.event.substring(0, 40)}${e.event.length > 40 ? '…' : ''}</span>
        <span class="journal-entry-date">${e.date}</span>
      </div>
      ${e.feel ? `<div class="journal-entry-text">💭 <strong>感受：</strong>${e.feel}</div>` : ''}
      ${e.reflect ? `<div class="journal-entry-text mt-8" style="margin-top:6px">🔄 <strong>反思：</strong>${e.reflect}</div>` : ''}
    </div>
  `).join('');
}

/* ============================================================
   TECH CHALLENGES
============================================================ */
function getTodayChallengeIdx() {
  const d = new Date();
  const dateSeed = d.getFullYear() * 365 + d.getMonth() * 31 + d.getDate();
  return dateSeed % CHALLENGES.length;
}

function getTodayChallengeIdxToPlay() {
  if (state.todayChallengePlayIdx !== undefined) {
    return state.todayChallengePlayIdx;
  }
  const todayIdx = getTodayChallengeIdx();
  if (state.answeredChallenges && state.answeredChallenges[todayIdx] !== undefined) {
    for (let i = 1; i < CHALLENGES.length; i++) {
      const nextIdx = (todayIdx + i) % CHALLENGES.length;
      if (state.answeredChallenges[nextIdx] === undefined) {
        return nextIdx;
      }
    }
  }
  return todayIdx;
}

let currentChallengeIdx = getTodayChallengeIdxToPlay();

function renderChallenge(idx) {
  const c = CHALLENGES[idx];
  document.getElementById('challengeProgress').textContent =
    `第 ${idx + 1} 題，共 ${CHALLENGES.length} 題`;

  const todayChallengeIdx = getTodayChallengeIdxToPlay();
  const isToday = idx === todayChallengeIdx;
  const backBtn = document.getElementById('btnBackToTodayChallenge');
  if (backBtn) {
    backBtn.style.display = isToday ? 'none' : 'inline-block';
  }
  const titleEl = document.getElementById('techChallengeTitle');
  if (titleEl) {
    titleEl.textContent = isToday ? '🎯 今日指定程式題' : '🔍 題庫自主練習';
  }

  const prevChallengeBtn = document.getElementById('btnPrevChallenge');
  const nextChallengeBtn = document.getElementById('btnNextChallenge');
  if (prevChallengeBtn) prevChallengeBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
  if (nextChallengeBtn) nextChallengeBtn.style.visibility = idx === CHALLENGES.length - 1 ? 'hidden' : 'visible';

  const answeredOpt = state.answeredChallenges ? state.answeredChallenges[idx] : undefined;
  const hasAnswered = answeredOpt !== undefined;

  // 診斷日誌，方便 F12 調試
  console.log(`[Diagnostic] Challenge ${idx}: isToday=${isToday}, hasAnswered=${hasAnswered}, todayIdx=${todayChallengeIdx}`);

  const shuffleBtn = document.getElementById('btnShuffleChallenge');
  if (shuffleBtn) {
    shuffleBtn.style.display = (isToday && !hasAnswered) ? 'inline-block' : 'none';
  }

  const container = document.getElementById('challengeContainer');
  container.innerHTML = `
    <div class="challenge-card">
      <div class="challenge-lang">
        <span style="font-size:20px">${c.langIcon}</span>
        <span class="tag" style="background:rgba(${hexToRgb(c.langColor)},0.15);color:${c.langColor}">${c.lang}</span>
      </div>
      <div class="challenge-q">${c.question}</div>
      ${c.code ? `<div class="code-block">${c.code}</div>` : ''}
      <div class="quiz-options">
        ${c.options.map((o, i) => {
          let btnClass = 'quiz-opt';
          let disabledAttr = hasAnswered ? 'disabled' : '';
          if (hasAnswered) {
            if (i === c.correct) btnClass += ' correct';
            else if (i === answeredOpt) btnClass += ' wrong';
          }
          return `
            <button class="${btnClass}" id="qopt_${idx}_${i}" onclick="selectQuizOpt(${idx}, ${i})" ${disabledAttr}>
              <span style="color:var(--text-muted);font-size:11px">${String.fromCharCode(65+i)}.</span> ${o}
            </button>
          `;
        }).join('')}
      </div>
      <div id="quiz-result-${idx}" class="scenario-result ${hasAnswered ? 'show' : ''}" style="background:rgba(79,172,254,0.08);border-color:rgba(79,172,254,0.2)">
        <strong style="color:var(--accent-blue)">💡 解析</strong>
        ${c.explanation}
      </div>
    </div>
  `;

  // 渲染歷史已答清單方便快速選取複習
  renderChallengeHistory();
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

function selectQuizOpt(challengeIdx, optionIdx) {
  const c = CHALLENGES[challengeIdx];
  
  if (!state.answeredChallenges) state.answeredChallenges = {};
  state.answeredChallenges[challengeIdx] = optionIdx;
  state.techCount = Object.keys(state.answeredChallenges).length;
  state.challengeIndex = challengeIdx;
  saveState();
  updateProgress();

  c.options.forEach((_, i) => {
    const btn = document.getElementById(`qopt_${challengeIdx}_${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === c.correct) btn.classList.add('correct');
      else if (i === optionIdx && i !== c.correct) btn.classList.add('wrong');
    }
  });

  const resultEl = document.getElementById(`quiz-result-${challengeIdx}`);
  if (resultEl) resultEl.classList.add('show');
  
  showToast('💻 答題完成！', '#4facfe');

  // 若答的是當天的每日挑戰，則將首頁任務 t3 標記完成
  const todayChallenge = getTodayChallengeIdxToPlay();
  if (challengeIdx === todayChallenge) {
    const t = state.tasks?.items?.find(x => x.id === 't3');
    if (t) { t.done = true; saveState(); renderTasks(); }
  }

  // 答完後隱藏換一題按鈕
  const shuffleBtn = document.getElementById('btnShuffleChallenge');
  if (shuffleBtn) shuffleBtn.style.display = 'none';

  // 即時更新歷史答題清單
  renderChallengeHistory();
}

function nextChallenge() {
  currentChallengeIdx = (currentChallengeIdx + 1) % CHALLENGES.length;
  renderChallenge(currentChallengeIdx);
}

function prevChallenge() {
  currentChallengeIdx = (currentChallengeIdx - 1 + CHALLENGES.length) % CHALLENGES.length;
  renderChallenge(currentChallengeIdx);
}

function shuffleChallenge() {
  const unanswered = [];
  CHALLENGES.forEach((c, idx) => {
    if (state.answeredChallenges[idx] === undefined) {
      unanswered.push(idx);
    }
  });

  const choices = unanswered.filter(idx => idx !== currentChallengeIdx);
  const finalChoices = choices.length > 0 ? choices : unanswered;

  if (finalChoices.length === 0) {
    showToast('⚠️ 您已完成所有程式題，無法更換！', '#f87171');
    return;
  }

  const randIdx = finalChoices[Math.floor(Math.random() * finalChoices.length)];
  state.todayChallengePlayIdx = randIdx;
  saveState();

  const t = state.tasks?.items?.find(x => x.id === 't3');
  if (t) { t.done = false; saveState(); renderTasks(); }

  currentChallengeIdx = randIdx;
  renderChallenge(currentChallengeIdx);
  showToast('🔄 已為您更換今日挑戰程式題！', '#a78bfa');
}

function renderChallengeHistory() {
  const container = document.getElementById('challengeHistoryList');
  if (!container) return;

  const answeredIndices = Object.keys(state.answeredChallenges || {})
    .map(Number)
    .filter(idx => idx >= 0 && idx < CHALLENGES.length);

  if (answeredIndices.length === 0) {
    container.innerHTML = '';
    return;
  }

  answeredIndices.sort((a, b) => a - b);

  container.innerHTML = `
    <div class="history-list-section">
      <div class="history-title">📖 歷史答題回顧（點擊直接複習）</div>
      <div class="history-grid">
        ${answeredIndices.map(idx => {
          const c = CHALLENGES[idx];
          if (!c) return '';
          const answeredOpt = state.answeredChallenges[idx];
          const isCorrect = (answeredOpt === c.correct);
          return `
            <div class="history-item" onclick="goToChallengeDirect(${idx})">
              <span>題目 ${idx + 1}：[${c.lang}] ${c.question.substring(0, 15)}...</span>
              <span class="history-status ${isCorrect ? 'correct' : 'wrong'}">
                ${isCorrect ? '✅ 答對' : '❌ 答錯'}
              </span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function goToChallengeDirect(idx) {
  currentChallengeIdx = idx;
  renderChallenge(currentChallengeIdx);
  setTimeout(() => {
    document.getElementById('techChallengeTitle')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/* ============================================================
   LEARNING PATHS
============================================================ */
const expandedPaths = new Set();

function togglePathExpand(key) {
  const el = document.getElementById('item_' + key);
  if (!el) return;
  if (expandedPaths.has(key)) {
    expandedPaths.delete(key);
    el.classList.remove('expanded');
  } else {
    expandedPaths.add(key);
    el.classList.add('expanded');
  }
}

function renderPath(pathData, containerId, prefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = pathData.map((section, si) => `
    <div class="path-section">
      <div class="path-title">${section.section}</div>
      <div class="path-items">
        ${section.items.map((item, ii) => {
          const key = `${prefix}_${si}_${ii}`;
          const done = !!state.pathProgress[key];
          const isExpanded = expandedPaths.has(key);
          return `
            <div class="path-item ${isExpanded ? 'expanded' : ''}" id="item_${key}">
              <div class="path-item-header" onclick="togglePathExpand('${key}')">
                <div class="path-dot ${done ? 'done' : 'active'}"></div>
                <div class="path-item-body">
                  <div class="path-item-name">${item.name}</div>
                  <div class="path-item-sub">${item.sub}</div>
                </div>
                <div class="path-item-info">
                  <span class="tag ${item.level === '進階' ? 'tag-purple' : 'tag-blue'}">${item.level}</span>
                  <div class="path-item-level" style="margin-top:4px">${done ? '✅ 完成' : '未完成'}</div>
                </div>
                <div class="expand-arrow">▶</div>
              </div>
              <div class="path-item-detail">
                <div class="detail-section">
                  <div class="detail-label">💡 重點概念</div>
                  <div class="keypoints">
                    ${item.keyPoints ? item.keyPoints.map(kp => `
                      <div class="keypoint-item">
                        <span class="kp-dot">✦</span>
                        <span>${kp}</span>
                      </div>
                    `).join('') : ''}
                  </div>
                </div>
                <div class="detail-section">
                  <div class="detail-label">📚 推薦資源</div>
                  <div class="resources">
                    ${item.resources ? item.resources.map(res => `
                      <a class="resource-link" href="${res.url}" target="_blank" rel="noopener">
                        <span class="resource-icon">📖</span>
                        <span>${res.label}</span>
                      </a>
                    `).join('') : ''}
                  </div>
                </div>
                <div class="detail-actions" style="margin-top: 14px; text-align: right;">
                  <button class="btn ${done ? 'btn-ghost' : 'btn-primary'}" onclick="togglePathItem('${key}')" style="font-size:12px; padding:6px 12px">
                    ${done ? '↩️ 標記為未完成' : '✔️ 標記為已完成'}
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function togglePathItem(key) {
  if (state.pathProgress[key]) delete state.pathProgress[key];
  else state.pathProgress[key] = true;
  saveState();
  renderPath(CSHARP_PATH, 'csharpPath', 'cs');
  renderPath(JS_PATH, 'jsPath', 'js');
  updateProgress();

  // 更新今日推薦任務的勾選狀態
  const t5 = state.tasks?.items?.find(x => x.id === 't5');
  if (t5 && t5.pathKey === key) {
    t5.done = !!state.pathProgress[key];
    saveState();
  }
  
  // 更新今日複習任務的勾選狀態
  const t6 = state.tasks?.items?.find(x => x.id === 't6');
  if (t6 && t6.pathKey === key) {
    t6.done = !!state.pathProgress[key];
    saveState();
  }
  
  renderTasks();
  showToast(state.pathProgress[key] ? '✅ 標記完成！' : '↩️ 已取消', '#34d399');
}

function initTech() {
  currentChallengeIdx = getTodayChallengeIdxToPlay();
  renderChallenge(currentChallengeIdx);
  renderPath(CSHARP_PATH, 'csharpPath', 'cs');
  renderPath(JS_PATH, 'jsPath', 'js');
}

function backToTodayScenario() {
  currentScenarioIdx = getTodayScenarioIdxToPlay();
  renderScenario(currentScenarioIdx);
  showToast('🎯 已回到今日情境挑戰！');
}

function backToTodayChallenge() {
  currentChallengeIdx = getTodayChallengeIdxToPlay();
  renderChallenge(currentChallengeIdx);
  showToast('🎯 已回到今日程式題挑戰！');
}

/* ============================================================
   NEWS (RSS via CORS proxy)
============================================================ */
/* ── News API sources (all CORS-friendly, no proxy needed) ── */
let allNewsItems = [];
let currentFilter = 'all';
let newsLoaded = false;

/* 帶 CORS proxy 備援的 JSON 抓取：先直連，失敗再經公開 proxy 重試 */
const NEWS_PROXIES = [
  u => u,
  u => 'https://corsproxy.io/?url=' + encodeURIComponent(u),
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
];
async function fetchJSON(url, timeout = 8000) {
  let lastErr;
  for (const wrap of NEWS_PROXIES) {
    try {
      const res = await fetch(wrap(url), { signal: AbortSignal.timeout(timeout) });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

/* Hacker News: fetch top story IDs then individual items */
async function fetchHackerNews() {
  try {
    const ids = await fetchJSON('https://hacker-news.firebaseio.com/v0/topstories.json');
    const top12 = ids.slice(0, 12);
    const items = await Promise.allSettled(
      top12.map(id => fetchJSON(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, 5000))
    );
    return items
      .filter(r => r.status === 'fulfilled' && r.value && r.value.url)
      .map(r => r.value)
      .map(item => ({
        title: item.title || '無標題',
        link: item.url || `https://news.ycombinator.com/item?id=${item.id}`,
        desc: `👥 ${item.score || 0} 分 | 💬 ${item.descendants || 0} 則留言 | 由 ${item.by || '匿名'} 分享`,
        date: formatDate(new Date(item.time * 1000).toUTCString()),
        source: 'Hacker News',
        tag: 'IT時事',
        color: 'tag-green',
        id: 'hn_' + item.id
      }));
  } catch (e) {
    console.warn('HN fetch failed:', e);
    return [];
  }
}

/* Dev.to API: fetch articles by tag */
async function fetchDevTo(tag, label, color) {
  try {
    const articles = await fetchJSON(`https://dev.to/api/articles?tag=${tag}&per_page=8&top=7`);
    return articles.map(a => ({
      title: a.title || '無標題',
      link: a.url || '#',
      desc: (a.description || '').substring(0, 130) + (a.description?.length > 130 ? '...' : ''),
      date: formatDate(a.published_at),
      source: `Dev.to / ${a.user?.name || ''}`,
      tag: label,
      color: color,
      id: 'devto_' + a.id
    }));
  } catch (e) {
    console.warn('Dev.to fetch failed:', tag, e);
    return [];
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
  } catch { return ''; }
}

function newsErrorHTML(msg) {
  return `
    <div class="news-loading" style="flex-direction:column;gap:14px">
      <div>⚠️ ${msg}</div>
      <button class="btn btn-primary" onclick="loadNews(true)" style="padding:8px 20px">🔄 重新載入</button>
      <div style="font-size:11px;color:var(--text-muted)">提示：直連失敗時會自動嘗試 CORS 代理；若仍失敗請檢查網路連線。</div>
    </div>`;
}

async function loadNews(force = false) {
  if (newsLoaded && !force) return;
  const container = document.getElementById('newsContainer');
  const btn = document.getElementById('refreshBtn');
  if (btn) btn.disabled = true;

  container.innerHTML = `
    <div class="news-loading">
      <div class="spinner"></div>
      正在載入 Hacker News、Dev.to 最新技術資訊...
    </div>
  `;

  try {
    const [hnItems, dotnetItems, jsItems, csharpItems] = await Promise.allSettled([
      fetchHackerNews(),
      fetchDevTo('dotnet', '.NET', 'tag-blue'),
      fetchDevTo('javascript', 'JavaScript', 'tag-orange'),
      fetchDevTo('csharp', '.NET', 'tag-blue'),
    ]);

    allNewsItems = [
      ...(dotnetItems.status === 'fulfilled' ? dotnetItems.value : []),
      ...(csharpItems.status === 'fulfilled' ? csharpItems.value : []),
      ...(jsItems.status === 'fulfilled' ? jsItems.value : []),
      ...(hnItems.status === 'fulfilled' ? hnItems.value : []),
    ];

    if (allNewsItems.length === 0) {
      container.innerHTML = newsErrorHTML('目前抓不到新聞，可能是網路、來源服務暫時無回應，或離線中。');
    } else {
      renderNews();
      newsLoaded = true;
      const t = state.tasks?.items?.find(x => x.id === 't4');
      if (t) { t.done = true; saveState(); renderTasks(); }
    }
  } catch (e) {
    console.warn('loadNews error:', e);
    container.innerHTML = newsErrorHTML('載入時發生問題，請稍後再試。');
  }

  if (btn) btn.disabled = false;
}

function renderNews() {
  const filtered = currentFilter === 'all' ?
    allNewsItems : allNewsItems.filter(n => n.tag === currentFilter);

  const container = document.getElementById('newsContainer');
  if (!filtered.length) {
    container.innerHTML = `<div class="news-loading">此分類目前沒有文章。</div>`;
    return;
  }

  container.innerHTML = `<div class="news-grid">${filtered.map(item => `
    <div class="news-card ${state.readNews.includes(item.id) ? 'read' : ''}" id="nc_${item.id}">
      <div class="news-card-header">
        <div class="news-title"><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></div>
        <button class="news-mark-read" onclick="markRead('${item.id}')" title="標記已讀">
          ${state.readNews.includes(item.id) ? '✅' : '○'}
        </button>
      </div>
      <div class="news-desc">${item.desc}</div>
      <div class="news-footer">
        <span class="tag ${item.color}">${item.tag}</span>
        <span class="news-source">${item.source}</span>
        ${item.date ? `<span class="news-date">${item.date}</span>` : ''}
      </div>
    </div>
  `).join('')}</div>`;
}

function filterNews(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (allNewsItems.length) renderNews();
}

function markRead(id) {
  if (!state.readNews.includes(id)) {
    state.readNews.push(id);
    state.newsRead++;
    saveState();
    document.getElementById('statNews').textContent = state.newsRead;
  }
  const card = document.getElementById('nc_' + id);
  if (card) { card.classList.add('read'); card.querySelector('.news-mark-read').textContent = '✅'; }
  showToast('📰 已標記已讀');
}

/* ============================================================
   INIT
============================================================ */
function init() {
  updateStreak();
  initDashboard();
  initEQ();
  initTech();
}

init();

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    const today = new Date().toDateString();
    if (state.tasks && state.tasks.date !== today) {
      initTasks();
      initEQ();
      initTech();
      updateStreak();
      initDashboard();
    }
  }
});
