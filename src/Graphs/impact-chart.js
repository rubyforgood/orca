import React from 'react';
import Chart from 'chart.js/auto'

function ImpactChart() {
  React.useEffect(() => {
    let costTotal = document.querySelector('.costTotal');
    let respTotal = document.querySelector('.respTotal');
    let hrsTotal = document.querySelector('.hrsTotal');
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Investigation Team Management', 'Communicable Disease Investigator', 'Communications', 'Enviromental Health', 'Epidemiology', 'Laboratory', 'Student Interviewer'],
        datasets: [{
          label: 'Hours worked during Outbreak',
          data: [56, 8, 10, 31, 382, 55, 10],
          backgroundColor: [
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let hrsVal = 56 + 8 + 10 + 31 + 382 + 55 + 10 + 1086;
    hrsVal = hrsVal.toFixed(0);
    hrsTotal.textContent = 'Total: ' + hrsVal

    let costVal = 3847.65 + 208 + 269.50 + 772.67 + 14398.29 + 2414.68 + 47334.70 + 171;
    costVal = costVal.toFixed(2);
    costTotal.textContent = 'Total: $' + costVal

    let respVal = 655.4 + 237.2 + 1 + 236.5 + 2 + 1900 + 3 + 189.2 + 77 + 82.7;
    respVal = respVal.toFixed(0);
    respTotal.textContent = 'Total: ' + respVal
  }, []);

  return (
    <div>
      <h1>Outbreak Impact</h1>
      <canvas id="myChart1" width="800" height="280"></canvas>

      <h4>1086 hours unaccounted for or assigned to multiple roles.</h4>
      <h4 className="hrsTotal">Total: </h4>
      <hr /><br />
      <h2 className="listTop">Individual Costs</h2>
      <ul>
        <li>Agency Leadership/Investigation Team Management - $3847.65</li>
        <li>Communicable Disease Investigator - $208.00</li>
        <li>Communications - $269.50</li>
        <li>Enviromental Health - $772.67</li>
        <li>Epidemiology - $14398.29</li>
        <li>Laboratory - $2414.68</li>
        <li>Student Interviewer - $171.00</li>
        <li>Unaccounted for or assigned to multiple roles - $47334.70</li>
      </ul>

      <h3 className="costTotal listTop">~</h3>
      <hr /><br />
      <h2 className="listTop">Number of Responses by State</h2>
      <ul>
        <li>Agency Leadership/Investigation Team Management - 655.4</li>
        <li>Communicable Disease Investigator - 237.2</li>
        <li>Communications - 1</li>
        <li>Enviromental Health - 236.5</li>
        <li>Epidemiology - 2</li>
        <li>Laboratory - 1900</li>
        <li>Roles during Outbreak - 77</li>
        <li>Student Interviewer - 82.7</li>
        <li>Unaccounted for or assigned to multiple roles - 189.2</li>
      </ul>

      <h3 className="respTotal listTop">~</h3>
      <hr /><br />
    </div>
  );
}

export default ImpactChart