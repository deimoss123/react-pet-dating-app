import TestimonialComponent from "./testimonial/Testimonial";
import styles from "./Testimonials.module.css";

const Testimonials: React.FC = () => {
  return (
    <div className={styles["testimonialsWrapper"]}>
      <TestimonialComponent />
      <TestimonialComponent />
      <TestimonialComponent />
    </div>
  );
};

export default Testimonials;
