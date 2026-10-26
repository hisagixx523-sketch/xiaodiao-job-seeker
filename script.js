/********************************************************************
 * 【路标 1】中日双语词典 (i18n) — 极简无 Emoji 版
 ********************************************************************/
const I18N = {
  zh: {
    appTitle: "就活作战室",
    appSubtitle: "企业排雷 · 证据链ES",
    navCompanies: "企业排雷",
    navStories: "经历资产",
    navES: "ES 审计",
    btnSettingsShort: "设定",
    railNew: "新建",
    railPool: "待放区",
    railSample: "示例",
    railTour: "教程",
    railBackup: "备份",
    colCompanyListLabel: "数据概览",
    pipelineHeroTitle: "求职进度",
    metricTargets: "进行中",
    metricKey: "重点",
    metricRisks: "疑点",
    poolActive: "进行中",
    poolArchived: "待放区",
    calTitle: "近期日程",
    btnNew: "新建",
    filterAll: "全部",
    searchCompanyPlaceholder: "搜索企业 / 岗位...",
    colSourceLabel: "资料录入",
    colSourceTitle: "企业信息与招聘原文",
    btnLoadSampleCompany: "填入示例",
    lblCompanyName: "企业名称",
    lblFitTier: "意向等级",
    lblTargetRole: "目标岗位",
    lblStageShort: "当前进度",
    lblDeadlineDate: "关键日期 (联动日历)",
    lblRawSource: "招聘原文与笔记",
    rawSourcePlaceholder: "直接粘贴募集要项、官网业务介绍或说明会记录...",
    lblUserFocus: "重点核实问题（选填）",
    userFocusPlaceholder: "例：区分自社SaaS企划与SES驻场外包；确认新人交付物与远程条件...",
    btnAnalyzeAuto: "AI 深度拆解",
    btnAnalyzeBridge: "复制提示词",
    colAnalysisLabel: "分析结果",
    colAnalysisTitle: "业务拆解 · 风险提示 · 提问清单",
    btnSimulateAI: "预览效果",
    skeletonAnalyzing: "正在拆解盈利模式、核对原文依据并排查风险点...",
    storyMetricLabel: "核心经历数",
    storyListTitle: "个人经历库",
    storyRecommended: "/ 建议 3~5 篇",
    btnLoadStoryTemplate: "+ 载入范例",
    storySubListLabel: "经历列表",
    storyGuideBanner: "<strong>精简原则：</strong>只需打磨好 <strong>3～5 个包含具体行动与真实数据的核心经历</strong>，写 ES 时按需勾选，杜绝 AI 编造经历。",
    storyEditorLabel: "经历详情",
    storyEditorTitle: "经历内容编辑",
    btnDelete: "删除此项",
    lblStoryTitle: "经历名称",
    lblStoryTags: "能力标签",
    lblStoryS: "1. 背景与痛点",
    lblStoryT: "2. 目标与个人职责",
    lblStoryA: "3. 具体行动与方法",
    lblStoryR: "4. 最终成果与数据",
    esMetricLabel: "字数统计",
    esEditorTitle: "ES 实时字数（不含换行）",
    btnNewES: "新建题目",
    lblSelectESItem: "切换题目",
    lblESCompany: "目标企业",
    lblESLimitShort: "上限",
    lblESVersion: "历史版本",
    lblESQuestion: "ES 题目",
    lblSelectStories: "勾选本次使用的经历（防 AI 乱编）：",
    lblESDraft: "ES 草稿（可写中文大纲，AI 自动转日文）",
    btnSaveSnapshot: "保存版本",
    btnESReviewAuto: "AI 润色与改写",
    btnESReviewBridge: "复制提示词",
    esReviewLabel: "修改建议",
    esReviewTitle: "改写方案 · 事实核对 · 面试追问",
    btnSimulateES: "预览效果",
    skeletonReviewing: "正在核对经历事实、统计字数并生成日语改写方案...",
    modalSettingsLabel: "系统设置",
    modalSettingsTitle: "AI 连接方式与数据备份",
    dualModeExplainTitle: "两种 AI 使用方式说明",
    dualModeExplainBody: "1. <strong>接口直连：</strong>填入免费的 Gemini API Key，点击按钮即可直接在页面内生成分析结果。<br>2. <strong>网页桥接：</strong>无需填 Key。点击「复制提示词」贴给网页版 ChatGPT / Claude，再把回复的 JSON 贴回即可。",
    lblBackupSection: "数据备份与恢复 (JSON)",
    btnExportJSON: "导出备份文件",
    btnImportJSON: "导入备份文件",
    btnResetData: "清空重置",
    btnSaveSettings: "保存设置",
    bridgeLabel: "网页协同",
    bridgeTitle: "网页 AI 协同工具（支持 ChatGPT / Claude / Gemini 网页版）",
    tourSkip: "关闭教程",
    pillMeasure: "背调",
    pillLocate: "经历",
    pillES: "写ES",
    pillBackup: "备份"
  },
  ja: {
    appTitle: "就活ワークスペース",
    appSubtitle: "企業分析・経験管理・ES添削",
    navCompanies: "企業分析",
    navStories: "経験庫",
    navES: "ES 作成",
    btnSettingsShort: "設定",
    railNew: "新規",
    railPool: "保留箱",
    railSample: "例挿入",
    railTour: "ガイド",
    railBackup: "保存",
    colCompanyListLabel: "全体状況",
    pipelineHeroTitle: "選考進捗",
    metricTargets: "進行中",
    metricKey: "本命",
    metricRisks: "懸念",
    poolActive: "進行中",
    poolArchived: "保留箱",
    calTitle: "直近の予定",
    btnNew: "新規",
    filterAll: "全て",
    searchCompanyPlaceholder: "企業名・職種で検索...",
    colSourceLabel: "情報入力",
    colSourceTitle: "募集要項・メモ",
    btnLoadSampleCompany: "例を挿入",
    lblCompanyName: "企業名",
    lblFitTier: "志望度",
    lblTargetRole: "職種",
    lblStageShort: "現状",
    lblDeadlineDate: "締切・予定日",
    lblRawSource: "募集要項・説明会メモ",
    rawSourcePlaceholder: "募集要項や説明会メモを貼り付けてください...",
    lblUserFocus: "重点確認事項（任意）",
    userFocusPlaceholder: "例：自社SaaS企画かSES常駐かの見極め、リモート条件...",
    btnAnalyzeAuto: "AI 分析",
    btnAnalyzeBridge: "プロンプト作成",
    colAnalysisLabel: "分析結果",
    colAnalysisTitle: "業務実態・懸念・逆質問",
    btnSimulateAI: "デモ表示",
    skeletonAnalyzing: "収益構造の分解、原文根拠の照合中...",
    storyMetricLabel: "コア経験数",
    storyListTitle: "経験リスト",
    storyRecommended: "/ 推奨 3〜5 件",
    btnLoadStoryTemplate: "+ 記入例を追加",
    storySubListLabel: "登録済み一覧",
    storyGuideBanner: "<strong>基本原則：</strong>具体的な行動と数値結果を含む<strong>3〜5件のコア経験</strong>を登録し、ES作成時に選択して引用します。",
    storyEditorLabel: "経験詳細",
    storyEditorTitle: "エピソード編集",
    btnDelete: "削除",
    lblStoryTitle: "タイトル",
    lblStoryTags: "強みタグ",
    lblStoryS: "1. 背景・課題",
    lblStoryT: "2. 目標・役割",
    lblStoryA: "3. 具体的な行動",
    lblStoryR: "4. 成果・数値",
    esMetricLabel: "文字数カウント",
    esEditorTitle: "リアルタイム文字数（改行除外）",
    btnNewES: "新規設問",
    lblSelectESItem: "設問切替",
    lblESCompany: "対象企業",
    lblESLimitShort: "上限",
    lblESVersion: "履歴",
    lblESQuestion: "設問テキスト",
    lblSelectStories: "引用する経験を選択（事実固定）：",
    lblESDraft: "ES下書き（中国語メモからの変換も可）",
    btnSaveSnapshot: "版を保存",
    btnESReviewAuto: "AI 添削・改稿",
    btnESReviewBridge: "プロンプト作成",
    esReviewLabel: "添削結果",
    esReviewTitle: "改稿案・事実確認・深掘り質問",
    btnSimulateES: "デモ表示",
    skeletonReviewing: "事実照合、文字数計測、ビジネス日本語への改稿中...",
    modalSettingsLabel: "システム設定",
    modalSettingsTitle: "AI連携設定・データ保存",
    dualModeExplainTitle: "2つのAI利用モードについて",
    dualModeExplainBody: "1. <strong>API直結：</strong>Gemini APIキーを入力すると画面内で直接生成します。<br>2. <strong>Web連携：</strong>キー不要。プロンプトをコピーし、Web版AIの返答JSONを貼り付けます。",
    lblBackupSection: "データ保存・復元 (JSON)",
    btnExportJSON: "バックアップ保存",
    btnImportJSON: "データ復元",
    btnResetData: "初期化",
    btnSaveSettings: "保存",
    bridgeLabel: "Web AI 連携",
    bridgeTitle: "Web AI 連携ツール（ChatGPT / Claude / Gemini 対応）",
    tourSkip: "閉じる",
    pillMeasure: "企業",
    pillLocate: "経験",
    pillES: "ES",
    pillBackup: "保存"
  }
};

