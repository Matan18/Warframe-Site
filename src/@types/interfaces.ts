export interface IProduct{
  name: string,
  uniqueName: string,
  description: string,
  masteryReq: number,
  buildPrice: number,
  buildTime: number,
  skipBuildTimePrice: number,
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
          rarity: string,
          chance: number,
          rotation: string
        }
      ]
    }
  ]
  buildQuantity: number,
  consumeOnBuild: boolean,
  patchlogs: {
    name: string,
    date: string,
    url: string,
    imgUrl: string,
    additions: string,
    changes: string,
    fixes: string
  },
  tradable: boolean,
  polarities: [string],
  wikiaThumbnail: string,
  wikiaUrl: string,
  vaulted: boolean,
  vaultDate: string
  productCategory: string,
  imageName: string,
  type: string,
  category: string,
  marketCost: number,
  releaseDate: string,
}

// Commonly Array
export interface IWeapon extends IProduct {
  secondsPerShot: number,
  totalDamage: number,
  dmagePerShot: [
    number
  ],
  magazineSize: number,
  reloadTime: number,
  damagePerSecond: number,
  trigger: string,
  accuracy: number,
  multishot: number,
  criticalChance: number,
  criticalMultiplier: number,
  procChance: number,
  fireRate: number,
  slot: number,
  noise: string,
  sentinel: true,
  omegaAttenuation: number,
  areaAttack: {
    name: string,
    falloff: {
      start: number,
      end: number,
      reduction: number
    },
    slash: number,
    blast: number,
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
  projectile: string,
  tags: [
    string
  ],

  disposition: number,
}

//
// Commonly Array
export interface IWarframe extends IProduct {
  health: number,
  shield: number,
  armor: number,
  stamina: number,
  power: number,
  sprintSpeed: number,
  passiveDescription: string,
  abilities: [
    {
      name: string,
      description: string
    },
  ],
  aura: string,
  conclave: boolean,
  color: number,
  introduced: string,
  sex: string,
  sprint: number,

}

