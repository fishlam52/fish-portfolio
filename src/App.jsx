const projects = [
  { no: "01", cn: "AI 壁纸 APP", en: "AI Wallpaper", tags: "MOBILE · AIGC · UI/UX", copy: "围绕 AI 生成、预览与应用流程，打造更简单的个性化壁纸体验。", visual: "wallpaper" },
  { no: "02", cn: "AI 图片处理 WEB", en: "AI Image Studio", tags: "WEB · AIGC · PRODUCT DESIGN", copy: "把复杂的图像处理能力重新组织成清楚、可信、易上手的创作工作流。", visual: "studio" },
  { no: "03", cn: "VPN APP", en: "Private Network", tags: "MOBILE · UTILITY · UI/UX", copy: "以连接状态为核心，让速度、安全与节点选择变得直观而有秩序。", visual: "vpn" },
  { no: "04", cn: "PDF APP", en: "PDF Workspace", tags: "MOBILE · PRODUCTIVITY · SYSTEM", copy: "整合阅读、编辑与文件管理，在高频任务中减少操作负担。", visual: "pdf" },
];
const career = [
  ["03Y", "原画与动画", "从角色与动态叙事开始，建立视觉表达的基础。"],
  ["02Y", "游戏 UI", "将视觉语言转化为可操作、可反馈的界面体验。"],
  ["07Y+", "C 端产品 UI/UX", "持续参与移动产品从 0 到 1，再到成长迭代。"],
  ["NOW", "AI 设计", "探索 AI 在创意生成、设计流程与产品体验中的应用。"],
];
const capabilities = [
  ["01", "产品体验设计", "从用户任务出发，完成信息架构、交互流程与核心界面的系统设计。"],
  ["02", "AI 协同设计", "把 AI 放进研究、创意与设计流程，让智能能力真正服务于体验。"],
  ["03", "视觉与动态", "用视觉秩序、动画与反馈，让复杂功能更容易被理解和使用。"],
  ["04", "0 → 1 → 2 产品共建", "从概念验证到首次发布，再到持续迭代，陪产品走完整个成长过程。"],
];

function ProjectVisual({ type }) {
  if (type === "wallpaper") return <div className="project-art wallpaper-art" aria-hidden="true"><i className="orb orb-one"/><i className="orb orb-two"/><div className="phone wallpaper-phone"><small>09:41</small><p>Imagine.<br/><em>Create.</em></p><b>GENERATE</b></div></div>;
  if (type === "studio") return <div className="project-art studio-art" aria-hidden="true"><div className="studio-window"><div className="window-bar"><i/><i/><i/><span>AI IMAGE STUDIO</span></div><div className="studio-tools"><b>CREATE</b><span>Enhance</span><span>Remove</span><span>Expand</span></div><div className="studio-canvas"><i/><strong>GENERATIVE<br/>CANVAS</strong></div><div className="studio-prompt">Describe your next visual <b>↗</b></div></div></div>;
  if (type === "vpn") return <div className="project-art vpn-art" aria-hidden="true"><div className="signal-ring ring-one"/><div className="signal-ring ring-two"/><div className="phone vpn-phone"><small>PRIVATE NETWORK</small><div className="vpn-status"><i/><span>PROTECTED</span></div><strong>48.2<em> ms</em></strong><p>Tokyo · JP</p><b>CONNECTED</b></div></div>;
  return <div className="project-art pdf-art" aria-hidden="true"><div className="pdf-sheet back"><span>PDF</span></div><div className="pdf-sheet middle"><span>12</span></div><div className="pdf-sheet front"><small>DOCUMENT / 01</small><h4>Make work<br/>flow.</h4><i/><i/><i/><b>EDIT · SIGN · SHARE</b></div></div>;
}

