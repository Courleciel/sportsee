import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { useFetchUserData } from '../../services/userService';
import './UserTodayScoreChart.css';

const UserTodayScoreChart = ({ userId }) => {
  const { user, loading, error } = useFetchUserData(userId);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  const todayScore = user.data.todayScore !== undefined ? user.data.todayScore : user.data.score;
  const scorePercentage = (todayScore * 100).toFixed(0);

  const data = [
    { name: 'Score', value: todayScore * 100 },
  ];

  return (
    <div className="radial-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <div className="radial-chart-title">Score</div>
        <RadialBarChart
          width={373}
          height={300}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={90 + 360 * todayScore}
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            fill="#ff0000"
            cornerRadius={10}
          />
          <text
            x="50%"
            y="50%"
            dy={5}
            textAnchor="middle"
            className="radial-chart-score"
          >
            {scorePercentage}%
          </text>
          <text
            x="50%"
            y="50%"
            dy={25}
            textAnchor="middle"
            className="radial-chart-label"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserTodayScoreChart;
