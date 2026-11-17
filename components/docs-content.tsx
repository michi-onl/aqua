import introductionDoc from "@/components/docs/introduction";
import installationDoc from "@/components/docs/installation";
import themingDoc from "@/components/docs/theming";
import buttonDoc from "@/components/docs/button";
import alertDoc from "@/components/docs/alert";
import avatarDoc from "@/components/docs/avatar";
import badgeDoc from "@/components/docs/badge";
import chatBubbleDoc from "@/components/docs/chat-bubble";
import checkboxDoc from "@/components/docs/checkbox";
import codeBlockDoc from "@/components/docs/code-block";
import cursorDoc from "@/components/docs/cursor";
import dialogDoc from "@/components/docs/dialog";
import dockDoc from "@/components/docs/dock";
import dropdownMenuDoc from "@/components/docs/dropdown-menu";
import inputDoc from "@/components/docs/input";
import labelDoc from "@/components/docs/label";
import loaderDoc from "@/components/docs/loader";
import progressDoc from "@/components/docs/progress";
import radioGroupDoc from "@/components/docs/radio-group";
import selectDoc from "@/components/docs/select";
import sliderDoc from "@/components/docs/slider";
import switchDoc from "@/components/docs/switch";
import tabsDoc from "@/components/docs/tabs";
import ipodDoc from "@/components/docs/ipod";
import windowDoc from "@/components/docs/window";
import textareaDoc from "@/components/docs/textarea";
import toastDoc from "@/components/docs/toast";
import tooltipDoc from "@/components/docs/tooltip";
import buttonGroupDoc from "@/components/docs/button-group";
import cardDoc from "@/components/docs/card";
import collapsibleDoc from "@/components/docs/collapsible";
import emptyDoc from "@/components/docs/empty";
import itemDoc from "@/components/docs/item";
import separatorDoc from "@/components/docs/separator";
import skeletonDoc from "@/components/docs/skeleton";
import spinnerDoc from "@/components/docs/spinner";
import tableDoc from "@/components/docs/table";
import toggleDoc from "@/components/docs/toggle";
import type { Doc } from "@/components/docs/shared";

export type { Doc } from "@/components/docs/shared";

export const DOCS: Record<string, Doc> = {
  introduction: introductionDoc,
  installation: installationDoc,
  theming: themingDoc,
  button: buttonDoc,
  alert: alertDoc,
  avatar: avatarDoc,
  badge: badgeDoc,
  "chat-bubble": chatBubbleDoc,
  checkbox: checkboxDoc,
  "code-block": codeBlockDoc,
  cursor: cursorDoc,
  dialog: dialogDoc,
  dock: dockDoc,
  "dropdown-menu": dropdownMenuDoc,
  input: inputDoc,
  label: labelDoc,
  loader: loaderDoc,
  progress: progressDoc,
  "radio-group": radioGroupDoc,
  select: selectDoc,
  slider: sliderDoc,
  switch: switchDoc,
  tabs: tabsDoc,
  ipod: ipodDoc,
  window: windowDoc,
  textarea: textareaDoc,
  toast: toastDoc,
  tooltip: tooltipDoc,
  "button-group": buttonGroupDoc,
  card: cardDoc,
  collapsible: collapsibleDoc,
  empty: emptyDoc,
  item: itemDoc,
  separator: separatorDoc,
  skeleton: skeletonDoc,
  spinner: spinnerDoc,
  table: tableDoc,
  toggle: toggleDoc,
};
