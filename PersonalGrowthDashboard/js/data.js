/* ============================================================
   DATA: EQ SCENARIOS
============================================================ */
const EQ_SCENARIOS = [
  {
    id: 's1',
    title: '被主管當眾批評',
    situation: '在週會上，你報告專案進度時，主管突然打斷你說：「這個做法根本是錯的，你難道不知道嗎？」其他同事都在看著你。',
    options: [
      { text: '立刻反駁：「我覺得我的做法是對的，因為……」', correct: false },
      { text: '沉默，然後低頭繼續報告，不回應批評。', correct: false },
      { text: '深呼吸，平靜回應：「謝謝您的指出，我想更了解您的想法，可以會後詳細討論嗎？」', correct: true },
      { text: '說：「好，我知道了。」然後把剩下的簡報跳過。', correct: false },
    ],
    explanation: '✅ 最佳回應是保持冷靜、承認對方的意見，並提出後續討論的邀請。這展現了成熟的情緒管理：不當場對抗（避免激化衝突），也不逃避（說明你願意改善）。這種「緩衝 + 轉移」技巧是高情商溝通的核心。'
  },
  {
    id: 's2',
    title: '同事推卸責任',
    situation: '一個你負責的 Bug 出現在 Production，同事在群組裡說：「這個問題之前 @你 有說過，你當時說不需要改。」但其實你沒有這樣說過。',
    options: [
      { text: '在群組裡大聲反駁：「我根本沒說過！你不要亂說！」', correct: false },
      { text: '私訊同事：「我記得當時的情況不太一樣，我們可以約個時間把事情說清楚嗎？」', correct: true },
      { text: '不回應，假裝沒看到，等主管來問再說。', correct: false },
      { text: '直接跟主管說同事在說謊。', correct: false },
    ],
    explanation: '✅ 私下溝通是最佳選擇。在公開場合反擊容易讓雙方都下不了台，私訊溝通既保留了澄清的機會，也給對方保留了面子。這種「先私下、再公開」的原則，是職場 EQ 的重要準則。'
  },
  {
    id: 's3',
    title: '需求不斷改變',
    situation: '你已經把功能做到 80%，PM 又說要改需求，而且這次改動會讓你之前的工作幾乎全部作廢。你心裡非常不滿。',
    options: [
      { text: '直接說：「你們根本不知道自己要什麼，這樣我沒辦法做！」', correct: false },
      { text: '雖然很不高興，但只說「好，我改」，把不滿藏在心裡。', correct: false },
      { text: '說：「我理解需求可能需要調整，不過我想先確認幾件事：這次的方向確定了嗎？新需求的優先級如何？對時程有影響，我們要怎麼處理？」', correct: true },
      { text: '拒絕繼續做，要求 PM 先寫清楚再說。', correct: false },
    ],
    explanation: '✅ 這個回應展現了「assertive（自信但不攻擊性）」的溝通方式：承認對方的需求，同時清楚表達自己的顧慮和問題。把情緒轉換成具體問題，比起情緒化發洩或默默接受都更有效。'
  },
  {
    id: 's4',
    title: '被同事忽略意見',
    situation: '在技術討論會中，你提出了一個解決方案，但大家直接跳過你的意見，繼續討論其他方案。你覺得自己的聲音不被重視。',
    options: [
      { text: '不再發言，默默坐著到會議結束。', correct: false },
      { text: '大聲說：「為什麼都不考慮我的方案？！」', correct: false },
      { text: '在適當的時機說：「我想回到剛才提的方案，我覺得有幾個優點值得評估……」並簡短說明重點。', correct: true },
      { text: '會後傳訊息給主管抱怨自己被無視。', correct: false },
    ],
    explanation: '✅ 適時重申自己的觀點，而不是放棄或情緒化，是高情商的表現。關鍵是「聚焦在論點本身，而不是情緒」。學習在會議中有效發聲，是職場溝通的重要技能。'
  },
  {
    id: 's5',
    title: '客戶的不合理要求',
    situation: '客戶要求你在「明天早上」交付一個原本需要兩週才能完成的功能，否則威脅要終止合約。',
    options: [
      { text: '答應，然後熬夜趕工，不管品質。', correct: false },
      { text: '直接說「不可能」，掛電話。', correct: false },
      { text: '說：「我非常理解您的緊迫感。讓我評估一下，明天我可以先交付核心功能 X，完整版本在 Y 日完成，這樣能解決您最急迫的問題嗎？」', correct: true },
      { text: '要求主管去跟客戶溝通，自己不出面。', correct: false },
    ],
    explanation: '✅ 這個回應使用了「同理 → 替代方案」的結構，展現了解決問題的意願，而不是直接拒絕。提出分階段交付是常見的談判技巧，既保護了自己，也讓客戶感受到你的積極態度。'
  },
  {
    id: 's6',
    title: '承擔錯誤',
    situation: '因為你的一個失誤，導致線上系統 down 了 30 分鐘。主管問你發生什麼事。',
    options: [
      { text: '說是測試環境跟 Production 的設定不一樣害的，不是你的錯。', correct: false },
      { text: '誠實說：「是我部署時漏掉了 config 設定，造成這次的問題。我已經修復，並且會在未來加入 checklist 防止再發生。」', correct: true },
      { text: '什麼都不說，等主管自己找出原因。', correct: false },
      { text: '說是整個團隊都沒有注意到，不只是你的問題。', correct: false },
    ],
    explanation: '✅ 坦然承認錯誤、說明原因、提出改善方案，是最高情商的回應。這不只是誠實，更展現了責任感和問題解決能力。主管最害怕的不是犯錯，而是「不知道犯錯、不承認犯錯、不改善的人」。'
  }
];

