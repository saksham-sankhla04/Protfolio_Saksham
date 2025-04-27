import styles from "./Banner.module.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

function Banner() {
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h3>Hello I'm</h3>
            <h1>Saksham Sankhla</h1>
            <h2>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "I'm a Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "I'm a UI/UX Designer",
                  1000,
                  "I'm a Content Writer",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
            <p>
              A passionate web developer based in Jodhpur,Rajasthan. With a keen
              eye for detail and a passion for web design, I specialize in
              creating visually captivating and highly functional websites
            </p>
            <button className={styles.btn}>Download Resume</button>
          </div>
          <img
            src="https://ashik-html.vercel.app/img/author-banner.png"
            alt=""
            className={styles.mainPhoto}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
