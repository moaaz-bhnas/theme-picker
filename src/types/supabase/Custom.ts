import { Locale } from "../Locale";

export type LocalizedFields = {
  [key in Locale]: {
    [key: string]: string;
  };
};
