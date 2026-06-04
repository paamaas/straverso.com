"use client";
import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// SpiralCanvas — Three.js helix ribbon
// Drop-in for Next.js App Router (client component)
// Usage: <SpiralCanvas className="absolute inset-0 w-full h-full" />
// ─────────────────────────────────────────────

export function SpiralCanvas({ className = "", style }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let THREE;
    let animId;
    let renderer;

    async function init() {
      THREE = await import("three");

      // ── Parameters ──────────────────────────────
      const RADIUS          = 0.55;
      const HEIGHT          = 2.2;
      const TURNS           = 1.45;
      const RIBBON_WIDTH    = 0.60;
      const SEGS            = 300;
      const EDGE_THICKNESS  = 0.02;
      const INITIAL_ROT     = -2.78;
      const ROT_SPEED       = 0.008;

      // ── Renderer ────────────────────────────────
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      // Make canvas fill the container
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width   = "100%";
      renderer.domElement.style.height  = "100%";

      // ── Scene / Camera ───────────────────────────
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0, 6);

      // ── Build ribbon geometry ────────────────────
      function buildRibbon() {
        const positions = [], normals = [], indices = [];
        for (let i = 0; i <= SEGS; i++) {
          const u     = i / SEGS;
          const angle = -u * TURNS * Math.PI * 2;
          const y     = (u - 0.5) * HEIGHT;
          const x     = Math.cos(angle) * RADIUS;
          const z     = Math.sin(angle) * RADIUS;
          // taper ends
          const endZone = 0.04;
          let hw = RIBBON_WIDTH * 0.5;
          if (u < endZone)      { const t = u / endZone;       hw *= Math.sqrt(1 - (1-t)*(1-t)); }
          else if (u > 1-endZone){ const t = (1-u) / endZone;  hw *= Math.sqrt(1 - (1-t)*(1-t)); }
          positions.push(x, y + hw, z,  x, y - hw, z);
          const nx = Math.cos(angle), nz = Math.sin(angle);
          normals.push(nx, 0, nz,  nx, 0, nz);
        }
        for (let i = 0; i < SEGS; i++) {
          const a = i*2, b = i*2+1, c = (i+1)*2, d = (i+1)*2+1;
          indices.push(a, b, c,  b, d, c);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        geo.setAttribute("normal",   new THREE.Float32BufferAttribute(normals, 3));
        geo.setIndex(indices);
        return { geo, positions, normals };
      }

      function buildEdgeGeo(positions, normals, edgeIdx) {
        const ePos = [], eNorm = [], eIdx = [];
        for (let i = 0; i <= SEGS; i++) {
          const vi = i * 2 + edgeIdx;
          const px = positions[vi*3], py = positions[vi*3+1], pz = positions[vi*3+2];
          const nx = normals[vi*3], nz = normals[vi*3+2];
          ePos.push(
            px + nx * EDGE_THICKNESS, py, pz + nz * EDGE_THICKNESS,
            px - nx * EDGE_THICKNESS, py, pz - nz * EDGE_THICKNESS
          );
          const eny = edgeIdx === 0 ? 1 : -1;
          eNorm.push(0, eny, 0,  0, eny, 0);
        }
        for (let i = 0; i < SEGS; i++) {
          const a = i*2, b = i*2+1, c = (i+1)*2, d = (i+1)*2+1;
          eIdx.push(a, c, b,  b, c, d);
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.Float32BufferAttribute(ePos, 3));
        g.setAttribute("normal",   new THREE.Float32BufferAttribute(eNorm, 3));
        g.setIndex(eIdx);
        return g;
      }

      const group = new THREE.Group();
      const { geo: ribbonGeo, positions, normals } = buildRibbon();

      // Front: lavender, Back: coral
      group.add(new THREE.Mesh(ribbonGeo, new THREE.MeshStandardMaterial({
        color: 0xbdb8e4, roughness: 0.25, metalness: 0.08, side: THREE.FrontSide,
      })));
      group.add(new THREE.Mesh(ribbonGeo, new THREE.MeshStandardMaterial({
        color: 0xff6b6b, roughness: 0.25, metalness: 0.08, side: THREE.BackSide,
      })));
      [0, 1].forEach(idx => {
        group.add(new THREE.Mesh(
          buildEdgeGeo(positions, normals, idx),
          new THREE.MeshStandardMaterial({ color: 0x9b95cc, roughness: 0.3, metalness: 0.1, side: THREE.DoubleSide })
        ));
      });

      group.rotation.y = INITIAL_ROT;
      scene.add(group);

      // ── Lights ───────────────────────────────────
      scene.add(new THREE.AmbientLight(0x404060, 0.4));
      const key  = new THREE.DirectionalLight(0xffffff, 0.85); key.position.set(3, 3, 6);   scene.add(key);
      const fill = new THREE.DirectionalLight(0xb0aae8, 0.45); fill.position.set(-4,-1, 4); scene.add(fill);
      const back = new THREE.DirectionalLight(0xff9080, 0.5);  back.position.set(0,  1,-6); scene.add(back);
      const topPt = new THREE.PointLight(0xc0baf0, 0.3, 10);  topPt.position.set(0,  5, 2); scene.add(topPt);
      const botPt = new THREE.PointLight(0xff8878, 0.25,10);  botPt.position.set(0, -5,-2); scene.add(botPt);

      // ── Resize ───────────────────────────────────
      // Use offsetWidth/offsetHeight — reliable after layout
      function handleResize() {
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false); // false = don't set CSS size (we handle that with CSS)
      }

      window.addEventListener("resize", handleResize);
      // Also observe the container itself (handles flex/grid layout shifts)
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      // Initial size — small delay to ensure layout is complete
      setTimeout(handleResize, 50);

      // ── Animate ──────────────────────────────────
      function animate() {
        animId = requestAnimationFrame(animate);
        group.rotation.y += ROT_SPEED;
        renderer.render(scene, camera);
      }
      animate();

      // ── Cleanup closure ──────────────────────────
      container.__spiralCleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
        ro.disconnect();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        ribbonGeo.dispose();
      };
    }

    init();

    return () => {
      if (container.__spiralCleanup) container.__spiralCleanup();
    };
  }, []);

  return <div ref={mountRef} className={className} style={style} />;
}


