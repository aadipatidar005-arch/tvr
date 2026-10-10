import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight,
  Play, 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Menu,
  Volume2,
  VolumeX,
  Layers,
  Film,
  UserCheck,
  Zap,
  Camera,
  User,
  Flame,
  Clock,
  Compass,
  ChevronRight,
  ArrowLeft,
  Eye,
  Maximize2,
  Mic,
  Cpu,
  ShieldCheck,
  Repeat,
  FileText,
  Check
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. VERIFIED CLIENTS (13 REAL TVR CLIENTS)
// ==========================================
const CLIENTS = [
  { name: 'SPINNY', category: 'Automotive Brand Content', img: '/visual_campaigns.webp' },
  { name: 'KAPIVA', category: 'AI Product Content', img: '/tvr_creative_studio.webp' },
  { name: 'SOURCEBAE', category: 'Tech Motion Graphics', img: '/creative_strategy.webp' },
  { name: 'VAAYU PRODUCTIONS', category: 'Commercial Film & VFX', img: '/video_production.webp' },
  { name: 'WEDDING GRANTH', category: 'Luxury Heritage Films', img: '/timeless_lustre.webp' },
  { name: 'THE VIRAL LAB', category: 'Short-Form Content Engine', img: '/social_media.webp' },
  { name: 'RAASRANG', category: 'Cultural Festival Campaign', img: '/rhythm_after_dark.webp' },
  { name: 'SHIVAMSHIVEN CO.', category: 'Editorial Brand Narrative', img: '/Brand.jpg' },
  { name: 'LENSTTER', category: 'Visual Identity & Content', img: '/visual_campaigns.webp' },
  { name: 'JAIN DIGITAL', category: 'Digital Media Production', img: '/creative_strategy.webp' },
  { name: 'RIPD FITNESS', category: 'High-Energy Fitness Content', img: '/video_production.webp' },
  { name: 'SANSTHA PRAJWALIT', category: 'Social Impact Campaign', img: '/timeless_lustre.webp' },
  { name: 'GHOSTOFDRIP', category: 'Streetwear & Creative Direction', img: '/social_media.webp' }
];

// ==========================================
// 2. THE 4 TVR UNIVERSE DOORS (SERVICES)
// ==========================================
const SERVICES_DATA = [
  {
    id: 'personal-brand',
    num: '01',
    title: 'PERSONAL BRAND',
    titleFirst: 'PERSONAL',
    titleSecond: 'BRAND',
    subtitle: 'IDENTITY & NARRATIVE',
    tagline: 'Turn expertise, experience and perspective into a personal brand people remember.',
    accentColor: '#C8FF00',
    accentText: 'text-[#111111]',
    accentHex: '#C8FF00',
    borderHover: 'hover:border-[#C8FF00]',
    badgeBg: 'bg-[#C8FF00] text-[#111111]',
    image: '/tvr-personal-brand-visual.png',
    heroHeadline: 'TURN EXPERTISE INTO PRESENCE',
    overview: [
      "Your experience, opinions and expertise already have immense value. We shape them into a personal brand with a clear position, story and visual identity.",
      "A strong personal brand isn't about posting more. It's about knowing what you stand for, what you should be known for, and how that story should look and sound across every medium."
    ],
    whatWeBuild: [
      {
        title: 'Founder Positioning',
        desc: 'Define what the founder should be known for, who they speak to and what makes their perspective different.'
      },
      {
        title: 'Personal Brand Strategy',
        desc: 'Build the content pillars, themes and communication direction that make the brand consistent and recognizable.'
      },
      {
        title: 'Thought Leadership',
        desc: 'Turn knowledge, opinions, experiences and industry insights into ideas worth talking about and sharing.'
      },
      {
        title: 'Founder Storytelling',
        desc: 'Find the stories behind the founder — the lessons, failures, decisions and beliefs that make the person relatable.'
      },
      {
        title: 'Visual Identity',
        desc: 'How your presence looks and feels — signature typography, portrait direction, video framing, and editorial tone.'
      }
    ],
    servicesList: [
      'Founder Positioning',
      'Personal Brand Strategy',
      'Thought Leadership',
      'Founder Storytelling'
    ],
    approachSteps: ['DISCOVER', 'POSITION', 'DEFINE', 'STORY', 'BUILD'],
    approachQuote: "We don't manufacture a personality. We find the story that's already there — and give it a voice.",
    idealFor: ['Founders', 'Entrepreneurs', 'Executives', 'Creators', 'Industry Experts'],
    whyItMatters: 'Founders who communicate clearly build immediate trust, attract top-tier talent, shorten sales cycles, and build category leadership.',
    ctaText: 'EXPLORE PERSONAL BRAND ↗',
    actionCta: 'BUILD MY PERSONAL BRAND ↗',
    serviceOption: 'Founder Personal Branding'
  },
  {
    id: 'presence',
    num: '02',
    title: 'PRESENCE AI',
    titleFirst: 'PRESENCE',
    titleSecond: 'AI',
    subtitle: 'AI × PERSONAL BRAND',
    tagline: 'Turn one founder’s knowledge into a scalable content engine using storytelling, production and AI-assisted workflows.',
    accentColor: '#FF4F8B',
    accentText: 'text-white',
    accentHex: '#FF4F8B',
    borderHover: 'hover:border-[#FF4F8B]',
    badgeBg: 'bg-[#FF4F8B] text-white',
    image: '/tvr-presence-ai-visual.png',
    heroHeadline: 'ONE PERSON — AN ENTIRE CONTENT ENGINE',
    overview: [
      "Founders have years of experience, knowledge and opinions — but not the time to constantly be in front of a camera.",
      "TVR combines personal branding, content production and AI-assisted workflows to build a scalable content engine around the founder."
    ],
    whatWeBuild: [
      {
        title: 'AI Avatars',
        desc: 'Create controlled digital representations that can help founders produce content without being physically present for every shoot.'
      },
      {
        title: 'Digital Twins',
        desc: 'Build a consistent digital version of the founder for selected content formats and scalable visual storytelling.'
      },
      {
        title: 'Founder Content',
        desc: 'Turn conversations, ideas, opinions and expertise into structured content ready for production.'
      },
      {
        title: 'Content Engine',
        desc: 'Create a repeatable system that transforms one founder conversation into multiple content opportunities.'
      }
    ],
    servicesList: [
      'AI Avatars',
      'Digital Twins',
      'Founder Content',
      'Content Engine'
    ],
    approachSteps: ['YOU TALK', 'FIND THE STORY', 'SYSTEMIZE', 'AI WORKFLOW', 'SCALE'],
    approachQuote: 'AI helps multiply the founder’s presence without multiplying their time.',
    idealFor: ['High-Velocity Founders', 'B2B CEOs', 'Venture Partners', 'Serial Creators', 'Tech Leaders'],
    whyItMatters: 'Time is the founder’s scarcest resource. A structured presence engine keeps you omnipresent and trusted without studio fatigue.',
    ctaText: 'EXPLORE PRESENCE ↗',
    actionCta: 'BUILD MY PRESENCE ↗',
    serviceOption: 'Founder AI Presence Engine'
  },
  {
    id: 'content',
    num: '03',
    title: 'CONTENT SYSTEMS',
    titleFirst: 'CONTENT',
    titleSecond: 'SYSTEMS',
    subtitle: 'SOCIAL & VISUAL SYSTEMS',
    tagline: 'Build a content system where every idea has a format, every format has a purpose.',
    accentColor: '#2447FF',
    accentText: 'text-white',
    accentHex: '#2447FF',
    borderHover: 'hover:border-[#2447FF]',
    badgeBg: 'bg-[#2447FF] text-white',
    image: '/tvr-content-systems-visual.png',
    heroHeadline: 'DON’T JUST CREATE CONTENT — BUILD A SYSTEM',
    overview: [
      "Content shouldn't begin with “What should we post today?”",
      "TVR builds a visual and content system around your brand — giving every piece a purpose, a point of view and a place in the bigger story."
    ],
    whatWeBuild: [
      {
        title: 'Social Content',
        desc: 'Reels, short-form videos, carousels, static content and visual formats designed around your brand.'
      },
      {
        title: 'Campaign Content',
        desc: 'Concepts and content systems that turn a campaign idea into multiple creative executions across platforms.'
      },
      {
        title: 'Visual Storytelling',
        desc: 'Turn products, ideas and messages into stories people can understand, feel and remember.'
      },
      {
        title: 'Content Systems',
        desc: 'Build repeatable formats, creative pillars and visual frameworks that make consistent content easier to produce.'
      }
    ],
    servicesList: [
      'Social Content',
      'Campaign Content',
      'Visual Storytelling',
      'Content Systems'
    ],
    approachSteps: ['STRATEGY', 'CONCEPT', 'CREATE', 'ADAPT', 'AMPLIFY'],
    approachQuote: "One strong idea shouldn't become one post. It should become an entire content universe.",
    idealFor: ['Brands', 'Startups', 'Products', 'Campaigns', 'Personal Brands'],
    whyItMatters: 'Random posting dilutes attention. Systematic, art-directed content turns passive viewers into brand believers.',
    ctaText: 'EXPLORE CONTENT ↗',
    actionCta: 'BUILD MY CONTENT SYSTEM ↗',
    serviceOption: 'Content Systems & Campaigns'
  },
  {
    id: 'production',
    num: '04',
    title: 'PRODUCTION & FILM',
    titleFirst: 'PRODUCTION',
    titleSecond: '& FILM',
    subtitle: 'FILM & MOTION FX',
    tagline: 'From first concept to final frame, we bring ideas to life through film, photography, motion and post.',
    accentColor: '#FF4A0A',
    accentText: 'text-white',
    accentHex: '#FF4A0A',
    borderHover: 'hover:border-[#FF4A0A]',
    badgeBg: 'bg-[#FF4A0A] text-white',
    image: '/tvr-production-film-visual.png',
    heroHeadline: 'WHERE THE IDEA BECOMES A FRAME',
    overview: [
      "From the first shot to the final grade, TVR brings strategy, storytelling and production together to create visual work with intention.",
      "We don't treat production as simply “shooting something.” The production is where the idea gets its visual language."
    ],
    whatWeBuild: [
      {
        title: 'Film',
        desc: 'Brand films, campaign films, commercial content and cinematic storytelling.'
      },
      {
        title: 'Photography',
        desc: 'Campaigns, products, people, spaces and visual libraries built around your brand.'
      },
      {
        title: 'Cinematography',
        desc: 'Visual direction, camera language, lighting and composition that give every project its own identity.'
      },
      {
        title: 'Motion & VFX',
        desc: 'Motion graphics, kinetic typography, visual effects and animation that make ideas move.'
      },
      {
        title: 'Post Production',
        desc: 'Editing, colour, sound design, compositing, VFX and finishing — from raw footage to final frame.'
      }
    ],
    servicesList: [
      'Film',
      'Photography',
      'Cinematography',
      'Motion',
      'Post Production'
    ],
    approachSteps: ['CONCEPT', 'PRE-PRODUCTION', 'SHOOT', 'EDIT', 'FINISH'],
    approachQuote: 'Every frame has a job. Every cut has a reason.',
    idealFor: ['Brands', 'Campaigns', 'Products', 'Films', 'Events', 'Digital Content'],
    whyItMatters: 'Production value is perception. High-grade visual direction separates serious industry leaders from commodity noise.',
    ctaText: 'EXPLORE PRODUCTION ↗',
    actionCta: 'START A PRODUCTION ↗',
    serviceOption: 'Commercial Film & Production'
  }
];

// ==========================================
// 3. THE TVR SYSTEM TRANSFORMATION PIPELINE
// ==========================================
const TVR_SYSTEM_STEPS = [
  {
    step: '01',
    word: 'IDEA',
    subtitle: 'THE SEED',
    description: 'Every project starts with a sharp, defensible insight. What does this brand actually stand for?',
    color: '#FF4A0A',
    media: '/tvr-idea-seed-visual.png'
  },
  {
    step: '02',
    word: 'STORY',
    subtitle: 'THE MEANING',
    description: 'We craft the narrative architecture that turns product specs and founder expertise into unforgettable stories.',
    color: '#2447FF',
    media: '/tvr-story-visual.png'
  },
  {
    step: '03',
    word: 'VISUAL',
    subtitle: 'THE LANGUAGE',
    description: 'We establish the distinct art direction, typographic hierarchy, and moodboard signature of the brand.',
    color: '#FF4F8B',
    media: '/tvr-visual-visual.png'
  },
  {
    step: '04',
    word: 'PRODUCTION',
    subtitle: 'THE CRAFT',
    description: 'From cinema lenses to lighting setups, we capture high-fidelity raw frames with deliberate intent.',
    color: '#FFC928',
    media: '/tvr-production-visual.png'
  },
  {
    step: '05',
    word: 'CONTENT',
    subtitle: 'THE FORMATS',
    description: 'We turn master footage into a modular library of high-impact social, campaign, and episodic cuts.',
    color: '#2447FF',
    media: '/tvr-content-visual.png'
  },
  {
    step: '06',
    word: 'PRESENCE',
    subtitle: 'THE SCALE',
    description: 'Using AI-assisted workflows and digital twins, we build an omnipresent distribution engine.',
    color: '#C8FF00',
    media: '/tvr-presence-engine-visual.png'
  }
];

