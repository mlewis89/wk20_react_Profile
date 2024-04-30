// This is a static page mocking an "About Us" section for our fake user data
export default function Portfolio() {
  return (
    <div className="container pt-4 portfolio">
<h2>Work</h2>
            <ul class="flex-container">
                <li id="work-item-large">
                    <a href="https://mlewis89.github.io/bootcamp-wk1-challenge/Develop/index.html" target="_blank">
                        <img class="work-image" src="./assets/wk1-challenge.PNG" alt="Week1 Challenge" />
                        <div class="work-item-text">
                            <h3>HTML CSS GIT</h3>
                            <p>Code Refractor</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mlewis89/bootcamp-wk1-challenge" target="_blank">

                        <img class="work-image" src="./assets/PXL_20220910_023339004.jpg" alt="#" />
                        <div class="work-item-text">
                            <h3>Week 1 Git Repository</h3>
                            <p>Description</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.rbg.vic.gov.au/melbourne-gardens/what-s-on-melbourne/lightscape/"
                        target="_blank">
                        <img class="work-image" src="./assets/PXL_20220807_103741305.jpg" alt="#" />
                        <div class="work-item-text">
                            <h3>Lightscape </h3>
                            <p>Event Lighting</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.perisher.com.au/" target="_blank">
                        <img class="work-image" src="./assets/PXL_20220910_023339004.jpg" alt="#" />
                        <div class="work-item-text">
                            <h3>Perisher Valley</h3>
                            <p>Snowboarding</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/XotuQqtRjwP3dEwUA" target="_blank">
                        <img class="work-image" src="./assets/received_935984800753797.jpeg" alt="#" />
                        <div class="work-item-text">
                            <h3>Mt Speculation Sunrise</h3>
                            <p>Overnight Hike</p>
                        </div>
                    </a>
                </li>
            </ul>
    </div>
  );
}
