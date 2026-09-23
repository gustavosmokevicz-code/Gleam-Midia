import { useEffect } from "react";

/**
 * Removes the "Edit with Base44" badge from the DOM, including elements
 * added after load, inside iframes, or inside shadow roots.
 */
export default function Base44BadgeRemover() {
  useEffect(() => {
    const SELECTORS = [
      "[id*='base44-badge']",
      "[class*='base44-badge']",
      "[id*='base44'][class*='badge']",
      "[class*='base44'][class*='badge']",
      "[id*='badge'][id*='base44']",
      "[class*='badge'][class*='base44']",
    ];

    const matchesBadge = (el) => {
      if (!el || el.nodeType !== 1) return false;
      const id = (el.id || "").toLowerCase();
      const cls = (el.className || "").toString().toLowerCase();
      if (id.includes("base44") && id.includes("badge")) return true;
      if (cls.includes("base44") && cls.includes("badge")) return true;
      if (id.includes("base44-badge") || cls.includes("base44-badge")) return true;
      // text-based match for "Edit with Base44"
      const text = (el.textContent || "").trim();
      if (text && text.length < 200 && /edit with base44/i.test(text)) return true;
      return false;
    };

    const purge = (el) => {
      if (!el || el.nodeType !== 1) return;
      // direct match
      if (matchesBadge(el)) {
        el.remove();
        return;
      }
      // descendants
      try {
        el.querySelectorAll?.(SELECTORS.join(",")).forEach((n) => n.remove());
      } catch (e) {
        /* ignore */
      }
      // shadow roots
      if (el.shadowRoot) {
        try {
          el.shadowRoot.querySelectorAll(SELECTORS.join(",")).forEach((n) => n.remove());
        } catch (e) {
          /* ignore */
        }
      }
    };

    const scanAll = (root = document.body) => {
      purge(root);
      // iframes
      try {
        document.querySelectorAll("iframe").forEach((frame) => {
          try {
            const doc = frame.contentDocument;
            if (doc && doc.body) purge(doc.body);
          } catch (e) {
            /* cross-origin: ignore */
          }
        });
      } catch (e) {
        /* ignore */
      }
    };

    // initial pass
    scanAll();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) purge(node);
        });
      }
      scanAll();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // periodic safety net
    const interval = setInterval(scanAll, 1500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
