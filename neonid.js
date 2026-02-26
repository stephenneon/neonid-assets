// NEON ID Dashboard Loader
(function(){
  var f=document.createElement('link');
  f.rel='stylesheet';
  f.href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap';
  document.head.appendChild(f);
  var s=document.createElement('style');
  s.textContent="\n/* \u2500\u2500 TOKENS \u2500\u2500 */\n:root {\n  --ruby:      #C0194A;\n  --ruby-soft: #fce8ef;\n  --lav:       #7B2D8B;\n  --lav-soft:  #f0e0ff;\n  --copper:    #C07040;\n  --copper-soft:#fdeee6;\n  --grad:      linear-gradient(135deg,#8B2FC9 0%,#D4388A 55%,#F4845F 100%);\n  --grad-dark: linear-gradient(135deg,#1a1a2e 0%,#2d1b69 100%);\n  --border:    #ece8f5;\n  --bg:        #f4f2f8;\n  --card:      #ffffff;\n  --text:      #1a1a2e;\n  --muted:     #888;\n  --font:      'DM Sans', system-ui, sans-serif;\n  --mono:      'DM Mono', monospace;\n  --radius:    16px;\n  --sidebar-w: 272px;\n  --header-h:  62px;\n}\n\n/* \u2500\u2500 RESET \u2500\u2500 */\n*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}\nhtml{scroll-behavior:smooth;}\nbody{font-family:var(--font);background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;}\nbutton{font-family:var(--font);cursor:pointer;}\ninput{font-family:var(--font);}\na{text-decoration:none;color:inherit;}\n\n/* \u2500\u2500 HEADER \u2500\u2500 */\n.header{\n  height:var(--header-h);background:var(--grad);\n  display:flex;align-items:center;justify-content:space-between;\n  padding:0 28px;position:sticky;top:0;z-index:200;\n  box-shadow:0 2px 24px rgba(139,47,201,.28);\n}\n.logo{color:#fff;font-size:20px;font-weight:300;letter-spacing:10px;border:1.5px solid rgba(255,255,255,.55);padding:4px 14px;border-radius:4px;}\n.h-nav{display:flex;gap:26px;align-items:center;}\n.h-nav a{color:rgba(255,255,255,.82);font-size:12.5px;letter-spacing:.8px;font-weight:500;transition:color .2s;}\n.h-nav a:hover{color:#fff;}\n.h-user{display:flex;align-items:center;gap:10px;cursor:pointer;}\n.h-ava{width:38px;height:38px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#fff;border:2px solid rgba(255,255,255,.45);}\n.h-name{color:#fff;font-size:13.5px;font-weight:600;}\n\n/* \u2500\u2500 LAYOUT \u2500\u2500 */\n.shell{display:grid;grid-template-columns:var(--sidebar-w) 1fr;min-height:calc(100vh - var(--header-h));}\n\n/* \u2500\u2500 SIDEBAR \u2500\u2500 */\n.sidebar{background:#fff;border-right:1px solid var(--border);padding:20px 14px;display:flex;flex-direction:column;gap:6px;overflow-y:auto;position:sticky;top:var(--header-h);height:calc(100vh - var(--header-h));}\n.sidebar::-webkit-scrollbar{width:3px;}\n.sidebar::-webkit-scrollbar-thumb{background:#d8b4fe;border-radius:4px;}\n\n/* Profile card */\n.pcard{background:linear-gradient(160deg,#f9f0ff,#fdf0f8);border:1px solid #e8d5f5;border-radius:var(--radius);padding:18px;margin-bottom:8px;text-align:center;}\n.pring{width:76px;height:76px;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;}\n.pname{font-size:15.5px;font-weight:800;color:var(--text);}\n.ptag{font-size:11px;color:#8B2FC9;font-weight:700;letter-spacing:.5px;margin-top:2px;}\n.pcolors{display:flex;gap:7px;justify-content:center;margin:10px 0 4px;}\n.pdot{width:20px;height:20px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.14);}\n.ptrait-section{margin-top:12px;}\n.ptrait-label-row{font-size:9.5px;font-weight:800;color:#aaa;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;text-align:left;}\n.ptrait{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:6px;font-size:11px;}\n.ptrait-name{color:#666;width:90px;text-align:left;flex-shrink:0;}\n.ptrait-track{flex:1;height:4px;background:#f0e8ff;border-radius:4px;overflow:hidden;}\n.ptrait-fill{height:100%;border-radius:4px;background:var(--grad);}\n.ptrait-val{font-weight:800;font-size:10.5px;color:#8B2FC9;width:22px;text-align:right;}\n\n/* Nav items */\n.snav{display:flex;flex-direction:column;gap:2px;margin-top:4px;}\n.ni{display:flex;align-items:center;gap:9px;padding:9px 12px;border-radius:10px;cursor:pointer;font-size:12.5px;color:#555;font-weight:500;transition:all .18s;user-select:none;}\n.ni:hover{background:#f5eeff;color:#8B2FC9;}\n.ni.active{background:linear-gradient(135deg,#f0e0ff,#fce0f0);color:#8B2FC9;font-weight:700;}\n.ni-ico{font-size:15px;width:18px;text-align:center;}\n\n/* Colors palette */\n.colors-box{background:#fff;border:1px solid var(--border);border-radius:12px;padding:12px 14px;margin-top:4px;}\n.colors-title{font-size:10px;font-weight:800;color:#bbb;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;}\n.colors-grid{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;}\n.cdot{width:20px;height:20px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.14);cursor:pointer;transition:transform .15s;}\n.cdot:hover{transform:scale(1.25);}\n\n/* Databank card */\n.dbank{margin-top:auto;background:var(--grad-dark);border-radius:12px;padding:14px 16px;text-align:center;}\n.dbank-lbl{font-size:10px;opacity:.65;letter-spacing:1px;text-transform:uppercase;color:#fff;}\n.dbank-amt{font-size:26px;font-weight:800;color:#fff;margin:3px 0;}\n.dbank-sub{font-size:10px;opacity:.55;color:#fff;}\n\n/* \u2500\u2500 MAIN \u2500\u2500 */\n.main{padding:24px;display:flex;flex-direction:column;gap:18px;overflow-y:auto;min-width:0;}\n\n/* \u2500\u2500 PANELS (views) \u2500\u2500 */\n.panel{display:none;flex-direction:column;gap:18px;}\n.panel.active{display:flex;}\n\n/* \u2500\u2500 WELCOME BANNER \u2500\u2500 */\n.banner{background:var(--grad);border-radius:20px;padding:26px 30px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 8px 32px rgba(139,47,201,.22);}\n.banner-text h1{color:#fff;font-size:22px;font-weight:800;}\n.banner-text p{color:rgba(255,255,255,.85);font-size:13px;margin-top:6px;max-width:460px;line-height:1.55;}\n.banner-badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;}\n.bbadge{background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:20px;padding:4px 13px;font-size:11px;font-weight:600;letter-spacing:.5px;}\n.banner-ring{width:84px;height:84px;border-radius:50%;background:rgba(255,255,255,.14);border:3px solid rgba(255,255,255,.38);display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:900;color:#fff;box-shadow:0 0 36px rgba(255,255,255,.18);flex-shrink:0;}\n.banner-visual{display:flex;flex-direction:column;align-items:center;gap:5px;}\n.banner-visual span{color:rgba(255,255,255,.75);font-size:10px;font-weight:700;letter-spacing:2.5px;}\n\n/* \u2500\u2500 CORE VALUES \u2500\u2500 */\n.values-row{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}\n.vbox{background:#fff;border:1px solid #ddd;border-radius:12px;padding:13px 12px;display:flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;}\n.vbox:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(139,47,201,.09);}\n.v-cross{color:#C9A84C;font-size:13px;font-weight:900;flex-shrink:0;}\n.vbox h4{font-size:11.5px;font-weight:800;color:var(--text);line-height:1.3;}\n\n/* \u2500\u2500 AI + TIP ROW \u2500\u2500 */\n.ai-tip-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}\n\n/* Chat card */\n.chat-card{background:#fff;border-radius:var(--radius);border:1px solid var(--border);display:flex;flex-direction:column;height:420px;overflow:hidden;}\n.chat-hdr{display:flex;justify-content:space-between;align-items:center;padding:14px 18px 12px;border-bottom:1px solid #f0eaff;}\n.chat-hdr-l{display:flex;align-items:center;gap:10px;}\n.chat-hdr-ava{width:30px;height:30px;flex-shrink:0;}\n.chat-title{font-size:12px;font-weight:800;color:#8B2FC9;text-transform:uppercase;letter-spacing:1px;}\n.chat-sub{font-size:10px;color:#bbb;font-weight:500;}\n.online-dot{width:8px;height:8px;border-radius:50%;background:#4ade80;box-shadow:0 0 6px #4ade80;}\n#chat-msgs{flex:1;overflow-y:auto;padding:14px 18px;display:flex;flex-direction:column;gap:10px;background:#fdfcff;}\n#chat-msgs::-webkit-scrollbar{width:3px;}\n#chat-msgs::-webkit-scrollbar-thumb{background:#d8b4fe;border-radius:4px;}\n.mrow{display:flex;gap:8px;align-items:flex-start;}\n.mrow.user{flex-direction:row-reverse;}\n.mava{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;font-weight:800;}\n.mbubble{padding:9px 13px;max-width:86%;font-size:12px;line-height:1.6;box-shadow:0 1px 4px rgba(139,47,201,.06);}\n.mbubble.ai{background:#fff;border:1px solid var(--border);border-radius:14px 14px 14px 2px;color:var(--text);}\n.mbubble.user{background:var(--grad);border-radius:14px 14px 2px 14px;color:#fff;}\n.chat-input-row{padding:10px 14px;border-top:1px solid #f0eaff;background:#fff;display:flex;gap:7px;align-items:center;}\n.chat-input-row input{flex:1;border:1.5px solid var(--border);border-radius:20px;padding:8px 15px;font-size:12px;outline:none;color:var(--text);background:#fdfcff;}\n.chat-input-row input:focus{border-color:#8B2FC9;}\n.send-btn{width:34px;height:34px;border-radius:50%;background:var(--grad);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;flex-shrink:0;}\n.chips{display:flex;flex-wrap:wrap;gap:7px;padding:0 2px;}\n.chip{background:#fff;color:var(--text);border-radius:12px;padding:7px 13px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid #e0e0e8;box-shadow:0 1px 4px rgba(0,0,0,.05);transition:all .18s;}\n.chip:hover{border-color:#8B2FC9;color:#8B2FC9;}\n.typing-dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:#8B2FC9;margin:0 2px;animation:bounce 1.2s infinite;}\n.typing-dot:nth-child(2){animation-delay:.2s;}.typing-dot:nth-child(3){animation-delay:.4s;}\n@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}\n\n/* Tip card */\n.tip-card{background:var(--grad-dark);border-radius:var(--radius);padding:22px;display:flex;flex-direction:column;height:420px;}\n.tip-lbl{font-size:10px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;}\n.tip-card h3{color:#fff;font-size:15px;font-weight:800;margin:10px 0 8px;line-height:1.45;}\n.tip-card p{color:rgba(255,255,255,.72);font-size:12px;line-height:1.65;flex:1;}\n.tip-btn{margin-top:14px;background:var(--grad);border:none;color:#fff;padding:10px 20px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:.5px;align-self:flex-start;transition:opacity .2s;}\n.tip-btn:hover{opacity:.85;}\n\n/* \u2500\u2500 THIS OR THAT \u2500\u2500 */\n.tot-card{background:#fff;border-radius:var(--radius);padding:20px 24px;border:1px solid var(--border);display:flex;flex-direction:column;gap:11px;}\n.tot-hdr{display:flex;justify-content:space-between;align-items:center;}\n.card-title{font-size:11px;font-weight:800;color:#8B2FC9;text-transform:uppercase;letter-spacing:1.2px;}\n.card-action{font-size:11px;color:#D4388A;cursor:pointer;font-weight:600;}\n.tot-q{font-size:14.5px;font-weight:800;color:var(--text);}\n.tot-opt{display:flex;align-items:center;gap:12px;padding:13px 17px;border-radius:13px;border:1.5px solid var(--border);cursor:pointer;transition:all .2s;background:#fff;}\n.tot-opt:hover{border-color:#8B2FC9;background:#f5eeff;}\n.tot-opt.sel{border-color:#8B2FC9;background:#f5eeff;}\n.tot-opt.sel .tot-opt-txt{color:#8B2FC9;}\n.tot-ico{font-size:20px;}\n.tot-opt-txt{font-size:13px;font-weight:600;color:var(--text);}\n.tot-privacy{font-size:10.5px;color:#bbb;}\n.tot-submit-btn{background:var(--grad);border:none;color:#fff;padding:10px 26px;border-radius:20px;font-size:12px;font-weight:700;opacity:.45;pointer-events:none;transition:all .2s;letter-spacing:.5px;}\n.tot-submit-btn.on{opacity:1;pointer-events:auto;}\n\n/* \u2500\u2500 INSIGHTS ROW \u2500\u2500 */\n.insights-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}\n.card{background:#fff;border-radius:var(--radius);padding:20px;border:1px solid var(--border);}\n.card-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;}\n.insight-item{display:flex;align-items:flex-start;gap:11px;padding:11px 0;border-bottom:1px solid #f5f0ff;}\n.insight-item:last-child{border-bottom:none;}\n.i-bar{width:3px;border-radius:2px;min-height:46px;flex-shrink:0;}\n.i-ico{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}\n.i-text h4{font-size:12.5px;font-weight:700;line-height:1.3;}\n.i-text p{font-size:11px;color:var(--muted);margin-top:2px;line-height:1.55;}\n\n/* Identity in action */\n.ident-card{background:linear-gradient(160deg,#faf7ff,#fff5fa);border-radius:var(--radius);padding:20px;border:1px solid var(--border);}\n.id-block{background:#fff;border-radius:12px;padding:13px;border:1px solid var(--border);margin-bottom:12px;}\n.id-block:last-child{margin-bottom:0;}\n.id-block-lbl{font-size:10.5px;font-weight:800;letter-spacing:.5px;margin-bottom:4px;}\n.id-block p{font-size:11.5px;color:#555;line-height:1.6;}\n\n/* \u2500\u2500 BOTTOM ROW \u2500\u2500 */\n.bottom-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}\n.dyk-card{background:var(--grad-dark);border-radius:var(--radius);padding:22px;display:flex;flex-direction:column;gap:11px;}\n.dyk-card h3{color:#fff;font-size:14.5px;font-weight:800;line-height:1.5;}\n.dyk-card p{color:rgba(255,255,255,.7);font-size:12px;line-height:1.7;}\n.dyk-btn{background:var(--grad);border:none;color:#fff;padding:10px 20px;border-radius:20px;font-size:12px;font-weight:700;align-self:flex-start;transition:opacity .2s;}\n.dyk-btn:hover{opacity:.85;}\n\n.brands-wrap{position:relative;border-radius:var(--radius);overflow:hidden;}\n.brands-overlay{position:absolute;inset:0;background:rgba(255,255,255,.5);backdrop-filter:blur(1.5px);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border-radius:var(--radius);}\n.brand-rec{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px solid #f5f0ff;}\n.brand-rec:last-child{border-bottom:none;}\n.brand-logo{width:38px;height:38px;border-radius:9px;background:#f4f4f8;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#666;text-align:center;line-height:1.2;}\n.brand-info h4{font-size:12.5px;font-weight:700;}\n.brand-info p{font-size:10.5px;color:var(--muted);}\n.brand-match{font-size:12px;font-weight:700;color:#8B2FC9;}\n\n/* \u2500\u2500 FOOTER \u2500\u2500 */\n.footer{background:#fff;border-radius:14px;padding:14px 22px;border:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;}\n.footer p{font-size:11px;color:#bbb;}\n.footer span{font-size:11px;color:#8B2FC9;font-weight:700;cursor:pointer;}\n\n/* \u2500\u2500 FINGERPRINT PANEL \u2500\u2500 */\n.fp-panel{display:grid;grid-template-columns:1fr 1fr;gap:18px;}\n.hexaco-card{background:#fff;border-radius:var(--radius);padding:22px;border:1px solid var(--border);}\n.hexaco-title{font-size:11px;font-weight:800;color:#8B2FC9;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:16px;}\n.hx-row{display:flex;align-items:center;gap:10px;margin-bottom:11px;}\n.hx-name{font-size:12px;color:#555;width:110px;flex-shrink:0;}\n.hx-track{flex:1;height:7px;background:#f0e8ff;border-radius:6px;overflow:hidden;}\n.hx-fill{height:100%;border-radius:6px;background:var(--grad);transition:width .6s ease;}\n.hx-val{font-size:12px;font-weight:800;color:#8B2FC9;width:26px;text-align:right;}\n.colors-detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}\n.color-detail-box{border-radius:12px;padding:13px;border:1px solid var(--border);text-align:center;}\n.cdb-swatch{width:34px;height:34px;border-radius:50%;margin:0 auto 8px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.14);}\n.cdb-name{font-size:11.5px;font-weight:800;color:var(--text);}\n.cdb-traits{font-size:10.5px;color:var(--muted);margin-top:3px;line-height:1.5;}\n.cdb-rank{display:inline-block;background:var(--lav-soft);color:var(--lav);font-size:10px;font-weight:800;padding:2px 8px;border-radius:8px;margin-top:6px;letter-spacing:.5px;}\n\n/* \u2500\u2500 CONTENT STUDIO PANEL \u2500\u2500 */\n.studio-panel{display:flex;flex-direction:column;gap:18px;}\n.studio-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}\n.studio-item{background:#fff;border-radius:var(--radius);padding:18px;border:1px solid var(--border);cursor:pointer;transition:all .2s;}\n.studio-item:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(139,47,201,.12);border-color:#8B2FC9;}\n.studio-item .si-ico{font-size:26px;margin-bottom:10px;}\n.studio-item h4{font-size:13px;font-weight:800;color:var(--text);margin-bottom:5px;}\n.studio-item p{font-size:11px;color:var(--muted);line-height:1.55;}\n.studio-item .si-tag{display:inline-block;margin-top:10px;background:var(--lav-soft);color:var(--lav);font-size:10px;font-weight:700;padding:3px 10px;border-radius:8px;}\n\n/* \u2500\u2500 BRAND SCAN PANEL \u2500\u2500 */\n.scan-panel{display:flex;flex-direction:column;gap:18px;}\n.scan-input-card{background:#fff;border-radius:var(--radius);padding:24px;border:1px solid var(--border);}\n.scan-input-card h3{font-size:15px;font-weight:800;margin-bottom:6px;}\n.scan-input-card p{font-size:12px;color:var(--muted);margin-bottom:16px;line-height:1.55;}\n.scan-field{width:100%;border:1.5px solid var(--border);border-radius:10px;padding:11px 16px;font-size:13px;outline:none;color:var(--text);margin-bottom:10px;}\n.scan-field:focus{border-color:#8B2FC9;}\n.scan-btn{background:var(--grad);border:none;color:#fff;padding:11px 24px;border-radius:20px;font-size:13px;font-weight:700;}\n.match-meter{display:flex;align-items:center;gap:10px;margin-top:6px;}\n.meter-track{flex:1;height:10px;background:#f0e8ff;border-radius:8px;overflow:hidden;}\n.meter-fill{height:100%;border-radius:8px;background:var(--grad);transition:width .8s ease;}\n.meter-val{font-size:13px;font-weight:800;color:#8B2FC9;width:38px;}\n\n/* \u2500\u2500 TEAM BUILDER \u2500\u2500 */\n.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}\n.team-card{background:#fff;border-radius:var(--radius);padding:16px;border:1px solid var(--border);text-align:center;}\n.team-ava{width:52px;height:52px;border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:#fff;}\n.team-name{font-size:13px;font-weight:800;color:var(--text);}\n.team-role{font-size:11px;color:var(--muted);margin-top:2px;}\n.team-colors{display:flex;gap:5px;justify-content:center;margin-top:8px;}\n.tc-dot{width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.12);}\n.compat-score{margin-top:10px;font-size:11px;font-weight:700;color:#8B2FC9;}\n\n/* \u2500\u2500 AUDIENCE INSIGHTS \u2500\u2500 */\n.aud-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}\n.aud-stat{background:#fff;border-radius:var(--radius);padding:18px;border:1px solid var(--border);}\n.aud-stat .stat-num{font-size:28px;font-weight:800;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}\n.aud-stat .stat-label{font-size:11.5px;color:var(--muted);margin-top:2px;}\n.aud-bar-row{margin-top:10px;display:flex;flex-direction:column;gap:8px;}\n.aud-bar-item{display:flex;align-items:center;gap:8px;font-size:11px;}\n.aud-bar-label{width:90px;color:#555;}\n.aud-bar-track{flex:1;height:6px;background:#f0e8ff;border-radius:4px;overflow:hidden;}\n.aud-bar-fill{height:100%;border-radius:4px;background:var(--grad);}\n.aud-bar-pct{width:28px;font-weight:700;color:#8B2FC9;font-size:10.5px;}\n\n/* \u2500\u2500 DATABANK PANEL \u2500\u2500 */\n.db-panel{display:flex;flex-direction:column;gap:18px;}\n.db-hero{background:var(--grad-dark);border-radius:var(--radius);padding:24px;color:#fff;display:flex;justify-content:space-between;align-items:center;}\n.db-hero-text h2{font-size:20px;font-weight:800;}\n.db-hero-text p{opacity:.7;font-size:12px;margin-top:4px;max-width:360px;line-height:1.55;}\n.db-amt{font-size:40px;font-weight:800;text-align:right;}\n.db-amt-sub{font-size:11px;opacity:.6;margin-top:2px;}\n.db-toggle-row{display:flex;gap:12px;}\n.db-toggle{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:14px 18px;flex:1;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:all .2s;}\n.db-toggle:hover{border-color:#8B2FC9;}\n.db-toggle-info h4{font-size:13px;font-weight:700;}\n.db-toggle-info p{font-size:11px;color:var(--muted);margin-top:2px;}\n.toggle-switch{width:44px;height:24px;border-radius:12px;background:#e0e0e0;position:relative;transition:background .3s;flex-shrink:0;}\n.toggle-switch.on{background:#8B2FC9;}\n.toggle-knob{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .3s;box-shadow:0 1px 4px rgba(0,0,0,.2);}\n.toggle-switch.on .toggle-knob{left:23px;}\n\n/* \u2500\u2500 SETTINGS PANEL \u2500\u2500 */\n.settings-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;}\n.settings-section{background:#fff;border-radius:var(--radius);padding:20px;border:1px solid var(--border);}\n.settings-section h3{font-size:13px;font-weight:800;color:var(--text);margin-bottom:14px;}\n.setting-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #f5f0ff;}\n.setting-row:last-child{border-bottom:none;}\n.setting-lbl{font-size:12.5px;color:var(--text);font-weight:500;}\n.setting-sub{font-size:10.5px;color:var(--muted);margin-top:1px;}\n.setting-val{font-size:12px;color:var(--muted);font-weight:500;}\n.input-field{width:100%;border:1.5px solid var(--border);border-radius:10px;padding:9px 14px;font-size:12.5px;outline:none;color:var(--text);margin-top:8px;}\n.input-field:focus{border-color:#8B2FC9;}\n.save-btn{margin-top:14px;background:var(--grad);border:none;color:#fff;padding:10px 22px;border-radius:20px;font-size:12px;font-weight:700;width:100%;}\n\n/* \u2500\u2500 LOADING STATE \u2500\u2500 */\n.loading-screen{position:fixed;inset:0;background:#fff;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;transition:opacity .5s;}\n.loading-screen.fade{opacity:0;pointer-events:none;}\n.loading-ring{width:72px;height:72px;animation:spin 1.2s linear infinite;}\n@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\n.loading-text{font-size:14px;font-weight:600;color:#8B2FC9;letter-spacing:2px;}\n\n/* \u2500\u2500 TOOLTIP \u2500\u2500 */\n#ctip{display:none;position:fixed;background:#1a1a2e;color:#fff;font-size:10px;font-weight:600;padding:5px 10px;border-radius:8px;pointer-events:none;z-index:999;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.2);}\n\n/* \u2500\u2500 RESPONSIVE \u2500\u2500 */\n@media(max-width:1100px){\n  .values-row{grid-template-columns:repeat(3,1fr);}\n  .ai-tip-row,.insights-row,.bottom-row,.fp-panel,.settings-grid{grid-template-columns:1fr;}\n  .studio-grid,.team-grid,.aud-grid{grid-template-columns:repeat(2,1fr);}\n  .colors-detail-grid{grid-template-columns:repeat(2,1fr);}\n}\n@media(max-width:820px){\n  .shell{grid-template-columns:1fr;}\n  .sidebar{display:none;}\n  .values-row{grid-template-columns:repeat(2,1fr);}\n}\n";
  document.head.appendChild(s);
  var root=document.getElementById('neon-root')||document.body;
  root.innerHTML="<div class=\"loading-screen\" id=\"loading\"><svg class=\"loading-ring\" viewBox=\"0 0 72 72\"><circle cx=\"36\" cy=\"36\" r=\"32\" fill=\"none\" stroke=\"#C0194A\" stroke-width=\"5\" stroke-dasharray=\"60 141\" stroke-linecap=\"round\"/><circle cx=\"36\" cy=\"36\" r=\"32\" fill=\"none\" stroke=\"#9B59B6\" stroke-width=\"5\" stroke-dasharray=\"60 141\" stroke-dashoffset=\"-47\" stroke-linecap=\"round\"/><circle cx=\"36\" cy=\"36\" r=\"32\" fill=\"none\" stroke=\"#E07B50\" stroke-width=\"5\" stroke-dasharray=\"60 141\" stroke-dashoffset=\"-94\" stroke-linecap=\"round\"/></svg><div class=\"loading-text\">LOADING YOUR NEON ID</div></div><header class=\"header\"><div class=\"logo\">NEON</div><nav class=\"h-nav\"><a onclick=\"showPanel('home')\">Dashboard</a><a onclick=\"showPanel('studio')\">My Content</a><a onclick=\"showPanel('scan')\">Brand Scan</a><a onclick=\"showPanel('databank')\">Databank</a><a onclick=\"showPanel('audience')\">Insights</a></nav><div class=\"h-user\"><div class=\"h-ava\" id=\"hdr-ava\">T</div><span class=\"h-name\" id=\"hdr-name\">Taylor</span></div></header><div class=\"shell\"><aside class=\"sidebar\"><div class=\"pcard\"><div class=\"pring\" id=\"sidebar-ring\"></div><div class=\"pname\" id=\"sb-name\">Taylor Monroe</div><div class=\"ptag\">Your NEON ID</div><div class=\"pcolors\" id=\"sb-colors\"><div class=\"pdot\" style=\"background:#C0194A;\"></div><div class=\"pdot\" style=\"background:#9B59B6;\"></div><div class=\"pdot\" style=\"background:#E07B50;\"></div></div><div class=\"ptrait-section\"><div class=\"ptrait-label-row\">Personality Fingerprint</div><div id=\"sb-traits\"></div></div></div><div class=\"snav\"><div class=\"ni active\" onclick=\"showPanel('home')\" data-panel=\"home\"><span class=\"ni-ico\">\ud83c\udfe0</span> Home</div><div class=\"ni\" onclick=\"showPanel('fingerprint')\" data-panel=\"fingerprint\"><span class=\"ni-ico\">\u2728</span> My NEON Fingerprint</div><div class=\"ni\" onclick=\"showPanel('studio')\" data-panel=\"studio\"><span class=\"ni-ico\">\ud83d\udcdd</span> Content Studio</div><div class=\"ni\" onclick=\"showPanel('scan')\" data-panel=\"scan\"><span class=\"ni-ico\">\ud83c\udfa8</span> Brand Scan</div><div class=\"ni\" onclick=\"showPanel('team')\" data-panel=\"team\"><span class=\"ni-ico\">\ud83d\udc65</span> Team Builder</div><div class=\"ni\" onclick=\"showPanel('audience')\" data-panel=\"audience\"><span class=\"ni-ico\">\ud83d\udcca</span> Audience Insights</div><div class=\"ni\" onclick=\"showPanel('databank')\" data-panel=\"databank\"><span class=\"ni-ico\">\ud83d\udd12</span> My Databank</div><div class=\"ni\" onclick=\"showPanel('settings')\" data-panel=\"settings\"><span class=\"ni-ico\">\u2699\ufe0f</span> Settings</div></div><div class=\"colors-box\"><div class=\"colors-title\">The Colors</div><div class=\"colors-grid\"><div class=\"cdot\" style=\"background:#C0194A;\" onmouseenter=\"showTip(this,'Ruby \u00b7 Lively \u00b7 Sociable \u00b7 Confident')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#7B2D8B;\" onmouseenter=\"showTip(this,'Violet \u00b7 Emotional \u00b7 Sensitive \u00b7 Sentimental')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#1A5FA8;\" onmouseenter=\"showTip(this,'Sapphire \u00b7 Sincere \u00b7 Fair-Minded \u00b7 Loyal')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#5BBCD4;\" onmouseenter=\"showTip(this,'Sky \u00b7 Daring \u00b7 Opportunistic \u00b7 Proud')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#1A6B3C;\" onmouseenter=\"showTip(this,'Emerald \u00b7 Organized \u00b7 Thorough \u00b7 Self-Disciplined')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#5A8F4A;\" onmouseenter=\"showTip(this,'Jade \u00b7 Relaxed \u00b7 Spontaneous \u00b7 Easygoing')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#E05080;\" onmouseenter=\"showTip(this,'Rose \u00b7 Reserved \u00b7 Quiet \u00b7 Thoughtful')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#9B59B6;\" onmouseenter=\"showTip(this,'Lavender \u00b7 Independent \u00b7 Fearless \u00b7 Self-Assured')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#E07030;\" onmouseenter=\"showTip(this,'Tangerine \u00b7 Passionate \u00b7 Relentless \u00b7 Direct')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#C87040;\" onmouseenter=\"showTip(this,'Copper \u00b7 Patient \u00b7 Forgiving \u00b7 Pleasant')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#E8C840;\" onmouseenter=\"showTip(this,'Gold \u00b7 Innovative \u00b7 Imaginative \u00b7 Inquisitive')\" onmouseleave=\"hideTip()\"></div><div class=\"cdot\" style=\"background:#D4A020;\" onmouseenter=\"showTip(this,'Amber \u00b7 Conventional \u00b7 Simple \u00b7 Die-Hard')\" onmouseleave=\"hideTip()\"></div></div></div><div class=\"dbank\"><div class=\"dbank-lbl\">My Databank Earnings</div><div class=\"dbank-amt\" id=\"sb-earnings\">$0.00</div><div class=\"dbank-sub\">USD \u00b7 Transfer via PayPal or Venmo</div></div></aside><main class=\"main\"><div class=\"panel active\" id=\"panel-home\"><div class=\"banner\"><div class=\"banner-text\"><h1 id=\"banner-greeting\">Welcome back, Taylor \ud83d\udc4b</h1><p>Your personality is your superpower. Today's insights are calibrated to your unique HEXACO fingerprint \u2014 helping you create content, connect with your audience, and own your digital identity with confidence.</p><div class=\"banner-badges\" id=\"banner-badges\"><div class=\"bbadge\">\ud83c\udf1f Ruby \u00b7 Lavender \u00b7 Copper</div><div class=\"bbadge\">\ud83e\uddec HEXACO Verified</div><div class=\"bbadge\">\ud83d\udd12 Identity Owned</div></div></div><div class=\"banner-visual\"><div class=\"banner-ring\">N</div><span>NEON ID</span></div></div><div class=\"values-row\"><div class=\"vbox\"><span class=\"v-cross\">\u271b</span><h4>Human Before Machine</h4></div><div class=\"vbox\"><span class=\"v-cross\">\u271b</span><h4>Scientific Integrity</h4></div><div class=\"vbox\"><span class=\"v-cross\">\u271b</span><h4>Radical Ownership</h4></div><div class=\"vbox\"><span class=\"v-cross\">\u271b</span><h4>Empathy as Innovation</h4></div><div class=\"vbox\"><span class=\"v-cross\">\u271b</span><h4>Diversity by Design</h4></div></div><div class=\"ai-tip-row\"><div class=\"chat-card\"><div class=\"chat-hdr\"><div class=\"chat-hdr-l\"><div class=\"chat-hdr-ava\" id=\"chat-hdr-ava\"></div><div><div class=\"chat-title\">NEON ID Assistant</div><div class=\"chat-sub\">Powered by HEXACO \u00b7 Always in your corner</div></div></div><div class=\"online-dot\"></div></div><div id=\"chat-msgs\"><div class=\"mrow\"><div class=\"mava\" style=\"background:linear-gradient(135deg,#8B2FC9,#D4388A);\">\u2728</div><div class=\"mbubble ai\"><p>Hey there! \ud83d\udc4b I'm your NEON ID Assistant \u2014 your branding agency in your pocket, grounded in <strong>HEXACO personality science</strong>.</p><p style=\"margin-top:6px;\">Ask me anything about your brand, content strategy, audience insights, or team building. I'm here to help you win. \ud83c\udf1f</p></div></div><div id=\"chips\" class=\"chips\"><div class=\"chip\" onclick=\"chipSend(this)\">\u2709\ufe0f Draft an email</div><div class=\"chip\" onclick=\"chipSend(this)\">\ud83d\udccb Board update</div><div class=\"chip\" onclick=\"chipSend(this)\">\ud83d\udcb0 Fundraising message</div><div class=\"chip\" onclick=\"chipSend(this)\">\ud83e\udd1d Team message</div><div class=\"chip\" onclick=\"chipSend(this)\">\ud83d\udcf1 Instagram caption</div></div></div><div class=\"chat-input-row\"><input id=\"chat-in\" type=\"text\" placeholder=\"Ask your NEON ID Assistant anything\u2026\" onkeydown=\"if(event.key==='Enter')chatSend()\"/><button class=\"send-btn\" onclick=\"chatSend()\">\u27a4</button></div></div><div class=\"tip-card\" id=\"tip-card\"><div class=\"tip-lbl\">Tip of the Day</div><h3 id=\"tip-headline\">Lead with warmth and let your energy do the talking today.</h3><p id=\"tip-body\">Your personality thrives in connection. Post content that invites your audience in \u2014 ask questions, share a behind-the-scenes moment, or celebrate a win together. Your natural liveliness and compassion are your brand's greatest assets. The most magnetic brands don't shout \u2014 they resonate. Today, focus on depth over reach and let your authentic presence do the heavy lifting.</p><button class=\"tip-btn\" onclick=\"showPanel('studio')\">Go to Content Studio \u2192</button></div></div><div class=\"tot-card\"><div class=\"tot-hdr\"><div class=\"card-title\">Active Profile Builder \u00b7 Leadership</div><div class=\"card-action\" onclick=\"totNext()\">Skip \u2192</div></div><div class=\"tot-q\" id=\"tot-q\">When leading a team through change, you prefer to\u2026</div><div class=\"tot-opt\" id=\"tot-a\" onclick=\"totSelect('a')\"><div class=\"tot-ico\" id=\"tot-a-ico\">\ud83d\udde3\ufe0f</div><div class=\"tot-opt-txt\" id=\"tot-a-txt\">Rally the team with an inspiring vision speech</div></div><div class=\"tot-opt\" id=\"tot-b\" onclick=\"totSelect('b')\"><div class=\"tot-ico\" id=\"tot-b-ico\">\ud83d\udccb</div><div class=\"tot-opt-txt\" id=\"tot-b-txt\">Create a clear step-by-step action plan</div></div><p class=\"tot-privacy\">\ud83d\udd12 Your answers deepen your NEON personality fingerprint \u2014 always private and owned by you.</p><div><button id=\"tot-btn\" class=\"tot-submit-btn\" onclick=\"totSubmit()\">Answer to Earn +50 Points \u2726</button></div></div><div class=\"insights-row\"><div class=\"card\"><div class=\"card-hdr\"><div class=\"card-title\">Content Insights</div><div class=\"card-action\" onclick=\"showPanel('studio')\">Create Content \u2192</div></div><div id=\"content-insights\"></div></div><div class=\"ident-card\"><div class=\"card-hdr\"><div class=\"card-title\">Your Identity in Action</div><div class=\"card-action\">Explore All \u2192</div></div><div id=\"identity-blocks\"></div></div></div><div class=\"bottom-row\"><div class=\"dyk-card\"><div style=\"font-size:10px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;\">Did You Know?</div><h3>Your NEON ID is your universal digital passport \u2014 powered by the science of who you actually are.</h3><p>HEXACO is one of the most validated personality frameworks in the world. NEON translates that science into a living identity layer \u2014 helping brands, teams, and creators connect more authentically in the AI era.</p><button class=\"dyk-btn\" onclick=\"showPanel('fingerprint')\">Learn About HEXACO \u2192</button></div><div class=\"brands-wrap\"><div class=\"brands-overlay\"><div style=\"font-size:30px;\">\ud83d\udd12</div><div style=\"font-size:14px;font-weight:800;color:#888;letter-spacing:1px;\">Coming Soon</div><div style=\"font-size:11px;color:#aaa;font-weight:500;text-align:center;max-width:180px;line-height:1.6;\">Brand partnerships will be available in an upcoming release</div></div><div class=\"card\" style=\"filter:grayscale(.6) opacity(.6);\"><div class=\"card-hdr\"><div class=\"card-title\">Brands Interested in You</div><div class=\"card-action\">Manage Databank \u2192</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">DIS NEY</div><div class=\"brand-info\"><h4>Disney</h4><p>Wants to reach you \u00b7 Lifestyle</p></div><div class=\"brand-match\">$2.40/action</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">STAR BUCKS</div><div class=\"brand-info\"><h4>Starbucks</h4><p>Community & Rewards match</p></div><div class=\"brand-match\">$2.50/action</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">AIR BNB</div><div class=\"brand-info\"><h4>Airbnb</h4><p>Travel & Social Experience match</p></div><div class=\"brand-match\">$2.40/action</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">CVS Health</div><div class=\"brand-info\"><h4>CVS Health</h4><p>Wellness & Community alignment</p></div><div class=\"brand-match\">$2.60/action</div></div></div></div></div><div class=\"footer\"><p>NEON ID \u2014 Human Intelligence AI (HI-AI) \u00b7 Powered by HEXACO Personality Science \u00b7 \u00a9 2026 Humanum Intellego</p><span onclick=\"showPanel('fingerprint')\">Learn what your colors mean \u2192</span></div></div><div class=\"panel\" id=\"panel-fingerprint\"><div class=\"banner\" style=\"background:var(--grad-dark);\"><div class=\"banner-text\"><h1 style=\"color:#fff;\">\u2728 My NEON Fingerprint</h1><p>Your full HEXACO personality breakdown \u2014 the science behind your colors, traits, and brand identity.</p></div></div><div class=\"fp-panel\"><div class=\"hexaco-card\"><div class=\"hexaco-title\">HEXACO Trait Scores</div><div id=\"hexaco-bars\"></div></div><div class=\"hexaco-card\"><div class=\"hexaco-title\">About HEXACO</div><p style=\"font-size:12.5px;color:#555;line-height:1.7;margin-bottom:14px;\">HEXACO is a validated six-factor personality model developed by researchers Lee & Ashton. It measures Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, and Openness to Experience.</p><p style=\"font-size:12.5px;color:#555;line-height:1.7;\">Unlike older models, HEXACO includes Honesty-Humility as a core dimension \u2014 capturing your authentic relationship with fairness, integrity, and sincerity. NEON uses HEXACO to map your personality to a unique color fingerprint, powering every recommendation you see here.</p><div style=\"margin-top:18px;padding:14px;background:linear-gradient(135deg,#f0e0ff,#fce0f0);border-radius:12px;\"><div style=\"font-size:11px;font-weight:800;color:#8B2FC9;letter-spacing:.5px;margin-bottom:6px;\">YOUR DOMINANT TRAIT</div><div style=\"font-size:22px;font-weight:800;color:var(--text);\" id=\"dominant-trait\">Agreeableness</div><div style=\"font-size:12px;color:#555;margin-top:4px;\" id=\"dominant-desc\">You're highly cooperative, empathetic, and valued by the people around you. You naturally create environments where others feel heard and respected.</div></div></div></div><div><div class=\"card-hdr\" style=\"padding:0 0 12px;\"><div class=\"card-title\">Your Color Fingerprint</div><div class=\"card-action\">All 12 Colors</div></div><div class=\"colors-detail-grid\" id=\"colors-detail-grid\"></div></div></div><div class=\"panel\" id=\"panel-studio\"><div class=\"banner\"><div class=\"banner-text\"><h1>\ud83d\udcdd Content Studio</h1><p>Create content that sounds like you \u2014 not a template. Every piece is calibrated to your HEXACO fingerprint and available in your 3 color voices.</p></div></div><div class=\"studio-grid\"><div class=\"studio-item\" onclick=\"studioPrompt('social caption')\"><div class=\"si-ico\">\ud83d\udcf1</div><h4>Social Caption</h4><p>Instagram, LinkedIn, X \u2014 in your 3 brand voices, ready to post.</p><span class=\"si-tag\">Most Popular</span></div><div class=\"studio-item\" onclick=\"studioPrompt('email')\"><div class=\"si-ico\">\u2709\ufe0f</div><h4>Email Draft</h4><p>Professional emails that feel personal. Client, team, or cold outreach.</p><span class=\"si-tag\">Quick Win</span></div><div class=\"studio-item\" onclick=\"studioPrompt('fundraising message')\"><div class=\"si-ico\">\ud83d\udcb0</div><h4>Fundraising Message</h4><p>Make your ask land. Donor appeals written in your authentic voice.</p><span class=\"si-tag\">High Impact</span></div><div class=\"studio-item\" onclick=\"studioPrompt('board update')\"><div class=\"si-ico\">\ud83d\udccb</div><h4>Board Update</h4><p>Communicate wins, challenges, and direction to stakeholders clearly.</p><span class=\"si-tag\">Leadership</span></div><div class=\"studio-item\" onclick=\"studioPrompt('team message')\"><div class=\"si-ico\">\ud83e\udd1d</div><h4>Team Message</h4><p>Inspire, redirect, or celebrate your team in your natural leadership style.</p><span class=\"si-tag\">Team Builder</span></div><div class=\"studio-item\" onclick=\"studioPrompt('bio or about section')\"><div class=\"si-ico\">\ud83e\udeaa</div><h4>Bio / About Me</h4><p>Your story, your way. Platform-ready bios in your 3 color voices.</p><span class=\"si-tag\">Identity</span></div></div><div class=\"card\" id=\"studio-output\" style=\"display:none;\"><div class=\"card-hdr\"><div class=\"card-title\" id=\"studio-output-title\">Generated Content</div><div class=\"card-action\" onclick=\"document.getElementById('studio-output').style.display='none'\">\u2715 Close</div></div><div id=\"studio-output-body\" style=\"font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;\"></div></div></div><div class=\"panel\" id=\"panel-scan\"><div class=\"banner\" style=\"background:linear-gradient(135deg,#1a1a2e,#3d1a5e,#1a3a5e);\"><div class=\"banner-text\"><h1 style=\"color:#fff;\">\ud83c\udfa8 Brand Scan</h1><p>Scan any brand and see how well it aligns with your NEON personality fingerprint. Know before you partner, post, or purchase.</p></div></div><div class=\"scan-input-card\"><h3>Scan a Brand</h3><p>Enter a brand name or paste their mission statement to get your personality-match score.</p><input class=\"scan-field\" id=\"scan-brand\" type=\"text\" placeholder=\"e.g. Patagonia, Nike, Glossier\u2026\"/><textarea class=\"scan-field\" id=\"scan-about\" rows=\"3\" placeholder=\"Optional: paste their mission, values, or about text for a deeper scan\u2026\" style=\"resize:vertical;\"></textarea><button class=\"scan-btn\" onclick=\"runBrandScan()\">Run Brand Scan \u2726</button></div><div class=\"card\" id=\"scan-results\" style=\"display:none;\"><div class=\"card-hdr\"><div class=\"card-title\" id=\"scan-brand-name\">Brand Match Results</div></div><div style=\"margin-bottom:16px;\"><div style=\"font-size:12px;color:var(--muted);margin-bottom:8px;\">Overall Personality Match</div><div class=\"match-meter\"><div class=\"meter-track\"><div class=\"meter-fill\" id=\"scan-meter\" style=\"width:0%\"></div></div><div class=\"meter-val\" id=\"scan-pct\">\u2014</div></div></div><div id=\"scan-output\" style=\"font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;\"></div></div></div><div class=\"panel\" id=\"panel-team\"><div class=\"banner\" style=\"background:linear-gradient(135deg,#1a3a5e,#2d1b69,#3d1a5e);\"><div class=\"banner-text\"><h1 style=\"color:#fff;\">\ud83d\udc65 Team Builder</h1><p>Understand how personality colors interact. Build teams where traits complement each other and drive results.</p></div></div><div class=\"card\"><div class=\"card-hdr\"><div class=\"card-title\">Your Team Compatibility</div><div class=\"card-action\">Add Team Member \u2192</div></div><div class=\"team-grid\"><div class=\"team-card\"><div class=\"team-ava\" style=\"background:var(--grad);\">T</div><div class=\"team-name\" id=\"team-you-name\">Taylor Monroe</div><div class=\"team-role\">You \u00b7 Leader</div><div class=\"team-colors\" id=\"team-you-colors\"><div class=\"tc-dot\" style=\"background:#C0194A;\"></div><div class=\"tc-dot\" style=\"background:#9B59B6;\"></div><div class=\"tc-dot\" style=\"background:#E07B50;\"></div></div><div class=\"compat-score\">Your Fingerprint</div></div><div class=\"team-card\"><div class=\"team-ava\" style=\"background:linear-gradient(135deg,#1A5FA8,#5BBCD4);\">A</div><div class=\"team-name\">Alex Rivera</div><div class=\"team-role\">Operations Lead</div><div class=\"team-colors\"><div class=\"tc-dot\" style=\"background:#1A5FA8;\"></div><div class=\"tc-dot\" style=\"background:#1A6B3C;\"></div><div class=\"tc-dot\" style=\"background:#5BBCD4;\"></div></div><div class=\"compat-score\">\u26a1 91% Compatible</div></div><div class=\"team-card\"><div class=\"team-ava\" style=\"background:linear-gradient(135deg,#E8C840,#D4A020);\">J</div><div class=\"team-name\">Jordan Kim</div><div class=\"team-role\">Creative Director</div><div class=\"team-colors\"><div class=\"tc-dot\" style=\"background:#E8C840;\"></div><div class=\"tc-dot\" style=\"background:#E05080;\"></div><div class=\"tc-dot\" style=\"background:#9B59B6;\"></div></div><div class=\"compat-score\">\ud83c\udf1f 87% Compatible</div></div></div></div><div class=\"card\" style=\"background:linear-gradient(160deg,#f9f0ff,#fdf0f8);\"><div class=\"card-hdr\"><div class=\"card-title\">Team Dynamics Insight</div></div><p style=\"font-size:12.5px;color:#555;line-height:1.7;\">Your Ruby energy makes you a natural team energizer \u2014 you build momentum and keep morale high. Pair yourself with Sapphire/Emerald types (detail-oriented, systematic) to cover your blind spots. Your Copper warmth creates psychological safety that lets quieter team members contribute their best work.</p></div></div><div class=\"panel\" id=\"panel-audience\"><div class=\"banner\"><div class=\"banner-text\"><h1>\ud83d\udcca Audience Insights</h1><p>Understand who resonates with your NEON personality. Know your audience before you speak to them.</p></div></div><div class=\"aud-grid\"><div class=\"aud-stat\"><div class=\"stat-num\">94%</div><div class=\"stat-label\">Audience Agreeableness Match</div><div class=\"aud-bar-row\"><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Purpose-driven</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:88%\"></div></div><span class=\"aud-bar-pct\">88%</span></div><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Community-first</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:82%\"></div></div><span class=\"aud-bar-pct\">82%</span></div><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Values authentic</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:76%\"></div></div><span class=\"aud-bar-pct\">76%</span></div></div></div><div class=\"aud-stat\"><div class=\"stat-num\">88%</div><div class=\"stat-label\">Extraversion Resonance</div><div class=\"aud-bar-row\"><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Change-makers</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:92%\"></div></div><span class=\"aud-bar-pct\">92%</span></div><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Social learners</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:79%\"></div></div><span class=\"aud-bar-pct\">79%</span></div><div class=\"aud-bar-item\"><span class=\"aud-bar-label\">Bold visionaries</span><div class=\"aud-bar-track\"><div class=\"aud-bar-fill\" style=\"width:71%\"></div></div><span class=\"aud-bar-pct\">71%</span></div></div></div><div class=\"aud-stat\"><div class=\"stat-num\">3</div><div class=\"stat-label\">Core Audience Archetypes</div><div style=\"display:flex;flex-direction:column;gap:8px;margin-top:12px;\"><div style=\"display:flex;align-items:center;gap:10px;\"><div style=\"width:10px;height:10px;border-radius:50%;background:#C0194A;flex-shrink:0;\"></div><span style=\"font-size:12px;font-weight:600;\">The Inspired Doer</span></div><div style=\"display:flex;align-items:center;gap:10px;\"><div style=\"width:10px;height:10px;border-radius:50%;background:#9B59B6;flex-shrink:0;\"></div><span style=\"font-size:12px;font-weight:600;\">The Community Builder</span></div><div style=\"display:flex;align-items:center;gap:10px;\"><div style=\"width:10px;height:10px;border-radius:50%;background:#E07B50;flex-shrink:0;\"></div><span style=\"font-size:12px;font-weight:600;\">The Authentic Seeker</span></div></div></div><div class=\"aud-stat\"><div class=\"stat-num\">\u2191 12%</div><div class=\"stat-label\">Engagement Lift from Personality Alignment</div><p style=\"font-size:11.5px;color:var(--muted);margin-top:10px;line-height:1.6;\">Content aligned with your HEXACO fingerprint sees 12% higher engagement vs. generic posts. Your warmth and directness are your highest-performing brand signals.</p></div></div></div><div class=\"panel\" id=\"panel-databank\"><div class=\"db-hero\"><div class=\"db-hero-text\"><h2>\ud83d\udd12 My Databank</h2><p>Your data, your rules. Control exactly what brands and researchers can access \u2014 and earn from every interaction.</p></div><div><div class=\"db-amt\" id=\"db-earnings\">$216.00</div><div class=\"db-amt-sub\">Total Earnings \u00b7 USD</div></div></div><div class=\"db-toggle-row\"><div class=\"db-toggle\" onclick=\"toggleDB(this)\"><div class=\"db-toggle-info\"><h4>Personality Insights</h4><p>Allow brands to see your HEXACO color profile</p></div><div class=\"toggle-switch on\"><div class=\"toggle-knob\"></div></div></div><div class=\"db-toggle\" onclick=\"toggleDB(this)\"><div class=\"db-toggle-info\"><h4>Content Preferences</h4><p>Share what content types resonate with you</p></div><div class=\"toggle-switch on\"><div class=\"toggle-knob\"></div></div></div><div class=\"db-toggle\" onclick=\"toggleDB(this)\"><div class=\"db-toggle-info\"><h4>Demographics</h4><p>Age range, location, profession category</p></div><div class=\"toggle-switch\"><div class=\"toggle-knob\"></div></div></div></div><div class=\"brands-wrap\"><div class=\"brands-overlay\"><div style=\"font-size:30px;\">\ud83d\udd12</div><div style=\"font-size:14px;font-weight:800;color:#888;\">Coming Soon</div><div style=\"font-size:11px;color:#aaa;max-width:200px;text-align:center;line-height:1.6;\">Brand partnership features launching in an upcoming release</div></div><div class=\"card\" style=\"filter:grayscale(.5) opacity(.7);\"><div class=\"card-hdr\"><div class=\"card-title\">Brands Interested in You</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">DIS NEY</div><div class=\"brand-info\"><h4>Disney</h4><p>Lifestyle match \u00b7 $2.40/action</p></div><div class=\"brand-match\">View Offer</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">STAR BUCKS</div><div class=\"brand-info\"><h4>Starbucks</h4><p>Community match \u00b7 $2.50/action</p></div><div class=\"brand-match\">View Offer</div></div><div class=\"brand-rec\"><div class=\"brand-logo\">CVS Health</div><div class=\"brand-info\"><h4>CVS Health</h4><p>Wellness match \u00b7 $2.60/action</p></div><div class=\"brand-match\">View Offer</div></div></div></div></div><div class=\"panel\" id=\"panel-settings\"><div class=\"banner\" style=\"background:var(--grad-dark);\"><div class=\"banner-text\"><h1 style=\"color:#fff;\">\u2699\ufe0f Settings</h1><p>Manage your NEON ID profile, preferences, and account.</p></div></div><div class=\"settings-grid\"><div class=\"settings-section\"><h3>Profile Information</h3><label style=\"font-size:11px;font-weight:700;color:#888;\">First Name</label><input class=\"input-field\" id=\"s-fname\" type=\"text\" placeholder=\"Taylor\"><label style=\"font-size:11px;font-weight:700;color:#888;margin-top:10px;display:block;\">Last Name</label><input class=\"input-field\" id=\"s-lname\" type=\"text\" placeholder=\"Monroe\"><label style=\"font-size:11px;font-weight:700;color:#888;margin-top:10px;display:block;\">Job Title / Role</label><input class=\"input-field\" id=\"s-title\" type=\"text\" placeholder=\"Founder, Creator\u2026\"><button class=\"save-btn\" onclick=\"saveProfile()\">Save Profile</button></div><div class=\"settings-section\"><h3>Notification Preferences</h3><div class=\"setting-row\"><div><div class=\"setting-lbl\">Daily Tip</div><div class=\"setting-sub\">Get your personality-based tip each morning</div></div><div class=\"toggle-switch on\" onclick=\"toggleDB(this)\"><div class=\"toggle-knob\"></div></div></div><div class=\"setting-row\"><div><div class=\"setting-lbl\">Brand Alerts</div><div class=\"setting-sub\">New brand matches for your profile</div></div><div class=\"toggle-switch on\" onclick=\"toggleDB(this)\"><div class=\"toggle-knob\"></div></div></div><div class=\"setting-row\"><div><div class=\"setting-lbl\">Earnings Updates</div><div class=\"setting-sub\">Databank earnings notifications</div></div><div class=\"toggle-switch\" onclick=\"toggleDB(this)\"><div class=\"toggle-knob\"></div></div></div><div class=\"setting-row\"><div><div class=\"setting-lbl\">Team Invites</div><div class=\"setting-sub\">When someone adds you to a team</div></div><div class=\"toggle-switch on\" onclick=\"toggleDB(this)\"><div class=\"toggle-knob\"></div></div></div></div><div class=\"settings-section\"><h3>Account & Security</h3><div class=\"setting-row\"><div class=\"setting-lbl\">Email</div><div class=\"setting-val\" id=\"s-email\">\u2014</div></div><div class=\"setting-row\"><div class=\"setting-lbl\">Account Status</div><div style=\"font-size:11px;font-weight:700;color:#4ade80;\">\u2713 Verified</div></div><div class=\"setting-row\"><div class=\"setting-lbl\">HEXACO Assessment</div><div style=\"font-size:11px;font-weight:700;color:#8B2FC9;\">\u2713 Complete</div></div><div class=\"setting-row\"><div class=\"setting-lbl\">Data Privacy</div><div style=\"font-size:11px;font-weight:700;color:#8B2FC9;\">You Own Your Data</div></div><button class=\"save-btn\" style=\"background:linear-gradient(135deg,#D4388A,#C0194A);margin-top:16px;\" onclick=\"signOut()\">Sign Out</button></div><div class=\"settings-section\"><h3>Retake Assessment</h3><p style=\"font-size:12px;color:var(--muted);line-height:1.65;margin-bottom:14px;\">Your personality fingerprint evolves. Retake the HEXACO quiz any time to get a fresh read on where you are today.</p><div style=\"background:linear-gradient(135deg,#f0e0ff,#fce0f0);border-radius:12px;padding:14px;margin-bottom:14px;\"><div style=\"font-size:11px;font-weight:800;color:#8B2FC9;margin-bottom:4px;\">LAST ASSESSED</div><div style=\"font-size:13px;font-weight:700;color:var(--text);\" id=\"last-assessed\">\u2014</div></div><button class=\"save-btn\" onclick=\"window.open('https://typeform.com','_blank')\">Retake HEXACO Quiz \u2192</button></div></div></div></main></div><div id=\"ctip\"></div>";
  var sb=document.createElement('script');
  sb.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  sb.onload=boot;
  document.head.appendChild(sb);
  function boot(){

// ══════════════════════════════════════════
// CONFIGURATION — Replace with your values
// ══════════════════════════════════════════
const SUPABASE_URL  = 'https://edwzvjzpmhflzjnoibor.supabase.co';
const SUPABASE_ANON = 'sb_publishable_FogbhAzojyu-pXSU0jTRcA_sKtSlKCJ';
// FastAPI backend — add /chat endpoint (see instructions below)
const API_ENDPOINT  = 'https://neon-assessment-api-244069100291.us-central1.run.app/chat';

// ── Color definitions (matches your 12-color system) ──
const COLOR_MAP = {
  ruby:      { hex:'#C0194A', traits:'Lively · Sociable · Confident' },
  violet:    { hex:'#7B2D8B', traits:'Emotional · Sensitive · Sentimental' },
  sapphire:  { hex:'#1A5FA8', traits:'Sincere · Fair-Minded · Loyal' },
  sky:       { hex:'#5BBCD4', traits:'Daring · Opportunistic · Proud' },
  emerald:   { hex:'#1A6B3C', traits:'Organized · Thorough · Self-Disciplined' },
  jade:      { hex:'#5A8F4A', traits:'Relaxed · Spontaneous · Easygoing' },
  rose:      { hex:'#E05080', traits:'Reserved · Quiet · Thoughtful' },
  lavender:  { hex:'#9B59B6', traits:'Independent · Fearless · Self-Assured' },
  tangerine: { hex:'#E07030', traits:'Passionate · Relentless · Direct' },
  copper:    { hex:'#C87040', traits:'Patient · Forgiving · Pleasant' },
  gold:      { hex:'#E8C840', traits:'Innovative · Imaginative · Inquisitive' },
  amber:     { hex:'#D4A020', traits:'Conventional · Simple · Die-Hard' }
};

// HEXACO trait display order
const HEXACO_TRAITS = [
  { key:'agreeableness',     label:'Agreeableness',     desc:'Cooperative, empathetic, forgiving — you create harmony.' },
  { key:'extraversion',      label:'Extraversion',      desc:'Social, expressive, energetic — you light up the room.' },
  { key:'honesty',           label:'Honesty-Humility',  desc:'Sincere, fair-minded, authentic — you say what you mean.' },
  { key:'openness',          label:'Openness',          desc:'Creative, curious, imaginative — you see new possibilities.' },
  { key:'conscientiousness', label:'Conscientiousness', desc:'Organized, disciplined, focused — you follow through.' },
  { key:'emotionality',      label:'Emotionality',      desc:'Sensitive, empathetic, aware — you feel deeply.' }
];

// ── State ──
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { storageKey: 'sb-edwzvjzpmhflzjnoibor-auth-token' }
});
let USER = null;
let PROFILE = null;
let chatHistory = [];
let currentPanel = 'home';

// ── This or That Questions ──
const TOT_QS = [
  { q:'When leading a team through change, you prefer to…', a:['Rally the team with an inspiring vision speech','Create a clear step-by-step action plan'], ico:['🗣️','📋'] },
  { q:'A team member is underperforming. You…', a:['Have an honest 1-on-1 conversation right away','Give them space and check in gradually'], ico:['💬','🌱'] },
  { q:'Your leadership superpower is…', a:['Energizing the room and building momentum','Keeping everyone grounded and focused'], ico:['⚡','🧭'] },
  { q:'In a high-stakes meeting you tend to…', a:['Speak up early and set the tone','Listen first, then offer a decisive take'], ico:['🎙️','👂'] },
  { q:'You build trust with your team by…', a:['Being open, warm, and approachable','Being consistent, reliable, and prepared'], ico:['🤝','📌'] }
];
let totIdx = 0, totSel = null;

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
async function init() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      USER = session.user;
      await loadProfile();
    } else {
      // No session — show demo mode with default data
      loadDemoProfile();
    }
  } catch(e) {
    // Supabase not configured yet — show demo mode
    loadDemoProfile();
  }
  renderAll();
  hideLoading();
}

