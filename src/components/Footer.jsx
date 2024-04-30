
export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
                <ul className="flex-container">
                <a href="tel:123456789" target="_blank" rel="noreferrer">1234 456 789</a>
                <a href="mailto:mark@website.com.au" target="_blank" rel="noreferrer">mark@website.com.au</a>
                <a href="https://github.com/mlewis89/" target="_blank" rel="noreferrer">Git Hub</a>
                <a href="https://www.linkedin.com/in/mark-lewis-1948b233/" target="_blank" rel="noreferrer">LinkedIn</a>
            </ul>
    </>
  );
}
