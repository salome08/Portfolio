import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  CreditCard,
  MonitorSmartphone,
  Sparkles,
  MapPin,
  ArrowRight,
  Check,
  Quote,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { links } from '../content';
import { useLang } from '../i18n';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';
const card = 'rounded-xl bg-gray-900/70 border border-white/5 backdrop-blur-sm';

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...reveal} className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-gray-200">{children}</span>;
}

export function Nav() {
  const { c, lang, setLang } = useLang();
  const items: [string, string][] = [
    [c.ui.nav.services, '#services'],
    [c.ui.nav.work, '#work'],
    [c.ui.nav.stack, '#stack'],
    [c.ui.nav.contact, '#contact'],
  ];
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5" aria-label="Main">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <a href="#top" className={`font-semibold text-white rounded ${focusRing}`}>
            {c.profile.name}
          </a>
          <div className="flex items-center gap-4 text-sm">
            {items.map(([label, href]) => (
              <a key={href} href={href} className={`hidden md:inline text-gray-300 hover:text-white transition-colors rounded ${focusRing}`}>
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              title={c.ui.switchTo}
              className={`px-2 py-1 rounded-md border border-white/15 text-gray-200 hover:bg-white/10 font-medium ${focusRing}`}
            >
              {lang === 'en' ? 'FR' : 'EN'}
              <span className="sr-only"> · {c.ui.switchTo}</span>
            </button>
            <a
              href="#contact"
              className={`px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors whitespace-nowrap ${focusRing}`}
            >
              {c.ui.nav.hire}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export function Hero() {
  const { c } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 pt-20 pb-12">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse" aria-hidden="true" />
            {c.profile.availability}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            {c.profile.name}
            <span className="block text-2xl md:text-3xl font-semibold text-blue-300 mt-3">{c.profile.role}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">{c.profile.headline}</p>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">{c.profile.pitch}</p>
          <p className="flex items-center gap-2 text-gray-400 mb-8">
            <MapPin className="w-4 h-4" aria-hidden="true" /> {c.profile.location}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors ${focusRing}`}
            >
              {c.ui.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            {links.malt && (
              <a
                href={links.malt}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-medium transition-colors ${focusRing}`}
              >
                {c.ui.malt}
              </a>
            )}
            <div className="flex items-center gap-4 ml-2">
              <SocialLink href={links.github} label="GitHub" icon={<Github />} />
              <SocialLink href={links.linkedin} label="LinkedIn" icon={<Linkedin />} />
              <SocialLink href={`mailto:${links.email}`} label="Email" icon={<Mail />} />
            </div>
          </div>
        </motion.div>
        <motion.img
          src={links.photo}
          alt={`${c.ui.portrait} ${c.profile.name}`}
          width={240}
          height={240}
          fetchPriority="high"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-blue-900/40 order-first md:order-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>
    </section>
  );
}