async function loadProfile() {
  try {
    // Query by user_id (UUID) — matches how FastAPI webhook saves it
    const { data, error } = await supabase
      .from('typeform_submissions')
      .select('*')
      .eq('user_id', USER.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (data && !error) {
      // personality_scores is JSONB: { openness: 0.72, extraversion: 0.55, ... } (0.0-1.0)
      // Convert to 0-100 for display
      const ps = data.personality_scores || {};
      const toPercent = v => Math.round((typeof v === 'number' ? v : 0.5) * 100);

      // Colors stored as color01..color06 (e.g. "Ruby", "Gold") — lowercase to match COLOR_MAP
      const c = n => (data['color0' + n] || 'Ruby').toLowerCase();

      PROFILE = {
        firstName:   data.first_name  || USER.user_metadata?.first_name || 'Taylor',
        lastName:    data.last_name   || USER.user_metadata?.last_name  || 'Monroe',
        email:       data.email       || USER.email,
        linkedinUrl: data.linkedin_url || null,
        colors: [
          { name: c(1), rank: 1, score: data.color01_score || 50 },
          { name: c(2), rank: 2, score: data.color02_score || 50 },
          { name: c(3), rank: 3, score: data.color03_score || 50 },
          { name: c(4), rank: 4, score: data.color04_score || 50 },
          { name: c(5), rank: 5, score: data.color05_score || 50 },
          { name: c(6), rank: 6, score: data.color06_score || 50 },
        ],
        hexaco: {
          agreeableness:     toPercent(ps.agreeableness),
          extraversion:      toPercent(ps.extraversion),
          honesty:           toPercent(ps.honesty),
          openness:          toPercent(ps.openness),
          conscientiousness: toPercent(ps.conscientiousness),
          emotionality:      toPercent(ps.emotionality)
        },
        earnings:    data.databank_earnings || 0,
        submittedAt: data.created_at
      };
    } else {
      loadDemoProfile();
    }
  } catch(e) {
    console.error('loadProfile error:', e);
    loadDemoProfile();
  }
}

function loadDemoProfile() {
  PROFILE = {
    firstName: 'Taylor',
    lastName:  'Monroe',
    email:     'taylor@example.com',
    colors: [
      { name:'ruby',     rank:1 },
      { name:'lavender', rank:2 },
      { name:'copper',   rank:3 }
    ],
    hexaco: {
      agreeableness:94, extraversion:88,
      honesty:72, openness:60,
      conscientiousness:48, emotionality:32
    },
    earnings: 216.00,
    submittedAt: null
  };
}

// ══════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════
function renderAll() {
  if (!PROFILE) return;
  const p = PROFILE;
  const fullName = `${p.firstName} ${p.lastName}`;

  // Header
  document.getElementById('hdr-ava').textContent = p.firstName[0].toUpperCase();
  document.getElementById('hdr-name').textContent = p.firstName;

  // Banner
  document.getElementById('banner-greeting').textContent = `Welcome back, ${p.firstName} 👋`;
  const colorLabels = p.colors.map(c => capitalize(c.name)).join(' · ');
  document.getElementById('banner-badges').innerHTML =
    `<div class="bbadge">🌟 ${colorLabels}</div>
     <div class="bbadge">🧬 HEXACO Verified</div>
     <div class="bbadge">🔒 Identity Owned</div>`;

  // Sidebar ring
  document.getElementById('sidebar-ring').innerHTML = neonRing(76, p.colors, p.firstName[0]);
  document.getElementById('chat-hdr-ava').innerHTML = neonRing(30, p.colors, p.firstName[0]);
  document.getElementById('sb-name').textContent = fullName;

  // Sidebar trait bars
  const sbTraits = document.getElementById('sb-traits');
  sbTraits.innerHTML = HEXACO_TRAITS.map(t => `
    <div class="ptrait">
      <span class="ptrait-name">${t.label.split('-')[0]}</span>
      <div class="ptrait-track"><div class="ptrait-fill" style="width:${p.hexaco[t.key]}%"></div></div>
      <span class="ptrait-val">${p.hexaco[t.key]}</span>
    </div>`).join('');

  // Sidebar colors
  document.getElementById('sb-colors').innerHTML =
    p.colors.map(c => `<div class="pdot" style="background:${COLOR_MAP[c.name]?.hex || '#ccc'};"></div>`).join('');

  // Earnings
  document.getElementById('sb-earnings').textContent = `$${p.earnings.toFixed(2)}`;
  document.getElementById('db-earnings').textContent  = `$${p.earnings.toFixed(2)}`;

  // Settings
  document.getElementById('s-email').textContent   = p.email;
  document.getElementById('s-fname').value          = p.firstName;
  document.getElementById('s-lname').value          = p.lastName;
  document.getElementById('last-assessed').textContent = p.submittedAt
    ? new Date(p.submittedAt).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})
    : 'Not yet on record';

  // Team card
  document.getElementById('team-you-name').textContent = fullName;
  document.getElementById('team-you-colors').innerHTML =
    p.colors.map(c => `<div class="tc-dot" style="background:${COLOR_MAP[c.name]?.hex || '#ccc'};"></div>`).join('');

  // Content insights
  renderContentInsights();
  renderIdentityBlocks();
  renderHexacoBars();
  renderColorsDetail();
  renderTip();
  loadTot();
}

