import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.content}>
          <h1>Contact Us</h1>

          <ul className={styles.info}>
            <li>Address</li>
            <li>Mail</li>
            <li>Phone Num</li>
          </ul>

          <ul className={styles.social}>
            <li>INSTA</li>
            <li>INSTA</li>
            <li>INSTA</li>
          </ul>
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Number" />
          <textarea type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
