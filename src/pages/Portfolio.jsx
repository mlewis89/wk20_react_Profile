import PortfolioItem from "../components/PortfolioCard";
import {PortfolioData} from "./portfolioData.js";


export default function Portfolio() {
  return (
    <div className="portfolio  container">
<h2>Projects</h2>
            <div className="card-deck row">
                {PortfolioData.map((card) => <PortfolioItem key={card.id} {...card}  />)}
            </div>
    </div>
  );
}
