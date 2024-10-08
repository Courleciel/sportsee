import { useState, useEffect } from 'react';
import UserDataModel from './UserDataModel';

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../assets/data/mockedData';

const USE_MOCK_DATA = true;

const getMockedData = (userId, dataSet) => {
  const userData = dataSet.find(user => user.id === Number(userId));
  return { data: userData };
};

const getMockedActivityData = (userId, dataSet) => {
  const userActivity = dataSet.find(user => user.userId === Number(userId));
  return { data: userActivity ? { sessions: userActivity.sessions } : { sessions: [] } };
};

const getMockedAverageSessions = (userId, dataSet) => {
  const userAverageSessions = dataSet.find(user => user.userId === Number(userId));
  return { data: userAverageSessions };
};

const getMockedPerformanceData = (userId, dataSet) => {
  const userPerformance = dataSet.find(user => user.userId === Number(userId));
  return { data: userPerformance };
};

export const fetchUserData = async (userId) => {
  if (USE_MOCK_DATA) {
    return getMockedData(userId, USER_MAIN_DATA);
  } else {
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
  if (USE_MOCK_DATA) {
    return getMockedActivityData(userId, USER_ACTIVITY);
  } else {
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
        const userDataModel = new UserDataModel(data.data);
        const transformedData = userDataModel.transformActivityData();
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
  if (USE_MOCK_DATA) {
    return getMockedAverageSessions(userId, USER_AVERAGE_SESSIONS);
  } else {
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
  }
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
        const userDataModel = new UserDataModel(data.data);
        const transformedData = userDataModel.transformAverageSessions();
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
  if (USE_MOCK_DATA) {
    return getMockedPerformanceData(userId, USER_PERFORMANCE);
  } else {
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
        const userDataModel = new UserDataModel(data.data);
        const transformedData = userDataModel.transformPerformanceData();
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
