// Shared responsive style-token helper for Blinkers pages.
// Desktop branch reproduces each section's existing hand-tuned values exactly (unchanged).
// Mobile branch collapses grids, shrinks type/padding, and swaps the desktop nav for a hamburger menu.
window.BlinkersResponsive = {
  BREAKPOINT: 860,
  getStyles(isMobile, menuOpen) {
    if (!isMobile) {
      return {
        isMobile: false,
        rootMinWidth: '1200px',
        topbarPad: '9px 32px',
        topbarGap: '28px',
        topbarRightDisplay: 'flex',
        headerPad: '14px 32px',
        logoHeight: '62px',
        desktopNavDisplay: 'flex',
        ctaBtnDisplay: 'inline-flex',
        hamburgerDisplay: 'none',
        mobileMenuDisplay: 'none',

        heroPad: '104px 32px 108px',
        heroPadNarrow: '88px 32px 92px',
        heroH1: '58px',
        heroH1Narrow: '50px',
        heroP: '19px',
        badgeDisplay: 'block',

        sectionPad: '88px 32px 80px',
        sectionPadTight: '84px 32px',
        sectionPadMed: '56px 32px',
        padUniform80: '80px 32px',
        pad72: '72px 32px',

        grid4: 'repeat(4, 1fr)',
        grid3: 'repeat(3, 1fr)',
        grid2: 'repeat(2, 1fr)',
        grid6: 'repeat(6, 1fr)',
        split: '1.05fr 0.95fr',
        splitAlt: '1fr 1.1fr',

        footerGrid: '1.4fr 1fr 1fr 1.2fr',
        footerContactGrid: 'repeat(3, 1fr)',

        ctaPad: '64px 32px',
        ctaDirection: 'row',
        ctaAlign: 'center',
        ctaTextAlign: 'left',
        ctaGap: '48px',
        splitGap: '64px',
        gridGap: '24px',
        gapTight: '20px',
      };
    }
    return {
      isMobile: true,
      rootMinWidth: '0',
      topbarPad: '8px 16px',
      topbarGap: '14px',
      topbarRightDisplay: 'none',
      headerPad: '10px 16px',
      logoHeight: '42px',
      desktopNavDisplay: 'none',
      ctaBtnDisplay: 'none',
      hamburgerDisplay: 'flex',
      mobileMenuDisplay: menuOpen ? 'flex' : 'none',

      heroPad: '48px 20px 40px',
      heroPadNarrow: '44px 20px 36px',
      heroH1: '30px',
      heroH1Narrow: '28px',
      heroP: '16px',
      badgeDisplay: 'none',

      sectionPad: '48px 20px 44px',
      sectionPadTight: '48px 20px',
      sectionPadMed: '40px 20px',
      padUniform80: '48px 20px',
      pad72: '44px 20px',

      grid4: '1fr',
      grid3: '1fr',
      grid2: '1fr',
      grid6: 'repeat(2, 1fr)',
      split: '1fr',
      splitAlt: '1fr',

      footerGrid: '1fr',
      footerContactGrid: '1fr',

      ctaPad: '36px 20px',
      ctaDirection: 'column',
      ctaAlign: 'stretch',
      ctaTextAlign: 'center',
      ctaGap: '22px',
      splitGap: '32px',
      gridGap: '18px',
      gapTight: '14px',
    };
  }
};
