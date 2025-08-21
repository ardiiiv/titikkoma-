const Card = (props) => {
  const { image, alt, judul, text, colorJudul, button } = props;
  return (
    <div className="flex flex-col gap-3 items-center  font-Poppins bg-white p-5 shadow-lg rounded-lg">
      <div>
        <img src={image} alt={alt} width={125} />
      </div>
      <div>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold ">
          Dasar - dasar{" "}
        </h1>
        <span
          className={`lg:text-4xl md:text-2xl text-xl font-FiraCode font-semibold ${colorJudul}`}
        >
          {judul}
        </span>
        <p>{text} </p>
      </div>
      <div>{button}</div>
    </div>
  );
};

export default Card;
