"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site-contact";

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (!open || closing) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
      closeTimer.current = null;
    }, 220);
  }, [closing, open]);

  useEffect(() => {
    const openFromNav = () => openModal();
    window.addEventListener("open-contact-modal", openFromNav);
    return () => window.removeEventListener("open-contact-modal", openFromNav);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [closeModal, open]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <footer id="contact" className="folio-contact folio-gutter">
      <div className="folio-section-top"><span>Have something in mind?</span><span>Start a conversation</span></div>
      <button type="button" onClick={openModal} className="folio-contact-title">Contact<ArrowUpRight aria-hidden="true" /></button>
      <div className="folio-footer-line"><p>© {new Date().getFullYear()} Eugenio Bellini</p><div><a href="https://instagram.com/euxeney" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://github.com/pastapomodoro" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="#home">Back to top ↑</a></div></div>
      {open ? (
        <div className={`contact-modal-backdrop${closing ? " is-closing" : ""}`} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button type="button" className="contact-modal-close" onClick={closeModal} aria-label="Close contact popup"><X size={17} /></button>
            <p id="contact-modal-title" className="contact-modal-kicker">Contact</p>
            <div className="contact-modal-links">
              <a href={CONTACT_MAILTO}><span>Email</span><span>eugenio.bellini@yahoo.it <ArrowUpRight size={16} /></span></a>
              <a href="https://instagram.com/euxeney" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>@euxeney <ArrowUpRight size={16} /></span></a>
            </div>
          </section>
        </div>
      ) : null}
    </footer>
  );
}
