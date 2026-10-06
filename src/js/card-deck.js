/**
 * Card Deck — stacked card shuffle with drag/swipe support
 */
export function initCardDeck() {
  const stack = document.querySelector('.card-deck__stack');
  const shuffleBtn = document.querySelector('.card-deck__shuffle');
  if (!stack) return;

  const cards = Array.from(stack.querySelectorAll('.card-deck__card'));
  const total = cards.length;
  let order = cards.map((_, i) => i);
  let isAnimating = false;

  function updateStack() {
    order.forEach((cardIndex, stackPos) => {
      const card = cards[cardIndex];
      const isOdd = stackPos % 2 !== 0;
      const rot = stackPos === 0 ? 0 : isOdd ? 2.5 : -2.5;
      const offsetX = stackPos * 4;
      const offsetY = stackPos * 4;
      const scale = 1 - stackPos * 0.025;
      const opacity = stackPos < 5 ? 1 : 0;

      card.style.zIndex = total - stackPos;
      card.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rot}deg)`;
      card.style.opacity = opacity;
      card.style.pointerEvents = stackPos === 0 ? 'auto' : 'none';
      card.classList.remove('is-swiping-out');
    });
  }

  function shuffle() {
    if (isAnimating) return;
    isAnimating = true;

    const topCardIndex = order[0];
    const topCard = cards[topCardIndex];

    // Animate out
    topCard.classList.add('is-swiping-out');
    topCard.style.transform = 'translateX(120%) rotate(18deg)';
    topCard.style.opacity = '0';

    setTimeout(() => {
      // Move to back
      order.push(order.shift());
      updateStack();
      isAnimating = false;
    }, 400);
  }

  // Shuffle button
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', shuffle);
  }

  // Pointer drag on top card
  let dragState = null;

  stack.addEventListener('pointerdown', (e) => {
    if (isAnimating) return;
    const topCard = cards[order[0]];
    if (!topCard.contains(e.target)) return;

    topCard.setPointerCapture(e.pointerId);
    topCard.style.transition = 'none';

    dragState = {
      card: topCard,
      startX: e.clientX,
      startY: e.clientY,
      currentX: 0,
    };

    e.preventDefault();
  });

  stack.addEventListener('pointermove', (e) => {
    if (!dragState) return;
    dragState.currentX = e.clientX - dragState.startX;
    const rotation = dragState.currentX * 0.08;
    dragState.card.style.transform = `translateX(${dragState.currentX}px) rotate(${rotation}deg)`;
  });

  stack.addEventListener('pointerup', (e) => {
    if (!dragState) return;
    const dx = dragState.currentX;
    const card = dragState.card;
    card.style.transition = '';
    dragState = null;

    if (Math.abs(dx) > 100) {
      // Swipe out
      isAnimating = true;
      card.classList.add('is-swiping-out');
      const direction = dx > 0 ? 1 : -1;
      card.style.transform = `translateX(${direction * 120}%) rotate(${direction * 18}deg)`;
      card.style.opacity = '0';

      setTimeout(() => {
        order.push(order.shift());
        updateStack();
        isAnimating = false;
      }, 400);
    } else {
      // Spring back
      updateStack();
    }
  });

  stack.addEventListener('pointercancel', () => {
    if (dragState) {
      dragState = null;
      updateStack();
    }
  });

  // Initial layout
  updateStack();
}
