import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Donut = () => {
  const [percentage, setPercentage] = useState(80); // Initial percentage value
  const options = {
    chart: {
      width: 380,
      type: 'donut',
      events: {
        dataPointMouseEnter: function (event, chartContext, config) {
          // Update the percentage in the center when hovering
          setPercentage(config.w.config.series[0]);
        },
      },
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
      },
    },
    legend: {
      show: false,
    },
    title: {
      text: '',
    },
  };

  const series = [percentage, 100 - percentage];

  return (
    <div id="chart">
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }

          .apexcharts-donut-labels text {
            animation: blink 1s linear infinite;
          }

          .donut-center-label {
            text-align: center;
            font-size: 24px;
            margin-top: -15px;
            font-weight: 600;
          }
        `}
      </style>
      <div className="donut-center-label relative">
      <ReactApexChart options={options} series={series} type="donut" width={340} />
        <div className='absolute top-24 left-36 '>
        {percentage}% 
        <h3 className='text-sm '>Total New</h3>
        <h3 className='text-sm '>Customers</h3>
        </div>
      </div>
    </div>
  );
};

export default Donut;
