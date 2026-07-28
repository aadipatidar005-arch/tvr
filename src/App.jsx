import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Clapperboard, 
  Camera, 
  TrendingUp, 
  Play, 
  Sliders, 
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

const serviceDetails = {
  "01": {
    title: "Creative Strategy",
    longDesc: "Strong content starts with a clear reason to exist. We connect your commercial goals, audience needs, brand position, and channel priorities into one practical creative roadmap. The result is a repeatable system for deciding what to create, why it matters, where it should live, and how success will be measured - before time and budget are committed to production.",
    deliverables: [
      "Brand, content, and channel audit",
      "Audience and competitor mapping",
      "Content pillars and campaign territories",
      "Quarterly roadmap and measurement plan"
    ],
    specs: ["Messaging Framework", "Channel Strategy", "KPI Architecture"],
    images: ["/creative_strategy.webp"],
    ctaLabel: "Build Your Content Roadmap"
  },
  "02": {
    title: "Brand Identity",
    longDesc: "A strong identity gives every piece of content a shared point of view. We develop the visual and verbal building blocks your team needs to communicate consistently - from typography, color, and image direction to tone of voice and reusable design rules. The system is built for real-world use, so internal teams, partners, and creators can produce on-brand work without starting from scratch every time.",
    deliverables: [
      "Visual and verbal identity system",
      "Typography, color, and layout rules",
      "Art direction and image principles",
      "Brand guidelines and reusable templates"
    ],
    specs: ["Logo System", "Design Tokens", "Brand Guidelines"],
    images: ["/brand_identity.webp"],
    ctaLabel: "Build a Scalable Brand System"
  },
  "03": {
    title: "Video Production",
    longDesc: "We manage the full production process with strategy and distribution in mind. Our team develops the concept, script, storyboard, shot plan, production setup, and final edits as one connected workflow. Whether the brief is a launch film, product story, founder narrative, customer case study, or a bank of short-form content, every shoot is designed to create a useful family of assets - not just one hero video.",
    deliverables: [
      "Concept development, scripts, and storyboards",
      "Pre-production, casting, locations, and scheduling",
      "Direction, cinematography, lighting, and sound",
      "Hero edits, cutdowns, captions, and platform versions"
    ],
    specs: ["4K Production", "Multi-format Delivery", "Licensed Audio"],
    images: ["/video_production.webp"],
    ctaLabel: "Plan Your Next Production"
  },
  "04": {
    title: "Photography",
    longDesc: "We create photography that feels distinctive to the brand and remains useful long after the shoot. Every project begins with a clear shot list, visual direction, and channel plan so the final library covers hero images, detail shots, portraits, lifestyle moments, and flexible crops. From art direction through retouching and delivery, assets are organized for immediate use across digital, social, editorial, and print applications.",
    deliverables: [
      "Creative direction, moodboards, and shot lists",
      "Product, lifestyle, team, and campaign photography",
      "Retouching, color consistency, and crop variations",
      "Organized, usage-ready digital asset library"
    ],
    specs: ["High-resolution RAW", "Web & Print Exports", "Usage-ready Metadata"],
    images: ["/photography.webp"],
    ctaLabel: "Create Your Brand Image Library"
  },
  "05": {
    title: "Social Media",
    longDesc: "We treat social media as an ongoing content and learning system, not a monthly posting checklist. Strategy, formats, copy, design, production, and reporting are built around the role each platform plays in your customer journey. The goal is a consistent publishing rhythm, stronger creative quality, and a steady feedback loop that shows which messages, formats, and ideas deserve to be repeated, refined, or retired.",
    deliverables: [
      "Platform strategy and monthly content calendar",
      "Short-form video, carousels, static posts, and stories",
      "Copywriting, publishing support, and content governance",
      "Monthly reporting, insights, and creative optimization"
    ],
    specs: ["Content Calendar", "Platform-native Formats", "Monthly Reporting"],
    images: ["/social_media.webp"],
    ctaLabel: "Build a Stronger Social System"
  },
  "06": {
    title: "Motion Graphics",
    longDesc: "Motion can explain what static design cannot. We translate product flows, technical ideas, data, and brand messages into clear visual sequences using animation, kinetic typography, iconography, and interface motion. Each piece is designed around comprehension first, with a visual system that can expand into launch films, explainers, paid ads, product demos, event screens, and social cutdowns.",
    deliverables: [
      "Concept development, scripts, and styleframes",
      "Kinetic typography and branded 2D animation",
      "Product explainers, interface demos, and data visuals",
      "Multi-format exports and reusable motion assets"
    ],
    specs: ["2D Motion Design", "9:16 / 1:1 / 16:9", "MP4 / GIF / Lottie"],
    images: ["/motion_graphic.mp4"],
    ctaLabel: "Bring Your Story Into Motion"
  },
  "07": {
    title: "Post Production",
    longDesc: "Post production is where footage becomes a focused story. We shape pacing, structure, sound, color, graphics, and platform versions around the intended audience and outcome. Our workflow is designed to handle both standalone films and high-volume content libraries, with clear review stages, organized feedback, and consistent finishing standards across every cut, ratio, subtitle version, and delivery master.",
    deliverables: [
      "Story editing, pacing, and narrative assembly",
      "Color correction, grading, and visual finishing",
      "Sound design, cleanup, mix, and music integration",
      "Captions, cutdowns, aspect ratios, and delivery masters"
    ],
    specs: ["Structured Review Rounds", "Broadcast-safe Audio", "Version-controlled Delivery"],
    images: ["/post_production.mp4"],
    ctaLabel: "Finish and Scale Your Content"
  },
  "08": {
    title: "Visual Campaigns",
    longDesc: "Campaigns perform better when every asset is built from the same strategic idea. We develop the campaign concept, key visual, messaging hierarchy, production plan, and channel adaptations as one coordinated system. This gives your team a strong launch moment and a practical toolkit for paid media, organic social, web, retail, events, partnerships, and ongoing content - all without losing consistency as the campaign scales.",
    deliverables: [
      "Campaign concept, narrative, and key visual",
      "Hero assets and channel-specific adaptations",
      "Launch toolkit, rollout matrix, and asset guidelines",
      "Post-launch review and creative performance learnings"
    ],
    specs: ["Multi-channel Toolkit", "Adaptation Matrix", "Campaign Governance"],
    images: ["/visual_campaigns.webp"],
    ctaLabel: "Build Your Next Campaign"
  }
};

