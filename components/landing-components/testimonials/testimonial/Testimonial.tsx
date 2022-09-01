import styles from "./Testimonial.module.css";

const TestimonialComponent: React.FC<{
  text: string[];
  name: string;
  index: number;
}> = (props) => {
  return (
    <div
      className={`${styles["testimonialWrapper"]} ${
        props.index > 0 ? styles["conditional"] : ""
      }`}
    >
      <div className={styles["innerWrapper"]}>
        <div className={styles["h4Wrapper"]}>
          <h4>{props.name}</h4>
          <span>“</span>
        </div>
        {props.text.map((item, index) => (
          <blockquote key={new Date().toISOString()}>
            {props.text[index]}
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
