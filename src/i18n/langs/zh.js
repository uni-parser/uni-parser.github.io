import { partnerImages } from '../imagePaths';

export default {
  header: {
    home: '首页',
    core: '核心功能',
    report: '技术报告',
    demo: 'Demo',
    applications: '下游应用',
    partners: '合作',
    language: '语言',
    chinese: '中文',
    english: 'EN'
  },
  title: {
    news: '🎉 Uni-Parser开始内测！',
    emphases: [
      '🎉 Uni-Parser开始内测',
      '🥰 欢迎关注Uni-Parser微信/B站/知乎/小红书'
    ],
    buttons: {
      paper: '论文',
      chinese: '中译版',
      code: '代码',
      demo: '示例',
      poster: '海报',
      slide: '幻灯片',
      video_intro: '视频(介绍)',
      video_tutorial: '视频(教程)'
    },
    authors: {
      'junyaohu': '你的名字',
      'anya': 'Anya Forger',
      'capoo': '猫猫虫咖波'
    },
    addresses: {
      'home': '主页大学',
      'ikun': 'IKUN大学'
    },
    contribution: '以上仅为部分贡献者'
  },
  bibtex: {
    title: 'BibTeX',
    copy: '🖱️ 点击此处复制BibTeX。'
  },
  collapse: {
    title: '详细讨论',
    consistency: '一致性',
    consistency_detail: '与现实生活一致：符合现实生活的流程、逻辑，并遵守用户习惯的语言和习惯;',
    feedback: '反馈',
    feedback_detail: '操作反馈：通过样式更新和交互效果，让用户清晰地感知自己的操作;',
    efficiency: '效率',
    efficiency_detail: '简化流程：保持操作流程简单直观;',
    controllability: '可控',
    controllability_detail: '决策权：可以接受关于操作的建议，但不要为用户做决定;'
  },
  comment: {
    title: '💬 评论'
  },
  core_features: {
    title: '核心功能',
    layout_title: '复杂版面提取',
    layout_desc: '复杂版面解析',
    table_title: '表格解析',
    table_desc: '多类型表格高精度结构化解析',
    molecule_title: '分子定位与解析',
    molecule_desc: '分子式定位与结构解析指标显著领先',
    showcase_placeholder: '真实案例展示'
  },
  custom_footer: {
    friendly_links: '友情链接',
    email_contact: '邮箱联系',
    commercial_contact: '商业合作',
    academic_contact: '学术合作',
    legal_declaration: '法律声明',
    user_agreement: '用户协议',
    privacy_agreement: '隐私协议',
    join_community: '加入微信社群：'
  },
  downstream_apps: {
    title: '下游应用',
    extraction_title: '文献结构化信息抽取',
    extraction_items: {
      molecule_library: '分子库',
      molecule_library_desc: '专利分子库 & 文献分子库；用于分子检索、属性挖掘与专利鉴权',
      reaction_library: '反应库',
      reaction_library_desc: '构建反应式数据库，助力有机合成 AI4S 模型训练',
      structured_database: '文献结构化数据库',
      structured_database_desc: '以文献为中心的结构化知识库',
      target_database: '靶点/活性/谱图数据库',
      target_database_desc: '多类型专业数据库构建',
      experiment_extraction: '实验信息抽取',
      experiment_extraction_desc: '助力自动化实验 Agent 应用'
    },
    eco_ability_title: '生态能力',
    eco_ability_items: {
      uni_miner: '文献辅助标注 Uni-Miner',
      scimaster: '科学Agent SciMaster',
      uni_finder: '科学大模型 Uni-Finder',
      bohrium_library: '文献库 Bohrium',
      bohrium_reader: '文献阅读 Bohrium'
    }
  },
  echart: {
    title: '量化结果'
  },
  gaussian_splats: {
    title: '3DGS模型',
    thanks: '感谢 {0}，我们可以在这里可视化3DGS模型。'
  },
  hero: {
    title: '面向科研工作者设计的<br/>工业级文献与专利解析工具',
    features: [
      '超快解析速度：低至0.05s/页',
      '超高解析精度：表格、分子等多项解析能力大幅度领先',
      '大规模解析支持：无需本地部署，支持批量解析数亿篇文献专利PDF文件',
      '领域全能：支持各领域各类复杂版面的期刊、会议、报告和专利PDF',
      '多模态支持：表格、公式、图表、分子结构式和化学反应式解析',
      '下游任务友好：支持文献阅读、专利鉴权、数据库构建与大模型训练数据生产'
    ],
    join_waiting_list_zh: '加入 Waiting List (中文)',
    join_waiting_list_en: 'Join Waiting List (EN)',
    dialog_title: '加入 Waiting List',
    form: {
      name: '姓名',
      name_placeholder: '请输入姓名',
      email: '邮箱',
      email_placeholder: 'name@example.com',
      country: '国家',
      country_placeholder: '例如：中国',
      organization: '单位',
      organization_placeholder: '公司/学校/机构名称',
      contact: '手机或微信',
      contact_placeholder: '可选',
      purpose: '申请目的',
      purpose_placeholder: '请简述您的使用场景与需求',
      is_commercial: '是否商用',
      yes: '是',
      no: '否',
      cancel: '取消',
      submit: '提交'
    },
    form_rules: {
      name_required: '请输入姓名',
      email_required: '请输入邮箱',
      email_invalid: '请输入有效的邮箱地址',
      country_required: '请输入国家',
      organization_required: '请输入单位',
      purpose_required: '请输入申请目的',
      is_commercial_required: '请选择是否商用'
    },
    submission_success: '提交成功！我们会尽快与您联系。',
    submission_failed: '提交失败，请稍后重试'
  },
  image_selector: {
    title: '图片选择器'
  },
  image_slider_inner: {
    title: '图像内部比较'
  },
  latex: {
    title: 'Latex',
    thanks: '感谢 {0} 和 {1}，现在我们可以显示一个内联的 {2} 公式，例如 {3}。并且我们可以像这样显示一个行间公式：'
  },
  video: {
    title: '视频'
  },
  partners: {
    title: '合作',
    invitation: '诚邀 AI4Science 学术与商业合作伙伴！',
    items: [
      { text: '文献结构化数据库构建', image: partnerImages.uniMiner },
      { text: '文献专利数据挖掘与检索', image: partnerImages.uniFinder },
      { text: '领域结构化数据库构建', image: partnerImages.bohriumDocuments },
      { text: 'Agent MCP 接入', image: partnerImages.scimaster },
      { text: '逆合成与化学反应机理研究', image: partnerImages.uniParser },
      { text: '小分子性质预测', image: partnerImages.bohriumLibrary },
      { text: '科学多模态大模型训练', image: partnerImages.bohriumReader },
      { text: '其他前沿探索', image: partnerImages.home }
    ]
  }
}