/********************************************************************
 * 【路标 2】核心状态管理 (含待放区 archived 与日历日期 deadlineDate)
 ********************************************************************/
const STORAGE_KEY = "SURVEY_CAREER_WORKSPACE_V2_2";
let currentLang = "zh";
let activeTab = "companies";
let companyPoolMode = "active"; // 'active' (进行中) | 'archived' (待放区)
let currentBridgeTask = null;

// 极简日历当前年月 (默认 2026年10月)
let calYear = 2026;
let calMonth = 9; // 0-indexed, 9 = 10月

function getDefaultState() {
  return {
    settings: {
      apiKey: "",
      model: "gemini-2.5-flash",
      lang: "zh",
      tourCompleted: false
    },
    activeCompanyId: "comp-sample-1",
    activeStoryId: "story-sample-1",
    activeESId: "es-sample-1",
    companies: [
      {
        id: "comp-sample-1",
        name: "ネクストDXソリューションズ株式会社",
        tier: "A",
        role: "ビジネスプロデュース職（DX・SaaS企画）",
        status: "説明会済",
        deadlineDate: "2026-10-24",
        archived: false,
        focus: "确认新人第一年是做自社SaaS产品企划，还是被派去客户现场驻场做外包支持（SES/常駐）；确认远程办公制度。",
        rawText: `【募集職種】ビジネスプロデュース職（DX推進・クラウドソリューション企画）
【事業内容】自治体・中堅企業向けの業務効率化SaaSプロダクトの開発・提供、およびDXコンサルティング支援。
【仕事内容】
・クライアントの経営課題・業務フローのヒアリングと要件定義
・自社クラウドサービス導入に向けたプロジェクト推進およびカスタマーサクセス
・若手から裁量権を持ち、上流工程から一気通貫でプロジェクトをリードできます。
【勤務地】東京本社・大阪支社（初期配属は適性により決定、全国転勤の可能性あり。週2回リモートワーク制度あり）`,
        analysis: {
          businessDecode: [
            {
              title: "盈利模式：自社SaaS订阅 + 导入交付混合型",
              reality: "虽然强调「自社SaaS企画」，但工作内容第二条明确包含导入推进与Customer Success，说明新人初期大概率需承担客户交付与业务梳理，而非纯闭门画原型。",
              quote: "自社クラウドサービス導入に向けたプロジェクト推進およびカスタマーサクセス",
              tag: "収益構造"
            },
            {
              title: "黑话解码：「若手から裁量権・上流工程」",
              reality: "日本IT/咨询常见宣传语。需警惕将「单兵应付中小型客户的售后导入」包装成「上流工程リード」。",
              quote: "若手から裁量権を持ち、上流工程から一気通貫でプロジェクトをリードできます。",
              tag: "建前 vs 本音"
            }
          ],
          redFlags: [
            {
              level: "HIGH",
              point: "配属与转勤不确定性（配属ガチャリスク）",
              detail: "原文写明「初期配属は適性により決定、全国転勤の可能性あり」，未承诺新卒必定进入企划部门或固定关西/远程。",
              quote: "初期配属は適性により決定、全国転勤の可能性あり"
            },
            {
              level: "MED",
              point: "「DXコンサルティング支援」的边界模糊",
              detail: "未说明咨询支援是否包含驻场支援（客先常駐），也未披露自社SaaS营收占比。"
            }
          ],
          questions: [
            {
              occasion: "説明会 / カジュアル面談",
              q_ja: "新卒1〜2年目のビジネスプロデュース職において、「自社プロダクトの機能企画」と「特定顧客向けの導入支援・CS業務」の業務比率は具体的にどの程度でしょうか？",
              intent: "核实到底是做后台产品标准化企划，还是做偏前台的客户交付客服。"
            },
            {
              occasion: "一次面接 / リクルーター面談",
              q_ja: "業務フローのヒアリングから要件定義に至る際、業界ごとに標準化されたフレームワークやアセットはどの程度整備されていますか？",
              intent: "考察公司内部是否有成熟的模块化方法论，同时展示自己对「业务标准化」的关注。"
            }
          ]
        }
      }
    ],
    stories: [
      {
        id: "story-sample-1",
        title: "非标业务流程的模块化封装与效率优化",
        tags: "業務標準化, ボトルネック特定, 仕組み化",
        situation: "在长期兼职初期，每次接到新任务都需要从零查找零散资料并临时规划路线方案，平均每次准备需3小时，且服务质量高度依赖个人临场发挥（属人化严重）。",
        task: "我负责独立梳理高频需求场景，目标是将前期案头准备时间压缩50%以上，并建立一套即使突发变更也能稳定控场的标准化执行手册。",
        action: "1. 按区域与属性对历史高频节点进行聚类分析；2. 剔除低效动线，将零散要素封装为3套可插拔的「标准化模块组合」；3. 制定时间缓冲阈值，形成可复用的排期表。",
        result: "单次方案准备时间从3小时缩短至45分钟（效率提升75%），全周期零重大延误，该模块化思路后续被沉淀为基础参考模板。"
      },
      {
        id: "story-sample-2",
        title: "基于多维交叉数据的四象限矩阵决策分析",
        tags: "データ分析, 仮説検証, 意思決定支援",
        situation: "在机构实习期间，团队需要决定下一阶段的重点推广资源投放对象，但以往决策多凭主观印象，导致热门区域过度拥挤而潜力区域曝光不足。",
        task: "我负责收集外部社媒互动数据与内部现场负载指标，搭建客观的评估模型以辅助后台企划决策。",
        action: "采集社交平台真实检索与互动量作为横轴（需求热度），结合现场承载与拥挤度数据作为纵轴，构建「四象限评估矩阵」，精准定位出高口碑但低拥挤的潜力标的。",
        result: "产出可视化分析报告并获采纳，成功将推广重心引导至高潜力低负载区域，证明了定量数据交叉验证对业务企划的支撑价值。"
      }
    ],
    esList: [
      {
        id: "es-sample-1",
        companyId: "comp-sample-1",
        question: "学生時代に最も力を入れたことと、そこで構築した「仕組み」や学びを400字以内で教えてください。",
        wordLimit: 400,
        linkedStoryIds: ["story-sample-1"],
        body: "私は業務の「属人化解消と標準化」に注力した。当初は案件ごとにゼロから調査・計画を作成しており、準備に毎回3時間を要し進行管理も不安定だった。そこで私は、個人の経験則に頼る構造がボトルネックだと特定し、過去のデータをエリア・属性別に分類して3つの「標準モジュール」へパッケージ化した。結果、準備時間を45分へ75%削減し、安定した品質提供を実現した。この経験から、現場の定性的な課題を構造化し、再現性ある仕組みへ昇華させる重要性を学んだ。貴社のDX推進においても、個別最適に陥りがちな業務フローを標準化し、プロダクト価値の最大化に貢献したい。",
        versions: [
          {
            ver: "v1 (初稿)",
            time: "10:00",
            body: "私は業務の「属人化解消と標準化」に注力した。当初は案件ごとにゼロから調査・計画を作成しており、準備に毎回3時間を要し進行管理も不安定だった。そこで私は、個人の経験則に頼る構造がボトルネックだと特定し、過去のデータをエリア・属性別に分類して3つの「標準モジュール」へパッケージ化した。結果、準備時間を45分へ75%削減し、安定した品質提供を実現した。この経験から、現場の定性的な課題を構造化し、再現性ある仕組みへ昇華させる重要性を学んだ。貴社のDX推進においても、個別最適に陥りがちな業務フローを標準化し、プロダクト価値の最大化に貢献したい。"
          }
        ],
        review: {
          missingQuestions: [
            "「エリア・属性別に分類」する際、具体的にどのような定量基準（移動時間、需要頻度など）で3パターンに絞り込んだのかを1文補うと、システム企画職としての説得力が倍増します。"
          ],
          factChecks: [
            {
              status: "VERIFIED",
              claim: "準備時間を3時間から45分へ75%削減、3つの標準モジュールへパッケージ化",
              note: "已与勾选的《经历1》中的成果字段严格对齐，零虚构数字。"
            }
          ],
          proposedText: "私は業務の「属人化解消と標準化」に注力した。当初は案件毎にゼロから計画を作成しており、準備に3時間を要し品質も不安定だった。私は個人の経験則に頼る構造を課題と特定し、過去案件を需要頻度と動線効率の2軸で分析・分類し、組み合わせ可能な3つの「標準モジュール」へ体系化した。結果、準備時間を45分（75%減）へ短縮し、突発的な変更にも即応できる体制を構築した。この経験から、現場の定性課題を定量的なルールへ落とし込み、再現性ある仕組みを創る重要性を学んだ。貴社でも個別最適な業務を標準化し、DX価値の最大化に貢献したい。（392字）",
          rationale: "原稿逻辑扎实，改写版补充了「需要頻度と動線効率の2軸で分析」这一方法论细节，并将结尾收敛到「個別最適な業務を標準化」，精准咬合B端SaaS企划岗位的核心痛点，字数控制在392/400字（98%饱满度）。"
        }
      }
    ]
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    return { ...getDefaultState(), ...JSON.parse(raw) };
  } catch (e) {
    return getDefaultState();
  }
}

