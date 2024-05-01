export default function Nav({ links }) {
  return (
    <nav>
          <ul className="nav nav-tabs">
            {links.map((link) => link)}
          </ul>
    </nav>
  );
}
