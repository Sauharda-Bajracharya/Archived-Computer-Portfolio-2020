const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: .5});
tl.to(".dummy", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".anim", { opacity: 0, display: "none", duration: 1 }, "-=1");
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".navbar", { opacity: 0, display: "none"}, { opacity: 1, display: "block", duration: 1 });