export default function App() {
  return <main>
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true"><source src="/hero-loop.mp4" type="video/mp4"/></video><div className="hero-shade"/>
      <header className="site-header shell"><a className="brand" href="#home" aria-label="返回首页"><span className="brand-mark">F</span><span>FISH PORTFOLIO</span></a><nav aria-label="主导航"><a href="#resume">简历</a><a href="#projects">项目</a><a href="#capabilities">能力</a></nav><a className="contact-button" href="#contact">联系我 <span>↗</span></a></header>
      <div className="hero-content shell"><div className="hero-kicker"><span>UI DESIGN</span><i/><span>AI DESIGN</span><i/><span>VISUAL & MOTION</span></div><h1><span>让复杂被理解，</span><span className="hero-indent">让智能更<strong>自然。</strong></span></h1><div className="hero-meta"><div><p className="hero-name">刘宇林 / Fish</p><p>UI 设计师 · AI 设计师 · 动画原画设计师</p></div><p className="hero-summary">13 年视觉与产品设计经验，参与产品从概念、发布到持续迭代的完整体验设计。</p><a href="#projects" className="explore-link">查看作品 <span>↓</span></a></div></div><div className="hero-index" aria-hidden="true"><span>01</span><i/><span>05</span></div>
    </section>

    <section className="resume section" id="resume"><div className="shell"><div className="section-label"><span>02</span><p>PROFILE / 个人简历</p></div><div className="resume-grid"><div className="portrait-card"><span>FISH</span><div className="portrait-glow"/><p>UI / AI / MOTION</p></div><div className="resume-main"><p className="resume-role">UI/UX & AI PRODUCT DESIGNER</p><h2>产品背后，<br/>那位“看不见的设计共建者”。</h2><p className="resume-intro">拥有 13 年视觉与产品设计经验，我擅长主导产品从概念雏形（0）、首次发布（1），到持续成长迭代（2）的完整体验设计。清晰的视觉秩序不只是美感表达，更是产品清晰、易用和持续成长的基础。现在，我也在持续探索 AIGC 如何自然地融入设计流程与产品体验。</p><div className="resume-contact"><div><small>LOCATION</small><p>珠海，中国</p></div><div><small>WECHAT</small><p>Fish-1020-A</p></div><div><small>EMAIL</small><a href="mailto:617781773@qq.com">617781773@qq.com</a></div></div></div></div><div className="career-list">{career.map(([year,title,copy])=><article key={title}><span>{year}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="projects section" id="projects"><div className="shell"><div className="section-label"><span>03</span><p>SELECTED PROJECTS / 精选项目</p></div><div className="project-heading"><h2>先看作品。<br/><span>设计会自己说话。</span></h2><p>移动产品、效率工具与 AI 创作平台。<br/>当前以视觉原型呈现，下一轮替换为真实项目图片。</p></div><div className="project-list">{projects.map(project=><article className="project-card" key={project.no}><div className="project-top"><span>{project.no} / 04</span><span>{project.tags}</span></div><ProjectVisual type={project.visual}/><div className="project-bottom"><div><p>{project.cn}</p><h3>{project.en}</h3></div><p>{project.copy}</p><span className="round-arrow">↗</span></div></article>)}</div></div></section>

    <section className="capabilities section" id="capabilities"><div className="shell"><div className="section-label"><span>04</span><p>CORE CAPABILITIES / 核心能力</p></div><div className="capability-grid"><div className="capability-lead"><h2>我交付的不只是界面，<br/>而是一套可以持续生长的体验。</h2><p>从产品结构、视觉系统到动态反馈，让设计既帮助用户理解产品，也支持产品持续迭代。</p></div><div className="capability-cards">{capabilities.map(([no,title,copy])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className="toolkit"><p>DESIGN TOOLKIT / 常用工具</p><div><span>UI/UX <b>Adobe XD · Figma</b></span><span>VISUAL <b>Photoshop · Illustrator</b></span><span>MOTION <b>After Effects · Animate</b></span><span>AI <b>ChatGPT · Lovart · Nanobanana</b></span></div></div></div></section>

    <footer className="contact section" id="contact"><div className="shell contact-inner"><div className="section-label"><span>05</span><p>LET&apos;S CONNECT / 联系我</p></div><div className="contact-grid"><h2>真正好的设计，不止是被看见。<br/><span>它让复杂变清楚，让体验更自然。</span><br/>这也是我一直在做的事。</h2><div className="contact-side"><div className="contact-items"><div><small>WECHAT / 微信</small><p>Fish-1020-A</p></div><div><small>EMAIL / 邮箱</small><a href="mailto:617781773@qq.com">617781773@qq.com</a></div></div><a className="resume-button" href="mailto:617781773@qq.com?subject=索取 Fish 的 PDF 简历">索取 PDF 简历 <span>↗</span></a></div></div><div className="footer-line"><span>FISH PORTFOLIO · 2026</span><span>UI/UX × AI PRODUCT DESIGN</span></div></div></footer>
  </main>;
}
