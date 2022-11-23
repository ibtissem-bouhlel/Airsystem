import React, { useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { Card, CardGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0, faDroplet, faAirFreshener,faVolumeLow,faSmokingBan,faSun ,faSmoking,faCompressArrowsAlt} from '@fortawesome/free-solid-svg-icons';
import '../styles/index.css'

const Dashboard = () => {
  const [clockState, setClockState] = useState();
  const [dataLive, setDataLive] = useState([])
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  var slug = useParams();
  useEffect(() => {
        setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
    const var1 = 'analyseur1'
    const var2 = 'live'

      onValue(ref(getDatabase(), `analyseurs/${var1}/${var2}`), (snapshot) => {
      console.log('hello')
      if (snapshot.exists()) {
        setDataLive((snapshot.val()))
      } else {
        console.log("No data live available ");
      }
    })

  }, [])



  return (
    <>
      <div className="app-body">
        <Container style={{ marginTop: '95px' }}>
          <h2 className="titre"> Live Data 
            <br /> {date} - {clockState}
          </h2>
          <div className="db">
            {dataLive &&
              <CardGroup>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faTemperature0} />  Temperature</Card.Title>       
                    <Card.Text className="livedata">
                      {dataLive.Temperature} °C
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>

                <Card className="m-3">
                  <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faDroplet} /> Humidity </Card.Title>
                    <Card.Text className="livedata">

                      {dataLive.Humidity} %
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faCompressArrowsAlt} /> Pressure</Card.Title>
                    <Card.Text className="livedata">
                      {dataLive.Pressure} hPa
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            }
          </div>
          <div  className="db">
            {dataLive &&
              <CardGroup>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faSmokingBan} />  Co2 </Card.Title>
                    <Card.Text className="livedata redcolor">
                      {dataLive.Co2} ppm 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faSmokingBan} /> Co </Card.Title>
                    <Card.Text className="livedata">
                      {dataLive.CO} ppm
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faSmokingBan} /> Hydrogene</Card.Title>
                    <Card.Text className="livedata">
                      {dataLive.Hydrogene} ppm
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
              </CardGroup>

            }
          </div>
          <div  className="db">
            {dataLive &&
              <CardGroup>
                <Card className="m-3">
                  <Card.Body>
                 
                    <Card.Title> <FontAwesomeIcon icon={faAirFreshener} /> Air Quality</Card.Title>
                    <Card.Text className="livedata">
                   
                      {dataLive.AirQuality} ppm
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>

                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faSmokingBan} /> Dust Density </Card.Title>
                    <Card.Text className="livedata">

                      {dataLive.DustDensity} ug/m3
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faSmoking} /> Smoke</Card.Title>
                    <Card.Text className="livedata">
                      {dataLive.Smoke} ppm
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
              </CardGroup>

            }
          </div>
          <div className="db">
            {dataLive &&
              <CardGroup>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faSun} /> Luminosity</Card.Title>
                    <Card.Text className="livedata">
                      {dataLive.Luminosity} Lux
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title> <FontAwesomeIcon icon={faVolumeLow} />  Noise</Card.Title>
                    <Card.Text className="livedata">

                      {dataLive.Noise} dB
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"> <Link to={`/hours/${slug.id}`}>Details</Link></small>
                  </Card.Footer>
                </Card>
               
              </CardGroup>

            }
          </div>
        </Container>
      </div>
    </>
  )
}

export default Dashboard;
