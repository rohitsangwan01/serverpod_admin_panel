import React from 'react'

interface Props {
    name: string;
}

const LogsView: React.FC<Props> = ({ name }) => {
    return (
        <section id="hero" style={{ padding: "20px" }}>
            <div className="hero-animation"></div>
            <div className="uk-container uk-container-small">
                <div className="content"  >
                    <h1>The missing server for Flutter</h1>
                    <p>Serverpod is an open-source, scalable app server, written in Dart for the Flutter community.</p>
                    <div><a href="https://docs.serverpod.dev" className="btn hero" rel="noreferrer">Get started</a></div>
                </div>
                <div className="illustration">
                    <img src="https://serverpod.dev/assets/img/illustration.webp" alt="Illustration Serverpod" />
                </div>
            </div>
        </section>
    );
};

export default LogsView;