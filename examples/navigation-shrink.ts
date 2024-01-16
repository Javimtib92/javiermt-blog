const CSS = `body {
    font-family: sans-serif;
    -webkit-font-smoothing: auto;
    -moz-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: auto;
    text-rendering: optimizeLegibility;
    font-smooth: always;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  
    background-color: color-mix(in srgb, slategrey 100%, black 100%);
    color: white;
  }
  
  .navbar {
    display: flex;
    position: sticky;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 1rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
    flex-direction: row;
    align-items: flex-start;
    top: -1px;
  
    @media (min-width: 768px) {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
  
  .backdrop {
    position: absolute;
    top: 0;
    min-width: 100%;
    height: 5rem;
    backdrop-filter: blur(8px);
    left: -8px;
    right: -8px;
  
    @media (min-width: 768px) {
      margin-right: -28px;
      margin-left: -28px;
    }
  }
  
  .navbar .inner-container {
    transition: transform 0.3s ease;
    will-change: transform;
    transform: translateY(calc(0px - var(--navbar-shrink) * 12px));
  }
  .navbar .backdrop {
    transition: transform 0.3s ease;
    will-change: transform;
    transform: translateY(calc(0px - var(--navbar-shrink) * 24px));
  }
  
  .navbar svg {
    transition: transform 0.3s ease;
    will-change: transform;
    transform: scale(calc(1 - var(--navbar-shrink) * 0.2));
  }
  
  .navbar h1 {
    transition: opacity 0.3s ease;
    opacity: calc(1 - var(--navbar-shrink));
  }
  
  .navbar p {
    transition: opacity 0.3s ease;
    opacity: calc(1 - var(--navbar-shrink));
  }
  
  @supports (animation-timeline: scroll()) {
    .navbar.is-pinned {
      --navbar-shrink: 1;
  
      animation: shrink;
      animation-timeline: scroll(root block);
      animation-range-start: 0%;
      animation-range-end: 10%;
      animation-timing-function: ease;
    }
  }
  
  @keyframes shrink {
    0% {
      --navbar-shrink: 0;
    }
    50%,
    100% {
      --navbar-shrink: 1;
    }
  }
  
  .inner-container {
    display: flex;
    z-index: 10;
    margin-left: 0;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
  }
  
  .logo {
    margin-right: 1rem;
  }
  
  .logo-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
  
  .site-name {
    display: flex;
    flex-direction: column;
  }
  
  .site-name p {
    color: white;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  
    @media (min-width: 640px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  
  .navigation-links {
    display: flex;
    flex-direction: row-reverse;
    gap: 1.5rem;
  
    @media (min-width: 640px) {
      flex-direction: row;
    }
  }
  
  .navigation-links-inner {
    display: none;
    flex-direction: row;
    align-items: center;
  
    @media (min-width: 640px) {
      display: flex;
    }
  }
  
  .navigation-links-inner a {
    position: relative;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .scrollable-container {
    min-height: 150dvh;
  }
`;

const HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shrink a sticky navigation bar</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <nav class="navbar">
        <div class="backdrop"></div>
        <div class="inner-container">
          <a href="" class="logo-link">
            <svg
              class="logo"
              width="48"
              height="48"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
                fill="#1D2633"
              ></path>
              <path
                d="M69.7136 50.2133C71.0644 50.2133 72.0252 51.5261 71.5172 52.7777C66.4666 65.2233 54.2582 74 39.9999 74C25.7417 74 13.5333 65.2233 8.48263 52.7777C7.97466 51.5261 8.93548 50.2133 10.2863 50.2133H69.7136Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M71.5172 27.2222C72.0252 28.4739 71.0644 29.7867 69.7136 29.7867H10.2863C8.93549 29.7867 7.97468 28.4739 8.48264 27.2222C13.5333 14.7767 25.7417 6 39.9999 6C54.2582 6 66.4665 14.7767 71.5172 27.2222Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M69.837 37.1499C72.0842 37.1499 73.1686 38.7177 73.1686 40.5337V43.9437H70.8169V40.9388C70.8169 40.1157 70.5164 39.4363 69.6541 39.4363C68.7918 39.4363 68.5044 40.1157 68.5044 40.9388V43.9437H66.1527V40.9388C66.1527 40.1157 65.8653 39.4363 65.003 39.4363C64.1407 39.4363 63.8402 40.1157 63.8402 40.9388V43.9437H61.4885V40.5337C61.4885 38.7177 62.5729 37.1499 64.8201 37.1499C66.0482 37.1499 66.9366 37.6333 67.3416 38.4303C67.7728 37.6333 68.7135 37.1499 69.837 37.1499Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M57.2627 41.8533C58.0205 41.8533 58.3471 41.1609 58.3471 40.3378V37.4112H60.6988V40.6252C60.6988 42.5457 59.5752 44.1397 57.2627 44.1397C54.9502 44.1397 53.8267 42.5457 53.8267 40.6252V37.4112H56.1783V40.3378C56.1783 41.1609 56.505 41.8533 57.2627 41.8533Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M50.3687 44.1527C48.8924 44.1527 47.9386 43.6432 47.3769 42.6503L49.0753 41.6965C49.3105 42.1146 49.6632 42.3236 50.2511 42.3236C50.7345 42.3236 50.9566 42.1538 50.9566 41.9448C50.9566 41.1478 47.5075 41.9578 47.5075 39.4232C47.5075 38.1951 48.5527 37.2022 50.3295 37.2022C51.8843 37.2022 52.7335 37.9599 53.1124 38.6916L51.4139 39.6584C51.2702 39.2664 50.826 39.0313 50.3818 39.0313C50.0421 39.0313 49.8592 39.175 49.8592 39.371C49.8592 40.181 53.3083 39.4363 53.3083 41.8925C53.3083 43.2643 51.9627 44.1527 50.3687 44.1527Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M42.1524 46.9486H39.8007V40.6644C39.8007 38.6655 41.3032 37.2152 43.3936 37.2152C45.4317 37.2152 46.9864 38.77 46.9864 40.6644C46.9864 42.7548 45.6016 44.1397 43.5242 44.1397C43.0408 44.1397 42.5574 43.996 42.1524 43.7738V46.9486ZM43.3936 41.9317C44.1383 41.9317 44.6347 41.3568 44.6347 40.6775C44.6347 39.985 44.1383 39.4232 43.3936 39.4232C42.6489 39.4232 42.1524 39.985 42.1524 40.6775C42.1524 41.3568 42.6489 41.9317 43.3936 41.9317Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M37.4449 36.7188C36.6741 36.7188 36.0339 36.0786 36.0339 35.3078C36.0339 34.5369 36.6741 33.8967 37.4449 33.8967C38.2158 33.8967 38.856 34.5369 38.856 35.3078C38.856 36.0786 38.2158 36.7188 37.4449 36.7188ZM36.2691 37.4112H38.6208V43.9437H36.2691V37.4112Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M31.7571 44.1397C29.719 44.1397 28.1642 42.5719 28.1642 40.6644C28.1642 38.77 29.719 37.2022 31.7571 37.2022C33.7952 37.2022 35.35 38.77 35.35 40.6644C35.35 42.5719 33.7952 44.1397 31.7571 44.1397ZM31.7571 41.9317C32.5018 41.9317 32.9983 41.3568 32.9983 40.6775C32.9983 39.985 32.5018 39.4102 31.7571 39.4102C31.0124 39.4102 30.5159 39.985 30.5159 40.6775C30.5159 41.3568 31.0124 41.9317 31.7571 41.9317Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M23.7237 47.1446C22.1036 47.1446 20.9278 46.426 20.3268 45.1457L22.2735 44.1005C22.4825 44.5447 22.8745 45.002 23.6845 45.002C24.5337 45.002 25.0955 44.4663 25.1608 43.5256C24.8473 43.8 24.3508 44.009 23.6061 44.009C21.7901 44.009 20.3268 42.6111 20.3268 40.6513C20.3268 38.7569 21.8815 37.2152 23.9197 37.2152C26.01 37.2152 27.5125 38.6655 27.5125 40.6644V43.2513C27.5125 45.6029 25.8794 47.1446 23.7237 47.1446ZM23.8805 41.801C24.586 41.801 25.1216 41.3176 25.1216 40.5991C25.1216 39.8936 24.586 39.4232 23.8805 39.4232C23.188 39.4232 22.6393 39.8936 22.6393 40.5991C22.6393 41.3176 23.188 41.801 23.8805 41.801Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M16.3374 44.1397C14.2993 44.1397 12.7445 42.5719 12.7445 40.6644C12.7445 38.77 14.2993 37.2022 16.3374 37.2022C18.3755 37.2022 19.9303 38.77 19.9303 40.6644C19.9303 42.5719 18.3755 44.1397 16.3374 44.1397ZM16.3374 41.9317C17.0821 41.9317 17.5786 41.3568 17.5786 40.6775C17.5786 39.985 17.0821 39.4102 16.3374 39.4102C15.5927 39.4102 15.0962 39.985 15.0962 40.6775C15.0962 41.3568 15.5927 41.9317 16.3374 41.9317Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M8.46218 35.1249V41.7227H12.3555V43.9437H8.13556C6.64615 43.9437 6.04517 43.1598 6.04517 41.9186V35.1249H8.46218Z"
                fill="#EDEBDE"
              ></path>
              <path
                d="M33.9999 6.52774C35.9476 6.18095 37.9526 6 40 6C42.0473 6 44.0523 6.18095 45.9999 6.52773V29.7867H33.9999V6.52774Z"
                fill="#AC2828"
              ></path>
              <path
                d="M46.0004 50.2133H33.9993C33.9741 55.4312 33.0234 60.6038 31.1909 65.4906L28.7185 72.0836C32.2486 73.3249 36.0454 74 39.9999 74C43.9543 74 47.7511 73.3249 51.2812 72.0836L48.8088 65.4906C46.9763 60.6038 46.0256 55.4312 46.0004 50.2133Z"
                fill="#AC2828"
              ></path>
              <path
                d="M46 6.52771C50.3408 7.3006 54.3967 8.89722 58 11.1502V29.7867H46V6.52771Z"
                fill="#306A9F"
              ></path>
              <path
                d="M51.2813 72.0836C56.7387 70.1647 61.5589 66.8928 65.3391 62.6704L64.7492 62.295C60.6056 59.6581 58.073 55.1147 58.0015 50.2133H46.0005C46.0257 55.4312 46.9764 60.6038 48.809 65.4906L51.2813 72.0836Z"
                fill="#306A9F"
              ></path>
              <path
                d="M21.9999 11.1502C25.6032 8.89723 29.659 7.3006 33.9999 6.52771V29.7867H21.9999V11.1502Z"
                fill="#DEB038"
              ></path>
              <path
                d="M21.9983 50.2133H33.9993C33.9742 55.4089 33.0315 60.5596 31.2143 65.428L28.7185 72.0836C23.261 70.1647 18.4409 66.8928 14.6606 62.6704L15.2505 62.295C19.3941 59.6581 21.9268 55.1147 21.9983 50.2133Z"
                fill="#DEB038"
              ></path>
            </svg>
            <div class="site-name">
              <p>Your site</p>
            </div>
          </a>
          <div class="navigation-links">
            <div class="navigation-links-inner">
              <a>Home</a>
              <a>Blog</a>
            </div>
          </div>
        </div>
      </nav>
      <script>
        (function () {
          const navbar = document.querySelector(".navbar");

          if (!CSS.supports("animation-timeline: scroll()")) {
            const threshold = 500; // Adjust this threshold as needed

            window.addEventListener("scroll", handleScroll);

            function handleScroll() {
              if (!navbar) {
                return;
              }

              const scrollY = window.scrollY || window.pageYOffset;

              if (scrollY > threshold) {
                navbar.style.setProperty("--navbar-shrink", "1");
              } else {
                navbar.style.setProperty("--navbar-shrink", "0");
              }
            }
          } else {
            console.log(navbar);
            const observer = new IntersectionObserver(
              ([e]) =>
                e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
              { threshold: [1] }
            );

            observer.observe(navbar);
          }
        })();
      </script>
      <div class="scrollable-container">
        <p>
          Sociosqu netus hac auctor, pulvinar suscipit dictum consectetur?
          Sapien odio gravida ante laoreet. Nullam viverra habitant, primis
          lectus commodo auctor turpis eu netus curabitur? Litora enim fringilla
          semper at senectus pretium mollis justo consectetur montes. Posuere
          sed suspendisse pretium elementum tempor cursus amet vel hac ac
          sociis. Curae; placerat eleifend laoreet posuere venenatis imperdiet
          mi nisl mauris nisi. Congue platea luctus sem ante sagittis non nulla?
          Interdum ligula orci enim litora morbi nulla.
        </p>
        <p>
          Dolor sem tempor vitae luctus sem habitant. Consectetur rutrum
          volutpat non vestibulum porta! Massa luctus est malesuada ullamcorper
          parturient feugiat nostra conubia. Egestas elementum elementum aliquet
          turpis dictumst aenean class habitant nullam arcu lacus. Vel posuere
          diam dapibus etiam. Duis tellus, conubia justo accumsan feugiat. Nisi
          duis cum auctor sagittis praesent rhoncus vehicula quis dictumst
          sapien.
        </p>
        <p>
          Dictum ornare erat class tincidunt. Ad vel dis erat morbi. Auctor
          fusce feugiat potenti porta; volutpat mauris varius maecenas. Blandit
          porta scelerisque mattis per nullam. Parturient ad magna libero augue
          mi feugiat bibendum auctor. Urna habitasse ornare volutpat volutpat.
          Rutrum interdum lacus commodo maecenas arcu taciti. Id libero; dui
          montes ornare potenti nostra. Praesent volutpat est tortor tincidunt
          ipsum massa convallis. Per pulvinar facilisis.
        </p>
        <p>
          Velit, potenti ullamcorper ridiculus nisi mauris. Id at proin
          convallis turpis arcu curabitur. Hendrerit morbi montes praesent
          vestibulum habitant nunc mattis egestas in consectetur. Sagittis eu
          posuere vivamus platea fermentum, malesuada amet varius! Arcu lacus
          conubia venenatis velit mollis eget diam tristique facilisi mus auctor
          pulvinar. Ac ornare risus duis ullamcorper nulla tortor. Netus nulla
          habitasse quisque mollis maecenas. Mattis magnis nullam.
        </p>
        <p>
          Nec, porta nulla eleifend nec. Iaculis ante tortor per aptent tempor.
          Accumsan facilisis etiam lobortis ligula tristique sed. Sapien mus
          felis nunc proin accumsan dis habitant quam integer cum suscipit.
          Natoque, cum conubia pretium. Et pulvinar platea massa nunc. Semper
          aliquam at ultrices dis nibh felis integer lacus pharetra non
          imperdiet magnis! Rutrum cum massa, morbi imperdiet mauris et
          lobortis. Magna elementum risus potenti aptent rhoncus per lectus
          rhoncus et iaculis magna. Orci nam dictum montes sollicitudin semper
          primis rutrum vitae luctus iaculis! Suspendisse sociis condimentum
          mus.
        </p>
        <p>
          Libero eu fringilla scelerisque. Magnis fames tristique quisque
          senectus metus. Vitae arcu habitasse integer et. Diam etiam senectus
          eu curae; molestie iaculis phasellus eros. Ipsum vel magnis
          suspendisse libero enim iaculis inceptos. Taciti; ipsum tempor
          dignissim lobortis urna. Vestibulum et rutrum felis euismod. Nostra
          magna cursus primis? Nunc eget montes semper bibendum consectetur.
          Turpis nec elementum turpis nostra neque vulputate mus aenean tempor
          elit etiam orci? Commodo vivamus taciti mattis nullam.
        </p>
        <p>
          Feugiat ornare massa porttitor interdum velit sagittis faucibus,
          conubia phasellus cras nulla! Nisi nascetur litora, sollicitudin
          primis et class mattis. Posuere senectus, ac rutrum massa orci duis
          leo per leo hendrerit urna. Consectetur sollicitudin sed dictumst
          ullamcorper erat eget et nisl. Ornare nec aenean hac est. Nostra vitae
          justo volutpat sociis. At ante elementum netus ac ac curabitur augue
          at vehicula primis inceptos. Lacinia torquent tempus primis hac hac
          magnis gravida non. Malesuada fames scelerisque phasellus, consequat
          porta commodo cursus nam justo posuere! Urna cursus donec scelerisque
          pulvinar pulvinar id nostra. Commodo.
        </p>
        <p>
          Nostra arcu felis bibendum fusce odio tortor porta. Feugiat erat
          vehicula hac velit, molestie hac! Tellus donec nisi ridiculus, fames
          sem purus nec lacinia nunc curae;. Varius nam curae; duis dictum ad
          ultrices mollis leo nullam est fames bibendum. Quisque purus at curae;
          commodo dis sed phasellus. Lacinia himenaeos consectetur malesuada.
          Ultricies sem sociosqu erat; est quam est tortor arcu vitae porta
          praesent! Luctus fermentum aenean, dictumst eros montes phasellus diam
          vel. Leo cum, etiam purus est? Vivamus risus pharetra turpis erat
          aptent. Mollis, turpis nec vel? Porttitor odio inceptos eget penatibus
          inceptos praesent amet eget.
        </p>
        <p>
          Vel commodo ullamcorper natoque rhoncus volutpat cubilia tincidunt id
          hac integer. Praesent id consectetur lacinia quam fringilla duis
          cubilia condimentum! Imperdiet sodales facilisis nulla nam, non
          maecenas ultrices vehicula luctus lobortis. Facilisis nascetur
          convallis hac dictum pulvinar eros. Adipiscing suspendisse quam duis
          platea sociis. Imperdiet nisl velit ultricies senectus dignissim mi
          lobortis velit. Ullamcorper nascetur inceptos lacinia maecenas
          vehicula tortor orci. Dis adipiscing nulla cubilia fusce? Accumsan
          dignissim sem fames sociis. Cursus dictum taciti eleifend consequat
          rhoncus ultrices elementum morbi? Lobortis rhoncus volutpat ac rhoncus
          dignissim augue, lectus curabitur elementum.
        </p>
        <p>
          Fames senectus odio vulputate iaculis rutrum felis ad. Habitasse
          suscipit aliquet eleifend ante maecenas id faucibus in habitant mus.
          Tempus cubilia morbi ultrices auctor habitasse aenean justo dolor
          placerat ac bibendum mollis. Est fringilla quis quisque facilisi. Est
          aliquet commodo ridiculus litora arcu ridiculus integer neque velit
          imperdiet dignissim. Vehicula vestibulum nulla lectus ad lectus
          sagittis elit vitae elementum et fermentum. Tellus molestie facilisis
          mattis taciti. Cursus bibendum est fusce etiam quisque faucibus non
          metus quis sed commodo. Venenatis habitasse nibh.
        </p>
      </div>
    </main>
  </body>
</html>
`;

export const files = {
  '/styles.css': {
    code: CSS,
    active: true,
  },
  '/index.html': HTML,
};
