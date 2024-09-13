import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useFetchUserPerformance } from '../../services/userService';
import './UserPerformanceChart.css';

const UserPerformanceChart = ({ userId }) => {
  const { performanceData, loading, error } = useFetchUserPerformance(userId);

  if (loading) {
    return <p>Chargement des données de performance...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!performanceData || performanceData.length === 0) {
    return <p>Aucune donnée de performance disponible.</p>;
  }

  return (
    <div className="performance-chart-container">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={performanceData} margin={{ right: 40, left: 40 }}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke="#ffffff" tick={{ fill: "white", fontSize: 11 }} tickLine={false} />
          <Tooltip />
          <Radar name="Performance" dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserPerformanceChart;
