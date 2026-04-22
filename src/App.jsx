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
    "African nightlife brand built specifically for Taiwan",
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
    {
      label: "Cities Activated",
      value: "Taichung • Taipei • Kaohsiung • Tainan",
    },
    { label: "Partner Brands", value: "3+" },
    { label: "Years Active", value: "Since Jan 2025" },
    { label: "Social Audience", value: "<1,000 (rapidly growing)" },
  ];

  const sponsorBenefits = [
    "Reach multicultural nightlife audiences in Taiwan",
    "Align your brand with African music, culture, and premium events",
    "Get visibility through social content, flyers, and live event experiences",
    "Build authentic connections with students, creatives, expats, and nightlife communities",
  ];

  const galleryImages = [
    {
      src: "/gallery/img1.jpg",
      title: "Summer Pool Party",
      tag: "Outdoor Energy",
      size: "md:col-span-7 md:row-span-2",
    },
    {
      src: "/gallery/img2.jpg",
      title: "White Party",
      tag: "Signature Experience",
      size: "md:col-span-5",
    },
    {
      src: "/gallery/img3.jpg",
      title: "Gogo Skhotheni",
      tag: "International Booking",
      size: "md:col-span-5",
    },
    {
      src: "/gallery/img4.jpg",
      title: "Crowd Moments",
      tag: "Packed Rooms",
      size: "md:col-span-4",
    },
    {
      src: "/gallery/img5.jpg",
      title: "DJ Experience",
      tag: "Performance",
      size: "md:col-span-4",
    },
    {
      src: "/gallery/img6.jpg",
      title: "Culture & Fashion",
      tag: "Premium Vibes",
      size: "md:col-span-4",
    },
    {
      src: "/gallery/img7.jpg",
      title: "Nightlife Visuals",
      tag: "Lighting & Atmosphere",
      size: "md:col-span-6",
    },
    {
      src: "/gallery/img8.jpg",
      title: "Community",
      tag: "People & Connection",
      size: "md:col-span-6",
    },
  ];

  const galleryEvents = [
    {
      label: "Outdoor Event",
      title: "Summer Pool Party 2025",
      description:
        "Outdoor energy, crowd movement, and unforgettable summer vibes.",
      link: "https://drive.google.com/drive/folders/1AA8hvDzGBPGW47cy01jivo67iq6MVTP7?usp=drive_link",
    },
    {
      label: "International Booking",
      title: "Gogo Skhotheni Party",
      description:
        "A landmark moment for the brand with international headline appeal.",
      link: "https://drive.google.com/drive/folders/1Ky476oplAq8V4dljzwYuTeR_bNmQLnU3?usp=drive_link",
    },
    {
      label: "Signature Event",
      title: "Annual White Party",
      description:
        "Premium fashion, nightlife visuals, and elevated all-white energy.",
      link: "https://drive.google.com/drive/folders/1HMkYidK8ZCgbrHvUt7FSjcZmY2wfKLn-?usp=drive_link",
    },
    {
      label: "Spring Festival",
      title: "Afropiano Spring Fest with Young Zesh",
      description:
        "A special headline collaboration that added fresh energy to the AFROPIANO ASIA story.",
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
      video: "/videos/recap.mp4",
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
      a: "You can buy directly through our KKTIX page or message us on WhatsApp/Instagram if you need help securing your ticket.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Navigation with Logo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <img src="/logo.png" alt="Afropiano Asia" className="w-28 md:w-32" />
          <div className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#tickets">Tickets</a>
            <a href="#bookings">Bookings</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        {/* Premium Watermark Logo */}
        <img src="/logo.png" alt="" className="absolute opacity-5 w-[500px] md:w-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/recap.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.18),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-10">
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

              <div className="mb-8 flex justify-start lg:hidden">
                <img
                  src="/logo.png"
                  alt="Afropiano Asia Logo"
                  className="w-32 md:w-40"
                />
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
                AFROPIANO
                <span className="block text-yellow-300">ASIA</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl">
                The fastest growing African nightlife movement in Taiwan.
                Premium events, unforgettable energy, and culture-led
                experiences built for clubs, crowds, and collaborators.
              </p>

              <p className="mt-3 text-yellow-300 font-semibold">
                Now booking DJs & events across Taiwan • Limited 2026 dates open
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#tickets"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.03] shadow-lg shadow-yellow-400/30"
                >
                  🎟 Get Tickets
                </a>
                <a
                  href="#bookings"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  💼 Book Us
                </a>
                <a
                  href="https://wa.me/886903404734"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.03]"
                >
                  WhatsApp Us
                </a>
                <a
                  href="/videos/recap.mp4"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/20 bg-black/30 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Watch Recap
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <div className="text-2xl font-black text-yellow-300">100–400</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-300">Avg Crowd</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <div className="text-2xl font-black text-yellow-300">450</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-300">Peak Attendance</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <div className="text-2xl font-black text-yellow-300">4</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-300">Cities Activated</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <div className="text-2xl font-black text-yellow-300">2025</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-300">Brand Launch</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-yellow-200">
                      Featured Build-Up Event
                    </div>
                    <div className="mt-2 text-2xl font-bold text-white">
                      Annual White Party
                    </div>
                  </div>
                  <img
                    src="/logo.png"
                    alt="Afropiano Asia Logo"
                    className="hidden w-20 lg:block"
                  />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">
                      Venue
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Superhouse 2.0, Taichung
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">
                      Positioning
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Official build-up to AFRICA UNITE TOUR
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-yellow-300">
                      Headline Energy
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      South African artist collaboration
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#tickets"
                    className="rounded-2xl bg-yellow-400 px-5 py-3 text-center font-semibold text-black"
                  >
                    View Event
                  </a>
                  <a
                    href="#sponsors"
                    className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white"
                  >
                    Sponsor This
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.28em] text-neutral-300 backdrop-blur-md md:block">
          Scroll to explore the movement
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          African Events, Reimagined for Asia
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-300">
          AFROPIANO ASIA is an events company bringing African music and culture
          to Taiwan through premium nightlife, outdoor experiences, and
          high-energy parties. From Amapiano to Afrobeats, we create spaces
          where culture meets community.
        </p>
      </section>

      <section id="tickets" className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Featured Event
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                {featuredEvent.title}
              </h2>
              <div className="mt-5 flex flex-col gap-2 text-neutral-300 sm:flex-row sm:gap-6">
                <span>{featuredEvent.date}</span>
                <span>{featuredEvent.venue}</span>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                {featuredEvent.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={featuredEvent.ticketLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 text-center font-semibold text-black"
                >
                  🎟 Buy Tickets (KKTIX)
                </a>

                <a
                  href="https://wa.me/886903404734"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold text-white"
                >
                  💬 Ask on WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/afropianoasia/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center"
                >
                  📲 DM on Instagram
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">
                Ticket Funnel
              </div>
              <p className="mt-4 text-2xl font-bold">
                Buy instantly or message us for details — we’ll help you secure your spot.
              </p>
              <p className="mt-4 leading-7 text-neutral-300">
                Some people are ready to buy now, others want to ask questions first.
                This page gives both options so you never lose a sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">What We Produce</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Designed to help visitors quickly understand what AFROPIANO ASIA
            sells.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {eventOffers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6"
            >
              <h3 className="text-2xl font-bold">{offer.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="bookings" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Bookings & Revenue
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Work With AFROPIANO ASIA
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-neutral-300">
              These are your money pages inside one site: ticket sales, DJ
              bookings, event collaborations, and sponsorship opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bookingOffers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-[2rem] border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-2xl font-bold">{offer.title}</h3>
                <p className="mt-4 min-h-[96px] leading-7 text-neutral-400">
                  {offer.description}
                </p>
                <a
                  href={offer.link}
                  className="mt-6 inline-block rounded-2xl bg-yellow-400 px-5 py-3 font-semibold text-black"
                >
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Why AFROPIANO ASIA
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Built for culture, attention, and conversion
            </h2>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-neutral-200"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">DJ Roster</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Book elite Afro DJs across Taiwan. Transparent pricing, proven crowd control, and premium performance.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {djs.map((dj) => (
              <div key={dj.name} className="rounded-[2rem] border border-white/10 bg-black/40 overflow-hidden">
                <div className="relative h-56">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src={dj.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-sm text-yellow-300 uppercase tracking-widest">{dj.tag}</div>
                    <div className="text-2xl font-bold">{dj.name}</div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-neutral-300">{dj.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {dj.bestFor.map((item) => (
                      <span key={item} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-neutral-400 uppercase">Starting Price</div>
                      <div className="text-xl font-bold text-yellow-300">{dj.price}</div>
                    </div>
                    <div className="text-sm text-green-400">{dj.availability}</div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={dj.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/20 text-sm">
                      Instagram
                    </a>
                    <a href={dj.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/20 text-sm">
                      Media Kit
                    </a>
                    <a href="mailto:afropiano.asia@gmail.com?subject=DJ%20Booking%20-%20Kwenzie" className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold text-sm">
                      🔥 Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Experience The Movement
        </h2>
        <p className="mt-6 text-neutral-300">
          Watch the energy. Join the culture. Be part of the fastest growing
          African nightlife scene in Taiwan.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://www.tiktok.com/@afroyanoz"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black"
          >
            Watch on TikTok
          </a>
          <a
            href="https://www.instagram.com/afropianoasia/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Past Event Highlights
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-400">
                Real moments from AFROPIANO ASIA events across Taiwan. A premium
                visual archive of crowd energy, culture, fashion, and
                unforgettable nights.
              </p>
            </div>
            <a
              href="https://www.instagram.com/afropianoasia/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View More on Instagram
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {galleryImages.map((image) => (
              <div
                key={`${image.src}-${image.title}`}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 ${image.size}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 md:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="inline-block rounded-full border border-yellow-300/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200">
                    {image.tag}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galleryEvents.map((event) => (
              <a
                key={event.title}
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.75rem] border border-white/10 bg-black/30 p-6 transition hover:-translate-y-1 hover:bg-white/5"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-yellow-300">
                  {event.label}
                </div>
                <h3 className="mt-3 text-2xl font-bold group-hover:text-yellow-300">
                  {event.title}
                </h3>
                <p className="mt-3 text-neutral-400">{event.description}</p>
                <div className="mt-5 text-sm font-semibold text-white">
                  Open full gallery →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Partners & Collaborators
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Brands we build with
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              These brands help power the AFROPIANO ASIA experience across
              events, culture, and community.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <img
                src="/partners/afro-saturday.png"
                alt="Afro Saturday"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <img
                src="/partners/better-life.png"
                alt="Better Life"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <img
                src="/partners/loud-crew.png"
                alt="Loud Crew"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <img
                src="/partners/party-roots.png"
                alt="Party Roots"
                className="max-h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-6 text-center"
              >
                <div className="text-3xl font-black text-yellow-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Sponsor With Us
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Put your brand inside the movement
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                AFROPIANO ASIA offers brands direct access to a fast-growing
                African nightlife and culture audience in Taiwan. We create
                sponsorship moments that feel visible, authentic, and built for
                real-world engagement.
              </p>

              <div className="mt-8 grid gap-4">
                {sponsorBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-neutral-200"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8">
                <div className="text-sm uppercase tracking-[0.25em] text-yellow-200">
                  Sponsorship Packages
                </div>
                <h3 className="mt-4 text-2xl font-bold">
                  Flexible ways to partner
                </h3>
                <p className="mt-4 leading-7 text-neutral-300">
                  Choose a tier or let us create a custom package for your
                  brand, venue, or campaign goals.
                </p>
              </div>

              <div className="mt-6 grid gap-6">
                {sponsorPackages.map((pkg) => (
                  <div
                    key={pkg.title}
                    className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold">{pkg.title}</h3>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {pkg.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-white/5 px-4 py-3 text-neutral-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:afropiano.asia@gmail.com?subject=Sponsorship%20Deck%20Request"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 text-center font-semibold text-black"
                >
                  🚀 Request Sponsorship Deck
                </a>
                <a
                  href="https://wa.me/886903404734"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold text-white"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6"
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="/logo.png" alt="Afropiano Asia" className="mx-auto w-28 mb-6 opacity-90" />
          <p className="text-neutral-400 text-sm">
            © 2026 Afropiano Asia. African Nightlife Movement in Taiwan.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-neutral-400">
            <a href="https://www.instagram.com/afropianoasia/" target="_blank">Instagram</a>
            <a href="https://afropiano.kktix.cc/" target="_blank">Tickets</a>
            <a href="mailto:afropiano.asia@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <section id="contact" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Book AFROPIANO ASIA
          </h2>

          <p className="mt-6 text-neutral-300">
            For bookings, partnerships, collaborations, and sponsorships.
            Brands can request custom sponsor packages directly through email or
            WhatsApp.
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-yellow-400">Instagram: @afropianoasia</p>
            <p className="text-neutral-300">Email: afropiano.asia@gmail.com</p>
            <a
              href="https://wa.me/886903404734"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white"
            >
              💬 Message on WhatsApp
            </a>
            <div className="pt-4">
              <a
                href="mailto:afropiano.asia@gmail.com?subject=AFROPIANO%20ASIA%20Booking"
                className="inline-block rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black"
              >
                📩 Send Booking Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
