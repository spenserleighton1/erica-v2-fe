import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import Releases from '../components/Releases/Releases'
import Publications from '../components/Publications/Publications'
import About from '../components/About/About'
import Events from '../components/Events/Events'
import '../components/App/App.scss';
import { getPage } from '../services/fetch';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
           hero: {},
           homePageContent: []
        };

    }

    componentDidMount(){
        getPage('7')
            .then(results => {
                let { title, image, description, home_flex_content } = results.acf;
            
                this.setState({
                    hero: {
                        image: image.url,
                        title,
                        description
                    },
                    homePageContent: home_flex_content
                })
            })
    }

    sections = (sections) => {
        let items = [];
        sections.map((section, x) => { 
            
            switch(section.acf_fc_layout) {
                case 'releases':
                    items.push(<Releases key={x} index={x} data={section}/>);
                    break;
                case 'publications':
                    items.push(<Publications key={x} index={x} data={section}/>);
                    break;
                case 'about_section':
                    items.push(<About key={x} index={x} data={section}/>);
                    break;
                case 'events':
                    items.push(<Events key={x} index={x} data={section}/>);
                    break;
                default:
                }
        });

        return items;
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <Hero {...this.state.hero} />
                { this.sections(this.state.homePageContent) }

            </div>
        );
    }
}
  

export default Home;
