import { ReactNode } from "react";

// The children statement will display whatever is included in between the opening and the closing tags while invoking the component
interface Props {
  children: ReactNode;
}
//This alert will generate a PopUp
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
