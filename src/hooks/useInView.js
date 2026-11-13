import { useEffect, useRef, useState } from 'react';

// Returns [ref, inView]. Attach ref to a wrapper; inView flips true when it
// (or an area `rootMargin` around it) enters the viewport. Used to pause
// off-screen WebGL canvases (frameloop) and lazy-mount heavy 3D so only the
// scene the user is actually looking at keeps rendering.
export default function useInView({ rootMargin = '250px', threshold = 0.01 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true); // no observer support -> always render (safe fallback)
      return undefined;
    }
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin,
      threshold,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView];
}
