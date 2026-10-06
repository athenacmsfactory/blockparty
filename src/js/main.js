/**
 * Blockparty — main entry
 */
import '../styles/main.css';
import { initHeader } from './site-header.js';
import { initCardDeck } from './card-deck.js';
import { initAccordion } from './accordion.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCardDeck();
  initAccordion();
});
