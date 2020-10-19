export interface IInvasions {
  defenderReward: {
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
  attackingFaction: string,
  completion: number,
  attackerReward: {
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
  count: number,
  completed: true,
  requiredRuns: number,
  vsInfestation: true,
  node: string,
  eta: string,
  defendingFaction: string,
  id: string,
  activation: string,
  rewardTypes: [
    string
  ],
  desc: string
}


interface IColorPattern{
  Grineer: "#bd2b32",
  Corpus: "#2b5168",
  Infestação: "#418257"
}