import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Profile Updated'," "],
  datasets: [
    {
      label: '# of Votes',
      data: [65,25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        '#D9D9D9',
     
      ],
      borderColor: [
       'red',
        '#D9D9D9',
      ],
      borderWidth: 3,
    },
  ],
};

export default function PieChart() {
    
  return <div style={{width:'100px'}}>
      <Pie data={data} 
       options={
        {
                legend: {
                   display: false //This will do the task
                }
             
        }
       }  
      />;
    </div>
}
