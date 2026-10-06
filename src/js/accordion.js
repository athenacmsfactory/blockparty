/**
 * Accordion — toggle with grid-row transition
 */
export function initAccordion() {
  const items = document.querySelectorAll('.accordion__item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const panel = item.querySelector('.accordion__panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';

      // Close all others (exclusive mode)
      items.forEach(other => {
        if (other !== item) {
          other.setAttribute('data-open', 'false');
          const otherTrigger = other.querySelector('.accordion__trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanel = other.querySelector('.accordion__panel');
          if (otherPanel) otherPanel.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle current
      item.setAttribute('data-open', String(!isOpen));
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.setAttribute('aria-hidden', String(isOpen));
    });
  });
}