let saveIndicatorTimer = null;
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateAllMetrics();
    renderMiniCalendar();
    // 触发顶部自动保存呼吸反馈
    const ind = document.getElementById("autosave-indicator");
    if (ind) {
      ind.textContent = currentLang === "zh" ? "✓ 已自动保存" : "✓ 自動保存済";
      ind.style.opacity = "1";
      clearTimeout(saveIndicatorTimer);
      saveIndicatorTimer = setTimeout(() => {
        ind.style.opacity = "0.65";
      }, 1500);
    }
  } catch (e) {
    showToast("本地存储空间不足，请导出 JSON 备份");
  }
}

/********************************************************************
 * 【路标 3】初始化与全局指标更新
 ********************************************************************/
function initApp() {
  currentLang = state.settings.lang || "zh";
  setLanguage(currentLang, false);
  updateAIStatusIndicator();
  updateAllMetrics();
  renderCompanyList();
  loadActiveCompanyToForm();
  renderMiniCalendar();
  renderStoryList();
  loadActiveStoryToForm();
  renderESSelector();
  loadActiveESToForm();

  window.addEventListener("resize", () => {
    if (isTourActive) positionTourElements();
  });
  window.addEventListener("scroll", () => {
    if (isTourActive) positionTourElements();
  }, true);
  window.addEventListener("keydown", (e) => {
    if (!isTourActive) return;
    if (e.key === "Escape") endInteractiveTour();
    if (e.key === "ArrowRight") nextTourStep();
    if (e.key === "ArrowLeft") prevTourStep();
  });
}

function padZero(num) {
  return String(num).padStart(2, "0");
}

function updateAllMetrics() {
  const activeComps = state.companies.filter(c => !c.archived);
  const archivedComps = state.companies.filter(c => c.archived);
  const storyCount = state.stories.length;

  const saCount = activeComps.filter(c => c.tier === "S" || c.tier === "A").length;
  const rfCount = activeComps.reduce((acc, c) => acc + (c.analysis?.redFlags?.length || 0), 0);

  document.getElementById("metric-total-comp").textContent = padZero(activeComps.length);
  document.getElementById("metric-sa-comp").textContent = padZero(saCount);
  document.getElementById("metric-red-flags").textContent = padZero(rfCount);

  const countActiveEl = document.getElementById("count-pool-active");
  const countArchEl = document.getElementById("count-pool-archived");
  if (countActiveEl) countActiveEl.textContent = activeComps.length;
  if (countArchEl) countArchEl.textContent = archivedComps.length;

  const storyBig = document.getElementById("story-count-big");
  if (storyBig) storyBig.textContent = padZero(storyCount);
}

