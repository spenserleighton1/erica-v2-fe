import React from 'react';
import './Menu.scss';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Menu(props) {

  let generateMenu = (sections) => {
    return sections.map((element, index) => {
      return  <li><a key={index} onClick={ () => props.toggleMenu() } href={'#' + element.props.data.acf_fc_layout}>{ element.props.name }</a></li>
    });
  }

  let menuItems = generateMenu(props.potentialSections)

  return (
    <div className="menu">
      <ul>
        { menuItems }
      </ul>
    </div>
  );
}

export default Menu;
