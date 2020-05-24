/**
 *
 * t = current time
 * b = start value
 * c = change in value
 * d = duration
 */
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const smoothScroll = ({ targetId, targetEl, targetElPosition, duration }) => {
  const target = document.getElementById(targetId) || targetEl;
  const targetPosition =
    targetElPosition != null
      ? targetElPosition
      : target.getClientRects()[0].top;
  console.log({ targetPosition });
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  let hasScrolled = false;

  const mousewheelScrolling = () => {
    hasScrolled = true;
  };

  window.addEventListener("mousewheel", mousewheelScrolling);

  const animation = currentTime => {
    if (hasScrolled) {
      window.removeEventListener("mousewheel", mousewheelScrolling);
      return;
    }

    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const resultY = easeInOutQuad(
      timeElapsed,
      startPosition,
      targetPosition,
      duration
    );
    window.scrollTo(0, resultY);
    if (timeElapsed < duration) window.requestAnimationFrame(animation);
  };

  window.requestAnimationFrame(animation);
};
