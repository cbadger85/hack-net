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
  payload: { name },
});

export const ADD_TO_PLAYER_CREDITS = 'ADD_TO_PLAYER_CREDITS';
export const addToPlayerCredits = addedCredits => ({
  type: ADD_TO_PLAYER_CREDITS,
  payload: addedCredits,
});

export const CREATE_ENEMY = 'CREATE_ENEMY';
export const createEnemy = enemy => ({
  type: CREATE_ENEMY,
  payload: {
    name: enemy.name,
    firewallStrength: enemy.firewallStrength,
    programs: enemy.programs,
    difficulty: enemy.difficultyLevel,
    credits: enemy.credits,
  },
});

export const DAMAGE_ENEMY_FIREWALL = 'DAMAGE_ENEMY_FIREWALL';
export const damageEnemyFirewall = damage => ({
  type: DAMAGE_ENEMY_FIREWALL,
  payload: damage,
});

export const DAMAGE_PLAYER_FIREWALL = 'DAMAGE_PLAYER_FIREWALL';
export const damagePlayerFirewall = damage => ({
  type: DAMAGE_PLAYER_FIREWALL,
  payload: damage,
});

export const SWITCH_SCREEN_TO_RUN_CONSOLE = 'SWITCH_SCREEN_TO_RUN_CONSOLE';
export const switchScreenToRunConsole = initialHealth => ({
  type: SWITCH_SCREEN_TO_RUN_CONSOLE,
  payload: initialHealth,
});

export const SWITCH_SCREEN_TO_MAIN_CONSOLE = 'SWITCH_SCREEN_TO_MAIN_CONSOLE';
export const switchScreenToMainConsole = () => ({
  type: SWITCH_SCREEN_TO_MAIN_CONSOLE,
});

export const SWITCH_TO_STORE_SCREEN = 'SWITCH_TO_STORE_SCREEN';
export const switchScreenToStoreScreen = () => ({
  type: SWITCH_TO_STORE_SCREEN,
});

export const SWITCH_TO_HELP_SCREEN = 'SWITCH_TO_HELP_SCREEN';
export const switchToHelpScreen = () => ({
  type: SWITCH_TO_HELP_SCREEN,
});

export const SET_BUFFER_AMOUNT = 'SET_BUFFER_AMOUNT';
export const setBufferAmount = buffer => ({
  type: SET_BUFFER_AMOUNT,
  payload: buffer,
});

export const ADD_TO_CALL_STACK = 'ADD_TO_CALL_STACK';
export const addToCallStack = ({ component, id, memRequired }) => ({
  type: ADD_TO_CALL_STACK,
  payload: {
    output: component,
    id,
    memRequired,
  },
});

export const CLEAR_CALL_STACK = 'CLEAR_CALL_STACK';
export const clearCallStack = () => ({
  type: CLEAR_CALL_STACK,
});

export const REMOVE_PROGRAM_FROM_CALL_STACK = 'REMOVE_PROGRAM_FROM_CALL_STACK';
export const removeProgramFromCallstack = (id, memRequired) => ({
  type: REMOVE_PROGRAM_FROM_CALL_STACK,
  payload: { id, memRequired },
});

export const TICK = 'TICK';
export const setTick = () => ({
  type: TICK,
});

export const PURCHASE_ITEMS = 'PURCHASE_ITEMS';
export const purchaseItems = ({
  programs,
  memoryBuff,
  firewallBuff,
  cost,
}) => ({
  type: PURCHASE_ITEMS,
  payload: { programs, memoryBuff, firewallBuff, cost },
});
