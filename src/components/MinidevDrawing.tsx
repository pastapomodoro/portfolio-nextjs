const dimensionStyle = { fontFamily: "var(--font-geist), sans-serif", fontSize: 15 };

export default function MinidevDrawing() {
  return (
    <figure className="min-w-0 bg-muted p-5 md:p-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
        <p className="text-sm font-medium">MINIDEV / Form study</p>
        <span className="text-xs text-muted-foreground">Orthographic sketch · mm</span>
      </div>
      <div className="grid items-end gap-6 sm:grid-cols-[2fr_1fr]">
        <svg viewBox="0 0 440 510" role="img" aria-labelledby="minidev-front-title minidev-front-desc" className="w-full text-foreground">
          <title id="minidev-front-title">MINIDEV front elevation</title>
          <desc id="minidev-front-desc">Illustrative front view with a 72 millimetre width and 86 millimetre height. A recessed screen sits above a perforated speaker grille and three physical controls. Dimensions are proposed concept proportions.</desc>
          <defs>
            <pattern id="minidev-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity="0.06" /></pattern>
            <pattern id="minidev-speaker" width="9" height="9" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.65" /></pattern>
          </defs>
          <rect x="0" y="15" width="440" height="450" fill="url(#minidev-grid)" />
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="96" y="85" width="288" height="344" rx="32" />
            <rect x="103" y="92" width="274" height="330" rx="27" strokeOpacity="0.3" />
            <rect x="111" y="101" width="258" height="214" rx="24" />
            <rect x="118" y="108" width="244" height="200" rx="19" strokeOpacity="0.3" />
            <path d="M150 130h52m-52 7h28" strokeOpacity="0.15" />
            <rect x="112" y="365" width="256" height="47" rx="15" />
            <path d="M191 365v47m94-47v47" />
            <circle cx="151" cy="388" r="9" />
            <path d="m233 378 17 10-17 10zM318 380l16 16m0-16-16 16" />
            <path d="M384 150h5v32h-5" />
          </g>
          <rect x="116" y="324" width="248" height="30" fill="url(#minidev-speaker)" />
          <g stroke="currentColor" strokeOpacity="0.35" fill="none">
            <path d="M240 68v378" strokeDasharray="7 5" />
            <path d="M96 75V39m288 36V39M96 49h288M91 54l10-10m278 10 10-10M86 85H40m46 344H40M50 85v344M45 90l10-10M45 434l10-10" />
          </g>
          <g fill="currentColor" style={dimensionStyle} textAnchor="middle">
            <text x="240" y="35">72</text>
            <text transform="translate(33 257) rotate(-90)">86</text>
            <text x="240" y="485">Front elevation</text>
          </g>
        </svg>
        <svg viewBox="0 0 210 510" role="img" aria-labelledby="minidev-side-title minidev-side-desc" className="mx-auto hidden w-full text-foreground sm:block">
          <title id="minidev-side-title">MINIDEV side elevation</title>
          <desc id="minidev-side-desc">Illustrative side view showing an 18 millimetre concept depth and a side control. These are proposed proportions, not manufacturing specifications.</desc>
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="65" y="85" width="72" height="344" rx="17" />
            <path d="M86 86v342" strokeOpacity="0.35" />
            <rect x="92" y="149" width="24" height="34" rx="5" />
            <path d="M97 157h14m-14 5h14m-14 5h14m-14 5h14" strokeOpacity="0.4" />
            <path d="M65 75V39m72 36V39M65 49h72M60 54l10-10m62 10 10-10" strokeOpacity="0.35" />
            <path d="M48 85h107M48 429h107" strokeDasharray="4 5" strokeOpacity="0.2" />
          </g>
          <g fill="currentColor" textAnchor="middle" style={dimensionStyle}>
            <text x="101" y="35">18</text>
            <text x="101" y="485">Side elevation</text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Proposed proportions: 72 × 86 × 18 mm (W × H × D). Illustrative concept dimensions, not measured or production specifications.
      </figcaption>
    </figure>
  );
}
