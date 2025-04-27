import styles from "./Projects.module.css";

function Projects() {
  return (
    <>
      <div className={styles.section} id="projects">
        <h1>My Projects</h1>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="https://ashik-html.vercel.app/img/project-3.png" alt="" />
          </div>
          <div className={styles.content}>
            <h3>SEO Optimization</h3>
            <p>
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and
            </p>
            <ul>
              <li>Mistakes to Avoid</li>
              <li>Mistakes to Avoid</li>
              <li>Mistakes to Avoid</li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Projects;
