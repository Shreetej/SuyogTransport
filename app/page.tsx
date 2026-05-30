import Counter from "./components/Counter";
import EnquiryForm from "./components/EnquiryForm";
import {
  ArrowIcon,
  BoxIcon,
  ClockIcon,
  HomeIcon,
  InstagramIcon,
  LayersIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  RupeeIcon,
  ShieldIcon,
  TruckIcon,
  WarehouseIcon,
  WhatsAppIcon,
} from "./components/Icons";
import ImageSlot from "./components/ImageSlot";
import Nav from "./components/Nav";
import RevealController from "./components/Reveal";
import RouteTicker from "./components/RouteTicker";

const PHONE_DISPLAY = "+91 9820467270";
const PHONE_TEL = "+919820467270";
const WA = "919820467270";
const EMAIL = "ghodekartukaram@gmail.com";
const ADDRESS = "Sector 10, Nerul, Navi Mumbai 400706";

const SERVICES = [
  {
    num: "01",
    Icon: TruckIcon,
    title: "Full Truck Load (FTL)",
    desc: "A dedicated vehicle for your consignment — direct from pickup to drop, no transfers, no delays.",
  },
  {
    num: "02",
    Icon: BoxIcon,
    title: "Part Load (LTL)",
    desc: "Share truck space and pay only for what you use. Ideal for small consignments on busy routes.",
  },
  {
    num: "03",
    Icon: HomeIcon,
    title: "Packers & Movers",
    desc: "Home & office relocation with careful packing, loading and unloading by an experienced crew.",
  },
  {
    num: "04",
    Icon: LayersIcon,
    title: "Industrial & Project Cargo",
    desc: "Machinery, construction material and heavy project loads handled with the right body and tie-downs.",
  },
  {
    num: "05",
    Icon: WarehouseIcon,
    title: "Warehousing & Storage",
    desc: "Short-term storage at secure points across the MMR while your goods wait for the next leg.",
  },
  {
    num: "06",
    Icon: PinIcon,
    title: "Door-to-Door Delivery",
    desc: "We pick up from your address and deliver to the doorstep — no last-mile gaps, no hand-offs.",
  },
];

// Hero right-column photo: branded Suyog Transport poster (portrait).
const HERO_IMG = "/hero-poster.jpg";

const FLEET = [
  {
    name: "Mahindra Maxx Pickup", cap: "850 kg", size: "8 ft", body: "Closed body",
    ideal: ["City runs", "Narrow lanes", "Small loads"],
    img: "/fleet/mahindra-maxx.jpg",
  },
  {
    name: "Tata Intra", cap: "1.3 ton", size: "9 ft", body: "Closed body",
    ideal: ["Last-mile", "Retail runs"],
    img: "/fleet/tata-intra.jpg",
  },
  {
    name: "Mahindra Bolero Pickup", cap: "1.5 ton", size: "9 ft", body: "Closed body",
    ideal: ["Furniture", "Mid loads"],
    img: "/fleet/mahindra-bolero.jpg",
  },
  {
    name: "Tata 407", cap: "2.5 ton", size: "14 ft", body: "Closed body",
    ideal: ["House shifting", "Retail stock"],
    img: "/fleet/tata-407.jpg",
  },
  {
    name: "Mahindra Bolero Pickup", cap: "1.7 ton", size: "9 ft", body: "Closed body",
    ideal: ["Bulk cartons", "Daily runs"],
    img: "/fleet/mahindra-bolero.jpg",
  },
  {
    name: "Eicher 1109", cap: "7.5 ton", size: "19 ft", body: "Closed body",
    ideal: ["Office moves", "Bulk cartons", "Distribution", "Long haul"],
    img: "/fleet/eicher-1109.jpg",
  },
];

const DISTRICTS = [
  { name: "Navi Mumbai", badge: "Home base", areas: ["Vashi", "Nerul", "Belapur", "Panvel", "Kharghar", "Turbhe", "Airoli"] },
  { name: "Thane", badge: "Daily", areas: ["Thane City", "Kalyan", "Dombivli", "Bhiwandi", "Ulhasnagar", "Mumbra"] },
  { name: "Palghar", badge: "Scheduled", areas: ["Vasai", "Virar", "Boisar", "Palghar Town", "Nalasopara", "Tarapur MIDC"] },
  { name: "Pune", badge: "On request", areas: ["Pune City", "Pimpri-Chinchwad", "Chakan", "Hinjewadi", "Wagholi"] },
];

const STEPS = [
  { n: 1, title: "Tell us your load", desc: "Share pickup & drop, goods type and rough weight — by call, WhatsApp or the form." },
  { n: 2, title: "Get a clear quote", desc: "We recommend the right vehicle and give you an honest, all-in price. No hidden charges." },
  { n: 3, title: "We pick up on time", desc: "Our driver reaches your point on schedule, loads carefully and heads out." },
  { n: 4, title: "Delivered & confirmed", desc: "Stay updated through the trip and get a confirmation on safe doorstep delivery." },
];