// ==========================================
// 4. THE TVR ARCHIVE (REAL FEATURED PROJECTS)
// ==========================================
const FEATURED_PROJECTS = [
  {
    id: 'kapiva',
    num: '01',
    client: 'KAPIVA',
    title: 'AI-ASSISTED PRODUCT CONTENT',
    category: 'PRODUCT CONTENT & MOTION',
    servicesTag: 'STRATEGY / CREATIVE / PRODUCTION / POST',
    mediaType: 'video',
    mediaSrc: '/0721.mp4',
    poster: '/tvr_creative_studio.webp',
    accent: '#FF4A0A',
    brief: 'Kapiva required high-volume, premium product storytelling and dynamic social motion assets highlighting modern wellness science.',
    idea: 'Pair crisp commercial tabletop lighting and macro botanical textures with swift, modern typographic motion.',
    approach: 'Executed studio tabletop cinematography combined with modular AI-assisted asset workflows for rapid multi-channel adaptation.',
    deliverables: ['Tabletop Commercial Film', 'Social Motion Assets', 'Visual Framework', 'Modular Product Cuts'],
    outcome: 'High-engagement product launch assets deployed across national digital and retail campaign touchpoints.'
  },
  {
    id: 'spinny',
    num: '02',
    client: 'SPINNY',
    title: 'DRIVING VISUAL CULTURE',
    category: 'BRAND CONTENT & CAMPAIGN',
    servicesTag: 'STRATEGY / PRODUCTION / CONTENT',
    mediaType: 'image',
    mediaSrc: '/visual_campaigns.webp',
    accent: '#2447FF',
    brief: 'Spinny needed high-velocity, authentic car culture storytelling that resonated with modern car buyers.',
    idea: 'Connect the emotional milestone of car ownership with crisp, energetic urban documentation.',
    approach: 'Executed street-level documentary filmmaking, authentic human perspectives, and modular social cuts.',
    deliverables: ['Campaign Visuals', 'Digital Commercial Series', 'Social Cutdowns', 'Editorial Stills'],
    outcome: 'High-retention storytelling formats deployed across national social and performance campaigns.'
  },
  {
    id: 'sourcebae',
    num: '03',
    client: 'SOURCEBAE',
    title: 'DISTRIBUTED TALENT IN MOTION',
    category: 'BRAND CONTENT & MOTION GRAPHICS',
    servicesTag: 'STRATEGY / MOTION / CAMPAIGN',
    mediaType: 'video',
    mediaSrc: '/motion_graphic.mp4',
    poster: '/creative_strategy.webp',
    accent: '#FF4F8B',
    brief: 'SourceBae needed to communicate their elite distributed engineering ecosystem with energetic tech-forward motion design.',
    idea: 'Turn abstract technical architectures into fluid, kinetic visual metaphors.',
    approach: 'Engineered custom kinetic typography systems, dynamic 3D elements, and rhythmic sound design.',
    deliverables: ['Brand Explainer Film', 'Kinetic Typography Toolkit', 'Social Motion Ads', 'Platform Hero Visuals'],
    outcome: 'Clear B2B positioning that elevated brand perception among enterprise founders and hiring teams.'
  },
  {
    id: 'vaayu',
    num: '04',
    client: 'VAAYU PRODUCTIONS',
    title: 'NARRATIVE IN MOTION',
    category: 'COMMERCIAL PRODUCTION & VFX',
    servicesTag: 'FILM / VFX / POST PRODUCTION',
    mediaType: 'image',
    mediaSrc: '/video_production.webp',
    accent: '#FFC928',
    brief: 'Vaayu Productions required a technical directorship and post-production partner for commercial narrative sequences.',
    idea: 'Combine precision cinematic camera movement with invisible VFX integration and rich color science.',
    approach: 'Pre-visualized on-set camera tracking, lighting rigs, and dedicated color finishing pipelines.',
    deliverables: ['Commercial Directorship', 'VFX Compositing', 'Color Grading', 'Master Finishing'],
    outcome: 'Seamless commercial delivery meeting top-tier broadcast and digital screening standards.'
  },
  {
    id: 'wedding-granth',
    num: '05',
    client: 'WEDDING GRANTH',
    title: 'TIMELESS EMOTION & LUSTRE',
    category: 'CINEMATOGRAPHY & BRAND FILM',
    servicesTag: 'CINEMATOGRAPHY / FILMS / POST',
    mediaType: 'video',
    mediaSrc: '/post_production.mp4',
    poster: '/timeless_lustre.webp',
    accent: '#C8FF00',
    brief: 'Wedding Granth sought a luxury editorial film language capturing intimate, heirloom moments beyond standard coverage.',
    idea: 'Direct every frame like a cinematic heritage feature with nuanced lighting and rich color science.',
    approach: 'Shot on cinema primes with custom ACES color grading and bespoke acoustic score orchestration.',
    deliverables: ['Heirloom Wedding Films', 'Editorial Teaser Cuts', 'Cinematic Portrait Series', 'High-Res Stills Library'],
    outcome: 'Established Wedding Granth as a premier ultra-luxury wedding atelier across North & Central India.'
  },
  {
    id: 'viral-lab',
    num: '06',
    client: 'THE VIRAL LAB',
    title: 'HIGH-VELOCITY CREATIVE ENGINE',
    category: 'SHORT FORM CONTENT & GROWTH',
    servicesTag: 'CONTENT ENGINE / STRATEGY / FORMATS',
    mediaType: 'image',
    mediaSrc: '/social_media.webp',
    accent: '#FF4A0A',
    brief: 'The Viral Lab needed a rapid content production framework capable of testing 30+ short-form creative angles per month.',
    idea: 'Modular visual hooks combined with tight editorial pacing and bold typographic typography.',
    approach: 'Built a structured batch-production pipeline with rapid feedback loops and dynamic graphic templates.',
    deliverables: ['Short-Form Video Engine', 'Hook Templates', 'Dynamic Subtitle Systems', 'Monthly Batch Packs'],
    outcome: 'Consistent high-retention video formats that scaled organic reach and client acquisitions.'
  },
  {
    id: 'raasrang',
    num: '07',
    client: 'RAASRANG',
    title: 'CULTURAL CELEBRATION & FESTIVAL FILM',
    category: 'CAMPAIGN & EVENT PRODUCTION',
    servicesTag: 'EVENT FILM / STILLS / CAMPAIGN',
    mediaType: 'image',
    mediaSrc: '/rhythm_after_dark.webp',
    accent: '#2447FF',
    brief: 'RaasRang required vibrant multi-cam event documentation capturing thousands celebrating traditional heritage arts.',
    idea: 'Immerse viewers in rhythmic energy, bold traditional colors, and authentic community joy.',
    approach: 'Deployed dynamic gimbal rigs, drone coverage, and high-energy electronic folk sound design.',
    deliverables: ['Festival Aftermovie', 'Social Teaser Series', 'Live Photo Documentation', 'Sponsor Asset Pack'],
    outcome: 'Elevated festival equity and established the definitive annual cultural benchmark.'
  }
];

// ==========================================
// 5. INTERACTIVE SERVICE CARD COMPONENT
// ==========================================
function InteractiveServiceCard({ srv, index, onSelect, onCursorEnter, onCursorLeave, onHoverChange }) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate subtle smooth parallax ±4px X, ±3px Y
    const pX = Math.max(-4, Math.min(4, (e.clientX - centerX) / 25));
    const pY = Math.max(-3, Math.min(3, (e.clientY - centerY) / 25));
    setParallax({ x: pX, y: pY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHoverChange) onHoverChange(srv);
    onCursorEnter('service', 'EXPLORE ↗', srv.accentHex);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setParallax({ x: 0, y: 0 });
    if (onHoverChange) onHoverChange(null);
    onCursorLeave();
  };

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onSelect(srv);
      setIsTransitioning(false);
    }, 280);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-white rounded-2xl border p-6 sm:p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-500 ease-out ${
        isHovered 
          ? 'shadow-2xl -translate-y-1.5' 
          : 'shadow-sm translate-y-0'
      } ${isTransitioning ? 'scale-[1.02] opacity-90' : ''}`}
      style={{
        minHeight: '530px',
        borderColor: isHovered ? srv.accentHex : 'rgba(17,17,17,0.12)',
        transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease'
      }}
    >
      {/* Top subtle accent line on hover */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500 pointer-events-none"
        style={{ 
          backgroundColor: srv.accentHex,
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left'
        }}
      />

      <div>
        {/* 1. NUMBER & CATEGORY LABEL */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="font-mono text-xs font-black uppercase tracking-widest px-2.5 py-0.5 bg-[#111111] text-white rounded-full">
            {srv.num}
          </span>
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#111111]/50 group-hover:text-[#111111] transition-colors">
            {srv.subtitle}
          </span>
        </div>

        {/* 2. TITLE WITH SUBTLE HOVER SHIFT - FORCED 2-LINE FLEX TO GUARANTEE EQUAL HEIGHT */}
        <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#111111] leading-[1.08] mb-4 transition-transform duration-500 group-hover:translate-x-1 min-h-[3.6rem] sm:min-h-[4.2rem] flex flex-col justify-start">
          <span>{srv.titleFirst}</span>
          <span className="transition-colors duration-300">
            {srv.titleSecond}
          </span>
        </h3>

        {/* 3. IMAGE CONTAINER WITH PARALLAX & BESPOKE MICRO-INTERACTIONS */}
        <div 
          className="relative w-full rounded-xl overflow-hidden bg-black mb-4 border transition-all duration-500"
          style={{
            height: '180px',
            minHeight: '180px',
            maxHeight: '180px',
            borderColor: isHovered ? srv.accentHex : 'rgba(17,17,17,0.1)'
          }}
        >
          {/* Micro Animation: Card 01 Personal Brand (Subtle Echo Duplicate behind) */}
          {srv.id === 'personal-brand' && (
            <div 
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-10"
              style={{
                transform: isHovered ? 'translate3d(5px, -5px, 0) scale(1.04)' : 'translate3d(0, 0, 0)',
                opacity: isHovered ? 0.25 : 0,
                border: isHovered ? '1px solid #C8FF00' : 'none',
                borderRadius: '0.75rem',
                overflow: 'hidden'
              }}
            >
              <img src={srv.image} alt="" className="w-full h-full object-cover filter brightness-125" />
            </div>
          )}

          {/* Micro Animation: Card 02 Content (Thin Electric-Blue Scan Line Sweep) */}
          {srv.id === 'content' && (
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#2447FF]/35 to-transparent -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-in-out" />
            </div>
          )}

          {/* Micro Animation: Card 03 Production (REC Indicator + 4 Camera Corner Ticks + Orange Progress Sweep) */}
          {srv.id === 'production' && (
            <>
              <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 px-2 py-0.5 rounded backdrop-blur pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A0A] animate-pulse"></span>
                <span className="font-mono text-[8px] font-bold uppercase text-white tracking-widest">REC</span>
              </div>
              <div className="absolute inset-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white/90" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/90" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/90" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white/90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden bg-white/20">
                <div className="h-full bg-[#FF4A0A] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </div>
            </>
          )}

          {/* Micro Animation: Card 04 Presence (Digital Twin Ghost Overlay) */}
          {srv.id === 'presence' && (
            <div 
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out z-10"
              style={{
                transform: isHovered ? 'translate3d(-5px, 5px, 0) scale(1.04)' : 'translate3d(0, 0, 0)',
                opacity: isHovered ? 0.3 : 0,
                border: isHovered ? '1px solid #FF4F8B' : 'none',
                borderRadius: '0.75rem',
                overflow: 'hidden'
              }}
            >
              <img src={srv.image} alt="" className="w-full h-full object-cover filter contrast-125" />
              <div className="absolute inset-0 bg-[#FF4F8B]/20 mix-blend-screen" />
            </div>
          )}

          {/* The Real Original Image (100% visible with cursor parallax & scale) */}
          <img 
            src={srv.image} 
            alt={srv.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(${isHovered ? 1.06 : 1})`
            }}
          />

          {/* Subtle Transparent Color Wash (8-10% opacity only) */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{ 
              backgroundColor: srv.accentHex,
              opacity: isHovered ? 0.1 : 0
            }}
          />
        </div>

        {/* 4. ONE-SENTENCE DESCRIPTION WITH EQUALIZED MIN-HEIGHT */}
        <p className="text-sm text-[#111111]/80 leading-relaxed mb-4 font-sans min-h-[4.5rem] flex items-start">
          {srv.tagline}
        </p>

        {/* 5. SERVICE LIST WITH EQUALIZED MIN-HEIGHT & STAGGERED HOVER REVEAL */}
        <div className="space-y-1.5 border-t border-[#111111]/10 pt-3.5 mb-2 min-h-[6.5rem] flex flex-col justify-start">
          {srv.servicesList.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 text-xs font-semibold text-[#111111]/70 transition-all duration-300 group-hover:text-[#111111] group-hover:translate-x-1.5"
              style={{ 
                transitionDelay: `${idx * 45}ms`
              }}
            >
              <span 
                className="text-xs font-mono transition-transform duration-300 group-hover:scale-110"
                style={{ color: isHovered ? (srv.accentHex === '#C8FF00' ? '#111111' : srv.accentHex) : '#111111' }}
              >
                →
              </span>
              <span className="tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. BOTTOM CTA & INTERACTIVE ARROW BUTTON */}
      <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between mt-2">
        <span className="font-display font-bold text-xs uppercase tracking-wider text-[#111111] group-hover:underline underline-offset-4 group-hover:translate-x-0.5 transition-all">
          EXPLORE ↗
        </span>
        
        <div 
          className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{
            backgroundColor: isHovered ? (srv.accentHex === '#C8FF00' ? '#C8FF00' : srv.accentHex) : undefined,
            color: isHovered && srv.accentHex === '#C8FF00' ? '#111111' : '#ffffff'
          }}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

    </div>
  );
}

