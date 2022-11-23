import { Button, Collapse, Form, Accordion, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import {Link} from "react-router-dom"
import { database } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDashboard, faCalendar, faTimesCircle, faTable} from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar/Navbar";
import logo from '../small-logo.png'
const Home = ()=>{
    const [open, setOpen] = useState(false);
    const [Analyseur, setAnalyseur] = useState([])
    console.log(Analyseur)
    useEffect(() => {
        const dbRef = ref(getDatabase());


        //live
        get(child(dbRef, `analyseurs`)).then((snapshot) => {
            if (snapshot.exists()) {
                setAnalyseur(Object.keys(snapshot.val()))
                
            } else {
                console.log("No data available ");
            }
        }).catch((error) => {
            console.error(error);
        });

    }, [])

    const [name , setName] = useState();
  // Push new analyseur
  const Push = () => {
    database.ref(`analyseurs`).set({
      name : name,
    
    }).catch(alert);
  }
return (
      <>
        <Navbar />
        <div className="col-12" style={{ overflow: 'hidden scroll' }}>
            <Container style={{ marginTop: '95px' }}>
       
        {/* <ol className="breadcrumb">
            <li className="breadcrumb-item"><span>Acceuil</span></li>
            <li className="breadcrumb-item">
                <span>Admin</span>
            </li>
            <li className="breadcrumb-item active"><span>Sites</span></li>
        </ol> */}

            <div className='row'>
             <div className='col-12'>
         {/* <Button id='BtnADD' className='text-right '
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
            Nouveau Analyseur &nbsp;
            <FaPlus />
            </Button>  */}
        </div>
        <div className='col-12 mt-3'>
            <Collapse in={open}>
                <div id="example-collapse-text" className="mb-3">
                        <div className='col-12'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Entrer le nom de votre analyseur" value={name} 
      onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            <div className='col-12 text-right'>
                            <Button onClick={Push} id ='save' variant="primary" type="submit">
                                Enregistrer
                            </Button>
                                </div>
                        </Form>
                        </div>
                </div>
            </Collapse> 
                {Analyseur.map((e) => {
                return (
                <Accordion key={e}>
                            <Accordion.Item eventKey="1">
                               
                                <ol>
                                <li> <img className="small-logo" src={logo} alt="Amanitest" /> &nbsp; &nbsp; {e}</li>
                                <li> <Link to={`/dashboard/${e}`} ><FontAwesomeIcon icon={faTable} /> Dashboard   </Link></li>
                                <li> <Link to={`/days/${e}`} ><FontAwesomeIcon icon={faDashboard} /> Days    </Link></li>
                                <li> <Link to={`/hours/${e}`} ><FontAwesomeIcon icon={faTimesCircle} /> Hours </Link> </li>
                                <li> <Link to={`/month/${e}`} ><FontAwesomeIcon icon={faCalendar} /> Months   </Link> </li>
                                </ol>
                                <Link to={`/dashboard/${e}`} >
                                    <Accordion.Header>{e}</Accordion.Header>
                               </Link>

                    </Accordion.Item>
                </Accordion>
                    );
                })}
        </div>
        </div>
        </Container>
    </div>
    </>
)
    }
    export default Home