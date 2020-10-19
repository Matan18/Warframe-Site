// https://api.warframestat.us/pc/alerts
export interface IAlerts {
  mission: {
    reward: {
      countedItems: [
        {
          count: number,
          type: string
        }
      ],
      thumbnail: string,
      color: number,
      credits: number,
      asString: string,
      items: [
        {}
      ],
      itemString: string
    },
    node: string,
    faction: string,
    maxEnemyLevel: number,
    minEnemyLevel: number,
    maxWaveNum: number,
    type: string,
    nightmare: boolean,
    archwingRequired: boolean,
    isSharkwing: boolean,
    enemySpec: string,
    levelOverride: string,
    advancedSpawners: [string],
    requiredItems: [string],
    consumeRequiredItems: boolean,
    leadersAlwaysAllowed: boolean,
    levelAuras: [string]
  },
  expired: boolean,
  eta: string,
  id: string,
  expiry: string, // Timestamp
  activation: string, //Timestamp
  rewardTypes: [
    string
  ]
}