// ==========================================
// TVR 10s CINEMATIC INTRO BANNER COMPONENT
// ==========================================
function TVRCinematicIntroBanner() {
  const containerRef = useRef(null);
  const stRef = useRef(null);
  const bkRef = useRef(null);
  const lkRef = useRef(null);
  const r1Ref = useRef(null);
  const r2Ref = useRef(null);
  const grRef = useRef(null);
  const wmRef = useRef(null);
  const iddRef = useRef(null);
  const s1Ref = useRef(null);
  const s2Ref = useRef(null);
  const s3Ref = useRef(null);
  const s4Ref = useRef(null);
  const s5Ref = useRef(null);

  useEffect(() => {
    const D = 10;
    const cl = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
    const eo = (x) => 1 - Math.pow(1 - x, 4);
    const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const win = (t, a, b, f) => cl((t - a) / f) * cl((b - t) / f);

    const sc = [s1Ref.current, s2Ref.current, s3Ref.current, s4Ref.current, s5Ref.current];
    const T = [
      [0.25, 1.6],
      [1.5, 3.3],
      [3.2, 5.3],
      [5.2, 7.6],
      [7.5, 9.2]
    ];

    function show(el, t, a, b) {
      if (!el) return;
      const p = eo(cl((t - (a - 0.1)) / 0.6));
      const q = eio(cl((t - (b - 0.4)) / 0.4));
      el.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 ${q * 100}%)`;
      el.style.transform = `translateX(${(1 - p) * -2.5 + q * 2}cqw)`;
    }

    function streak(t, a, b) {
      const p = cl((t - a) / (b - a));
      return p > 0 && p < 1 ? eio(p) : -1;
    }

    function frame(t) {
      for (let i = 0; i < 5; i++) {
        show(sc[i], t, T[i][0], T[i][1]);
      }

      // streak: opening 0–1.3 and closing 9.2–10 (identical path => seamless loop)
      let s = streak(t, 0, 1.3);
      if (s < 0) s = streak(t, 9.2, 10);
      if (stRef.current) {
        if (s < 0) {
          stRef.current.style.opacity = '0';
        } else {
          stRef.current.style.opacity = '1';
          stRef.current.style.transform = `translateX(${s * 430}%)`;
        }
      }

      // bokeh: warm out-of-focus studio lights behind scenes 2–3
      const bo = win(t, 1.5, 5.4, 0.7) * 0.9;
      if (bkRef.current) {
        bkRef.current.style.opacity = String(bo);
        bkRef.current.style.transform = `translateX(${-4 + t * 1.8}cqw) scale(${1.05 + Math.sin(t * 1.3) * 0.03})`;
        bkRef.current.style.filter = `blur(${0.8 + 1.6 * (Math.sin(t * 1.7) * 0.5 + 0.5) + (t > 3.2 ? 1.2 : 0)}cqh)`;
      }

      // light leak in the big reveal
      const lp = cl((t - 5.2) / 2.6);
      if (lkRef.current) {
        lkRef.current.style.opacity = String(win(t, 5.2, 7.6, 0.5) * 0.6);
        lkRef.current.style.transform = `translateX(${lp * 210}%)`;
      }

      // lens reflections in the craft scene
      const rp = cl((t - 3.4) / 1.8);
      if (r1Ref.current) {
        r1Ref.current.style.opacity = String(win(t, 3.4, 5.2, 0.4) * 0.9);
        r1Ref.current.style.transform = `translateX(${rp * 820}%) skewX(-24deg)`;
      }

      const rq = cl((t - 3.8) / 1.8);
      if (r2Ref.current) {
        r2Ref.current.style.opacity = String(win(t, 3.8, 5.4, 0.4) * 0.8);
        r2Ref.current.style.transform = `translateX(${rq * 1500}%) skewX(-24deg)`;
      }

      // IDEAS enters slightly after WE MAKE
      if (wmRef.current) wmRef.current.style.opacity = String(eo(cl((t - 5.2) / 0.5)));
      if (iddRef.current) iddRef.current.style.opacity = String(eo(cl((t - 5.55) / 0.35)) * (t < 7.1 ? 1 : 1 - cl((t - 7.1) / 0.3) * 0));

      // grain jitter
      const k = Math.floor(t * 14);
      if (grRef.current) {
        grRef.current.style.transform = `translate(${(k * 37) % 9 - 4}%,${(k * 53) % 9 - 4}%)`;
      }
    }

    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) {
      frame(6.9);
      return;
    }

    let animationId;
    let t0 = null;
    function loop(n) {
      if (t0 === null) t0 = n;
      frame(((n - t0) / 1000) % D);
      animationId = requestAnimationFrame(loop);
    }

    frame(0);
    animationId = requestAnimationFrame(loop);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="tvr-cinematic-banner select-none"
      aria-label="TVR — We think. We create. We make ideas move."
    >
      <div ref={bkRef} className="tvr-cin-layer tvr-cin-bokeh" />
      <div ref={lkRef} className="tvr-cin-layer tvr-cin-leak" />
      <div ref={r1Ref} className="tvr-cin-layer tvr-cin-refl" />
      <div ref={r2Ref} className="tvr-cin-layer tvr-cin-refl" style={{ width: '6%' }} />
      <div ref={s1Ref} className="tvr-cin-sc"><div className="tvr-cin-t1">WE THINK<span className="tvr-cin-o">.</span></div></div>
      <div ref={s2Ref} className="tvr-cin-sc"><div className="tvr-cin-t1">WE CREATE<span className="tvr-cin-o">.</span></div></div>
      <div ref={s3Ref} className="tvr-cin-sc"><div className="tvr-cin-t1">WE FRAME <span className="tvr-cin-o">STORIES</span></div></div>
      <div ref={s4Ref} className="tvr-cin-sc tvr-cin-t4">
        <div ref={wmRef} className="tvr-cin-small"><span>WE</span><span>MAKE</span></div>
        <div ref={iddRef} className="tvr-cin-big">IDEAS<span className="tvr-cin-o">.</span></div>
      </div>
      <div ref={s5Ref} className="tvr-cin-sc tvr-cin-t5">
        <div className="tvr-cin-name">THE VISUAL ROOM</div>
        <div className="tvr-cin-tag">WE MAKE IDEAS MOVE.</div>
      </div>
      <div ref={stRef} className="tvr-cin-layer tvr-cin-streak" />
      <div className="tvr-cin-layer tvr-cin-vig" />
      <div ref={grRef} className="tvr-cin-layer tvr-cin-grain" />
    </div>
  );
}

// ==========================================
// 6. THE TVR FOUNDER CONTENT ENGINE IMMERSIVE EXPERIENCE
// ==========================================
function FounderPresenceEngineExperience({ onClose, onStartProject, onCursorEnter, onCursorLeave }) {
  const [activeBranch, setActiveBranch] = useState('reels');
  const [activeEngineStep, setActiveEngineStep] = useState(0);

  const branches = [
    {
      id: 'reels',
      title: 'Short-Form Video',
      tag: '60s VERTICAL / REELS & SHORTS',
      hook: '“The one hiring mistake that cost us 6 months of product velocity in Series A.”',
      format: 'Paced cuts + dynamic kinetic typography + authentic vocal cadence + high-retention hooks.'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Post',
      tag: 'LONG-FORM THOUGHT LEADERSHIP',
      hook: '“We completely dismantled our conventional sales pipeline. Here is the contrarian data:”',
      format: 'Structured editorial framework + actionable bullet takeaways + defensible founder perspective.'
    },
    {
      id: 'story',
      title: 'Founder Story',
      tag: 'NARRATIVE ORIGIN & CRITICAL PIVOTS',
      hook: '“Day 310: When 3 enterprise clients churned simultaneously on a single Tuesday morning.”',
      format: 'Cinematic documentary vignette + emotional resonance + founder vulnerability.'
    },
    {
      id: 'edu',
      title: 'Educational Content',
      tag: 'FRAMEWORK & SYSTEM BREAKDOWN',
      hook: '“The 4-stage decision matrix we use before writing a single line of backend architecture.”',
      format: 'Visual step schematics + clear conceptual breakdown + high-value founder IP.'
    },
    {
      id: 'explainer',
      title: 'Visual Explainer',
      tag: 'KINETIC MOTION & ARCHITECTURE',
      hook: '“How asynchronous vector embeddings actually communicate with operational databases.”',
      format: 'Studio-crafted 2D/3D motion graphics + dynamic kinetic titles.'
    },
    {
      id: 'campaign',
      title: 'Campaign Content',
      tag: 'KEYNOTE & PLATFORM ANNOUNCEMENT',
      hook: '“Introducing TVR Engine 3.0: Engineered for the next decade of founder omnipresence.”',
      format: 'High-impact launch sequence + modular social cutdowns deployed across all channels.'
    }
  ];

  const engineSteps = [
    {
      num: '01',
      title: 'YOU TALK',
      subtitle: 'THE INPUT',
      desc: 'One 45-minute monthly conversational session. You speak freely with our creative directors about your insights, challenges, market observations and company milestones. No scripts needed.',
      accent: '#FF4F8B'
    },
    {
      num: '02',
      title: 'TVR FINDS THE STORY',
      subtitle: 'NARRATIVE EXTRACTION',
      desc: 'Our editorial team analyzes the session transcript, isolating 12–20 defensible narrative hooks, contrarian insights and actionable frameworks.',
      accent: '#749A00'
    },
    {
      num: '03',
      title: 'WE WRITE',
      subtitle: 'EDITORIAL SCRIPTING',
      desc: 'We craft multi-platform scripts, thought leadership essays and visual concepts designed in your exact voice, tone and vocabulary.',
      accent: '#2447FF'
    },
    {
      num: '04',
      title: 'WE PRODUCE',
      subtitle: 'STUDIO CRAFT',
      desc: 'TVR engineers the visual templates, custom typography suites, sound design and portrait cinematography direction.',
      accent: '#FF4A0A'
    },
    {
      num: '05',
      title: 'AI ASSISTS',
      subtitle: 'CONTROLLED SCALING',
      desc: 'Using consent-based AI voice cloning and high-fidelity digital twin workflows, we synthesize format variations without booking additional shoot days.',
      accent: '#FF4F8B'
    },
    {
      num: '06',
      title: 'WE EDIT',
      subtitle: 'POST PRODUCTION',
      desc: 'Human editors refine color grading, audio master finishing, subtitle animation and visual rhythm so every frame meets TVR cinema standards.',
      accent: '#749A00'
    },
    {
      num: '07',
      title: 'YOU STAY VISIBLE',
      subtitle: 'DISTRIBUTION SCALE',
      desc: 'A steady stream of multi-channel content deploys continuously while your calendar remains completely protected for leading your company.',
      accent: '#2447FF'
    }
  ];

  const whatWeBuildItems = [
    { num: '01', title: 'FOUNDER POSITIONING', desc: 'Identify your category moat, defensible voice and core messaging pillars.' },
    { num: '02', title: 'CONTENT STRATEGY', desc: 'Repeatable editorial themes and weekly publishing architecture.' },
    { num: '03', title: 'VOICE CLONING', desc: 'Studio-trained acoustic voice clone built with real nuance and cadence.' },
    { num: '04', title: 'DIGITAL TWIN', desc: 'High-fidelity visual representations for approved formats.' },
    { num: '05', title: 'SCRIPT DEVELOPMENT', desc: 'Crisp, high-retention hooks and thought leadership essays.' },
    { num: '06', title: 'VISUAL PRODUCTION', desc: 'Cinematic color palettes, typography suites and framing layouts.' },
    { num: '07', title: 'AI-ASSISTED CONTENT', desc: 'Rapid adaptation of core insights across diverse formats.' },
    { num: '08', title: 'CONTENT REPURPOSING', desc: 'Transforming single thoughts into vertical reels, carousels and posts.' },
    { num: '09', title: 'CONTENT ENGINE', desc: 'An ongoing monthly operating system that runs seamlessly in the background.' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#111111] selection:bg-[#FF4F8B] selection:text-white relative">
      
      {/* ========================================================================= */}
      {/* 00. STICKY TOP NAVIGATION BAR                                             */}
      {/* ========================================================================= */}
      <div className="border-b border-[#111111]/10 bg-[#F5F1E8]/95 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onClose}
            onMouseEnter={() => onCursorEnter('hover', 'BACK')}
            onMouseLeave={onCursorLeave}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#111111] hover:text-[#FF4F8B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SITE</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF4F8B] px-3 py-1 bg-[#FF4F8B]/10 border border-[#FF4F8B]/30 rounded-full font-bold">
              TVR FOUNDER CONTENT ENGINE
            </span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-[#111111]/50 font-semibold">
              CONSENT-BASED · FOUNDER-LED
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 01. HERO — ONE CONVERSATION, MONTHS OF CONTENT                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-32 border-b border-[#111111]/10 relative bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-[#FF4F8B] text-white rounded-full mb-8 shadow-md">
            <span>TVR FOUNDER CONTENT ENGINE</span>
            <span>·</span>
            <span className="text-white/90">AI × STORY × PRODUCTION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#111111] leading-[0.92] mb-8">
                ONE CONVERSATION<br />
                <span className="text-[#FF4F8B]">MONTHS OF CONTENT</span>
              </h1>

              <p className="text-xl sm:text-2xl text-[#111111]/80 font-normal leading-relaxed mb-10 max-w-2xl">
                Your expertise is already there. TVR turns your conversations, opinions, stories and knowledge into a repeatable content engine — without making content another full-time job.
              </p>

              {/* Core Positioning Capsule Box */}
              <div className="p-6 sm:p-7 bg-white border border-[#111111]/15 rounded-2xl mb-10 shadow-sm">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#749A00] font-bold block mb-2">
                  THE CORE TVR POSITIONING
                </span>
                <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4 font-display font-black text-xl sm:text-2xl uppercase tracking-tight">
                  <span className="text-[#111111]">YOU BUILD THE COMPANY</span>
                  <span className="text-[#FF4F8B]">✦</span>
                  <span className="text-[#FF4F8B]">WE BUILD YOUR PRESENCE</span>
                </div>
                <p className="text-xs font-mono text-[#111111]/60 mt-3 font-medium">
                  AI is the technology layer. TVR is the creative system.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('engine-capture');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => onCursorEnter('hover', 'DISCOVER')}
                  onMouseLeave={onCursorLeave}
                  className="bg-[#111111] text-white hover:bg-[#FF4F8B] font-display text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md"
                >
                  <span>SEE HOW IT WORKS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onStartProject('Founder AI Presence Engine')}
                  onMouseEnter={() => onCursorEnter('cta', 'START')}
                  onMouseLeave={onCursorLeave}
                  className="bg-white border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-display text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-full flex items-center gap-2 transition-all"
                >
                  <span>START THE SYSTEM ↗</span>
                </button>
              </div>
            </div>

            {/* Hero Right Visual: Split Studio / Presence Interface */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#111111] bg-black shadow-2xl">
                <video 
                  src="/presence.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full aspect-[4/5] object-cover opacity-90"
                />
                
                {/* Overlay Graphic Interface HUD */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-black/80 text-[#C8FF00] border border-[#C8FF00]/40 rounded-full">
                      ● LIVE REPURPOSING ENGINE
                    </span>
                    <span className="font-mono text-[10px] uppercase text-white/60">
                      SESSION 01 // 45:00
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Live Waveform Equalizer Mock */}
                    <div className="p-4 bg-black/75 border border-white/15 rounded-xl backdrop-blur">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF4F8B] font-bold">
                          FOUNDER VOICE HARMONICS
                        </span>
                        <span className="font-mono text-[9px] text-[#C8FF00]">
                          100% CONSENT VERIFIED
                        </span>
                      </div>
                      <div className="flex items-center gap-1 h-6">
                        {[40, 65, 85, 30, 95, 70, 50, 80, 100, 45, 60, 90, 75, 40, 85, 95, 60, 30, 70, 80].map((h, idx) => (
                          <span 
                            key={idx} 
                            className="flex-1 bg-[#FF4F8B] rounded-full transition-all duration-300 animate-pulse"
                            style={{ 
                              height: `${h}%`,
                              animationDelay: `${idx * 75}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 bg-white/10 rounded-lg border border-white/10">
                        <span className="font-mono text-[9px] text-white/50 block">OUTPUT 01</span>
                        <span className="font-display text-xs font-bold text-white uppercase">14 Video Cutdowns</span>
                      </div>
                      <div className="p-2.5 bg-white/10 rounded-lg border border-white/10">
                        <span className="font-mono text-[9px] text-white/50 block">OUTPUT 02</span>
                        <span className="font-display text-xs font-bold text-white uppercase">8 LinkedIn Essays</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 01 — CAPTURE YOUR VOICE                                                   */}
      {/* ========================================================================= */}
      <section id="engine-capture" className="py-24 sm:py-32 border-b border-[#111111]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-3">
                STAGE 01 // THE INGESTION
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none mb-4">
                01 / CAPTURE YOUR VOICE
              </h2>
              <p className="font-mono text-sm uppercase tracking-wider text-[#749A00] font-bold mb-6">
                ONE CONVERSATION. THAT'S THE START.
              </p>
              <p className="text-lg text-[#111111]/80 leading-relaxed font-sans">
                We capture the founder's voice, communication style, ideas, opinions, stories and expertise through a structured recording session.
              </p>
            </div>

            {/* 4 Extraction Anchors */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#FF4F8B] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#FF4F8B] text-white flex items-center justify-center font-mono text-xs font-bold mb-4 shadow-sm">
                  01
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-[#111111] mb-2">
                  VOICE & SPEAKING STYLE
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Cadence, tonality, vocal pacing, natural colloquialisms and signature phrases that make your delivery recognizable.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#749A00] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#749A00] text-white flex items-center justify-center font-mono text-xs font-bold mb-4 shadow-sm">
                  02
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-[#111111] mb-2">
                  FOUNDER STORIES
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Origin moments, critical pivots, hard-learned lessons, failures, hiring philosophies and company milestones.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#2447FF] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#2447FF] text-white flex items-center justify-center font-mono text-xs font-bold mb-4 shadow-sm">
                  03
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-[#111111] mb-2">
                  INDUSTRY OPINIONS
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Contrarian viewpoints, market observations, tactical teardowns and forward-looking sector theses.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#FF4A0A] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#FF4A0A] text-white flex items-center justify-center font-mono text-xs font-bold mb-4 shadow-sm">
                  04
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-[#111111] mb-2">
                  BRAND LANGUAGE
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Editorial stance, terminology, tone-of-voice governance and company mission alignment.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Audio Recording & Transcript Assembler Simulator */}
          <div className="p-8 rounded-3xl bg-[#111111] border-2 border-[#111111] relative overflow-hidden shadow-2xl text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF4F8B] animate-ping" />
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-white">
                  STUDIO SESSION INGESTION CONSOLE
                </span>
              </div>
              <span className="font-mono text-xs text-[#C8FF00]">
                STATUS: ASSEMBLING NARRATIVE OBJECTS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <span className="text-[#FF4F8B] block font-bold">[RAW TRANSCRIPT INGEST]</span>
                <p className="text-white/80 italic">
                  “When we were at 15 people, I spent 80% of my time reviewing pull requests. The minute we hired our VP of Eng, our release velocity doubled...”
                </p>
                <span className="text-[10px] text-white/40 block">TIMESTAMP: 00:14:32 // 48kHz WAV</span>
              </div>

              <div className="flex flex-col items-center justify-center text-center p-4">
                <div className="font-mono text-xs text-[#C8FF00] font-bold mb-2">
                  → TVR STORY EXTRACTION →
                </div>
                <div className="flex items-center gap-1.5 h-12 w-full justify-center">
                  {[20, 50, 90, 30, 70, 100, 60, 40, 80, 95, 35, 65, 85, 45, 90].map((val, i) => (
                    <span 
                      key={i} 
                      className="w-1.5 bg-[#FF4F8B] rounded-full animate-pulse"
                      style={{ height: `${val}%`, animationDelay: `${i * 90}ms` }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-white/50 mt-2">Harmonic synthesis & pattern analysis</span>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <span className="text-[#C8FF00] block font-bold">[EXTRACTED STORY OBJECT]</span>
                <p className="text-white font-semibold">
                  Hook: “Why technical founders must stop code-reviewing after employee #15.”
                </p>
                <span className="text-[10px] text-[#2447FF] block font-bold">READY FOR SCRIPT & CLONE ENGINE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — BUILD YOUR DIGITAL TWIN                                              */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-3">
              STAGE 02 // VISUAL & VOCAL REPRESENTATION
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none mb-4">
              02 / BUILD YOUR DIGITAL TWIN
            </h2>
            <p className="font-mono text-sm uppercase tracking-wider text-[#749A00] font-bold mb-6">
              YOUR PRESENCE, WITHOUT BEING ON CAMERA EVERY TIME
            </p>
            <p className="text-xl text-[#111111]/80 leading-relaxed font-normal">
              Using consent-based AI voice and visual cloning workflows, TVR creates a digital representation of the founder for approved content formats.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-[#111111]/15 shadow-sm">
              <Mic className="w-6 h-6 text-[#FF4F8B] mb-4" />
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#111111] mb-2">
                AI VOICE CLONE
              </h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Trained on high-resolution acoustic captures with nuanced inflection and natural rhythm.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#111111]/15 shadow-sm">
              <UserCheck className="w-6 h-6 text-[#749A00] mb-4" />
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#111111] mb-2">
                VISUAL / DIGITAL TWIN
              </h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Clean, realistic video avatar representation governed 100% by founder approvals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#111111]/15 shadow-sm">
              <Layers className="w-6 h-6 text-[#2447FF] mb-4" />
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#111111] mb-2">
                FOUNDER TEMPLATES
              </h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Custom editorial layouts, kinetic caption hierarchies and portrait framing systems.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#111111]/15 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#FF4A0A] mb-4" />
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#111111] mb-2">
                BRAND-CONSISTENT
              </h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Art-directed by TVR so every piece looks like a high-budget creative studio delivery.
              </p>
            </div>
          </div>

          {/* Editorial Visual Stack: ONE → TWO → FOUR → MANY */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#111111] shadow-lg">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-2">
                THE MULTIPLICATION PROGRESSION
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
                ONE → TWO → FOUR → MANY
              </h3>
              <p className="text-sm text-[#111111]/70 mt-2 font-medium">
                One authentic founder identity continuously powering multi-channel distribution streams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/15 text-center">
                <span className="font-mono text-xs text-[#FF4F8B] font-bold block mb-2">1. THE SOURCE</span>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-black border border-[#111111]/20">
                  <img src="/photography.webp" alt="Founder Source" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-sm uppercase text-[#111111]">1 Master Ingest</h4>
                <p className="text-xs text-[#111111]/60 mt-1">45 min live conversation</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/15 text-center">
                <span className="font-mono text-xs text-[#749A00] font-bold block mb-2">2. THE CORE TWIN</span>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-black border border-[#111111]/20 relative">
                  <img src="/photography.webp" alt="Digital Twin" className="w-full h-full object-cover filter contrast-125" />
                  <div className="absolute inset-0 bg-[#FF4F8B]/15 mix-blend-screen" />
                </div>
                <h4 className="font-display font-bold text-sm uppercase text-[#111111]">Voice & Likeness</h4>
                <p className="text-xs text-[#111111]/60 mt-1">Calibrated clone baseline</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/15 text-center">
                <span className="font-mono text-xs text-[#2447FF] font-bold block mb-2">4. FORMAT ADAPTATIONS</span>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-white border border-[#111111]/20 grid grid-cols-2 gap-1 p-1">
                  <div className="bg-[#2447FF]/10 text-[#2447FF] rounded flex items-center justify-center font-mono text-[9px] font-bold">REEL</div>
                  <div className="bg-[#FF4F8B]/10 text-[#FF4F8B] rounded flex items-center justify-center font-mono text-[9px] font-bold">ESSAY</div>
                  <div className="bg-[#749A00]/10 text-[#749A00] rounded flex items-center justify-center font-mono text-[9px] font-bold">STORY</div>
                  <div className="bg-[#FF4A0A]/10 text-[#FF4A0A] rounded flex items-center justify-center font-mono text-[9px] font-bold">QUOTE</div>
                </div>
                <h4 className="font-display font-bold text-sm uppercase text-[#111111]">Modular Templates</h4>
                <p className="text-xs text-[#111111]/60 mt-1">Art-directed layouts</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FF4F8B]/10 border border-[#FF4F8B]/40 text-center">
                <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-2">MANY. CONTINUOUS SCALE</span>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-white border border-[#FF4F8B]/30 flex flex-col items-center justify-center p-4">
                  <Repeat className="w-8 h-8 text-[#FF4F8B] mb-2 animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="font-display font-black text-2xl text-[#111111]">30+</span>
                  <span className="font-mono text-[10px] text-[#111111]/70 uppercase font-bold">Pieces Monthly</span>
                </div>
                <h4 className="font-display font-bold text-sm uppercase text-[#111111]">Omnipresent Brand</h4>
                <p className="text-xs text-[#111111]/60 mt-1">Zero founder camera time</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — VOICE QUALITY                                                        */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111] bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-black border-2 border-white/15 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-4">
                STAGE 03 // ACOUSTIC FIDELITY & CRAFT
              </span>
              
              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95] mb-6">
                IF IT SOUNDS AI,<br />
                <span className="text-[#FF4F8B]">WE HAVEN'T DONE IT RIGHT</span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/80 font-normal leading-relaxed mb-8">
                We build studio-quality voice cloning designed around the founder's real voice, tone and delivery.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="font-mono text-xs uppercase font-bold tracking-widest px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full">
                  CLEAN
                </span>
                <span className="font-mono text-xs uppercase font-bold tracking-widest px-4 py-2 bg-white/10 text-[#C8FF00] border border-[#C8FF00]/30 rounded-full">
                  NATURAL
                </span>
                <span className="font-mono text-xs uppercase font-bold tracking-widest px-4 py-2 bg-white/10 text-[#FF4F8B] border border-[#FF4F8B]/30 rounded-full">
                  FOUNDER-SPECIFIC
                </span>
              </div>

              <p className="text-sm text-white/60 font-mono">
                No robotic cadence. No uncanny artifacts. Precision audio mastering calibrated for broadcast credibility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — ONE IDEA → MANY WAYS TO SHOW UP                                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#749A00] font-bold block mb-3">
              STAGE 04 // THE BRANCHING ENGINE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none mb-4">
              ONE IDEA. MANY WAYS TO SHOW UP.
            </h2>
            <p className="text-lg sm:text-xl text-[#111111]/80 leading-relaxed font-normal">
              A founder shouldn't have to repeat the same idea ten different ways. TVR turns one conversation, opinion or insight into multiple content formats.
            </p>
          </div>

          {/* Interactive Branching Visual Component */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Central Hub & Branch Selector */}
            <div className="lg:col-span-6 space-y-3">
              
              <div className="p-6 rounded-2xl bg-white border-2 border-[#FF4F8B] mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#FF4F8B]">THE CORE SEED</span>
                  <span className="font-mono text-[10px] text-[#111111]/60 font-bold">45 MIN RECORDING</span>
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111]">
                  ONE FOUNDER CONVERSATION
                </h3>
                <p className="text-xs font-mono text-[#111111]/70 mt-2 font-medium">
                  ↓ Select a branch below to preview output format ↓
                </p>
              </div>

              <div className="space-y-2">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBranch(b.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      activeBranch === b.id 
                        ? 'bg-[#FF4F8B] text-white border-[#FF4F8B] shadow-md translate-x-2' 
                        : 'bg-white text-[#111111] border-[#111111]/15 hover:border-[#111111]'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider block opacity-75 font-semibold">{b.tag}</span>
                      <span className="font-display font-bold text-base uppercase tracking-tight">{b.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeBranch === b.id ? 'translate-x-1 text-white' : 'text-[#111111]/40'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Live Branch Preview Display */}
            <div className="lg:col-span-6">
              {(() => {
                const current = branches.find(b => b.id === activeBranch) || branches[0];
                return (
                  <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#111111] shadow-xl relative text-[#111111]">
                    <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold">
                        {current.tag}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-[#111111]/50 font-semibold">
                        OUTPUT FORMAT PREVIEW
                      </span>
                    </div>

                    <div className="mb-6">
                      <span className="font-mono text-[10px] uppercase text-[#111111]/50 block mb-2 font-bold">GENERATED HOOK & TITLE</span>
                      <h4 className="font-display font-bold text-2xl text-[#111111] leading-snug">
                        {current.hook}
                      </h4>
                    </div>

                    <div className="p-5 bg-[#F5F1E8] rounded-2xl border border-[#111111]/10 mb-6 space-y-2">
                      <span className="font-mono text-[10px] uppercase text-[#FF4F8B] font-bold block">
                        TVR PRODUCTION SPECIFICATION
                      </span>
                      <p className="text-sm text-[#111111]/80 leading-relaxed font-sans">
                        {current.format}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#111111]/10 text-xs font-mono text-[#111111]/60">
                      <span className="font-semibold">VOICE CLONED & VERIFIED</span>
                      <span className="text-[#749A00] font-bold">READY FOR DISTRIBUTION</span>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — THE CONTENT ENGINE (FROM KNOWLEDGE TO CONTENT)                       */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-3">
              STAGE 05 // THE CREATIVE MACHINE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none mb-4">
              FROM KNOWLEDGE TO CONTENT
            </h2>
            <p className="text-lg text-[#111111]/80 leading-relaxed font-sans">
              A creative operating system engineered specifically for founders who value their time.
            </p>
          </div>

          {/* 7 Sequential Operating System Stages */}
          <div className="space-y-4">
            {engineSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#111111] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-6">
                  <span 
                    className="font-mono text-xl sm:text-2xl font-black px-4 py-2 rounded-xl bg-white shadow-sm border border-[#111111]/10"
                    style={{ color: step.accent === '#749A00' ? '#749A00' : step.accent }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#111111]/50 block font-bold">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#111111]/70 max-w-xl leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — THE FOUNDER TIME PROBLEM (BEFORE VS WITH TVR)                        */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#749A00] font-bold block mb-3">
              STAGE 06 // ASYMMETRIC ADVANTAGE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-tight mb-4">
              YOU HAVE A COMPANY TO RUN.<br />
              <span className="text-[#FF4F8B]">NOT A CONTENT STUDIO.</span>
            </h2>
          </div>

          {/* Before vs With TVR Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Before TVR */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#111111]/15 opacity-85 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4A0A] font-bold block mb-4">
                BEFORE TVR // HIGH FRICTION
              </span>
              <div className="space-y-3 font-mono text-sm">
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">IDEA</div>
                <div className="text-center text-[#111111]/40">↓</div>
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">SCRIPT</div>
                <div className="text-center text-[#111111]/40">↓</div>
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">SHOOT (Half Day Blocked)</div>
                <div className="text-center text-[#111111]/40">↓</div>
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">RETAKES</div>
                <div className="text-center text-[#111111]/40">↓</div>
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">EDIT & CORRECTIONS</div>
                <div className="text-center text-[#111111]/40">↓</div>
                <div className="p-3 bg-[#F5F1E8] rounded-lg text-[#111111]/80">APPROVAL & POSTING</div>
              </div>
              <p className="text-xs text-[#FF4A0A] font-mono mt-6 font-bold">
                Outcome: Founder fatigue, inconsistent posting, calendar burnout.
              </p>
            </div>

            {/* With TVR */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#FF4F8B] relative shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4F8B] font-bold block mb-4">
                WITH TVR // THE ASYMMETRIC SYSTEM
              </span>
              
              <div className="p-6 bg-[#111111] text-white rounded-2xl mb-6">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest block text-[#C8FF00]">FOUNDER INPUT</span>
                <h4 className="font-display font-black text-3xl uppercase tracking-tight">YOU TALK.</h4>
                <p className="text-xs font-semibold mt-1 text-white/80">One 45-min monthly conversation.</p>
              </div>

              <div className="p-6 bg-[#F5F1E8] rounded-2xl border border-[#111111]/10 space-y-3">
                <span className="font-mono text-xs uppercase text-[#FF4F8B] font-bold block">
                  TVR EXECUTES THE SYSTEM:
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs text-[#111111] font-bold">
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ THINKS</div>
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ WRITES</div>
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ PRODUCES</div>
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ CLONES</div>
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ EDITS</div>
                  <div className="p-2 bg-white rounded border border-[#111111]/10">✦ REPURPOSES</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#FF4F8B]/10 border border-[#FF4F8B]/30 rounded-xl text-center">
                <span className="font-display font-black text-sm uppercase text-[#111111] tracking-wider">
                  THE FOUNDER'S TIME IS PROTECTED.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — TIME SAVED STATEMENT                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-4">
            STAGE 07 // FOCUS ASYMMETRY
          </span>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#111111] leading-[0.9] mb-8">
            LESS TIME CREATING.<br />
            <span className="text-[#FF4A0A]">MORE TIME LEADING.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#111111]/80 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Instead of repeatedly planning shoots, writing scripts and creating every piece from scratch, the founder contributes the thinking — TVR builds the system around it.
          </p>

          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2 bg-[#F5F1E8] border border-[#111111]/15 rounded-full text-[#111111]/70 font-semibold">
            <span>NO FAKE ROI CLAIMS · STRICT FOCUS GOVERNANCE</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — HOW IT WORKS: THE DIVISION OF LABOR (YOU → TVR → YOUR PRESENCE)      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold">
                HOW IT WORKS
              </span>
              <span className="text-[#111111]/30">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/60 font-semibold">
                THE DIVISION OF LABOR
              </span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-[0.95] mb-6">
              YOU BRING THE THINKING.<br />
              <span className="text-[#FF4F8B]">WE BUILD EVERYTHING AROUND IT.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#111111]/80 leading-relaxed font-sans max-w-2xl">
              You don't need to become a content creator. You need to keep being the founder. TVR turns your knowledge, experience and perspective into a repeatable content system.
            </p>
          </div>

          {/* 3 Connected Stages Horizontally (Desktop) / Vertically (Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-2 items-stretch">
            
            {/* STAGE 01 — YOU (Compact Editorial Card) */}
            <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border border-[#111111]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#749A00] font-bold">
                    01 / YOU
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#111111]/50 font-bold bg-[#F5F1E8] px-2 py-0.5 rounded">
                    FOUNDER INPUT
                  </span>
                </div>

                <div className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111] leading-none space-y-1 mb-6">
                  <div>THINK.</div>
                  <div>TALK.</div>
                  <div className="text-[#749A00]">LEAD.</div>
                </div>

                {/* Founder's Raw Thinking Points */}
                <div className="space-y-2 mb-6">
                  {[
                    'Your expertise.',
                    'Your experience.',
                    'Your opinions.',
                    'Your decisions.'
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#111111]/80">
                      <span className="text-[#749A00] text-xs">✦</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle Audio Waveform Visual (Founder's Voice) */}
                <div className="p-3.5 bg-[#F5F1E8] rounded-xl border border-[#111111]/10 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#111111]/60 font-bold">
                      VOICE & THINKING STREAM
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#749A00] animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 h-5">
                    {[35, 60, 90, 45, 80, 50, 95, 70, 40, 85, 60, 30, 75, 90, 40, 65].map((h, i) => (
                      <span 
                        key={i} 
                        className="flex-1 bg-[#111111]/70 rounded-full group-hover:bg-[#749A00] transition-colors duration-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="pt-4 border-t border-[#111111]/10">
                <span className="font-mono text-[10px] uppercase text-[#111111]/50 block font-bold">YOUR JOB:</span>
                <span className="font-display font-black text-xs uppercase tracking-wider text-[#111111]">
                  GIVE US THE RAW MATERIAL.
                </span>
              </div>
            </div>

            {/* CONNECTOR 01 (Between YOU & TVR) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-3 lg:py-0">
              <div className="hidden lg:flex flex-col items-center justify-center w-full px-1">
                <div className="w-full h-[2px] bg-gradient-to-r from-[#749A00]/40 via-[#FF4F8B] to-[#FF4F8B]/40 relative flex items-center justify-center">
                  <span className="absolute -top-3.5 bg-[#F5F1E8] px-1 font-mono text-[8px] uppercase tracking-wider text-[#111111]/70 font-bold text-center whitespace-nowrap">
                    GIVE US THE IDEA
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center text-[10px] shadow-sm">
                    →
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden items-center gap-2 font-mono text-[10px] uppercase font-bold text-[#111111]/70">
                <span>↓ GIVE US THE IDEA</span>
              </div>
            </div>

            {/* STAGE 02 — TVR (Dominant Center Panel) */}
            <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#111111] shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold">
                    02 / TVR
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold bg-[#FF4F8B] px-2.5 py-0.5 rounded-full shadow-sm">
                    CREATIVE SYSTEM
                  </span>
                </div>

                <div className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111] leading-none mb-5">
                  WE BUILD<br />
                  <span className="text-[#FF4F8B]">THE SYSTEM.</span>
                </div>

                {/* Vertical Process Steps Flow */}
                <div className="p-3 bg-[#F5F1E8] rounded-2xl border border-[#111111]/10 mb-5 space-y-1">
                  {[
                    { step: 'STRATEGY', isAI: false },
                    { step: 'STORY', isAI: false },
                    { step: 'SCRIPT', isAI: false },
                    { step: 'PRODUCTION', isAI: false },
                    { step: 'AI', isAI: true },
                    { step: 'EDIT', isAI: false },
                    { step: 'DISTRIBUTION', isAI: false }
                  ].map((item, idx, arr) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center justify-between px-2.5 py-1 rounded-md transition-all group-hover:bg-white/80">
                        <span 
                          className={`font-mono text-xs uppercase tracking-wider ${
                            item.isAI 
                              ? 'font-black text-[#FF4F8B] bg-[#FF4F8B]/10 px-2 py-0.5 rounded border border-[#FF4F8B]/30' 
                              : 'font-bold text-[#111111]/80'
                          }`}
                        >
                          {item.step}
                        </span>
                        <span className="font-mono text-[9px] text-[#111111]/40 font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <div className="text-center text-[10px] text-[#111111]/30 leading-none py-0.5">
                          ↓
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Supporting Copy & TVR Stance */}
              <div className="pt-4 border-t border-[#111111]/10">
                <p className="text-xs text-[#111111]/80 leading-relaxed font-sans font-medium">
                  We turn one founder's knowledge into a repeatable content engine.
                </p>
              </div>
            </div>

            {/* CONNECTOR 02 (Between TVR & OUTPUT) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-3 lg:py-0">
              <div className="hidden lg:flex flex-col items-center justify-center w-full px-1">
                <div className="w-full h-[2px] bg-gradient-to-r from-[#FF4F8B]/40 via-[#2447FF] to-[#2447FF]/40 relative flex items-center justify-center">
                  <span className="absolute -top-4 bg-[#F5F1E8] px-1 font-mono text-[8px] uppercase tracking-wider text-[#111111]/70 font-bold text-center whitespace-nowrap leading-tight">
                    TURN ONE VOICE<br />INTO MANY OUTPUTS
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center text-[10px] shadow-sm">
                    →
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden items-center gap-2 font-mono text-[10px] uppercase font-bold text-[#111111]/70">
                <span>↓ TURN ONE VOICE INTO MANY OUTPUTS</span>
              </div>
            </div>

            {/* STAGE 03 — YOUR PRESENCE (Output Panel) */}
            <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border border-[#111111]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2447FF] font-bold">
                    03 / OUTPUT
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#111111]/50 font-bold bg-[#F5F1E8] px-2 py-0.5 rounded">
                    OMNIPRESENCE
                  </span>
                </div>

                <div className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111] leading-none mb-3">
                  YOU STAY<br />
                  <span className="text-[#2447FF]">VISIBLE.</span>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/60 font-bold mb-4">
                  ONE CONVERSATION CAN BECOME:
                </p>

                {/* Content Output Chips (Expanding slightly on hover) */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    { name: 'REELS', color: '#FF4F8B' },
                    { name: 'LINKEDIN', color: '#2447FF' },
                    { name: 'FOUNDER STORIES', color: '#749A00' },
                    { name: 'THOUGHT LEADERSHIP', color: '#FF4A0A' },
                    { name: 'EDUCATIONAL CONTENT', color: '#2447FF' },
                    { name: 'CAMPAIGNS', color: '#FF4F8B' }
                  ].map((fmt, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F5F1E8] border border-[#111111]/10 text-center font-display font-black text-[11px] uppercase tracking-tight text-[#111111] group-hover:border-[#111111]/30 transition-all transform group-hover:scale-[1.02]"
                    >
                      <span className="block text-[8px] font-mono text-[#111111]/40 font-semibold mb-0.5">FORMAT 0{idx+1}</span>
                      <span style={{ color: fmt.color }}>{fmt.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Statement */}
              <div className="pt-4 border-t border-[#111111]/10">
                <span className="font-display font-black text-xs uppercase tracking-wider text-[#111111] block">
                  WITHOUT MAKING CONTENT<br />
                  <span className="text-[#FF4F8B]">ANOTHER FULL-TIME JOB.</span>
                </span>
              </div>
            </div>

          </div>

          {/* Big Transformation Line Below The 3 Stages */}
          <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl bg-white border border-[#111111]/15 text-center shadow-sm">
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#111111] mb-3">
              ONE FOUNDER. ONE VOICE. MULTIPLE WAYS TO SHOW UP.
            </h3>
            <p className="text-base sm:text-lg text-[#111111]/70 font-sans max-w-2xl mx-auto">
              Your time stays focused on the business. Your presence keeps moving.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 — THE MULTIPLIER (ONE SOURCE → MULTIPLE OUTPUTS)                       */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-3">
              STAGE 09 // DISTRIBUTION HORIZONS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none mb-4">
              ONE FOUNDER. MULTIPLE FORMATS.
            </h2>
            <p className="font-mono text-sm uppercase tracking-wider text-[#749A00] font-bold">
              ONE SOURCE. MULTIPLE OUTPUTS.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: 'REELS', tag: 'Vertical Video', color: '#FF4F8B' },
              { title: 'LINKEDIN', tag: 'Thought Leadership', color: '#2447FF' },
              { title: 'THOUGHT LEADERSHIP', tag: 'Essays & Frameworks', color: '#749A00' },
              { title: 'FOUNDER STORIES', tag: 'Narrative Vignettes', color: '#FF4A0A' },
              { title: 'EDUCATIONAL CONTENT', tag: 'Step Guides', color: '#FF4A0A' },
              { title: 'CAMPAIGNS', tag: 'Keynote Assets', color: '#FF4F8B' },
              { title: 'SHORT-FORM VIDEO', tag: 'Viral Hooks', color: '#2447FF' },
              { title: 'VISUAL CONTENT', tag: 'Editorial Stills', color: '#749A00' }
            ].map((f, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F1E8] border border-[#111111]/10 hover:border-[#111111] text-center flex flex-col justify-between aspect-square transition-all shadow-sm hover:shadow-md"
              >
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#111111]/50 block font-bold">
                  {f.tag}
                </span>
                <h4 
                  className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight"
                  style={{ color: f.color }}
                >
                  {f.title}
                </h4>
                <span className="font-mono text-[10px] text-[#111111]/60 font-bold">OUTPUT 0{idx + 1}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 — WHAT WE ACTUALLY BUILD                                               */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-[#111111]/10 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#749A00] font-bold block mb-3">
              STAGE 10 // SYSTEM DELIVERABLES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#111111] leading-none">
              WHAT WE ACTUALLY BUILD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeBuildItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#111111]/15 hover:border-[#FF4F8B] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-xs text-[#FF4F8B] font-bold block mb-4">
                    [{item.num}]
                  </span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#111111]/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 — FINAL STATEMENT & CTA                                                */}
      {/* ========================================================================= */}
      <section className="py-28 sm:py-40 bg-[#111111] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4F8B] font-bold block mb-6">
            THE COMMITMENT
          </span>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9] mb-8">
            YOU BUILD<br />
            THE COMPANY<br />
            <span className="text-[#FF4F8B]">WE BUILD YOUR PRESENCE</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Your expertise shouldn't disappear because your calendar is full. Let's turn what you already know into a presence that keeps moving.
          </p>

          <button
            onClick={() => onStartProject('Founder AI Presence Engine')}
            onMouseEnter={() => onCursorEnter('cta', 'START')}
            onMouseLeave={onCursorLeave}
            className="bg-[#FF4F8B] text-white hover:bg-white hover:text-[#111111] font-display font-black text-sm uppercase tracking-wider px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl shadow-[#FF4F8B]/30"
          >
            <span>BUILD MY PRESENCE</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <div className="mt-8">
            <button 
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-white/50 hover:text-white transition-colors"
            >
              ← RETURN TO MAIN SITE
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default function App() {
  // Navigation & Page routing state: 'home' | 'work' | 'services' | 'about'
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [presenceEngineOpen, setPresenceEngineOpen] = useState(false);
  
  // Interactive Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorTrailingPos, setCursorTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorAccent, setCursorAccent] = useState(null);
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default' | 'hover' | 'media' | 'project' | 'service' | 'cta'
  const [hoveredClient, setHoveredClient] = useState(null);
  const [hoveredServiceCard, setHoveredServiceCard] = useState(null);

  // Services Interactive Universe Active Door
  const [activeServiceDoor, setActiveServiceDoor] = useState(SERVICES_DATA[0]);

  // System Active Step
  const [activeSystemStep, setActiveSystemStep] = useState(0);

  // Modals & Full Views
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Contact Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Founder Personal Brand',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  // Mouse move listener for custom cursor and 3D tilt
  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setCursorPos({ x: targetX, y: targetY });
    };

    const renderCursor = () => {
      // Smooth lerp for trailing cursor ring
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setCursorTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(renderCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(renderCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Clean URL hash on mount & dynamic navigation to ensure clean domain (thevisualroom.studio)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    const handleHashChange = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cursor Helpers
  const onCursorEnter = (variant, text = '', accent = null) => {
    setCursorVariant(variant);
    setCursorText(text);
    setCursorAccent(accent);
  };
  const onCursorLeave = () => {
    setCursorVariant('default');
    setCursorText('');
    setCursorAccent(null);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedPillar(null);
    setSelectedCaseStudy(null);
    setPresenceEngineOpen(false);
    setMenuOpen(false);
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openServiceDetail = (service) => {
    setSelectedPillar(service);
    setPresenceEngineOpen(false);
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = (preselectedService) => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#111111] font-sans selection:bg-[#FF4A0A] selection:text-white relative cursor-default">
      
      {/* ========================================================================= */}
      {/* 00. CUSTOM INTERACTIVE TVR CURSOR SYSTEM                                  */}
      {/* ========================================================================= */}
      <div 
        className="custom-cursor-dot hidden md:block bg-[#111111]"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          width: cursorVariant === 'default' ? '8px' : '4px',
          height: cursorVariant === 'default' ? '8px' : '4px',
          opacity: cursorVariant === 'default' ? 1 : 0.4
        }}
      />
      <div 
        className={`custom-cursor-ring hidden md:flex items-center justify-center font-display font-black text-[10px] uppercase tracking-wider transition-all duration-200 ${
          cursorVariant === 'default' 
            ? 'w-10 h-10 border border-[#111111]/30 bg-transparent' 
            : cursorVariant === 'media'
            ? 'w-24 h-24 bg-[#FF4A0A] text-white shadow-2xl scale-100'
            : cursorVariant === 'project'
            ? 'w-28 h-28 bg-[#111111] text-[#C8FF00] shadow-2xl scale-100 border border-[#C8FF00]'
            : cursorVariant === 'service'
            ? 'w-24 h-24 shadow-2xl scale-100 font-black'
            : cursorVariant === 'cta'
            ? 'w-24 h-24 bg-[#C8FF00] text-[#111111] shadow-2xl scale-100 font-black'
            : 'w-16 h-16 bg-[#111111]/10 backdrop-blur-sm border border-[#111111]'
        }`}
        style={{
          transform: `translate3d(${cursorTrailingPos.x}px, ${cursorTrailingPos.y}px, 0)`,
          backgroundColor: cursorVariant === 'service' ? (cursorAccent || '#2447FF') : undefined,
          color: cursorVariant === 'service' ? (cursorAccent === '#C8FF00' ? '#111111' : '#ffffff') : undefined
        }}
      >
        {cursorText && (
          <span className="text-center px-1 leading-none select-none animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>

      {/* Floating Client Preview Follower */}
      {hoveredClient && (
        <div 
          className="fixed pointer-events-none z-50 rounded-xl overflow-hidden border-2 border-[#111111] shadow-2xl w-56 aspect-[16/10] bg-black transition-opacity duration-200 hidden md:block"
          style={{
            top: `${cursorPos.y + 20}px`,
            left: `${cursorPos.x + 20}px`
          }}
        >
          <img 
            src={hoveredClient.img} 
            alt={hoveredClient.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white">
              {hoveredClient.category}
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 01. EDITORIAL HEADER & NAVIGATION (COMFORTABLE TOP BREATHING SPACE)        */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#111111]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
          
          {/* TVR Logo */}
          <button 
            onClick={() => navigateTo('home')}
            onMouseEnter={() => onCursorEnter('hover', 'HOME')}
            onMouseLeave={onCursorLeave}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div 
              className="bg-[#111111] rounded-lg p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ width: '38px', height: '38px', minWidth: '38px' }}
            >
              <img 
                src="/Tvr logo.webp" 
                alt="TVR Logo" 
                className="w-full h-full object-contain filter brightness-0 invert"
                loading="eager"
              />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#111111] leading-none block">
                TVR
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#111111]/60 block mt-0.5">
                The Visual Room
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <button 
              onClick={() => navigateTo('work')}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className={`font-display text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all hover:text-[#FF4A0A] hover:bg-[#111111]/5 ${currentPage === 'work' ? 'text-[#FF4A0A] bg-[#111111]/5' : 'text-[#111111]'}`}
            >
              WORK
            </button>
            <button 
              onClick={() => navigateTo('services')}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className={`font-display text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all hover:text-[#FF4A0A] hover:bg-[#111111]/5 ${currentPage === 'services' || selectedPillar ? 'text-[#FF4A0A] bg-[#111111]/5' : 'text-[#111111]'}`}
            >
              SERVICES
            </button>
            <button 
              onClick={() => navigateTo('about')}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className={`font-display text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all hover:text-[#FF4A0A] hover:bg-[#111111]/5 ${currentPage === 'about' ? 'text-[#FF4A0A] bg-[#111111]/5' : 'text-[#111111]'}`}
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleStartProject()}
              onMouseEnter={() => onCursorEnter('cta', 'TALK ↗')}
              onMouseLeave={onCursorLeave}
              className="font-display text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all hover:text-[#FF4A0A] hover:bg-[#111111]/5 text-[#111111]"
            >
              CONTACT
            </button>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleStartProject()}
              onMouseEnter={() => onCursorEnter('cta', 'LET’S BUILD')}
              onMouseLeave={onCursorLeave}
              className="bg-[#111111] text-white hover:bg-[#FF4A0A] font-display text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#111111] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#111111]/10 bg-[#F5F1E8] px-6 py-6 space-y-3 shadow-xl">
            <button 
              onClick={() => navigateTo('home')}
              className="block w-full text-left font-display text-base font-bold uppercase tracking-wider py-2"
            >
              HOME
            </button>
            <button 
              onClick={() => navigateTo('work')}
              className="block w-full text-left font-display text-base font-bold uppercase tracking-wider py-2"
            >
              WORK
            </button>
            <button 
              onClick={() => navigateTo('services')}
              className="block w-full text-left font-display text-base font-bold uppercase tracking-wider py-2"
            >
              SERVICES
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="block w-full text-left font-display text-base font-bold uppercase tracking-wider py-2"
            >
              ABOUT
            </button>
            <button 
              onClick={() => { setMenuOpen(false); handleStartProject(); }}
              className="w-full bg-[#FF4A0A] text-white font-display text-sm font-bold uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 mt-4"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* RENDER DEDICATED FOUNDER CONTENT ENGINE "HOW IT WORKS" EXPERIENCE         */}
      {/* ========================================================================= */}
      {presenceEngineOpen ? (
        <FounderPresenceEngineExperience 
          onClose={() => {
            setPresenceEngineOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onStartProject={handleStartProject}
          onCursorEnter={onCursorEnter}
          onCursorLeave={onCursorLeave}
        />
      ) : selectedPillar ? (
        <main className="min-h-screen bg-[#F5F1E8]">
          <div className="border-b border-[#111111]/10 bg-white/60 backdrop-blur sticky top-20 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <button 
                onClick={() => setSelectedPillar(null)}
                onMouseEnter={() => onCursorEnter('hover', 'BACK')}
                onMouseLeave={onCursorLeave}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#111111] hover:text-[#FF4A0A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO ALL SERVICES</span>
              </button>
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50">
                CAPABILITY {selectedPillar.num} / 04
              </span>
            </div>
          </div>

          {/* Service Hero */}
          <section className="py-16 sm:py-24 border-b border-[#111111]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#111111] text-white rounded-full mb-6">
                    <span>{selectedPillar.num}</span>
                    <span>·</span>
                    <span>{selectedPillar.title}</span>
                  </div>
                  <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#111111] leading-[0.95] mb-8">
                    {selectedPillar.heroHeadline}
                  </h1>
                  <p className="text-xl sm:text-2xl text-[#111111]/80 font-normal leading-relaxed mb-8 max-w-2xl">
                    {selectedPillar.tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => handleStartProject(selectedPillar.serviceOption)}
                      onMouseEnter={() => onCursorEnter('cta', 'START')}
                      onMouseLeave={onCursorLeave}
                      className="bg-[#FF4A0A] text-white font-display text-sm uppercase font-bold tracking-wider px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#111111] transition-all transform hover:-translate-y-0.5 shadow-lg"
                    >
                      <span>{selectedPillar.actionCta}</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#111111] shadow-2xl bg-[#111111]">
                    <img 
                      src={selectedPillar.image} 
                      alt={selectedPillar.title} 
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent flex items-end p-6">
                      <p className="text-white font-mono text-xs uppercase tracking-wider">
                        TVR / {selectedPillar.title} — {selectedPillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What It Is */}
          <section className="py-16 sm:py-24 bg-white border-b border-[#111111]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <span 
                    className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                    style={{ color: selectedPillar.accentHex === '#C8FF00' ? '#749A00' : selectedPillar.accentHex }}
                  >
                    01 // PHILOSOPHY
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111] leading-none">
                    WHAT IT IS
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {selectedPillar.overview.map((para, i) => (
                    <p key={i} className="text-xl sm:text-2xl text-[#111111]/90 leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}
                  <div className="p-6 sm:p-8 bg-[#F5F1E8] rounded-2xl border border-[#111111]/10 mt-8">
                    <p 
                      className="font-mono text-xs uppercase tracking-wider mb-2 font-bold"
                      style={{ color: selectedPillar.accentHex === '#C8FF00' ? '#749A00' : selectedPillar.accentHex }}
                    >
                      WHY IT MATTERS
                    </p>
                    <p className="text-base sm:text-lg text-[#111111] font-semibold leading-relaxed">
                      {selectedPillar.whyItMatters}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Build */}
          <section className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#111111]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-14">
                <span 
                  className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                  style={{ color: selectedPillar.accentHex === '#C8FF00' ? '#749A00' : selectedPillar.accentHex }}
                >
                  02 // CAPABILITIES
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
                  WHAT WE BUILD
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedPillar.whatWeBuild.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-8 rounded-2xl bg-white border border-[#111111]/10 hover:border-[#111111] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                  >
                    <div>
                      <span 
                        className="font-mono text-xs font-bold mb-4 block"
                        style={{ color: selectedPillar.accentHex === '#C8FF00' ? '#749A00' : selectedPillar.accentHex }}
                      >
                        [0{idx + 1}]
                      </span>
                      <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#111111]/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The TVR Approach */}
          <section className="py-20 sm:py-28 bg-[#111111] text-white border-b border-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-14 text-center max-w-3xl mx-auto">
                <span 
                  className="font-mono text-xs uppercase tracking-widest font-bold block mb-2"
                  style={{ color: selectedPillar.accentHex }}
                >
                  03 // PROCESS
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
                  THE TVR APPROACH
                </h2>
                <p className="text-lg text-white/70 font-mono">
                  "{selectedPillar.approachQuote}"
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {selectedPillar.approachSteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span 
                      className="font-mono text-xs block mb-2 font-bold"
                      style={{ color: selectedPillar.accentHex }}
                    >
                      STEP 0{idx + 1}
                    </span>
                    <h4 className="font-display font-black text-xl uppercase tracking-tight text-white">{step}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-white/50 uppercase tracking-wider block mb-1">IDEAL FOR</span>
                  <p className="font-display font-bold text-lg text-white">
                    {selectedPillar.idealFor.join(' · ')}
                  </p>
                </div>
                <button
                  onClick={() => handleStartProject(selectedPillar.serviceOption)}
                  className="font-display font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white hover:text-[#111111] transition-colors shrink-0"
                  style={{
                    backgroundColor: selectedPillar.accentHex,
                    color: selectedPillar.accentHex === '#C8FF00' ? '#111111' : '#ffffff'
                  }}
                >
                  START THIS ENGINE ↗
                </button>
              </div>
            </div>
          </section>

          {/* Action CTA */}
          <section className="py-24 bg-[#FF4A0A] text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold block mb-3">
                LET'S MAKE YOUR IDEAS VISIBLE
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none mb-8">
                READY TO BUILD YOUR {selectedPillar.title}?
              </h2>
              <button
                onClick={() => handleStartProject(selectedPillar.serviceOption)}
                onMouseEnter={() => onCursorEnter('cta', 'TALK')}
                onMouseLeave={onCursorLeave}
                className="bg-[#111111] text-white hover:bg-white hover:text-[#111111] font-display font-bold text-sm uppercase tracking-wider px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-200 transform hover:-translate-y-0.5 shadow-2xl"
              >
                <span>{selectedPillar.actionCta}</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </main>
      ) : currentPage === 'work' ? (
        /* ========================================================================= */
        /* DEDICATED WORK VIEW                                                       */
        /* ========================================================================= */
        <main className="min-h-screen bg-[#F5F1E8]">
          <section className="py-20 border-b border-[#111111]/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold block mb-3">
                PROJECT ARCHIVE
              </span>
              <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tight text-[#111111] leading-[0.95] mb-6">
                WORK THAT SPEAKS
              </h1>
              <p className="text-xl text-[#111111]/70 max-w-2xl">
                Selected projects across brands, products, campaigns and people. Strategy, film, motion and content engines that deliver verified results.
              </p>
            </div>
          </section>

          {/* Featured Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {FEATURED_PROJECTS.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedCaseStudy(item)}
                    onMouseEnter={() => onCursorEnter('project', 'ENTER ↗')}
                    onMouseLeave={onCursorLeave}
                    className="group bg-white rounded-2xl border border-[#111111]/10 hover:border-[#111111] overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] bg-[#111111] overflow-hidden">
                      {item.mediaType === 'video' ? (
                        <video 
                          src={item.mediaSrc} 
                          poster={item.poster}
                          muted 
                          loop 
                          playsInline 
                          autoPlay
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                        />
                      ) : (
                        <img 
                          src={item.mediaSrc} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-black/80 text-white backdrop-blur rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white text-[#111111] p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-black text-sm uppercase tracking-wider text-[#FF4A0A]">
                          {item.client}
                        </span>
                        <span className="font-mono text-xs text-[#111111]/40">0{item.num}</span>
                      </div>
                      <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-[#111111]/60 mb-4">
                        {item.servicesTag}
                      </p>
                      <p className="text-[#111111]/70 text-sm line-clamp-2">
                        {item.brief}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : currentPage === 'services' ? (
        /* ========================================================================= */
        /* DEDICATED SERVICES VIEW                                                   */
        /* ========================================================================= */
        <main className="min-h-screen bg-[#F5F1E8]">
          <section className="py-20 border-b border-[#111111]/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold block mb-3">
                STUDIO CAPABILITIES
              </span>
              <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tight text-[#111111] leading-[0.95] mb-6">
                WHAT CAN WE BUILD FOR YOU?
              </h1>
              <p className="text-xl text-[#111111]/70 max-w-2xl">
                Different ideas need different creative systems. We bring strategy, storytelling, production and AI-assisted workflows into four clear capabilities.
              </p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              {SERVICES_DATA.map((srv) => (
                <div 
                  key={srv.id}
                  onClick={() => setSelectedPillar(srv)}
                  onMouseEnter={() => onCursorEnter('service', 'EXPLORE ↗')}
                  onMouseLeave={onCursorLeave}
                  className="bg-white rounded-3xl border-2 border-[#111111] overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer p-8 sm:p-12 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#111111] text-white rounded-full">
                          {srv.num}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold">
                          {srv.subtitle}
                        </span>
                      </div>
                      <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#111111] mb-4 group-hover:text-[#FF4A0A] transition-colors">
                        {srv.title}
                      </h2>
                      <p className="text-lg text-[#111111]/80 mb-6 max-w-xl">
                        {srv.tagline}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {srv.servicesList.map((item, i) => (
                          <span key={i} className="font-mono text-xs uppercase px-3 py-1.5 bg-[#F5F1E8] border border-[#111111]/10 rounded-full text-[#111111]/80">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider text-[#FF4A0A] group-hover:translate-x-1 transition-transform">
                        <span>{srv.ctaText}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="rounded-2xl overflow-hidden border border-[#111111] aspect-[4/3] bg-[#111111]">
                        <img 
                          src={srv.image} 
                          alt={srv.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      ) : currentPage === 'about' ? (
        /* ========================================================================= */
        /* DEDICATED ABOUT VIEW                                                      */
        /* ========================================================================= */
        <main className="min-h-screen bg-[#F5F1E8]">
          <section className="py-20 border-b border-[#111111]/10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold block mb-3">
                ABOUT TVR
              </span>
              <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tight text-[#111111] leading-[0.95] mb-6">
                WE MAKE VISUALS WITH A REASON TO EXIST
              </h1>
              <p className="text-xl sm:text-2xl text-[#111111]/80 max-w-3xl leading-relaxed">
                TVR is an independent creative studio from Indore. We bring strategy, storytelling and production together to create visual work that looks good, says something and stays remembered.
              </p>
            </div>
          </section>

          <section className="py-20 bg-[#F5F1E8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 bg-white rounded-2xl border border-[#111111]/10">
                  <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-4">01 // DIRECTION</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">STRATEGY</h3>
                  <p className="text-sm text-[#111111]/70">Gives the project clear intent, positioning and commercial direction.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#111111]/10">
                  <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-4">02 // MEANING</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">STORY</h3>
                  <p className="text-sm text-[#111111]/70">Gives the visual narrative depth, emotional resonance and memory.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#111111]/10">
                  <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-4">03 // FORM</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">PRODUCTION</h3>
                  <p className="text-sm text-[#111111]/70">Gives the idea craft, cinematic lighting, motion and finishing polish.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#111111]/10">
                  <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-4">04 // REACH</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">CONTENT</h3>
                  <p className="text-sm text-[#111111]/70">Gives the story scalable formats, repeatable systems and distribution reach.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* ========================================================================= */
        /* ULTIMATE ART-DIRECTED HOME EXPERIENCE: "THE VISUAL ROOM"                  */
        /* ========================================================================= */
        <main>
          
          {/* ======================================================================= */}
          {/* SECTION 01 — THE HERO EXPERIENCE (FIRST 5 SECONDS)                      */}
          {/* ======================================================================= */}
          <section className="relative min-h-[92vh] flex flex-col justify-between py-12 sm:py-16 border-b border-[#111111]/10 bg-[#F5F1E8] overflow-hidden">
            
            {/* Kinetic Typography Stage (Static & Stable) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 z-20">
              <div>
                {/* Line 1 */}
                <div className="flex flex-wrap items-baseline gap-5 sm:gap-8 lg:gap-10" style={{ gap: '0.28em' }}>
                  <span className="font-display font-black text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight text-[#111111] leading-[0.88] select-none">
                    WE
                  </span>
                  <span className="font-display font-black text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight text-[#FF4A0A] leading-[0.88] select-none">
                    MAKE
                  </span>
                </div>

                {/* Line 2: 10s Cinematic Intro Banner */}
                <div className="relative my-2 sm:my-4 shadow-2xl border-2 border-[#111111] rounded-2xl overflow-hidden bg-[#29191D]">
                  <TVRCinematicIntroBanner />
                </div>

                {/* Line 3 */}
                <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
                  <span className="font-display font-black text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tighter text-[#111111] leading-[0.88] select-none">
                    VISIBLE
                  </span>

                  <p className="text-base sm:text-xl text-[#111111]/80 font-medium max-w-md leading-relaxed sm:text-right">
                    TVR is a creative studio where strategy, storytelling and production come together to turn ideas into visual work.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => {
                    const el = document.getElementById('work-archive');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => onCursorEnter('hover', 'SCROLL')}
                  onMouseLeave={onCursorLeave}
                  className="bg-[#111111] text-white font-display text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-[#FF4A0A] transition-colors"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => handleStartProject()}
                  onMouseEnter={() => onCursorEnter('cta', 'TALK')}
                  onMouseLeave={onCursorLeave}
                  className="bg-white text-[#111111] border border-[#111111] font-display text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-[#111111] hover:text-white transition-colors"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </section>

          {/* ======================================================================= */}
          {/* SECTION 02 — PROOF & CLIENT MARQUEE (WHO TRUSTS YOU?)                    */}
          {/* ======================================================================= */}
          <section className="py-16 bg-[#111111] text-white border-b border-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                <div className="border-l-2 border-[#FF4A0A] pl-4">
                  <span className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white block">
                    4+
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mt-1">
                    CREATIVE CAPABILITIES
                  </span>
                </div>

                <div className="border-l-2 border-[#2447FF] pl-4">
                  <span className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white block">
                    13
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mt-1">
                    SELECTED CLIENTS
                  </span>
                </div>

                <div className="border-l-2 border-[#C8FF00] pl-4">
                  <span className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white block">
                    1
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mt-1">
                    CREATIVE SYSTEM
                  </span>
                </div>

                <div className="border-l-2 border-[#FFC928] pl-4">
                  <span className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white block">
                    INDORE
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mt-1">
                    INDIA / GLOBAL REACH
                  </span>
                </div>

              </div>
            </div>

            {/* Interactive Client Marquee with Hover Previews */}
            <div className="relative w-full overflow-hidden border-t border-white/10 bg-white/5 py-6">
              <div className="flex animate-marquee whitespace-nowrap items-center gap-16">
                {[...CLIENTS, ...CLIENTS].map((client, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => {
                      setHoveredClient(client);
                      onCursorEnter('hover', 'PREVIEW');
                    }}
                    onMouseLeave={() => {
                      setHoveredClient(null);
                      onCursorLeave();
                    }}
                    className="flex items-center gap-16 cursor-pointer group"
                  >
                    <span className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white/70 group-hover:text-[#C8FF00] transition-colors">
                      {client.name}
                    </span>
                    <span className="text-[#FF4A0A] text-xl font-mono">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 03 — FOUNDER / PRESENCE MATRIX (ONE PERSON → MANY STORIES)      */}
          {/* ======================================================================= */}
          <section className="py-24 sm:py-32 bg-[#111111] text-white border-b border-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#FF4F8B] text-white rounded-full mb-6">
                    <span>AI × PERSONAL BRAND</span>
                  </div>

                  <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92] mb-6">
                    ONE PERSON<br />
                    MANY STORIES<br />
                    <span className="text-[#FF4F8B]">ONE CONTENT ENGINE</span>
                  </h2>

                  <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                    Your experience is already content. TVR turns conversations, opinions and expertise into a scalable digital presence without endless filming days.
                  </p>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-[#C8FF00] font-bold">
                      <span>YOU TALK</span>
                      <span>→</span>
                      <span>WE FIND THE STORY</span>
                      <span>→</span>
                      <span>WE BUILD CONTENT</span>
                      <span>→</span>
                      <span>YOU STAY VISIBLE</span>
                    </div>
                    <p className="text-xs text-white/60 font-mono">
                      AI multiplies the founder's presence without multiplying their time.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setPresenceEngineOpen(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onMouseEnter={() => onCursorEnter('cta', 'HOW IT WORKS')}
                    onMouseLeave={onCursorLeave}
                    className="bg-[#FF4F8B] text-white font-display text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#111111] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#FF4F8B]/20"
                  >
                    <span>HOW IT WORKS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Presence Video Player */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-black shadow-2xl">
                    <video 
                      src="/presence.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF4F8B] block mb-1">
                          TVR PRESENCE WORKFLOW
                        </span>
                        <p className="font-display font-bold text-base text-white">
                          Scaled Omnipresence Without Studio Burnout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 04 — SERVICES (4 COMPACT & ULTRA-INTERACTIVE CARDS)             */}
          {/* ======================================================================= */}
          <section id="services-section" className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#111111]/10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold">
                      01 // SERVICES
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#111111]/40">
                      [THE 4 DOORS SYSTEM]
                    </span>
                  </div>
                  <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#111111] leading-[0.95]">
                    WHAT CAN WE{' '}
                    <span 
                      className="inline-block transition-all duration-500 will-change-transform"
                      style={{
                        color: hoveredServiceCard ? (hoveredServiceCard.accentHex === '#C8FF00' ? '#749A00' : hoveredServiceCard.accentHex) : '#111111',
                        transform: hoveredServiceCard ? 'translateY(-3px)' : 'none'
                      }}
                    >
                      BUILD
                    </span>
                    <br />
                    FOR YOU?
                  </h2>
                </div>
                <div className="max-w-xs">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#111111]/70 font-semibold">
                    DIFFERENT IDEAS NEED DIFFERENT CREATIVE SYSTEMS.
                  </p>
                </div>
              </div>

              {/* Connective System Conduit Line linking the 4 Modes */}
              <div className="hidden lg:grid grid-cols-4 gap-6 mb-6 pt-2">
                {SERVICES_DATA.map((srv, idx) => {
                  const isCardActive = hoveredServiceCard?.id === srv.id;
                  return (
                    <div key={idx} className="flex items-center gap-3 transition-opacity duration-300">
                      <span 
                        className="font-mono text-[11px] font-bold transition-colors duration-300"
                        style={{ color: isCardActive ? (srv.accentHex === '#C8FF00' ? '#749A00' : srv.accentHex) : 'rgba(17,17,17,0.35)' }}
                      >
                        0{idx + 1}
                      </span>
                      <div className="flex-1 h-[2px] bg-[#111111]/10 relative overflow-hidden rounded-full">
                        <div 
                          className="absolute inset-0 transition-all duration-500 rounded-full"
                          style={{
                            backgroundColor: srv.accentHex,
                            transform: isCardActive ? 'translateX(0%)' : 'translateX(-100%)',
                            opacity: isCardActive ? 1 : 0
                          }}
                        />
                      </div>
                      <span 
                        className="font-mono text-[9px] uppercase tracking-wider font-bold transition-colors duration-300"
                        style={{ color: isCardActive ? '#111111' : 'rgba(17,17,17,0.35)' }}
                      >
                        {srv.titleFirst}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 4 Equal Responsive Cards Grid (Compact 520–560px Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {SERVICES_DATA.map((srv, index) => (
                  <InteractiveServiceCard 
                    key={srv.id}
                    srv={srv}
                    index={index}
                    onSelect={openServiceDetail}
                    onCursorEnter={onCursorEnter}
                    onCursorLeave={onCursorLeave}
                    onHoverChange={setHoveredServiceCard}
                  />
                ))}
              </div>

            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 05 — TVR SYSTEM TRANSFORMATION (IDEA → PRESENCE)                */}
          {/* ======================================================================= */}
          <section className="py-24 sm:py-32 bg-[#2447FF] text-white border-b border-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-3xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] font-bold block mb-2">
                  02 // EXECUTION PIPELINE
                </span>
                <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.95] mb-4">
                  ONE IDEA — INFINITE REACH
                </h2>
                <p className="text-xl text-white/80 font-normal">
                  The TVR System turns raw thoughts into structured visual universes.
                </p>
              </div>

              {/* Interactive Step Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
                {TVR_SYSTEM_STEPS.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSystemStep(idx)}
                    onMouseEnter={() => onCursorEnter('hover', step.word)}
                    onMouseLeave={onCursorLeave}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      activeSystemStep === idx 
                        ? 'bg-white text-[#111111] border-white shadow-lg scale-105' 
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <span className="font-mono text-[10px] block opacity-60">STEP {step.step}</span>
                    <span className="font-display font-black text-lg sm:text-xl uppercase tracking-tight block">
                      {step.word}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Big Stage for Active System Step */}
              <div className="rounded-3xl bg-[#111111] border-2 border-white/20 p-8 sm:p-14 overflow-hidden relative shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-7 z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#C8FF00]">
                        STEP {TVR_SYSTEM_STEPS[activeSystemStep].step}
                      </span>
                      <span className="font-mono text-xs text-white/60 uppercase">
                        {TVR_SYSTEM_STEPS[activeSystemStep].subtitle}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tighter text-white mb-6">
                      {TVR_SYSTEM_STEPS[activeSystemStep].word}
                    </h3>

                    <p className="text-xl text-white/80 font-medium leading-relaxed max-w-xl mb-8">
                      {TVR_SYSTEM_STEPS[activeSystemStep].description}
                    </p>

                    <button
                      onClick={() => handleStartProject()}
                      className="bg-[#FF4A0A] text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white hover:text-[#111111] transition-colors"
                    >
                      EXECUTE WITH TVR ↗
                    </button>
                  </div>

                  <div className="lg:col-span-5 z-10">
                    <div className="rounded-2xl overflow-hidden border border-white/20 aspect-[4/3] bg-black">
                      <img 
                        src={TVR_SYSTEM_STEPS[activeSystemStep].media} 
                        alt={TVR_SYSTEM_STEPS[activeSystemStep].word} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 06 — THE TVR ARCHIVE (2-COLUMN EDITORIAL PROJECT GRID)          */}
          {/* ======================================================================= */}
          <section id="work-archive" className="py-24 sm:py-32 bg-[#0B0B0B] text-white border-b border-[#111111]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C8FF00] font-bold block mb-2">
                    03 // THE TVR ARCHIVE
                  </span>
                  <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95]">
                    WORK THAT SPEAKS
                  </h2>
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-white/60 max-w-xs">
                  VERIFIED PROJECTS / REAL CLIENT RELEASES
                </p>
              </div>

              {/* 2-Column Editorial Grid (Aspect 4:3, Compact & Visible) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {FEATURED_PROJECTS.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedCaseStudy(item)}
                    onMouseEnter={() => onCursorEnter('project', 'ENTER ↗')}
                    onMouseLeave={onCursorLeave}
                    className="group bg-[#141414] border border-white/15 rounded-3xl overflow-hidden hover:border-[#C8FF00] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] bg-black overflow-hidden">
                      {item.mediaType === 'video' ? (
                        <video 
                          src={item.mediaSrc} 
                          poster={item.poster}
                          muted 
                          loop 
                          playsInline 
                          autoPlay
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <img 
                          src={item.mediaSrc} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      
                      <div className="absolute top-4 left-4 bg-black/80 px-3.5 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider text-white backdrop-blur">
                        {item.client}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-[#C8FF00] text-[#111111] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <span className="font-mono text-xs uppercase text-[#C8FF00] font-bold block mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2 group-hover:text-[#C8FF00] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/50 mb-3">
                        {item.servicesTag}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
                        {item.brief}
                      </p>

                      <div className="flex items-center gap-2 font-display text-xs uppercase font-bold tracking-wider text-white group-hover:translate-x-1 transition-transform">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 text-[#C8FF00]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 07 — POINT OF VIEW / ABOUT (WHY DO YOU EXIST?)                  */}
          {/* ======================================================================= */}
          <section className="py-24 sm:py-32 bg-[#F5F1E8] border-b border-[#111111]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold block mb-3">
                  04 // POINT OF VIEW
                </span>
                
                <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#111111] leading-[0.92] mb-6">
                  WE DON'T MAKE CONTENT<br />
                  FOR THE SAKE OF CONTENT<br />
                  <span className="text-[#FF4A0A]">WE MAKE VISUALS WITH A REASON TO EXIST</span>
                </h2>

                <p className="text-xl sm:text-2xl text-[#111111]/80 font-normal leading-relaxed">
                  TVR is an independent creative studio from Indore. We bring strategy, storytelling and production together to create visual work that looks good, says something and stays remembered.
                </p>
              </div>

              {/* 4 Pillars of Meaning */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 bg-white rounded-2xl border-2 border-[#111111] shadow-sm">
                  <span className="font-mono text-xs text-[#FF4A0A] font-bold block mb-3">01</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">
                    STRATEGY
                  </h3>
                  <p className="text-sm font-semibold text-[#111111]/70">
                    gives it direction.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border-2 border-[#111111] shadow-sm">
                  <span className="font-mono text-xs text-[#2447FF] font-bold block mb-3">02</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">
                    STORY
                  </h3>
                  <p className="text-sm font-semibold text-[#111111]/70">
                    gives it meaning.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border-2 border-[#111111] shadow-sm">
                  <span className="font-mono text-xs text-[#FFC928] font-bold block mb-3">03</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">
                    PRODUCTION
                  </h3>
                  <p className="text-sm font-semibold text-[#111111]/70">
                    gives it form.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl border-2 border-[#111111] shadow-sm">
                  <span className="font-mono text-xs text-[#C8FF00] font-bold block mb-3">04</span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#111111] mb-2">
                    CONTENT
                  </h3>
                  <p className="text-sm font-semibold text-[#111111]/70">
                    gives it reach.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ======================================================================= */}
          {/* SECTION 08 — FINAL CTA (HOW DO I START?)                                */}
          {/* ======================================================================= */}
          <section className="py-24 sm:py-36 bg-[#FF4A0A] text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold block mb-4">
                LET'S BUILD SOMETHING
              </span>

              <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] mb-8">
                HAVE AN IDEA?<br />
                LET'S MAKE IT VISIBLE
              </h2>

              <p className="text-xl sm:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
                Brand. Campaign. Product. Founder. Story.<br />
                Let's build something worth remembering.
              </p>

              <button 
                onClick={() => handleStartProject()}
                onMouseEnter={() => onCursorEnter('cta', 'START')}
                onMouseLeave={onCursorLeave}
                className="bg-[#111111] text-white hover:bg-white hover:text-[#111111] font-display font-black text-sm uppercase tracking-wider px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

            </div>
          </section>

        </main>
      )}

      {/* ========================================================================= */}
      {/* 09. EDITORIAL FOOTER                                                      */}
      {/* ========================================================================= */}
      <footer className="bg-[#111111] text-white py-16 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-white rounded p-1 flex items-center justify-center">
                  <img 
                    src="/Tvr logo.webp" 
                    alt="TVR Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-display font-black text-xl tracking-tight text-white">
                  TVR
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-2">
                THE VISUAL ROOM
              </p>
              <p className="text-sm text-white/60 max-w-sm">
                Strategy, storytelling and production for brands and founders worth remembering.
              </p>
              <p className="font-mono text-xs text-[#C8FF00] mt-4">
                INDORE / INDIA
              </p>
            </div>

            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigateTo('work')} className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors">
                    WORK
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('services')} className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors">
                    SERVICES
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('about')} className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors">
                    ABOUT
                  </button>
                </li>
                <li>
                  <button onClick={() => handleStartProject()} className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors">
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-4">
                CONNECT
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors flex items-center gap-1">
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FF4A0A] transition-colors flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-white/40">
              © {new Date().getFullYear()} TVR — THE VISUAL ROOM. ALL RIGHTS RESERVED.
            </span>
            <button 
              onClick={() => handleStartProject()}
              className="font-display text-xs uppercase font-bold tracking-wider text-[#C8FF00] hover:underline"
            >
              START A PROJECT ↗
            </button>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 10. CASE STUDY MODAL                                                      */}
      {/* ========================================================================= */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#111111] shadow-2xl relative">
            
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-[#111111]/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[#FF4A0A]">
                <span>{selectedCaseStudy.client}</span>
                <span>/</span>
                <span>CASE STUDY</span>
              </div>
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 text-[#111111] hover:bg-[#111111]/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#111111]/60 uppercase tracking-wider block mb-1">
                  {selectedCaseStudy.servicesTag}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
                  {selectedCaseStudy.title}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black border border-[#111111]">
                {selectedCaseStudy.mediaType === 'video' ? (
                  <video 
                    src={selectedCaseStudy.mediaSrc} 
                    poster={selectedCaseStudy.poster}
                    controls 
                    autoPlay 
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <img 
                    src={selectedCaseStudy.mediaSrc} 
                    alt={selectedCaseStudy.title} 
                    className="w-full aspect-[16/10] object-cover"
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-[#FF4A0A] mb-2">THE BRIEF</h4>
                  <p className="text-sm text-[#111111]/80 leading-relaxed">{selectedCaseStudy.brief}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-[#FF4A0A] mb-2">THE IDEA</h4>
                  <p className="text-sm text-[#111111]/80 leading-relaxed">{selectedCaseStudy.idea}</p>
                </div>
              </div>

              <div className="p-6 bg-[#F5F1E8] rounded-xl border border-[#111111]/10">
                <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-[#111111] mb-2">THE OUTCOME</h4>
                <p className="text-sm font-semibold text-[#111111]">{selectedCaseStudy.outcome}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#111111]/10">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    handleStartProject(`Inquiry about ${selectedCaseStudy.client} style project`);
                  }}
                  className="bg-[#111111] text-white font-display text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-full hover:bg-[#FF4A0A] transition-colors"
                >
                  START SIMILAR PROJECT ↗
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 11. VIDEO LIGHTBOX MODAL                                                  */}
      {/* ========================================================================= */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="max-w-5xl w-full relative">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#FF4A0A] flex items-center gap-2 font-mono text-xs uppercase tracking-wider"
            >
              <span>CLOSE</span>
              <X className="w-5 h-5" />
            </button>
            <video 
              src={selectedVideo.src} 
              controls 
              autoPlay 
              className="w-full rounded-2xl aspect-video bg-black shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 12. PROJECT INQUIRY DRAWER / MODAL                                        */}
      {/* ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#F5F1E8] rounded-3xl max-w-xl w-full p-8 sm:p-10 border-2 border-[#111111] shadow-2xl relative">
            
            <button 
              onClick={() => { setModalOpen(false); setFormSent(false); }}
              className="absolute top-6 right-6 p-2 text-[#111111] hover:bg-[#111111]/10 rounded-full"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {formSent ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#FF4A0A] mx-auto" />
                <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#111111]">
                  MESSAGE RECEIVED
                </h3>
                <p className="text-sm text-[#111111]/70 max-w-sm mx-auto">
                  Thank you for reaching out. The TVR team will review your brief and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setModalOpen(false); setFormSent(false); }}
                  className="mt-6 bg-[#111111] text-white font-display text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-full"
                >
                  BACK TO SITE
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FF4A0A] font-bold block mb-1">
                    START A PROJECT
                  </span>
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#111111]">
                    LET'S BUILD TOGETHER
                  </h3>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#111111]/70 mb-1">YOUR NAME *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#111111]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4A0A]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#111111]/70 mb-1">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#111111]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4A0A]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#111111]/70 mb-1">WHAT ARE YOU LOOKING TO BUILD?</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-[#111111]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4A0A]"
                    >
                      <option value="Founder Personal Brand">01 — Founder Personal Brand</option>
                      <option value="Content Systems & Campaigns">02 — Content Systems & Campaigns</option>
                      <option value="Commercial Film & Production">03 — Commercial Film & Production</option>
                      <option value="Founder AI Presence Engine">04 — Founder AI Presence Engine</option>
                      <option value="General Studio Inquiry">General Studio Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#111111]/70 mb-1">PROJECT DETAILS / BRIEF</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your brand, timeline, and goals..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#111111]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4A0A]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#FF4A0A] text-white font-display text-sm uppercase font-bold tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#111111] transition-colors"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
