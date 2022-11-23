import React from "react";
import bme from './bme.png';
import mq2 from './mq2.png';
import mq7 from './mq7.png';
import mq8 from './mq8.png';
import mq135 from './mq135.png';
import micro from './micro.png';
import dust from './dust.png';
import mhz from './mhz.png';
import tsl from './tsl.png';
import {Container} from "react-bootstrap";
import '../styles/index.css'
import { RWebShare } from "react-web-share"
const SensorsInfo= () => { 
    return(
      // <div className="bg">
  <>
 <div className="app-body">
          <Container style={{ marginTop: '95px' }}>
            <div className="col-12">
          <h2 className="titre"> Sensors Informations</h2>

        {/* <div className="row">  */}
        {/* <div className="row">
        <h4 className="col-sm-4 "> Sensors</h4>
     <h4 className="col-sm-8">characteristics</h4>
  </div> */}
  
    <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3 ">
    <img src={bme} alt="logo" /> <br/>BME680
    </div>
    <div className="col-md-9">
    <p>The BME680 is a gas sensor that integrates high linearity and high
       accuracy gas, pressure,<br/> humidity and temperature sensors.
       <br/> Range Temperature: -40…85°C <br/>
       Range Humidity: 0…100% <br/>
       Range Pressure: 300...1100 hPa <br/>
       Voltage: 3.3V
       </p>

    </div>
    </div>
    </div>

    <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={mq2} alt="logo" /> <br/>MQ2
    </div>
    <div className="col-md-9">
    
    The MQ2 is one of the commonly used gas sensors in MQ sensors series. 
    <br/>  It is a metal-oxide-semiconductor gas sensor,
      works on 5V DC and draws around 800mW. <br/> It can detect LPG, Smoke, Alcohol, Propane, Hydrogen and Methane <br/> 
      Concentration Range: 200...10000 ppm <br/> 
      Voltage: 5V
  </div>
  </div>
  </div>
    
  <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={mq7} alt="logo"/> <br/>MQ7
    </div>
    <div className="col-md-9">
     The MQ7 is a Carbon Monoxide (CO) gas sensor, detects the concentrations of CO in the air <br/>
    and ouputs its reading as an analog voltage. The sensor can measure concentrations of 10 to 10,000 ppm, <br/> 
    and consumes less than 150 mA at 5 V.
    </div>
  </div>
  </div>

  <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={mq8}  alt="logo" /> <br/>MQ8
    </div>
    <div className="col-md-9">
    MQ8 Hydrogen gas sensor is a Metal oxide semiconductor type sensor.<br/> 
     This sensor is very simple to use and detects Hydrogen gas within the air, <br/> 
    the sensor works on 5V DC and draws around 800mW.<br/>
    with concentration range of 100-10000 ppm.
    </div>
  </div>
  </div>
 
  <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={mq135} alt="logo" /> <br/>MQ135
    </div>
    <div className="col-md-9">
    The MQ135 sensor is excellent for detecting dangerous gases and measuring the air quality. 
      <br/>It can detect the ammoniac, sulfur, benzene vapor, smoke and Alcohol, with high <br/>
        sensitivity ranging from 10 to 1000 ppm <br/>
       Detection range: 10-300 ppm NH3, 10-1000 ppm Benzene, 10-600 ppm Alcohol <br/>
       Voltage: 5V
       </div>
     </div>
     </div>

    
     <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={mhz}alt="logo" /> <br/>MH-Z19B
    </div>
    <div className="col-md-9">
     MH-Z19B NDIR infrared gas module detect the existence of CO2 in the air, with good selectivity,<br/>
     The sensor uses the UART output <br/>
      Voltage: 5V<br/>
      Detection Range: 0 - 10000 ppm<br/>
      </div>
     </div>
    </div>

    <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={tsl} alt="logo" /> <br/>TSL2561
    </div>
    <div className="col-md-9">
   The TSL2561 luminosity sensor is an advanced digital light sensor, ideal for use in a wide range of light situations.<br/>
    this sensor is more precise, allowing for  Lux calculations and can be configured for different gain/timing ranges<br/>
     to detect light ranges from up to 0.1 - 40,000+ Lux <br/>
     Voltage Range: 2.7 - 3.6V
     </div>
    </div>
    </div>

    <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3"> 
    <img src={micro}alt="logo" /> <br/>SPH0645
    </div>
    <div className="col-md-9">
    The I2S is a small and low cost MEMS microphone with a range of about 50Hz- 15KHz, <br/>
    this sensor measure the noise level indoor in decibel
    <br/> Voltage: 3.3V
   </div>
  </div>
  </div>

  <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3">
    <img src={dust} alt="logo" /> <br/>GP2Y10
    </div>
    <div className="col-md-9">
     The GP2Y10 is a fine dust sensor, uses a LED emitting light into a tiny dark chamber. <br/>
    The GP2Y10 gives back an analog value up to 3,4 V. <br/>
    Consumption range 20mA- 11mA <br/>
    </div>
  </div>
  </div>
  
  <div className="col-md-12 p-3 mb-3 sensorInfos">
    <div className="row ">
    <div className="col-md-3"> 
    <img src={micro}alt="logo" /> <br/>
    </div>
    <div className="col-md-9">
    <RWebShare
        data={{
          text: "Web Share ",
          url: "http://localhost:3000",
          title: "link",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share on Web</button>
      </RWebShare>

   </div>
  </div>
  </div>
</div>

</Container>
</div>
 
 
 
</>

    )
}
export default SensorsInfo;