const WHY = [
  { Icon: ClockIcon, title: "On-time, every time", desc: "98% of pickups happen within the promised window — we plan routes around local traffic." },
  { Icon: ShieldIcon, title: "Goods handled safely", desc: "Trained crew, proper tie-downs and the right body type so your cargo arrives the way it left." },
  { Icon: RupeeIcon, title: "Transparent pricing", desc: "One clear quote up front. No surprise detention, loading or \"diesel\" charges at the end." },
  { Icon: PhoneIcon, title: "Always reachable", desc: "Call or WhatsApp 8am–9pm, Mon–Sat. A real person answers and tracks your trip." },
];

const TESTIMONIALS = [
  {
    av: "RK",
    text: "Shifted our whole warehouse stock from Bhiwandi to Panvel over a weekend. On time, well packed, fair rate. Now our default transporter.",
    name: "Rohan Kulkarni",
    role: "Retail distributor, Thane",
  },
  {
    av: "SP",
    text: "Booked a tempo on WhatsApp at 9pm, it was at my door by 8am for a house shift in Kharghar. The crew handled everything carefully.",
    name: "Sneha Patil",
    role: "Home relocation, Navi Mumbai",
  },
  {
    av: "AM",
    text: "We send machinery parts to Pune every week. Suyog gives us one clear price and the driver always calls before reaching. Very reliable.",
    name: "Amit Mehta",
    role: "Manufacturing, Tarapur MIDC",
  },
];

const REVEAL_DELAYS = ["", "d1", "d2", "d3", "d4"];

