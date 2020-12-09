
import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../components/map/map";
//import Login from '../../components/login/login';
import Signup from "../../components/signup/signup"
import Filters from '../../components/filters/filters';
import List from '../../components/list/list';

import { Jumbotron, Row, Col } from 'reactstrap';
import "./FrontPage.css";
import { Link } from "react-router-dom";


// import CategoryChoice from "../../components/wine-categories/category-choice";

const styles = {
  link : {
    backgroundColor: 'blue',
    height: '100px',
    width: '300px',
    color: 'white'
  }
}

const FrontPage =()=> {

   const [wines , setWines] = useState([])

   useEffect(()=> {
    axios.get('/api/wines').then(response => setWines(response.data)).catch(err => console.log(err))
   }, [])


  

const wineMap = wines.map((wine, index) => (
  <Link key={index} style={styles.link} to={"/wines/" + wine._id}>
    {wine.wine_name}
  </Link>
))

 
  return (
    <div className="body">
      <Row className="wine">
            {/* <Login className='center'/> */}
            <Signup className='center'/>
      </Row>
      <Jumbotron fluid className="main">
        <Row>
            <Col lg={8}>
              <Jumbotron fluid className="map">
                <Map/>
              </Jumbotron>
            </Col>
            <Col lg={4}>
                  <Row>
                    <Jumbotron fluid className="components">
                      <Filters/>
                    </Jumbotron>
                  </Row>
                  <Row>
                    <Jumbotron fluid className="components">
                      <List>
                        {wineMap}
                      </List>
                    </Jumbotron>
                  </Row>
            </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}


export default FrontPage;


//////////////// KEEP FOR JULIAN///////////////////////////////

// class frontPage extends Component {
//   state = {
//     categories: null
//   }


//   getChoices = (e) => {
//     e.preventDefault();
//     const category = e.target.elements.wineCategory.value;
//     axios.get(`https://quiniwine.com/api/pub/wineCategory/${category}/0/5?access_token=xbhysxe4p3gpeznr8kpn`)
//     .then((res) => {
//       const categories = res.data.items[0].Name + ", " + res.data.items[0].Winery + ", " + res.data.items[0].Country + ", " + res.data.items[0].id;
//       this.setState({ categories });
//       console.log(categories);
//       console.log(res);
//     })
//   }

//   render(){
//     return (
//       <div className="wine">
//       <Row>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <Login className='center'/>,
//           <Map className='center'/>
//         </Col>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <CategoryChoice getChoices={this.getChoices} />
//           { this.state.categories ? <p>Wine info based off your selection: {this.state.categories}</p> : <p>Please select a category</p>}
//         </Col>
//       </Row>
        
//       </div>
//     );
//   }
// };

///////////////////////////////////////////////////////////////////
