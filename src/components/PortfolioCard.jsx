//take in data via the prop and render it into a card.

export default function PortfolioItem({
  title,
  image,
  description,
  demo,
  repository,
}) {
  return (
    <div className="card" key={title} style={{width: "25rem"}} >
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <img className="card-image card-img-top" src={image} alt="#" />
        <div className="card-body">
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link">
            Preview
          </a>}
          <a href={repository} target="_blank" rel="noopener noreferrer" className="card-link">
            Github
          </a>
        </div>
      </div>
  );
}
