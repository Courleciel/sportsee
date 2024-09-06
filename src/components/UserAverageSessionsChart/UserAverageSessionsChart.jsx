import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { useFetchUserAverageSessions } from '../../services/userService';
import './UserAverageSessionsChart.css';

const UserAverageSessionsChart = ({ userId }) => {
  const { averageSessions, loading, error } = useFetchUserAverageSessions(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formattedData = averageSessions.map(session => ({
    day: session.day,
    sessionLength: session.sessionLength
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomCursor = (props) => {
    const points = props.points[0];
    const width = props.width;
    const height = props.height;
    const x = points.x;
    const y = points.y;
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={x}
        y={y - 10}
        width={width}
        height={height + 50}
      />
    );
  };

  return (
    <div className="average-session-chart-container">
      <ResponsiveContainer width="100%" height={300}>
      <p className="average-sessions-duration_title">
          Durée moyenne des <br />
          sessions
        </p>
        <LineChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorWhite" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF',  opacity: '0.7', fontWeight: 400}} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line type="monotone" dataKey="sessionLength" stroke="url(#colorWhite)" dot={false} strokeWidth={2} activeDot={{ fill: "#ffffff", r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAverageSessionsChart;
