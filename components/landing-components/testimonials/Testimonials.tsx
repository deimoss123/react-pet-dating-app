import { useState, useEffect } from "react";
import TestimonialComponent from "./testimonial/Testimonial";
import styles from "./Testimonials.module.css";


const Testimonials: React.FC = () => {
  class Testimonial {
    id: string;
    name: string;
    text: string[];

    constructor(name: string, text: string[]) {
      this.name = name;
      this.text = text;
      this.id = new Date().toISOString();
    }
  }

 
  const arrayOfTestimonials = [
    new Testimonial("Rex & Lassie", [
      "I'm a simple girl living in a farm, he's from a big city and has a fancy job with the police. I was so nervous before our first date! What would we even talk about? But, little did I know, I had no reason to worry, because I was about to meet the love of my life. ❤️",
    ]),
    new Testimonial("Tom & Jerry", [
      "Ours is not your typical love story. In fact, we started off hating each other, after having swiped right on one another as a joke. And yet, as we argued over texts, we didn't unmatch, and I noticed something. A tension in the air. Our hatred for each other slowly turned into a different kind of passion.",
      "Now we've been married for five years.",
    ]),
    new Testimonial("Lady & Tramp", [
      "I never thought a stray like me would match with a purebred lady like her, and yet here we are, happily in love! Love simply finds a way.",
      "And the way we bonded over pasta was incredible. Some might even say iconic!",
    ]),
  ];

  return (
    <div className={styles["testimonialsWrapper"]}>
      {arrayOfTestimonials.map((item, index) => (
        <TestimonialComponent index={index} key={item.id} text={item.text} name={item.name} />
      ))}
    </div>
  );
};

export default Testimonials;
