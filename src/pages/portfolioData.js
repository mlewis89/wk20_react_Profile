//this file proveds the information for the Portfolio page

import facelink_img from '../assets/facelink.png';
import sunnySide_img from '../assets/sunnyside.jpg';
import techBlog_img from '../assets/techblog.png';
import weatherDash_img from '../assets/weatherdash.png';
import logoMaker_img from '../assets/logomaker.png';
import regExp_img from '../assets/regExp.jpg';

export const PortfolioData = [{
    id: 1,
    title: 'Face Link',
    image:  facelink_img,
    description: 'This application aim to makes it easy for users to upload images and organise them. Future development may include facial recognition package (face-api.js) for grouping and pulling images by faces.',
    demo: 'https://morning-harbor-41329-82d98812097e.herokuapp.com/',
    repository:  'https://github.com/JakebJackson/Face-Link',
},{
    id: 2,
    title: 'Sunny Side Holiday Planner',
    image:  sunnySide_img,
    description: 'Sunny Side Holiday Planner is an interactive web application designed to assist travelers in planning their holidays. It provides real-time flight information and weather forecasts, offering users a convenient way to prepare for their holidays.',
    demo: 'http://google.com',
    repository:  'https://github.com/hr-virieux/sunny-side-holiday',
},
{
    id: 3,
    title: 'Tech Blog',
    image:  techBlog_img,
    description: 'This application makes use of handlebars and a restful api to serve up a full stack web application for a tech blog.',
    demo: 'https://murmuring-wildwood-67063-687b09e4379f.herokuapp.com/',
    repository:  'https://github.com/mlewis89/wk14_MVC_Tech-blog',
},
{
    id: 4,
    title: 'Weather Dashboard',
    image:  weatherDash_img,
    description: 'enables a user to search for weather data from around the world, and dynamically displays the data',
    demo: 'https://mlewis89.github.io/wk6-ServerAPIs-WeatherDashboard/',
    repository:  'https://github.com/mlewis89/wk6-ServerAPIs-WeatherDashboard/',
},
{
    id: 5,
    title: 'SVG Logo Maker',
    image:  logoMaker_img,
    description: 'This application saves the user from needing a graphic design to create a simple logo.',
    repository:  'https://github.com/mlewis89/wk10_Object-oriented-Programming_SVG-Logo-Maker',
},
{
    id: 6,
    title: 'Reg EXP Tutorial',
    image: regExp_img,
    description: 'a tutorial of how to use Regular expression (RegExp) to find urls within a text block.',
    demo: 'https://gist.github.com/mlewis89/0006e4afb74f3ab61a4df192249a1c83#file-regextutorial-md',
    repository:  'https://gist.github.com/mlewis89/0006e4afb74f3ab61a4df192249a1c83',
},
];
