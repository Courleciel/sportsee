import { useState, useEffect } from 'react';

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
    throw error;
  }
};

export const useFetchUserData = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserData(userId);
        setUser(data);
      } catch (error) {
        setError("Erreur lors de la récupération des données de l'utilisateur");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  return { user, loading, error };
};

export const fetchUserActivityData = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'activité de l'utilisateur:", error);
    throw error;
  }
};

export const useFetchUserActivityData = (userId) => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserActivityData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserActivityData(userId);
        const transformedData = data.data.sessions.map((session, index) => ({
          ...session,
          day: index + 1
        }));
        setActivityData(transformedData);
      } catch (error) {
        setError("Erreur lors de la récupération des données d'activité de l'utilisateur");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUserActivityData();
    }
  }, [userId]);

  return { activityData, loading, error };
};

export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données de sessions moyennes de l'utilisateur:", error);
    throw error;
  }
};

const getDayName = (dayNumber) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[dayNumber - 1];
};

export const useFetchUserAverageSessions = (userId) => {
  const [averageSessions, setAverageSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserAverageSessions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserAverageSessions(userId);
        const transformedData = data.data.sessions.map(session => ({
          ...session,
          day: getDayName(session.day),
        }));
        setAverageSessions(transformedData);
      } catch (error) {
        setError("Erreur lors de la récupération des données de sessions moyennes de l'utilisateur");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUserAverageSessions();
    }
  }, [userId]);

  return { averageSessions, loading, error };
};

export const fetchUserPerformance = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données de performance de l'utilisateur:", error);
    throw error;
  }
};

export const useFetchUserPerformance = (userId) => {
  const [performanceData, setPerformanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserPerformanceData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserPerformance(userId);
        const kindMap = data.data.kind;
        const transformedData = data.data.data.map((item) => ({
          ...item,
          kind: kindMap[item.kind],
        }));
        setPerformanceData(transformedData);
      } catch (error) {
        setError("Erreur lors de la récupération des données de performance de l'utilisateur");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUserPerformanceData();
    }
  }, [userId]);

  return { performanceData, loading, error };
};