function renderContentInsights() {
  const insights = [
    { color: PROFILE.colors[0], ico:'🔥', title:'Energize Your Feed', body:`Your ${getTraitWord(0, 0)} energy resonates when you use action-forward language. Try "join us," "let's explore," and "discover" to spark engagement.` },
    { color: PROFILE.colors[1], ico:'🧘', title:'Lead with Fearless Confidence', body:`Your ${getTraitWord(1, 0)} nature is your edge. Clear, direct messaging builds trust without over-explaining — own your point of view unapologetically.` },
    { color: PROFILE.colors[2], ico:'🤝', title:'Build Community with Warmth', body:`Your ${getTraitWord(2, 0)} warmth makes people feel safe. Highlight stories of support, collaboration, and generosity — audiences who value belonging will gravitate to you.` }
  ];
  document.getElementById('content-insights').innerHTML = insights.map(i => {
    const hex = COLOR_MAP[i.color.name]?.hex || '#888';
    return `<div class="insight-item">
      <div class="i-bar" style="background:${hex};"></div>
      <div class="i-ico" style="background:${hex}22;">${i.ico}</div>
      <div class="i-text">
        <h4 style="color:${hex};">${i.title}</h4>
        <p>${i.body}</p>
      </div>
    </div>`;
  }).join('');
}

