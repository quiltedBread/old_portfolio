export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="nav">
        <a
          href="https://www.linkedin.com/in/matthew-w-harper/"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/quiltedBread" title="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC69RzN0Rqi6Eerhvdy6Y5wg"
          title="YouTube"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#" title="Resume">
          <i className="fa-solid fa-file"></i>
        </a>
      </nav>
    </div>
  );
}
