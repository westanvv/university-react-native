export type User = {
  id: string;
  name: string;
};

export type Message = {
  title?: string;
  message?: string;
};

export interface AppReducer {
  user?: User;
  messages: Message[];
}
