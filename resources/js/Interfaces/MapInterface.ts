export interface LocationInterface {
  x: number;
  y: number;
}

export interface CalloutInterface {
  regionName: string;
  superRegionName: string;
  location: Location;
}

export interface MapInfoInterface {
  uuid: string;
  displayName: string;
  narrativeDescription: string;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: CalloutInterface[];
}
