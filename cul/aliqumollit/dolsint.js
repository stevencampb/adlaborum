   // Initialize the carousel
   const embla = EmblaCarousel(viewportNode);
   // Add click listeners
   prevButtonNode.addEventListener('click', embla.scrollPrev, false);
   nextButtonNode.addEventListener('click', embla.scrollNext, false);
   