export default function Page() {
  return (
    <>
      <RevealController />

      {/* TOP BAR */}
      <div className="topbar">
        <div className="wrap">
          <div className="marquee-track">
            <span className="dot" />
            <span>NOW SERVING&nbsp;&nbsp;NAVI MUMBAI · THANE · PALGHAR · PUNE</span>
          </div>
          <div className="tb-right">
            <a href={`tel:${PHONE_TEL}`}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a href="#enquiry">Open · Mon–Sat 8am–9pm</a>
          </div>
        </div>
      </div>

      <Nav phone={PHONE_TEL} />

      <main id="top">
        {/* HERO */}
        <section className="hero section">
          <span className="hero-bg-num">S</span>
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="hero-eyebrow reveal">
                  <span className="pill live">Available now</span>
                  <span className="pill">Loads from 750 kg → 7.5 tonnes</span>
                </div>
                <h1 className="display-xl reveal d1">
                  WE MOVE YOUR<br />GOODS LIKE<br />
                  <span className="stroke">THEY'RE OURS.</span>
                </h1>
                <div className="hero-sub reveal d2">
                  <p className="lead">
                    Suyog Transport runs reliable goods carriers across Navi Mumbai, Thane, Palghar &amp; Pune —
                    from a Mahindra Maxx Pickup to a 19ft Eicher 1109. Honest rates, on-time pickup, doorstep delivery.
                  </p>
                  <div className="hero-actions">
                    <a href="#enquiry" className="btn btn-primary">
                      Get a free quote
                      <ArrowIcon />
                    </a>
                    <a
                      href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi Suyog Transport, I'd like a quote")}`}
                      className="btn btn-wa"
                    >
                      <WhatsAppIcon />
                      WhatsApp now
                    </a>
                  </div>
                  <div className="hero-trust">
                    <span className="stars">★★★★★</span>
                    <span>Trusted by 300+ local businesses &amp; families</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual reveal d2">
                <div className="hero-photo">
                  <ImageSlot label="Suyog Transport fleet truck" src={HERO_IMG} />
                </div>
                <div className="hero-tag">
                  <span className="ic">
                    <TruckIcon />
                  </span>
                  <div>
                    <b>Pickup in 60 mins</b>
                    <small>across Navi Mumbai &amp; Thane</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RouteTicker />
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="wrap">
            <div className="stat">
              <Counter target={300} suffix="+" />
              <span className="lab">Happy clients</span>
            </div>
            <div className="stat">
              <Counter target={4} />
              <span className="lab">Districts served</span>
            </div>
            <div className="stat">
              <Counter target={5} />
              <span className="lab">Vehicle types</span>
            </div>
            <div className="stat">
              <Counter target={98} suffix="%" />
              <span className="lab">On-time pickup</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section light" id="services">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">What we move</span>
                <h2 className="display-l reveal d1">
                  Transport, sorted —<br />whatever the load.
                </h2>
              </div>
              <p className="lead reveal d2">
                Whether it's a single carton or a factory's worth of machinery, we have the right vehicle and a
                driver who knows the roads.
              </p>
            </div>
            <div className="svc-grid">
              {SERVICES.map((s, i) => (
                <div key={s.num} className={`svc-card reveal ${REVEAL_DELAYS[i % 3]}`}>
                  <span className="num">{s.num}</span>
                  <span className="ic">
                    <s.Icon />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLEET */}
        <section className="fleet section" id="fleet">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">Our fleet</span>
                <h2 className="display-l reveal d1">
                  The right truck<br />for every job.
                </h2>
              </div>
              <p className="lead reveal d2">
                From a nimble Maxx Pickup for narrow lanes to a 19ft Eicher 1109 for bulk loads — pick the size
                that fits, or tell us and we'll advise.
              </p>
            </div>
            <div className="fleet-grid">
              {FLEET.map((v, i) => (
                <div key={`${v.name}-${i}`} className={`veh-card reveal ${REVEAL_DELAYS[i % 3]}`}>
                  <div className="veh-photo">
                    <span className="veh-cap">{v.cap}</span>
                    <ImageSlot label={`${v.name} photo`} src={v.img} />
                  </div>
                  <div className="veh-body">
                    <h3>{v.name}</h3>
                    <div className="veh-meta">
                      <div className="row">
                        <span className="k">Payload</span>
                        <span className="v">{v.cap}</span>
                      </div>
                      <div className="row">
                        <span className="k">Length</span>
                        <span className="v">{v.size}</span>
                      </div>
                      <div className="row">
                        <span className="k">Body</span>
                        <span className="v">{v.body}</span>
                      </div>
                    </div>
                    <div className="veh-tags">
                      {v.ideal.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROUTES */}
        <section className="routes section" id="routes">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">Where we run</span>
                <h2 className="display-l reveal d1">
                  Built around the<br />MMR &amp; Pune corridor.
                </h2>
              </div>
              <p className="lead reveal d2">
                We started in Navi Mumbai &amp; Thane and now cover four districts. Daily movements on the busiest
                local corridors — and one-off trips anywhere in between.
              </p>
            </div>
            <div className="routes-grid">
              <div className="map reveal">
                <div className="grid-bg" />
                <svg viewBox="0 0 460 420" preserveAspectRatio="xMidYMid meet">
                  <path className="route-line dash-anim" d="M120 300 L120 150" />
                  <path className="route-line dash-anim" d="M120 150 L300 90" />
                  <path className="route-line dash-anim" d="M120 300 L330 320" />
                  <path className="route-line dim" d="M300 90 L330 320" />
                  <g>
                    <circle className="node-ring" cx="120" cy="300" r="13" />
                    <circle className="node-dot" cx="120" cy="300" r="6" />
                    <text className="node-label" x="120" y="335" textAnchor="middle">NAVI MUMBAI</text>
                    <text className="node-sub" x="120" y="350" textAnchor="middle">Vashi · Panvel · base</text>
                  </g>
                  <g>
                    <circle className="node-ring" cx="120" cy="150" r="13" />
                    <circle className="node-dot" cx="120" cy="150" r="6" />
                    <text className="node-label" x="120" y="132" textAnchor="middle">THANE</text>
                    <text className="node-sub" x="120" y="118" textAnchor="middle">Kalyan · Bhiwandi</text>
                  </g>
                  <g>
                    <circle className="node-ring" cx="300" cy="90" r="13" />
                    <circle className="node-dot" cx="300" cy="90" r="6" />
                    <text className="node-label" x="300" y="72" textAnchor="middle">PALGHAR</text>
                    <text className="node-sub" x="300" y="58" textAnchor="middle">Vasai · Boisar</text>
                  </g>
                  <g>
                    <circle className="node-ring" cx="330" cy="320" r="13" />
                    <circle className="node-dot" cx="330" cy="320" r="6" />
                    <text className="node-label" x="330" y="355" textAnchor="middle">PUNE</text>
                    <text className="node-sub" x="330" y="370" textAnchor="middle">Pimpri-Chinchwad</text>
                  </g>
                </svg>
              </div>
              <div className="districts">
                {DISTRICTS.map((d, i) => (
                  <div key={d.name} className={`district reveal ${REVEAL_DELAYS[i]}`}>
                    <div className="top">
                      <h3>
                        <span className="accent">●</span> {d.name}
                      </h3>
                      <span className="badge">{d.badge}</span>
                    </div>
                    <div className="areas">
                      {d.areas.map((a) => (
                        <span key={a}>{a}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how section light" id="how">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">How it works</span>
                <h2 className="display-l reveal d1">
                  Booked in four<br />simple steps.
                </h2>
              </div>
              <p className="lead reveal d2">
                No paperwork mountain, no chasing. Tell us the load and we take it from there.
              </p>
            </div>
            <div className="steps">
              {STEPS.map((s, i) => (
                <div key={s.n} className={`step reveal ${REVEAL_DELAYS[i]}${i === 0 ? " active" : ""}`}>
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="why section" id="why">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">Why Suyog</span>
                <h2 className="display-l reveal d1">
                  Local roads.<br />Real accountability.
                </h2>
              </div>
              <p className="lead reveal d2">
                We're a local operator, not a faceless aggregator. You get a name, a number, and someone who picks
                up the phone.
              </p>
            </div>
            <div className="why-grid">
              {WHY.map((w, i) => (
                <div key={w.title} className={`why-item reveal ${REVEAL_DELAYS[i % 2]}`}>
                  <span className="ic">
                    <w.Icon />
                  </span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testi section">
          <div className="wrap">
            <div className="sec-head">
              <div className="col">
                <span className="eyebrow reveal">In their words</span>
                <h2 className="display-l reveal d1">
                  Businesses &amp; families<br />who trust us.
                </h2>
              </div>
            </div>
            <div className="testi-grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`quote reveal ${REVEAL_DELAYS[i]}`}>
                  <span className="qmark">&ldquo;</span>
                  <span className="stars">★★★★★</span>
                  <p>{t.text}</p>
                  <div className="who">
                    <span className="av">{t.av}</span>
                    <div>
                      <b>{t.name}</b>
                      <small>{t.role}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section className="cta section" id="enquiry">
          <div className="wrap">
            <div className="cta-grid">
              <div className="cta-copy">
                <span className="eyebrow reveal">Get a quote</span>
                <h2 className="display-l reveal d1">
                  Tell us what<br />to move.
                </h2>
                <p className="lead reveal d2">
                  Fill the form and we'll get back with a clear price, usually within the hour during working
                  times. Prefer to talk? Call or WhatsApp us directly.
                </p>
                <div className="cta-contacts reveal d3">
                  <a href={`tel:${PHONE_TEL}`}>
                    <span className="ic">
                      <PhoneIcon />
                    </span>
                    <div>
                      <b>{PHONE_DISPLAY}</b>
                      <small>Call us · Mon–Sat 8am–9pm</small>
                    </div>
                  </a>
                  <a href={`https://wa.me/${WA}`}>
                    <span className="ic">
                      <WhatsAppIcon />
                    </span>
                    <div>
                      <b>Chat on WhatsApp</b>
                      <small>Send your pickup &amp; drop details</small>
                    </div>
                  </a>
                  <a href={`mailto:${EMAIL}`}>
                    <span className="ic">
                      <MailIcon />
                    </span>
                    <div>
                      <b>{EMAIL}</b>
                      <small>Email for bulk &amp; contracts</small>
                    </div>
                  </a>
                </div>
              </div>

              <EnquiryForm waNumber={WA} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#top" className="logo">
                <span className="mark">S</span>
                <span className="name">
                  SUYOG<span>TRANSPORT</span>
                </span>
              </a>
              <p>
                Reliable goods carriers &amp; relocation across Navi Mumbai, Thane, Palghar and Pune. From a single
                tempo to full-truck loads.
              </p>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#services">Full Truck Load</a>
              <a href="#services">Part Load</a>
              <a href="#services">Packers &amp; Movers</a>
              <a href="#services">Industrial cargo</a>
              <a href="#services">Warehousing</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#fleet">Our fleet</a>
              <a href="#routes">Routes &amp; areas</a>
              <a href="#how">How it works</a>
              <a href="#why">Why choose us</a>
              <a href="#enquiry">Get a quote</a>
            </div>
            <div className="foot-col">
              <h4>Reach us</h4>
              <p className="ln">
                <PhoneIcon /> {PHONE_DISPLAY}
              </p>
              <p className="ln">
                <MailIcon /> {EMAIL}
              </p>
              <p className="ln">
                <PinIcon /> {ADDRESS}
              </p>
              <p className="ln">
                <ClockIcon /> Mon–Sat · 8:00am – 9:00pm
              </p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Suyog Transport. All rights reserved.</span>
            <div className="socials">
              <a href={`https://wa.me/${WA}`} aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={`tel:${PHONE_TEL}`} aria-label="Call">
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="floats">
        <a
          href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi Suyog Transport, I'd like a quote")}`}
          className="fab wa"
          aria-label="WhatsApp"
        >
          <span className="ripple" />
          <WhatsAppIcon />
        </a>
        <a href={`tel:${PHONE_TEL}`} className="fab call" aria-label="Call">
          <span className="ripple" />
          <PhoneIcon />
        </a>
      </div>
    </>
  );
}
