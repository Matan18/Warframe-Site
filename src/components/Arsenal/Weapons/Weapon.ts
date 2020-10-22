// Commonly Array
export interface IWeapon {
  name: string,
  uniqueName: string,
  secondsPerShot: number,
  totalDamage: number,
  dmagePerShot: [
    number
  ],
  magazineSize: number,
  reloadTime: number,
  damagePerSecond: number,
  trigger: string,
  description: string,
  accuracy: number,
  multishot: number,
  criticalChance: number,
  criticalMultiplier: number,
  procChance: number,
  fireRate: number,
  slot: number,
  noise: string,
  sentinel: true,
  masteryReq: number,
  productCategory: string,
  omegaAttenuation: number,
  type: string,
  buildPrice: number,
  buildTime: number,
  skipBuildTimePrice: number,
  buildQuantity: number,
  consumeOnBuild: true,
  components: [
    {
      uniqueName: string,
      name: string,
      description: string,
      itemCount: number,
      imageName: string,
      tradable: boolean,
      drops: [
        {
          location: string,
          type: string,
          chance: number,
          rarity: string
        }
      ]
    }
  ]
  imageName: string,
  category: string,
  tradable: true,
  patchlogs: {
    name: string,
    date: string,
    url: string,
    imgUrl: string,
    additions: string,
    changes: string,
    fixes: string
  },
  areaAttack: {
    name: string,
    falloff: {
      start: number,
      end: number,
      reduction: number
    },
    slash: number,
    puncture: number,
  },
  ammo: number,
  damage: number,
  damageTypes: {
    impact: number,
    puncture: number,
    slash: number,
    heat: number,
    cold: number,
    electric: number,
    toxin: number,
    gas: number,
    viral: number,
    corrosive: number,
    blast: number,
    magnetic: number,
    radiation: number,
    true: number,
    void: number
  },
  flight: number,
  marketCost: number,
  polarities: [string],
  projectile: string,
  tags: [
    string
  ],
  vaulted: true,
  wikiaThumbnail: string,
  wikiaUrl: string,
  disposition: number,
  releaseDate: string,
  vaultDate: string
}
