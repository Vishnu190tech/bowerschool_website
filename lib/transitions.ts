import { gsap } from 'gsap';

export type TransitionType =
  | 'liquid-morph'
  | 'split-screen'
  | 'smooth-fade'
  | 'curtain-slide'
  | '3d-flip'
  | 'particle-dissolve';

interface TransitionConfig {
  duration?: number;
  ease?: string;
  onComplete?: () => void;
  onStart?: () => void;
}

export class PageTransitionManager {
  private activeTransition: gsap.core.Timeline | null = null;
  private isTransitioning: boolean = false;

  constructor() {
    // Register GSAP settings
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });
  }

  /**
   * Execute a page transition (exit only - entrance happens on page load)
   */
  async transition(
    type: TransitionType,
    config: TransitionConfig = {}
  ): Promise<void> {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    const { duration = 0.8, ease = 'power3.inOut', onStart, onComplete } = config;

    // Call onStart callback
    onStart?.();

    // Kill any active transitions
    if (this.activeTransition) {
      this.activeTransition.kill();
    }

    // Create new timeline
    const tl = gsap.timeline({
      onComplete: () => {
        this.isTransitioning = false;
        this.cleanup();
        onComplete?.();
      }
    });

    this.activeTransition = tl;

    // Execute the selected transition
    switch (type) {
      case 'liquid-morph':
        await this.liquidMorphTransition(tl, duration, ease);
        break;
      case 'split-screen':
        await this.splitScreenTransition(tl, duration, ease);
        break;
      case 'smooth-fade':
        await this.smoothFadeTransition(tl, duration, ease);
        break;
      case 'curtain-slide':
        await this.curtainSlideTransition(tl, duration, ease);
        break;
      case '3d-flip':
        await this.threeDFlipTransition(tl, duration, ease);
        break;
      case 'particle-dissolve':
        await this.particleDissolveTransition(tl, duration, ease);
        break;
      default:
        await this.smoothFadeTransition(tl, duration, ease);
    }

    return tl.then();
  }

  /**
   * 1. Liquid Morph Transition - Organic blob morphing effect
   */
  private async liquidMorphTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    tl.set('.page-transition-overlay', {
      display: 'block',
      scale: 0,
      borderRadius: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      transformOrigin: 'center center',
    })
    .to('.page-transition-overlay', {
      scale: 15,
      duration: duration,
      ease: 'power2.in',
    })
    .to('.transition-content-wrapper', {
      opacity: 0,
      scale: 0.9,
      duration: duration * 0.5,
      ease: 'power2.out',
    }, `-=${duration * 0.5}`);
  }

  /**
   * 2. Split Screen Transition - Panels slide apart to reveal
   */
  private async splitScreenTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    const panels = 4;

    // Create panels dynamically
    const container = document.getElementById('transition-elements-container');
    if (!container) return;

    const panelElements: HTMLElement[] = [];
    for (let i = 0; i < panels; i++) {
      const panel = document.createElement('div');
      panel.className = `split-panel-temp`;
      panel.style.cssText = `
        position: fixed;
        top: 0;
        width: ${100 / panels}%;
        height: 100%;
        left: ${(100 / panels) * i}%;
        background: linear-gradient(135deg, #3232e6 0%, #4242ff 100%);
        z-index: 9998;
        transform: translateY(100%);
      `;
      container.appendChild(panel);
      panelElements.push(panel);
    }

    tl.to(panelElements, {
      y: '0%',
      duration: duration * 0.6,
      ease: 'power3.in',
      stagger: 0.05,
    })
    .to('.transition-content-wrapper', {
      opacity: 0,
      duration: duration * 0.3,
    }, `-=${duration * 0.3}`)
    .set(panelElements, {
      opacity: 0,
      onComplete: () => {
        panelElements.forEach(p => p.remove());
      }
    });
  }

  /**
   * 3. Smooth Fade with 3D Scale - Elegant depth transition
   */
  private async smoothFadeTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    tl.to('.transition-content-wrapper', {
      scale: 0.8,
      opacity: 0,
      rotationX: -15,
      duration: duration,
      ease: 'power2.inOut',
      transformPerspective: 1000,
      transformOrigin: 'center center',
    });
  }

  /**
   * 4. Curtain Slide Transition - Theater curtain effect
   */
  private async curtainSlideTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    const container = document.getElementById('transition-elements-container');
    if (!container) return;

    // Create curtains
    const leftCurtain = document.createElement('div');
    const rightCurtain = document.createElement('div');

    leftCurtain.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, #1a1a2e 0%, #16213e 100%);
      z-index: 9997;
      transform: translateX(-100%);
    `;

    rightCurtain.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(-90deg, #1a1a2e 0%, #16213e 100%);
      z-index: 9997;
      transform: translateX(100%);
    `;

    container.appendChild(leftCurtain);
    container.appendChild(rightCurtain);

    tl.to([leftCurtain, rightCurtain], {
      x: '0%',
      duration: duration * 0.7,
      ease: 'power3.in',
    })
    .to('.transition-content-wrapper', {
      opacity: 0,
      duration: duration * 0.3,
    }, `-=${duration * 0.3}`)
    .set([leftCurtain, rightCurtain], {
      opacity: 0,
      onComplete: () => {
        leftCurtain.remove();
        rightCurtain.remove();
      }
    });
  }

  /**
   * 5. 3D Flip Transition - Card flip in 3D space
   */
  private async threeDFlipTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    tl.set('.transition-content-wrapper', {
      transformPerspective: 2000,
      transformStyle: 'preserve-3d',
    })
    .to('.transition-content-wrapper', {
      rotationY: 90,
      opacity: 0,
      duration: duration,
      ease: ease,
      transformOrigin: 'center center',
    });
  }

  /**
   * 6. Particle Dissolve Transition - Dissolve into particles
   */
  private async particleDissolveTransition(
    tl: gsap.core.Timeline,
    duration: number,
    ease: string
  ) {
    const particleCount = 30;
    const container = document.getElementById('transition-elements-container');
    if (!container) return;

    // Create particles
    const particles: HTMLElement[] = [];
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 20 + 10}px;
        height: ${Math.random() * 20 + 10}px;
        background: linear-gradient(135deg, #4242ff, #3232e6);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0;
        z-index: 9995;
      `;
      container.appendChild(particle);
      particles.push(particle);
    }

    tl.to('.transition-content-wrapper', {
      filter: 'blur(10px)',
      scale: 0.95,
      opacity: 0.5,
      duration: duration * 0.3,
      ease: 'power2.in',
    })
    .fromTo(particles, {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      duration: duration * 0.3,
      stagger: 0.01,
      ease: 'back.out(1.7)',
    }, `-=${duration * 0.2}`)
    .to('.transition-content-wrapper', {
      opacity: 0,
      duration: duration * 0.2,
    })
    .to(particles, {
      x: () => (Math.random() - 0.5) * 300,
      y: () => (Math.random() - 0.5) * 300,
      opacity: 0,
      scale: 0,
      duration: duration * 0.3,
      stagger: 0.01,
      ease: 'power2.in',
      onComplete: () => {
        particles.forEach(p => p.remove());
      }
    }, `-=${duration * 0.2}`);
  }

  /**
   * Cleanup after transition
   */
  private cleanup() {
    // Reset content wrapper
    gsap.set('.transition-content-wrapper', {
      clearProps: 'all',
      opacity: 1,
      scale: 1,
      filter: 'none',
      transform: 'none'
    });

    // Remove transition overlay
    gsap.set('.page-transition-overlay', {
      clearProps: 'all',
      display: 'none'
    });

    // Clear any remaining transition elements
    const container = document.getElementById('transition-elements-container');
    if (container) {
      container.innerHTML = '';
    }

    this.activeTransition = null;
  }

  /**
   * Check if a transition is currently active
   */
  isActive(): boolean {
    return this.isTransitioning;
  }

  /**
   * Get transition by route
   */
  getTransitionForRoute(pathname: string): TransitionType {
    const transitionMap: Record<string, TransitionType> = {
      '/': 'liquid-morph',
      '/about-us': 'split-screen',
      '/quiz': 'particle-dissolve',
      '/campus-life': '3d-flip',
      '/transition-demo': 'smooth-fade',
    };

    // Check for program pages
    if (pathname.startsWith('/programs')) {
      return 'curtain-slide';
    }

    // Check for mentors page
    if (pathname.includes('mentor')) {
      return 'smooth-fade';
    }

    return transitionMap[pathname] || 'smooth-fade';
  }
}

// Export singleton instance
export const pageTransitionManager = new PageTransitionManager();