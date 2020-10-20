//
// Commonly Array
export interface IWarframe {
  uniqueName: string,
  name: string,
  description: string,
  health: number,
  shield: number,
  armor: number,
  stamina: number,
  power: number,
  masteryReq: number,
  sprintSpeed: number,
  passiveDescription: string,
  abilities: [
    {
      name: string,
      description: string
    },
  ],
  productCategory: string,
  buildPrice: number,
  buildTime: number,
  skipBuildTimePrice: number,
  buildQuantity: number,
  consumeOnBuild: boolean,
  components: [
    {
      uniqueName: string,
      name: string,
      description: string,
      itemCount: number,
      imageName: string,
      tradable: boolean
      drops: [
        {
          location: string,
          type: string,
          rarity: string,
          chance: number,
          rotation: string
        },
      ]
    },
  ],
  type: string,
  imageName: string,
  category: string,
  tradable: boolean,
  patchlogs: [
    {
      name: string,
      date: string,
      url: string,
      imgUrl: string,
      additions: string,
      changes: string,
      fixes: string
    },
  ],
  aura: string,
  conclave: boolean,
  color: number,
  introduced: string,
  polarities: [
    string,
    string
  ],
  sex: string,
  sprint: number,
  wikiaThumbnail: string,
  wikiaUrl: string
}
