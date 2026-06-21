'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Meno, e-mail a správa sú povinné polia.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Nastala chyba pri odosielaní správy.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Nepodarilo sa spojiť so serverom. Skontrolujte prosím internetové pripojenie.');
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm border border-black/10">
      <h2 className="font-heading text-2xl font-bold text-brown mb-6">Napíšte nám</h2>

      {status === 'success' && (
        <div className="rounded-md bg-green-50 p-4 border border-green-200 text-green-800 text-sm mb-6">
          <p className="font-semibold">Správa bola úspešne odoslaná!</p>
          <p className="mt-1">Čoskoro vás budeme kontaktovať.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 text-xs underline font-semibold text-green-700 hover:text-green-900"
          >
            Poslať ďalšiu správu
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-50 p-4 border border-red-200 text-red-800 text-sm mb-6">
          <p className="font-semibold">Odoslanie zlyhalo</p>
          <p className="mt-1">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
            Meno a priezvisko *
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'loading'}
            className="w-full rounded-md border border-black/15 bg-[#fafaf8] px-3 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
            placeholder="Napr. Ján Kováč"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
            E-mailová adresa *
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="w-full rounded-md border border-black/15 bg-[#fafaf8] px-3 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
            placeholder="jan.kovac@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
            Telefónne číslo
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={status === 'loading'}
            className="w-full rounded-md border border-black/15 bg-[#fafaf8] px-3 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
            placeholder="Napr. +421 900 123 456"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
            Vaša správa *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === 'loading'}
            className="w-full rounded-md border border-black/15 bg-[#fafaf8] px-3 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors resize-y"
            placeholder="Napíšte nám, čo potrebujete vyriešiť..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full text-center py-3 text-sm font-semibold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {status === 'loading' ? 'Odosiela sa...' : 'Odoslať správu'}
        </button>
      </form>
    </div>
  );
}
