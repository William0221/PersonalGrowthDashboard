/* ============================================================
   DATA EXTRA — 擴充題庫（自動附加到原始陣列）
   由 Claude 生成，於 data.js 之後、app.js 之前載入
============================================================ */

/* ---------- 1) EQ 情境題 +44（s7–s50） ---------- */
EQ_SCENARIOS.push(
  { id:'s7', title:'會議中被搶走功勞', situation:'你在會議前私下把一個好點子告訴同事，會議上他直接當成自己的提案說出來，主管大加讚賞。', options:[
    { text:'當場打斷：「這明明是我先想到的！」', correct:false },
    { text:'保持微笑，會後私下找同事釐清，並在下次主動讓主管知道你的貢獻。', correct:true },
    { text:'從此不再跟這位同事分享任何想法，並到處說他壞話。', correct:false },
    { text:'忍下來，假裝沒事，但心裡記恨。', correct:false },
  ], explanation:'✅ 當眾爭功容易兩敗俱傷。較成熟的做法是先私下釐清、保留證據（如訊息紀錄），並在後續用實際貢獻自然地讓決策者看見你的價值。對抗與隱忍都不利於長期。' },

  { id:'s8', title:'下屬犯了大錯', situation:'你帶的新人把客戶資料寄錯對象，事情已經發生。他低著頭，看起來非常自責。', options:[
    { text:'「你怎麼這麼不小心？我就知道交給你不行。」', correct:false },
    { text:'「先別自責，我們一起想怎麼補救。之後再來看流程哪裡可以改，避免再發生。」', correct:true },
    { text:'幫他把責任全扛下來，什麼都不說。', correct:false },
    { text:'立刻上報主管要求處分他。', correct:false },
  ], explanation:'✅ 危機當下，先穩定情緒、聚焦補救，再做事後檢討。指責只會讓人更慌、更不敢回報問題。對事不對人，並把焦點放在「流程如何改善」而非「誰該被罵」。' },

  { id:'s9', title:'朋友一直抱怨卻不行動', situation:'好友每次見面都抱怨同一份工作有多糟，你建議過很多次，他都不採納，又繼續抱怨。', options:[
    { text:'「你每次都這樣講，我聽膩了，要嘛換工作要嘛閉嘴。」', correct:false },
    { text:'「聽起來你真的很累。你現在是想找人聊聊，還是想一起想辦法？」', correct:true },
    { text:'默默疏遠這位朋友。', correct:false },
    { text:'幫他把辭職信寫好逼他交。', correct:false },
  ], explanation:'✅ 人抱怨時，未必想要解法，有時只是想被理解。先確認對方的需求（傾訴 vs 解決），能避免你給錯回應、也保護自己的情緒界線。' },

  { id:'s10', title:'被要求加班但已有約', situation:'下班前主管臨時說：「今晚留下來把報表趕完。」但你早已答應家人晚餐慶生。', options:[
    { text:'二話不說取消晚餐留下來加班。', correct:false },
    { text:'「今晚我有重要的家庭約定。我可以現在先趕一部分，剩下的明天一早優先完成，這樣可以嗎？」', correct:true },
    { text:'「不行，我要下班。」直接走人。', correct:false },
    { text:'答應留下，但整晚擺臭臉、效率很差。', correct:false },
  ], explanation:'✅ 自信溝通＝表達界線＋提出替代方案。既守住重要承諾，又展現負責態度。一味犧牲或直接拒絕都不是最佳解，協商出雙方可接受的方案最成熟。' },

  { id:'s11', title:'收到嚴厲的書面回饋', situation:'主管寄來一封 email，逐條列出你這季表現的問題，語氣直接，讓你看了很受傷。', options:[
    { text:'立刻回一封情緒化的長信反駁每一點。', correct:false },
    { text:'先放著不回，隔天冷靜後再讀一次，挑出有道理的部分，回信感謝並提出改進計畫。', correct:true },
    { text:'截圖傳給同事抱怨主管很過分。', correct:false },
    { text:'從此對這位主管冷淡以對。', correct:false },
  ], explanation:'✅ 情緒高張時不要立刻回應。隔一段時間讓理性接管，把「人身攻擊感」和「有用的訊息」分開，能讓你既不委屈也能成長。延遲回應是高情商者的常用技巧。' },

  { id:'s12', title:'同事情緒崩潰', situation:'平常很堅強的同事突然在茶水間紅了眼眶，說最近壓力很大快撐不住了。', options:[
    { text:'「大家都很累啊，撐一下就過去了。」', correct:false },
    { text:'「謝謝你願意說出來。要不要找個安靜的地方坐一下？我在。」', correct:true },
    { text:'立刻給一堆建議叫他怎麼解決。', correct:false },
    { text:'尷尬地走開假裝沒看到。', correct:false },
  ], explanation:'✅ 對方脆弱時，「陪伴與接住情緒」比「給建議」更重要。先提供安全感，讓他知道被理解，之後若他需要才提供協助。否定情緒（「大家都累」）會讓人更孤立。' },

  { id:'s13', title:'跨部門意見衝突', situation:'你和另一部門為了專案優先順序爭執不下，會議陷入僵局，氣氛越來越僵。', options:[
    { text:'堅持己見，比誰大聲。', correct:false },
    { text:'「我們都希望專案成功。能不能先把雙方的顧慮列出來，看看共同目標在哪？」', correct:true },
    { text:'直接說「那就請老闆裁決」結束討論。', correct:false },
    { text:'讓步全聽對方的，回去再抱怨。', correct:false },
  ], explanation:'✅ 衝突化解的關鍵是把「立場之爭」拉回「共同目標」。先承認彼此都為了好結果，再把隱藏的顧慮攤開，常能找到雙方都沒注意到的第三選項。' },

  { id:'s14', title:'被插隊的客戶刁難', situation:'你在服務一位客戶，另一位客戶不耐煩地插話：「我趕時間，你先處理我的！」', options:[
    { text:'「請排隊，沒看到我在忙嗎？」', correct:false },
    { text:'「我了解您很急，我先把這位的處理完，馬上就到您，大約三分鐘，謝謝您的體諒。」', correct:true },
    { text:'丟下手邊客戶先處理插隊的人。', correct:false },
    { text:'裝作沒聽到完全不回應。', correct:false },
  ], explanation:'✅ 先同理對方的急迫（「我了解您很急」），再清楚說明你會怎麼做與大約時間，多數人要的是被看見和確定感。冷處理或縱容插隊都會引發更多不滿。' },

  { id:'s15', title:'伴侶忘了重要紀念日', situation:'今天是你們的紀念日，但伴侶完全忘了，下班回來一臉輕鬆問你晚餐吃什麼。', options:[
    { text:'整晚冷戰，等對方自己發現。', correct:false },
    { text:'「我有點失落，因為今天對我來說很特別——是我們的紀念日。」', correct:true },
    { text:'「你根本不在乎我們！」', correct:false },
    { text:'假裝不在意，但之後翻舊帳。', correct:false },
  ], explanation:'✅ 用「我」開頭表達感受與原因（NVC），讓對方理解你的失落來源，而不是被指責後防衛。冷戰和翻舊帳會讓小事變大裂痕。直接而溫和地說出需求最有效。' },

  { id:'s16', title:'網路上被酸民攻擊', situation:'你分享了一篇作品，有人留言嘲諷：「這種程度也敢拿出來？」', options:[
    { text:'回一段更尖酸的話反擊。', correct:false },
    { text:'判斷對方只是想引戰，選擇不回應或簡短禮貌回覆，把精力留給有建設性的意見。', correct:true },
    { text:'刪掉作品，覺得自己很差。', correct:false },
    { text:'整天為這句話生悶氣。', correct:false },
  ], explanation:'✅ 並非每個攻擊都值得回應。辨識「惡意引戰」與「有用批評」的差別，把情緒能量留給真正重要的人事物，是情緒管理的重要能力。不必為陌生人的惡意懲罰自己。' },

  { id:'s17', title:'主管朝令夕改', situation:'主管昨天要你往東做，今天又怪你為什麼沒往西，彷彿昨天的指示不存在。', options:[
    { text:'「你昨天明明說要這樣！」當場翻臉。', correct:false },
    { text:'「我想確認一下方向，昨天我們談的是 A，今天調整成 B，對嗎？之後我會把結論用訊息留底，方便我們對齊。」', correct:true },
    { text:'默默照新的做，下次再被怪也不吭聲。', correct:false },
    { text:'到處跟同事抱怨主管很爛。', correct:false },
  ], explanation:'✅ 面對反覆，重點是「對齊＋留底」而非爭對錯。用平和語氣確認最新方向，並建立書面紀錄習慣，既保護自己又顯得專業，也減少日後爭議。' },

  { id:'s18', title:'團隊裡有人摸魚', situation:'專案分工後，有個組員幾乎不做事，最後成果卻是大家一起掛名。其他人開始抱怨。', options:[
    { text:'當著全組的面數落那位組員。', correct:false },
    { text:'私下了解他是否有困難，同時和團隊重新明確分工與檢核點，讓貢獻被看見。', correct:true },
    { text:'自己默默把他的部分也做完。', correct:false },
    { text:'直接向上告狀要求踢人。', correct:false },
  ], explanation:'✅ 先了解原因（能力？意願？私人狀況？）再處理。比起公開羞辱或默默吞下，建立清楚的分工與可檢核的里程碑，更能公平地讓每個人的投入被看見。' },

  { id:'s19', title:'被誇獎時很不自在', situation:'你完成一個專案，主管當眾大力稱讚你，你卻覺得渾身不對勁、想否認。', options:[
    { text:'「沒有啦，其實做得很爛，運氣好而已。」', correct:false },
    { text:'「謝謝肯定，這也是團隊一起努力的成果，我很開心能參與。」', correct:true },
    { text:'尷尬地什麼都不說、低頭走開。', correct:false },
    { text:'「這本來就很簡單啊。」', correct:false },
  ], explanation:'✅ 大方接受讚美是一種自我價值的健康表現。否認反而讓對方尷尬、也貶低自己。簡單道謝並適度分享功勞，既得體又真誠。學會收下肯定也是情商的一環。' },

  { id:'s20', title:'家人否定你的職涯選擇', situation:'你決定轉職到不穩定但熱愛的領域，家人說：「你這樣很不切實際，會後悔的。」', options:[
    { text:'「你們根本不懂，別管我！」', correct:false },
    { text:'「我知道你們是擔心我。我有想過風險，也做了準備，能不能聽我說說我的規劃？」', correct:true },
    { text:'放棄夢想，照家人的意思走。', correct:false },
    { text:'瞞著家人偷偷轉職。', correct:false },
  ], explanation:'✅ 把對方的反對先翻譯成「關心」，能降低彼此防衛。承認他們的擔憂、再分享你的準備與規劃，比起對抗或屈服，更可能贏得理解與支持。' },

  { id:'s21', title:'會議冷場沒人發言', situation:'你主持的腦力激盪會議一片沉默，大家低頭看手機，沒人願意開口。', options:[
    { text:'「你們是都不想參與是不是？」', correct:false },
    { text:'「沒關係，我先拋個不成熟的想法，大家幫我挑毛病——就算是反對也很有幫助。」', correct:true },
    { text:'乾脆自己講完所有結論結束會議。', correct:false },
    { text:'點名最資淺的人強迫發言。', correct:false },
  ], explanation:'✅ 冷場常因「怕說錯」。主持人先示範脆弱（拋出不完美的想法、歡迎反對），能降低發言門檻、營造安全感。施壓或自己包辦只會讓參與度更低。' },

  { id:'s22', title:'好友借錢不還', situation:'好友半年前跟你借了一筆錢說很快還，至今沒提，你需要用錢但開口很尷尬。', options:[
    { text:'一直暗示卻不直說，期待他自己想起來。', correct:false },
    { text:'「想跟你聊個有點不好意思的事——之前借你的那筆，我最近剛好需要週轉，方便這個月還嗎？」', correct:true },
    { text:'到處跟別人說他借錢不還。', correct:false },
    { text:'忍著不說，但心裡越來越不舒服。', correct:false },
  ], explanation:'✅ 金錢界線要直接、具體、給台階。把難開口的事說清楚（金額、時間、原因），既維護關係也守住自己權益。暗示和隱忍往往讓誤會和怨氣累積得更深。' },

  { id:'s23', title:'新環境格格不入', situation:'你剛到新公司，同事們已有小圈圈，午餐都各自成群，你感覺被排除在外。', options:[
    { text:'認定大家排擠你，下班就走不社交。', correct:false },
    { text:'主動釋出善意，找機會請教工作、約一兩位同事喝咖啡，慢慢建立連結。', correct:true },
    { text:'刻意表現得很厲害讓別人來巴結你。', correct:false },
    { text:'整天悶悶不樂等別人來找你。', correct:false },
  ], explanation:'✅ 融入新環境需要主動而不強求。從「請教＋小範圍互動」開始建立信任，比被動等待或刻意逞強更自然。多數圈子不是排擠，而是還不熟悉你。' },

  { id:'s24', title:'被當成情緒垃圾桶', situation:'同事每天找你倒苦水，一講一兩小時，你開始覺得疲憊、自己的事都被耽誤。', options:[
    { text:'突然冷淡、已讀不回，讓對方自己知難而退。', correct:false },
    { text:'「我很在乎你，但我今天手上事情有點趕。我們午休聊 20 分鐘好嗎？」', correct:true },
    { text:'繼續硬撐當垃圾桶直到自己崩潰。', correct:false },
    { text:'「你很煩耶，可以不要一直講嗎？」', correct:false },
  ], explanation:'✅ 善良也需要界線。用溫和的方式設定「時間與範圍」（在乎你＋但我有限制＋給具體替代），能同時保護關係與自己的能量，避免日後情緒爆發。' },

  { id:'s25', title:'重大失誤要向客戶坦白', situation:'你的疏忽導致客戶的活動延誤，必須親自打電話告知，你很怕對方暴怒。', options:[
    { text:'把責任推給系統或同事。', correct:false },
    { text:'「這次延誤是我們的疏忽，我先說明發生了什麼，以及我們已經採取的補救方案和時程。」', correct:true },
    { text:'盡量拖延不主動告知，希望對方沒發現。', correct:false },
    { text:'只說「不好意思」但不解釋也不補救。', correct:false },
  ], explanation:'✅ 危機溝通三步：誠實承認、清楚說明、提出補救。比起推諉或拖延，第一時間負責並帶著解決方案，反而最能保住信任。逃避只會讓傷害擴大。' },

  { id:'s26', title:'同事愛打聽隱私', situation:'同事頻頻追問你的薪水、感情狀況等私事，你不想回答又怕傷感情。', options:[
    { text:'勉強全盤托出，事後後悔。', correct:false },
    { text:'微笑帶過：「這個就讓我保留一點神秘感啦~ 對了，你週末過得怎樣？」', correct:true },
    { text:'「你管那麼多幹嘛？」翻臉。', correct:false },
    { text:'編一個假答案搪塞。', correct:false },
  ], explanation:'✅ 守護隱私可以既堅定又不失溫度。用輕鬆的方式婉拒並轉移話題，既保護界線又不破壞氣氛。直接翻臉或說謊都不是必要的，幽默化解最省力。' },

  { id:'s27', title:'被主管當面比較', situation:'主管當著你的面說：「你看看人家小李，效率多高，你要多學學。」', options:[
    { text:'「那你怎麼不請小李一個人做就好？」', correct:false },
    { text:'「謝謝提醒。我想了解小李在哪些地方做得特別好，這樣我可以具體調整。」', correct:true },
    { text:'從此把小李當敵人處處競爭。', correct:false },
    { text:'回去越想越氣，工作更提不起勁。', correct:false },
  ], explanation:'✅ 被比較時，把情緒先擱一邊，將模糊的批評轉成「具體可學的點」。這既化解尷尬，也讓主管看到你願意成長的態度。把對方視為敵人或自我內耗都無益。' },

  { id:'s28', title:'群組訊息被已讀不回', situation:'你在工作群組問了重要問題，相關同事都已讀卻沒人回，事情卡住。', options:[
    { text:'在群組發飆：「都沒人要理我是嗎？」', correct:false },
    { text:'私訊最相關的人：「想跟你確認一件事，這個我需要在今天下班前決定，方便給我個方向嗎？」', correct:true },
    { text:'默默等，等到 deadline 過了才說沒人回。', correct:false },
    { text:'直接幫大家做決定，出事再說。', correct:false },
  ], explanation:'✅ 群組裡「責任分散」常導致沒人回。改用「點對點＋明確期限＋具體請求」，能大幅提高回應率。公開抱怨會傷關係，被動等待則讓自己承擔後果。' },

  { id:'s29', title:'面試被問到離職原因', situation:'面試官問：「你為什麼離開上一份工作？」而你其實是跟前主管嚴重不合。', options:[
    { text:'大吐前主管的苦水，細數他多糟糕。', correct:false },
    { text:'「我希望找到更能發揮 ◯◯ 專長、也更符合長期方向的環境，所以決定尋找新機會。」', correct:true },
    { text:'「沒什麼特別原因，就想換換。」', correct:false },
    { text:'撒謊說公司倒閉了。', correct:false },
  ], explanation:'✅ 談離職原因要「向前看、不抱怨」。把焦點放在你追求的成長與契合，而非過去的負面。批評前東家會讓人擔心你日後也這樣談他們；含糊或說謊則顯得不真誠。' },

  { id:'s30', title:'孩子考試考砸了', situation:'孩子拿著不及格的考卷回家，神情緊張地看著你，等著被罵。', options:[
    { text:'「考成這樣！你到底有沒有念書？」', correct:false },
    { text:'「這個分數你看起來也很難過。我們一起看看哪裡卡住，下次怎麼準備會更好？」', correct:true },
    { text:'「沒關係啦，分數不重要。」然後就不管了。', correct:false },
    { text:'拿別人家小孩來比較。', correct:false },
  ], explanation:'✅ 先接住孩子的情緒、再一起面對問題，能建立「犯錯可以求助」的安全感。指責讓孩子隱藏失敗，過度淡化則錯失學習。聚焦「下次怎麼更好」最有建設性。' },

  { id:'s31', title:'同事搶著表現讓你沒空間', situation:'開會時有位同事總是搶話、急著表現，你的發言一再被打斷。', options:[
    { text:'更大聲地搶回發言權。', correct:false },
    { text:'「等一下，我想先把剛剛的想法講完，三十秒就好，然後很想聽你的補充。」', correct:true },
    { text:'乾脆都不講，反正講了也被打斷。', correct:false },
    { text:'會後到處說那位同事很愛搶鋒頭。', correct:false },
  ], explanation:'✅ 溫和而堅定地守住發言權（明確要求＋給對方台階），比退讓或硬碰更有效。既維護自己的表達空間，也不讓場面變成爭吵。沉默退場只會讓你越來越被忽略。' },

  { id:'s32', title:'被要求做超出職責的事', situation:'主管不斷把不屬於你職責的雜事丟給你，已經影響到你的本職工作。', options:[
    { text:'全部照單全收，累到崩潰。', correct:false },
    { text:'「我很樂意幫忙。不過目前 A、B 是我的主要任務，如果加上這些，想請您幫我排一下優先順序。」', correct:true },
    { text:'「這不是我的工作。」直接拒絕。', correct:false },
    { text:'故意做得很爛讓主管不敢再丟。', correct:false },
  ], explanation:'✅ 把「拒絕」轉成「請對方協助排序」，既表達了負荷已滿，又不顯得不配合。讓決策者意識到資源有限、必須取捨，比硬扛或硬頂都更專業有效。' },

  { id:'s33', title:'朋友聚會總是遲到', situation:'某位朋友每次聚會都遲到半小時以上，讓大家久等，這次又是如此。', options:[
    { text:'當眾數落他：「你每次都遲到，很沒禮貌耶！」', correct:false },
    { text:'私下輕鬆地說：「跟你說個真心話，你遲到時我們都蠻擔心你的，下次能準時嗎？這樣大家更開心。」', correct:true },
    { text:'下次故意也遲到報復。', correct:false },
    { text:'忍著不說，但越來越不想約他。', correct:false },
  ], explanation:'✅ 回饋對方行為時，私下、具體、說明影響，比公開指責更容易被接受。把「指責」換成「我們的感受＋具體請求」，既守住關係也表達了界線。' },

  { id:'s34', title:'收到模糊的工作指令', situation:'主管丟下一句「這個你看著辦，弄好一點」就走了，你完全不確定他要什麼。', options:[
    { text:'憑感覺亂做，做完被嫌再改。', correct:false },
    { text:'主動釐清：「為了確定方向一致，想跟您確認幾個重點：目標對象是誰？大概什麼時候要？有沒有參考範例？」', correct:true },
    { text:'一直拖著不敢動手。', correct:false },
    { text:'去問同事主管到底想要什麼。', correct:false },
  ], explanation:'✅ 面對模糊指令，與其猜或拖，不如用具體問題快速對齊（目標、期限、範例、標準）。前期多問幾句，能省下大量返工，也顯得你思慮周到。' },

  { id:'s35', title:'被情緒勒索', situation:'親戚說：「我這麼辛苦都是為了你，你連這點忙都不幫，太讓我失望了。」', options:[
    { text:'立刻妥協答應，即使自己很為難。', correct:false },
    { text:'「我知道你很辛苦，我也很感謝。這件事我真的有困難，我們能不能一起想其他辦法？」', correct:true },
    { text:'「你少拿這套來壓我！」翻臉。', correct:false },
    { text:'答應後又反悔，搞得更糟。', correct:false },
  ], explanation:'✅ 面對情緒勒索，先肯定對方付出（化解對立），同時清楚守住自己的界線並提出替代方案。被罪惡感推著答應，或激烈反擊，都會讓關係更緊繃。' },

  { id:'s36', title:'公開簡報時忘詞', situation:'你正在向一群人簡報，講到一半突然腦中一片空白，全場安靜看著你。', options:[
    { text:'慌張道歉、語無倫次，越來越亂。', correct:false },
    { text:'從容地說：「讓我喝口水整理一下思緒」，看一眼大綱後接著講。', correct:true },
    { text:'草草跳過直接結束。', correct:false },
    { text:'呆站著不動直到尷尬到極點。', correct:false },
  ], explanation:'✅ 忘詞時，「給自己一個自然的緩衝」比慌亂道歉好得多。喝水、停頓、看大綱都是專業講者的常用手法。觀眾其實沒你想像中在意小空白，鎮定才是關鍵。' },

  { id:'s37', title:'同事升遷而你沒有', situation:'和你資歷相當的同事升遷了，你卻沒有，心裡五味雜陳，但要恭喜對方。', options:[
    { text:'酸言酸語：「你運氣真好啊。」', correct:false },
    { text:'真誠道賀：「恭喜你，實至名歸！」之後再私下找主管了解自己的成長方向。', correct:true },
    { text:'表面恭喜，背後說對方靠關係。', correct:false },
    { text:'整個人意志消沉，工作擺爛。', correct:false },
  ], explanation:'✅ 把「比較的失落」和「對人的祝福」分開處理。先大方道賀（這對你的人緣與格局都有益），再把焦點轉回「我能怎麼進步」，向主管尋求具體回饋，遠比內耗或酸人有用。' },

  { id:'s38', title:'被臨時點名發表意見', situation:'會議上主管突然轉向你：「這件事你怎麼看？」但你還沒想清楚。', options:[
    { text:'隨便講一通，講完自己也後悔。', correct:false },
    { text:'「我想到兩個面向：第一是…；第二我需要再確認一下數據，下午給您完整看法，可以嗎？」', correct:true },
    { text:'「我沒什麼意見。」', correct:false },
    { text:'緊張到結巴說不出話。', correct:false },
  ], explanation:'✅ 被突襲提問時，先給出你「已經想到的部分」，再為需要思考的部分爭取時間。這展現你有想法也夠嚴謹，比硬擠答案或直接放棄都好。' },

  { id:'s39', title:'長輩堅持過時的觀念', situation:'家庭聚餐時長輩發表了一些你不認同的觀念，並要你表態同意。', options:[
    { text:'激動反駁，把場面搞僵。', correct:false },
    { text:'「我懂您的角度，時代不太一樣，我的看法可能有些不同，不過今天難得聚在一起，先好好吃飯吧。」', correct:true },
    { text:'假裝完全認同，違背自己。', correct:false },
    { text:'冷笑不語，全程擺臭臉。', correct:false },
  ], explanation:'✅ 不是每個場合都要爭出對錯。承認對方觀點的時代背景、溫和表達自己不同、再把焦點拉回關係與當下，能守住自我又不破壞氣氛。場合感也是情商。' },

  { id:'s40', title:'被誤會卻無法當下解釋', situation:'你被同事誤會做了某件事，但當下有外人在場，不適合公開澄清。', options:[
    { text:'當場激動辯解，場面更尷尬。', correct:false },
    { text:'先簡短說「這裡面有點誤會，我們等等私下聊清楚」，事後再好好說明。', correct:true },
    { text:'不解釋，讓誤會持續發酵。', correct:false },
    { text:'氣到直接離開現場。', correct:false },
  ], explanation:'✅ 澄清要選對「時機與場合」。當下先穩住、約定私下溝通，避免在不利情境硬辯。冷靜處理比急著證明自己更能還原真相，也保住雙方面子。' },

  { id:'s41', title:'團隊士氣低落', situation:'專案連續受挫，團隊瀰漫無力感，大家提不起勁，身為帶頭的你也很累。', options:[
    { text:'「都振作一點好不好，這樣怎麼成功？」', correct:false },
    { text:'坦承：「這陣子真的很辛苦，我也累。我們先停下來，看看哪些做得不錯、哪些可以調整，再一起決定下一步。」', correct:true },
    { text:'假裝一切都好，硬推大家往前。', correct:false },
    { text:'把責任全推給外在因素。', correct:false },
  ], explanation:'✅ 領導者適度示弱、肯定團隊辛苦，反而能凝聚人心。先承認情緒、看見已有的成果、再共同找方向，比空喊口號或假裝樂觀更能重建動力。' },

  { id:'s42', title:'拒絕不合理的折扣要求', situation:'客戶要求一個遠低於成本的價格，並說「不然就找別家」，語氣強硬。', options:[
    { text:'怕失去客戶，勉強答應賠本接單。', correct:false },
    { text:'「我理解預算很重要。這個價格我們無法提供，但我可以在這個預算內調整服務範圍，您看哪個方案合適？」', correct:true },
    { text:'「那您就找別家吧。」直接趕客。', correct:false },
    { text:'嘴上答應，私下偷工減料。', correct:false },
  ], explanation:'✅ 守住底線也能保留彈性。先同理對方的預算壓力，明確表示無法接受該價格，再提供「調整範圍」的替代方案，把談判從「砍價」拉回「價值對應」。賠本或趕客都非上策。' },

  { id:'s43', title:'同事公開反駁你', situation:'簡報中同事突然說：「我覺得這個方向根本行不通。」全場看著你。', options:[
    { text:'「你懂什麼？這你不要管。」', correct:false },
    { text:'「謝謝你提出來，這是很重要的點。你擔心的是哪個部分？我們可以一起看看。」', correct:true },
    { text:'尷尬地跳過，假裝沒聽到。', correct:false },
    { text:'當場情緒失控、聲音發抖。', correct:false },
  ], explanation:'✅ 被公開質疑時，把它當成「資訊」而非「攻擊」。感謝＋追問對方的具體顧慮，既展現氣度，也可能真的發現盲點。防衛或忽視都會讓你顯得心虛。' },

  { id:'s44', title:'好心被當成理所當然', situation:'你常主動幫同事的忙，久了對方視為理所當然，這次沒幫還被抱怨。', options:[
    { text:'從此完全不幫、徹底翻臉。', correct:false },
    { text:'「我一直很願意幫忙，但這次剛好沒辦法。希望我們之間是互相的，這樣我會更開心持續幫你。」', correct:true },
    { text:'繼續忍著幫，心裡越來越委屈。', correct:false },
    { text:'到處說對方忘恩負義。', correct:false },
  ], explanation:'✅ 善意需要被尊重。溫和地點出「我願意幫，但希望是互相的」，重新校準關係，比突然斷掉或默默委屈更健康。讓對方意識到你的付出不是義務。' },

  { id:'s45', title:'面對突如其來的壞消息', situation:'你剛得知一個重要專案被取消，幾個月的努力付諸流水，情緒湧上來。', options:[
    { text:'當場對通知你的人發脾氣。', correct:false },
    { text:'先承認自己的失落：「這真的很打擊」，給自己一點時間消化，再理性盤點下一步。', correct:true },
    { text:'假裝沒事，把情緒全壓下去。', correct:false },
    { text:'立刻做出衝動的重大決定（如辭職）。', correct:false },
  ], explanation:'✅ 重大壞消息來臨時，先「允許自己有情緒」而非壓抑或遷怒，等情緒峰值過去再做決定。情緒標籤（承認失落）能降低強度，避免在低谷做出後悔的選擇。' },

  { id:'s46', title:'被要求替別人的錯背鍋', situation:'主管暗示要你在客戶面前承擔一個其實是他造成的錯誤，以維護他的面子。', options:[
    { text:'當著客戶面拆穿主管。', correct:false },
    { text:'私下對主管說：「對外我會以團隊立場處理，但我們內部需要釐清真正的原因，避免再發生。」', correct:true },
    { text:'乖乖背鍋，從此心懷不滿。', correct:false },
    { text:'直接拒絕並威脅要告發。', correct:false },
  ], explanation:'✅ 在維護團隊形象與保護自己之間，可以選擇「對外一致、對內釐清」。私下劃清責任、要求面對根因，比公開衝突或默默吞下更能長期保護自己。' },

  { id:'s47', title:'朋友陷入低潮想放棄', situation:'好友最近很消沉，傳訊息說「覺得自己什麼都做不好，好想消失」。', options:[
    { text:'「別想太多，明天就好了啦。」', correct:false },
    { text:'認真回應：「我很擔心你，也很謝謝你告訴我。我在這裡，要不要現在打給我，或我們找個時間見面？」並留意是否需要專業協助。', correct:true },
    { text:'已讀不知道怎麼回，乾脆不回。', correct:false },
    { text:'轉傳一堆心靈雞湯文章。', correct:false },
  ], explanation:'✅ 朋友透露強烈的負面念頭時，認真看待、表達在乎與陪伴最重要，並留意是否需要鼓勵尋求專業協助。輕描淡寫或迴避都可能讓對方更孤立。\n\n這是個敏感的主題。如果你或身邊的人正經歷情緒困擾，我也可以幫忙找尋合適的支持資源。' },

  { id:'s48', title:'被同事冷暴力對待', situation:'某位同事最近突然對你很冷淡、刻意不配合，你不知道哪裡得罪了他。', options:[
    { text:'也用冷漠回敬，互相較勁。', correct:false },
    { text:'找個適當時機私下問：「最近我們合作好像有點卡，如果我有哪裡讓你不舒服，希望你能直接跟我說。」', correct:true },
    { text:'到處打聽他到底在不爽什麼。', correct:false },
    { text:'完全不理會，任由關係惡化。', correct:false },
  ], explanation:'✅ 面對冷暴力，主動而真誠地開啟對話，給對方表達的空間，常能化解誤會。以冷制冷只會讓裂痕加深；私下打聽則可能讓事情更複雜。' },

  { id:'s49', title:'在壓力下想對家人發火', situation:'你工作壓力爆表回到家，家人一句無心的話讓你差點失控想大吼。', options:[
    { text:'把工作的氣全發洩在家人身上。', correct:false },
    { text:'先深呼吸並說：「我今天壓力有點大，不是針對你，我需要先靜一下，等等我們再聊。」', correct:true },
    { text:'摔門進房，整晚不出來。', correct:false },
    { text:'勉強壓著，結果之後因小事爆發。', correct:false },
  ], explanation:'✅ 辨識「情緒來源不是眼前的人」是關鍵。先暫停、誠實說明自己的狀態、給彼此空間，能避免把壓力轉嫁給最親近的人。暫停回應是情緒調節的核心技巧。' },

  { id:'s50', title:'達成目標後的空虛', situation:'你終於完成一個追求很久的大目標，卻沒有想像中的喜悅，反而感到迷惘空虛。', options:[
    { text:'認定自己有問題、強迫自己要開心。', correct:false },
    { text:'接受這種「目標達成後的失落」很正常，給自己時間沉澱，再慢慢探索下一個有意義的方向。', correct:true },
    { text:'立刻塞滿行程，逃避這種感覺。', correct:false },
    { text:'否定整段努力，覺得一切沒意義。', correct:false },
  ], explanation:'✅ 「目標達成後的空虛」是常見的心理現象（arrival fallacy）。接納它、允許自己沉澱，而非強迫快樂或逃避，才能真正消化，並找到下一個由內而生的方向。' }
);

