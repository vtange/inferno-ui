export const COUNT = 'count'
export const SUBTITLE = 'subtitle'
export const TITLE = 'title'

/******************************************************************************
  Using a plain JS object to hold app state
*******************************************************************************/

export const initialState = {
  [COUNT]: 0,
  [SUBTITLE]: 'Counter Demo',
  [TITLE]: 'Inferno + Most + FP',
};

/*

{
  ?could cause performance issue?[CONTROLLER_KEYS_DOWN]: <Stringify> {} -> tracks what keys are being held down by user. add keys true, switch them false as needed with keyup
  [CONTROLLER_FOCUS]: <Boolean> @UI_LAYER(true) / GAME_LAYER(false) -> where directional buttons are focused on
  [CONTROLLER_SCENE]: <String> @CUTSCENE / MENU / DIALOGUE -> controls what buttons are enabled ([START]-only for CUTSCENE, [A]-only for DIALOGUE, etc.)
  ?[UI_CUTSCENE_MODE]: <Boolean> true / false -> false means UI is not showing a cutscene and is ready to draw ui elements
  [UI_CUTSCENE]: <String> Refer to cutscene by name
  [UI_DIALOGUE_CURR]: <Integer> @-1, controls if we show the dialogue (-1 == no show)) //line number style  (e.g. actor:Hannah, Line: "Let's go.")
  [UI_DIALOGUE_SHW_NXT_ARW]: <Boolean> -> dispatch action at the end of rendering text that shows nxt arrow, controls if [A] speeds text or goes to next Line.

  //options
  [USER_OPTIONS_DISPLAY_RESOLUTION]
  [USER_OPTIONS_SFX_VOLUME]
  [USER_OPTIONS_BGM_VOLUME]
  [USER_OPTIONS_FONT_SZ]
  ![USER_OPTIONS_LANGUAGE] future localization
};























*/