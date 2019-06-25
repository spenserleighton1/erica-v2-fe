import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import Releases from '../components/Releases/Releases'
import Publications from '../components/Publications/Publications'
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
                console.log(results.acf)
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
        console.log('From home page', sections)
        let items = [];
        let releaseCount = 0;
        sections.map((section, x) => { 
            
            switch(section.acf_fc_layout) {
                case 'releases':
                releaseCount ++;
                    items.push(<Releases key={x} index={releaseCount} data={section}/>);
                    break;
                case 'publications':
                releaseCount ++;
                    items.push(<Publications key={x} index={x} data={section}/>);
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