export default function App() {
  // States
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarShrunk, setIsNavbarShrunk] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Refs
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorTextRef = useRef(null);
  const audioCtxRef = useRef(null);
  const heroRef = useRef(null);
  const workTrackRef = useRef(null);
  const workSectionRef = useRef(null);
  const timelineFlowRef = useRef(null);
  const countRefs = useRef([]);

  // Add Ref to counter array
  const addToCountRefs = (el) => {
    if (el && !countRefs.current.includes(el)) {
      countRefs.current.push(el);
    }
  };

  // ==========================================================================
  // Tactile Sound Synthesizer (Web Audio API)
  // ==========================================================================
  const playTactileSound = (frequency = 1200, duration = 0.015, volume = 0.02) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioCtxRef.current;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context block silently bypassed
    }
  };

  const playShutterSound = () => {
    try {
      // Rapid mechanical snap: curtain open and close
      playTactileSound(1350, 0.008, 0.07);
      setTimeout(() => {
        playTactileSound(950, 0.006, 0.05);
      }, 45);
    } catch (e) {}
  };

  // ==========================================================================
  // Custom Cursor Interaction Event Handlers
  // ==========================================================================
  const handleElementMouseEnter = (e, cursorTextVal) => {
    playTactileSound(1800, 0.012, 0.015);
    if (cursorTextVal) {
      document.body.classList.add("hover-custom-text");
      if (cursorTextRef.current) {
        cursorTextRef.current.textContent = cursorTextVal;
      }
    } else {
      document.body.classList.add("hover-link");
    }
  };

  const handleElementMouseLeave = (e, isMagnetic) => {
    document.body.classList.remove("hover-link");
    document.body.classList.remove("hover-custom-text");
    if (isMagnetic && e.currentTarget) {
      gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    }
  };

  const handleElementClick = () => {
    playTactileSound(800, 0.08, 0.03);
  };

  const handleServiceCardClick = (num) => {
    playTactileSound(800, 0.08, 0.03);
    setSelectedService(num);
  };

  const handleMagneticMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const deltaX = e.clientX - elementCenterX;
    const deltaY = e.clientY - elementCenterY;
    
    // Magnetic pull calculation (pull offset)
    const pullX = deltaX * 0.32;
    const pullY = deltaY * 0.32;
    
    gsap.to(el, {
      x: pullX,
      y: pullY,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  // ==========================================================================
  // Main Lifecycle Effects (Preloader, Cursor Loop, Canvas & GSAP)
  // ==========================================================================
  useEffect(() => {
    // Trigger logo popup entrance animation sequence on load
    const introTimer = setTimeout(() => {
      triggerEntranceAnimation();
    }, 100);

    // 2. Cursor tracking animation loop
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current) {
        gsap.set(cursorDotRef.current, { x: mouseX, y: mouseY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    let cursorAnimId;
    const updateCursorPosition = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (cursorRingRef.current) {
        gsap.set(cursorRingRef.current, { x: ringX, y: ringY });
      }
      if (cursorTextRef.current) {
        gsap.set(cursorTextRef.current, { x: ringX, y: ringY });
      }
      cursorAnimId = requestAnimationFrame(updateCursorPosition);
    };
    cursorAnimId = requestAnimationFrame(updateCursorPosition);

    // Prevent rendering glitches when mouse leaves viewport
    const handleMouseLeaveViewport = () => gsap.to(cursorRef.current, { opacity: 0 });
    const handleMouseEnterViewport = () => gsap.to(cursorRef.current, { opacity: 1 });
    document.addEventListener("mouseleave", handleMouseLeaveViewport);
    document.addEventListener("mouseenter", handleMouseEnterViewport);

    // 3. Interactive Ambient Canvas Particle Loop
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 45;
    let canvasWidth = (canvas.width = window.innerWidth);
    let canvasHeight = (canvas.height = window.innerHeight);

    const handleResize = () => {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.color = Math.random() > 0.85 
          ? `rgba(245, 158, 11, ${Math.random() * 0.3 + 0.15})`
          : `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvasWidth || this.y < 0 || this.y > canvasHeight) {
          this.reset();
        }

        // Repulsion from cursor coordinates
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.x -= (dx / dist) * force * 0.8;
          this.y -= (dy / dist) * force * 0.8;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let lightSweepProgress = 0;
    let canvasAnimId;
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Radial spotlight hover glow
      const grad = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 350);
      grad.addColorStop(0, "rgba(245, 158, 11, 0.04)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Light sweeps
      lightSweepProgress += 0.003;
      if (lightSweepProgress > 2) lightSweepProgress = -1;
      if (lightSweepProgress > 0 && lightSweepProgress < 1) {
        const sweepX = lightSweepProgress * canvasWidth;
        const sweepGrad = ctx.createLinearGradient(sweepX - 250, 0, sweepX + 250, 0);
        sweepGrad.addColorStop(0, "transparent");
        sweepGrad.addColorStop(0.5, "rgba(245, 158, 11, 0.015)");
        sweepGrad.addColorStop(1, "transparent");
        ctx.fillStyle = sweepGrad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      canvasAnimId = requestAnimationFrame(animateParticles);
    };
    canvasAnimId = requestAnimationFrame(animateParticles);

    // Cleanups on unmount
    return () => {
      clearTimeout(introTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseleave", handleMouseLeaveViewport);
      document.removeEventListener("mouseenter", handleMouseEnterViewport);
      cancelAnimationFrame(cursorAnimId);
      cancelAnimationFrame(canvasAnimId);
    };
  }, []);

  // Entrance timeline triggers logo popup and reveals page content
  const triggerEntranceAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setPreloaderActive(false);
        // Enable scrolling
        document.body.style.overflow = "auto";
      }
    });

    // 1. Logo Popup (ultra-smooth scale & blur reveal with a back-out bounce)
    tl.fromTo(".preloader-logo", 
      { scale: 0.3, opacity: 0, filter: "blur(12px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.0, ease: "back.out(1.6)" }
    );

    // 2. Logo sweep (fast and crisp overlay pass)
    tl.to(".streak-overlay", {
      left: "150%",
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

    // 3. Text elements reveal
    tl.to(".loader-word-reveal .word", {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3");

    // 4. Preloader fade out (snappy and simple after a short look)
    tl.to("#preloader", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "+=0.6");

    // 5. Hero items slide up (clean, subtle, and highly professional)
    tl.from(".huge-headline", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.3");

    tl.from(".navbar", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6");

    tl.from(".hero-floating-visual", {
      opacity: 0,
      scale: 0.96,
      y: 15,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    tl.from(".hero-ctas", {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.5");
  };

  // ==========================================================================
  // GSAP ScrollTrigger Setups
  // ==========================================================================
  useEffect(() => {
    // Prevent initializing triggers until preloader concludes
    if (preloaderActive) return;

    let ctx = gsap.context(() => {
      // 1. Navbar shrink
      ScrollTrigger.create({
        start: "top -80px",
        onToggle: (self) => {
          setIsNavbarShrunk(self.isActive);
        }
      });

      // 2. Hero Typography Split scroll animations
      gsap.to(".top-line", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        x: -200,
        opacity: 0,
        ease: "none"
      });

      gsap.to(".bottom-line", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        x: 150,
        opacity: 0,
        ease: "none"
      });

      gsap.to(".bottom-line-2", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        x: 250,
        opacity: 0,
        ease: "none"
      });

      gsap.to(".hero-meta-grid, .hero-floating-visual", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "50% top",
          scrub: true
        },
        opacity: 0,
        y: -40,
        ease: "none"
      });

      // 3. Featured Work: Horizontal Scroll Trigger (Desktops)
      if (window.innerWidth > 1024) {
        const track = workTrackRef.current;
        const getScrollAmount = () => {
          let trackWidth = track.scrollWidth;
          return -(trackWidth - window.innerWidth * 0.8);
        };

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: workSectionRef.current,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      }

      // 4. Creative Process Timeline step lights
      const steps = document.querySelectorAll(".process-step");
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 75%",
          onEnter: () => {
            step.classList.add("active");
            playTactileSound(1400, 0.015, 0.01);
          },
          onLeaveBack: () => {
            step.classList.remove("active");
          }
        });
      });

      // SVG timeline path dashoffset linkage
      const timelineFlow = timelineFlowRef.current;
      if (timelineFlow) {
        const pathLength = timelineFlow.getTotalLength();
        gsap.set(timelineFlow, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        gsap.to(timelineFlow, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-timeline-container",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        });
      }

      // 5. Stat Counter numerical updates
      countRefs.current.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            let startObj = { val: 0 };
            gsap.to(startObj, {
              val: target,
              duration: 2.2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.floor(startObj.val);
              }
            });
          },
          once: true
        });
      });
    }, heroRef); // Scoped to our component ref

    return () => ctx.revert();
  }, [preloaderActive]);

  // Handle mobile toggle click
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  // Close mobile drawer and restore scroll
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Service Details Modal Overlay */}
      {selectedService && (
        <div className="service-detail-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="service-detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>
            <div className="modal-content-grid">
              {/* Left Column: Single Visual Asset */}
              <div className="modal-slideshow-container">
                {serviceDetails[selectedService].images[0].endsWith('.mp4') ? (
                  <video 
                    src={serviceDetails[selectedService].images[0]} 
                    className="modal-slide-video active"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  ></video>
                ) : (
                  <img 
                    src={serviceDetails[selectedService].images[0]} 
                    alt={serviceDetails[selectedService].title} 
                    className="modal-slide-img active"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Right Column: Detailed Specs & Info */}
              <div className="modal-details-container">
                <span className="modal-service-num">{selectedService} // SERVICE DETAIL</span>
                <h2 className="modal-service-title">{serviceDetails[selectedService].title}</h2>
                <p className="modal-service-desc">{serviceDetails[selectedService].longDesc}</p>
                
                <div className="modal-section-divider"></div>
                
                <div className="modal-details-sub-grid">
                  <div className="modal-sub-col">
                    <h4 className="modal-sub-heading">CORE DELIVERABLES</h4>
                    <ul className="modal-deliverables-list">
                      {serviceDetails[selectedService].deliverables.map((item, idx) => (
                        <li key={idx} className="modal-deliverable-item">
                           <span className="bullet" style={{ marginRight: '6px' }}></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-sub-col">
                    <h4 className="modal-sub-heading">TECHNICAL SPECS</h4>
                    <div className="modal-specs-grid">
                      {serviceDetails[selectedService].specs.map((item, idx) => (
                        <span key={idx} className="spec-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="btn btn-primary modal-cta-btn"
                    onClick={() => {
                      setSelectedService(null);
                      setTimeout(() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 250);
                    }}
                  >
                    {serviceDetails[selectedService].ctaLabel} <ArrowUpRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Interactive Ambient Canvas Background */}
      <canvas id="ambient-canvas" ref={canvasRef}></canvas>

      {/* Custom Cursor */}
      <div id="custom-cursor" ref={cursorRef}>
        <div className="cursor-ring" ref={cursorRingRef}></div>
        <div className="cursor-dot" ref={cursorDotRef}></div>
        <span className="cursor-text" ref={cursorTextRef}></span>
      </div>

      {/* Cinematic Preloader */}
      {preloaderActive && (
        <div id="preloader">
          <div className="preloader-bg"></div>
          <div className="loader-content">
            <div className="logo-assemble-container">
              <div className="logo-svg-pieces">
                <img 
                  src="/Tvr logo.webp" 
                  alt="TVR Logo" 
                  className="preloader-logo" 
                  fetchpriority="high"
                />
                <div className="streak-overlay"></div>
              </div>
            </div>
            <div className="loader-word-reveal">
              <span className="word">THE</span>
              <span className="word">VISUAL</span>
              <span className="word">ROOM</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Navigation Bar */}
      <nav className={`navbar ${isNavbarShrunk ? 'shrink' : ''}`} id="navbar">
        <div className="nav-container">
          <a 
            href="#hero" 
            className="nav-logo magnetic" 
            data-cursor-text="HOME"
            onMouseEnter={(e) => handleElementMouseEnter(e, "HOME")}
            onMouseLeave={(e) => handleElementMouseLeave(e, true)}
            onMouseMove={handleMagneticMouseMove}
            onClick={handleElementClick}
          >
            <img src="/Tvr logo.webp" alt="TVR Logo" className="logo-img" fetchpriority="high" />
          </a>
          
          <div className="nav-menu">
            {['services', 'work', 'about', 'process', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="nav-link magnetic"
                onMouseEnter={handleElementMouseEnter}
                onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                onMouseMove={handleMagneticMouseMove}
                onClick={handleElementClick}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button 
            className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
            id="menu-toggle"
            onClick={handleMobileMenuToggle}
          >
            <span className="toggle-line top"></span>
            <span className="toggle-line bottom"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <div className="mobile-menu-links">
          {['services', 'work', 'about', 'process', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="mobile-link"
              onClick={handleMobileLinkClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Smooth Scroll Wrapper (Managed by GSAP) */}
      <div id="smooth-wrapper" ref={heroRef}>
        <div id="smooth-content">

          {/* Hero Section */}
          <section id="hero" className="hero-section">
            {/* Background Watermark TVR Logo */}
            <div className="hero-backdrop-watermark">
              <img src="/Tvr logo.webp" alt="TVR Watermark" className="hero-watermark-img" loading="lazy" />
            </div>

            {/* Top Brand Badge */}
            <div 
              className="hero-brand-badge magnetic"
              onMouseEnter={handleElementMouseEnter}
              onMouseLeave={(e) => handleElementMouseLeave(e, true)}
              onMouseMove={handleMagneticMouseMove}
              onClick={handleElementClick}
            >
              <img src="/Tvr logo.webp" alt="TVR Studio Logo" className="hero-brand-logo-img" fetchpriority="high" />
              <span className="hero-brand-badge-tag">TVR // THE VISUAL ROOM STUDIO</span>
            </div>

            <div className="split-text-wrapper">
              <div className="split-line top-line">
                <h1 className="huge-headline">NOT JUST CONTENT.</h1>
              </div>
              <div className="split-line bottom-line">
                <h1 className="huge-headline">WE BUILD VISUAL</h1>
              </div>
              <div className="split-line bottom-line-2">
                <h1 className="huge-headline">EXPERIENCES.</h1>
              </div>
            </div>

            <div className="hero-meta-grid">
              <div className="hero-ctas">
                <a 
                  href="#contact" 
                  className="btn btn-primary magnetic" 
                  id="cta-build" 
                  data-cursor-text="LET'S GO"
                  onMouseEnter={(e) => handleElementMouseEnter(e, "LET'S GO")}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={handleElementClick}
                >
                  <span className="btn-text">Let's Build Something Great</span>
                  <span className="btn-icon"><ArrowUpRight size={18} /></span>
                </a>
                <a 
                  href="#work" 
                  className="btn btn-secondary magnetic" 
                  id="cta-work" 
                  data-cursor-text="VIEW"
                  onMouseEnter={(e) => handleElementMouseEnter(e, "VIEW")}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={handleElementClick}
                >
                  <span className="btn-text">View Our Work</span>
                </a>
              </div>
            </div>

            {/* Floating Cinematic TVR Centerpiece Visual */}
            <div className="hero-floating-visual">
              <div 
                className="cinematic-visual-box"
                onMouseEnter={playShutterSound}
                onMouseLeave={playShutterSound}
              >
                <div className="film-strip-grid">
                  <div className="strip-item"></div>
                  <div className="strip-item"></div>
                  <div className="strip-item"></div>
                </div>
                <div className="camera-lens-frame">
                  <div className="corner-border tl"></div>
                  <div className="corner-border tr"></div>
                  <div className="corner-border bl"></div>
                  <div className="corner-border br"></div>

                  {/* Camera Shutter Iris Blades */}
                  <div className="camera-shutter-overlay">
                    <svg className="camera-shutter-svg" viewBox="0 0 200 200">
                      <g transform="rotate(0, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                      <g transform="rotate(60, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                      <g transform="rotate(120, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                      <g transform="rotate(180, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                      <g transform="rotate(240, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                      <g transform="rotate(300, 100, 100)"><path className="shutter-leaf" d="M 100 100 L 100 0 A 100 100 0 0 1 200 100 Z" /></g>
                    </svg>
                  </div>
                  
                  {/* TVR Centerpiece Logo */}
                  <div className="hero-center-logo-container">
                    <img src="/Tvr logo.webp" alt="TVR Centerpiece Logo" className="hero-center-logo-img" fetchpriority="high" />
                  </div>

                  <div className="rec-dot-container">
                    <span className="rec-dot"></span>
                    <span className="rec-text">REC [RAW]</span>
                  </div>
                  <div className="shutter-speed">1/48 FPS</div>
                  <div className="iso-info">ISO 800</div>
                </div>
                <div className="glowing-orange-rings"></div>
                <div className="glowing-orange-rings ring-2"></div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="services-section">
            <div className="section-header">
              <span className="section-index">01 // WHAT WE DO</span>
              <h2 className="section-title">A CONTENT GROWTH PARTNER, FROM STRATEGY TO SCALE</h2>
              <p className="section-desc">We help ambitious brands plan, create, and improve the content they need to grow. Strategy, identity, production, social, and campaign execution work as one connected system - so every asset is useful, consistent, and built for the channel where it will perform.</p>
            </div>

            <div className="services-grid">
              {[
                {
                  num: "01",
                  title: "Creative Strategy",
                  desc: "We turn business goals into a clear content system: what to say, who to say it to, and how every asset supports growth.",
                  icon: <Compass className="service-icon" />,
                  badges: ["Messaging Framework", "Channel Strategy", "KPI Architecture"],
                  tag: "STRATEGY"
                },
                {
                  num: "02",
                  title: "Brand Identity",
                  desc: "We build a visual and verbal identity that keeps every touchpoint recognizable, consistent, and ready to scale across teams and channels.",
                  icon: <Layers className="service-icon" />,
                  badges: ["Logo System", "Design Tokens", "Brand Guidelines"],
                  tag: "IDENTITY"
                },
                {
                  num: "03",
                  title: "Video Production",
                  desc: "From concept to final cut, we produce campaign, product, founder, and social video designed to earn attention and drive action.",
                  icon: <Clapperboard className="service-icon" />,
                  badges: ["4K Production", "Multi-format Delivery", "Licensed Audio"],
                  tag: "CINEMA"
                },
                {
                  num: "04",
                  title: "Photography",
                  desc: "Product, people, and campaign photography built for websites, launches, social media, paid campaigns, and ongoing brand communication.",
                  icon: <Camera className="service-icon" />,
                  badges: ["High-resolution RAW", "Web & Print Exports", "Usage-ready Metadata"],
                  tag: "CAPTURES"
                },
                {
                  num: "05",
                  title: "Social Media",
                  desc: "We plan, create, and improve consistent social content so your brand stays relevant without posting simply for the sake of posting.",
                  icon: <TrendingUp className="service-icon" />,
                  badges: ["Content Calendar", "Platform-native Formats", "Monthly Reporting"],
                  tag: "GROWTH"
                },
                {
                  num: "06",
                  title: "Motion Graphics",
                  desc: "We make complex products, ideas, and data easier to understand through motion systems that hold attention and clarify value.",
                  icon: <Play className="service-icon" />,
                  badges: ["2D Motion Design", "9:16 / 1:1 / 16:9", "MP4 / GIF / Lottie"],
                  tag: "MOTION"
                },
                {
                  num: "07",
                  title: "Post Production",
                  desc: "We turn raw footage into polished, platform-ready stories through editing, color, sound, graphics, captions, and disciplined version control.",
                  icon: <Sliders className="service-icon" />,
                  badges: ["Structured Review Rounds", "Broadcast-safe Audio", "Version-controlled Delivery"],
                  tag: "FINISHING"
                },
                {
                  num: "08",
                  title: "Visual Campaigns",
                  desc: "We connect strategy, production, and distribution into launch-ready campaigns with one clear idea adapted consistently across every channel.",
                  icon: <Sparkles className="service-icon" />,
                  badges: ["Multi-channel Toolkit", "Adaptation Matrix", "Campaign Governance"],
                  tag: "LAUNCH"
                }
              ].map((serv) => (
                <div 
                  key={serv.num}
                  className="service-block magnetic" 
                  data-cursor-text={serv.tag}
                  onMouseEnter={(e) => handleElementMouseEnter(e, serv.tag)}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={() => handleServiceCardClick(serv.num)}
                >
                  <div className="service-block-bg"></div>
                  <div className="service-num">{serv.num}</div>
                  <h3 className="service-title">{serv.title}</h3>
                  <p className="service-description">{serv.desc}</p>
                  <div className="service-icon-wrapper">
                    {serv.icon}
                  </div>
                  <div className="service-interactive-elements">
                    {serv.badges.map(b => <span key={b} className="badge">{b}</span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Closing Banner */}
            <div className="services-closing-banner glass-panel">
              <div className="banner-content">
                <h3 className="banner-heading">ONE PARTNER. ONE CONTENT SYSTEM.</h3>
                <p className="banner-body">Bring TVR in for one focused project or as an ongoing extension of your team. We can lead the full content process or strengthen the parts where you need specialist support.</p>
              </div>
              <div className="banner-cta">
                <button 
                  className="btn btn-primary magnetic"
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Tell Us What You Are Building <ArrowUpRight size={16} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          </section>

          {/* Featured Work (Horizontal cinematic scroll) */}
          <section id="work" className="work-section" ref={workSectionRef}>
            <div className="work-sticky-container">
              <div className="work-header">
                <span className="section-index">02 // FEATURED STORIES</span>
                <h2 className="section-title">STORIES WE BUILT</h2>
                <div className="scroll-instruction">
                  <span className="arrow-indicator">&larr;</span> Scroll to Explore Projects <span className="arrow-indicator">&rarr;</span>
                </div>
              </div>
              
              <div className="work-horizontal-track" ref={workTrackRef}>
                {[
                  {
                    num: "01",
                    client: "SVKM's NMIMS",
                    year: "2025",
                    deliverable: "Cinematic film",
                    name: "RHYTHM // AFTER DARK",
                    tags: ["CULTURAL EVENT", "VISUAL IDENTITY"],
                    class: "proj-1"
                  },
                  {
                    num: "02",
                    client: "Spinny",
                    year: "2026",
                    deliverable: "Cinematic film",
                    name: "TRUST // BUILT OVER TIME",
                    tags: ["BRAND STORY", "DOCUMENTARY"],
                    class: "proj-2"
                  },
                  {
                    num: "03",
                    client: "Wedding Granth",
                    year: "2025",
                    deliverable: "Wedding film",
                    name: "VOWS // FOREVER",
                    tags: ["WEDDING FILM", "CINEMATIC STORY"],
                    class: "proj-3"
                  },
                  {
                    num: "04",
                    client: "Kanhaaar jewellers",
                    year: "2025",
                    deliverable: "jewerelly shoot",
                    name: "TIMELESS // LUSTRE",
                    tags: ["JEWELLERY PHOTOGRAPHY", "LUXURY BRAND"],
                    class: "proj-4"
                  }
                ].map((proj) => (
                  <div 
                    key={proj.num} 
                    className="project-card magnetic" 
                    data-cursor-text="VIEW"
                    onMouseEnter={(e) => handleElementMouseEnter(e, "VIEW")}
                    onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                    onMouseMove={handleMagneticMouseMove}
                    onClick={handleElementClick}
                  >
                    <div className="project-preview-container">
                      <div className={`project-bg-visual ${proj.class}`}></div>
                      <div className="project-overlay-gradient"></div>
                      <div className="project-tags">
                        {proj.tags.map(t => <span key={t} className="p-tag">{t}</span>)}
                      </div>
                      <div className="project-reveal-details">
                        <div className="p-meta-item"><span>Client:</span> <strong>{proj.client}</strong></div>
                        <div className="p-meta-item"><span>Year:</span> <strong>{proj.year}</strong></div>
                        <div className="p-meta-item"><span>Deliverable:</span> <strong>{proj.deliverable}</strong></div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3 className="project-name">{proj.name}</h3>
                      <span className="project-index-num">{proj.num}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Creative Process Section */}
          <section id="process" className="process-section">
            <div className="section-header">
              <span className="section-index">03 // OUR TIMELINE</span>
              <h2 className="section-title">CREATIVE WORKFLOW</h2>
              <p className="section-desc">Our framework is designed for absolute precision, transforming core strategy into visual assets that dominate markets.</p>
            </div>

            <div className="process-timeline-container">
              <svg className="timeline-svg" viewBox="0 0 100 1000" preserveAspectRatio="none">
                <path d="M 50 0 L 50 1000" className="timeline-base-line" />
                <path d="M 50 0 L 50 1000" className="timeline-active-line" ref={timelineFlowRef} />
              </svg>

              {[
                {
                  num: "01",
                  title: "Discover",
                  desc: "Deep immersion into the business models, core audience psychographics, and competitor landscapes. Aligning on core ambitions.",
                  tag: "Phase One: Research",
                  sideClass: "left-step",
                  id: "step-1"
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Formulating conceptual narratives and production briefs. Securing styling direction, moodboards, and messaging structures.",
                  tag: "Phase Two: Conception",
                  sideClass: "right-step",
                  id: "step-2"
                },
                {
                  num: "03",
                  title: "Create",
                  desc: "Drafting scripts, creating visual designs, and building set directions. Synthesizing blueprints into tangible storyboards.",
                  tag: "Phase Three: Pre-Production",
                  sideClass: "left-step",
                  id: "step-3"
                },
                {
                  num: "04",
                  title: "Produce",
                  desc: "High-end cinematography, direction, photography, and lighting. Capturing raw footage with absolute aesthetic integrity.",
                  tag: "Phase Four: Production",
                  sideClass: "right-step",
                  id: "step-4"
                },
                {
                  num: "05",
                  title: "Launch",
                  desc: "Editing, color grading, sound design, master packaging, and final multi-platform exports.",
                  tag: "Phase Five: Delivery",
                  sideClass: "left-step",
                  id: "step-5"
                }
              ].map((step) => (
                <div key={step.num} className={`process-step ${step.sideClass}`} id={step.id}>
                  <div className="step-marker-container">
                    <div className="step-marker"></div>
                  </div>
                  <div className="step-card glass-panel">
                    <span className="step-num">{step.num}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                    <span className="step-timeline-tag">{step.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Brands Section */}
          <section id="brands" className="brands-section">
            <h2 className="brands-title">WHO WE'VE BUILT FOR</h2>
            <div className="brands-grid">
              {['SPINNY', 'KAPIVA', 'SOURCEBAE', 'VAAYU PRODUCTIONS', 'WEDDING GRANTH', 'THE VIRAL LAB'].map((brand) => (
                <div 
                  key={brand} 
                  className="brand-item magnetic" 
                  data-cursor-text="PARTNER"
                  onMouseEnter={(e) => handleElementMouseEnter(e, "PARTNER")}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={handleElementClick}
                >
                  {brand}
                </div>
              ))}
            </div>
            <p className="brands-subtext">Trusted by brands building stories that matter.</p>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <div className="section-header">
              <span className="section-index">04 // REVIEWS</span>
              <h2 className="section-title">WHAT BRANDS SAY</h2>
            </div>
            <div className="testimonials-grid">
              {[
                {
                  quote: "TVR redefined our brand's launch strategy. Their visual execution felt like cinema, not marketing. The retention rate on our hero campaign was unlike anything we've seen.",
                  author: "Sarah Jenkins",
                  role: "VP of Brand, Aero Space"
                },
                {
                  quote: "Working with The Visual Room was a masterclass in collaboration. They translate technical specifications into breathtaking cinematic movements.",
                  author: "David Vance",
                  role: "Creative Director, Mercury Tech"
                },
                {
                  quote: "Every pixel feels intentional. The motion graphics and post-production work they delivered set a new benchmark for our corporate keynotes.",
                  author: "Elena Rostova",
                  role: "Chief Marketing Officer, Hyper Light"
                }
              ].map((test, idx) => (
                <div 
                  key={idx} 
                  className="testimonial-card glass-panel magnetic"
                  onMouseEnter={handleElementMouseEnter}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={handleElementClick}
                >
                  <div className="t-quote">"{test.quote}"</div>
                  <div className="t-author">
                    <strong>{test.author}</strong>
                    <span>{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about-section">
            <div className="about-grid">
              <div className="about-text-col">
                <span className="section-index">05 // ABOUT THE STUDIO</span>
                <h2 className="about-headline">WE ARE ARCHITECTS OF VISUAL CULTURE.</h2>
                <p className="about-paragraph">TVR (The Visual Room) is a boutique creative production agency and visual strategy house. We exist at the intersection of cinematic artistry and modern digital growth. We build high-impact brand films, visual identities, commercial photography, and editorial campaigns that command attention.</p>
                <p className="about-paragraph-sub">We believe that content should not just occupy space—it should construct experiences. Every frame we shoot, every pixel we key, and every strategy we formulate is engineered to elevate perception.</p>
                
                <div className="about-features">
                  {['Premium Detail', 'Cinematic Focus', 'Strategic Precision'].map(f => (
                    <div key={f} className="feat-item"><span className="bullet"></span> {f}</div>
                  ))}
                </div>
              </div>
              <div className="about-visual-col">
                <div className="about-image-wrapper">
                  <video 
                    src="/0721.mp4" 
                    className="about-studio-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  ></video>
                  <div className="about-image-overlay"></div>
                  <div className="about-glow-box"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer & Contact Section */}
          <footer id="contact" className="footer">
            <div className="footer-contact-area">
              <div className="footer-top">
                <span className="footer-tag">// LET'S COLLABORATE</span>
                <h2 className="footer-heading">Let's Create Something Extraordinary.</h2>
                <a 
                  href="mailto:Sales@thevisualroom.studio" 
                  className="footer-email magnetic" 
                  data-cursor-text="WRITE"
                  onMouseEnter={(e) => handleElementMouseEnter(e, "WRITE")}
                  onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                  onMouseMove={handleMagneticMouseMove}
                  onClick={handleElementClick}
                >
                  Sales@thevisualroom.studio
                </a>
              </div>
            </div>

            <div className="footer-mid">
              <div className="footer-links-col">
                <h3>NAVIGATION</h3>
                {['services', 'work', 'about', 'process'].map(link => (
                  <a 
                    key={link} 
                    href={`#${link}`} 
                    className="f-link magnetic"
                    onMouseEnter={handleElementMouseEnter}
                    onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                    onMouseMove={handleMagneticMouseMove}
                    onClick={handleElementClick}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                ))}
              </div>

              <div className="footer-social-col">
                <h3>SOCIAL CHANNELS</h3>
                {['Instagram', 'Vimeo', 'LinkedIn', 'Twitter'].map(social => (
                  <a 
                    key={social} 
                    href={`https://${social.toLowerCase()}.com`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="f-link magnetic"
                    onMouseEnter={handleElementMouseEnter}
                    onMouseLeave={(e) => handleElementMouseLeave(e, true)}
                    onMouseMove={handleMagneticMouseMove}
                    onClick={handleElementClick}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-massive-logo">
                <img src="/Tvr logo.webp" alt="TVR Massive Logo" className="footer-logo-img" loading="lazy" />
              </div>
              <div className="footer-copyright">
                <span>&copy; {new Date().getFullYear()} The Visual Room. All Rights Reserved.</span>
                <span className="credit">The Visual Room</span>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}
