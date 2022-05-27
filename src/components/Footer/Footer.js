import './Footer.css';
import {useState, useEffect} from "react";

const footerLinks = [{
    platform: 'https://github.com/jeremy0anderson',
        link: 'https://cdn.svgporn.com/logos/github.svg'
},
{
    platform: 'https://linkedin.com/jeremyanderson-dev',
        link: 'https://cdn.svgporn.com/logos/linkedin.svg',
}];


export function Footer(){

    const [profiles, setProfiles] = useState(<div/>)

    useEffect(()=>{
        setProfiles(footerLinks.map(({platform, link})=>{
                return(
                <a className="footer-section" href={platform}>
                    <img className="image footer-logo" alt={platform} key={link} src={link}/>
                </a>)
        }))

    })
    return(
        <div id="Footer" className="footer">
            {profiles}
        </div>
    )
}