/* ---------- 2) 技術挑戰題 +48（C# / .NET / JavaScript） ---------- */
const _CS  = { lang:'C#',         langColor:'#a78bfa', langIcon:'🔷' };
const _NET = { lang:'.NET',       langColor:'#4facfe', langIcon:'🔵' };
const _JS  = { lang:'JavaScript', langColor:'#fbbf24', langIcon:'🟡' };

CHALLENGES.push(
  // ---- JavaScript ----
  { ..._JS, question:'以下程式碼的輸出是什麼？',
    code:`console.<span class="fn">log</span>(<span class="num">0.1</span> + <span class="num">0.2</span> === <span class="num">0.3</span>);`,
    options:['true','false','undefined','拋出錯誤'], correct:1,
    explanation:'浮點數以 IEEE 754 儲存，0.1 + 0.2 實際得到 0.30000000000000004，因此 === 0.3 為 false。比較浮點數應使用誤差容忍：`Math.abs(a-b) < Number.EPSILON`。' },

  { ..._JS, question:'typeof null 的結果是什麼？',
    code:null, options:["'null'","'object'","'undefined'","'number'"], correct:1,
    explanation:"這是 JavaScript 著名的歷史 bug。`typeof null` 回傳 `'object'`，源自早期實作中 null 的型別標記為 0（與物件相同）。要判斷 null 應直接用 `value === null`。" },

  { ..._JS, question:'以下程式碼會輸出什麼？',
    code:`<span class="kw">const</span> arr = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
arr.<span class="fn">forEach</span>(x => x * <span class="num">2</span>);
console.<span class="fn">log</span>(arr);`,
    options:['[2, 4, 6]','[1, 2, 3]','undefined','[1, 4, 9]'], correct:1,
    explanation:'`forEach` 不會回傳新陣列，也不會用 callback 的回傳值修改原陣列。要產生轉換後的新陣列應使用 `map`：`arr.map(x => x * 2)`。' },

  { ..._JS, question:'== 與 === 的差別是什麼？',
    code:null, options:['完全相同','=== 會做型別轉換，== 不會','== 會做型別轉換，=== 不會（嚴格比較）','=== 只能比較數字'], correct:2,
    explanation:'`==` 會先做型別轉換再比較（如 `0 == false` 為 true）；`===` 不轉型，型別不同直接為 false。實務上建議一律用 `===` 以避免隱式轉換造成的 bug。' },

  { ..._JS, question:'以下程式碼的輸出順序是什麼？',
    code:`console.<span class="fn">log</span>(<span class="num">1</span>);
<span class="fn">setTimeout</span>(() => console.<span class="fn">log</span>(<span class="num">2</span>), <span class="num">0</span>);
<span class="fn">Promise</span>.<span class="fn">resolve</span>().<span class="fn">then</span>(() => console.<span class="fn">log</span>(<span class="num">3</span>));
console.<span class="fn">log</span>(<span class="num">4</span>);`,
    options:['1 2 3 4','1 4 2 3','1 4 3 2','1 3 4 2'], correct:2,
    explanation:'同步先執行：1、4。接著清空 microtask 佇列（Promise.then→3），最後才執行 macrotask（setTimeout→2）。所以順序是 1 4 3 2。microtask 優先於 macrotask。' },

  { ..._JS, question:'以下解構賦值後，b 的值是什麼？',
    code:`<span class="kw">const</span> { a, b = <span class="num">10</span> } = { a: <span class="num">1</span>, b: <span class="kw">undefined</span> };`,
    options:['undefined','10','1','null'], correct:1,
    explanation:'解構的預設值只在屬性值為 `undefined` 時生效。這裡 b 為 undefined，所以套用預設值 10。注意：若 b 為 `null`，預設值不會生效（仍是 null）。' },

  { ..._JS, question:'下列何者能正確「深拷貝」一個沒有函式/特殊型別的純資料物件？',
    code:null, options:['Object.assign({}, obj)','{ ...obj }','structuredClone(obj)','obj.slice()'], correct:2,
    explanation:'`Object.assign` 與展開運算子都是淺拷貝（巢狀物件仍共用參照）。`structuredClone()` 是現代瀏覽器/Node 內建的深拷貝 API。`slice` 是陣列方法且同為淺拷貝。' },

  { ..._JS, question:'以下程式碼輸出什麼？',
    code:`<span class="kw">const</span> obj = {
  name: <span class="str">'A'</span>,
  greet() { <span class="kw">return</span> () => console.<span class="fn">log</span>(<span class="kw">this</span>.name); }
};
obj.<span class="fn">greet</span>()();`,
    options:["'A'",'undefined','拋出錯誤',"''"], correct:0,
    explanation:'箭頭函式不綁定自己的 `this`，而是沿用定義時所在的 `this`。這裡箭頭函式在 `greet`（一般方法）內定義，此時 `this` 指向 obj，故印出 "A"。' },

  { ..._JS, question:'`[1, 2, 3].reduce((a, b) => a + b)` 的結果是什麼？',
    code:null, options:['6','[1,2,3]','3','undefined'], correct:0,
    explanation:'`reduce` 未提供初始值時，以第一個元素為起始累加器。1+2=3，3+3=6。結果為 6。建議養成提供初始值的習慣（如 `reduce((a,b)=>a+b, 0)`），空陣列時才不會報錯。' },

  { ..._JS, question:'下列哪個寫法可以正確「複製陣列並排序」而不改動原陣列？',
    code:null, options:['arr.sort()','[...arr].sort()','arr.slice().reverse()','arr.map(x => x)'], correct:1,
    explanation:'`sort()` 會就地（in-place）修改原陣列。先用展開運算子或 `slice()` 複製再排序，才能保留原陣列。`[...arr].sort()` 是最簡潔的不可變寫法。' },

  { ..._JS, question:'`let` 與 `const` 宣告的變數會發生什麼，當你在宣告前存取它？',
    code:`console.<span class="fn">log</span>(x);
<span class="kw">let</span> x = <span class="num">5</span>;`,
    options:['印出 undefined','印出 5','拋出 ReferenceError（TDZ）','印出 null'], correct:2,
    explanation:'`let`/`const` 存在「暫時性死區（TDZ）」：從區塊開始到宣告之前存取會拋出 ReferenceError。這與 `var`（會 hoisting 成 undefined）不同。' },

  { ..._JS, question:'async 函式一定回傳什麼型別？',
    code:null, options:['它 return 的原始值','一律是 Promise','undefined','視 await 而定'], correct:1,
    explanation:'`async` 函式永遠回傳 Promise。即使你 `return 5`，呼叫端拿到的也是 resolve 成 5 的 Promise，必須用 `await` 或 `.then()` 取值。' },

  { ..._JS, question:'下列關於 `Array.prototype.find` 的敘述何者正確？',
    code:null, options:['回傳所有符合條件的元素陣列','回傳第一個符合條件的元素，找不到回傳 undefined','回傳索引','會修改原陣列'], correct:1,
    explanation:'`find` 回傳「第一個」讓 callback 為真的元素，找不到回傳 `undefined`。若想要索引用 `findIndex`，想要全部符合的用 `filter`。' },

  { ..._JS, question:'以下程式碼輸出什麼？',
    code:`console.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="fn">NaN</span>);`,
    options:["'NaN'","'number'","'undefined'","'object'"], correct:1,
    explanation:'`NaN`（Not a Number）的型別其實是 `number`。要判斷一個值是否為 NaN，應使用 `Number.isNaN(x)`，因為 `NaN === NaN` 永遠為 false。' },

  { ..._JS, question:'閉包（Closure）最核心的特性是什麼？',
    code:null, options:['讓函式執行更快','函式能記住並存取定義時所在的作用域變數','自動釋放記憶體','讓變數變成全域'], correct:1,
    explanation:'閉包是指函式「記住」它被定義時的外層作用域，即使在外層函式已執行完畢後仍能存取那些變數。常用於資料封裝、計數器、模組模式等。' },

  { ..._JS, question:'`JSON.stringify({ a: undefined, b: function(){}, c: 1 })` 的結果是什麼？',
    code:null, options:['{"a":undefined,"b":...,"c":1}','{"c":1}','{}','拋出錯誤'], correct:1,
    explanation:'`JSON.stringify` 會忽略值為 `undefined`、函式、以及 Symbol 的屬性。因此只剩 `{"c":1}`。這也是深拷貝用 JSON 方法會遺失函式的原因。' },

  // ---- C# ----
  { ..._CS, question:'以下程式碼的輸出是什麼？',
    code:`<span class="kw">string</span> a = <span class="str">"5"</span>;
<span class="kw">int</span> b = <span class="num">3</span>;
Console.<span class="fn">WriteLine</span>(a + b);`,
    options:['8','"53"','53','編譯錯誤'], correct:2,
    explanation:'當 string 與 int 用 `+` 連接時，int 會被轉成字串並做字串串接，結果是 "53"（Console 輸出不含引號）。若要相加須先 `int.Parse(a)`。' },

  { ..._CS, question:'`string` 在 C# 中是什麼型別特性？',
    code:null, options:['可變（mutable）的參考型別','不可變（immutable）的參考型別','實值型別','指標型別'], correct:1,
    explanation:'`string` 是不可變的參考型別。每次「修改」字串其實都會產生新物件。大量字串拼接應改用 `StringBuilder` 以避免效能與記憶體問題。' },

  { ..._CS, question:'以下程式碼輸出什麼？',
    code:`<span class="kw">int</span>? x = <span class="kw">null</span>;
<span class="kw">int</span> y = x ?? <span class="num">10</span>;
Console.<span class="fn">WriteLine</span>(y);`,
    options:['0','null','10','編譯錯誤'], correct:2,
    explanation:'`??` 是 null 聯合運算子：若左側為 null，回傳右側值。x 為 null，所以 y = 10。這是處理可空型別（nullable）預設值的常用寫法。' },

  { ..._CS, question:'`var` 在 C# 中代表什麼？',
    code:null, options:['動態型別（執行期才決定）','編譯期的型別推斷（仍是強型別）','等同 JavaScript 的 var','可儲存任意型別'], correct:1,
    explanation:'C# 的 `var` 是「編譯期型別推斷」，編譯器會依右側運算式推導出明確型別，仍是強型別且不可變更。與 `dynamic`（執行期決定型別）不同。' },

  { ..._CS, question:'以下哪個是 `IEnumerable<T>` 的「延遲執行（deferred execution）」特性？',
    code:null, options:['LINQ 查詢在定義時立即執行','查詢在被列舉（foreach/ToList）時才真正執行','永遠不會執行','只執行一次後快取'], correct:1,
    explanation:'多數 LINQ 查詢是延遲執行：定義 `where`/`select` 時不會跑，直到 `foreach`、`ToList()`、`Count()` 等動作才實際列舉。這可能造成多次列舉同一查詢的效能陷阱。' },

  { ..._CS, question:'以下程式碼的輸出是什麼？',
    code:`<span class="kw">var</span> list = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
<span class="kw">var</span> r = list.<span class="fn">Where</span>(x => x > <span class="num">1</span>).<span class="fn">Select</span>(x => x * <span class="num">10</span>);
Console.<span class="fn">WriteLine</span>(<span class="kw">string</span>.<span class="fn">Join</span>(<span class="str">","</span>, r));`,
    options:['10,20,30','20,30','2,3','1,2,3'], correct:1,
    explanation:'`Where(x > 1)` 過濾出 2、3，再 `Select(x * 10)` 得到 20、30。`string.Join` 以逗號連接，輸出 "20,30"。' },

  { ..._CS, question:'`out` 與 `ref` 參數的主要差別是什麼？',
    code:null, options:['完全相同','ref 傳入前必須已初始化；out 在方法內必須賦值','out 是值傳遞','ref 不能修改原值'], correct:1,
    explanation:'兩者都以參考傳遞。`ref`：呼叫前變數必須先初始化；`out`：呼叫前可不初始化，但方法內離開前一定要賦值。`out` 常用於 `TryParse` 這類回傳多值的情境。' },

  { ..._CS, question:'以下程式碼輸出什麼？',
    code:`Console.<span class="fn">WriteLine</span>(<span class="num">7</span> / <span class="num">2</span>);
Console.<span class="fn">WriteLine</span>(<span class="num">7.0</span> / <span class="num">2</span>);`,
    options:['3.5 與 3.5','3 與 3.5','3 與 3','3.5 與 3'], correct:1,
    explanation:'`7 / 2` 是兩個 int 相除，結果為整數除法 3（捨去小數）。`7.0 / 2` 因含 double，結果為 3.5。混合運算時只要有一方是浮點數即會提升為浮點運算。' },

  { ..._CS, question:'`async`/`await` 的主要目的是什麼？',
    code:null, options:['讓程式多執行緒平行運算','在等待 I/O 時不阻塞執行緒，提升回應性','加密資料','取代 try/catch'], correct:1,
    explanation:'`async`/`await` 是非同步、非阻塞模式：在等待 I/O（網路、檔案、DB）時釋放執行緒去做別的事，等完成再續行。它不等於多執行緒平行運算，目的是提升吞吐與回應性。' },

  { ..._CS, question:'下列關於 `abstract` 類別的敘述何者正確？',
    code:null, options:['可以被直接 new 實例化','不能被實例化，需由子類別繼承實作','不能有任何實作','等同 interface'], correct:1,
    explanation:'`abstract` 類別不能直接實例化，必須由子類別繼承並實作其抽象成員。它可以包含已實作的方法與欄位（這點與傳統 interface 不同）。' },

  { ..._CS, question:'`==` 對 `string` 比較的是什麼？',
    code:`<span class="kw">string</span> a = <span class="str">"hi"</span>;
<span class="kw">string</span> b = <span class="str">"h"</span> + <span class="str">"i"</span>;
Console.<span class="fn">WriteLine</span>(a == b);`,
    options:['False（比較參考）','True（比較內容值）','編譯錯誤','視情況'], correct:1,
    explanation:'C# 為 `string` 多載了 `==`，比較的是「內容值」而非參考。a 與 b 內容皆為 "hi"，故為 True。（若用 `object.ReferenceEquals` 才比較參考。）' },

  { ..._CS, question:'以下程式碼的輸出是什麼？',
    code:`<span class="kw">int</span>[] arr = { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
Console.<span class="fn">WriteLine</span>(arr.<span class="fn">Length</span>);`,
    options:['2','3','4','編譯錯誤'], correct:1,
    explanation:'陣列的 `Length` 屬性回傳元素個數，此處為 3。注意：陣列用 `Length`（屬性），`List<T>` 用 `Count`（屬性），`IEnumerable` 用 `Count()`（方法）。' },

  { ..._CS, question:'`using` 陳述式（using statement）的作用是什麼？',
    code:`<span class="kw">using</span> (<span class="kw">var</span> f = <span class="kw">new</span> StreamReader(<span class="str">"a.txt"</span>))
{ <span class="cmt">/* ... */</span> }`,
    options:['匯入命名空間','確保 IDisposable 物件離開區塊時自動釋放資源','建立執行緒','宣告常數'], correct:1,
    explanation:'`using` 陳述式確保實作 `IDisposable` 的物件在區塊結束時自動呼叫 `Dispose()`（即使發生例外），常用於檔案、連線、串流等需釋放的資源。與檔案頂端「匯入命名空間」的 `using` 指示詞不同。' },

  { ..._CS, question:'`List<T>` 和陣列 `T[]` 最主要的差別是什麼？',
    code:null, options:['List 大小可動態增減，陣列固定','陣列比較慢','List 不能用索引','完全相同'], correct:0,
    explanation:'陣列建立後長度固定；`List<T>` 可動態 `Add`/`Remove`，內部自動擴充容量。需要固定大小、極致效能時用陣列；需要彈性增減時用 List。' },

  { ..._CS, question:'以下程式碼會發生什麼？',
    code:`<span class="kw">object</span> o = <span class="str">"hello"</span>;
<span class="kw">int</span> n = (<span class="kw">int</span>)o;`,
    options:['n = 0','n = 5（長度）','執行期拋出 InvalidCastException','編譯錯誤'], correct:2,
    explanation:'o 實際裝箱的是 string，無法直接強制轉型成 int，會在執行期拋出 `InvalidCastException`。安全做法是用 `as`、模式比對 `is`，或先轉字串再 `int.Parse`。' },

  { ..._CS, question:'record（C# 9+）與 class 的主要差別是什麼？',
    code:null, options:['record 不能有方法','record 預設提供以值為基礎的相等性比較','record 不能繼承','record 是實值型別'], correct:1,
    explanation:'`record` 預設以「值相等性」比較（屬性值相同即相等），並內建 `with` 運算式、`ToString` 等。class 預設是參考相等性。record 很適合用於不可變的資料模型（DTO）。' },

  // ---- .NET ----
  { ..._NET, question:'ASP.NET Core 的相依性注入中，`AddScoped` 代表什麼生命週期？',
    code:null, options:['整個應用程式只有一個實例','每個 HTTP 請求一個實例','每次注入都建立新實例','永不釋放'], correct:1,
    explanation:'三種主要生命週期：`Singleton`（全應用一個）、`Scoped`（每個請求一個，請求內共用）、`Transient`（每次注入都新建）。Scoped 常用於 DbContext 等需在單一請求內共用的服務。' },

  { ..._NET, question:'Entity Framework Core 中，呼叫哪個方法才會真正把變更寫入資料庫？',
    code:null, options:['Add()','Update()','SaveChanges()','Find()'], correct:2,
    explanation:'`Add`/`Update`/`Remove` 只是在記憶體的變更追蹤器中標記狀態，必須呼叫 `SaveChanges()`（或 `SaveChangesAsync()`）才會在一個交易中實際寫入資料庫。' },

  { ..._NET, question:'什麼是 Middleware Pipeline（中介軟體管線）？',
    code:null, options:['資料庫連線池','一連串依序處理 HTTP 請求/回應的元件','前端框架','記憶體快取'], correct:1,
    explanation:'ASP.NET Core 把每個 HTTP 請求交給一連串中介軟體依序處理（如驗證、日誌、路由），每個元件可決定是否傳給下一個或短路。順序很重要，例如驗證要在授權之前。' },

  { ..._NET, question:'`IConfiguration` 在 ASP.NET Core 中通常用來做什麼？',
    code:null, options:['資料庫遷移','讀取設定（appsettings.json、環境變數等）','處理路由','序列化 JSON'], correct:1,
    explanation:'`IConfiguration` 提供統一的設定讀取介面，可從 appsettings.json、環境變數、使用者祕密、命令列等多來源讀取，並支援強型別繫結（Options 模式）。' },

  { ..._NET, question:'Minimal API（.NET 6+）相較於傳統 Controller 的特點是什麼？',
    code:`app.<span class="fn">MapGet</span>(<span class="str">"/hello"</span>, () => <span class="str">"Hi"</span>);`,
    options:['必須搭配 MVC','以更少樣板程式碼直接定義端點','不支援相依性注入','只能回傳 HTML'], correct:1,
    explanation:'Minimal API 讓你用極精簡的語法直接在 `Program.cs` 定義端點，省去 Controller 樣板，適合小型服務或微服務。它仍完整支援 DI、模型繫結與中介軟體。' },

  { ..._NET, question:'`Task` 與 `Task<T>` 的差別是什麼？',
    code:null, options:['Task 有回傳值，Task<T> 沒有','Task<T> 代表會回傳 T 型別結果的非同步作業','兩者相同','Task<T> 是同步的'], correct:1,
    explanation:'`Task` 代表沒有回傳值的非同步作業（類似非同步的 void）；`Task<T>` 代表完成後會產生一個 T 型別結果的非同步作業，可透過 `await` 取得該結果。' },

  { ..._NET, question:'在 .NET 中，`IDisposable` 介面的用途是什麼？',
    code:null, options:['比較物件','釋放非受控資源（檔案、連線等）','序列化','建立執行緒'], correct:1,
    explanation:'`IDisposable` 定義 `Dispose()` 方法，用於及時釋放非受控資源（檔案控制代碼、資料庫連線、Socket 等）。常搭配 `using` 陳述式確保自動釋放。' },

  { ..._NET, question:'什麼是 Garbage Collector（GC）在 .NET 中的角色？',
    code:null, options:['編譯程式碼','自動管理受控記憶體的配置與回收','處理 HTTP 請求','加密資料'], correct:1,
    explanation:'.NET 的 GC 自動追蹤受控物件，當物件不再被參考時回收其記憶體，免去手動釋放的負擔。但非受控資源（檔案、連線）仍需透過 IDisposable/Dispose 主動釋放。' },

  { ..._NET, question:'`appsettings.Development.json` 的作用是什麼？',
    code:null, options:['正式環境設定','開發環境的覆寫設定，依環境變數套用','資料庫結構','日誌檔'], correct:1,
    explanation:'ASP.NET Core 會依 `ASPNETCORE_ENVIRONMENT` 載入對應的環境設定檔，`appsettings.Development.json` 會覆寫基礎 `appsettings.json` 中同名設定，方便不同環境分開管理。' },

  { ..._NET, question:'EF Core 中 `Include()` 的用途是什麼？',
    code:`db.Orders.<span class="fn">Include</span>(o => o.Customer).<span class="fn">ToList</span>();`,
    options:['過濾資料','急切載入（eager loading）關聯的導覽屬性','排序','分頁'], correct:1,
    explanation:'`Include()` 用於急切載入關聯實體（導覽屬性），在同一次查詢中一併取回關聯資料，避免之後逐筆查詢造成的 N+1 問題。' },

  { ..._NET, question:'下列關於 `record struct`（C# 10+ / .NET）的敘述何者正確？',
    code:null, options:['它是參考型別','它是實值型別且具備以值為基礎的相等性','不能有屬性','不能不可變'], correct:1,
    explanation:'`record struct` 結合了 struct（實值型別、配置於堆疊或內嵌）與 record 的便利（值相等、簡潔語法），適合小型、不可變的值物件，並可減少堆積配置。' },

  { ..._NET, question:'什麼情況最適合使用 `Singleton` 生命週期的服務？',
    code:null, options:['每個請求需要獨立狀態時','無狀態或全應用共用、且執行緒安全的服務（如設定、快取）','需要存取 DbContext 時','處理使用者輸入時'], correct:1,
    explanation:'`Singleton` 在整個應用程式只建立一個實例，適合無狀態或全域共用且執行緒安全的服務（如設定提供者、記憶體快取）。要避免在 Singleton 注入 Scoped 服務（如 DbContext），會造成生命週期不符的問題。' },

  { ..._NET, question:'`ILogger<T>` 在 ASP.NET Core 中如何取得？',
    code:null, options:['用 new 直接建立','透過建構式相依性注入','從資料庫讀取','全域靜態變數'], correct:1,
    explanation:'記錄器透過內建 DI 注入：在類別建構式宣告 `ILogger<MyClass>` 參數即可取得。泛型參數 `T` 用作記錄的分類名稱（category），方便依來源篩選日誌。' },

  { ..._NET, question:'CancellationToken 在非同步方法中的用途是什麼？',
    code:null, options:['加速執行','允許協作式地取消長時間執行的作業','處理例外','釋放記憶體'], correct:1,
    explanation:'`CancellationToken` 提供協作式取消機制：呼叫端可在逾時或使用者中止時發出取消訊號，方法內定期檢查並提早結束，避免浪費資源。ASP.NET Core 會在請求中止時自動提供此 token。' },

  { ..._NET, question:'下列何者最能描述 .NET 中的「裝箱（boxing）」？',
    code:`<span class="kw">int</span> i = <span class="num">5</span>;
<span class="kw">object</span> o = i; <span class="cmt">// ?</span>`,
    options:['把 string 轉成 int','把實值型別包裝成參考型別放到堆積','釋放記憶體','複製陣列'], correct:1,
    explanation:'裝箱是把實值型別（如 int）包裝成 object 放到受控堆積，拆箱則相反。頻繁裝箱/拆箱會增加 GC 壓力，泛型集合（如 `List<int>`）能避免此開銷。' },

  { ..._NET, question:'`async void` 為何應盡量避免（事件處理常式除外）？',
    code:null, options:['語法錯誤','無法被 await，例外難以捕捉','執行較慢','不支援 DI'], correct:1,
    explanation:'`async void` 無法被 await，呼叫端無法得知是否完成或失敗，其中未處理的例外會直接造成程式崩潰且難以捕捉。除了 UI 事件處理常式外，非同步方法應回傳 `Task` 或 `Task<T>`。' }
);

