export interface IPlatform {
  name: string;
  initial: string;
}

export interface PlatformProps {
  changePlatform: (value: string) => void;
}
