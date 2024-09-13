## Documentation

### 1. `fetchUserData(userId)`

**Description** : Récupère les données de l'utilisateur à partir de l'API backend.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur pour lequel récupérer les données.
- **Retourne** :
  - `Promise<Object>` : Une promesse qui résout les données de l'utilisateur.
- **Lève** :
  - Une erreur si la récupération échoue.

### 2. `useFetchUserData(userId)`

**Description** : Hook React pour récupérer et gérer l'état des données de l'utilisateur.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur pour lequel récupérer les données.
- **Retourne** :
  - `user` (Object | null) : Les données de l'utilisateur.
  - `loading` (boolean) : Indicateur de chargement.
  - `error` (string | null) : Erreur lors de la récupération des données.

### 3. `fetchUserActivityData(userId)`

**Description** : Récupère les données d'activité de l'utilisateur à partir de l'API backend.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :
  - `Promise<Object>` : Une promesse qui résout les données d'activité de l'utilisateur.
- **Lève** :
  - Une erreur si la récupération échoue.

### 4. `useFetchUserActivityData(userId)`

**Description** : Hook React pour récupérer et gérer l'état des données d'activité de l'utilisateur.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :
  - `activityData` (Array) : Les données d'activité transformées de l'utilisateur.
  - `loading` (boolean) : Indicateur de chargement.
  - `error` (string | null) : Erreur lors de la récupération des données.

### 5. `fetchUserAverageSessions(userId)`

**Description** : Récupère les données des sessions moyennes de l'utilisateur à partir de l'API backend.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :
  - `Promise<Object>` : Une promesse qui résout les données des sessions moyennes.
- **Lève** :
  - Une erreur si la récupération échoue.

### 6. `useFetchUserAverageSessions(userId)`

**Description** : Hook React pour récupérer et gérer l'état des données des sessions moyennes de l'utilisateur.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :
  - `averageSessions` (Array) : Les données des sessions moyennes transformées.
  - `loading` (boolean) : Indicateur de chargement.
  - `error` (string | null) : Erreur lors de la récupération des données.

### 7. `fetchUserPerformance(userId)`

**Description** : Récupère les données de performance de l'utilisateur à partir de l'API backend.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :
  - `Promise<Object>` : Une promesse qui résout les données de performance.
- **Lève** :
  - Une erreur si la récupération échoue.

### 8. `useFetchUserPerformance(userId)`

**Description** : Hook React pour récupérer et gérer l'état des données de performance de l'utilisateur.

- **Paramètres** :
  - `userId` (string) : L'identifiant de l'utilisateur.
- **Retourne** :z
  - `performanceData` (Array) : Les données de performance transformées.
  - `loading` (boolean) : Indicateur de chargement.
  - `error` (string | null) : Erreur lors de la récupération des données.
