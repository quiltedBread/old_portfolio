export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="info">
            <h3 className="title">Project Title</h3>
            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">TypeScript</div>
              <div className="tag">Django</div>
              <div className="tag">MaterialUI</div>
            </div>
            <div className="collaborators">
              <b>Collaborators:</b>
              <i> collaborator1,</i>
              <i> collaborator2</i>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur officia quisquam laboriosam earum quod voluptatem
              ratione, qui hic cum modi? Voluptas facilis minus quas accusantium
              tempora aspernatur doloribus eius exercitationem?
            </p>
            <p className="notes">
              Notes: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur quis voluptate perspiciatis nostrum quo aut unde
              maxime tenetur non consequuntur.
            </p>
            <div className="links">
              <a href="#">Live Demo</a>
              <a href="#">Source Code</a>
            </div>
          </div>
          <div className="media"></div>
        </div>
      </div>
    </div>
  );
}
