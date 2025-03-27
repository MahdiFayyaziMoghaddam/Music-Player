import { Dispatch } from "react";
import { States } from "./States";
import { Actions } from "./Actions";

export default interface IStore {
  state: States
  dispatch: Dispatch<Actions>
}