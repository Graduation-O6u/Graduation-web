import React from 'react';
import { Card } from 'react-bootstrap';
import '../welcome.css';
import { Icon } from '@iconify/react';
import textBulletListSquareEdit20Regular from '@iconify/icons-fluent/text-bullet-list-square-edit-20-regular';
import textBulletListSquare24Regular from '@iconify/icons-fluent/text-bullet-list-square-24-regular';
import baselineUploadFile from '@iconify/icons-ic/baseline-upload-file';
const joblist = [{"ic":<Icon icon={textBulletListSquareEdit20Regular} className="icon" /> , "no": "01" , "explain":  <p>Register Your<br></br> Account </p> }, 
                {"ic":<Icon icon="material-symbols:screen-search-desktop-outline" className="icon" />, "no": "02" , "explain":<p> Search Your <br></br>Job  </p>} , 
                {"ic":<Icon icon={textBulletListSquare24Regular} className="icon" /> , "no": "03" , "explain":<p>Apply For <br></br>Dream Job </p> } , 
                {"ic":<Icon icon={baselineUploadFile}  className="icon" /> , "no": "04" , "explain":  <p>Upload Your<br></br> CV</p> } ]
const Cards = () => {
return (
    <div className="card-container">
        {joblist.map(( x )=>{
        return(
            <Card className="boxSocial">
                <Card.Body className ="box2">
                    <div style={{ display:"flex" , padding:" 1%"}}>
                        {x.ic}
                        <Card.Title> <h1>{x.no}</h1></Card.Title>
                    </div>
                    <Card.Text> {x.explain}</Card.Text>
                </Card.Body>
            </Card> 
            )})}
    </div>
    );
};
export default Cards;