import React, { useEffect,useState} from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import ReactEcharts from "echarts-for-react";
import { Container } from "react-bootstrap";
import { color } from "echarts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0, faDroplet, faAirFreshener,faVolumeLow,faSmokingBan,faSun ,faSmoking,faCompressArrowsAlt} from '@fortawesome/free-solid-svg-icons';

const Hours= () => {
    
  useEffect(() => {   
    const var1 ='analyseur1'
    const var0 = 'Hours'
    const dbRef = ref(getDatabase());  
    //hours
    get(child(dbRef,`analyseurs/${var1}/${var0}`)).then((snapshot) => {
        if (snapshot.exists()) {
          
          setDataHours(Object.values(snapshot.val()))
        }else {
          console.log("No data hours available");
        }
      }).catch((error) => {
        console.error(error);
      });

    }, []);

      const [dataHours,setDataHours] = useState([])
    var Htemp=[]
    var Hhum=[]
    var Hpr=[]
    var HairQ=[]
    var Hhyd=[]
    var Hco=[]
    var Hco2=[]
    var Hlum=[]
    var Hdust=[]
    var Hsmoke=[]
    var Hgas=[]

      return (
        <>
          <div className="app-body">
            <Container style={{ marginTop: '95px' }}>

        

        <h2 className="titre "> Hourly Data </h2>
        {dataHours.forEach((element) => {
            Htemp.push(element.Temperature)
            Hhum.push(element.Humidity)
            Hpr.push(element.Pressure)
            HairQ.push(element.AirQuality)
            Hco.push(element.CO)
            Hco2.push(element.Co2)
            Hhyd.push(element.Hydrogene)
            Hlum.push(element.Luminosity)
            Hdust.push(element.DustDensity)
            Hsmoke.push(element.Smoke)
            Hgas.push(element.Gaz)
            

        })
    }
    <div className="card mb-3" >
    <h3  className="txt text-center"><FontAwesomeIcon icon={faTemperature0} /> Temperature</h3>
<ReactEcharts
option={{
  maintainAspectRatio: false,
 
   xAxis: {
    beginAtZero: true,
     name:'Hours',
       type:'category',
       data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
       
      },
   yAxis: {
     name:'°C',
       type:'value',
       beginAtZero: true,

     },
   series: [{ 
     label:'temperature',
    data: Htemp, 
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
      
       legend: {
         labels: {
          fontSize: 15,
        },
      },
       
   } 
 ]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"> <FontAwesomeIcon icon={faDroplet} /> Humidity</h3>
<ReactEcharts
option={{
xAxis: {
  name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
  name:'%',
  type:'value',
},
series: [{ 
  data: Hhum, 
  type: 'line',
  color:"#800000",
  roam: true,
  emphasis: {
    label: {
      show: true,
     fontSize:'20px'
    },
   },
   lineStyle: {
       color:'#CD853F',
       width: 2
   }
} 
]  
}} />  
</div>
    
    <div className="card mb-3">
<h3  className="txt text-center"><FontAwesomeIcon icon={faCompressArrowsAlt} /> Pressure</h3>
<ReactEcharts
option={{
  xAxis: {
 name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
  yAxis: {
 name:'hPa',
   type:'value',
  },
  series: [{ 
data: Hpr, 
type: 'line',
color:"#800000",
roam: true,
emphasis: {
  label: {
    show: true,
   fontSize:'20px'
  },
 },
   lineStyle: {
     color: '#CD853F',
     width: 3
   },
   itemStyle: {
     borderWidth: 2,
     borderColor: '#a5b888' 
    }
   
} 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"> <FontAwesomeIcon icon={faAirFreshener}/>Air Quality</h3>
<ReactEcharts
option={{
xAxis: {
 name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
 name:'ppm',
   type:'value',
 },
series: [{ 
data: HairQ, 
type: 'bar',
color:"#CD853F",
roam: true,
emphasis: {
  label: {
    show: true,
   fontSize:'20px'
  },
 },
   
lineStyle: {
       
       width: 3
      },
   itemStyle: {
     borderWidth: 1,
     
   }
   
  } 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"><FontAwesomeIcon icon={faSmokingBan} /> Hydrogene</h3>
<ReactEcharts
option={{
xAxis: {
  name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
 name:'ppm',
   type:'value',
  },
  series: [{ 
    data: Hhyd, 
   type: 'line',
   color:"#800000",
roam: true,
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
   itemStyle: {
     borderWidth: 2,
   }
   
} 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"> <FontAwesomeIcon icon={faSmokingBan} /> Co</h3>
<ReactEcharts
option={{
xAxis: {
 name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
  yAxis: {
 name:'ppm',
 type:'value',
},
series: [{ 
  data: Hco, 
  type: 'line',
  color:"#800000",
roam: true,
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
   itemStyle: {
     borderWidth: 2,
   }
   
  } 
]  
}} />  
</div>

<div className="card mb-3">
<h3  className="txt text-center"> <FontAwesomeIcon icon={faSmokingBan} /> Co2</h3>
<ReactEcharts
option={{
xAxis: {
 name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
 name:'ppm',
   type:'value',
 },
series: [{ 
data: Hco2, 
   type: 'line',
   color:"#800000",
roam: true,
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
   itemStyle: {
     borderWidth: 2,
     borderColor: '#CD853F' 
   }
} 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"><FontAwesomeIcon icon={faSun} /> Luminosity</h3>
<ReactEcharts
option={{
  xAxis: {
    name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
  name:'Lux',
  type:'value',
 },
series: [{ 
data: Hlum, 
   type: 'bar',
   color:"#CD853F",
roam: true,
emphasis: {
  label: {
    show: true,
   fontSize:'20px'

  },
 },
   itemStyle: {
     borderWidth: 2,
     borderColor: '#CD853F',
    
   }
   
  } 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"><FontAwesomeIcon icon={faSmokingBan} /> Dust Density</h3>
<ReactEcharts
option={{
  xAxis: {
 name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
 yAxis: {
 name:'ug/m3',
   type:'value',
 },
series: [{ 
  data: Hdust, 
   type: 'line',
roam: true,
emphasis: {
  label: {
    show: true,
   fontSize:'20px',
   color:"#CD853F",

  },
 },
   
   lineStyle: {
     color:"#CD853F",
       
       width: 3
      },
   itemStyle: {
     borderWidth: 2,
    
   }
   
} 
]  
}} />  
</div>
<div className="card mb-3">
<h3  className="txt text-center"><FontAwesomeIcon icon={faSmoking} />Smoke</h3>
<ReactEcharts
option={{
xAxis: {
  name:'Hours',
   type:'category',
   data: [ '10', '11','12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23','00','01', '02', '03', '04', '05', '06', '07', '08','09', ]
  },
yAxis: {
 name:'ppm',
   type:'value',
 },
 series: [{ 
   data: Hsmoke, 
   type: 'bar',
   roam: true,
   color:'#CD853F',
   emphasis: {
     label: {
       show: true,
      fontSize:'20px'
     },
    },
   
   lineStyle: {
     color:'#191970',
     width: 3
    },
   itemStyle: {
     borderWidth: 2,
     borderColor: '#CD853F',
   }
   
} 
]  
}} />  
</div>

    
       </Container>
       </div>
       </>
    
    
    )
        }
        export default Hours;
     