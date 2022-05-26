import './Projects.css';
import img from '../../assets/images/img.png';
const projects = [
    {
        name: 'Assassination',
        desc: 'A multiplayer game utilizing the Socket.io Library, Express.js back end, and a React.js front end',
        image: img,
        demo: 'https://assassination-v2.herokuapp.com/',
        source: "https://github.com/jeremy0anderson/assassination-v2"
    },
    {
        name: 'Social Network API',
        desc: 'A scalable base for a social network API with routes to post thoughts, comments, friends, and reactions. Made with  Express.js',
        image: 'https://via.placeholder.com/400x410',
        demo: '',
        source: 'https://github.com/jeremy0anderson/NOSQL-Social-Network-API',
    },
    {
        name: 'Tech Blog',
        desc: 'A Blog site that utilizes the Model Controler View -- made with Handlebars and Express.js with its own REST API',
        image: 'https://via.placeholder.com/400x410',
        demo: 'https://mernstack-blog.herokuapp.com/',
        source: '',
    },
    {
        name: 'Express.js Notes',
        desc: 'Simple web app to take and save notes',
        image: 'https://via.placeholder.com/400x410',
        demo: 'https://expressjs-notes.herokuapp.com',
        source: ''
    }
];

export function Projects(){
        const mapped = projects.map((project, index) => {
            const { name, desc, image, demo, source } = project;

            return (<div className="column" key={index} >
                <div className="mCard shadow cardOverride">
                    <div className="mCard-image" style={{ display: 'flex' }}>
                        <div className="card-img"
                            style={{
                                flex: '1 1 auto',
                                minWidth: 300,
                                minHeight: 300,
                                backgroundImage: `url(${image}`,
                                backgroundPosition: "center",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                        <span className="mCard-title">{name}</span>
                    </div>
                    <div className="mCard-content" style={{ flex: '1 1 auto' }}>
                        <p>{desc}</p>
                    </div>
                    <div className="mCard-action iconsContainer">
                        <a href={source} target="_blank" rel="noopener noreferrer">
                          <span className="icon is-large">
                            <i className="fab fa-github fa-lg colorBlack"/>
                          </span>
                        </a>
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                          <span className="icon is-large">
                            <i className="fas fa-laptop-code fa-lg colorBlack"/>
                          </span>
                        </a>
                    </div>
                </div>
            </div>);
        });
        return (
            <div id="Projects">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Projects</h1>
                            <div className="content columns">
                                {mapped}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
}

