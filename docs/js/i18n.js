
(() => {
  const LANGS = ["ja", "zh"];
  const DEFAULT_LANG = "ja";
  const STORAGE_KEY = "site_lang";

  const DICTS = {
    "ja": {
      "index.title": "ようこそ、私の世界へ！",
      "nav.home": "ホーム",
      "nav.about": "自己紹介",
      "nav.projects": "プロジェクト紹介",
      "nav.timeline": "キャリアタイムライン",
      "nav.skills": "技術スキル",
      "index.hero.hello": "初めまして、",
      "index.hero.name": "何暁丹と申します。",

      "about.title": "自己紹介",
      "common.back": "戻る",
      "about.body_html": "初めまして、何暁丹と申します。<br><br>中国・武漢出身で、2022年10月に来日して以来、日本語を学習してまいりました。現在は日本語能力試験N2に合格し、業務における読み書きや会話に支障はございません。<br><br>これまで中国ではUnityプログラマーとして4年間、建設・製造分野向けの産業用VR/ARシステム開発に従事し、要件定義から実装、システムテストまで一貫して担当してまいりました。外部デバイスとの連携やシステム開発の経験も豊富です。<br><br>来日後はJava、Spring Boot、Spring MVCを中心にバックエンド開発に取り組み、フロントエンドではHTML / CSS / JavaScript / Reactを用いた開発を行いました。データベースではCRUD操作に加え、複雑なSQLクエリやパフォーマンス調整にも対応可能です。<br><br>直近のプロジェクトでは、Kickflowと連携した大規模決済代行サービスシステムに参画し、基本設計から結合テストまで一連の工程を担当しました。AWS環境での開発、BFF・BE・共通モジュールの設計、API開発やS3連携、DB設計など幅広い領域を担当し、コードレビューやチーム開発にも積極的に貢献しております。<br><br>常に新しい技術を学び、自己研鑽を続けながら、チームに貢献できるエンジニアを目指しています。<br>どうぞよろしくお願いいたします。",
      "projects.title": "プロジェクト紹介",
      "projects.more": "詳しくはこちら",
      "projects.sectionTag": "Project & Introduction",
    
      "projects.item1.title": "鄂州製鋼所デジタルツインのプロジェクト",
      "projects.item1.industry": "開発業種：製鋼業",
      "projects.item1.body_html": "製鋼所をシステムに複製し、生産現場で発生する様々な形式のデータと接続できます。生産現場で発生するデータがシステム上で集約され、状況を一目で把握できます。立体的な空間表現により、現場を訪れなくても製造現場の状況を手に取るように把握できます。関連データや動画との連携により、多角的な情報を基に正確で迅速な状況判断ができます。",
    
      "projects.item2.title": "VR消防訓練体験",
      "projects.item2.industry": "開発業種：水力発電業",
      "projects.item2.body_html": "水力発電所では、従業員向けのVR研修アプリを利用して、消火訓練をより安全で緊張感のあるものにすることができます。研修内容はVRで表現され、火災と同様の環境を再現できるため、実際に火を使わずに効果的な訓練が可能です。",
    
      "projects.item3.title": "作業中の高所からの墜落体験",
      "projects.item3.industry": "開発業種：水力発電業",
      "projects.item3.body_html": "高所作業中の墜落事故をVRで完全再現し、恐怖の疑似体験を通じて事故を未然に防ぐことを目的としています。さらに、このシステムは安全教育や新人研修など幅広い場面で活用可能であり、従業員の安全意識向上やリスクマネジメントの強化にも貢献します。",
    
      "projects.item4.title": "訓練分野におけるVRのシステム",
      "projects.item4.industry": "開発業種：水力発電業",
      "projects.item4.body_html": "Hi5 VRグローブを装着して仮想空間に没入し、繰り返しの実技確認が必要な現場実習などを、実際の現場にいるかのような臨場感でトレーニングできます。",
    
      "projects.item5.title": "ARグラスを装着した巡視点検業務用のアプリケーション",
      "projects.item5.industry": "開発業種：水力発電業",
      "projects.item5.body_html": "工事現場検査をリモートで実施。デジタル化した作業手順書を閲覧しながら作業でき、現場映像や音声を遠隔の技術者へリアルタイム伝送。支援者はマニュアルや指示を書き込んだ画像を作業者のARグラス上に表示できます。",
    
      "projects.item6.title": "契約管理・決済代行システム",
      "projects.item6.industry": "開発業種：金融・決済システム",
      "projects.item6.body_html": "大手決済代行サービスにおける契約管理システムの開発プロジェクト。Kickflowとのワークフロー連携により、申込・審査・振込通知までを一元的に管理。<br><br><b>担当内容・役割：</b><br>1. 基本設計〜結合テストまで一連の工程を担当<br>2. BFF・BE・共通モジュールのAPI設計・実装<br>3. データベース（PostgreSQL）設計・SQL実装<br>4. AWS連携（S3、EventBridge 等）<br>5. フロントエンド改修（React / TypeScript）および画面テスト<br>6. 単体・結合テストの実施、バグ対応、コードレビュー",
      "timeline.title": "キャリアタイムライン",
      "timeline.expandAll": "すべて展開",
      "timeline.collapseAll": "すべて折りたたむ",

      "timeline.item1.date": "2014年12月",
      "timeline.item1.company": "武漢国測三聯水電設備有限公司",
      "timeline.item1.desc": "プロジェクトマネージャーに従事。",

      "timeline.item2.date": "2018年5月",
      "timeline.item2.company": "武漢藍海科創技術有限公司",
      "timeline.item2.desc": "VRエンジニアとして、Unityを使用した仮想現実プロジェクトの開発と技術研究を担当。",

      "timeline.item3.date": "2019年2月",
      "timeline.item3.company": "中冶智誠（武漢）工程技術有限公司",
      "timeline.item3.desc": "VR/ARエンジニアとして、Unityでの開発と新技術の検証に従事し、チームと共に技術課題を解決。",

      "timeline.item4.date": "2022年10月",
      "timeline.item4.company": "能達日本語学校",
      "timeline.item4.desc": "来日後、日本語学校で学習を進め、文化理解と語学力を向上。JLPT N2 を取得。",

      "timeline.item5.date": "2023年7月",
      "timeline.item5.company": "NetWisdom株式会社",
      "timeline.item5.desc": "Spring MVC / Spring Boot などを用いた Web 開発に従事。",
      "skills.title": "技術スキル",
      "common.back": "戻る"
    },
    "zh": {
      "index.title": "欢迎来到我的世界！",
      "nav.home": "首页",
      "nav.about": "自我介绍",
      "nav.projects": "项目介绍",
      "nav.timeline": "职业时间线",
      "nav.skills": "技术技能",
      "index.hero.hello": "初次见面，",
      "index.hero.name": "我叫何晓丹。",

      "about.title": "自我介绍",
      "common.back": "返回",
      "about.body_html": "你好，我是<b>何晓丹</b>。<br><br>我来自中国武汉，自 2022 年 10 月来日以来一直学习日语，已通过 JLPT N2，能够胜任工作中的读写与沟通。<br><br>在中国期间，我作为 Unity 开发工程师从事了 4 年工业 VR 和 AR 系统的研发，服务于建筑、制造等行业，负责从需求定义到实现、系统测试的完整流程，并具备丰富的外设联动与系统开发经验。<br><br>来日本后，我主要从事 Java、Spring Boot、Spring MVC 的后端开发；前端方面使用过 HTML / CSS / JavaScript / React。数据库方面除了常规 CRUD，也能处理复杂 SQL 查询与性能调优。<br><br>最近我参与了一个与 <b>Kickflow 联动的大型代收付系统</b>，负责从基本设计到结合集成测试的全流程工作，覆盖 AWS 环境开发、BFF/BE/共通模块设计、API 开发与 S3 对接、数据库设计等多个环节，并积极参与代码评审与团队协作。<br><br>我会持续学习新技术，不断精进自己，力争成为为团队持续创造价值的工程师。<br>谢谢。",
      "projects.title": "项目介绍",
      "projects.more": "了解更多",

    
      "projects.item1.title": "鄂州钢厂数字孪生项目",
      "projects.item1.industry": "开发行业：炼钢业",
      "projects.item1.body_html": "将钢厂在系统中进行数字复制，并与现场产生的多种数据类型打通。现场数据在系统中集中汇聚，状态一目了然；通过三维空间表达，即使不去现场也能掌握生产情况。结合相关数据与视频进行联动，在多维信息基础上实现更准确、快速的判断。",
    
      "projects.item2.title": "VR 消防训练体验",
      "projects.item2.industry": "开发行业：水力发电",
      "projects.item2.body_html": "面向水电站员工的 VR 培训应用，使灭火训练更安全、更有临场感。训练内容以 VR 呈现，可还原类似火灾的环境，无需动用真火即可开展高效训练。",
    
      "projects.item3.title": "高处作业坠落体验",
      "projects.item3.industry": "开发行业：水力发电",
      "projects.item3.body_html": "完整还原高处作业的坠落事故，通过沉浸式“恐惧体验”来提升安全意识、预防事故。",
    
      "projects.item4.title": "训练领域的 VR 系统",
      "projects.item4.industry": "开发行业：水力发电",
      "projects.item4.body_html": "佩戴 Hi5 VR 手套沉浸于虚拟空间，对需要反复实操确认的训练进行高还原度演练，如同置身真实现场。",
    
      "projects.item5.title": "佩戴 AR 眼镜的巡检应用",
      "projects.item5.industry": "开发行业：水力发电",
      "projects.item5.body_html": "远程实施工地巡检。作业者可在 AR 眼镜中查看数字化作业指引，并将现场视频/音频实时传送给远端技术人员；支援者可将带有标注的图片/指令推送并显示在作业者的 AR 眼镜上。",
    
      "projects.item6.title": "契约管理与代收付系统",
      "projects.item6.industry": "开发行业：金融·支付系统",
      "projects.item6.body_html": "面向大型支付代办服务的契约管理系统。通过与 Kickflow 的工作流联动，实现从申请、审核到打款通知的全流程统一管理。<br><br><b>本人职责：</b><br>1. 负责从基本设计到系统集成测试的各阶段<br>2. 设计与实现 BFF/BE/共通模块的 API<br>3. 设计 PostgreSQL 并编写 SQL<br>4. AWS 联动（S3、EventBridge 等）<br>5. 前端改修（React/TypeScript）与页面测试<br>6. 单体/结合测试、缺陷修复、代码评审",
      "timeline.title": "职业时间线",
      "timeline.expandAll": "全部展开",
      "timeline.collapseAll": "全部收起",

      "timeline.item1.date": "2014年12月",
      "timeline.item1.company": "武汉国测三联水电设备有限公司",
      "timeline.item1.desc": "担任项目经理。",

      "timeline.item2.date": "2018年5月",
      "timeline.item2.company": "武汉蓝海科创技术有限公司",
      "timeline.item2.desc": "作为 VR 工程师，负责使用 Unity 开发虚拟现实项目并进行技术研究。",

      "timeline.item3.date": "2019年2月",
      "timeline.item3.company": "中冶智诚（武汉）工程技术有限公司",
      "timeline.item3.desc": "作为 VR/AR 工程师，使用 Unity 开发并验证新技术，与团队一起解决技术难题。",

      "timeline.item4.date": "2022年10月",
      "timeline.item4.company": "能达日语学校",
      "timeline.item4.desc": "来日后在日语学校学习，提升语言能力与文化理解，并取得 JLPT N2。",

      "timeline.item5.date": "2023年7月",
      "timeline.item5.company": "NetWisdom株式会社",
      "timeline.item5.desc": "从事基于 Spring MVC / Spring Boot 的 Web 开发。",
      "skills.title": "技术技能",
      "common.back": "返回"
    }
  };

  const applyI18n = (dict) => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k]) el.innerHTML = dict[k];
    });
  };

  const setActiveBtn = (lang) => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  };

  const switchLang = (lang) => {
    if (!LANGS.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    setActiveBtn(lang);                       
    const dict = DICTS[lang] || DICTS[DEFAULT_LANG];
    applyI18n(dict);
    document.documentElement.setAttribute("lang", lang);
  };

  document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => switchLang(btn.dataset.lang));
    });

    const lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    switchLang(lang);
  });
})();
