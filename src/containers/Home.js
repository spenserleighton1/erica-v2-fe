import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import Menu from '../components/Menu/Menu'
import Releases from '../components/Releases/Releases'
import Publications from '../components/Publications/Publications'
import About from '../components/About/About'
import Events from '../components/Events/Events'
import '../components/App/App.scss';
import { getPage } from '../services/fetch';
import './Home.scss'
// import Slider from "react-slick";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
           hero: {},
           menu: false,
           homePageContent: []
        };

    }

    componentDidMount(){
        getPage('42')
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

    toggleMenu = () => this.setState({ menu: !this.state.menu})

    sections = (sections) => {
        let items = [];
        sections.map((section, x) => { 
            
            switch(section.acf_fc_layout) {
                case 'releases':
                    items.push(<Releases name="releases" key={x} index={x} data={section} menuClass={ this.state.menu }/>);
                    break;
                case 'publications':
                    items.push(<Publications name="publications" key={x} index={x} data={section} menuClass={ this.state.menu }/>);
                    break;
                case 'about_section':
                    items.push(<About name="about" key={x} index={x} data={section} menuClass={ this.state.menu }/>);
                    break;
                case 'events':
                    items.push(<Events name="events" key={x} index={x} data={section} menuClass={ this.state.menu }/>);
                    break;
                default:
                }
        });

        return items;
    }

    render() {

        let sections = this.sections(this.state.homePageContent) 
        let menuStatus = this.state.menu ? 'menu-btn active' : 'menu-btn';

        return (
            <div class="front-page">
                  <button className={ menuStatus } onClick={ () => this.toggleMenu() }>Close</button>
                { this.state.menuC && 
                    <Menu toggleMenu={ this.toggleMenu } potentialSections={ sections }/> }
                {/* <Header toggleMenu={ this.toggleMenu }/> */}
                <Hero {...this.state.hero} menuClass={ this.state.menu }/>
                { sections }
            </div>
        );
    }
}
  

export default Home;
