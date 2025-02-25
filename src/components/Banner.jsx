import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1>Hello I'm Saksham</h1>
            <p>
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as
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
