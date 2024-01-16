import { ReactNode } from "react";
interface Props{
    children: ReactNode;
    onClose: ()=> void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong> You should check in on some of those fields below.
  <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
</div>
    </>
  )
}

export default Alert
//po kliknięcu na Button ma sie otworzyć alert
// if click show Alert