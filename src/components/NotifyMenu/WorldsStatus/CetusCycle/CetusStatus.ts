// https://api.warframestat.us/pc/cetusCycle
export interface ICetusStatus {
  id: string,
  expiry: string,
  activation: string,
  isDay: boolean,
  state: string,
  timeLeft: string,
  isCetus: boolean,
  shortString: string
}