import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import '../components/App/App.scss';
import { getPage } from '../services/fetch';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
           hero: {},
        };

    }

    componentDidMount(){
        getPage('7')
            .then(results => {
                let { title, image, description } = results.acf;
            
                this.setState({
                    hero: {
                        image: image.url,
                        title,
                        description
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Hero {...this.state.hero} />
            </div>
        );
    }
}
  

export default Home;