function renderIdentityBlocks() {
  const c0 = COLOR_MAP[PROFILE.colors[0].name] || {};
  const c1 = COLOR_MAP[PROFILE.colors[1].name] || {};
  const c2 = COLOR_MAP[PROFILE.colors[2].name] || {};
  document.getElementById('identity-blocks').innerHTML = `
    <div class="id-block">
      <div class="id-block-lbl" style="color:${c0.hex || '#C0194A'};">VOICE & TONE</div>
      <p>Bold, warm, and magnetic. Your audience responds to passion backed by approachability. Lead with energy, close with heart.</p>
    </div>
    <div class="id-block">
      <div class="id-block-lbl" style="color:${c1.hex || '#9B59B6'};">AUDIENCE MATCH</div>
      <p>You attract change-makers, community builders, and purpose-driven doers who value realness over perfection.</p>
    </div>
    <div class="id-block">
      <div class="id-block-lbl" style="color:${c2.hex || '#C87040'};">CONTENT FORMAT</div>
      <p>Behind-the-scenes moments, community spotlights, and honest reflections perform best for your personality profile.</p>
    </div>`;
}

function renderHexacoBars() {
  document.getElementById('hexaco-bars').innerHTML = HEXACO_TRAITS.map(t => `
    <div class="hx-row">
      <span class="hx-name">${t.label}</span>
      <div class="hx-track"><div class="hx-fill" style="width:${PROFILE.hexaco[t.key]}%"></div></div>
      <span class="hx-val">${PROFILE.hexaco[t.key]}</span>
    </div>`).join('');

  // Dominant trait
  const topTrait = HEXACO_TRAITS.reduce((a, b) =>
    PROFILE.hexaco[a.key] >= PROFILE.hexaco[b.key] ? a : b);
  document.getElementById('dominant-trait').textContent = topTrait.label;
  document.getElementById('dominant-desc').textContent  = topTrait.desc;
}

