import { useEffect, useRef, useState, type ReactNode } from "react"

const WHATSAPP_NUMBER = "51932351857"
const WHATSAPP_MESSAGE =
  "Hola, quiero consultar por INKAPUR para tener 3 meses de agua limpia en mi tanque."

const faucetPhoto =
  "https://images.unsplash.com/photo-1716159015502-18c18461bd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200"
const tankPhoto =
  "https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200"

const benefits = [
  {
    icon: "sparkle",
    value: "100%",
    title: "Sarro eliminado",
    text: "Adiós a costras y manchas en las paredes de tu tanque.",
  },
  {
    icon: "shield",
    value: "99.9%",
    title: "Bacterias reducidas",
    text: "Agua segura, clara y sin malos olores para toda tu familia.",
  },
  {
    icon: "capsule",
    value: "Solo",
    title: "Se consume solo",
    text: "Las cápsulas de adentro se disuelven poco a poco. Tú no haces nada.",
  },
  {
    icon: "calendar",
    value: "90 días",
    title: "Sin preocupaciones",
    text: "Un solo tubo trabajando de forma continua durante tres meses.",
  },
]

const steps = [
  {
    number: "01",
    title: "Abre y coloca el tubo completo",
    text: "No saques las cápsulas. Pon todo el tubo, cerrado, directamente en el tanque.",
  },
  {
    number: "02",
    title: "Las cápsulas actúan solas",
    text: "Desde adentro se consumen poco a poco, liberando su protección en el agua.",
  },
  {
    number: "03",
    title: "Tres meses después, renueva",
    text: "Cuando el tubo se haya consumido por completo, coloca uno nuevo y listo.",
  },
]

const specs = [
  ["Marca", "INKAPUR"],
  ["Presentación", "Tubo sellado con 3 cápsulas en su interior"],
  ["Modo de uso", "Colocar el tubo completo y cerrado dentro del tanque"],
  ["Duración total", "3 meses (90 días) por tubo"],
  ["Mecanismo", "Las cápsulas se disuelven gradualmente desde el interior"],
  ["Capacidad recomendada", "Tanques de hasta 1500 litros"],
  ["Eliminación de sarro", "100%"],
  ["Reducción de bacterias", "99.9%"],
  ["Mantenimiento", "Ninguno. No abrir, no manipular"],
  ["Conservación", "Lugar fresco y seco"],
]

const testimonials = [
  {
    quote:
      "Lo puse entero en el tanque y listo. Se fue consumiendo solito y el agua siempre limpia. Tres meses sin hacer nada. ¡Perfecto!",
    name: "Elena",
    city: "Lima",
  },
  {
    quote:
      "No tienes que andar sacando ni cambiando nada. El tubo va completo y trabaja solo. Se nota que no hay sarro. Lo recomiendo.",
    name: "Pedro",
    city: "Trujillo",
  },
]

const faqs = [
  {
    question: "¿Tengo que abrir el tubo?",
    answer:
      "No. Colócalo entero y cerrado directamente en el tanque. Las cápsulas trabajan desde adentro.",
  },
  {
    question: "¿Cada cuánto se cambia?",
    answer:
      "Cada 3 meses (aproximadamente 90 días), cuando el tubo se haya consumido por completo.",
  },
  {
    question: "¿Sirve para cualquier tanque?",
    answer: "Está recomendado para tanques de hasta 1500 litros.",
  },
  {
    question: "¿Las cápsulas se sacan?",
    answer: "No. No se manipulan. El tubo va completo al agua.",
  },
  {
    question: "¿El agua es segura para beber?",
    answer: "Sí, siempre que INKAPUR se use siguiendo las instrucciones.",
  },
  {
    question: "¿Hay que vaciar el tanque?",
    answer: "No. Solo coloca el tubo completo en el agua y listo.",
  },
]

type IconName = "arrow" | "calendar" | "capsule" | "check" | "chevron" | "droplet" | "lock" | "package" | "shield" | "sparkle" | "truck"

