import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal, .reveal-fade-up, .reveal-scale-in, .reveal-stagger"
      );
      elements.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add("is-revealed");
        } else if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Re-observe if DOM mutates (e.g. content loads dynamically)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
