import nanoid from 'nanoid';

export const ADD_TO_TERMINAL_DISPLAY = 'ADD_TO_TERMINAL_DISPLAY';
export const addToTerminalDisplay = ({ output, color = '' }) => ({
  type: ADD_TO_TERMINAL_DISPLAY,
  payload: {
    id: nanoid(),
    color,
    output,
  },
});

export const CLEAR_TERMINAL_DISPLAY = 'CLEAR_TERMINAL_DISPLAY';
export const clearTerminalDisplay = () => ({ type: CLEAR_TERMINAL_DISPLAY });

export const ADD_TO_TERMINAL_HISTORY = 'ADD_TO_TERMINAL_HISTORY';
export const addToTerminalHistory = command => ({
  type: ADD_TO_TERMINAL_HISTORY,
  payload: command,
});

export const SET_TERMINAL_ACTIVE = 'SET_TERMINAL_ACTIVE';
export const setTerminalActive = () => ({ type: SET_TERMINAL_ACTIVE });

export const SET_TERMINAL_INACTIVE = 'SET_TERMINAL_INACTIVE';
export const setTerminalInactive = () => ({ type: SET_TERMINAL_INACTIVE });

export const ADD_TO_RUN_TERMINAL_HISTORY = 'ADD_TO_RUN_TERMINAL_HISTORY';
export const addToRunTerminalHistory = command => ({
  type: ADD_TO_RUN_TERMINAL_HISTORY,
  payload: command,
});

export const ADD_TO_RUN_TERMINAL_DISPLAY = 'ADD_TO_RUN_TERMINAL_DISPLAY';
export const addToRunTerminalDisplay = ({ output, color = '' }) => ({
  type: ADD_TO_RUN_TERMINAL_DISPLAY,
  payload: {
    id: nanoid(),
    color,
    output,
  },
});

export const CREATE_PLAYER = 'CREATE_PLAYER';
export const createPlayer = name => ({
  type: CREATE_PLAYER,
  payload: name,
});

export const CREATE_ENEMY = 'CREATE_ENEMY';
export const createEnemy = ({ name, firewallStrength, programs }) => ({
  type: CREATE_ENEMY,
  payload: {
    name,
    firewallStrength,
    programs,
  },
});

export const DAMAGE_FIREWALL = 'DAMAGE_FIREWALL';
export const damageFirewall = damage => ({
  type: DAMAGE_FIREWALL,
  payload: damage,
});

export const SWITCH_SCREEN_TO_RUN_CONSOLE = 'SWITCH_SCREEN_TO_RUN_CONSOLE';
export const switchScreenToRunConsole = () => ({
  type: SWITCH_SCREEN_TO_RUN_CONSOLE,
});

export const SWITCH_SCREEN_TO_MAIN_CONSOLE = 'SWITCH_SCREEN_TO_MAIN_CONSOLE';
export const switchScreenToMainConsole = () => ({
  type: SWITCH_SCREEN_TO_MAIN_CONSOLE,
});
