export default function PortfolioItem({title, image, description, demo, repository}) {
    return (
      <li className="card" key={title}>
        <h3 className="card-tilte">{title}</h3>
        <img className="card-image" src={image} alt="#" />
        <div className="card-description">{description}</div>        
        <div className="card-demo">{demo}</div>
        <div className="card-repo">{repository}</div>
      </li>
    );
  }
  