function renderColorsDetail() {
  const grid = document.getElementById('colors-detail-grid');
  grid.innerHTML = PROFILE.colors.map((c, i) => {
    const cd = COLOR_MAP[c.name] || {};
    return `<div class="color-detail-box">
      <div class="cdb-swatch" style="background:${cd.hex};"></div>
      <div class="cdb-name">${capitalize(c.name)}</div>
      <div class="cdb-traits">${cd.traits || ''}</div>
      <span class="cdb-rank">#${i+1} Color</span>
    </div>`;
  }).join('');
}

function renderTip() {
  const tips = [
    { h:'Lead with warmth and let your energy do the talking today.', b:"Your personality thrives in connection. Post content that invites your audience in — ask questions, share a behind-the-scenes moment, or celebrate a win together. Your natural liveliness and compassion are your brand's greatest assets. The most magnetic brands don't shout — they resonate." },
    { h:'Your authenticity is your competitive advantage.', b:"Don't dilute your message trying to appeal to everyone. The sharper and more specific your voice, the more powerfully it resonates with the audience that truly fits you. Your Lavender independence is a brand asset — use it." },
    { h:'Community is content. Build it today.', b:"Your Copper warmth creates belonging wherever you show up. Today, reach out to one community member, respond to a comment thoughtfully, or share someone else's win. Generosity of attention builds the most durable audience trust." }
  ];
  const tip = tips[new Date().getDate() % tips.length];
  document.getElementById('tip-headline').textContent = tip.h;
  document.getElementById('tip-body').textContent     = tip.b;
}

