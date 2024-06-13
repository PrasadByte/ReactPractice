import React from 'react';
import './styles/general.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/news-page.css';

const App = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="News Page" />
        <meta name="keywords" content="news" />
        <meta name="author" content="Nikola Štefančić" />
        <title>EnVizion Gym</title>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link rel="icon" type="image/x-icon" href="/logos/sparta-logo-red.png" />
      </head>
      <body>
        <header>
          <nav className="navbar">
            <a href="index.html"><img src="/logos/sparta-logo-red.png" alt="envizion-logo" className="navbar-logo logo-animate" /></a>
            <a href="index.html"><h1>En<span className="logo-animate">Vizion</span> Gym</h1></a>
            <div className="navbar-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="navbar-menu">
              <a href="index.html" className="navbar-link">Home</a>
              <a href="news.html" className="navbar-link underline">News</a>
              <a href="services.html" className="navbar-link">Services</a>
              <a href="group-programs.html" className="navbar-link">Group Programs</a>
              <a href="membership.html" className="navbar-link">Memberships</a>
              <a href="about-us.html" className="navbar-link">About Us</a>
              <a href="contact.html" className="navbar-link">Contact</a>
              <a href="login.html">
                <button className="login-btn">
                  Login
                  <div className="tooltip">
                    <p className="margin">Don't Have an Account?</p>
                    <p>Sign Up</p>
                  </div>
                </button>
              </a>
            </div>
          </nav>
        </header>
        <main>
          <section className="hero-background-container">
            <div className="news-title-wrapper">
              <h3 className="topline cursor-def">November 20, 2023</h3>
              <h1 className="news-title cursor-def">Fitness Tech Breakthrough: Wearable Drones Transforming Cardio Workouts</h1>
            </div>
            <div>
              <article className="article-text">
                <p>In a groundbreaking fusion of technology and fitness, a new era is dawning with the advent of wearable drones that are revolutionizing cardio workouts. This cutting-edge fitness tech breakthrough is poised to transform the way enthusiasts engage with their cardiovascular training routines. Imagine donning a sleek wearable device equipped with miniature drones that seamlessly integrate into your workout regimen, enhancing the intensity and effectiveness of your cardio sessions.</p>
                <p>These innovative wearable drones operate in tandem with your movements, providing real-time feedback and creating dynamic challenges tailored to your fitness level. Whether you're a seasoned athlete or just embarking on your fitness journey, the personalized nature of these drone-assisted cardio workouts ensures a bespoke experience for every user. Picture drones hovering alongside you as you jog, optimizing your running path and adjusting the resistance to match your desired intensity.</p>
                <p>Beyond their interactive capabilities, these wearable drones bring a gamified element to cardio workouts, transforming routine exercises into engaging challenges. Users can set goals, compete with friends, and track their progress through intuitive mobile apps connected to the wearable devices. The fusion of cutting-edge technology and fitness not only promotes physical well-being but also introduces an element of excitement and motivation to the traditionally repetitive realm of cardio training.</p>
                <p>Moreover, the wearable drones are designed with user safety in mind, incorporating obstacle avoidance technology to navigate complex environments seamlessly. This ensures a secure and enjoyable fitness experience, allowing users to focus on their health goals without compromising safety concerns. As the fitness industry continues to embrace technological advancements, the marriage of wearable drones with cardio workouts represents a pioneering leap forward, heralding a new era of interactive and personalized fitness solutions. Get ready to soar to new heights in your fitness journey with the transformative power of wearable drone technology.</p>
              </article>
              <br />
              <a href="./news.html"><button className="return-btn">Go Back</button></a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-wrapper">
            <div className="footer-desc">
              <h1>En<span>Vizion</span>Gym</h1>
              <p><a href="mailto:envizion@gym.com" className="footer-email"><i className="fa-solid fa-envelope footer-icon"></i>envizion@gym.com</a></p>
              <p id="phone"><i className="fa-solid fa-phone footer-icon"></i><a href="tel:347-885-2503">347-885-2503</a></p>
              <p><i className="fa-solid fa-location-dot footer-icon"></i>Brooklyn, New York</p>
            </div>
            <div className="footer-links">
              <h2 className="footer-title">Contact us</h2>
              <a href="./contact.html" className="footer-link">Contact</a>
              <a href="./contact.html" className="footer-link">Sponsorships</a>
            </div>
            <div className="footer-links">
              <h2 className="footer-title">Memberships</h2>
              <a href="./membership.html" className="footer-link">Pricing</a>
              <a href="./membership.html" className="footer-link">Plans</a>
              <a href="./membership.html" className="footer-link">FAQ</a>
            </div>
            <div className="footer-links socials">
              <h2 className="footer-title">Socials</h2>
              <div>
                <i className="fa-brands fa-instagram footer-icon"></i>
                <a href="#" className="footer-link">Instagram</a>
              </div>
              <div>
                <i className="fa-brands fa-facebook footer-icon"></i>
                <a href="#" className="footer-link">Facebook</a>
              </div>
              <div>
                <i className="fa-brands fa-tiktok footer-icon"></i>
                <a href="#" className="footer-link">TikTok</a>
              </div>
              <div>
                <i className="fa-brands fa-youtube footer-icon"></i>
                <a href="#" className="footer-link">YouTube</a>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter footer-icon"></i>
                <a href="#" className="footer-link">Twitter</a>
              </div>
            </div>
            <div className="footer-links info">
              <h2 className="footer-title">Informations</h2>
              <p><a href="#" className="footer-link">Condition of Sales</a></p>
              <p><a href="#" className="footer-link">Payment security statement</a></p>
            </div>
            <div className="footer-links payment">
              <div>
                <a href="https://usa.visa.com/" target="_blank" rel="noreferrer"><img src="/images/visa-card.png" alt="visa-card" className="footer-img" /></a>
              </div>
              <a href="https://www.paypal.com/" target="_blank" rel="noreferrer"><img src="/images/paypal-seeklogo.com.svg" alt="paypal" className="footer-img paypal" /></a>
            </div>
            <div className="footer-links payment">
              <div>
                <a href="https://www.mastercard.us/en-us.html" target="_blank" rel="noreferrer"><img src="/images/mastercard-logo.svg" alt="mastercard" className="footer-img mastercard" /></a>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <p>Copyright &copy; Nikola Štefančić ORS</p>
          <a href="https://github.com/nstefan55"><i className="fa-brands fa-github github cursor"></i></a>
        </div>
        <script src="./js/mobile-menu.js"></script>
        <script defer src="./js/animation.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/Flip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/Observer.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollToPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/Draggable.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/MotionPathPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/EaselPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/PixiPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/TextPlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/EasePack.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/CustomEase.min.js"></script>
      </body>
    </>
  );
};

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//    <>
   
   
//    </>
//   );
// }

// export default App;