/* ============================================================
   DATA: EQ TECHNIQUES
============================================================ */
const EQ_TECHNIQUES = [
  {
    icon: '🕊️',
    name: '非暴力溝通（NVC）',
    desc: '把感受和需求清楚表達，避免指責和評判，讓對話更有建設性。',
    steps: ['觀察：描述事實，不加評判', '感受：說出你的情緒', '需求：表達你的需求', '請求：提出具體可行的請求']
  },
  {
    icon: '👂',
    name: '主動聆聽',
    desc: '不只是聽，而是理解對方的意思、情緒和意圖，讓對方感受到被重視。',
    steps: ['保持眼神接觸', '不打斷對方', '用自己的話摘要：「你的意思是...」', '問開放式問題：「你覺得...」']
  },
  {
    icon: '🎭',
    name: '情緒調節技巧',
    desc: '在情緒激動時，避免衝動反應，先讓自己冷靜下來再回應。',
    steps: ['深呼吸 4-7-8：吸4秒、憋7秒、吐8秒', '暫停回應：「我需要想一下」', '換位思考：對方為什麼這麼說？', '區分事實與詮釋']
  },
  {
    icon: '💪',
    name: '自信溝通（Assertiveness）',
    desc: '清楚表達自己的想法和需求，既不攻擊別人，也不委屈自己。',
    steps: ['用「我」陳述：「我覺得...」', '直接說出需求，不繞彎子', '堅持立場，但保持尊重', '學會說「不」而不道歉']
  },
  {
    icon: '🤝',
    name: '衝突化解四步驟',
    desc: '當衝突發生時，用結構化方式引導討論到解決方案。',
    steps: ['冷卻：等雙方情緒穩定', '傾聽：先完整聽對方說', '表達：用 NVC 說明自己', '共創：一起找解決方案']
  },
  {
    icon: '🔍',
    name: '情緒標籤技術',
    desc: '給自己的情緒命名，可以減少情緒的強度，讓理性思考重新接管。',
    steps: ['停下來問自己：我現在感覺如何？', '精確命名：是憤怒？失望？委屈？', '接受情緒的存在（不評判）', '問：這個情緒想告訴我什麼？']
  }
];

