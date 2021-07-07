import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, LabelList } from 'recharts';
import { getMoreThanTenSearches } from '../fetchdata/fetchData';


const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMoreThanTen = async () => {
            const resData = await getMoreThanTenSearches();
            setData(resData);
        }
        fetchMoreThanTen();
    }, [])

    return (
        <div data-testid='chart'>
        <h2>Players with more than 10 searches</h2>
        <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 50, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="searches" stroke="#ff7300" yAxisId={0} />
        </LineChart>
        </div>
    )
}

export default Chart