import { useAppDispatch } from "./redux-hooks";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store/action_creators";

export const useActions = () => {
  const dispacth = useAppDispatch();
  return bindActionCreators(ActionCreators, dispacth);
};
