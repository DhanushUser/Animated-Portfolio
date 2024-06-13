import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg'
import youtube from '../assets/youtube.png'

const Services_Data = [
    {
        s_no:"01",
        s_name:"Web development",
        s_desc:"Familier with ReactJs and Bootstrap...",
        s_img: profile,
        
    },
    {
        s_no:"02",
        s_name:"Poster design",
        s_desc:"I'm familier with Adobe photoshop...",
        s_img: youtube
    },
    {
        s_no:"03",
        s_name:"Portrait drawings",
        s_desc:"I have completed a lot of paid drawing works...",
        s_img: profile
    },
    {
        s_no:"04",
        s_name:"Editor",
        s_desc:"professional Editor using Davinci Resolve...",
        s_img: profile
    },
    {
        s_no:"05",
        s_name:"Photographer",
        s_desc:"professional photographer...",
        s_img: profile
    },
    {
        s_no:"06",
        s_name:"API handling",
        s_desc:"Web development is the process of building, programming...",
        s_img: profile
    },
]
 
export default Services_Data;