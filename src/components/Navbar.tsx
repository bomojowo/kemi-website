import "./navbar.css";
function Navbar(): JSX.Element {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a href="#">Intro</a>
        </li>{" "}
        |
        <li>
          <a href="#">Videos</a>
        </li>{" "}
        |
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
