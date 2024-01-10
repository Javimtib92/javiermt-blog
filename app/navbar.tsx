import { ThemeProvider } from '@/components/theme-provider';
import NavigationLinks from './navigation-links';
import { SiteLogo } from './site-logo';
import PreferredThemeSwitch from '@/components/preferred-theme-switch';

export function Navbar() {
  return (
    <>
      {/* top-[1px] is a little hack for properly detect if element is pinned on
      the top when scrolling // see:
      https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/ */}
      <nav className='navbar sticky top-[-1px] mb-12 mt-20 flex flex-row items-start py-4 pl-2 pr-4 md:-mx-[28px] md:px-5'>
        <div className='backdrop absolute left-[-8px] right-[-8px] top-0 h-20 min-w-full backdrop-blur md:-mx-[28px]'></div>
        <div className='img-container z-10 flex min-w-full flex-row justify-between space-x-0'>
          <SiteLogo />

          <div className='flex gap-6'>
            <NavigationLinks />
            <ThemeProvider>
              <PreferredThemeSwitch></PreferredThemeSwitch>
            </ThemeProvider>
          </div>
        </div>
      </nav>
      <script
        id='navbar-shrink-animation'
        dangerouslySetInnerHTML={{
          __html: `(function() {
            const navbar = document.querySelector(".navbar");
            
            if (!CSS.supports('animation-timeline: scroll()')) {
              const threshold = 500; // Adjust this threshold as needed
        
              window.addEventListener('scroll', handleScroll);
        
              function handleScroll() {
                if (!navbar) {
                  return;
                }
        
                const scrollY = window.scrollY || window.pageYOffset;
        
                if (scrollY > threshold) {
                  navbar.style.setProperty('--navbar-shrink', '1');
                } else {
                  navbar.style.setProperty('--navbar-shrink', '0');
                }
              }
            } else {
              const observer = new IntersectionObserver( 
                ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
                { threshold: [1] }
              );
              
              observer.observe(navbar);
            }
          })()`,
        }}
      ></script>
    </>
  );
}
