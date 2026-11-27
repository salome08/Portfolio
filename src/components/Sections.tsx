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
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profile, services, caseStudies, sideProjects, stack, facts } from '../content';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <motion.div {...reveal} className="mb-12 text-center" id={id}>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-gray-200">{children}</span>
  );
}

export function Nav() {
  const links = [
    ['Services', '#services'],
    ['Work', '#work'],
    ['Stack', '#stack'],
    ['Contact', '#contact'],
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold text-white">
          {profile.name}
        </a>
        <div className="flex items-center gap-5 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hidden sm:inline text-gray-300 hover:text-white transition-colors">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 pt-20 pb-12">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {profile.availability}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            {profile.name}
            <span className="block text-2xl md:text-3xl font-semibold text-blue-300 mt-3">{profile.role}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">{profile.headline}</p>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">{profile.pitch}</p>
          <p className="flex items-center gap-2 text-gray-400 mb-8">
            <MapPin className="w-4 h-4" /> {profile.location}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Discuss your project <ArrowRight className="w-4 h-4" />
            </a>
            {profile.links.malt && (
              <a
                href={profile.links.malt}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-medium transition-colors"
              >
                Hire me on Malt
              </a>
            )}
            <div className="flex items-center gap-4 ml-2">
              <SocialLink href={profile.links.github} label="GitHub" icon={<Github />} />
              <SocialLink href={profile.links.linkedin} label="LinkedIn" icon={<Linkedin />} />
              <SocialLink href={`mailto:${profile.email}`} label="Email" icon={<Mail />} />
            </div>
          </div>
        </motion.div>
        <motion.img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={240}
          height={240}
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
  return (
    <section className="px-4 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {facts.map((f) => (
          <motion.div {...reveal} key={f.value} className="rounded-xl bg-gray-900/60 border border-white/5 p-5 text-center">
            <p className="text-xl md:text-2xl font-bold text-white">{f.value}</p>
            <p className="text-sm text-gray-400 mt-1">{f.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const serviceIcons = {
  card: <CreditCard className="w-6 h-6" />,
  devices: <MonitorSmartphone className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
};

export function Services() {
  return (
    <section id="services" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="What I do" title="How I can help your team" />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={s.title}
              className="rounded-xl bg-gray-900/60 border border-white/5 p-6"
            >
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
  return (
    <section id="work" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Selected work" title="Recent missions" />
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.article
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={c.client}
              className="flex flex-col rounded-xl bg-gray-900/60 border border-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-wider text-blue-400 mb-2">{c.type}</p>
              <h3 className="text-2xl font-bold text-white mb-3">{c.client}</h3>
              <p className="text-gray-400 mb-5">{c.context}</p>
              <p className="text-sm font-semibold text-gray-200 mb-3">What I delivered</p>
              <ul className="space-y-2 mb-6">
                {c.delivered.map((d) => (
                  <li key={d} className="flex gap-2 text-gray-300 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-5 text-sm text-blue-300 hover:text-blue-200"
                >
                  See the product <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mt-20 mb-6">Side projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((p) => (
            <motion.a
              {...reveal}
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] rounded-xl bg-gray-900/60 border border-white/5 overflow-hidden hover:border-blue-500/40 transition-colors"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full max-h-56 object-cover object-top"
              />
              <div className="p-5">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                  {p.title}
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-300" />
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

export function Stack() {
  return (
    <section id="stack" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Toolbox" title="Tech I work with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stack.map((g) => (
            <motion.div {...reveal} key={g.group} className="rounded-xl bg-gray-900/60 border border-white/5 p-5">
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
    'w-full px-4 py-3 bg-gray-900/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all';

  return (
    <section id="contact" className="px-4 py-24 scroll-mt-14">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="Contact" title="Let's talk about your project" />
        <motion.p {...reveal} className="text-gray-300 text-center mb-10">
          Tell me what you are building and where you need help. I reply within 24 hours, and a first call is free.
          <br />
          You can also email me at{' '}
          <a href={`mailto:${profile.email}`} className="text-blue-300 hover:text-blue-200 underline">
            {profile.email}
          </a>
          {profile.links.malt && (
            <>
              {' '}or{' '}
              <a href={profile.links.malt} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">
                book me on Malt
              </a>
            </>
          )}
          .
        </motion.p>
        <motion.form {...reveal} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input type="text" id="from_name" name="from_name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input type="email" id="reply_to" name="reply_to" required className={inputClass} placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Your project
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={`${inputClass} resize-none`}
              placeholder="What are you building, what stack, and when would you like to start?"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-sm">Message sent. I'll get back to you within 24 hours.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">
                The message could not be sent. Please email me directly at {profile.email}.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-white/5 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} {profile.name} · Freelance Senior Fullstack Engineer · {profile.location}
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-300 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
