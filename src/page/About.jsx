import '../styles/styles.scss';
import Footer from '../components/Footer';
import GitHubCalendar from 'react-github-calendar';

function About() { 

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return ( 
        <>
        <div className="section-general">
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className="wrapper-content">
                        <h3>About me</h3>
                        <p>
                        Hello there, my name is M. Ridwan Zalbina, people call me "Edo" or "Ridwan", Software Engineer who works around fullstack development, but works as professional Front-End Developer. Really passionate to learn everything about technology: software engineering, visual design and information security.
                        </p>
                        <h3>Work</h3>   
                        <p>
                        I'm currently working on Digital Agency Company called Fairtech Technology, Ltd, located in Singapore, Jakarta and Makassar.
                        </p>
                        <h3>Technology Stack & Experiences</h3>
                        <ul>
                            <li>
                            Javascript Technology - Fundamentals & Current Trends
                            </li>
                            <li>
                            Git, Subversion and Mercurial
                            </li>
                            <li>
                            Mastering CSS & Frontend Architecture for web development
                            </li>
                            <li>
                            Familiar with almost CSS Preprocessors SCSS/SASS, LESS, Compass, CSS-Crush, Stylus-lang, PostCSS
                            </li>
                            <li>
                            Familiar with templating engine : twig, handlebars, mustache, pug, ejs, dOT, and Jade
                            </li>
                            <li>
                            Familiar with Cutting-edge Javascript Framework & Library such as: Node, Vue, React, Svelte | Next, Nuxt and NestJS
                            </li>
                            <li>
                            Familiar with frontend tooling like Vite for rapid web development
                            </li>
                            <li>
                            PHP Native & MVC Framework such as: CodeIgniter and Laravel.
                            </li>
                            <li>
                            Python for data processing and API.
                            </li>
                            <li>
                            Java & Kotlin for native Android development.
                            </li>
                            <li>
                            Currently develop react-native app for mobile
                            </li>
                            <li>
                            Generate static content web using task runner / module bundler / build tool / package management tool such as : Webpack, Grunt, Gulp, npm, Browserify, Babel, Requirejs, Parcel
                            </li>
                            <li>
                            Familiar with UNIX/Linux Environment to deploy and maintain web & mobile application, also familiar with container such as: docker
                            </li>
                            <li>
                            Focusing on clean code, conducting best practice as much as possible
                            </li>
                            <li>
                            Being a product designer as side hustle, helping company deal with product design, familiar with : Figma, Sketch, Zeplin, Invision for web and mobile app designs
                            </li>
                            <li>
                            Experience more than 10 years on logo, advertisment, promotional content.
                            </li>
                        </ul>
                        <h3>Github Calendar</h3>
                        <GitHubCalendar 
                        username="ridwanzal" 
                        transformData 
                        hideTotalCount 
                        hideColorLegend
                        />
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default About;