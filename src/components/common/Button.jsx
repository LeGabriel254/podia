const Button = () =>
{
const {text,handleClick}= props
return (
  <button style={{
border:'none',
backgroundColor: theme.purple,
padding:'0.5e, 1em',
color:theme.eggShell
  }} 
  onClick={() => handleClick()}>

  </button>
);
};
export default Button;