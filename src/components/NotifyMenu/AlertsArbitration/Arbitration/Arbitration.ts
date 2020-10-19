// https://api.warframestat.us/pc/arbitration
export interface IArbitrationData {
  activation: string,
  expiry: string,
  enemy: string,
  type: string,
  archwing: boolean,
  sharkwing: boolean,
  node: string
}