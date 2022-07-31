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
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "64px 0",
                }}
            >
                <div className="metric-card">
                    <div className="metric-card-number">
                        {Math.ceil(new Date().getFullYear() - 2018)}
                    </div>
                    <div className="metric-card-label">
                        Years of
                        <br />
                        Experience
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-card-number">14</div>
                    <div className="metric-card-label">
                        Production
                        <br />
                        Applications
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-card-number">
                        {(
                            ((new Date().getFullYear() - 2018) * 365.25) /
                            1000
                        ).toFixed(1)}
                        k
                    </div>
                    <div className="metric-card-label">
                        Cups of
                        <br />
                        Coffee
                    </div>
                </div>
            </div>
        </section>
    );
}