function Icon({ name, size = 22 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    capsule: (
      <>
        <path
          d="m8.5 15.5 7-7a4.95 4.95 0 0 1 7 7l-7 7a4.95 4.95 0 0 1-7-7Z"
          transform="translate(-3.5 -3.5)"
        />
        <path d="m9 15 6-6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    droplet: <path d="M12 2S5 9.5 5 15a7 7 0 0 0 14 0c0-5.5-7-13-7-13Z" />,
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    package: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 8 9 5 9-5M12 13v9M3 8v9l9 5 9-5V8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z" />
        <path d="m5 14 .7 2.3L8 17.5l-2.3 1.2L5 21l-.7-2.3L2 17.5l2.3-1.2L5 14ZM19 2l.6 1.8 1.4.7-1.4.7L19 7l-.6-1.8-1.4-.7 1.4-.7L19 2Z" />
      </>
    ),
    truck: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`logo ${light ? "logo--light" : ""}`}
      href="#inicio"
      aria-label="INKAPUR, inicio"
    >
      <span className="logo__mark">
        <Icon name="droplet" size={18} />
      </span>
      <span>INKAPUR</span>
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ProductTube({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`product-scene ${compact ? "product-scene--compact" : ""}`}
      aria-hidden="true"
    >
      <span className="bubble bubble--one" />
      <span className="bubble bubble--two" />
      <span className="bubble bubble--three" />
      <div className="product-shadow" />
      <div className="tube">
        <div className="tube__cap">
          <span />
          <span />
          <span />
        </div>
        <div className="tube__body">
          <span className="tube__shine" />
          <span className="tube__brand">INKAPUR</span>
          <div className="capsules">
            <span />
            <span />
            <span />
          </div>
          <span className="tube__detail">90 DÍAS</span>
        </div>
        <div className="tube__base" />
      </div>
      <div className="water-ring water-ring--one" />
      <div className="water-ring water-ring--two" />
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.13 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function WhatsappButton({ className = "" }: { className?: string }) {
  const href = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : undefined

  if (href) {
    return (
      <a
        className={`button button--primary ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        Consultar por WhatsApp <Icon name="arrow" size={19} />
      </a>
    )
  }

  return (
    <button
      className={`button button--primary button--pending ${className}`}
      type="button"
      aria-describedby="whatsapp-pending"
      onClick={() => document.getElementById("whatsapp-pending")?.focus()}
    >
      Consultar por WhatsApp <Icon name="arrow" size={19} />
    </button>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)
  useReveal()

  const gallery = [
    {
      type: "product",
      label: "Presentación",
      title: "Un tubo. Tres cápsulas. 90 días.",
      text: "Diseñado para colocarse completo y cerrado dentro del tanque.",
    },
    {
      type: "tank",
      label: "En tu tanque",
      title: "Trabaja mientras tú sigues con tu día",
      text: "Representación del tubo INKAPUR sumergido en el agua.",
    },
    {
      type: "capsules",
      label: "Por dentro",
      title: "Protección gradual",
      text: "Las tres cápsulas se consumen poco a poco desde el interior.",
    },
    {
      type: "comparison",
      label: "El resultado",
      title: "De sarro acumulado a un tanque limpio",
      text: "Representación visual del resultado tras el ciclo de uso.",
    },
    {
      type: "faucet",
      label: "Agua clara",
      title: "Confianza en cada gota",
      text: "Agua limpia y sin malos olores para toda tu familia.",
    },
  ]

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return
    const timer = window.setInterval(
      () =>
        setTestimonialIndex((current) => (current + 1) % testimonials.length),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [paused])

  const changeGallery = (direction: number) => {
    setGalleryIndex(
      (current) => (current + direction + gallery.length) % gallery.length,
    )
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#producto">El producto</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#galeria">Galería</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-cta" href="#comprar">
            Quiero INKAPUR <Icon name="arrow" size={17} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="hero__pill">
                <Icon name="droplet" size={16} />
                Para tanques de hasta 1500 litros
              </div>
              <h1>
                Ponlo y olvídalo: <span>3 meses de agua limpia</span>
              </h1>
              <p className="hero__lead">
                Elimina el <strong>100% del sarro</strong> y el{" "}
                <strong>99.9% de las bacterias</strong>. Coloca el tubo completo
                en el agua y deja que sus cápsulas trabajen solas.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#comprar">
                  Comprar ahora <Icon name="arrow" size={19} />
                </a>
                <a className="button button--secondary" href="#como-funciona">
                  Ver cómo funciona
                </a>
              </div>
              <div className="hero__proof" aria-label="Resultados principales">
                <div>
                  <strong>100%</strong>
                  <span>del sarro</span>
                </div>
                <div>
                  <strong>99.9%</strong>
                  <span>de bacterias</span>
                </div>
                <div>
                  <strong>90</strong>
                  <span>días de acción</span>
                </div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__badge hero__badge--top">
                <span className="status-dot" /> Actúa 24/7
              </div>
              <ProductTube />
              <div className="hero__badge hero__badge--bottom">
                <Icon name="check" size={17} />
                Sin mantenimiento
              </div>
            </div>
          </div>
          <div className="hero__wave" />
        </section>

        <section className="section benefits" id="producto">
          <div className="container">
            <SectionHeading
              eyebrow="Protección simple y continua"
              title="¿Por qué elegir INKAPUR?"
              text="Un sistema pensado para cuidar el agua de tu hogar sin rutinas complicadas ni mantenimiento."
            />
            <div className="benefits__grid">
              {benefits.map((benefit, index) => (
                <article
                  className="benefit-card"
                  data-reveal
                  key={benefit.title}
                  style={
                    { "--delay": `${index * 90}ms` } as React.CSSProperties
                  }
                >
                  <div className="benefit-card__icon">
                    <Icon name={benefit.icon as IconName} />
                  </div>
                  <strong className="benefit-card__value">
                    {benefit.value}
                  </strong>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="como-funciona">
          <div className="container process__grid">
            <div className="process__visual" data-reveal>
              <div className="process__visual-card">
                <span className="process__label">Así trabaja INKAPUR</span>
                <ProductTube compact />
                <div
                  className="process__timeline"
                  aria-label="Progreso de 90 días"
                >
                  {["Día 1", "Mes 1", "Mes 2", "Mes 3"].map((label, index) => (
                    <div className="process__time" key={label}>
                      <span className={index === 3 ? "is-final" : ""} />
                      <small>{label}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="process__content">
              <SectionHeading
                eyebrow="Cómo funciona"
                title="Así de simple"
                text="Tres pasos y ninguna tarea diaria. INKAPUR hace el trabajo por ti."
              />
              <div className="steps">
                {steps.map((step) => (
                  <article className="step" data-reveal key={step.number}>
                    <span className="step__number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="process__notice">
                <Icon name="shield" size={24} />
                <p>
                  <strong>No manipules las cápsulas.</strong> El tubo va entero
                  al agua y trabaja 3 meses seguidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section specs" id="ficha-tecnica">
          <div className="container">
            <div className="specs__heading">
              <SectionHeading
                eyebrow="Ficha técnica"
                title="Todo sobre INKAPUR"
                text="Información clara para usar tu purificador correctamente desde el primer día."
              />
              <div className="specs__numbers" aria-label="Datos clave">
                <div>
                  <strong>1500 L</strong>
                  <span>capacidad máxima</span>
                </div>
                <div>
                  <strong>3 meses</strong>
                  <span>por cada tubo</span>
                </div>
              </div>
            </div>
            <div className="specs__table" data-reveal>
              {specs.map(([label, value]) => (
                <div className="spec-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="galeria">
          <div className="container">
            <div className="gallery-section__header">
              <SectionHeading
                eyebrow="Conócelo de cerca"
                title="INKAPUR en tu tanque"
                text="Una solución pequeña que trabaja todos los días para darte tranquilidad."
              />
              <div className="gallery__arrows">
                <button
                  type="button"
                  onClick={() => changeGallery(-1)}
                  aria-label="Imagen anterior"
                >
                  <Icon name="chevron" size={21} />
                </button>
                <button
                  type="button"
                  onClick={() => changeGallery(1)}
                  aria-label="Imagen siguiente"
                >
                  <Icon name="chevron" size={21} />
                </button>
              </div>
            </div>
            <div className="gallery">
              <div
                className={`gallery__media gallery__media--${gallery[galleryIndex].type}`}
              >
                {gallery[galleryIndex].type === "product" && (
                  <ProductTube compact />
                )}
                {gallery[galleryIndex].type === "tank" && (
                  <>
                    <img
                      src={tankPhoto}
                      alt="Tanques azules de almacenamiento de agua"
                    />
                    <div className="gallery__floating-tube">
                      <ProductTube compact />
                    </div>
                  </>
                )}
                {gallery[galleryIndex].type === "capsules" && (
                  <div
                    className="capsule-detail"
                    aria-label="Representación de tres cápsulas INKAPUR"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                {gallery[galleryIndex].type === "comparison" && (
                  <div className="comparison">
                    <div className="comparison__before">
                      <span>Antes</span>
                    </div>
                    <div className="comparison__after">
                      <span>Después</span>
                    </div>
                  </div>
                )}
                {gallery[galleryIndex].type === "faucet" && (
                  <img src={faucetPhoto} alt="Grifo de agua en primer plano" />
                )}
                <div className="gallery__caption">
                  <span>{gallery[galleryIndex].label}</span>
                  <h3>{gallery[galleryIndex].title}</h3>
                  <p>{gallery[galleryIndex].text}</p>
                </div>
              </div>
              <div
                className="gallery__dots"
                role="tablist"
                aria-label="Seleccionar imagen"
              >
                {gallery.map((item, index) => (
                  <button
                    type="button"
                    aria-label={`Ver ${item.label}`}
                    aria-selected={galleryIndex === index}
                    className={galleryIndex === index ? "is-active" : ""}
                    key={item.label}
                    onClick={() => setGalleryIndex(index)}
                    role="tab"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container testimonials__grid">
            <SectionHeading
              eyebrow="Historias reales"
              title="Familias que ya lo tienen"
              text="Menos tiempo pensando en el tanque. Más tranquilidad disfrutando del agua."
            />
            <div
              className="testimonial-card"
              data-reveal
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setPaused(false)
              }}
              ref={testimonialRef}
            >
              <div className="testimonial-card__quote">“</div>
              <blockquote key={testimonialIndex}>
                {testimonials[testimonialIndex].quote}
              </blockquote>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__person">
                  <span>{testimonials[testimonialIndex].name.charAt(0)}</span>
                  <div>
                    <strong>{testimonials[testimonialIndex].name}</strong>
                    <small>{testimonials[testimonialIndex].city}, Perú</small>
                  </div>
                </div>
                <div className="testimonial-card__controls">
                  {testimonials.map((testimonial, index) => (
                    <button
                      aria-label={`Ver testimonio de ${testimonial.name}`}
                      className={testimonialIndex === index ? "is-active" : ""}
                      key={testimonial.name}
                      onClick={() => setTestimonialIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="purchase" id="comprar">
          <div className="purchase__orb purchase__orb--one" />
          <div className="purchase__orb purchase__orb--two" />
          <div className="container purchase__grid">
            <div className="purchase__content" data-reveal>
              <span className="eyebrow eyebrow--light">
                Da el siguiente paso
              </span>
              <h2>Tu agua limpia por 3 meses, sin esfuerzo</h2>
              <p>
                Un tubo INKAPUR. Tres cápsulas en su interior. Noventa días de
                protección continua para tanques de hasta 1500 litros.
              </p>
              <div className="purchase__checks">
                {[
                  "Se coloca completo",
                  "No necesita mantenimiento",
                  "Envíos a todo el Perú",
                ].map((item) => (
                  <span key={item}>
                    <Icon name="check" size={16} /> {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="purchase-card" data-reveal>
              <div className="purchase-card__top">
                <span>INKAPUR ORIGINAL</span>
                <span className="purchase-card__stock">
                  <i /> Disponible
                </span>
              </div>
              <h3>Protección por 90 días</h3>
              <p className="purchase-card__price">Consulta el precio</p>
              <p className="purchase-card__detail">
                1 tubo INKAPUR · 3 cápsulas · hasta 1500 L
              </p>
              <div className="purchase-card__offer">
                <Icon name="package" size={21} />
                <span>
                  <strong>¿Necesitas más?</strong> Consulta por 2 tubos y accede
                  al descuento especial.
                </span>
              </div>
              <WhatsappButton />
              <p
                id="whatsapp-pending"
                className="purchase-card__pending"
                tabIndex={-1}
              >
                Número de atención por confirmar
              </p>
              <div className="purchase-card__trust">
                <span>
                  <Icon name="lock" size={17} /> Pago seguro
                </span>
                <span>
                  <Icon name="truck" size={18} /> Envío nacional
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <div className="container faq__grid">
            <div>
              <SectionHeading
                eyebrow="Preguntas frecuentes"
                title="Dudas comunes"
                text="Todo lo que necesitas saber antes de colocar INKAPUR en tu tanque."
              />
              <div className="faq__support">
                <div className="faq__support-icon">
                  <Icon name="droplet" size={25} />
                </div>
                <p>
                  <strong>¿Aún tienes una pregunta?</strong>
                  <br />
                  Nuestro canal de atención estará disponible pronto.
                </p>
              </div>
            </div>
            <div className="faq__list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <article
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <i>
                        <Icon name="chevron" size={19} />
                      </i>
                    </button>
                    <div className="faq-item__answer" id={`faq-panel-${index}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <Logo light />
              <p>Ponlo y olvídalo. Agua limpia durante 3 meses.</p>
            </div>
            <nav
              className="footer__nav"
              aria-label="Navegación de pie de página"
            >
              <strong>Explora</strong>
              <a href="#inicio">Inicio</a>
              <a href="#producto">El producto</a>
              <a href="#como-funciona">Cómo funciona</a>
              <a href="#comprar">Comprar</a>
            </nav>
            <div className="footer__contact">
              <strong>Contacto</strong>
              <p>WhatsApp y redes sociales</p>
              <span>Datos por confirmar</span>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 INKAPUR — Todos los derechos reservados</span>
            <span>Diseñado para hogares que buscan tranquilidad.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
