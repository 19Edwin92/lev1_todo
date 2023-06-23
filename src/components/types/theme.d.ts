export interface Size {
  fontSize:string;
  width: string;
  height: string;
}

export interface TypeTheme {
  colors : {
    green : string;
    red: string;
    transparent: string;
    white: string;
  },
  size : {
    large : Size;
    medium : Size;
    small : Size;
  }
}
