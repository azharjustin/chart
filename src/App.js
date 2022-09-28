
import './App.css';
import {Line} from 'react-chartjs-2';
import{
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
 chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
 )

function App() {
  
  const data={
    labels:["","","","","","","","","","","","","","",""],
    datasets:[{
      data:[2,4,3,4,4.7,3.9,5.5,7.001,3.2,5,9,4,6.4,6.8,3.003,0.003,1],
      backgroundColor:'transparent',
      borderColor:'rgba(116, 37, 226, 0.5)',
      
      pointBorderColor:'transparent',
      pointBorderWidth:4,
      tension:0
    
    }]
  
  };
  const options={
    plugins:{
      legend:false
    },
    scales:{
      x:{
        grid:{
          display:false
        }
      },
      y:{
        grid:{
          display:false
        }
      }
    
    }
  };
  return (
    <div className="App">
      
     <div className="outerbox"> 
     <div className="firsttop">
      <h4>Binance (BNB)</h4>
      <h2>$432.09</h2>
      <p>Gain/loss 24hr:<span className="span">+7.12%</span></p>
      </div>
      <div className="secondtop">
        <p><span>15M</span><span>1H</span><span>4H</span><span className="bold">24H</span><span>1W</span></p>
        </div>
       
        <div className='chart'>
        
  <Line className='line' data={data} options={options}> </Line>
</div>
<div className='bottom'>
  <div className='box1'>
  <h5 className='sub'>Market Cap</h5>
  <h3 className='sub1'>$94.22B</h3>
  </div>
  <div className='box1'>
  <h5 className='sub' >Market Cap Rank</h5>
  <h3 className='sub1'>#8</h3>
  </div>
  <div className='box1'>
  <h5 className='sub'>24 hr Volume</h5>
  <h3 className='sub1'>$324.22M</h3>
  </div>
  
</div>
</div>

    </div>
  );
}

export default App;

