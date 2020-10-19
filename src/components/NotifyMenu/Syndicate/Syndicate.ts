// 20200925132640
// https://api.warframestat.us/pc/syndicateMissions

export interface ISyndicate {
  id: string,
  activation: string,
  startString: string,
  expiry: string,
  active: boolean,
  syndicate: string,
  nodes:
  string[]
  ,
  jobs:
  {
    id: string,
    rewardPool:
    string[]
    ,
    type: string,
    enemyLevels:
    number[]
    ,
    standingStages: number[],
    minMR: number
  }[]
  ,
  eta: string
}
