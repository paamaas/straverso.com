"""Felles datakilde: all brukervendt tekst fra straverso.com.

Brukes av generate_content_xlsx.py og generate_content_docx.py.
ID-en mapper tilbake til kildekoden, slik at endringer kan plasseres presist.
Format per rad: (id, seksjon, element, dagens tekst)
"""

ROWS = [
    # Metadata (app/layout.tsx)
    ("meta.title", "Metadata", "Sidetittel (fane/Google)",
     "Straverso | Vi vender lagene. Finner løsningen."),
    ("meta.description", "Metadata", "Meta-beskrivelse (Google/deling)",
     "Norsk tech-selskap som bygger AI-drevne apper som løser nisjeproblemer andre har oversett. Dybde, helhet, hastighet."),

    # Navigasjon (components/navigation.tsx)
    ("nav.produkter", "Navigasjon", "Menylenke 1", "Produkter"),
    ("nav.omoss", "Navigasjon", "Menylenke 2", "Om oss"),
    ("nav.team", "Navigasjon", "Menylenke 3", "Team"),
    ("nav.kontakt", "Navigasjon", "Menylenke 4", "Kontakt"),
    ("nav.lang.en", "Navigasjon", "Språkvalg (desktop)", "EN"),
    ("nav.lang.no", "Navigasjon", "Språkvalg (desktop)", "NO"),
    ("nav.lang.en.mob", "Navigasjon", "Språkvalg (mobil)", "English"),
    ("nav.lang.no.mob", "Navigasjon", "Språkvalg (mobil)", "Norsk"),

    # Hero (components/hero-section.tsx)
    ("hero.title", "Hero", "Hovedtittel", "Straverso"),
    ("hero.tagline", "Hero", "Slagord", "Vi vender lagene. Finner løsningen."),
    ("hero.subtagline", "Hero", "Slagord (engelsk, kursiv)", "We turn the layers. Find the solution."),
    ("hero.cta", "Hero", "Knapp", "Utforsk produktene"),

    # Filosofi (components/philosophy-section.tsx)
    ("phil.label", "Filosofi", "Seksjonsmerke", "Filosofi"),
    ("phil.heading", "Filosofi", "Overskrift", "Kompleksitet har lag.\nVi vender dem."),
    ("phil.body", "Filosofi", "Brødtekst",
     "Hvert problem er bygget opp av lag – noen synlige, noen skjulte. Vi graver dypt, snur hvert lag, og finner løsninger som andre overser. Det er her AI møter menneskelig innsikt."),
    ("phil.tagline", "Filosofi", "Undertekst (kursiv)",
     "Strata + Verso = å vende lagene. Det er mer enn et navn – det er metoden vår."),
    ("phil.pillar1.title", "Filosofi", "Pilar 01 – tittel", "Dybde"),
    ("phil.pillar1.desc", "Filosofi", "Pilar 01 – tekst",
     "Vi går til bunns i hvert problem. Ingen overfladiske løsninger."),
    ("phil.pillar2.title", "Filosofi", "Pilar 02 – tittel", "Helhet"),
    ("phil.pillar2.desc", "Filosofi", "Pilar 02 – tekst",
     "Fra minste detalj til det store bildet – alt henger sammen."),
    ("phil.pillar3.title", "Filosofi", "Pilar 03 – tittel", "Hastighet"),
    ("phil.pillar3.desc", "Filosofi", "Pilar 03 – tekst",
     "AI-drevet utvikling. Rask iterasjon uten å miste kvalitet."),

    # Produkter (components/products-section.tsx)
    ("prod.label", "Produkter", "Seksjonsmerke", "Portefølje"),
    ("prod.heading", "Produkter", "Overskrift", "Apper som løser problemer andre overser"),
    ("prod.concertus.name", "Produkter", "Concertus – navn", "Concertus"),
    ("prod.concertus.category", "Produkter", "Concertus – kategori", "Musikk"),
    ("prod.concertus.status", "Produkter", "Concertus – status", "Kommer snart"),
    ("prod.concertus.desc", "Produkter", "Concertus – beskrivelse",
     "Intelligent verktøy for kor, koprs, band, sangere og orkestre. Stemmeøving, partiturstyring og øvingsplanlegging. Bygget av fagfolk for fagfolk"),
    ("prod.omnibus.name", "Produkter", "Omnibus – navn", "Omnibus"),
    ("prod.omnibus.category", "Produkter", "Omnibus – kategori", "Transport"),
    ("prod.omnibus.status", "Produkter", "Omnibus – status", "Kommer snart"),
    ("prod.omnibus.desc", "Produkter", "Omnibus – beskrivelse",
     "Sanntids kollektivavganger. Enkel, rask, og alltid oppdatert – uansett hvor du er i Norge. Widgets som viser dine avganger, til og fra jobb, til byen og hjem igjen - du bestemmer"),
    ("prod.smartdash.name", "Produkter", "SmartDash – navn", "SmartDash"),
    ("prod.smartdash.category", "Produkter", "SmartDash – kategori", "Smart hjem"),
    ("prod.smartdash.status", "Produkter", "SmartDash – status", "I utvikling"),
    ("prod.smartdash.desc", "Produkter", "SmartDash – beskrivelse",
     "Et dashboard for hele smarthuset. Samler alle enheter, uansett merke, i ett elegant grensesnitt. Støtter Home Assistant, Homey og HomeKit - alt på ett sted med intelligente widgets"),
    ("prod.hometap.name", "Produkter", "HomeTap – navn", "HomeTap"),
    ("prod.hometap.category", "Produkter", "HomeTap – kategori", "Mat & drikke"),
    ("prod.hometap.status", "Produkter", "HomeTap – status", "I utvikling"),
    ("prod.hometap.desc", "Produkter", "HomeTap – beskrivelse",
     "Hjemmebrygging perfeksjonert. Oppskrifter, batcher, fat, flasker og lokasjoner. Vin, øl, cider, hard cider og alt annet du lager. Hva har du laget, hvor er det og hvor mye har du igjen – alt i én app."),
    ("prod.cally.name", "Produkter", "Cally – navn", "Cally"),
    ("prod.cally.category", "Produkter", "Cally – kategori", "Produktivitet"),
    ("prod.cally.status", "Produkter", "Cally – status", "I utvikling"),
    ("prod.cally.desc", "Produkter", "Cally – beskrivelse",
     "Kalenderen som forstår livet ditt. Smart prioritering, tidsblokkering, og AI-assistert planlegging."),

    # Team (components/founders-section.tsx)
    ("team.label", "Team", "Seksjonsmerke", "Teamet"),
    ("team.heading", "Team", "Overskrift", "To grunnleggere.\nÉn visjon."),
    ("team.jo.name", "Team", "Grunnlegger 1 – navn", "Jo Henning Kolstad"),
    ("team.jo.role", "Team", "Grunnlegger 1 – rolle", "Partner"),
    ("team.jo.bio", "Team", "Grunnlegger 1 – bio",
     "Bakgrunn innen salg og markedsføring. Veien til glede er løsninger som treffer hjertet"),
    ("team.paal.name", "Team", "Grunnlegger 2 – navn", "Paal Aamaas"),
    ("team.paal.role", "Team", "Grunnlegger 2 – rolle", "Partner"),
    ("team.paal.bio", "Team", "Grunnlegger 2 – bio",
     "Fullstack-utvikler med bakgrunn innen AI, forretningsutvikling og markedsføring. Tror på å løse problemene andre ikke klarer."),

    # Kontakt (components/contact-section.tsx)
    ("contact.label", "Kontakt", "Seksjonsmerke", "Kontakt"),
    ("contact.heading", "Kontakt", "Overskrift", "La oss snakke"),
    ("contact.body", "Kontakt", "Brødtekst",
     "Har du et problem som trenger å løses? Eller bare nysgjerrig på hva vi bygger? Vi hører gjerne fra deg."),
    ("contact.ph.name", "Kontakt", "Skjema – navn (placeholder)", "Ditt navn"),
    ("contact.ph.email", "Kontakt", "Skjema – e-post (placeholder)", "din@epost.no"),
    ("contact.ph.message", "Kontakt", "Skjema – melding (placeholder)", "Din melding..."),
    ("contact.btn", "Kontakt", "Skjema – send-knapp", "Send melding"),
    ("contact.btn.loading", "Kontakt", "Skjema – knapp (sender)", "Sender..."),
    ("contact.direct", "Kontakt", "Direkte e-post – tekst", "Eller skriv direkte til"),
    ("contact.direct.email", "Kontakt", "Direkte e-post – adresse (vist)", "post@straverso.no"),
    ("contact.toast.err.title", "Kontakt", "Varsel – feil (tittel)", "Feil"),
    ("contact.toast.err.fields", "Kontakt", "Varsel – tomme felter", "Vennligst fyll ut alle feltene"),
    ("contact.toast.ok.title", "Kontakt", "Varsel – suksess (tittel)", "Suksess!"),
    ("contact.toast.err.generic", "Kontakt", "Varsel – generell feil", "Noe gikk galt"),
    ("contact.toast.err.send", "Kontakt", "Varsel – kunne ikke sende", "Kunne ikke sende meldingen"),

    # Footer (components/footer.tsx)
    ("footer.brand", "Footer", "Logo-tekst", "Straverso"),
    ("footer.link.produkter", "Footer", "Lenke 1", "Produkter"),
    ("footer.link.omoss", "Footer", "Lenke 2", "Om oss"),
    ("footer.link.kontakt", "Footer", "Lenke 3", "Kontakt"),
    ("footer.support", "Footer", "Support-linje", "Support: support@straverso.com"),
    ("footer.orginfo", "Footer", "Org.info", "Org nr: 937 560 834 | D-U-N-S: 348438692"),
    ("footer.copyright", "Footer", "Copyright (år settes automatisk)",
     "© [år] Straverso. Alle rettigheter reservert."),
]
