export interface iCon {
  bg?: string;
  bg2?: string;
  mr?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface iUp {
  bg?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface iSideNav {
  present: React.ReactNode;
  text: string;
  icon: React.ReactNode;
  content?: string;
  destination?: string;
  onClick?: () => void;
}

export interface iNav {
  text: string;
}
export interface iRoute {
  destination: any;
  onClick?: () => void;
}
