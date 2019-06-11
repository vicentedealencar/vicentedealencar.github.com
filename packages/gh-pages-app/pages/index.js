// import Link from 'next/link'
// import '../css/main.css'

export default () => (
  // <div>
  //   Hello World.{' '}
  //   <Link href='/about' as={process.env.BACKEND_URL + '/about'}>
  //     <a>About</a>
  //   </Link>
  // </div>
  <>
    <div className="container">
      <h1 id="title">Vicente de Alencar</h1>

      <img
        alt="avatar"
        src="http://gravatar.com/avatar/6805968f8f0beb313a804c2c6133e5ba.png?s=200"
      />

      {/* <img alt="somewhere" src="http://maps.google.com/maps/api/staticmap?center=-22.962449,-43.203451&zoom=13&size=200x200&sensor=false"> */}

      <div>
        <a
          className="nav github"
          href="http://www.github.com/vicentedealencar"
          target="_blank"
        >
          GitHub
        </a>
        {/* <a className="nav facebook" href="http://facebook.com/vicentedealencar" target="_blank">
                Facebook
            </a> */}
        <a
          className="nav twitter"
          href="http://twitter.com/vicentealencar"
          target="_blank"
        >
          Twitter
        </a>
        <a
          className="nav linkedin"
          href="http://br.linkedin.com/pub/vicente-de-alencar/24/932/495"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <footer>
      <p>// Life runs on code</p>
    </footer>

    <style jsx global>{`
      body {
        margin: 0;
        background-color: #333;
        color: #eee;
        text-align: center;
        font-family: 'Segoe UI Light', 'Helvetica Neue', 'Segoe UI', 'Segoe WP',
          sans-serif;
        text-rendering: optimizelegibility;
        text-transform: lowercase;
      }

      hr {
        margin: 25px 0;
        border: 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #fff;
      }

      img {
        margin: 25px;
        height: 200px;
        width: 200px;
        border-radius: 100px;
      }

      .container {
        height: calc(100vh - 75px);
      }

      .nav {
        font-size: 22px;
        padding: 10px 20px;
        color: #eee;
        text-decoration: underline;
      }

      .nav:hover {
        color: #f55c3d;
        animation: colors 57s linear infinite;
      }

      @media (max-width: 319px) {
        .nav {
          display: block;
        }
      }

      .nav.github:hover {
        color: #00aba9;
      }

      .nav.facebook:hover {
        color: #3d5cf5;
      }

      .nav.twitter:hover {
        color: #1ba1e2;
      }

      .nav.linkedin:hover {
        color: #993df5;
      }

      #title {
        margin: 0;
      }

      footer {
        height: 75px;
        background-color: #eee2;
      }

      footer p {
        border-top: 2px solid #eee;
        color: #8cbf26;
        margin: 0;
        padding: 25px;
      }
    `}</style>

    <style jsx global>{`
      /*  http://codepen.io/jackiebackwards/pen/zmpgs  */

      @keyframes colors {
        5.26316% {
          color: #f55c3d;
        }

        10.52632% {
          color: #f5993d;
        }

        15.78947% {
          color: #f5d63d;
        }

        21.05263% {
          color: #d6f53d;
        }

        26.31579% {
          color: #99f53d;
        }

        31.57895% {
          color: #5cf53d;
        }

        36.84211% {
          color: #3df55c;
        }

        42.10526% {
          color: #3df599;
        }

        47.36842% {
          color: #3df5d6;
        }

        52.63158% {
          color: #3dd6f5;
        }

        57.89474% {
          color: #3d99f5;
        }

        63.15789% {
          color: #3d5cf5;
        }

        68.42105% {
          color: #5c3df5;
        }

        73.68421% {
          color: #993df5;
        }

        78.94737% {
          color: #d63df5;
        }

        84.21053% {
          color: #f53dd6;
        }

        89.47368% {
          color: #f53d99;
        }

        94.73684% {
          color: #f53d5c;
        }

        /* if we're moving on to the last step, reset the color to be the same as the starter color so that the loop is smooth */
        100% {
          color: #f55c3d;
        }
      }

      h1 {
        font-size: 80px;
        /* default text color to the animation's first color */
        color: #f55c3d;
        animation: colors 57s linear infinite;
      }
    `}</style>

    {/* <script src="js/vendor/jquery-1.8.2.min.js"></script>
    <script src="js/vendor/jquery.fittext.js"></script>
    <script src="js/vendor/analytics.js"></script>
    <script src="js/main.js"></script> */}
  </>
)
