interface Props {
  children: string;
  onClick: () => void;
  color: string;
}

// If you want to make a presetted color, you can just do the following sentence: "const Button =( {children,onClick, color='primary'} )", and adding a ?to the color inside Props, the children and onClick is not necesary
const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
 
