import styles from "./Testimonial.module.css";

const TestimonialComponent: React.FC = () => {
  return (
    <div className={styles["testimonialWrapper"]}>
      <div className={styles["innerWrapper"]}>
        <div className={styles["h4Wrapper"]}>
          <h4>Sidney & Courtney</h4>
          <span>“</span>
        </div>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse
          voluptatibus minima iste accusamus voluptas adipisci dolores fugiat at
          praesentium!
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialComponent;
