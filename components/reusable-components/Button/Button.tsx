import styles from "./Button.module.css";

const Button: React.FC<{
  children: string;
  class?: string;
}> = (props) => {
  return (
    <button
      className={`${styles["buttonComponent"]} ${
        props.class !== undefined && styles[props.class]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
