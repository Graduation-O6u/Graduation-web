import React from 'react';
import { Card} from 'react-bootstrap';
import '../welcome.css';
const joblist = [{"card":<img src="/images/facebook.webp" alt="" className="img" style={{ width:"60px" , hight:"60px"}}></img>}, 
                {"card":<img src="/images/google.jpj.PNG" alt="" className="img"></img>} , 
                {"card":<img src="/images/micro.PNG" alt="" className="img"></img>} , 
                {"card":<img src="/images/Caa.PNG" alt="acaa" className="img" ></img>} ]
const Cards = () => {
  return (
    <div className="card-container">
      {joblist.map(( x )=>{
        return(
          <Card style={{ padding :"1.5%"}}>
            <Card.Body>
              <Card.Text>
                {x.card}
              </Card.Text>
            </Card.Body>
          </Card>
        )})}
    </div>
  );
};

export default Cards;
