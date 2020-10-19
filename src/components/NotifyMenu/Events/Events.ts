
// https://api.warframestat.us/pc/events
export interface IEvent {
  id: string,
  activation: string,
  expiry: string,
  maximumScore: 0,
  currentScore: 0,
  smallInterval: 0,
  largeInterval: 0,
  faction: string,
  description: string,
  tooltip: string,
  node: string,
  concurrentNodes: [
    string
  ],
  victimNode: string,
  scoreLocTag: string,
  rewards: [
    {
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
    }
  ],
  expired: true,
  health: number,
  affiliatedWith: string,
  jobs: [
    {
      activation: string,
      expiry: string,
      rewardPool: [
        string
      ],
      type: string,
      enemyLevels: [
        number
      ],
      standingStages: [
        number
      ],
      minMR: number
    }
  ],
  interimSteps: [
    {
      goal: number,
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
      message: {
        sender: string,
        subject: string,
        message: string,
        senderIcon: string,
        attachments: [
          string
        ]
      },
      winnerCount: number
    }
  ],
  progressSteps: {
    type: string,
    progressAmt: number
  },
  progressTotal: number,
  showTotalAtEndOfMission: true,
  isPersonal: true,
  isCommunity: true,
  regionDrops: [
    string
  ],
  archwingDrops: [
    string
  ],
  asString: string,
  metadata: {},
  completionBonuses: [
    number
  ],
  scoreVar: string,
  altExpiry: string,
  altActivation: string,
  nextAlt: {
    expiry: string,
    activation: string
  }
}