/* ============================================================
   DATA: TECH CHALLENGES (C# / JS / .NET)
============================================================ */
const CHALLENGES = [
  {
    lang: 'C#', langColor: '#a78bfa', langIcon: '🔷',
    question: '以下 C# 程式碼的輸出是什麼？',
    code: `<span class="kw">int</span> x = <span class="num">5</span>;
<span class="kw">int</span> y = x++;
Console.<span class="fn">WriteLine</span>(<span class="str">$"x={x}, y={y}"</span>);`,
    options: ['x=5, y=5', 'x=6, y=5', 'x=6, y=6', 'x=5, y=6'],
    correct: 1,
    explanation: '`x++` 是後置遞增（Post-increment），會先把 x 的值（5）賦給 y，然後 x 才加 1 變成 6。所以 y=5, x=6。若要先加再賦值，應使用 `++x`（前置遞增）。'
  },
  {
    lang: 'C#', langColor: '#a78bfa', langIcon: '🔷',
    question: '下列哪個關鍵字可以讓 C# 方法實現非同步操作，並配合 `await` 使用？',
    code: null,
    options: ['static', 'async', 'virtual', 'override'],
    correct: 1,
    explanation: '`async` 關鍵字標記方法為非同步方法，使其可以使用 `await` 等待 Task 完成，而不會阻塞主執行緒。這是 .NET 非同步程式設計的核心模式。'
  },
  {
    lang: '.NET', langColor: '#4facfe', langIcon: '🔵',
    question: 'LINQ 中，`FirstOrDefault()` 和 `First()` 的差異是什麼？',
    code: `<span class="kw">var</span> list = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
<span class="kw">var</span> a = list.<span class="fn">First</span>(x => x > <span class="num">10</span>);    <span class="cmt">// ?</span>
<span class="kw">var</span> b = list.<span class="fn">FirstOrDefault</span>(x => x > <span class="num">10</span>); <span class="cmt">// ?</span>`,
    options: ['兩個都回傳 null', '兩個都丟出例外', 'a 丟出例外，b 回傳 0', 'a 回傳 0，b 丟出例外'],
    correct: 2,
    explanation: '`First()` 找不到元素時會丟出 `InvalidOperationException`。`FirstOrDefault()` 找不到時，會回傳型別的預設值（int 預設為 0，物件為 null）。建議在不確定是否有資料時使用 `FirstOrDefault()`。'
  },
  {
    lang: 'JavaScript', langColor: '#fbbf24', langIcon: '🟡',
    question: '以下 JS 程式碼的輸出是什麼？',
    code: `console.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="kw">null</span>);
console.<span class="fn">log</span>(<span class="kw">null</span> === <span class="kw">undefined</span>);
console.<span class="fn">log</span>(<span class="kw">null</span> == <span class="kw">undefined</span>);`,
    options: ['"object", false, false', '"null", false, true', '"object", false, true', '"undefined", true, true'],
    correct: 2,
    explanation: '`typeof null` 回傳 `"object"` — 這是 JS 著名的歷史 Bug。`null === undefined` 是 false（嚴格相等，型別不同）。`null == undefined` 是 true — 這是 JS 特殊規則，寬鬆相等時 null 只等於 undefined。'
  },
  {
    lang: 'JavaScript', langColor: '#fbbf24', langIcon: '🟡',
    question: '`Promise.all()` 和 `Promise.allSettled()` 的差異是什麼？',
    code: null,
    options: [
      '兩個一樣，沒有差別',
      '`Promise.all()` 只要一個 reject 就整體 reject；`allSettled()` 等所有完成，不管成敗',
      '`Promise.all()` 序列執行；`allSettled()` 並行執行',
      '`Promise.allSettled()` 更快'
    ],
    correct: 1,
    explanation: '`Promise.all()` 是「全部成功才成功，一個失敗就全部失敗」。`Promise.allSettled()` 會等待所有 Promise 都完成（無論 resolve 或 reject），並回傳每個的結果狀態。後者更適合需要知道所有結果的場景。'
  },
  {
    lang: 'C#', langColor: '#a78bfa', langIcon: '🔷',
    question: '什麼是 `IDisposable` 介面，`using` 關鍵字的作用是什麼？',
    code: `<span class="kw">using</span> (<span class="kw">var</span> conn = <span class="kw">new</span> SqlConnection(connStr))
{
    conn.<span class="fn">Open</span>();
    <span class="cmt">// 使用 connection...</span>
} <span class="cmt">// 這裡會自動呼叫什麼？</span>`,
    options: ['自動呼叫 `Close()`', '自動呼叫 `Dispose()`', '自動呼叫 `GC.Collect()`', '什麼都不做'],
    correct: 1,
    explanation: '`using` 語句結束時，會自動呼叫物件的 `Dispose()` 方法（透過 `IDisposable` 介面）。這確保了非受管資源（如資料庫連線、檔案 handle）被正確釋放，即使例外發生也一樣。是 .NET 資源管理的最佳實踐。'
  },
  {
    lang: '.NET', langColor: '#4facfe', langIcon: '🔵',
    question: 'ASP.NET Core 的 Dependency Injection 中，`Transient`、`Scoped`、`Singleton` 的差異？',
    code: null,
    options: [
      '三個都一樣，只是寫法不同',
      'Transient: 每次請求新實例；Scoped: 每個 HTTP 請求一個實例；Singleton: 整個應用程式共用',
      'Singleton 最快，所以都用 Singleton 最好',
      'Scoped 是最推薦的，其他兩個已被廢棄'
    ],
    correct: 1,
    explanation: 'Transient 每次注入都建立新實例（適合輕量的無狀態服務）；Scoped 在一個 HTTP 請求週期內共用一個實例（適合 DbContext）；Singleton 整個應用程式生命週期只有一個實例（適合設定、快取等）。選錯可能導致記憶體問題或資料污染。'
  },
  {
    lang: 'JavaScript', langColor: '#fbbf24', langIcon: '🟡',
    question: '以下程式碼的輸出是什麼？（閉包問題）',
    code: `<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i < <span class="num">3</span>; i++) {
  setTimeout(() => console.<span class="fn">log</span>(i), <span class="num">0</span>);
}`,
    options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
    correct: 1,
    explanation: '因為 `var` 沒有區塊作用域，for 迴圈結束時 i=3。setTimeout 的 callback 執行時，i 已經是 3，所以三個都印出 3。解決方法：改用 `let` 替換 `var`（讓每次迴圈有自己的 i），或使用 IIFE。'
  },
  {
    lang: 'C#', langColor: '#a78bfa', langIcon: '🔷',
    question: '在 C# 中，`struct` (結構) 和 `class` (類別) 的主要差異是什麼？',
    code: null,
    options: [
      'struct 是參考型別（Reference Type）存在 Heap；class 是值型別（Value Type）存在 Stack',
      'struct 是值型別（Value Type）存在 Stack/Inline；class 是參考型別（Reference Type）存在 Heap',
      'struct 支援繼承；class 不支援繼承',
      '兩個完全一樣，只是關鍵字不同'
    ],
    correct: 1,
    explanation: '`struct` 是值型別（Value Type），通常配置在 Stack 上，不支援繼承，適合小型輕量的資料結構。`class` 是參考型別（Reference Type），配置在 Heap 上，支援物件導向的繼承與多型。'
  },
  {
    lang: 'JavaScript', langColor: '#fbbf24', langIcon: '🟡',
    question: '以下 JavaScript 程式碼執行後會輸出什麼？',
    code: `<span class="kw">let</span> a = <span class="num">10</span>;
{
  console.<span class="fn">log</span>(a);
  <span class="kw">let</span> a = <span class="num">20</span>;
}`,
    options: ['10', '20', 'undefined', 'ReferenceError (暫時性死區)'],
    correct: 3,
    explanation: '這會拋出 `ReferenceError`，因為在區塊內使用了 `let a = 20;`，使得該區塊內產生了「暫時性死區 (Temporal Dead Zone, TDZ)」。在 `let a` 宣告之前存取 `a` 都會引發錯誤，它不會讀取外層的 `a = 10`。'
  },
  {
    lang: '.NET', langColor: '#4facfe', langIcon: '🔵',
    question: '.NET 的垃圾回收器（Garbage Collector, GC）中，世代（Generations）主要是用來做什麼的？',
    code: null,
    options: [
      '分類不同型別的物件',
      '根據物件生命週期進行分代回收，第 0 代代表最新配置、存活時間最短的物件',
      '限制應用程式的最大記憶體使用量',
      '區分執行緒的執行順序'
    ],
    correct: 1,
    explanation: '.NET GC 將託管堆分為三個世代（Gen 0, Gen 1, Gen 2）。Gen 0 存放新建立的短期物件；Gen 1 是 Gen 0 回收後存活下來的緩衝區；Gen 2 存放長期存活的物件（如靜態變數）。分代回收是基於「越新建立的物件越容易死亡」的假設，能大幅提高回收效率。'
  },
  {
    lang: 'JavaScript', langColor: '#fbbf24', langIcon: '🟡',
    question: '以下 JavaScript 程式碼執行後的輸出順序是什麼？',
    code: `console.<span class="fn">log</span>(<span class="str">'1'</span>);
setTimeout(() => console.<span class="fn">log</span>(<span class="str">'2'</span>), <span class="num">0</span>);
Promise.<span class="fn">resolve</span>().<span class="fn">then</span>(() => console.<span class="fn">log</span>(<span class="str">'3'</span>));
console.<span class="fn">log</span>(<span class="str">'4'</span>);`,
    options: ['1, 2, 3, 4', '1, 4, 2, 3', '1, 4, 3, 2', '1, 3, 4, 2'],
    correct: 2,
    explanation: '`1` 和 `4` 是同步代碼先執行。`Promise.then` 的回呼屬於「微任務 (Microtask)」，會在目前宏任務結束後立即執行；`setTimeout` 的回呼屬於「宏任務 (Macrotask)」，會被放到下一次 Event Loop。因此微任務優先於宏任務，輸出順序為 `1, 4, 3, 2`。'
  }
];

