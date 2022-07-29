export default function About() {
    return (
        <section id="about">
            <div className="split">
                <div>
                    <h1 className="heading">Hi, I'm Matt.</h1>
                    <p>
                        I'm a full stack developer who designs and develops
                        bespoke web applications.
                    </p>
                </div>
                <div>
                    <img src="/programmer.svg" alt="" />
                </div>
            </div>
            <div
                className="metrics"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <div className="metric-card">
                    <div className="metric-card-number">5</div>
                    <div className="metric-card-label">Years of Experience</div>
                </div>
                <div className="metric-card">
                    <div className="metric-card-number">14</div>
                    <div className="metric-card-label">
                        Full Stack Applications
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-card-number">5</div>
                    <div className="metric-card-label">Years of Experience</div>
                </div>
            </div>
        </section>
    );
}