function switchTab(tabName) {
  activeTab = tabName;
  ["companies", "stories", "es"].forEach(t => {
    const view = document.getElementById(`view-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    if (t === tabName) {
      view.classList.remove("hidden");
      view.classList.add("grid");
      btn.className = "px-3.5 py-1.5 rounded-full font-bold transition flex items-center gap-1.5 bg-[#FE5E0E] text-white";
    } else {
      view.classList.add("hidden");
      view.classList.remove("grid");
      btn.className = "px-3.5 py-1.5 rounded-full font-bold transition flex items-center gap-1.5 text-white/75 hover:text-white";
    }
  });
  if (tabName === "es") {
    renderESSelector();
    loadActiveESToForm();
  }
}

// 左侧快捷工具栏「新建」智能路由
function quickCreateByActiveTab() {
  if (activeTab === "companies") createNewCompany();
  else if (activeTab === "stories") createNewStory();
  else if (activeTab === "es") createNewESApplication();
}

function toggleArchivePoolFromRail() {
  if (activeTab !== "companies") switchTab("companies");
  setCompanyPoolMode(companyPoolMode === "active" ? "archived" : "active");
}

/********************************************************************
 * 【路标 4】模块一：企业列表、待放区切换、快速删除与极简日历
 ********************************************************************/
function setCompanyPoolMode(mode) {
  companyPoolMode = mode;
  document.getElementById("pool-btn-active").className = mode === "active" ? "segmented-item active" : "segmented-item";
  document.getElementById("pool-btn-archived").className = mode === "archived" ? "segmented-item active" : "segmented-item";
  const railPoolBtn = document.getElementById("rail-btn-pool");
  if (railPoolBtn) {
    railPoolBtn.className = mode === "archived" ? "rail-btn active" : "rail-btn";
  }
  renderCompanyList();
}

function getTierBadgeHTML(tier) {
  const styles = {
    S: "bg-[#FE5E0E] text-white",
    A: "bg-[#FAF5B2] text-neutral-900",
    B: "bg-black/10 text-neutral-700",
    C: "bg-rose-100 text-rose-800"
  };
  return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${styles[tier] || styles.B}">${tier}级</span>`;
}

function renderCompanyList() {
  const container = document.getElementById("company-list-container");
  const q = (document.getElementById("company-search").value || "").toLowerCase();
  const tierFilter = document.getElementById("company-tier-filter").value;

  const filtered = state.companies.filter(c => {
    const inPool = companyPoolMode === "archived" ? Boolean(c.archived) : !c.archived;
    const matchText = (c.name + " " + c.role + " " + c.status).toLowerCase().includes(q);
    const matchTier = tierFilter === "ALL" || c.tier === tierFilter;
    return inPool && matchText && matchTier;
  });

  if (filtered.length === 0) {
    const emptyMsg = companyPoolMode === "archived" ? "待放区为空" : "暂无匹配企业";
    container.innerHTML = `<div class="text-xs text-neutral-400 p-4 text-center">${emptyMsg}</div>`;
    return;
  }

  container.innerHTML = filtered.map(c => {
    const isActive = c.id === state.activeCompanyId;
    const tierClass = `tier-bar-${c.tier || 'B'}`;
    const archiveTitle = c.archived ? "移回进行中" : "移入待放区";
    const archiveIcon = c.archived ? "↑" : "↓";

    return `
      <div onclick="selectCompany('${c.id}')" class=" group card-glass-interactive ${tierClass} p-2.5 pl-3 cursor-pointer ${isActive ? 'card-glass-active' : ''}">
        <div class="flex items-center justify-between gap-1.5 mb-1">
          <h3 class="text-xs font-extrabold text-neutral-900 truncate">${escapeHTML(c.name || "未命名企业")}</h3>
          <div class="flex items-center gap-1 shrink-0">
            ${getTierBadgeHTML(c.tier)}
            <!-- 悬浮出现的圆形操作按钮：移入待放区 & 删除 -->
            <button onclick="toggleArchiveCompany(event, '${c.id}')" class="btn-circle-icon opacity-0 group-hover:opacity-100 text-[11px] font-bold" title="${archiveTitle}">
              ${archiveIcon}
            </button>
            <button onclick="deleteCompanyItem(event, '${c.id}')" class="btn-circle-icon opacity-0 group-hover:opacity-100 hover:!text-rose-600 text-[11px] font-bold" title="删除企业">
              ×
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
          <span class="truncate max-w-[130px]">${escapeHTML(c.role || "未填岗位")}</span>
          <span class="font-mono text-[10px] text-neutral-600 tabular-nums">${escapeHTML(c.deadlineDate ? c.deadlineDate.slice(5) : (c.status || ""))}</span>
        </div>
      </div>
    `;
  }).join("");
}

function toggleArchiveCompany(ev, id) {
  ev.stopPropagation();
  const target = state.companies.find(c => c.id === id);
  if (!target) return;
  target.archived = !target.archived;
  saveState();
  renderCompanyList();
  showToast(target.archived ? "已移入待放区（可随时切回）" : "已恢复至进行中");
}

function deleteCompanyItem(ev, id) {
  ev.stopPropagation();
  if (state.companies.length <= 1) {
    showToast("至少保留一家企业档案");
    return;
  }
  state.companies = state.companies.filter(c => c.id !== id);
  if (state.activeCompanyId === id) {
    const nextComp = state.companies.find(c => !c.archived) || state.companies[0];
    state.activeCompanyId = nextComp.id;
  }
  saveState();
  renderCompanyList();
  loadActiveCompanyToForm();
  showToast("已删除该企业");
}

function selectCompany(id) {
  state.activeCompanyId = id;
  saveState();
  renderCompanyList();
  loadActiveCompanyToForm();
}

function getActiveCompany() {
  return state.companies.find(c => c.id === state.activeCompanyId) || state.companies[0];
}

function loadActiveCompanyToForm() {
  const comp = getActiveCompany();
  if (!comp) return;
  document.getElementById("comp-name").value = comp.name || "";
  document.getElementById("comp-tier").value = comp.tier || "A";
  document.getElementById("comp-role").value = comp.role || "";
  document.getElementById("comp-status").value = comp.status || "";
  document.getElementById("comp-deadline").value = comp.deadlineDate || "";
  document.getElementById("comp-raw-text").value = comp.rawText || "";
  document.getElementById("comp-focus").value = comp.focus || "";
  document.getElementById("source-char-count").textContent = `${(comp.rawText || "").length} 字`;
  renderCompanyAnalysisBoard(comp);
}

function saveCurrentCompanyMeta() {
  const comp = getActiveCompany();
  if (!comp) return;
  comp.name = document.getElementById("comp-name").value;
  comp.tier = document.getElementById("comp-tier").value;
  comp.role = document.getElementById("comp-role").value;
  comp.status = document.getElementById("comp-status").value;
  comp.deadlineDate = document.getElementById("comp-deadline").value;
  comp.rawText = document.getElementById("comp-raw-text").value;
  comp.focus = document.getElementById("comp-focus").value;
  document.getElementById("source-char-count").textContent = `${comp.rawText.length} 字`;
  saveState();
  renderCompanyList();
}

function createNewCompany() {
  const newComp = {
    id: "comp-" + Date.now(),
    name: currentLang === "zh" ? "新目标企业" : "新規企業",
    tier: "A",
    role: "DX企画 / SaaS企画",
    status: "資料収集中",
    deadlineDate: "2026-10-28",
    archived: false,
    focus: "核实真实盈利模式、新人具体交付物、是否支持远程或固定勤务地",
    rawText: "",
    analysis: null
  };
  companyPoolMode = "active";
  state.companies.unshift(newComp);
  state.activeCompanyId = newComp.id;
  saveState();
  setCompanyPoolMode("active");
  loadActiveCompanyToForm();
  showToast("已新建企业档案");
}

function fillSampleCompanyData() {
  const comp = getActiveCompany();
  if (!comp) return;
  comp.name = "株式会社クラウドワークフロー";
  comp.tier = "S";
  comp.role = "プロダクト企画・業務コンサル",
  comp.status = "ES準備中";
  comp.deadlineDate = "2026-10-22";
  comp.focus = "确认是否真正参与后台产品逻辑设计，排除伪装成IT企划的纯电话销售或驻场派遣(SES)。";
  comp.rawText = `【募集職種】ビジネス企画・DX推進職（新卒採用）
【事業概要】中堅・大手企業向けのバックオフィス業務自動化SaaS「FlowCore」の企画・開発・提供。契約社数3,500社突破、チャーンレート（解約率）0.6%の安定基盤。
【業務内容】
・顧客企業の業務ボトルネック分析および標準化ワークフローの設計
・導入企業からのフィードバックを基にしたプロダクト開発チーム（PM・エンジニア）への機能改善提案
※入社後半年はインサイドセールスおよび導入オンボーディングを担当し、顧客理解を深めていただきます。
【勤務条件】東京・京都オフィス（ハイブリッド勤務、週3日リモート可）`;
  saveState();
  loadActiveCompanyToForm();
  showToast("已填入示例企业数据，左侧日历已自动同步截止日");
}

/* 极简联动日历渲染 */
function changeCalendarMonth(delta) {
  calMonth += delta;
  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  } else if (calMonth > 11) {
    calMonth = 0;
    calYear++;
  }
  renderMiniCalendar();
}

function renderMiniCalendar() {
  const label = document.getElementById("cal-month-label");
  const grid = document.getElementById("cal-days-grid");
  const upcomingBox = document.getElementById("cal-upcoming-list");
  if (!label || !grid) return;

  label.textContent = `${calYear}.${padZero(calMonth + 1)}`;

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  // 收集当月有截止日的企业
  const monthPrefix = `${calYear}-${padZero(calMonth + 1)}-`;
  const eventMap = {};
  state.companies.filter(c => !c.archived && c.deadlineDate && c.deadlineDate.startsWith(monthPrefix)).forEach(c => {
    const dayNum = parseInt(c.deadlineDate.slice(8, 10), 10);
    if (!eventMap[dayNum]) eventMap[dayNum] = [];
    eventMap[dayNum].push(c);
  });

  let cellsHTML = "";
  for (let i = 0; i < firstDay; i++) {
    cellsHTML += `<div class="cal-cell"></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const events = eventMap[d] || [];
    const isToday = (calYear === 2026 && calMonth === 9 && d === 15);
    if (events.length > 0) {
      const firstComp = events[0];
      const names = events.map(e => e.name).join(", ");
      cellsHTML += `
        <div onclick="selectCompany('${firstComp.id}')" class="cal-cell has-event" title="${escapeHTML(names)}">
          <span>${d}</span>
          <span class="cal-dot"></span>
        </div>
      `;
    } else {
      cellsHTML += `<div class="cal-cell ${isToday ? 'today' : ''}"><span>${d}</span></div>`;
    }
  }
  grid.innerHTML = cellsHTML;

  // 底部只显示最近 2 条日程，保持极简黑板感
  const upcoming = state.companies
    .filter(c => !c.archived && c.deadlineDate)
    .sort((a, b) => a.deadlineDate.localeCompare(b.deadlineDate))
    .slice(0, 2);

  if (upcoming.length === 0) {
    upcomingBox.innerHTML = `<div class="text-[11px] text-neutral-400">在中栏选择「关键日期」即可自动点亮日历</div>`;
  } else {
    upcomingBox.innerHTML = upcoming.map(c => `
      <div onclick="selectCompany('${c.id}')" class="flex items-center justify-between text-[11px] py-1 px-2 rounded-lg hover:bg-white/80 cursor-pointer transition">
        <span class="font-bold text-neutral-800 truncate max-w-[140px]">${escapeHTML(c.name)}</span>
        <span class="font-mono font-bold text-[#FE5E0E] tabular-nums">${escapeHTML(c.deadlineDate.slice(5))} ${escapeHTML(c.status || "")}</span>
      </div>
    `).join("");
  }
}

function renderCompanyAnalysisBoard(comp) {
  const container = document.getElementById("company-analysis-result");
  if (!comp || !comp.analysis) {
    container.innerHTML = `
      <div class="bg-white/60 rounded-2xl p-6 text-center my-2">
        <h4 class="text-xs font-extrabold text-neutral-800 mb-1">尚未生成背调分析</h4>
        <p class="text-xs text-neutral-500">在中栏粘贴招聘原文后，点击「AI 深度拆解」或右上角「预览效果」。</p>
      </div>
    `;
    return;
  }

  const { businessDecode = [], redFlags = [], questions = [] } = comp.analysis;

  container.innerHTML = `
    <!-- 1. 业务拆解 -->
    <div class="bg-white/90 rounded-2xl p-3.5 shadow-sm">
      <div class="flex items-center justify-between mb-2.5">
        <span class="text-xs font-extrabold text-neutral-900 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#FE5E0E]"></span>
          业务拆解与话术还原
        </span>
        <span class="badge-survey-yellow">附原文依据</span>
      </div>
      <div class="space-y-2.5">
        ${businessDecode.map(item => `
          <div class="p-3 rounded-xl bg-[#F4F6F9]">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="text-xs font-extrabold text-neutral-900">${escapeHTML(item.title)}</span>
              <span class="badge-survey-yellow shrink-0">${escapeHTML(item.tag || "重点")}</span>
            </div>
            <p class="text-xs text-neutral-700 font-medium leading-relaxed mb-1.5">${escapeHTML(item.reality)}</p>${item.quote ? `
              <div class="text-[11px] text-neutral-600 bg-white px-2.5 py-1.5 rounded-lg border-l-2 border-[#FE5E0E]">
                原文：「${escapeHTML(item.quote)}」
              </div>
            ` : ""}
          </div>
        `).join("")}
      </div>
    </div>

    <!-- 2. 风险提示 -->
    <div class="bg-white/90 rounded-2xl p-3.5 shadow-sm">
      <div class="flex items-center justify-between mb-2.5">
        <span class="text-xs font-extrabold text-neutral-900 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-rose-600"></span>
          潜在疑点与未明信息
        </span>
        <span class="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FE5E0E] text-white tabular-nums">${padZero(redFlags.length)} 项</span>
      </div>
      <div class="space-y-2">
        ${redFlags.map(rf => `
          <div class="p-3 rounded-xl bg-[#F4F6F9] border-l-4 ${rf.level === 'HIGH' ? 'border-[#FE5E0E]' : 'border-neutral-500'}">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="px-2 py-0.2 rounded-full text-[10px] font-bold ${rf.level === 'HIGH' ? 'bg-[#FE5E0E] text-white' : 'bg-neutral-700 text-white'}">${rf.level === 'HIGH' ? '重点核实' : '留意'}</span>
              <span class="text-xs font-extrabold text-neutral-900">${escapeHTML(rf.point)}</span>
            </div>
            <p class="text-xs text-neutral-700 font-medium leading-relaxed">${escapeHTML(rf.detail)}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- 3. 逆質問清单 -->
    <div class="bg-white/90 rounded-2xl p-3.5 shadow-sm">
      <div class="flex items-center justify-between mb-2.5">
        <span class="text-xs font-extrabold text-neutral-900 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          现场提问清单 (逆質問)
        </span>
      </div>
      <div class="space-y-2">
        ${questions.map(q => `
          <div class="p-3 rounded-xl bg-[#F4F6F9]">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold text-neutral-600">${escapeHTML(q.occasion)}</span>
              <button onclick="copyText('${escapeJS(q.q_ja)}')" class="btn-neu-pill py-0.5 px-2.5 text-[10px]">复制日语</button>
            </div>
            <p class="text-xs font-bold text-neutral-900 leading-relaxed mb-1">「${escapeHTML(q.q_ja)}」</p>
            <p class="text-[11px] text-neutral-600 font-medium">验证目的：${escapeHTML(q.intent)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/********************************************************************
 * 【路标 5】模块二：经历资产 (STAR)
 ********************************************************************/
function renderStoryList() {
  const container = document.getElementById("story-list-container");
  container.innerHTML = state.stories.map(s => {
    const isActive = s.id === state.activeStoryId;
    const tags = (s.tags || "").split(/[,，]/).map(t => t.trim()).filter(Boolean);
    return `
      <div onclick="selectStory('${s.id}')" class="card-glass-interactive tier-bar-S p-3 cursor-pointer ${isActive ? 'card-glass-active' : ''}">
        <h3 class="text-xs font-extrabold text-neutral-900 mb-1.5 leading-snug">${escapeHTML(s.title || "未命名经历")}</h3>
        <div class="flex flex-wrap gap-1 mb-1.5">
          ${tags.map(t => `<span class="badge-survey-yellow">${escapeHTML(t)}</span>`).join("")}
        </div>
        <p class="text-[11px] text-neutral-500 line-clamp-2 font-medium">${escapeHTML(s.result || s.action || "点击右侧编辑详情...")}</p>
      </div>
    `;
  }).join("");
}

function selectStory(id) {
  state.activeStoryId = id;
  saveState();
  renderStoryList();
  loadActiveStoryToForm();
}

function getActiveStory() {
  return state.stories.find(s => s.id === state.activeStoryId) || state.stories[0];
}

function loadActiveStoryToForm() {
  const s = getActiveStory();
  if (!s) return;
  document.getElementById("story-title").value = s.title || "";
  document.getElementById("story-tags").value = s.tags || "";
  document.getElementById("story-situation").value = s.situation || "";
  document.getElementById("story-task").value = s.task || "";
  document.getElementById("story-action").value = s.action || "";
  document.getElementById("story-result").value = s.result || "";
}

function saveCurrentStory() {
  const s = getActiveStory();
  if (!s) return;
  s.title = document.getElementById("story-title").value;
  s.tags = document.getElementById("story-tags").value;
  s.situation = document.getElementById("story-situation").value;
  s.task = document.getElementById("story-task").value;
  s.action = document.getElementById("story-action").value;
  s.result = document.getElementById("story-result").value;
  saveState();
  renderStoryList();
}

function createNewStory() {
  const ns = {
    id: "story-" + Date.now(),
    title: "新核心经历",
    tags: "課題解決, 仕組み化",
    situation: "",
    task: "",
    action: "",
    result: ""
  };
  state.stories.unshift(ns);
  state.activeStoryId = ns.id;
  saveState();
  renderStoryList();
  loadActiveStoryToForm();
  showToast("已新建经历卡片");
}

function insertGuidedStoryTemplate() {
  const ns = {
    id: "story-" + Date.now(),
    title: "将非标痛点转化为标准化规则",
    tags: "業務効率化, 構造化, ルール設計",
    situation: "在 [填写项目/组织] 中，原本的 [某项业务] 依赖人工经验重复核对，平均每次耗时 [X] 小时，且质量不稳定。",
    task: "我主动承担流程标准化工作，目标是将准备耗时压缩 [X]% 以上，建立任何人都能上手的标准作业包。",
    action: "1. 拆解过去 [X] 个月的历史数据，定位出3类高频卡点；\n2. 制定分类矩阵与标准模块；\n3. 设定时间缓冲阈值与异常应对清单。",
    result: "单次处理时间从 [X] 小时缩短至 [Y] 分钟，实现零延误，该标准模块被团队采纳为日常基础设施。"
  };
  state.stories.unshift(ns);
  state.activeStoryId = ns.id;
  saveState();
  renderStoryList();
  loadActiveStoryToForm();
  showToast("已载入经历范例");
}

function deleteCurrentStory() {
  if (state.stories.length <= 1) {
    showToast("至少保留一条核心经历");
    return;
  }
  state.stories = state.stories.filter(s => s.id !== state.activeStoryId);
  state.activeStoryId = state.stories[0].id;
  saveState();
  renderStoryList();
  loadActiveStoryToForm();
  showToast("已删除该经历");
}

/********************************************************************
 * 【路标 6】模块三：ES 审计与字数统计
 ********************************************************************/
function renderESSelector() {
  const sel = document.getElementById("es-select");
  sel.innerHTML = state.esList.map(es => {
    const comp = state.companies.find(c => c.id === es.companyId);
    const compName = comp ? comp.name.slice(0, 10) : "通用";
    return `<option value="${es.id}" ${es.id === state.activeESId ? 'selected' : ''}>[${escapeHTML(compName)}] ${escapeHTML(es.question.slice(0, 18))}...</option>`;
  }).join("");

  const compSel = document.getElementById("es-company-id");
  compSel.innerHTML = state.companies.map(c => `<option value="${c.id}">${escapeHTML(c.name)}</option>`).join("");
}

function getActiveES() {
  return state.esList.find(e => e.id === state.activeESId) || state.esList[0];
}

function selectESApplication(id) {
  state.activeESId = id;
  saveState();
  loadActiveESToForm();
}

function loadActiveESToForm() {
  const es = getActiveES();
  if (!es) return;
  document.getElementById("es-company-id").value = es.companyId || (state.companies[0]?.id || "");
  document.getElementById("es-limit").value = es.wordLimit || 400;
  document.getElementById("es-question").value = es.question || "";
  document.getElementById("es-body").value = es.body || "";

  const storyBox = document.getElementById("es-story-checkboxes");
  storyBox.innerHTML = state.stories.map(s => {
    const checked = (es.linkedStoryIds || []).includes(s.id) ? "checked" : "";
    return `
      <label class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F6F9] hover:bg-[#FAF5B2] text-xs font-bold text-neutral-900 cursor-pointer transition">
        <input type="checkbox" value="${s.id}" ${checked} onchange="toggleESStoryLink('${s.id}')" class="accent-[#FE5E0E]" />
        <span class="truncate max-w-[220px]">${escapeHTML(s.title)}</span>
      </label>
    `;
      }).join("");

  const verSel = document.getElementById("es-version-select");
  const versions = es.versions || [];
  verSel.innerHTML = versions.map((v, idx) => `<option value="${idx}">${escapeHTML(v.ver)} (${v.body.replace(/\r?\n/g, "").length}字)</option>`).join("");

  updateESCharCounter();
  renderESReviewBoard(es);
}

function toggleESStoryLink(storyId) {
  const es = getActiveES();
  if (!es) return;
  es.linkedStoryIds = es.linkedStoryIds || [];
  if (es.linkedStoryIds.includes(storyId)) {
    es.linkedStoryIds = es.linkedStoryIds.filter(id => id !== storyId);
  } else {
    es.linkedStoryIds.push(storyId);
  }
  saveState();
}

function saveCurrentES() {
  const es = getActiveES();
  if (!es) return;
  es.companyId = document.getElementById("es-company-id").value;
  es.wordLimit = parseInt(document.getElementById("es-limit").value, 10) || 400;
  es.question = document.getElementById("es-question").value;
  es.body = document.getElementById("es-body").value;
  saveState();
  updateESCharCounter();
  renderESSelector();
}

function updateESCharCounter() {
  const body = document.getElementById("es-body").value || "";
  const limit = parseInt(document.getElementById("es-limit").value, 10) || 400;
  const len = body.replace(/\r?\n/g, "").length;
  const pct = Math.min(100, Math.round((len / limit) * 100));

  document.getElementById("es-metric-current").textContent = len;
  document.getElementById("es-metric-limit").textContent = limit;
  document.getElementById("es-metric-pct").textContent = `${pct}%`;
  document.getElementById("es-progress-bar").style.width = `${pct}%`;

  const statusEl = document.getElementById("es-metric-status");
  if (len > limit) {
    statusEl.textContent = currentLang === "zh" ? "字数超限" : "文字数超過";
  } else if (pct >= 90) {
    statusEl.textContent = currentLang === "zh" ? "字数达标 ✓" : "適正範囲 ✓";
  } else {
    statusEl.textContent = currentLang === "zh" ? "建议填满 90%以上" : "目標 90%以上";
  }
}

function saveESVersionSnapshot(customLabel) {
  const es = getActiveES();
  if (!es) return;
  es.versions = es.versions || [];
  const nextNum = es.versions.length + 1;
  const now = new Date().toTimeString().slice(0, 5);
  es.versions.unshift({
    ver: customLabel || `v${nextNum}`,
    time: now,
    body: es.body
  });
  saveState();
  loadActiveESToForm();
  showToast(`已保存版本 v${nextNum}`);
}

function restoreESVersion(idx) {
  const es = getActiveES();
  if (!es || !es.versions || !es.versions[idx]) return;
  es.body = es.versions[idx].body;
  saveState();
  loadActiveESToForm();
  showToast(`已恢复至 ${es.versions[idx].ver}`);
}

function createNewESApplication() {
  const newES = {
    id: "es-" + Date.now(),
    companyId: state.activeCompanyId || (state.companies[0]?.id || ""),
    question: "貴社を志望する理由と、入社後に実現したいことを400字以内で教えてください。",
    wordLimit: 400,
    linkedStoryIds: [state.stories[0]?.id].filter(Boolean),
    body: "",
    versions: [],
    review: null
  };
  state.esList.unshift(newES);
  state.activeESId = newES.id;
  saveState();
  renderESSelector();
  loadActiveESToForm();
  showToast("已新建 ES 题目");
}

function renderESReviewBoard(es) {
  const container = document.getElementById("es-review-result");
  if (!es || !es.review) {
    container.innerHTML = `
      <div class="bg-white/60 rounded-2xl p-6 text-center my-2">
        <h4 class="text-xs font-extrabold text-neutral-800 mb-1">等待生成修改建议</h4>
        <p class="text-xs text-neutral-500">在左侧勾选经历并输入初稿后，点击「AI 润色与改写」或「预览效果」。</p>
      </div>
    `;
    return;
  }

  const { missingQuestions = [], factChecks = [], proposedText = "", rationale = "" } = es.review;
  const cleanProposed = proposedText.replace(/（\d+字）$/, "").trim();
  const propLen = cleanProposed.replace(/\r?\n/g, "").length;

  container.innerHTML = `
    <div class="bg-white/95 rounded-2xl p-4 border-2 border-[#FE5E0E] shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FE5E0E] text-white">改写方案</span>
          <span class="text-xs font-extrabold text-neutral-900 font-mono tabular-nums">${propLen} 字</span>
        </div>
        <button onclick="acceptESProposal()" class="btn-pill-primary py-1 px-3.5 text-xs">
          采纳此方案（自动备份原稿）
        </button>
      </div>
      <p class="text-xs font-semibold text-neutral-900 leading-relaxed bg-[#F4F6F9] p-3 rounded-xl mb-2">${escapeHTML(proposedText)}</p>
      <div class="text-[11px] text-neutral-600 font-medium leading-relaxed">
        <strong class="text-neutral-900">修改说明：</strong>${escapeHTML(rationale)}
      </div>
    </div>

    <div class="bg-white/90 rounded-2xl p-3.5 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-extrabold text-neutral-900">事实核对（对比个人经历库）</span>
        <span class="badge-survey-yellow">零编造</span>
      </div>
      <div class="space-y-1.5">
        ${factChecks.map(fc => `
          <div class="p-2.5 rounded-xl bg-[#F4F6F9] text-xs flex items-start gap-2 border-l-4 ${fc.status === 'VERIFIED' ? 'border-emerald-600' : 'border-[#FE5E0E]'}">
            <span class="font-bold shrink-0">${fc.status === 'VERIFIED' ? '已核对' : '需确认'}</span>
            <div>
              <div class="font-bold text-neutral-900">${escapeHTML(fc.claim)}</div>
              <div class="text-[11px] text-neutral-600">${escapeHTML(fc.note)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="bg-white/90 rounded-2xl p-3.5 shadow-sm">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs font-extrabold text-neutral-900">面试追问准备</span>
      </div>
      <ul class="space-y-1.5 text-xs text-neutral-700 font-medium list-disc pl-4">
        ${missingQuestions.map(q => `<li>${escapeHTML(q)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function acceptESProposal() {
  const es = getActiveES();
  if (!es || !es.review?.proposedText) return;
  saveESVersionSnapshot("采纳前备份");
  es.body = es.review.proposedText.replace(/（\d+字）$/, "").trim();
  saveState();
  loadActiveESToForm();
  showToast("已采纳改写方案，原稿已备份至历史版本");
}

/********************************************************************
 * 【路标 7】AI 引擎：Prompt 组装、API 直连与网页桥接
 ********************************************************************/
function buildCompanyPrompt(comp) {
  return `你是一位精通日本新卒就职（IT/DX企划/SaaS/咨询方向）的买方求职顾问。
请严格基于以下企业原始资料，拆解真实业务情况，不把宣传套话当成事实。

【企业名称】${comp.name}
【目标岗位】${comp.role}
【重点核实问题】${comp.focus || "区分真企划与假企划(SES/纯销售)，核实新人实际工作内容"}
【原始资料】
${comp.rawText}

请只输出合法的 JSON 格式，结构如下：
{
  "businessDecode": [
    {
      "title": "盈利模式或宣传词解码标题",
      "reality": "拆解其真实业务含义（区分建前与本音）",
      "quote": "摘录原始资料中的原句作为依据",
      "tag": "収益構造 或 建前vs本音"
    }
  ],
  "redFlags": [
    {
      "level": "HIGH 或 MED",
      "point": "潜在疑点或未明信息标题",
      "detail": "具体解释需要核实的条件",
      "quote": "原文依据（如有）"
    }
  ],
  "questions": [
    {
      "occasion": "説明会 / 一次面接 / カジュアル面談",
      "q_ja": "自然、礼貌且能核实实情的商务日语逆質問",
      "intent": "中文说明该问题的验证目的"
    }
  ]
}`;
}

function buildESPrompt(es) {
  const comp = state.companies.find(c => c.id === es.companyId);
  const linkedStories = state.stories.filter(s => (es.linkedStoryIds || []).includes(s.id));
  return `你是一位严格的日本新卒 ES 审计官。
请严格基于用户勾选的【个人真实经历】与【目标企业信息】对 ES 草稿进行润色与改写。
【铁律】：严禁编造经历库中不存在的数字、职位或成果！将视角拉升到B端系统/业务标准化视角。

【目标企业】${comp ? comp.name + " / " + comp.role : "未指定"}
【ES题目】${es.question}
【字数上限】${es.wordLimit} 字（改写后的日文字符数控制在 ${Math.round(es.wordLimit * 0.92)}～${es.wordLimit} 字之间，結論ファースト）
【允许引用的个人经历】
${JSON.stringify(linkedStories, null, 2)}
【当前草稿/大纲】
${es.body || "（请直接根据勾选的经历针对题目生成第一版方案）"}

请只输出合法的 JSON 格式，结构如下：
{
  "missingQuestions": [
    "指出草稿中面试官可能深挖的1~2个细节"
  ],
  "factChecks": [
    {
      "status": "VERIFIED 或 UNVERIFIED",
      "claim": "草稿或方案中的具体主张/数据",
      "note": "核对是否与个人经历库一致"
    }
  ],
  "proposedText": "符合日本新卒水准的商务日语改写正文（严禁超字数）",
  "rationale": "中文简明解释修改思路"
}`;
}

async function runCompanyAnalysis(mode) {
  const comp = getActiveCompany();
  if (!comp || !comp.rawText.trim()) {
    showToast("请先粘贴招聘原文，或点击「填入示例」");
    return;
  }
  const prompt = buildCompanyPrompt(comp);

  if (mode === "bridge" || !state.settings.apiKey) {
    currentBridgeTask = "company";
    document.getElementById("bridge-prompt-out").value = prompt;
    document.getElementById("bridge-json-in").value = "";
    openModal("bridgeModal");
    return;
  }

  const skel = document.getElementById("company-skeleton");
  const resBox = document.getElementById("company-analysis-result");
  skel.classList.remove("hidden");
  skel.classList.add("flex");
  resBox.classList.add("opacity-30");

  try {
    const json = await callGeminiJSON(prompt);
    comp.analysis = json;
    saveState();
    renderCompanyList();
    renderCompanyAnalysisBoard(comp);
    showToast("AI 拆解完成");
  } catch (err) {
    showToast("接口调用失败，请切换至复制提示词模式");
  } finally {
    skel.classList.add("hidden");
    skel.classList.remove("flex");
    resBox.classList.remove("opacity-30");
  }
}

async function runESReview(mode) {
  const es = getActiveES();
  if (!es) return;
  const prompt = buildESPrompt(es);

  if (mode === "bridge" || !state.settings.apiKey) {
    currentBridgeTask = "es";
    document.getElementById("bridge-prompt-out").value = prompt;
    document.getElementById("bridge-json-in").value = "";
    openModal("bridgeModal");
    return;
  }

  const skel = document.getElementById("es-skeleton");
  const resBox = document.getElementById("es-review-result");
  skel.classList.remove("hidden");
  skel.classList.add("flex");
  resBox.classList.add("opacity-30");

  try {
    const json = await callGeminiJSON(prompt);
    es.review = json;
    saveState();
    renderESReviewBoard(es);
    showToast("ES 改写方案已生成");
  } catch (err) {
    showToast("接口调用失败");
  } finally {
    skel.classList.add("hidden");
    skel.classList.remove("flex");
    resBox.classList.remove("opacity-30");
  }
}

async function callGeminiJSON(promptText) {
  const key = state.settings.apiKey.trim();
  const model = state.settings.model || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.3
      }
    })
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const data = await resp.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return extractAndParseJSON(text);
}

function runDemoSimulation(type) {
  if (type === "company") {
    const skel = document.getElementById("company-skeleton");
    const resBox = document.getElementById("company-analysis-result");
    skel.classList.remove("hidden");
    skel.classList.add("flex");
    resBox.classList.add("opacity-25");

    setTimeout(() => {
      const comp = getActiveCompany();
      comp.analysis = {
        businessDecode: [
          {
            title: "核心业务实质：高留存B2B SaaS + 业务标准化咨询",
            reality: "解约率0.6%且客户达3,500家，证明其拥有成熟的标准化SaaS产品而非纯外包开发。核心工作是将客户的非标流程梳理并映射到标准SaaS功能上。",
            quote: "契約社数3,500社突破、チャーンレート（解約率）0.6%の安定基盤",
            tag: "収益構造"
          },
          {
            title: "轮岗机制解码：前半年内勤销售 + 导入引导",
            reality: "明确写出前半年需做内勤销售与导入引导。好处是有明确的6个月期限，但需确认半年后转入产品企划岗的考核标准。",
            quote: "入社後半年はインサイドセールスおよび導入オンボーディングを担当",
            tag: "建前 vs 本音"
          }
        ],
        redFlags: [
          {
            level: "MED",
            point: "半年轮岗后的转岗兑现率未知",
            detail: "需核实全员都能在半年后回到企划线，还是仅有少数人能转入プロダクト企画。",
            quote: "入社後半年はインサイドセールスおよび導入オンボーディングを担当"
          }
        ],
        questions: [
          {
            occasion: "カジュアル面談 / 一次面接",
            q_ja: "入社後半年のインサイドセールス・導入支援期間を経て、プロダクト企画や業務標準化コンサルティングへ移行する際の具体的な評価基準について伺えますでしょうか？",
            intent: "锁定“半年后转回幕后企划”的承诺，防止被长期留在前台销售线。"
          }
        ]
      };
      saveState();
      skel.classList.add("hidden");
      skel.classList.remove("flex");
      resBox.classList.remove("opacity-25");
      renderCompanyList();
      renderCompanyAnalysisBoard(comp);
      showToast("分析效果预览完成");
    }, 850);
  } else {
    const skel = document.getElementById("es-skeleton");
    const resBox = document.getElementById("es-review-result");
    skel.classList.remove("hidden");
    skel.classList.add("flex");
    resBox.classList.add("opacity-25");

    setTimeout(() => {
      saveCurrentES();
      loadActiveESToForm();
      skel.classList.add("hidden");
      skel.classList.remove("flex");
      resBox.classList.remove("opacity-25");
      showToast("ES 审计效果预览完成");
    }, 850);
  }
}

function copyBridgePrompt() {
  copyText(document.getElementById("bridge-prompt-out").value);
}

function applyBridgeJSON() {
  const raw = document.getElementById("bridge-json-in").value;
  try {
    const parsed = extractAndParseJSON(raw);
    if (currentBridgeTask === "company") {
      const comp = getActiveCompany();
      comp.analysis = parsed;
      saveState();
      renderCompanyList();
      renderCompanyAnalysisBoard(comp);
    } else if (currentBridgeTask === "es") {
      const es = getActiveES();
      es.review = parsed;
      saveState();
      renderESReviewBoard(es);
    }
    closeModal("bridgeModal");
    showToast("成功解析并生成卡片");
  } catch (e) {
    showToast("JSON 格式有误，请确认复制了完整的大括号内容");
  }
}

function extractAndParseJSON(str) {
  const cleaned = str.replace(/```json/gi, "").replace(/```/g, "").trim();
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace === -1 || lastBrace === -1) throw new Error("No JSON");
  return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
}

/********************************************************************
 * 【路标 8】新手互动教程系统
 ********************************************************************/
let isTourActive = false;
let tourStepIndex = 0;

const TOUR_STEPS = [
  {
    targetId: "tour-target-nav",
    tab: "companies",
    title_zh: "1. 核心三步胶囊导航",
    desc_zh: "顶部与底部保留黑色胶囊视觉重心，按「01 企业排雷 ➔ 02 经历资产 ➔ 03 ES 审计」推进；左侧则是快捷工具栏。",
    title_ja: "1. 3つのコアモジュール",
    desc_ja: "「01 企業分析 ➔ 02 経験庫 ➔ 03 ES作成」の順にスムーズに進められます。",
    action_zh: "",
    action_ja: ""
  },
  {
    targetId: "tour-target-pipeline",
    tab: "companies",
    title_zh: "2. 待放区与联动极简日历",
    desc_zh: "鼠标移到企业卡片上即可点击「移入待放区」或「删除」；在中栏选择关键日期后，左下角日历会自动点亮橙色标记。",
    title_ja: "2. 保留箱と連動カレンダー",
    desc_ja: "カードのホバーで保留・削除が可能。締切日を設定すると下部カレンダーに自動反映されます。",
    action_zh: "",
    action_ja: ""
  },
  {
    targetId: "tour-target-source",
    tab: "companies",
    title_zh: "3. 录入招聘原文（实时自动保存）",
    desc_zh: "所有输入都会实时自动保存在本机浏览器。点击下方按钮可立即填入一份示例企业体验：",
    title_ja: "3. 募集要項の入力（自動保存）",
    desc_ja: "入力内容は即座に自動保存されます。下のボタンでサンプルを挿入できます：",
    action_zh: `<button type="button" onclick="fillSampleCompanyData()" class="w-full py-1.5 px-3 rounded-full bg-[#FAF5B2] hover:brightness-95 text-neutral-900 text-xs font-extrabold transition">填入示例企业数据</button>`,
    action_ja: `<button type="button" onclick="fillSampleCompanyData()" class="w-full py-1.5 px-3 rounded-full bg-[#FAF5B2] hover:brightness-95 text-neutral-900 text-xs font-extrabold transition">サンプル企業を挿入</button>`
  },
  {
    targetId: "tour-target-analysis",
    tab: "companies",
    title_zh: "4. 业务拆解与提问清单",
    desc_zh: "右侧自动将原文拆解为业务实态、潜在疑点与日语逆質問。点击下方按钮预览效果：",
    title_ja: "4. 分析結果ボード",
    desc_ja: "原文根拠付きで業務実態・懸念・逆質問を生成します：",
    action_zh: `<button type="button" onclick="runDemoSimulation('company')" class="w-full py-1.5 px-3 rounded-full bg-[#FAF5B2] hover:brightness-95 text-neutral-900 text-xs font-extrabold transition">预览拆解效果</button>`,
    action_ja: `<button type="button" onclick="runDemoSimulation('company')" class="w-full py-1.5 px-3 rounded-full bg-[#FAF5B2] hover:brightness-95 text-neutral-900 text-xs font-extrabold transition">デモを表示</button>`
  }
];

function startInteractiveTour() {
  isTourActive = true;
  tourStepIndex = 0;
  document.getElementById("tour-spotlight-ring").classList.remove("hidden");
  document.getElementById("tour-floating-card").classList.remove("hidden");
  renderTourStep();
}

function renderTourStep() {
  const step = TOUR_STEPS[tourStepIndex];
  if (!step) return endInteractiveTour();

  if (activeTab !== step.tab) {
    switchTab(step.tab);
  }

  document.getElementById("tour-step-badge").textContent = currentLang === "zh"
    ? `第 ${tourStepIndex + 1} / ${TOUR_STEPS.length} 步`
    : `ステップ ${tourStepIndex + 1} / ${TOUR_STEPS.length}`;
  document.getElementById("tour-title").textContent = currentLang === "zh" ? step.title_zh : step.title_ja;
  document.getElementById("tour-desc").textContent = currentLang === "zh" ? step.desc_zh : step.desc_ja;
  document.getElementById("tour-action-slot").innerHTML = currentLang === "zh" ? step.action_zh : step.action_ja;

  const prevBtn = document.getElementById("tour-prev-btn");
  prevBtn.disabled = tourStepIndex === 0;
  prevBtn.style.opacity = tourStepIndex === 0 ? "0.35" : "1";

  const nextBtn = document.getElementById("tour-next-btn");
  nextBtn.textContent = tourStepIndex === TOUR_STEPS.length - 1
    ? (currentLang === "zh" ? "完成" : "完了")
    : (currentLang === "zh" ? "下一步" : "次へ");

  const targetEl = document.getElementById(step.targetId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  requestAnimationFrame(() => {
    setTimeout(positionTourElements, 120);
  });
}

function positionTourElements() {
  if (!isTourActive) return;
  const step = TOUR_STEPS[tourStepIndex];
  const targetEl = document.getElementById(step?.targetId);
  const ring = document.getElementById("tour-spotlight-ring");
  const card = document.getElementById("tour-floating-card");

  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const pad = 6;

  ring.style.top = `${Math.max(4, rect.top - pad)}px`;
  ring.style.left = `${Math.max(4, rect.left - pad)}px`;
  ring.style.width = `${Math.min(window.innerWidth - 8, rect.width + pad * 2)}px`;
  ring.style.height = `${Math.min(window.innerHeight - 8, rect.height + pad * 2)}px`;

  const cardWidth = card.offsetWidth || 350;
  const cardHeight = card.offsetHeight || 200;
  const margin = 14;

  let top = rect.bottom + margin;
  if (top + cardHeight > window.innerHeight - 16) {
    if (rect.top - cardHeight - margin > 16) {
      top = rect.top - cardHeight - margin;
    } else {
      top = Math.max(16, window.innerHeight - cardHeight - 24);
    }
  }

  let left = rect.left;
  if (left + cardWidth > window.innerWidth - 16) {
    left = Math.max(12, window.innerWidth - cardWidth - 16);
  }
  left = Math.max(12, left);

  card.style.top = `${top}px`;
  card.style.left = `${left}px`;
}

function nextTourStep() {
  if (tourStepIndex < TOUR_STEPS.length - 1) {
    tourStepIndex++;
    renderTourStep();
  } else {
    endInteractiveTour();
  }
}

function prevTourStep() {
  if (tourStepIndex > 0) {
    tourStepIndex--;
    renderTourStep();
  }
}

function endInteractiveTour() {
  isTourActive = false;
  document.getElementById("tour-spotlight-ring").classList.add("hidden");
  document.getElementById("tour-floating-card").classList.add("hidden");
  state.settings.tourCompleted = true;
  saveState();
}

/********************************************************************
 * 【路标 9】语言切换、系统弹窗与备份工具
 ********************************************************************/
function setLanguage(lang, persist = true) {
  currentLang = lang;
  state.settings.lang = lang;
  if (persist) saveState();

  document.getElementById("lang-zh").className = lang === "zh" ? "segmented-item active" : "segmented-item";
  document.getElementById("lang-ja").className = lang === "ja" ? "segmented-item active" : "segmented-item";

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  updateAIStatusIndicator();
  if (isTourActive) renderTourStep();
}

function updateAIStatusIndicator() {
  const hasKey = Boolean(state.settings.apiKey && state.settings.apiKey.trim());
  const dot = document.getElementById("ai-status-dot");
  const label = document.getElementById("ai-mode-label");
  if (hasKey) {
    dot.className = "w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse";
    label.textContent = currentLang === "zh" ? "接口直连" : "API直結";
  } else {
    dot.className = "w-1.5 h-1.5 rounded-full bg-[#FE5E0E]";
    label.textContent = currentLang === "zh" ? "网页桥接" : "Web連携";
  }
}

function openModal(id) {
  if (id === "settingsModal") {
    document.getElementById("settings-api-key").value = state.settings.apiKey || "";
    document.getElementById("settings-model").value = state.settings.model || "gemini-2.5-flash";
  }
  const m = document.getElementById(id);
  m.classList.remove("hidden");
  m.classList.add("flex");
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.add("hidden");
  m.classList.remove("flex");
}

function saveSettingsFromModal() {
  state.settings.apiKey = document.getElementById("settings-api-key").value.trim();
  state.settings.model = document.getElementById("settings-model").value;
  saveState();
  updateAIStatusIndicator();
  closeModal("settingsModal");
  showToast("设置已保存");
}

function exportAllDataJSON() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `job_workspace_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("已导出备份文件");
}

function importDataJSON(ev) {
  const file = ev.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported.companies || !imported.stories) throw new Error("Invalid");
      state = imported;
      saveState();
      initApp();
      closeModal("settingsModal");
      showToast("数据恢复成功");
    } catch (err) {
      showToast("备份文件格式不正确");
    }
  };
  reader.readAsText(file);
}

function resetToCleanWorkspace() {
  localStorage.removeItem(STORAGE_KEY);
  state = getDefaultState();
  saveState();
  initApp();
  closeModal("settingsModal");
  showToast("已重置为初始状态");
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("已复制到剪贴板");
  });
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-text").textContent = msg;
  t.classList.remove("hidden");
  t.classList.add("flex");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.add("hidden");
    t.classList.remove("flex");
  }, 3000);
}

function escapeHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeJS(str) {
  return String(str || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
}

window.addEventListener("DOMContentLoaded", initApp);