// ── Helpers ──
function getTraitWord(colorIdx, wordIdx) {
  const c = PROFILE.colors[colorIdx];
  const words = COLOR_MAP[c.name]?.traits.split(' · ') || ['unique'];
  return (words[wordIdx] || words[0]).toLowerCase();
}
function capitalize(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

function neonRing(sz, colors, initial) {
  const cx = sz / 2, cy = sz / 2;
  const outerR = sz * 0.48;
  const innerR = sz * 0.30;
  const c = colors.slice(0, 3).map(c => COLOR_MAP[c.name]?.hex || '#ccc');

  function arc(startDeg, endDeg, color) {
    const s = (startDeg - 90) * Math.PI / 180;
    const e = (endDeg - 90) * Math.PI / 180;
    const x1 = cx + outerR * Math.cos(s), y1 = cy + outerR * Math.sin(s);
    const x2 = cx + outerR * Math.cos(e), y2 = cy + outerR * Math.sin(e);
    const ix1 = cx + innerR * Math.cos(e), iy1 = cy + innerR * Math.sin(e);
    const ix2 = cx + innerR * Math.cos(s), iy2 = cy + innerR * Math.sin(s);
    const large = (endDeg - startDeg) > 180 ? 1 : 0;
    return `<path d="M${x1},${y1} A${outerR},${outerR} 0 ${large} 1 ${x2},${y2} L${ix1},${iy1} A${innerR},${innerR} 0 ${large} 0 ${ix2},${iy2} Z" fill="${color}"/>`;
  }

  return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}">
    ${arc(0, 240, c[1])}
    ${arc(240, 360, c[2])}
    <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="${c[0]}"/>
  </svg>`;
}

// ══════════════════════════════════════════
// PANEL NAVIGATION
// ══════════════════════════════════════════
function showPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  if (panel) panel.classList.add('active');
  document.querySelector(`.ni[data-panel="${name}"]`)?.classList.add('active');
  currentPanel = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════
// AI CHAT
// ══════════════════════════════════════════
function buildSystemPrompt() {
  if (!PROFILE) return '';
  const colorStr = PROFILE.colors.map(c => `${capitalize(c.name)} (${COLOR_MAP[c.name]?.traits})`).join(', ');
  const hexStr   = HEXACO_TRAITS.map(t => `${t.label} ${PROFILE.hexaco[t.key]}`).join(', ');
  return `You are the NEON ID Assistant — a vibrant, supportive AI branding coach embedded in the NEON ID dashboard. NEON ID is a personality-science-powered branding platform grounded in HEXACO validated personality psychology.

The user's name is ${PROFILE.firstName} ${PROFILE.lastName}. Their NEON personality colors (ranked) are: ${colorStr}. Their HEXACO scores: ${hexStr}.

Your role: branding agency in their pocket, content generator, team builder, strategy starter, and confidence booster. Always ground advice in their specific HEXACO/color personality. Keep responses concise, warm, energetic, and actionable. Use emojis occasionally.

IMPORTANT FORMATTING RULE: Unless the user asks for a different format, always present content outputs in THREE versions, each reflecting one of their top personality colors in order:
1. Version 1 ✦ (${capitalize(PROFILE.colors[0].name)} energy — ${COLOR_MAP[PROFILE.colors[0].name]?.traits})
2. Version 2 ✦ (${capitalize(PROFILE.colors[1].name)} energy — ${COLOR_MAP[PROFILE.colors[1].name]?.traits})
3. Version 3 ✦ (${capitalize(PROFILE.colors[2].name)} energy — ${COLOR_MAP[PROFILE.colors[2].name]?.traits})

Label each version clearly. Make each version feel distinctly different in voice and energy. Never mention the color names in the content you write — only in the version labels.`;
}

async function chatSend() {
  const input = document.getElementById('chat-in');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';
  document.getElementById('chips')?.remove();
  addMsg('user', text);
  chatHistory.push({ role:'user', content:text });
  const typing = addMsg('ai', '', true);
  try {
    // ── Route through your FastAPI backend ──
    // Your FastAPI endpoint should accept { messages, system } and call Anthropic
    const res = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: buildSystemPrompt(),
        messages: chatHistory,
        max_tokens: 1000
      })
    });
    const data = await res.json();
    const reply = data.content?.map(b => b.text || '').join('') || data.reply || '';
    typing.remove();
    addMsg('ai', reply);
    chatHistory.push({ role:'assistant', content:reply });
  } catch(e) {
    typing.remove();
    addMsg('ai', `Hmm, I'm having trouble connecting right now. Make sure your API endpoint is configured in the CONFIGURATION section at the top of the script! ✨`);
  }
}

