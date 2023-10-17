import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = (props) => {
  const [series, setSeries] = useState([
    {
      name: 'earnings',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      colors: ['#2E86C1', '#2E86C1', '#2E86C1', '#B19CD9', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1', '#2E86C1'],
    },
  ]);

  // Set a different color for April
  series[0].colors[3] = '#B19CD9';

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
        },
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#fff'], // White text color
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false, 
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return '';
        },
      },
    },
    title: {
      text: '',
      floating: true,
      offsetY: 330,
      align: 'top',
      style: {
        color: '#000',
      },
    },
  });

  return (
    <div id="chart" className="shadow-md"> {/* Add Tailwind CSS shadow */}
      <style>
        {`
          .apexcharts-tooltip {
            background-color: #B19CD9; 
          }
        `}
      </style>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;
