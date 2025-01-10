import { Locale } from "../Locale";

export type LocalizedFields = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export enum ErrorCode {
  NOT_FOUND = "PGRST116",
}
