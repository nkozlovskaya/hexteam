import * as getLinksActionCreator from "./getLinksAction";
import * as addNewLinkActionCreator from "./addNewLinkAction";

export const ActionCreators = {
  ...getLinksActionCreator,
  ...addNewLinkActionCreator,
};
