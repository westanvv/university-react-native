export type User = {
  id: string;
  name: string;
};

export interface AppReducer {
  user?: User;
}
