export type Lang = "no" | "en"

export type StatusKey = "Live" | "Kommer snart" | "Coming soon" | "I utvikling" | "In development"

export interface Translations {
  nav: [string, string, string, string]
  heroEyebrow: string
  heroH1: string
  heroSub: string
  heroBody: string
  heroEtym: string
  heroCta1: string
  heroCta2: string
  phil: {
    label: string
    h2: string
    p1: string
    italic: string
    pillars: { n: string; h: string; t: string }[]
  }
  prod: {
    label: string
    h2: string
    sub: string
  }
  products: {
    name: string
    cat: string
    status: StatusKey
    desc: string
    url?: string
    logo?: string
  }[]
  team: {
    label: string
    h2: string
    members: { name: string; role: string; initials: string; bio: string }[]
  }
  contact: {
    label: string
    h2: string
    body: string
    cta: string
  }
  footer: string
}

export const T: Record<Lang, Translations> = {
  no: {
    nav: ["Om oss", "Produkter", "Team", "Kontakt"],
    heroEyebrow: "AI · Dybde · Nisje",
    heroH1: "Straverso",
    heroSub: "Vi gjør det komplekse enkelt og intuitivt.",
    heroBody:
      "Vi utvikler apper og arbeidsverktøy for miljøer der standardløsninger ofte blir for enkle — med dyp innsikt, AI og praktisk produktutvikling.",
    heroEtym: "Strata + Verso — å vende lagene",
    heroCta1: "Utforsk produktene",
    heroCta2: "Ta kontakt",
    phil: {
      label: "Filosofi",
      h2: "Komplekse problemstillinger krever mer enn raske svar.",
      p1: "Mange nisjer har arbeidsflyter, detaljer og behov som generelle verktøy ikke tar høyde for. Vi starter med å forstå problemet ordentlig: brukerne, konteksten og de små friksjonene som gjør hverdagen litt vanskeligere enn den trenger å være. Så bygger vi løsningen. Praktisk, rask og presis – med AI der det faktisk gir verdi.",
      italic:
        "Strata + Verso betyr å vende lagene. For oss handler det om å forstå et problem fra flere sider før vi bygger løsningen.",
      pillars: [
        { n: "01", h: "Dybde", t: "Vi setter oss inn i fagområdet før vi designer løsningen. Det gir produkter som treffer faktiske behov, ikke bare antakelser." },
        { n: "02", h: "Helhet", t: "Gode produkter handler om mer enn funksjoner. Vi ser på arbeidsflyt, brukeropplevelse, data, drift og forretningsmodell samlet." },
        { n: "03", h: "Fremdrift", t: "Vi bruker moderne teknologi og AI for å teste, bygge og forbedre raskt – uten å hoppe over kvalitet og struktur." },
      ],
    },
    prod: {
      label: "Portefølje",
      h2: "Apper som løser utfordringer",
      sub: "Fem produkter i utvikling. Fem nisjer som fortjener bedre løsninger.",
    },
    products: [
      { name: "Concertus", cat: "Musikk", status: "Live", desc: "Et digitalt arbeidsverktøy for kor, korps, band, sangere og orkestre. Samler stemmeøving, partitur, øvingsplanlegging og kommunikasjon i én løsning.", url: "https://concertus.app", logo: "/concertus-mark.svg" },
      { name: "Omnibus", cat: "Transport", status: "Kommer snart", desc: "Sanntids kollektivavganger. Enkel, rask og alltid oppdatert – uansett hvor du er i Norge. Widgets som viser dine avganger." },
      { name: "SmartDash", cat: "Smart hjem", status: "I utvikling", desc: "Et samlet dashboard for smarthjemmet. Oversikt over enheter, rom og funksjoner på tvers av Home Assistant, Homey og HomeKit." },
      { name: "HomeTap", cat: "Mat & drikke", status: "I utvikling", desc: "Hjemmebrygging perfeksjonert. Oppskrifter, batcher, fat, flasker og lokasjoner – alt i én app, uansett hva du lager." },
      { name: "Cally", cat: "Produktivitet", status: "I utvikling", desc: "En AI-basert kalenderassistent for planlegging, prioritering og tidsblokkering med forslag basert på tid, oppgaver og kapasitet." },
    ],
    team: {
      label: "Teamet",
      h2: "Et lite team med bred erfaring.",
      members: [
        { name: "Jo Henning Kolstad", role: "Partner", initials: "JK", bio: "Bakgrunn innen salg, markedsføring og kommersiell utvikling. Jobber med posisjonering, brukerbehov og hvordan produktene skal nå markedet." },
        { name: "Paal Aamaas", role: "Partner", initials: "PA", bio: "Fullstack-utvikler med erfaring innen AI, produktutvikling, forretningsutvikling og markedsføring. Jobber med teknisk arkitektur, utvikling og produktstrategi. Opptatt av å gjøre komplekse problemer om til enkle, brukbare løsninger." },
      ],
    },
    contact: {
      label: "Kontakt",
      h2: "La oss ta en prat",
      body: "Har du en nisje, arbeidsflyt eller produktidé som fortjener en bedre digital løsning? Ta gjerne kontakt – enten du er nysgjerrig på produktene våre eller vil diskutere et konkret behov.",
      cta: "Send melding",
    },
    footer: "© 2026 Straverso AS · Tønsberg, Norge · Alle rettigheter reservert · Org.nr: 937 560 834 · D-U-N-S: 348438692",
  },
  en: {
    nav: ["About", "Products", "Team", "Contact"],
    heroEyebrow: "AI · Depth · Niche",
    heroH1: "Straverso",
    heroSub: "We make the complex simple and intuitive.",
    heroBody:
      "We develop apps and tools for environments where off-the-shelf solutions fall short — with deep insight, AI and practical product development.",
    heroEtym: "Strata + Verso — turning the layers",
    heroCta1: "Explore our products",
    heroCta2: "Get in touch",
    phil: {
      label: "Philosophy",
      h2: "Complex challenges require more than quick answers.",
      p1: "Many niches have workflows, details, and needs that general tools simply don't account for. We start by truly understanding the problem: the users, the context, and the small frictions that make everyday life harder than it needs to be. Then we build the solution — practical, fast, and precise, with AI where it actually adds value.",
      italic:
        "Strata + Verso means turning the layers. For us, it means understanding a problem from every angle before we build the solution.",
      pillars: [
        { n: "01", h: "Depth", t: "We immerse ourselves in the domain before we design the solution. This gives us products that meet real needs, not just assumptions." },
        { n: "02", h: "Holism", t: "Great products are about more than features. We look at workflow, user experience, data, operations, and business model together." },
        { n: "03", h: "Progress", t: "We use modern technology and AI to test, build, and improve quickly — without skipping quality and structure." },
      ],
    },
    prod: {
      label: "Portfolio",
      h2: "Apps that solve real challenges",
      sub: "Five products in development. Five niches that deserve better solutions.",
    },
    products: [
      { name: "Concertus", cat: "Music", status: "Live", desc: "A digital work tool for choirs, bands, orchestras, and soloists. Brings voice practice, sheet music, scheduling, and communication into one platform.", url: "https://concertus.app", logo: "/concertus-mark.svg" },
      { name: "Omnibus", cat: "Transport", status: "Coming soon", desc: "Real-time public transit departures. Simple, fast, and always updated — wherever you are in Norway. Widgets that show your departures." },
      { name: "SmartDash", cat: "Smart home", status: "In development", desc: "A unified dashboard for your smart home. Overview of devices, rooms, and functions across Home Assistant, Homey, and HomeKit." },
      { name: "HomeTap", cat: "Food & drink", status: "In development", desc: "Home brewing perfected. Recipes, batches, barrels, bottles, and locations — all in one app, whatever you're making." },
      { name: "Cally", cat: "Productivity", status: "In development", desc: "An AI-based calendar assistant for planning, prioritization, and time-blocking with suggestions based on time, tasks, and capacity." },
    ],
    team: {
      label: "The Team",
      h2: "A small team with broad experience.",
      members: [
        { name: "Jo Henning Kolstad", role: "Partner", initials: "JK", bio: "Background in sales, marketing, and commercial development. Works on positioning, user needs, and how our products reach the market." },
        { name: "Paal Aamaas", role: "Partner", initials: "PA", bio: "Full-stack developer with experience in AI, product development, business development, and marketing. Handles technical architecture, development, and product strategy. Passionate about turning complex problems into simple, usable solutions." },
      ],
    },
    contact: {
      label: "Contact",
      h2: "Let's have a conversation",
      body: "Have a niche, workflow, or product idea that deserves a better digital solution? Feel free to reach out — whether you're curious about our products or want to discuss a specific need.",
      cta: "Send a message",
    },
    footer: "© 2026 Straverso AS · Tønsberg, Norway · All rights reserved · Org.no: 937 560 834 · D-U-N-S: 348438692",
  },
}

export const STATUS_COLOR: Record<StatusKey, { c: string; bg: string; b: string }> = {
  Live: { c: "#7EE0B0", bg: "rgba(126,224,176,0.12)", b: "rgba(126,224,176,0.3)" },
  "Kommer snart": { c: "#BDB8E4", bg: "rgba(189,184,228,0.1)", b: "rgba(189,184,228,0.25)" },
  "Coming soon": { c: "#BDB8E4", bg: "rgba(189,184,228,0.1)", b: "rgba(189,184,228,0.25)" },
  "I utvikling": { c: "#E8A87C", bg: "rgba(232,168,124,0.1)", b: "rgba(232,168,124,0.25)" },
  "In development": { c: "#E8A87C", bg: "rgba(232,168,124,0.1)", b: "rgba(232,168,124,0.25)" },
}
