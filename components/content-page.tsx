import Link from 'next/link'
import { ArrowLeft, ArrowRight, CalendarDays, Compass, FileText, MapPin, Mic2, QrCode, Quote, Sparkles, Users } from 'lucide-react'

const copy: Record<string, {
  eyebrow: string
  title: string
  intro: string
  items: string[]
  accent: string
  glow: string
  card: string
  icon: 'leader' | 'programme' | 'route' | 'discours' | 'actualites' | 'agenda' | 'temoignages'
}> = {
  leader: {
    eyebrow: 'Le mouvement',
    title: 'Une parole qui relie.',
    intro: 'Adama Dienne porte une démarche de proximité, d’écoute et d’action. Cette page met en avant les valeurs, le parcours et la vision qui structurent le mouvement.',
    items: ['Parcours et engagement', 'Valeurs et convictions', 'Prises de parole publiques'],
    accent: 'bg-[#14352b]',
    glow: 'from-[#14352b]/10 via-[#f5c84c]/10 to-transparent',
    card: 'border-[#14352b]/10 bg-white',
    icon: 'leader',
  },
  programme: {
    eyebrow: 'Les engagements',
    title: 'Un programme lisible, proche du terrain.',
    intro: 'Les priorités citoyennes et les engagements de NATANGUER seront présentés ici de façon claire, structurée et directement utile pour les habitants.',
    items: ['Priorités pour le territoire', 'Engagements et méthodes', 'Questions fréquentes'],
    accent: 'bg-[#27824d]',
    glow: 'from-[#27824d]/15 via-[#f5c84c]/10 to-transparent',
    card: 'border-[#27824d]/15 bg-[#f6faf7]',
    icon: 'programme',
  },
  'feuille-de-route': {
    eyebrow: 'Notre cap',
    title: 'Avancer avec une feuille de route partagée.',
    intro: 'Une trajectoire collective, organisée autour d’étapes concrètes et d’un dialogue constant avec les habitants pour construire le futur ensemble.',
    items: ['Les grandes étapes', 'Indicateurs de suivi', 'Contributions citoyennes'],
    accent: 'bg-[#14352b]',
    glow: 'from-[#f5c84c]/15 via-[#14352b]/10 to-transparent',
    card: 'border-[#f5c84c]/30 bg-[#fffaf0]',
    icon: 'route',
  },
  discours: {
    eyebrow: 'La parole publique',
    title: 'Discours, messages et prises de parole.',
    intro: 'Retrouvez ici les grandes prises de parole du mouvement, avec une mise en scène plus lisible et plus marquante selon les contenus.',
    items: ['Message de présentation', 'Interventions publiques', 'Archives à venir'],
    accent: 'bg-[#2a5f8a]',
    glow: 'from-[#a7c9dc]/20 via-[#14352b]/10 to-transparent',
    card: 'border-[#2a5f8a]/15 bg-[#f5f9fc]',
    icon: 'discours',
  },
  actualites: {
    eyebrow: 'Le mouvement en action',
    title: 'Actualités de NATANGUER.',
    intro: 'Un fil éditorial qui suit les rencontres, les initiatives et les temps forts de la vie du mouvement, dans un esprit de proximité.',
    items: ['Rencontres de terrain', 'Vie du mouvement', 'Communiqués'],
    accent: 'bg-[#14352b]',
    glow: 'from-[#f5c84c]/20 via-[#14352b]/10 to-transparent',
    card: 'border-[#14352b]/10 bg-white',
    icon: 'actualites',
  },
  agenda: {
    eyebrow: 'Rendez-vous',
    title: 'Les prochains temps forts.',
    intro: 'Une vue claire des rendez-vous publics, rencontres citoyennes et événements à venir pour suivre l’actualité du mouvement.',
    items: ['Rencontres citoyennes', 'Événements publics', 'Ajouter au calendrier'],
    accent: 'bg-[#27824d]',
    glow: 'from-[#27824d]/15 via-[#f5c84c]/10 to-transparent',
    card: 'border-[#27824d]/15 bg-[#f5faf6]',
    icon: 'agenda',
  },
  temoignages: {
    eyebrow: 'Voix citoyennes',
    title: 'Ils et elles font vivre le mouvement.',
    intro: 'Cet espace mettra en lumière les expériences, les récits et les engagements qui donnent vie à la dynamique collective du mouvement.',
    items: ['Témoignages à venir', 'Participer', 'Charte de publication'],
    accent: 'bg-[#14352b]',
    glow: 'from-[#f5c84c]/15 via-[#14352b]/10 to-transparent',
    card: 'border-[#14352b]/10 bg-[#fffdf8]',
    icon: 'temoignages',
  },
}

