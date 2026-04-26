/* Nature SVG placeholders for Works by Love.
   Layered, muted greens & blues. No people, no buildings. */
window.NatureScenes = {
  // Misty conifer ridges, vertical (4:5)
  forestRidges: ({ tag = "Forest \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="sky-fr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#cfd6cc"/>
            <stop offset="55%" stop-color="#b9c1b6"/>
            <stop offset="100%" stop-color="#9aa69d"/>
          </linearGradient>
          <linearGradient id="ridge1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7a8a7a"/>
            <stop offset="100%" stop-color="#5e6f5d"/>
          </linearGradient>
          <linearGradient id="ridge2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#56684f"/>
            <stop offset="100%" stop-color="#41513c"/>
          </linearGradient>
          <linearGradient id="ridge3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3a4a37"/>
            <stop offset="100%" stop-color="#243023"/>
          </linearGradient>
          <filter id="grain" x="0" y="0">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"/>
          </filter>
        </defs>
        <rect width="400" height="500" fill="url(#sky-fr)"/>
        <!-- distant ridge -->
        <path d="M0,310 L18,300 L40,304 L62,294 L86,300 L108,290 L130,298 L152,288 L178,296 L200,288 L222,294 L246,286 L268,294 L292,288 L318,296 L342,290 L368,296 L400,294 L400,500 L0,500 Z" fill="url(#ridge1)" opacity="0.85"/>
        <!-- mid ridge with conifers -->
        <path d="M0,360 L20,344 L34,358 L48,344 L62,360 L80,348 L96,360 L114,346 L130,358 L150,344 L168,358 L186,346 L208,358 L228,346 L246,360 L268,346 L286,358 L308,346 L328,358 L350,344 L372,358 L392,346 L400,352 L400,500 L0,500 Z" fill="url(#ridge2)"/>
        <!-- foreground silhouette -->
        <path d="M0,420 L12,406 L20,418 L30,402 L40,418 L52,402 L64,418 L76,402 L88,418 L100,402 L116,418 L128,402 L142,418 L156,402 L170,418 L184,402 L200,418 L216,402 L230,418 L246,402 L260,418 L276,402 L292,418 L306,402 L320,418 L336,402 L350,418 L368,402 L384,418 L400,406 L400,500 L0,500 Z" fill="url(#ridge3)"/>
        <!-- mist -->
        <rect x="0" y="316" width="400" height="46" fill="#f7f2e6" opacity="0.32"/>
        <rect x="0" y="380" width="400" height="22" fill="#f7f2e6" opacity="0.18"/>
        <rect width="400" height="500" filter="url(#grain)"/>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Still water with reeds (4:5)
  stillWater: ({ tag = "Water \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="sky-sw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#c2cdd2"/>
            <stop offset="100%" stop-color="#94a4ad"/>
          </linearGradient>
          <linearGradient id="water-sw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7d96a3"/>
            <stop offset="55%" stop-color="#54707f"/>
            <stop offset="100%" stop-color="#36505d"/>
          </linearGradient>
          <linearGradient id="far-sw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5b6e58"/>
            <stop offset="100%" stop-color="#41513c"/>
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#sky-sw)"/>
        <!-- distant trees -->
        <path d="M0,210 L14,196 L26,212 L40,198 L56,212 L72,198 L90,210 L106,196 L122,212 L140,198 L158,212 L176,196 L194,212 L212,198 L230,212 L248,196 L266,212 L284,198 L302,212 L320,198 L340,212 L360,196 L382,212 L400,200 L400,250 L0,250 Z" fill="url(#far-sw)"/>
        <!-- water -->
        <rect y="240" width="400" height="260" fill="url(#water-sw)"/>
        <!-- ripples -->
        <g stroke="#a9bcc4" stroke-linecap="round" opacity="0.35">
          <line x1="40" y1="278" x2="120" y2="278" stroke-width="0.7"/>
          <line x1="180" y1="288" x2="260" y2="288" stroke-width="0.7"/>
          <line x1="60" y1="310" x2="170" y2="310" stroke-width="0.6"/>
          <line x1="240" y1="318" x2="340" y2="318" stroke-width="0.6"/>
          <line x1="20" y1="346" x2="140" y2="346" stroke-width="0.5"/>
          <line x1="200" y1="358" x2="320" y2="358" stroke-width="0.5"/>
          <line x1="80" y1="386" x2="200" y2="386" stroke-width="0.5"/>
          <line x1="240" y1="402" x2="370" y2="402" stroke-width="0.5"/>
        </g>
        <!-- reflection of far trees -->
        <path d="M0,240 L14,254 L26,238 L40,252 L56,238 L72,252 L90,240 L106,254 L122,238 L140,252 L158,238 L176,254 L194,238 L212,252 L230,238 L248,254 L266,238 L284,252 L302,238 L320,252 L340,238 L360,254 L382,238 L400,250 L400,260 L0,260 Z" fill="#41513c" opacity="0.35"/>
        <!-- reeds -->
        <g stroke="#41513c" stroke-linecap="round" stroke-width="1.2" opacity="0.85">
          <line x1="28" y1="248" x2="32" y2="220"/>
          <line x1="36" y1="252" x2="34" y2="216"/>
          <line x1="44" y1="248" x2="48" y2="222"/>
          <line x1="356" y1="246" x2="354" y2="216"/>
          <line x1="364" y1="250" x2="368" y2="218"/>
          <line x1="376" y1="246" x2="372" y2="222"/>
        </g>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Bare branch on muted background (4:5 or tall)
  branch: ({ tag = "Detail \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="bg-br" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e8dfcc"/>
            <stop offset="100%" stop-color="#cdc4ae"/>
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg-br)"/>
        <g stroke="#3a4a37" fill="none" stroke-linecap="round">
          <path d="M-10,330 C70,300 140,310 200,260 C260,210 320,200 410,180" stroke-width="2.4"/>
          <path d="M120,295 C150,280 170,260 178,228" stroke-width="1.5"/>
          <path d="M178,228 C170,210 162,194 158,178" stroke-width="1.1"/>
          <path d="M178,228 C188,210 196,196 198,180" stroke-width="1.1"/>
          <path d="M222,252 C236,232 244,212 240,186" stroke-width="1.5"/>
          <path d="M240,186 C234,170 230,154 232,140" stroke-width="1"/>
          <path d="M240,186 C250,170 256,154 258,140" stroke-width="1"/>
          <path d="M280,228 C300,210 312,188 312,160" stroke-width="1.3"/>
          <path d="M312,160 C308,144 304,130 304,116" stroke-width="0.9"/>
          <path d="M312,160 C320,144 326,128 328,114" stroke-width="0.9"/>
          <path d="M340,202 C354,182 366,162 370,138" stroke-width="1.1"/>
        </g>
        <!-- soft moss leaves as small ovals -->
        <g fill="#56684f" opacity="0.7">
          <ellipse cx="180" cy="220" rx="3" ry="6"/>
          <ellipse cx="244" cy="200" rx="3" ry="6" transform="rotate(-12 244 200)"/>
          <ellipse cx="316" cy="158" rx="3" ry="6" transform="rotate(15 316 158)"/>
          <ellipse cx="158" cy="180" rx="2.5" ry="5"/>
          <ellipse cx="232" cy="148" rx="2.5" ry="5"/>
        </g>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Layered hills, soft dawn (wide)
  layeredHills: ({ tag = "Landscape \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="sky-lh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d6dad2"/>
            <stop offset="100%" stop-color="#a9b6ad"/>
          </linearGradient>
          <linearGradient id="h1-lh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7d8d80"/>
            <stop offset="100%" stop-color="#5e6f5d"/>
          </linearGradient>
          <linearGradient id="h2-lh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#56684f"/>
            <stop offset="100%" stop-color="#3a4a37"/>
          </linearGradient>
          <linearGradient id="h3-lh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2c3a2a"/>
            <stop offset="100%" stop-color="#1e2c22"/>
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(#sky-lh)"/>
        <path d="M0,300 C150,250 300,280 460,260 C600,242 720,260 800,250 L800,500 L0,500 Z" fill="url(#h1-lh)" opacity="0.9"/>
        <path d="M0,360 C140,320 280,340 420,318 C560,296 680,326 800,310 L800,500 L0,500 Z" fill="url(#h2-lh)"/>
        <path d="M0,420 C140,388 280,402 420,388 C560,374 680,400 800,386 L800,500 L0,500 Z" fill="url(#h3-lh)"/>
        <!-- mist bands -->
        <rect x="0" y="304" width="800" height="22" fill="#f7f2e6" opacity="0.20"/>
        <rect x="0" y="362" width="800" height="14" fill="#f7f2e6" opacity="0.13"/>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Pine boughs detail (square)
  pineDetail: ({ tag = "Detail \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="bg-pd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#d8d2c0"/>
            <stop offset="100%" stop-color="#b6ad96"/>
          </linearGradient>
        </defs>
        <rect width="500" height="500" fill="url(#bg-pd)"/>
        <g stroke="#3a4a37" stroke-linecap="round" fill="none" stroke-width="1.2">
          <!-- main bough -->
          <path d="M-20,260 C100,250 200,260 320,250 C400,244 460,250 520,246" stroke-width="2.5"/>
          <!-- needles -->
        </g>
        <g stroke="#41513c" stroke-linecap="round" stroke-width="0.9" opacity="0.95">
          ${Array.from({length: 60}).map((_, i) => {
            const x = 20 + (i * 470 / 60);
            const dir = i % 2 === 0 ? -1 : 1;
            const len = 18 + (i % 5) * 4;
            const y0 = 256 + (i % 3) * 2;
            return `<line x1="${x}" y1="${y0}" x2="${x + dir * len * 0.4}" y2="${y0 + dir * len}"/>`;
          }).join("")}
        </g>
        <g stroke="#56684f" stroke-linecap="round" stroke-width="0.9" opacity="0.85">
          ${Array.from({length: 40}).map((_, i) => {
            const x = 30 + (i * 460 / 40);
            const dir = i % 2 === 0 ? 1 : -1;
            const len = 14 + (i % 4) * 3;
            const y0 = 254 + (i % 3) * 2;
            return `<line x1="${x}" y1="${y0}" x2="${x + dir * len * 0.5}" y2="${y0 + dir * len}"/>`;
          }).join("")}
        </g>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Workspace abstract — desk surface w/ window light. No people. (4:5)
  workspace: ({ tag = "Workspace \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="wall-ws" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e6dec8"/>
            <stop offset="100%" stop-color="#cfc6ad"/>
          </linearGradient>
          <linearGradient id="desk-ws" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#9b8869"/>
            <stop offset="100%" stop-color="#6e5d44"/>
          </linearGradient>
          <linearGradient id="win-ws" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d6dad2"/>
            <stop offset="100%" stop-color="#a9b6ad"/>
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#wall-ws)"/>
        <!-- window -->
        <rect x="40" y="50" width="180" height="220" fill="url(#win-ws)" stroke="#7a6e54" stroke-width="2"/>
        <line x1="130" y1="50" x2="130" y2="270" stroke="#7a6e54" stroke-width="2"/>
        <line x1="40" y1="160" x2="220" y2="160" stroke="#7a6e54" stroke-width="2"/>
        <!-- silhouette of leaves outside -->
        <g fill="#56684f" opacity="0.65">
          <ellipse cx="80" cy="120" rx="22" ry="14" transform="rotate(-15 80 120)"/>
          <ellipse cx="100" cy="140" rx="18" ry="12" transform="rotate(10 100 140)"/>
          <ellipse cx="170" cy="100" rx="20" ry="13" transform="rotate(-8 170 100)"/>
          <ellipse cx="190" cy="200" rx="22" ry="14" transform="rotate(20 190 200)"/>
        </g>
        <!-- desk surface -->
        <path d="M0,360 L400,330 L400,500 L0,500 Z" fill="url(#desk-ws)"/>
        <!-- light cast on wall -->
        <path d="M40,270 L220,270 L260,360 L0,360 Z" fill="#fbf8f1" opacity="0.18"/>
        <!-- objects: book + cup + small plant -->
        <rect x="60" y="338" width="90" height="14" fill="#3a4a37" opacity="0.9" rx="1"/>
        <rect x="60" y="332" width="90" height="6" fill="#56684f" opacity="0.9" rx="1"/>
        <ellipse cx="220" cy="346" rx="22" ry="7" fill="#2a2823" opacity="0.5"/>
        <rect x="200" y="312" width="44" height="34" rx="3" fill="#cdc4ae"/>
        <ellipse cx="222" cy="312" rx="22" ry="6" fill="#a09376"/>
        <!-- plant -->
        <rect x="290" y="320" width="36" height="28" rx="2" fill="#7a6e54"/>
        <g stroke="#41513c" stroke-linecap="round" stroke-width="1.4" fill="none">
          <path d="M308,320 C306,300 304,288 308,272"/>
          <path d="M312,320 C316,302 320,290 318,278"/>
          <path d="M304,320 C300,304 296,294 296,282"/>
        </g>
        <g fill="#56684f">
          <ellipse cx="308" cy="272" rx="3" ry="6"/>
          <ellipse cx="318" cy="278" rx="3" ry="6" transform="rotate(20 318 278)"/>
          <ellipse cx="296" cy="282" rx="3" ry="6" transform="rotate(-20 296 282)"/>
        </g>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `,

  // Hands holding stones / objects abstract (no faces). 4:5
  hands: ({ tag = "Hands \u2014 photograph placeholder", caption } = {}) => `
    <div class="nature">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="bg-hd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#cdc4ae"/>
            <stop offset="100%" stop-color="#a59a80"/>
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg-hd)"/>
        <!-- abstract cupped form -->
        <path d="M60,330 C90,260 160,250 200,250 C240,250 310,260 340,330 L340,500 L60,500 Z" fill="#8a7a5e" opacity="0.95"/>
        <path d="M80,340 C110,280 170,270 200,270 C230,270 290,280 320,340 L320,500 L80,500 Z" fill="#6e5d44" opacity="0.85"/>
        <!-- stones nestled -->
        <ellipse cx="180" cy="318" rx="28" ry="12" fill="#5b6873"/>
        <ellipse cx="220" cy="312" rx="22" ry="10" fill="#7d8a90"/>
        <ellipse cx="200" cy="296" rx="18" ry="8" fill="#aab3a2"/>
      </svg>
      ${tag ? `<span class="nature-tag">${tag}</span>` : ""}
      ${caption ? `<span class="nature-caption">${caption}</span>` : ""}
    </div>
  `
};
