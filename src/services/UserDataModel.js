class UserDataModel {
  constructor(data) {
    this.data = data;
  }

  static getDayName(dayNumber) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[dayNumber - 1];
  }

  static translatePerformanceType(kind) {
    const kindTranslations = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };
    return kindTranslations[kind] || kind;
  }

  transformAverageSessions() {
    return this.data.sessions.map(session => ({
      ...session,
      day: UserDataModel.getDayName(session.day),
    }));
  }

  transformPerformanceData() {
    const kindMap = this.data.kind;
    return this.data.data.map(item => ({
      ...item,
      kind: UserDataModel.translatePerformanceType(kindMap[item.kind]),
    }));
  }

  transformActivityData() {
    return this.data.sessions.map((session, index) => ({
      ...session,
      day: index + 1,
    }));
  }
}

export default UserDataModel;
