import { partnerImages } from '../imagePaths';

export default {
  header: {
    home: 'Home',
    core: 'Core Features',
    report: 'Technical Report',
    demo: 'Demo',
    applications: 'Downstream Apps',
    partners: 'Partners',
    language: 'Language',
    chinese: '中文',
    english: 'EN'
  },
  title: {
    news: '🎉 Uni-Parser is in beta test !',
    emphases: [
      '🎉 Uni-Parser is in beta test',
      '🥰 Welcome to follow Uni-Parser on WeChat/Bilibili/Zhihu/Xiaohongshu'
    ],
    buttons: {
      paper: 'Paper',
      chinese: '中文版',
      code: 'Code',
      demo: 'Demo',
      poster: 'Poster',
      slide: 'Slide',
      video_intro: 'Video(Intro)',
      video_tutorial: 'Video(Tutorial)'
    },
    authors: {
      'junyaohu': 'Your Name',
      'anya': 'Anya Forger',
      'capoo': 'BugCat Capoo'
    },
    addresses: {
      'home': 'Home University',
      'ikun': 'IKUN University'
    },
    contribution: 'The above are only some of the contributors'
  },
  bibtex: {
    title: 'BibTeX',
    copy: '🖱️ Click here to copy BibTex.'
  },
  collapse: {
    title: 'Detail Discussion',
    consistency: 'Consistency',
    consistency_detail: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;',
    feedback: 'Feedback',
    feedback_detail: 'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;',
    efficiency: 'Efficiency',
    efficiency_detail: 'Simplify the process: keep operating process simple and intuitive;',
    controllability: 'Controllability',
    controllability_detail: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;'
  },
  comment: {
    title: '💬 Comment'
  },
  core_features: {
    title: 'Core Features',
    layout_title: 'Complex Layout Extraction',
    layout_desc: 'Complex layout parsing',
    table_title: 'Table Parsing',
    table_desc: 'High-precision structured parsing of multiple types of tables',
    molecule_title: 'Molecule Localization and Parsing',
    molecule_desc: 'Molecule localization and structure parsing indicators are significantly leading',
    showcase_placeholder: 'Real Example Showcase'
  },
  custom_footer: {
    friendly_links: 'Friendly Links',
    email_contact: 'Email Contact',
    commercial_contact: 'Commercial Contact',
    academic_contact: 'Academic Contact',
    legal_declaration: 'Legal Declaration',
    user_agreement: 'User Agreement',
    privacy_agreement: 'Privacy Agreement',
    join_community: 'Join WeChat group Community:'
  },
  downstream_apps: {
    title: 'Downstream Apps',
    extraction_title: 'Structured Information Extraction from Literature',
    extraction_items: {
      molecule_library: 'Molecule Library',
      molecule_library_desc: 'Patent molecule library & literature molecule library; for molecule retrieval, property mining, and patent authentication',
      reaction_library: 'Reaction Library',
      reaction_library_desc: 'Build a reaction database to assist in the training of AI4S models for organic synthesis',
      structured_database: 'Structured Literature Database',
      structured_database_desc: 'A literature-centered structured knowledge base',
      target_database: 'Target/Activity/Spectrum Database',
      target_database_desc: 'Construction of multiple types of professional databases',
      experiment_extraction: 'Experiment Information Extraction',
      experiment_extraction_desc: 'Assist in automated experiment Agent applications'
    },
    eco_ability_title: 'Ecological Capabilities',
    eco_ability_items: {
      uni_miner: 'Uni-Miner for Literature Annotation',
      scimaster: 'SciMaster, the Science Agent',
      uni_finder: 'Uni-Finder, the Science LLM',
      bohrium_library: 'Bohrium Library',
      bohrium_reader: 'Bohrium Reader'
    }
  },
  echart: {
    title: 'Quantitative Results'
  },
  gaussian_splats: {
    title: '3DGS Model',
    thanks: 'Thanks to {0}, we can visualize 3DGS models here.'
  },
  hero: {
    title: 'Industrial-grade Literature and Patent Parsing Tool<br/>Designed for Researchers',
    features: [
      'Ultra-fast parsing speed: as low as 0.05s/page',
      'Ultra-high parsing accuracy: significant lead in table, molecule, and other parsing capabilities',
      'Large-scale parsing support: no local deployment required, supports batch parsing of hundreds of millions of literature and patent PDF files',
      'Domain-versatile: supports various complex layouts of journals, conferences, reports, and patents in all fields',
      'Multi-modal support: table, formula, chart, molecular structure, and chemical reaction parsing',
      'Downstream-task friendly: supports literature reading, patent authentication, database construction, and large model training data production'
    ],
    join_waiting_list_zh: 'Join Waiting List (中文)',
    join_waiting_list_en: 'Join Waiting List (EN)',
    dialog_title: 'Join Waiting List',
    form: {
      name: 'Name',
      name_placeholder: 'Please enter your name',
      email: 'Email',
      email_placeholder: 'name@example.com',
      country: 'Country',
      country_placeholder: 'e.g., China',
      organization: 'Organization',
      organization_placeholder: 'Company/School/Institution Name',
      contact: 'Phone or WeChat',
      contact_placeholder: 'Optional',
      purpose: 'Purpose of Application',
      purpose_placeholder: 'Please briefly describe your use case and needs',
      is_commercial: 'Commercial Use',
      yes: 'Yes',
      no: 'No',
      cancel: 'Cancel',
      submit: 'Submit'
    },
    form_rules: {
      name_required: 'Please enter your name',
      email_required: 'Please enter your email',
      email_invalid: 'Please enter a valid email address',
      country_required: 'Please enter your country',
      organization_required: 'Please enter your organization',
      purpose_required: 'Please enter the purpose of your application',
      is_commercial_required: 'Please select whether it is for commercial use'
    },
    submission_success: 'Submitted successfully! We will contact you as soon as possible.',
    submission_failed: 'Submission failed, please try again later'
  },
  image_selector: {
    title: 'Image Selector'
  },
  image_slider_inner: {
    title: 'Image Inner Comparison'
  },
  latex: {
    title: 'Latex',
    thanks: 'Thanks to {0} and {1}, now we can show an inline {2} formula, like {3}. And we can show an interline formula like this:'
  },
  video: {
    title: 'Video'
  },
  partners: {
    title: 'Partners',
    invitation: 'Cordially invite AI4Science academic and commercial partners!',
    items: [
      { text: 'Literature Structured Database Construction', image: partnerImages.uniMiner },
      { text: 'Literature Patent Data Mining and Retrieval', image: partnerImages.uniFinder },
      { text: 'Domain Structured Database Construction', image: partnerImages.bohriumDocuments },
      { text: 'Agent MCP Access', image: partnerImages.scimaster },
      { text: 'Retro-synthesis and Chemical Reaction Mechanism Research', image: partnerImages.uniParser },
      { text: 'Small Molecule Property Prediction', image: partnerImages.bohriumLibrary },
      { text: 'Scientific Multimodal Large Model Training', image: partnerImages.bohriumReader },
      { text: 'Other Frontier Explorations', image: partnerImages.home }
    ]
  }
}