function getCardIcon(kind: keyof typeof copy) {
  switch (kind) {
    case 'leader':
      return Quote
    case 'programme':
      return Compass
    case 'feuille-de-route':
      return MapPin
    case 'discours':
      return Mic2
    case 'actualites':
      return Sparkles
    case 'agenda':
      return CalendarDays
    case 'temoignages':
      return Users
    default:
      return ArrowRight
  }
}

export function ContentPage({ kind }: { kind: keyof typeof copy }) {
  const data = copy[kind]
  const Icon = getCardIcon(kind)

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#f7f8f2] text-[#14352b]">
      <header className="border-b border-[#14352b]/10 bg-[#f7f8f2]/90 px-5 py-5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <Link href="/" className="inline-flex min-h-[44px] items-center font-bold tracking-[-0.04em] lg:min-h-0">NATANGUER</Link>
          <Link href="/" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold lg:min-h-0">
            <ArrowLeft size={15} /> Accueil
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pt-24">
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-br ${data.glow}`} />

        <div className="relative fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#27824d]">{data.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.07em] lg:text-7xl">{data.title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#14352b]/65">{data.intro}</p>
        </div>

        <div className="relative mt-14 grid gap-4 md:grid-cols-3">
          {data.items.map((item, index) => (
            <div
              key={item}
              className={`card-animate group rounded-3xl border p-6 shadow-[0_20px_50px_rgba(20,53,43,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(20,53,43,0.09)] ${data.card}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className={`mb-7 grid h-11 w-11 place-items-center rounded-2xl md:mb-12 ${data.accent} text-white`}>
                <Icon size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#14352b]/40">0{index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#14352b]/55">
                Contenu de démonstration à remplacer par les éléments officiels et les informations vérifiées du mouvement.
              </p>
            </div>
          ))}
        </div>

        <div className={`card-animate relative mt-12 overflow-hidden rounded-3xl ${data.accent} p-6 text-white sm:p-7`} style={{ animationDelay: '220ms' }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f5c84c]">Prototype</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Cette page fait partie du prototype NATANGUER. Les contenus absents de la documentation fournie restent volontairement signalés comme démonstration.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export function FlyerPage() {
  const siteUrl = 'https://prototype-natangue.vercel.app'
  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}`

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#14352b] px-5 pb-16 pt-10 text-white sm:pb-8 sm:pt-8">
      <div className="mx-auto max-w-md">
        <Link href="/" className="inline-flex min-h-[44px] items-center text-sm text-white/60">← NATANGUER</Link>
        <div className="mt-6 text-center sm:mt-12">
          <div className="mx-auto flex aspect-square h-auto w-full max-w-[280px] items-center justify-center overflow-hidden rounded-3xl bg-white p-3 shadow-2xl shadow-[#000000]/15 sm:max-w-[208px]">
            <img src={qrImage} alt="QR code NATANGUER" width={300} height={300} className="h-full w-full max-w-full rounded-2xl object-contain" />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#f5c84c]">Flyer Rufisque · accès QR</p>
          <h1 className="mt-4 text-[clamp(2.25rem,9vw,3rem)] font-semibold tracking-[-0.07em] sm:text-5xl">Bienvenue chez NATANGUER.</h1>
          <p className="mt-5 text-base leading-relaxed text-white/60">Découvrez la démarche, les engagements et les prochains rendez-vous du mouvement.</p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#f5c84c] px-5 py-3 text-sm font-bold text-[#14352b] transition hover:opacity-90 sm:w-auto"
          >
            Ouvrir le site <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-12 grid gap-3">
          {[['Le programme', '/programme'], ['Rencontrer le leader', '/leader'], ['La feuille de route', '/feuille-de-route']].map(([label, href]) => (
            <Link key={href} href={href} className="flex min-h-[44px] items-center justify-between gap-3 rounded-2xl bg-white/10 px-5 py-5 font-semibold transition hover:bg-white/15">
              {label}
              <ArrowRight size={18} className="shrink-0 text-[#f5c84c]" />
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 p-5 text-center text-sm text-white/50">
          <MapPin size={18} className="mx-auto mb-2 text-[#f5c84c]" />
          Rufisque · Prototype d’expérience mobile
        </div>
      </div>
    </main>
  )
}
