export type User = {
  id: string;
  name: string;
};

export interface UserReducer {
  user?: User;
}
