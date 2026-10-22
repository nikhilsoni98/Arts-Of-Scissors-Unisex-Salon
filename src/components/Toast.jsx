import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div id="toast-notification" className={message ? 'show' : ''} aria-live="polite">
      <Check size={16} color="var(--gold-primary)" />
      <span>{message}</span>
    </div>
  );
}
