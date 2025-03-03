import React from 'react';
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useChartStyle } from '../hooks/useChartStyle'

const SearchChart = props => {

    const data = props.data.filter(player => player.searches > 7);

    // const [mode, setMode] = useChartStyle("bar");

    // console.log(JSON.stringify(data));

    return (
        <>
        <h2>Players with more than 7 searches</h2>
        {/* <div>
            <button onClick={() => setMode("line")}>Line Graph</button>
            <button onClick={() => setMode("bar")}>Bar Graph</button>
        </div> */}
        <div className="search-chart" id="line-chart">
            <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
            </LineChart>
        </div>
        <div className="search-chart" id="bar-chart">
            <BarChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar type="monotone" dataKey="searches" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
        </>
    );  
  }

export default SearchChart