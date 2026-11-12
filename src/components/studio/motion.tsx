// Site hareket katmanı: Lenis (yumuşak kaydırma) + GSAP ScrollTrigger (giriş animasyonları).
// - Yalnızca istemcide, dinamik import ile yüklenir (SSR güvenli, ilk yük paketini büyütmez).
// - "Hareketi azalt" tercihinde hiçbir şey çalışmaz; içerik olduğu gibi görünür.
// - İşaretler: [data-m-hero] (çocukları sırayla gelir), [data-m="rise"], [data-m="stagger"] (çocukları),
//   [data-m="parallax"] (içindeki img kaydırmayla hafifçe kayar), [data-m="pop"] (ölçekle belirir).
import { useEffect } from "react";

export const MOTION_BOOT_SCRIPT =
  "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ready')}catch(e){}";

export function useSiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("motion-ready");
      return;
    }
    root.classList.add("motion-ready");

    let cancelled = false;
    let cleanup = () => {};
    let ioCleanup = () => {};

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -96 }, autoRaf: false });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const ease = "power3.out";
      const ctx = gsap.context(() => {
        // Hero: başlık, metin ve butonlar sırayla; görsel perde gibi açılır.
        document.querySelectorAll<HTMLElement>("[data-m-hero]").forEach((hero) => {
          const items = Array.from(hero.children) as HTMLElement[];
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 34 },
            { autoAlpha: 1, y: 0, duration: 1, ease, stagger: 0.09, delay: 0.05, clearProps: "transform" },
          );
        });
        document.querySelectorAll<HTMLElement>("[data-m-hero-plate]").forEach((plate) => {
          const img = plate.querySelector("img");
          gsap.fromTo(
            plate,
            { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut", delay: 0.15, clearProps: "clipPath" },
          );
          if (img) gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "power3.out", delay: 0.15 });
        });

        // Kaydırınca belirenler. Tetikleyici olarak IntersectionObserver kullanılır: konum
        // hesaplarına (geç yüklenen görseller, yeniden boyutlanma) bağlı kalmadan her zaman açılır.
        // Tailwind "transition" sınıfları GSAP ile çakışmasın diye animasyon süresince kapatılır.
        const noTransition = (els: HTMLElement[]) => els.forEach((e) => (e.style.transition = "none"));
        const restoreTransition = (els: HTMLElement[]) => els.forEach((e) => (e.style.transition = ""));
        const reveal = (targets: HTMLElement[], from: gsap.TweenVars, to: gsap.TweenVars) => {
          noTransition(targets);
          gsap.set(targets, from);
          return () =>
            gsap.to(targets, {
              ...to,
              overwrite: "auto",
              clearProps: "transform,opacity,visibility",
              onComplete: () => restoreTransition(targets),
            });
        };
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              io.unobserve(entry.target);
              const play = pending.get(entry.target);
              pending.delete(entry.target);
              play?.();
            }
          },
          { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
        );
        const pending = new Map<Element, () => void>();
        const watch = (el: HTMLElement, play: () => void) => {
          pending.set(el, play);
          io.observe(el);
        };
        ioCleanup = () => io.disconnect();

        gsap.utils.toArray<HTMLElement>('[data-m="rise"]').forEach((el) => {
          watch(el, reveal([el], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease }));
        });

        gsap.utils.toArray<HTMLElement>('[data-m="stagger"]').forEach((group) => {
          const kids = Array.from(group.children) as HTMLElement[];
          watch(group, reveal(kids, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.85, ease, stagger: 0.09 }));
        });

        gsap.utils.toArray<HTMLElement>('[data-m="pop"]').forEach((el) => {
          watch(el, reveal([el], { autoAlpha: 0, scale: 0.94, y: 30 }, { autoAlpha: 1, scale: 1, y: 0, duration: 1.1, ease: "expo.out" }));
        });

        // Görsellerde hafif paralaks (kapsayıcı overflow:hidden, görsel %14 büyük)
        gsap.utils.toArray<HTMLElement>('[data-m="parallax"]').forEach((frame) => {
          const img = frame.querySelector("img");
          if (!img) return;
          gsap.set(img, { scale: 1.14 });
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const t = window.setTimeout(refresh, 600);

      cleanup = () => {
        window.removeEventListener("load", refresh);
        window.clearTimeout(t);
        ioCleanup();
        ctx.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })().catch(() => {
      // Kütüphane yüklenemezse içerik görünür kalsın.
      root.classList.remove("motion-ready");
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
}