export function Facts() {
  const { c } = useLang();
  return (
    <section className="px-4 pb-8" aria-label="Key facts">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {c.facts.map((f) => (
          <motion.div {...reveal} key={f.value} className={`${card} p-5 text-center`}>
            <p className="text-xl md:text-2xl font-bold text-white">{f.value}</p>
            <p className="text-sm text-gray-400 mt-1">{f.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  card: <CreditCard className="w-6 h-6" aria-hidden="true" />,
  devices: <MonitorSmartphone className="w-6 h-6" aria-hidden="true" />,
  sparkles: <Sparkles className="w-6 h-6" aria-hidden="true" />,
};

export function Services() {
  const { c } = useLang();
  return (
    <section id="services" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow={c.ui.servicesEyebrow} title={c.ui.servicesTitle} />
        <div className="grid md:grid-cols-3 gap-6">
          {c.services.map((s, i) => (
            <motion.div {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} key={s.icon} className={`${card} p-6`}>
              <div className="inline-flex p-2 mb-4 rounded-lg bg-blue-500/10 text-blue-400">{serviceIcons[s.icon]}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-300">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const { c } = useLang();
  return (
    <section id="work" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow={c.ui.workEyebrow} title={c.ui.workTitle} />
        <div className="grid lg:grid-cols-3 gap-6">
          {c.caseStudies.map((cs, i) => (
            <motion.article {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} key={cs.client} className={`flex flex-col ${card} p-6`}>
              <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">{cs.type}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{cs.client}</h3>
              <p className="text-gray-400 mb-5">{cs.context}</p>
              <p className="text-sm font-semibold text-gray-200 mb-3">{c.ui.delivered}</p>
              <ul className="space-y-2 mb-6">
                {cs.delivered.map((d) => (
                  <li key={d} className="flex gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {cs.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {cs.link && (
                <a
                  href={cs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 mt-5 text-sm text-blue-300 hover:text-blue-200 rounded ${focusRing}`}
                >
                  {c.ui.seeProduct} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mt-20 mb-6">{c.ui.sideProjects}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {c.sideProjects.map((p) => (
            <motion.a
              {...reveal}
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group grid grid-cols-[110px_1fr] sm:grid-cols-[160px_1fr] ${card} overflow-hidden hover:border-blue-500/40 transition-colors ${focusRing}`}
            >
              <img src={p.image} alt="" loading="lazy" decoding="async" className="w-full h-full max-h-56 object-cover object-top" />
              <div className="p-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                  {p.title}
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-300" aria-hidden="true" />
                </h4>
                <p className="text-sm text-gray-300 mb-4">{p.text}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { c } = useLang();
  if (c.testimonials.length === 0) return null;
  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow={c.ui.testimonialsEyebrow} title={c.ui.testimonialsTitle} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.testimonials.map((t) => (
            <motion.figure {...reveal} key={t.name} className={`${card} p-6`}>
              <Quote className="w-6 h-6 text-blue-400 mb-4" aria-hidden="true" />
              <blockquote className="text-gray-200 mb-5">{t.quote}</blockquote>
              <figcaption className="text-sm">
                <span className="text-white font-semibold">{t.name}</span>
                <span className="block text-gray-400">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { c } = useLang();
  return (
    <section id="stack" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow={c.ui.stackEyebrow} title={c.ui.stackTitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {c.stack.map((g) => (
            <motion.div {...reveal} key={g.group} className={`${card} p-5`}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{g.group}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { c } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all';

  return (
    <section id="contact" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow={c.ui.contactEyebrow} title={c.ui.contactTitle} />
        <motion.p {...reveal} className="text-gray-300 text-center mb-10">
          {c.ui.contactIntro}
          <br />
          {c.ui.contactEmail}{' '}
          <a href={`mailto:${links.email}`} className="text-blue-300 hover:text-blue-200 underline">
            {links.email}
          </a>
          {links.malt && (
            <>
              {' '}
              <a href={links.malt} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">
                {c.ui.contactMalt}
              </a>
            </>
          )}
          .
        </motion.p>
        <motion.form {...reveal} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                {c.ui.name}
              </label>
              <input type="text" id="from_name" name="from_name" autoComplete="name" required className={inputClass} placeholder={c.ui.namePh} />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
                {c.ui.email}
              </label>
              <input type="email" id="reply_to" name="reply_to" autoComplete="email" required className={inputClass} placeholder={c.ui.emailPh} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              {c.ui.project}
            </label>
            <textarea id="message" name="message" required rows={6} className={`${inputClass} resize-none`} placeholder={c.ui.projectPh} />
          </div>

          <div aria-live="polite">
            {submitStatus === 'success' && (
              <div className="px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm">{c.ui.sent}</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">
                  {c.ui.failed} {links.email}.
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${focusRing}`}
          >
            <span>{isSubmitting ? c.ui.sending : c.ui.send}</span>
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  const { c } = useLang();
  return (
    <footer className="relative z-10 px-4 py-10 border-t border-white/5 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} {c.profile.name} · {c.ui.footer} · {c.profile.location}
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`text-gray-300 hover:text-white transition-colors rounded ${focusRing}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
