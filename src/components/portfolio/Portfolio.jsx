import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Games</li>
        <li>Machine Learning</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/projects/Saga Event.png"} alt="" />
          <h3>Event Mangaement App</h3>
        </div>
      </div>
    </div>
  )
}
