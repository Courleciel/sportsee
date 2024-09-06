import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetchUserActivityData } from '../../services/userService';
import './UserActivityChart.css';


const UserActivityChart = ({ userId }) => {
  const { activityData, loading, error } = useFetchUserActivityData(userId);

  if (loading) {
    return <p>Chargement des données d'activité...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!activityData || activityData.length === 0) {
    return <p>Aucune donnée d'activité disponible.</p>;
  }

  const weights = activityData.map(data => data.kilogram);
  const maxWeight = Math.max(...weights);
  const minWeight = Math.min(...weights);
  const averageWeight = (maxWeight + minWeight) / 2;

  const CustomTooltip = ({ payload, active }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity-chart-custom-tooltip">
          {payload.map((entry, index) => {
            let unit = '';
            if (entry.dataKey === 'kilogram') {
              unit = 'kg';
            } else if (entry.dataKey === 'calories') {
              unit = 'Kcal';
            }

            return (
              <p key={index} className="tooltip-value" style={{ color: entry.payload.fill }}>
                {entry.value}{unit}
              </p>
            );
          })}
        </div>
      );
    }

    return null;
  };

  const averageWeightTick = [minWeight, averageWeight, maxWeight].map(value => Math.round(value));

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <p className="chart-title">Activité quotidienne</p>
        <BarChart
          data={activityData}
          margin={{ top: 40, right: 30, left: 20, bottom: 40 }}
        >
          <Legend
            className="custom-legend"
            iconType="circle"
            verticalAlign="top"
            align="right"
            iconSize={8}
          />
          <CartesianGrid
            vertical={false}
            strokeDasharray="2 2"
          />

          <XAxis dataKey="day" tickLine={false}/>
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            hide={true}
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
            tickCount={3}
            stroke="#282D30"
            minTickGap={1}
            ticks={averageWeightTick}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282d30"
            name="Poids (kg)"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#ff0101"
            name="Calories brûlées (kCal)"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityChart;