// ─────────────────────────────────────────────
// HeroSection — split layout with responsive type
// ─────────────────────────────────────────────

export function HeroSection({ lang = "no" }) {
  const copy = {
    no: {
      eyebrow: "AI · Dybde · Nisje",
      h1: "Straverso",
      tagline: "Vi gjør det komplekse enkelt og intuitivt.",
      body: "Vi utvikler apper og arbeidsverktøy for miljøer der standardløsninger ofte blir for enkle — med dyp innsikt, AI og praktisk produktutvikling.",
      cta1: "Utforsk produktene",
      cta2: "Ta kontakt",
    },
    en: {
      eyebrow: "AI · Depth · Niche",
      h1: "Straverso",
      tagline: "We make the complex simple and intuitive.",
      body: "We develop apps and tools for environments where off-the-shelf solutions fall short — with deep insight, AI and practical product development.",
      cta1: "Explore our products",
      cta2: "Get in touch",
    },
  };

  const t = copy[lang] ?? copy.no;

  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        background: "#1C2260",
        alignItems: "center",
      }}
    >
      {/* ── Left: text ── */}
      <div
        className="hero-text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // Left padding aligns with the nav container (max-width 1160px centred)
          padding: "120px clamp(32px, 4vw, 60px) 100px max(52px, calc((100vw - 1160px) / 2 + 52px))",
        }}
      >
        {/* Eyebrow */}
        <p style={{
          fontFamily: "Inter, -apple-system, sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#FF6B6B",
          marginBottom: "28px",
        }}>
          {t.eyebrow}
        </p>

        {/* H1 */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(64px, 9vw, 112px)",
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: "-1.5px",
          color: "#F5F2EB",
          marginBottom: "28px",
        }}>
          {t.h1}
        </h1>

        {/* Tagline — coral, large italic */}
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 58px)",
          fontStyle: "italic",
          fontWeight: 400,
          lineHeight: 1.25,
          color: "#FF6B6B",
          maxWidth: "560px",
          marginBottom: "28px",
        }}>
          {t.tagline}
        </p>

        {/* Body */}
        <p style={{
          fontFamily: "Inter, -apple-system, sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "#8890CC",
          maxWidth: "440px",
          marginBottom: "52px",
        }}>
          {t.body}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#produkter"
            style={{
              display: "inline-block",
              padding: "14px 42px",
              border: "1px solid #FF6B6B",
              color: "#FF6B6B",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#FF6B6B"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FF6B6B"; }}
          >
            {t.cta1}
          </a>
          <a
            href="#kontakt"
            style={{
              display: "inline-block",
              padding: "14px 42px",
              border: "1px solid rgba(136,144,204,0.15)",
              color: "#8890CC",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#8890CC"; e.currentTarget.style.color = "#F5F2EB"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(136,144,204,0.15)"; e.currentTarget.style.color = "#8890CC"; }}
          >
            {t.cta2}
          </a>
        </div>
      </div>

      {/* ── Right: spiral ── */}
      <div className="hero-visual" style={{ position: "relative", height: "100vh" }}>
        <SpiralCanvas style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="" />
      </div>
    </section>
  );
}
