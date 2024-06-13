import "./Hero.css"


function Hero({ name, homeworld, cybernetics, image }) {
  return (
    <section className="heroContainer">
      <div className="heroAvatar">
        <img className="avatar" alt={name} src={image} />
      </div>
      <div className="heroNameInfo">
        <h1 className="info1">{name}</h1>
        <p className="info2">{homeworld}</p>
        <p className="info3">{cybernetics}</p>
      </div>
    </section>
  );
}
  
  export default Hero;


