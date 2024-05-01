import PortfolioItem from "../components/PortfolioCard";
import {PortfolioData} from "./portfolioData.js";


export default function Portfolio() {
  return (
    <div className="container pt-4 portfolio">
<h2>Projects</h2>
            <ul className="flex-container">
                {PortfolioData.map((card) => <PortfolioItem key={card.id} {...card}  />)}
            </ul>
    </div>
  );
}
