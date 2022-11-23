import React, {useEffect,useState} from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import ReactEcharts from "echarts-for-react";
import {Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0, faDroplet, faAirFreshener,faVolumeLow,faSmokingBan,faSun ,faSmoking,faCompressArrowsAlt} from '@fortawesome/free-solid-svg-icons';
const Days= () => {

useEffect(() => {   
    const var1 ='analyseur1'
    const var3 = 'Days'
    const dbRef = ref(getDatabase());

 //Days
 get(child(dbRef,`analyseurs/${var1}/${var3}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setDataDays(Object.values(snapshot.val())) //object.values
    }else {
      console.log("No data days available");
    }
  }).catch((error) => {
    console.error(error);
  });

}, [])
const [dataDays,setDataDays] = useState([])

/*
         Temperature: {el.Temperature} °C 
         Humidity:{el.humidity} % 
         Pressure:{el.pressure} hpa
         Air Quality: {el.AirQuality} ppm  
         CO: {el.Co} ppm
         CO2: {el.Co2} ppm
         DustDensity: {el.DustDensity} ppm
         Luminosity: {el.Liminosity} Lux   
         Noise: {el.Noise} 
         Smoke: {el.Smoke} 
        )}
        }      */  

var arrCo = [];
  var arrCo2= []
  var arrHyd=[]
  var arrTem =[]
  var arrHum=[]
  var arrPr=[]
  var arrAirQ=[]
  var arrDust=[]
  var arrLum=[]
  var arrGas=[]
  var arrSmoke =[]
  var arrNoise =[]
return (
  <>
    <div className="app-body">
      <Container style={{ marginTop: '95px' }}>
<h2 className="titre"> Daily Data </h2>
 {dataDays.forEach(element => { 
  arrCo.push(element['Avr CO'])  
  arrCo2.push (element ['Avr Co2']) 
  arrHyd.push (element ['Avr Hydrogene']) 
  arrTem.push(element['Avr Temperature'])  
  arrHum.push(element['Avr Humidity']) 
  arrPr.push(element['Avr Pressure'])  
  arrDust.push(element['Avr Dust'])  
  arrLum.push(element['Avr Luminosity'])  
  arrAirQ.push(element['Avr AirQuality'])  
  arrGas.push(element['Avr Gaz'])  
  arrNoise.push(element['Avr Noise'])
  arrSmoke.push(element['Avr Smoke'])  
})
 }
 <div className=" card justify-content-center mb-3">
 <h3 className=" txt"><FontAwesomeIcon icon={faTemperature0} /> Temperature</h3>
 <ReactEcharts
 option={{
     xAxis: {
       name:'days',
         type:'category',
         data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
     },
     yAxis: {
       name:'°C',
       label:'temperature chart',
         type:'value',
       },
     series: [{ 
       seriesname:'Temperature',
      data: arrTem, 
      type: 'line',
      roam: true,
      color:"#800000",
      emphasis: {
        label: {
          show: true,
         fontSize:'20px'
        },
       },
      lineStyle: {
          color:'#CD853F',
          width: 3
      },
     } 
   ]  
 }} />  
 </div>

 <div className="card mb-3">
     <h3  className="txt text-center"><FontAwesomeIcon icon={faDroplet} />Humidity</h3>
 <ReactEcharts
 option={{
     xAxis: {
      name:'days',
         type:'category',
         data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
     },
     yAxis: {
      name:'%',
         type:'value',
       },
     series: [{ 
       seriesname:'humidity',
      data: arrHum, 
      type: 'line',
      roam: true,
      color:"#800000",
      emphasis: {
        label: {
          show: true,
         fontSize:'20px'
        },
       },
      lineStyle: {
          color:'#CD853F',
          width: 3
      },
     } 
   ]  
 }} />  
</div>

<div className="card mb-3">
     <h3  className="txt text-center"> <FontAwesomeIcon icon={faCompressArrowsAlt} /> Pressure</h3>
 <ReactEcharts
 option={{
     xAxis: {
      name:'days',
         type:'category',
         data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
     },
     yAxis: {
      name:'hPa',
         type:'value',
       },
     series: [{ 
       seriesname:'pression',
      data: arrPr, 
      type: 'line',
      roam: true,
      color:"#800000",
      emphasis: {
        label: {
          show: true,
         fontSize:'20px'
        },
       },
      lineStyle: {
          color:'#CD853F',
          width: 3
      },
     } 
   ]  
 }} /> </div> 
<div className="card mb-3">
     <h3  className="txt text-center"><FontAwesomeIcon icon={faAirFreshener} /> Air Quality</h3>
<ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ppm',
        type:'value',
      },
    series: [{ 
      seriesname:'airQuality',
     data: arrAirQ, 
     type: 'bar',

     roam: true,
     color:'#CD853F',
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
    
    } 
  ]  
}} />  
</div>
<div className="card mb-3">
     <h3  className="txt text-center"> <FontAwesomeIcon icon={faSmokingBan} /> Co </h3>
 <ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ppm',
        type:'value',
      },
    series: [{ 
      seriesname:'Co',
     data: arrCo, 
     type: 'line',
     roam: true,
     color:"#800000",
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
     lineStyle: {
         color:'#CD853F',
         width: 3
     },
    } 
  ]  
}} />   
</div>
<div className="card mb-3">
     <h3  className="txt text-center"> <FontAwesomeIcon icon={faSmokingBan} /> Co2</h3>
     <ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
       
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ppm',
        type:'value',
      },
    series: [{ 
      seriesname:'Co2',
     data: arrCo2, 
     type: 'line',
     roam: true,
     color:"#800000",
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
     lineStyle: {
         color:'#CD853F',
         width: 3
     },
    } 
  ]  
}} />
 </div>
 <div className="card mb-3">
     <h3  className="txt text-center">  <FontAwesomeIcon icon={faSmokingBan} /> Hydrogene</h3>
<ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ppm',
        type:'value',
      },
    series: [{ 
      seriesname:'hydrogene',
     data: arrHyd, 
     roam: true,
     type: 'line',
     roam: true,
     color:"#800000",
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
     lineStyle: {
         color:'#CD853F',
         width: 3
     },
    } 
  ]  
}} />  </div>
<div className="card mb-3">
     <h3  className="txt text-center"><FontAwesomeIcon icon={faSmokingBan} /> Dust Density</h3>
<ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ug/m3',
        type:'value',
      },
    series: [{ 
      seriesname:'dust',
     data: arrDust, 
     type: 'line',
     roam: true,
     color:"#800000",
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
      lineStyle: {
        color:'#CD853F',
        width: 3
    },
    } 
  ]  
}} />  
</div>

<div className="card mb-3">
     <h3  className="txt text-center"><FontAwesomeIcon icon={faSun} /> Luminosity </h3>
<ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'Lux',
        type:'value',
      },
    series: [{ 
      seriesname:'luminosity',
     data: arrLum,
     type: 'line',
     roam: true,
     color:"#800000",
     emphasis: {
       label: {
         show: true,
        fontSize:'20px'
       },
      },
      lineStyle: {
        color:'#CD853F',
        width: 3
    },
    } 
  ]  
}} />  
</div>

<div className="card mb-3">
     <h3  className="txt text-center"><FontAwesomeIcon icon={faSmoking}/> Smoke</h3>
<ReactEcharts
option={{
    xAxis: {
      name:'days',
        type:'category',
        data: [ '10','11','12','13', '14','15','16', '17', '18', '19', '20', '21', '22', '23','24', '25', '26', '27', '28', '29', '30','31','01','02','03','04','05','06','07','08', '09']
      },
    yAxis: {
      name:'ppm',
        type:'value',
      },
    series: [{ 
      seriesname:'smoke',
     data: arrSmoke, 
        type: 'bar',
        lineStyle: {
          color:'#CD853F',
          width: 3
      }, roam: true,
      color:"#CD853F",
      emphasis: {
        label: {
          show: true,
         fontSize:'20px'
        },
       },  
        
    } 
  ]  
}} />  
</div>

 </Container>

</div>
</>
)

}

  export default Days;