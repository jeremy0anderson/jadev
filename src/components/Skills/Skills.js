import './Skills.css';
const skillsArr = [
    {
    skill: 'HTML5',
    link: 'https://cdn.svgporn.com/logos/html-5.svg',
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
    },
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
    },
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg'
    },
    {
        skill: 'Git',
        link: 'https://cdn.svgporn.com/logos/git-icon.svg',
    }];

export function Skills(){
    return (
        <div id="Skills">
            <section className="hero">
                <div className="hero-body">
                    <div className="contaizner">
                        <h1 className="title">Skills</h1>
                        <div className="skills-container">
                            {skillsArr.map(({skill,link })=>{
                                return(
                                    <div className="skill-card" key={skill.slice(1,3)}>
                                        <img className="image skill-logo" alt={skill} key={link} src={link}/>
                                        <p className="skill-name" key={skill}>{skill}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
