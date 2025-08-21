const Button = (props) => {
  const {
    children = "...",
    hover,
    background,
    rounded,
    onclick,
    type = "button",
  } = props;
  return (
    <button
      className={`px-10 py-2 font-Poppins text-base md:text-xl text-white font-semibold ${background} ${hover} ${rounded}`}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
