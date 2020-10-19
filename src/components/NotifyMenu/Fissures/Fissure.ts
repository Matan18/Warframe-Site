// https://api.warframestat.us/pc/fissures
// Commonly array
export interface IFissure {
  id: string,
  activation: string,
  startString: string,
  expiry: string,
  active: boolean,
  node: string,
  missionType: string,
  enemy: string,
  tier: string,
  tierNum: number,
  expired: boolean,
  eta: string
}