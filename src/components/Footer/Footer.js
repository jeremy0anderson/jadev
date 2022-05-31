import './Footer.css';
import {useState, useEffect} from "react";

const footerLinks = [{
    platform: 'https://github.com/jeremy0anderson',
        link: 'https://cdn.svgporn.com/logos/github.svg',
        key: "github"
},
{
    platform: 'https://linkedin.com/jeremyanderson-dev',
        link: 'https://cdn.svgporn.com/logos/linkedin.svg',
        key: "linkedin"
}];


export function Footer(){

    const [profiles, setProfiles] = useState(<div/>)
    useEffect(()=> {
        setProfiles(footerLinks.map(({platform, link, key}) => {
            return (
                <a key={key} className="footer-section" href={platform}>
                    <img className="image footer-logo" alt={platform} key={key + "1"} src={link}/>
                </a>)
        }));
    },[setProfiles]);
    return(
        <div id="Footer" className="footer">
            {profiles}
        </div>
    )
}
