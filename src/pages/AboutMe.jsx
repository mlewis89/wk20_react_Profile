// This is a static page mocking an "About Us" section for our fake user data
import Avatar from '../assets/received_935984800753797.jpeg'
export default function AboutMe() {
  return (
    <div className="container pt-4 about-me">
      <img className="image" src={Avatar} alt="#" />
      <h2>About Me</h2>

      <p>
        I have an avid passion for systems that make everyday tasks easier.
        Starting my professional career as a robotics and mechatronic engineer, followed by some time in the entertainment industry
        has given me a wide base of problem solving skills. 
        I have a passion for the outdoors and adventure and this has connected with scouting of
        which i am privelleged to lead and work alond side many amazing people
        from different walks of life.
      </p>
    </div>
  );
}
