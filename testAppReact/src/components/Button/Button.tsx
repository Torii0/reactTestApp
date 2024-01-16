import style from "./Button.module.css";
interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger"; // opcjonalny props który nie musi byc wypelniony w kompilatorz typescript
  onHandleClick: (text: string) => void;
}
const Button = ({ text, color = "primary", onHandleClick }: Props) => {
  return (
    <>
      
      <div
        className={[style.btn, style['btn-'+color]].join(' ')}
        onClick={() => {
          onHandleClick(text);
        }}
      >
        {text}
      </div>
    </>
  );
};

export default Button;