/* ---------- 3) 每日金句 +40 ---------- */
QUOTES.push(
  { text:'我們無法選擇發生在自己身上的事，但可以選擇如何回應。', author:'Viktor Frankl' },
  { text:'刺激與回應之間有一段空間，那段空間裡藏著我們的成長與自由。', author:'Viktor Frankl' },
  { text:'你不必很厲害才能開始，但你必須開始才能很厲害。', author:'Zig Ziglar' },
  { text:'紀律是連結目標與成就之間的橋樑。', author:'Jim Rohn' },
  { text:'簡單是可靠的先決條件。', author:'Edsger Dijkstra' },
  { text:'過早最佳化是萬惡之源。', author:'Donald Knuth' },
  { text:'任何傻瓜都能寫出電腦看得懂的程式，優秀的工程師寫出人看得懂的程式。', author:'Martin Fowler' },
  { text:'命名與快取失效，是電腦科學裡最難的兩件事。', author:'Phil Karlton' },
  { text:'會犯錯是人性，要真正搞砸還得靠電腦。', author:'Paul Ehrlich' },
  { text:'先讓它能動，再讓它正確，最後才讓它快。', author:'Kent Beck' },
  { text:'削減技術債的最好時機是昨天，其次是現在。', author:'軟體工程諺語' },
  { text:'別用聰明的程式碼炫技，用清楚的程式碼解決問題。', author:'軟體工程諺語' },
  { text:'你今天的習慣，決定了你明天的樣子。', author:'James Clear' },
  { text:'你不會升到目標的高度，而是會跌到系統的水準。', author:'James Clear' },
  { text:'每一個你不想做卻仍去做的選擇，都是在為未來的自己投票。', author:'James Clear' },
  { text:'進步不是來自偶爾的猛衝，而是來自每天微小的堅持。', author:'原子習慣' },
  { text:'比起完美地計畫一年，不如踏實地行動一天。', author:'未知' },
  { text:'成長發生在舒適圈的邊緣，不在它的中心。', author:'未知' },
  { text:'你重複做的事造就了你，卓越因此不是行為，而是習慣。', author:'亞里斯多德' },
  { text:'認識自己是一切智慧的開端。', author:'亞里斯多德' },
  { text:'憤怒是拿別人的錯誤來懲罰自己。', author:'古希臘格言' },
  { text:'掌控不了的事就放下，能掌控的只有自己的回應。', author:'愛比克泰德' },
  { text:'重要的不是發生了什麼，而是你如何看待它。', author:'愛比克泰德' },
  { text:'幸福不取決於你擁有多少，而取決於你如何看待擁有的。', author:'馬可・奧理略' },
  { text:'人的價值，在於他能為多少人創造價值。', author:'未知' },
  { text:'與其追求被理解，不如先努力理解別人。', author:'Stephen Covey' },
  { text:'信任的建立以秒計，崩塌也以秒計，重建卻以年計。', author:'未知' },
  { text:'同理心不是同意對方，而是願意理解對方的世界。', author:'未知' },
  { text:'沉默有時是最有力的回答。', author:'未知' },
  { text:'你說「不」的能力，決定了你說「是」的品質。', author:'未知' },
  { text:'最深的疲憊，往往不是來自做太多，而是來自在意太多無法掌控的事。', author:'未知' },
  { text:'休息不是偷懶，而是讓你走得更遠的補給。', author:'未知' },
  { text:'比起跑得快，方向對更重要。', author:'未知' },
  { text:'失敗不是跌倒，而是跌倒後不再站起來。', author:'未知' },
  { text:'昨天的全壘打贏不了今天的比賽。', author:'Babe Ruth' },
  { text:'機會總是留給準備好的人。', author:'Louis Pasteur' },
  { text:'學習就像逆水行舟，不進則退。', author:'中國諺語' },
  { text:'種一棵樹最好的時間是十年前，其次是現在。', author:'非洲諺語' },
  { text:'不怕慢，只怕站。', author:'中國諺語' },
  { text:'你怎麼過一天，就怎麼過一生。', author:'Annie Dillard' }
);
