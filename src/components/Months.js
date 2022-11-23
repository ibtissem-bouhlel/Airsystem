import React, { useEffect,useState} from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import ReactEcharts from "echarts-for-react";
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0, faDroplet, faAirFreshener,faVolumeLow,faSmokingBan,faSun ,faSmoking,faCompressArrowsAlt} from '@fortawesome/free-solid-svg-icons';
const Months= () => {
    
    useEffect(() => {   
      const var1 ='analyseur1'
      const var5 = 'Month'
      const dbRef = ref(getDatabase());  
         //hours
    get(child(dbRef,`analyseurs/${var1}/${var5}`)).then((snapshot) => {
        if (snapshot.exists()) {
          
          setDataMonth(Object.values(snapshot.val()))
        }else {
          //console.log("No data hours available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }, [])

    const [dataMonth,setDataMonth] = useState([])
var tco2=[]
var tco=[]
var ttemp=[]
var thum=[]
var tpr=[]
var tairQ=[]
var thyd=[]
var tdust=[]
var tlum=[]
var tsmoke=[]
var tgaz=[]
    return (
        <>
          <div className="app-body">
          <Container style={{ marginTop: '95px' }}>
            <h2 className="titre"> Monthly Data</h2>
            {dataMonth.forEach((element) => {
          tco2.push(element.Co2)
          tco.push(element.Co)
          ttemp.push(element.Temperature)
          thum.push(element.Humidity)
          tpr.push(element.Pressure)
          tairQ.push(element.AirQuality)
          thyd.push(element.Hydrogene)
          tdust.push(element.Dust)
          tlum.push(element.Luminosity)
          tsmoke.push(element.Smoke)
          tgaz.push(element.Gaz)


          
          
        })
            }

<div className="card">
    <h3  className="txt"><FontAwesomeIcon icon={faTemperature0} /> Temperature</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
     label:'temperature',
    data: ttemp, 
       type: 'line',
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
<div className="card">
    <h3  className="txt"><FontAwesomeIcon icon={faDroplet} /> Humidity</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: thum, 
       type: 'line',
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
<div className="card">
    <h3  className="txt"> <FontAwesomeIcon icon={faCompressArrowsAlt} /> Pressure</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    
    data: tpr, 
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
<div className="card">
    <h3  className="txt"> <FontAwesomeIcon icon={faSmokingBan} /> Co2</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tco2, 
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
<div className="card">
    <h3  className="txt"> <FontAwesomeIcon icon={faSmokingBan} /> Co</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tco, 
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
<div className="card">
    <h3  className="txt">  <FontAwesomeIcon icon={faSmokingBan} /> Hydrogene</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
     label:'hydrogene',
    data: thyd, 
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
<div className="card">
    <h3  className="txt"><FontAwesomeIcon icon={faAirFreshener} />Air Quality</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tairQ, 
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
<div className="card">
    <h3  className="txt"><FontAwesomeIcon icon={faSmokingBan} /> Dust Density</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tdust, 
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
}}/>  
</div>
<div className="card">
    <h3  className="txt"><FontAwesomeIcon icon={faSun} /> Luminosity</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tlum, 
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

<div className="card">
    <h3  className="txt"> <FontAwesomeIcon icon={faSmoking} /> Smoke</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
   xAxis: {
    beginAtZero: true,
     name:'month',
       type:'category',
       data: ['04','05', '06', '07', '08', '09', '10', '11', '12','01','02','03',]
   
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,
     },
   series: [{ 
    data: tsmoke, 
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
</Container>
        </div>

        </>

    )
    
}
export default Months;