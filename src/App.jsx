function BrandLogo({ className = "", subtle = false }) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="Afropiano Asia"
    >
      <img
        src="/logo.png.png"
        alt="Afropiano Asia"
        className={`h-10 w-auto object-contain ${subtle ? "opacity-90" : "opacity-100"}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div
        style={{ display: "none" }}
        className="items-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-yellow-300"
      >
        Afropiano Asia
      </div>
    </div>
  );
}

export default function App() {
  const featuredEvent = {
    title: "Annual White Party (Build-Up Event)",
    date: "Date TBA",
    venue: "Superhouse 2.0, Taichung",
    description:
      "Our annual all-white experience returns as the official build-up to the AFRICA UNITE TOUR (June 18–20). Expect premium vibes, Amapiano & Afrobeats, and a special South African headliner collaboration with Superhouse 2.0.",
    ticketLink: "https://afropiano.kktix.cc/",
  };

  const eventOffers = [
    {
      title: "Club Nights",
      description:
        "High-energy nightlife experiences for clubs and venues that want a packed room and a fresh sound.",
    },
    {
      title: "Private Events",
      description:
        "Birthdays, brand launches, community parties, and curated experiences with African music and culture at the center.",
    },
    {
      title: "Festival Concepts",
      description:
        "Large-format African entertainment concepts for promoters, venues, and cultural partners across Taiwan and Asia.",
    },
  ];

  const bookingOffers = [
    {
      title: "Book a DJ",
      description:
        "Hire AFROPIANO ASIA for venue nights, themed parties, and headline experiences.",
      cta: "Email for DJ Booking",
      link: "mailto:afropiano.asia@gmail.com?subject=DJ%20Booking%20Inquiry",
    },
    {
      title: "Host an Event With Us",
      description:
        "Partner with us to build a full African nightlife experience for your venue or audience.",
      cta: "Start a Collaboration",
      link: "mailto:afropiano.asia@gmail.com?subject=Collaboration%20Inquiry",
    },
    {
      title: "Sponsor the Movement",
      description:
        "Put your brand in front of a fast-growing nightlife and culture audience in Taiwan.",
      cta: "Become a Sponsor",
      link: "mailto:afropiano.asia@gmail.com?subject=Sponsorship%20Inquiry",
    },
  ];

  const benefits = [
    "African cultural movement built specifically for Taiwan",
    "Strong social-first promotion through TikTok and Instagram",
    "Experiences designed for clubs, festivals, private events, and brand activations",
    "Amapiano and Afrobeats positioning that stands out in the market",
  ];

  const sponsorPackages = [
    {
      title: "Community Partner",
      price: "Entry Level",
      items: [
        "Logo placement on event promotions",
        "Brand mention on Instagram stories",
        "On-site partner recognition",
      ],
    },
    {
      title: "Event Sponsor",
      price: "Growth Tier",
      items: [
        "Featured logo on flyers and event pages",
        "Brand mentions across Instagram and TikTok content",
        "On-site branding opportunities",
        "Direct access to event audience in Taiwan",
      ],
    },
    {
      title: "Headline Partner",
      price: "Premium Tier",
      items: [
        "Top billing across campaign materials",
        "Custom brand integration into the event experience",
        "Stage, booth, or activation presence",
        "Priority collaboration for future events",
      ],
    },
  ];

  const stats = [
    { label: "Average Attendance", value: "100–400" },
    { label: "Peak Attendance", value: "450" },
    { label: "Cities Activated", value: "Taichung • Taipei • Kaohsiung • Tainan" },
    { label: "Partner Brands", value: "3+" },
    { label: "Years Active", value: "Since Jan 2025" },
    { label: "Social Audience", value: "<1,000 (growing)" },
  ];

  const sponsorBenefits = [
    "Reach multicultural audiences in Taiwan through music, food, and culture",
    "Align your brand with African culture, music, food, and premium experiences",
    "Get visibility through social content, flyers, and live event experiences",
    "Build authentic connections with students, creatives, expats, and nightlife communities",
  ];

  const galleryImages = [
    { src: "/gallery/img1.jpg", title: "Summer Pool Party", tag: "Outdoor Energy", size: "md:col-span-7 md:row-span-2" },
    { src: "/gallery/img2.jpg", title: "White Party", tag: "Signature Experience", size: "md:col-span-5" },
    { src: "/gallery/img3.jpg", title: "Gogo Skhotheni", tag: "International Booking", size: "md:col-span-5" },
    { src: "/gallery/img4.jpg", title: "Crowd Moments", tag: "Packed Rooms", size: "md:col-span-4" },
    { src: "/gallery/img5.jpg", title: "DJ Experience", tag: "Performance", size: "md:col-span-4" },
    { src: "/gallery/img6.jpg", title: "Culture & Fashion", tag: "Premium Vibes", size: "md:col-span-4" },
    { src: "/gallery/img7.jpg", title: "Nightlife Visuals", tag: "Lighting & Atmosphere", size: "md:col-span-6" },
    { src: "/gallery/img8.jpg", title: "Community", tag: "People & Connection", size: "md:col-span-6" },
  ];

  const galleryEvents = [
    {
      label: "Outdoor Event",
      title: "Summer Pool Party 2025",
      description: "Outdoor energy, crowd movement, and unforgettable summer vibes.",
      link: "https://drive.google.com/drive/folders/1AA8hvDzGBPGW47cy01jivo67iq6MVTP7?usp=drive_link",
    },
    {
      label: "International Booking",
      title: "Gogo Skhotheni Party",
      description: "A landmark moment for the brand with international headline appeal.",
      link: "https://drive.google.com/drive/folders/1Ky476oplAq8V4dljzwYuTeR_bNmQLnU3?usp=drive_link",
    },
    {
      label: "Signature Event",
      title: "Annual White Party",
      description: "Premium fashion, nightlife visuals, and elevated all-white energy.",
      link: "https://drive.google.com/drive/folders/1HMkYidK8ZCgbrHvUt7FSjcZmY2wfKLn-?usp=drive_link",
    },
    {
      label: "Spring Festival",
      title: "Afropiano Spring Fest with Young Zesh",
      description: "A special headline collaboration that added fresh energy to the AFROPIANO ASIA story.",
      link: "https://drive.google.com/drive/folders/1ov6c96Q2WIS2UhO3J4RAWaVexzWy2ruX?usp=drive_link",
    },
  ];

  const djs = [
    {
      name: "DJ Kwenzie",
      tag: "Afropiano / Afro Tech / Afrohouse",
      description:
        "A high-energy DJ & MC delivering premium Afro sounds, known for electrifying sets across Taiwan’s top venues.",
      link: "https://drive.google.com/drive/folders/13SNcvW1DKqpmA2kmTsShD69EsorBpZxL?usp=drive_link",
      instagram: "https://www.instagram.com/djkwenziesz/",
      price: "From NT$15,000",
      bestFor: ["Clubs", "Festivals", "Private Events"],
      availability: "Available (Booking Open)",
      video: "/videos/recap.mp4.mp4",
    },
  ];

  const faqs = [
    {
      q: "What can I book AFROPIANO ASIA for?",
      a: "You can book us for club nights, private parties, branded experiences, campus events, and cultural entertainment concepts.",
    },
    {
      q: "Do you work with venues and sponsors?",
      a: "Yes. We collaborate with clubs, bars, promoters, sponsors, and community partners who want to create African-inspired experiences in Taiwan.",
    },
    {
      q: "How do I buy tickets?",
      a: "You can buy directly through our KKTIX page or message us on WhatsApp or Instagram if you need help securing your ticket.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Global African texture overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/african-pattern.png')]" />
      <div className="fixed inset-x-0 top-0 z-50 border-b border-yellow-400/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="block w-36 md:w-44 shrink-0">
            <BrandLogo />
          </a>
          <div className="hidden items-center gap-6 text-sm text-neutral-200 md:flex">
            <a href="#tickets" className="transition hover:text-white">Tickets</a>
            <a href="#bookings" className="transition hover:text-white">Bookings</a>
            <a href="#sponsors" className="transition hover:text-white">Sponsors</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>

      <section id="top" className="relative min-h-screen overflow-hidden border-b border-yellow-400/10 pt-20 md:pt-24">
        <img
          src="/logo.png.png"
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 w-[440px] max-w-[80vw] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.06] md:w-[680px]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline poster="/logo.png.png">
          <source src="/videos/recap.mp4.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 opacity-[0.10] mix-blend-soft-light [background-image:radial-gradient(circle_at_center,white_0.6px,transparent_0.7px)] [background-size:10px_10px]" />
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.75)]" />
        {/* Warm African gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-yellow-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.18),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-400/15 blur-3xl animate-pulse" />
        <div className="absolute right-[8%] top-[22%] h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 md:px-10">
          <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-200 backdrop-blur-sm">
                  Amapiano • Afrobeats • Culture
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  Taiwan’s African Nightlife Movement
                </span>
              </div>

              <div className="mb-8 lg:hidden">
                <div className="w-40 md:w-48 rounded-3xl border border-yellow-400/10 bg-black/40 backdrop-blur-lg p-3 backdrop-blur-md">
                  <BrandLogo subtle />
                </div>
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
                AFROPIANO
                <span className="block text-yellow-300">ASIA</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl">
                A cultural movement bringing African culture to Taiwan through music, food, and experiences. We create premium events, unforgettable energy, and community-driven moments that go beyond nightlife.
              </p>

              <p className="mt-3 font-semibold text-yellow-300">
                Now booking DJs & events across Taiwan • Limited 2026 dates open
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tickets" className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-400/30 transition hover:scale-[1.03]">
                  🎟 Get Tickets
                </a>
                <a href="#bookings" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                  💼 Book Us
                </a>
                <a href="https://wa.me/886903404734" target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.03]">
                  WhatsApp Us
                </a>
                <a href="/videos/recap.mp4.mp4" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 bg-black/40 backdrop-blur-lg px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                  Watch Recap
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { value: "100–400", label: "Avg Crowd" },
                  { value: "450", label: "Peak Attendance" },
                  { value: "4", label: "Cities Activated" },
                  { value: "2025", label: "Brand Launch" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-yellow-400/15 bg-black/40 backdrop-blur-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/25">
                    <div className="text-2xl font-black text-yellow-300">{item.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-200">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-yellow-400/10 bg-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-yellow-300/30">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-yellow-200">Featured Build-Up Event</div>
                    <div className="mt-2 text-2xl font-bold text-white">Annual White Party</div>
                  </div>
                  <div className="hidden w-24 shrink-0 rounded-2xl border border-yellow-400/10 bg-black/20 p-2 lg:block">
                    <BrandLogo subtle />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-yellow-400/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">Venue</div>
                    <div className="mt-2 text-lg font-semibold text-white">Superhouse 2.0, Taichung</div>
                  </div>
                  <div className="rounded-2xl border border-yellow-400/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">Positioning</div>
                    <div className="mt-2 text-lg font-semibold text-white">Official build-up to AFRICA UNITE TOUR</div>
                  </div>
                  <div className="rounded-2xl border border-yellow-400/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">Headline Energy</div>
                    <div className="mt-2 text-lg font-semibold text-white">South African artist collaboration</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="#tickets" className="rounded-2xl bg-yellow-400 px-5 py-3 text-center font-semibold text-black">View Event</a>
                  <a href="#sponsors" className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white">Sponsor This</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-yellow-400/10 bg-black/40 backdrop-blur-lg px-5 py-3 text-xs uppercase tracking-[0.28em] text-neutral-200 backdrop-blur-md md:block">
          Scroll to explore the movement
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Our Story</p>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">More Than Music. A Cultural Bridge.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-200">
          AFROPIANO ASIA was created to bring African culture to Taiwan in a real, lived way — not just through nightlife, but through shared experiences. Music is the entry point, but the mission goes deeper.
        </p>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-200">
          From Amapiano and Afrobeats to food, fashion, and community, we create spaces where people can feel Africa — not just hear it. Every event is designed to connect cultures, break barriers, and build something bigger than a party.
        </p>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-200">
          We are building a bridge between Africa and Asia — one experience at a time.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">African Events, Reimagined for Asia</h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-200">
          AFROPIANO ASIA is a cultural platform bringing African culture to Taiwan through music, food, nightlife, and shared experiences. From Amapiano to Afrobeats and beyond, we create spaces where culture, community, and connection come together.
        </p>
      </section>

      <section id="tickets" className="border-y border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Featured Event</p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">{featuredEvent.title}</h2>
              <div className="mt-5 flex flex-col gap-2 text-neutral-200 sm:flex-row sm:gap-6">
                <span>{featuredEvent.date}</span>
                <span>{featuredEvent.venue}</span>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200">{featuredEvent.description}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={featuredEvent.ticketLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-yellow-400 px-6 py-3 text-center font-semibold text-black">
                  🎟 Buy Tickets (KKTIX)
                </a>
                <a href="https://wa.me/886903404734" target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold text-white">
                  💬 Ask on WhatsApp
                </a>
                <a href="https://www.instagram.com/afropianoasia/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 px-6 py-3 text-center">
                  📲 DM on Instagram
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">Ticket Funnel</div>
              <p className="mt-4 text-2xl font-bold">Buy instantly or message us for details — we’ll help you secure your spot.</p>
              <p className="mt-4 leading-7 text-neutral-200">
                Some people are ready to buy now, others want to ask questions first. This page gives both options so you never lose a sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">What We Produce</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-200">Designed to help visitors quickly understand what AFROPIANO ASIA sells.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {eventOffers.map((offer) => (
            <div key={offer.title} className="rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20">
              <h3 className="text-2xl font-bold">{offer.title}</h3>
              <p className="mt-4 leading-7 text-neutral-200">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="bookings" className="bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Bookings & Revenue</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Work With AFROPIANO ASIA</h2>
            <p className="mx-auto mt-6 max-w-2xl text-neutral-200">
              These are your money pages inside one site: ticket sales, DJ bookings, event collaborations, and sponsorship opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bookingOffers.map((offer) => (
              <div key={offer.title} className="rounded-[2rem] border border-yellow-400/10 bg-black/40 backdrop-blur-lg p-6">
                <h3 className="text-2xl font-bold">{offer.title}</h3>
                <p className="mt-4 min-h-[96px] leading-7 text-neutral-200">{offer.description}</p>
                <a href={offer.link} className="mt-6 inline-block rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-black">
                  {offer.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Why AFROPIANO ASIA</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Built for culture, attention, and conversion</h2>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 px-5 py-4 text-neutral-200">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">DJ Roster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-200">
              Book elite Afro DJs across Taiwan. Transparent pricing, proven crowd control, and premium performance.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {djs.map((dj) => (
              <div key={dj.name} className="overflow-hidden rounded-[2rem] border border-yellow-400/10 bg-black/40">
                <div className="relative h-56">
                  <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                    <source src={dj.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-sm uppercase tracking-widest text-yellow-300">{dj.tag}</div>
                    <div className="text-2xl font-bold">{dj.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-200">{dj.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {dj.bestFor.map((item) => (
                      <span key={item} className="rounded-full border border-yellow-400/10 bg-white/10 px-3 py-1 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase text-neutral-200">Starting Price</div>
                      <div className="text-xl font-bold text-yellow-300">{dj.price}</div>
                    </div>
                    <div className="text-sm text-green-400">{dj.availability}</div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={dj.instagram} target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 px-4 py-2 text-sm">Instagram</a>
                    <a href={dj.link} target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 px-4 py-2 text-sm">Media Kit</a>
                    <a href="mailto:afropiano.asia@gmail.com?subject=DJ%20Booking%20-%20Kwenzie" className="rounded-xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-black">🔥 Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto mb-12 max-w-4xl">
          <video controls className="w-full rounded-3xl border border-yellow-400/10 shadow-xl">
            <source src="/videos/recap.mp4.mp4" type="video/mp4" />
          </video>
        </div>
        <h2 className="text-3xl font-bold md:text-5xl">Experience The Movement</h2>
        <p className="mt-6 text-neutral-200">Watch the energy. Experience the culture. Be part of a growing African cultural movement in Taiwan.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="https://www.tiktok.com/@afroyanoz" target="_blank" rel="noreferrer" className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black">Watch on TikTok</a>
          <a href="https://www.instagram.com/afropianoasia/" target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-6 py-3 font-semibold text-black">Follow on Instagram</a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Gallery</p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">Past Event Highlights</h2>
              <p className="mt-4 max-w-2xl text-neutral-200">
                Real moments from AFROPIANO ASIA events across Taiwan. A premium visual archive of crowd energy, culture, fashion, and unforgettable nights.
              </p>
            </div>
            <a href="https://www.instagram.com/afropianoasia/" target="_blank" rel="noreferrer" className="inline-block rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gradient-to-br from-white/5 to-orange-900/10">
              View More on Instagram
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {galleryImages.map((image) => (
              <div key={`${image.src}-${image.title}`} className={`group relative overflow-hidden rounded-[1.75rem] border border-yellow-400/10 bg-black/40 backdrop-blur-lg ${image.size}`}>
                <img src={image.src} alt={image.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 md:h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="inline-block rounded-full border border-yellow-300/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200">
                    {image.tag}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galleryEvents.map((event) => (
              <a key={event.title} href={event.link} target="_blank" rel="noreferrer" className="group rounded-[1.75rem] border border-yellow-400/10 bg-black/40 backdrop-blur-lg p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20 hover:bg-gradient-to-br from-white/5 to-orange-900/10">
                <div className="text-sm uppercase tracking-[0.2em] text-yellow-300">{event.label}</div>
                <h3 className="mt-3 text-2xl font-bold group-hover:text-yellow-300">{event.title}</h3>
                <p className="mt-3 text-neutral-200">{event.description}</p>
                <div className="mt-5 text-sm font-semibold text-white">Open full gallery →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Partners & Collaborators</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Brands we build with</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-200">
              These brands help power the AFROPIANO ASIA experience across events, culture, and community.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { src: "/AFRO SATURDAY LOGO.png", alt: "Afro Saturday" },
              { src: "/better life logo (with gradient).png", alt: "Better Life" },
              { src: "/LOUDCREW LOGO (1).png", alt: "Loud Crew" },
              { src: "/party roots.jpg", alt: "Party Roots" },
            ].map((partner) => (
              <div key={partner.alt} className="flex items-center justify-center rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div style={{ display: "none" }} className="items-center justify-center text-center text-sm font-semibold text-neutral-200">
                  {partner.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20 text-center">
                <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-neutral-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION FOR SPONSORS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Our Mission</p>
            <h3 className="mt-4 text-2xl font-bold">Building cultural bridges through experience</h3>
            <p className="mt-4 leading-8 text-neutral-200">
              Our mission is to bring authentic African culture to Taiwan through music, food, fashion, and community-driven experiences. We create spaces where cultures meet, connect, and grow together.
            </p>
          </div>
          <div className="rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Our Vision</p>
            <h3 className="mt-4 text-2xl font-bold">Africa × Asia cultural movement</h3>
            <p className="mt-4 leading-8 text-neutral-200">
              We aim to become the leading African cultural platform in Asia — connecting continents through events, partnerships, and creative experiences that go beyond nightlife.
            </p>
          </div>
        </div>
      </section>

      {/* PRESS & CREDIBILITY */}
      <section className="border-y border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Press & Credibility</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Recognized & Growing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-200">
              AFROPIANO ASIA is gaining attention across communities, venues, and cultural spaces in Taiwan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "International Bookings",
                desc: "Hosted global African artists and built cross-border cultural experiences.",
              },
              {
                title: "Multi-City Presence",
                desc: "Events activated across Taichung, Taipei, Kaohsiung, and Tainan.",
              },
              {
                title: "Cultural Impact",
                desc: "Bringing African culture into new markets through music, food, and community.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20 text-center">
                <h3 className="text-xl font-bold text-yellow-300">{item.title}</h3>
                <p className="mt-4 text-neutral-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Sponsor With Us</p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">Put your brand inside the movement</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-200">
                AFROPIANO ASIA offers brands direct access to a fast-growing African nightlife and culture audience in Taiwan. We create sponsorship moments that feel visible, authentic, and built for real-world engagement.
              </p>
              <div className="mt-8 grid gap-4">
                {sponsorBenefits.map((benefit) => (
                  <div key={benefit} className="rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 px-5 py-4 text-neutral-200">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8">
                <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">Sponsorship Packages</div>
                <h3 className="mt-4 text-2xl font-bold">Flexible ways to partner</h3>
                <p className="mt-4 leading-7 text-neutral-200">
                  Choose a tier or let us create a custom package for your brand, venue, or campaign goals.
                </p>
              </div>
              <div className="mt-6 grid gap-6">
                {sponsorPackages.map((pkg) => (
                  <div key={pkg.title} className="rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold">{pkg.title}</h3>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">{pkg.price}</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {pkg.items.map((item) => (
                        <div key={item} className="rounded-xl bg-gradient-to-br from-white/5 to-orange-900/10 px-4 py-3 text-neutral-200">{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:afropiano.asia@gmail.com?subject=Sponsorship%20Deck%20Request" className="rounded-2xl bg-yellow-400 px-6 py-3 text-center font-semibold text-black">
                  🚀 Request Sponsorship Deck
                </a>
                <a href="https://wa.me/886903404734" target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold text-white">
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-yellow-400/10 bg-gradient-to-br from-white/5 to-orange-900/10 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-yellow-400/10 bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/20">
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-3 leading-7 text-neutral-200">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-400/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <BrandLogo subtle />
          </div>
          <p className="text-sm text-neutral-200">© 2026 Afropiano Asia. African Cultural Movement in Taiwan.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-neutral-200">
            <a href="https://www.instagram.com/afropianoasia/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://afropiano.kktix.cc/" target="_blank" rel="noreferrer">Tickets</a>
            <a href="mailto:afropiano.asia@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <section id="contact" className="bg-gradient-to-br from-[#0A0A0A] to-[#1a0f05] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Book AFROPIANO ASIA</h2>
          <p className="mt-6 text-neutral-200">
            For bookings, partnerships, collaborations, and sponsorships. Brands can request custom sponsor packages directly through email or WhatsApp.
          </p>
          <div className="mt-10 space-y-4">
            <p className="text-yellow-400">Instagram: @afropianoasia</p>
            <p className="text-neutral-200">Email: afropiano.asia@gmail.com</p>
            <a href="https://wa.me/886903404734" target="_blank" rel="noreferrer" className="inline-block rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white">
              💬 Message on WhatsApp
            </a>
            <div className="pt-4">
              <a href="mailto:afropiano.asia@gmail.com?subject=AFROPIANO%20ASIA%20Booking" className="inline-block rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black">
                📩 Send Booking Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
