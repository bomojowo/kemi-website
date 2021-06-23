import "./navbar.css";
function Navbar(): JSX.Element {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a href="https://instagram.com/inspiirae?utm_medium=copy_link">Intro</a>
        </li>{" "}
        |
        <li>
          <a href="https://instagram.com/inspiirae?utm_medium=copy_link">Videos</a>
        </li>{" "}
        |
        <li>
          <a href="https://instagram.com/inspiirae?utm_medium=copy_link">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
