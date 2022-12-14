import styles from "./Button.module.scss";

const Button: React.FC<{
  children: string | JSX.Element;
  class?: string;
  type?: string;
  disabled?: boolean;

  onClick?: (e: React.MouseEvent) => any;
}> = props => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles["buttonComponent"]} ${
        props.class !== undefined && styles[props.class]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
