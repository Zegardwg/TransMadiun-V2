document.addEventListener("scroll", () => {
  const path = document.querySelector("#racing-path");
  const beam = document.querySelector("#beam");

  const pathLength = path.getTotalLength();

  const scrollTop = document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / documentHeight;

  const drawLength = pathLength * scrollFraction;

  beam.setAttribute("stroke-dasharray", `${drawLength},${pathLength}`);
});

window.addEventListener('scroll', () => {
  const timelineRect = timeline.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculate height of the beam based on scroll position
  if (timelineRect.top < window.innerHeight && timelineRect.bottom > 0) {
    const beamHeight = Math.min(
      Math.max(0, window.innerHeight - timelineRect.top),
      timelineRect.height
    );
    timelineBeam.style.height = `${beamHeight}px`;
  }
});