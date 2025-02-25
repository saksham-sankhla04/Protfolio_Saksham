import styles from "./About.module.css";

function About() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h3>About Me</h3>
            <h1>Story Captivating visuals portfolio</h1>
            <p>
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as a showcase to a present your talents and attract
              potential employers or clients
            </p>
            <ul>
              <li>Mistakes To Avoid</li>
              <li>Mistakes To Avoid</li>
              <li>Mistakes To Avoid</li>
              <li>Mistakes To Avoid</li>
              <li>Mistakes To Avoid</li>
              <li>Mistakes To Avoid</li>
            </ul>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.img}>
            <img
              src="https://ashik-html.vercel.app/img/about-1.png"
              alt=""
              className={styles.imgBig}
            />
            <img
              src="https://ashik-html.vercel.app/img/about-2.png"
              alt=""
              className={styles.imgSmall}
            />
          </div>
        </div>
        <div className={styles.services}>
          <h3>My Services</h3>
          <h1>
            Elevate personal brand our <br /> stunning portfolio
          </h1>
          <div className={styles.serviceContainer}>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h2>Content Writing</h2>
              <p>
                A personal portfolio is a go isn collection ofio your work,in
                you achievements, and skills
              </p>
              <span>&rarr;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h2>Content Writing</h2>
              <p>
                A personal portfolio is a go isn collection ofio your work,in
                you achievements, and skills
              </p>
              <span>&rarr;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h2>Content Writing</h2>
              <p>
                A personal portfolio is a go isn collection ofio your work,in
                you achievements, and skills
              </p>
              <span>&rarr;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}></div>
              <h2>Content Writing</h2>
              <p>
                A personal portfolio is a go isn collection ofio your work,in
                you achievements, and skills
              </p>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