function chipSend(el) {
  document.getElementById('chat-in').value = el.textContent.replace(/^[^\w]+/,'').trim();
  chatSend();
}

function addMsg(role, text, isTyping=false) {
  const wrap = document.getElementById('chat-msgs');
  const div = document.createElement('div');
  div.className = 'mrow' + (role==='user' ? ' user' : '');
  const ava  = document.createElement('div');
  ava.className = 'mava';
  ava.style.cssText = role==='user'
    ? 'background:linear-gradient(135deg,#F4845F,#D4388A);color:#fff;'
    : 'background:linear-gradient(135deg,#8B2FC9,#D4388A);';
  ava.textContent = role==='user' ? (PROFILE?.firstName[0] || 'T') : '✨';
  const bub = document.createElement('div');
  bub.className = 'mbubble ' + (role==='user' ? 'user' : 'ai');
  if (isTyping) {
    bub.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    div.id = 'typing';
  } else {
    // Convert markdown-like **bold** and line breaks
    bub.innerHTML = text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  }
  div.appendChild(ava);
  div.appendChild(bub);
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}

// ══════════════════════════════════════════
// STUDIO AI
// ══════════════════════════════════════════
async function studioPrompt(type) {
  const out = document.getElementById('studio-output');
  const body = document.getElementById('studio-output-body');
  const title = document.getElementById('studio-output-title');
  out.style.display = 'block';
  title.textContent = `Generating ${type}…`;
  body.textContent = '';
  body.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';

  const userMsg = `Write a ${type} for me. Use my NEON personality fingerprint.`;
  try {
    const res = await fetch(API_ENDPOINT, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        system: buildSystemPrompt(),
        messages:[{ role:'user', content:userMsg }],
        max_tokens:1200
      })
    });
    const data = await res.json();
    const reply = data.content?.map(b=>b.text||'').join('') || data.reply || '';
    title.textContent = capitalize(type);
    body.innerHTML = reply.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  } catch(e) {
    body.textContent = 'Could not generate content — check your API endpoint configuration.';
  }
  out.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// ══════════════════════════════════════════
