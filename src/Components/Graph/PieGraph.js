import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export class PieGraph extends Component {
    render() {
    const data = this.props.data

    return (
        <div className="profileview mb-3">Portfolio
            <PieChart width={700} height={700}>
               <Pie data={data} dataKey="companyName"  outerRadius={250} fill="green"/> 
            </PieChart>
        </div>
        )
    }
}

export default PieGraph