/* ============================================================
   DATA: LEARNING PATHS
============================================================ */
const CSHARP_PATH = [
  {
    section: '🔷 C# 語言基礎（鞏固）',
    items: [
      { name: 'LINQ 完整掌握', sub: 'Where / Select / GroupBy / Join / Aggregate', level: '中等',
        keyPoints: ['Where() — 過濾集合，相當於 SQL WHERE', 'Select() — 映射轉換，相當於 SQL SELECT', 'GroupBy() — 分組聚合，配合 Count/Sum 使用', 'FirstOrDefault() vs First() — 找不到時的差異', '延遲執行 (Deferred Execution) vs 立即執行', '方法語法 vs 查詢語法兩種寫法'],
        resources: [{ label: 'Microsoft Docs — LINQ 教學', url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/linq/' }, { label: 'LINQ 101 範例（官方）', url: 'https://learn.microsoft.com/zh-tw/samples/dotnet/try-samples/101-linq-samples/' }] },
      { name: '非同步程式設計', sub: 'async/await, Task, CancellationToken', level: '中等',
        keyPoints: ['async/await — 不阻擋主執行緒的非同步模式', 'Task vs Task<T> — 有無回傳值的差異', 'ConfigureAwait(false) — 函式庫中的最佳實踐', 'CancellationToken — 取消長時間作業', '避免 async void，應該用 async Task', 'Deadlock 成因與預防方法'],
        resources: [{ label: '非同步程式設計模式 — Microsoft', url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/asynchronous-programming/' }, { label: 'async/await 最佳實踐 — Stephen Cleary', url: 'https://blog.stephencleary.com/2012/02/async-and-await.html' }] },
      { name: 'C# 新特性（C# 10-12）', sub: 'Pattern Matching, Records, Nullable Reference Types', level: '中等',
        keyPoints: ['Record — 不可變物件，自動生成 Equals/ToString', 'Pattern Matching — switch 表達式、屬性模式', 'Nullable Reference Types — 編譯期檢查 null 安全', 'Raw String Literals — 多行字串第一名', 'Primary Constructor（C# 12）— 簡化物件建構子'],
        resources: [{ label: "What's new in C# 12 — Microsoft", url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/whats-new/csharp-12' }, { label: 'Pattern Matching 深入學習', url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/fundamentals/functional/pattern-matching' }] },
      { name: '委派與事件', sub: 'Action, Func, EventHandler, Lambda', level: '中等',
        keyPoints: ['Action — 無回傳值的委派', 'Func<T, TResult> — 有回傳值的委派', 'Lambda 表達式：(x) => x * 2', 'EventHandler 模式 — sender + EventArgs', '多播委派 (Multicast Delegate)', '事件訂閱 / 取消訂閱 (+= / -=)'],
        resources: [{ label: '委派和 Lambda — Microsoft Docs', url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/programming-guide/delegates/' }, { label: 'C# 事件完整教學', url: 'https://learn.microsoft.com/zh-tw/dotnet/csharp/programming-guide/events/' }] },
    ]
  },
  {
    section: '🏗️ 軟體設計（架構升級）',
    items: [
      { name: 'SOLID 原則', sub: '五大設計原則與實際應用', level: '進階',
        keyPoints: ['S — Single Responsibility: 一個類別只做一件事', 'O — Open/Closed: 對擴展開放，對修改封閉', 'L — Liskov Substitution: 子類別可取代父類別', 'I — Interface Segregation: 不強迫實作用不到的介面', 'D — Dependency Inversion: 依賴抽象，不依賴具體'],
        resources: [{ label: 'SOLID 原則完整教學 — DigitalOcean', url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design' }, { label: 'SOLID in C# 實踐範例 — Microsoft', url: 'https://learn.microsoft.com/zh-tw/archive/msdn-magazine/2014/may/csharp-best-practices-dangers-of-violating-solid-principles-in-csharp' }] },
      { name: '設計模式（GoF）', sub: 'Factory, Strategy, Observer, Repository, Decorator', level: '進階',
        keyPoints: ['Factory Method — 封裝物件建立方式', 'Strategy — 將演算法封裝為可替換的物件', 'Observer — 事件訂閱/發布模式', 'Repository — 專屬資料存取層抽象', 'Decorator — 動態新增物件功能', 'Singleton — 全局唯一實例（慎用！）'],
        resources: [{ label: 'Refactoring.Guru — 設計模式圖解百科', url: 'https://refactoring.guru/design-patterns' }, { label: 'C# 設計模式實踐 — dofactory', url: 'https://www.dofactory.com/net/design-patterns' }] },
      { name: 'Clean Architecture', sub: '分層架構、依賴反轉實踐', level: '進階',
        keyPoints: ['四層結構：Entities / Use Cases / Interface / Infrastructure', '依賴方向 — 外層依賴內層，內層不知道外層', 'DI 容器 — 在 Infrastructure 注入實作', 'Application Service vs Domain Service 的差異', '單元測試的可測試性設計'],
        resources: [{ label: 'Clean Architecture — Jason Taylor GitHub 範例', url: 'https://github.com/jasontaylordev/CleanArchitecture' }, { label: 'Clean Arch 影片 — Milan Jovanovic', url: 'https://www.youtube.com/watch?v=BboJkERJLBc' }] },
      { name: 'Domain-Driven Design', sub: 'Entity, Value Object, Aggregate, Repository', level: '進階',
        keyPoints: ['Entity — 有身份識別的物件（ID）', 'Value Object — 由屬性定義，不可變（e.g. Money）', 'Aggregate Root — 一群物件的公開入口', 'Domain Event — 領域內發生的重要事件', 'Bounded Context — 明確的領域範圍劃分'],
        resources: [{ label: 'DDD 入門 — Martin Fowler', url: 'https://martinfowler.com/tags/domain%20driven%20design.html' }, { label: 'DDD in .NET 實踐 — eShopOnContainers', url: 'https://github.com/dotnet-architecture/eShopOnContainers' }] },
    ]
  },
  {
    section: '🌐 .NET 生態系',
    items: [
      { name: 'ASP.NET Core 深入', sub: 'Middleware, DI, Filters, Minimal APIs', level: '中等',
        keyPoints: ['Middleware Pipeline — 請求處理的流程控制', 'Dependency Injection — Transient / Scoped / Singleton', 'Action Filters — 前/後置處理 (AOP)', 'Minimal API — .NET 6+ 的輕量 API 寫法', 'Middleware 自訂 — 日誌、認證、限流'],
        resources: [{ label: 'ASP.NET Core 官方文件', url: 'https://learn.microsoft.com/zh-tw/aspnet/core/' }, { label: 'Minimal APIs 教學', url: 'https://learn.microsoft.com/zh-tw/aspnet/core/tutorials/min-web-api' }] },
      { name: 'Entity Framework Core', sub: 'Migrations, Relationships, Query Optimization', level: '中等',
        keyPoints: ['Code First vs Database First', 'Migration — 資料庫版本控制', '1:N / M:N 關聯設定與 Include()', 'AsNoTracking() — 查詢效能優化', 'N+1 Problem — 常見效能陷阱與解決', 'EF Core Interceptors — 稽核轉換和日誌'],
        resources: [{ label: 'EF Core 官方文件', url: 'https://learn.microsoft.com/zh-tw/ef/core/' }, { label: 'EF Core 效能調效指南', url: 'https://learn.microsoft.com/zh-tw/ef/core/performance/' }] },
      { name: '.NET 8 新特性', sub: 'Native AOT, Blazor Full Stack, .NET Aspire', level: '進階',
        keyPoints: ['Native AOT — 直接編譯到機器碼，啟動極快', 'Blazor United — SSR + Streaming + 互動全寫法', '.NET Aspire — 雲原生應用內建小服務', 'Frozen Collections — 不可變集合效能優化', 'TimeProvider — 可測試的時間抽象'],
        resources: [{ label: "What's new in .NET 8", url: 'https://learn.microsoft.com/zh-tw/dotnet/core/whats-new/dotnet-8/overview' }, { label: '.NET Aspire 官方文件', url: 'https://learn.microsoft.com/zh-tw/dotnet/aspire/' }] },
      { name: '單元測試', sub: 'xUnit, Moq, FluentAssertions', level: '中等',
        keyPoints: ['AAA 模式：Arrange / Act / Assert', 'xUnit — [Fact] / [Theory] / [InlineData]', 'Moq — Mock 依賴、設定回傳值、驗證呼叫', 'FluentAssertions — 可讀性測試斷言語法', '測試覆蓋率 — 對它幾個說法的辨別', 'Integration Test vs Unit Test 的選擇'],
        resources: [{ label: 'xUnit 官方文件', url: 'https://xunit.net/docs/getting-started/netcore/cmdline' }, { label: 'Moq 快速入門', url: 'https://github.com/moq/moq4/wiki/Quickstart' }, { label: 'FluentAssertions 官方文件', url: 'https://fluentassertions.com/introduction' }] },
    ]
  }
];

const JS_PATH = [
  {
    section: '🟡 JavaScript 現代語法',
    items: [
      { name: 'ES2020+ 新特性', sub: 'Optional Chaining, Nullish Coalescing, Promise.allSettled', level: '中等',
        keyPoints: ['Optional Chaining (?.) — 安全存取屬性，避免 null 錯誤', 'Nullish Coalescing (??) — 僅對 null/undefined 才用預設值', 'Promise.allSettled() — 等全部完成，不管成敗', 'BigInt — 處理超大整數', 'globalThis — 統一全局物件存取'],
        resources: [{ label: 'ES2020 新特性完整轉解 — FreeCodeCamp', url: 'https://www.freecodecamp.org/news/javascript-new-features-es2020/' }, { label: 'MDN — Optional Chaining', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining' }] },
      { name: '閉包與作用域', sub: 'Closure, Hoisting, let/const/var 差異', level: '中等',
        keyPoints: ['閉包 (Closure) — 函式記住外層作用域的變數', 'var — 函式作用域，會 Hoisting', 'let / const — 區塊作用域，不會 Hoisting', 'TDZ (Temporal Dead Zone) — let 的潛水區域', 'IIFE — 立即執行函式表達式', 'for 迴圈 + var 的經典陷阱（閉包問題）'],
        resources: [{ label: 'JavaScript Closures 說明 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures' }, { label: 'Hoisting 完整指南 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting' }] },
      { name: '非同步深入', sub: 'Promise chain, async/await, 錯誤處理', level: '中等',
        keyPoints: ['Promise 三狀態：pending / fulfilled / rejected', '.then() .catch() .finally() 鏈接', 'async/await — 同步風格寫非同步', 'try/catch 處理 await 錯誤', 'Promise.all / race / any 的差異與用途', '常見岐屬：在 forEach 裡用 await 的問題'],
        resources: [{ label: 'Promise 完整指南 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise' }, { label: 'JavaScript.info — async/await', url: 'https://zh.javascript.info/async-await' }] },
      { name: '原型鏈與 Class', sub: 'Prototype, class syntax, inheritance', level: '中等',
        keyPoints: ['原型鏈 (Prototype Chain) — JS 繼承的本質', '__proto__ vs prototype 的差異', 'class 語法 — 只是原型鏈的語法糖衣', 'extends 與 super — 子類別繼承', '靜態方法 (static) 與實例方法差異', 'Private fields (#) — ES2022 實真私有屬性'],
        resources: [{ label: '繼承與原型鏈 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain' }, { label: 'JavaScript Classes 教學', url: 'https://javascript.info/classes' }] },
    ]
  },
  {
    section: '⚡ 前端技術',
    items: [
      { name: 'DOM 操作與事件', sub: 'Event delegation, bubbling, custom events', level: '中等',
        keyPoints: ['事件冒泡 (Bubbling) 與 捕獲 (Capturing)', 'Event Delegation — 經由父元素處理子元素事件', 'preventDefault() vs stopPropagation()', 'CustomEvent — 自定義事件與資料傳遞', 'MutationObserver — 監測 DOM 變化', 'IntersectionObserver — 漸層載入專用'],
        resources: [{ label: 'DOM 事件完整指南 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener' }, { label: 'Event Delegation 說明 — javascript.info', url: 'https://javascript.info/event-delegation' }] },
      { name: 'Fetch API / AJAX', sub: 'REST API 呼叫, headers, 錯誤處理', level: '中等',
        keyPoints: ['fetch() 基本用法與回傳 Promise', 'Response.json() / .text() / .blob()', 'Request headers 設定（Authorization, Content-Type）', 'CORS 問題與解決方式', 'AbortController — 取消 fetch 請求', '錯誤處理：fetch 不會因 4xx/5xx reject'],
        resources: [{ label: 'Fetch API 完整指南 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch' }, { label: 'CORS 詳解 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS' }] },
      { name: 'TypeScript 基礎', sub: 'Types, Interfaces, Generics, Decorators', level: '進階',
        keyPoints: ['基本型別：string, number, boolean, any, unknown, never', 'Interface vs Type Alias 的差異與用途', 'Generics 泛型 — function identity<T>(arg: T): T', 'Union / Intersection Types', 'Type Guard — typeof / instanceof / is', '安裝 tsconfig.json 的基本設定'],
        resources: [{ label: 'TypeScript 官方教學', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' }, { label: 'TypeScript 深入研究 — basarat.gitbook.io', url: 'https://basarat.gitbook.io/typescript' }] },
    ]
  },
  {
    section: '🔧 工具與效能',
    items: [
      { name: '模組系統', sub: 'ES Modules, CommonJS, import/export', level: '中等',
        keyPoints: ['ES Modules (ESM) — import/export，瀏覽器原生支援', 'CommonJS (CJS) — require/module.exports，Node.js 預設', '預設匯入 vs 命名匯入 vs 命名小變', 'Dynamic import() — 懸載載入某一模組', 'Tree Shaking — ESM 才能做到的死碼消除'],
        resources: [{ label: 'ES Modules 說明 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Modules' }, { label: 'ESM vs CJS 深入說明', url: 'https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1' }] },
      { name: '效能優化', sub: 'Debounce, Throttle, Lazy Loading, Web Workers', level: '進階',
        keyPoints: ['Debounce — 停止觸發後才執行（搜尋框）', 'Throttle — 限制執行頻率（Scroll 監聽）', 'Lazy Loading — 延遲載入圖片、模組', 'Web Workers — 耐了計算移到背景執行緒', 'requestAnimationFrame — 動畫效能最佳實踐'],
        resources: [{ label: 'Debounce vs Throttle 視覺化說明', url: 'https://css-tricks.com/debouncing-throttling-explained-examples/' }, { label: 'Web Workers 教學 — MDN', url: 'https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers' }] },
      { name: 'Node.js 基礎', sub: 'Event Loop, Streams, 非同步 I/O', level: '中等',
        keyPoints: ['Event Loop — Call Stack / Microtask / Macrotask 順序', 'process.nextTick vs Promise.resolve 優先級', 'Streams — 大檔案處理效能最佳方式', '內建模組：fs, path, http, crypto', 'npm / package.json / node_modules 工作原理'],
        resources: [{ label: 'Node.js Event Loop 可視化說明（YouTube）', url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ' }, { label: 'Node.js 官方文件', url: 'https://nodejs.org/zh-cn/docs' }] },
    ]
  }
];

/* ============================================================
   DATA: QUOTES
============================================================ */
const QUOTES = [
  { text: '溝通最重要的是聽到沒有說出口的話。', author: 'Peter Drucker' },
  { text: '你說的話的方式，比你說的內容更重要。', author: 'Maya Angelou' },
  { text: '情商比智商更能決定你的成功。', author: 'Daniel Goleman' },
  { text: '先理解，再被理解。', author: 'Stephen Covey' },
  { text: '真正的溝通，不是說服，而是理解。', author: '《高難度對話》' },
  { text: '每天進步 1%，一年後你將進步 37 倍。', author: '複利法則' },
  { text: '程式碼是寫給人看的，順便讓機器執行。', author: 'Harold Abelson' },
  { text: '最好的程式碼，是你不需要寫的那行程式碼。', author: 'Jeff Atwood' },
  { text: '不要等到你準備好了才開始，開始了你才會準備好。', author: '未知' },
  { text: '擁有高情商的人，不是沒有情緒，而是懂得管理情緒。', author: '未知' },
];

/* ============================================================
   STATE
============================================================ */