// BRAND SCAN
// ══════════════════════════════════════════
async function runBrandScan() {
  const brand = document.getElementById('scan-brand').value.trim();
  const about = document.getElementById('scan-about').value.trim();
  if (!brand) return;

  const results = document.getElementById('scan-results');
  const output  = document.getElementById('scan-output');
  const pct     = document.getElementById('scan-pct');
  const meter   = document.getElementById('scan-meter');
  document.getElementById('scan-brand-name').textContent = `${brand} · Brand Match`;
  results.style.display = 'block';
  output.textContent = 'Scanning…';
  meter.style.width = '0%';
  pct.textContent = '—';

  const userMsg = `Run a brand personality match scan for: ${brand}${about ? `. Their description: "${about}"` : ''}. 
Give an overall match percentage (0-100) on the first line formatted exactly as: MATCH: XX
Then provide your analysis.`;

  try {
    const res = await fetch(API_ENDPOINT, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        system:buildSystemPrompt() + '\nAlways start brand scan responses with "MATCH: XX" on the first line where XX is a 0-100 number.',
        messages:[{role:'user',content:userMsg}],
        max_tokens:800
      })
    });
    const data = await res.json();
    const reply = data.content?.map(b=>b.text||'').join('') || data.reply || '';
    const matchLine = reply.match(/MATCH:\s*(\d+)/i);
    const score = matchLine ? parseInt(matchLine[1]) : 75;
    meter.style.width = score + '%';
    pct.textContent = score + '%';
    output.innerHTML = reply.replace(/MATCH:\s*\d+\n?/i,'').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  } catch(e) {
    output.textContent = 'Scan unavailable — check your API endpoint configuration.';
  }
}

// ══════════════════════════════════════════
// THIS OR THAT
// ══════════════════════════════════════════
function loadTot() {
  totSel = null;
  const q = TOT_QS[totIdx % TOT_QS.length];
  document.getElementById('tot-q').textContent = q.q;
  document.getElementById('tot-a-ico').textContent = q.ico[0];
  document.getElementById('tot-b-ico').textContent = q.ico[1];
  document.getElementById('tot-a-txt').textContent = q.a[0];
  document.getElementById('tot-b-txt').textContent = q.a[1];
  ['tot-a','tot-b'].forEach(id => {
    document.getElementById(id).classList.remove('sel');
    document.getElementById(id).querySelector('.tot-opt-txt').style.color = 'var(--text)';
  });
  document.getElementById('tot-btn').classList.remove('on');
}

function totSelect(opt) {
  totSel = opt;
  ['a','b'].forEach(o => {
    const el = document.getElementById('tot-' + o);
    if (o === opt) { el.classList.add('sel'); el.querySelector('.tot-opt-txt').style.color = '#8B2FC9'; }
    else { el.classList.remove('sel'); el.querySelector('.tot-opt-txt').style.color = 'var(--text)'; }
  });
  document.getElementById('tot-btn').classList.add('on');
}

async function totSubmit() {
  if (!totSel || !USER) { totIdx++; loadTot(); return; }
  try {
    await supabase.from('this_or_that_responses').insert({
      user_id: USER.id, email: USER.email,
      question: TOT_QS[totIdx % TOT_QS.length].q,
      answer: totSel,
      category: 'leadership', created_at: new Date().toISOString()
    });
  } catch(e) { /* silently proceed */ }
  totIdx++; loadTot();
}
function totNext() { totIdx++; loadTot(); }

// ══════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════
async function saveProfile() {
  const fn = document.getElementById('s-fname').value.trim();
  const ln = document.getElementById('s-lname').value.trim();
  if (!USER) { alert('Not connected to Supabase — changes saved locally.'); if(PROFILE){PROFILE.firstName=fn;PROFILE.lastName=ln;renderAll();} return; }
  try {
    // Update both Supabase Auth metadata and the typeform_submissions row
    await supabase.auth.updateUser({ data:{ first_name:fn, last_name:ln } });
    await supabase.from('typeform_submissions')
      .update({ first_name: fn, last_name: ln })
      .eq('user_id', USER.id);
    if (PROFILE) { PROFILE.firstName = fn; PROFILE.lastName = ln; renderAll(); }
    alert('Profile saved!');
  } catch(e) { alert('Could not save — try again.'); }
}

async function signOut() {
  try { await supabase.auth.signOut(); } catch(e){}
  window.location.href = '/sign-in';
}

// ══════════════════════════════════════════
// DATABANK TOGGLES
// ══════════════════════════════════════════
function toggleDB(parentEl) {
  const sw = parentEl.querySelector('.toggle-switch') || parentEl;
  sw.classList.toggle('on');
}

// ══════════════════════════════════════════
// TOOLTIP
// ══════════════════════════════════════════
function showTip(el, text) {
  const tip = document.getElementById('ctip');
  const r = el.getBoundingClientRect();
  tip.textContent = text;
  tip.style.display = 'block';
  setTimeout(() => {
    tip.style.left = (r.left + r.width/2 - tip.offsetWidth/2) + 'px';
    tip.style.top  = (r.top - 34) + 'px';
  }, 0);
}
function hideTip() { document.getElementById('ctip').style.display = 'none'; }

// ══════════════════════════════════════════
// LOADING
// ══════════════════════════════════════════
function hideLoading() {
  const el = document.getElementById('loading');
  setTimeout(() => { el.classList.add('fade'); setTimeout(()=>el.remove(), 500); }, 600);
}

// ── GO ──
init();

  }
})();
