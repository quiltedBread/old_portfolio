export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="info">
            <h2 className="title">PharmSeq</h2>
            <div className="tags">
              <div className="tag">MaterialUI</div>
              <div className="tag">React</div>
              <div className="tag">TypeScript</div>
              <div className="tag">Python</div>
              <div className="tag">Django</div>
              <div className="tag">PostgreSQL</div>
            </div>
            <div className="collaborators">
              <b>Solo Project</b>
            </div>
            <p className="description">
              An interactive pharmacogenetics analysis tool for visualizing and
              translating genetic panel results. Uses an{" "}
              <a href="https://cpicpgx.org/resources/">API</a> from the{" "}
              <a href="https://cpicpgx.org/">
                Clinical Pharmacogenetics Implementation Consortium (CPIC®)
              </a>{" "}
              with a custom backend for user management.
            </p>
            <p className="notes">
              Notes: Pharmacogenetics is the study of how genes affect the
              body's response to certain medications. This tool is built for
              healthcare professionals, but is open to the public. Do not make
              any changes to medications without consulting a physician.
            </p>
            <div className="links">
              <a href="/">Live Demo</a>
              <a href="/">Source Code</a>
            </div>
          </div>
          <div className="media"></div>
        </div>
        <br />
        <div className="project">
          <div className="info">
            <h2 className="title">Custom LIMS</h2>
            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">TypeScript</div>
              <div className="tag">GraphQL</div>
              <div className="tag">GoLang</div>
              <div className="tag">SQL Server</div>
              <div className="tag">Azure</div>
            </div>
            <div className="collaborators">
              <b>Collaborators: </b>
              <i>Client DevOps Team</i>
            </div>
            <p className="description">
              A bespoke <b className="colored">L</b>aboratory{" "}
              <b className="colored">I</b>nformation{" "}
              <b className="colored">M</b>anagement <b className="colored">S</b>
              ystem used to track samples and automate tasks in a
              high-throughput clinical laboratory.
            </p>
            <p>READ MORE</p>
            <p className="notes">
              Notes: This site and repository are each private. Screenshots have
              been permitted courtesy of the client.
            </p>
            <div className="links">
              <a href="/">Screenshots</a>
            </div>
          </div>
          <div className="media"></div>
        </div>
      </div>
    </div>
  );
}
