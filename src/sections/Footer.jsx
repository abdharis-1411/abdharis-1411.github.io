import { useState } from 'react';

const socials = [
  { name: 'linkedin', href: 'https://www.linkedin.com/in/abdullah-haris-39a7b0231', icon: '/assets/linkedin.svg' },
  { name: 'instagram', href: 'https://instagram.com/abd_haris1', icon: '/assets/instagram.svg' },
  { name: 'github', href: 'https://github.com/abdharis-1411', icon: '/assets/github.svg' },
  { name: 'twitter', href: 'https://x.com/AbdAdnan1411', icon: '/assets/twitter.svg' },
  // Discord has no username-based profile URL -> click copies the username
  { name: 'discord', copy: 'risyab23', icon: '/assets/discord.svg' },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      /* clipboard may be blocked; title tooltip still shows the handle */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms &amp; Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex items-center gap-3">
        {socials.map((s) =>
          s.href ? (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="social-icon">
              <img src={s.icon} alt={s.name} className="w-1/2 h-1/2" />
            </a>
          ) : (
            <button
              key={s.name}
              type="button"
              onClick={() => handleCopy(s.copy)}
              aria-label={`Discord: ${s.copy}`}
              title={`Discord: ${s.copy} (click to copy)`}
              className="social-icon">
              <img src={s.icon} alt={s.name} className="w-1/2 h-1/2" />
            </button>
          ),
        )}
        {copied && <span className="text-white-500 text-sm">Copied: risyab23</span>}
      </div>

      <p className="text-white-500">© 2026 Abdullah Haris. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
