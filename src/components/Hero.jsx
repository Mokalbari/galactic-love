import '../styles/Hero.css'

function Hero({ name, homeworld, cybernetics, image }) {
  return (
    <section className="hero container flex-row">
      <img className="avatar" alt={name} src={image} />
      <div className="hero__container">
        <h2 className="info1">{name}</h2>
        <p className="info2">{homeworld}</p>
        <p className="info3">{cybernetics}</p>
      </div>
    </section>
  )
}

export default Hero
