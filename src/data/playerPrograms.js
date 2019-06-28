import store from '../store';
import * as actions from '../store/actions';
import colors from '../utils/colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} executed successfully`,
      color: colors.yellow,
    })
  );
};

const isRunMode = () => {
  const screen = store.getState().game.screen;
  return screen === 'run' ? true : false;
};

export default [
  {
    name: 'ice-ice-breaker',
    type: 'program',
    unique: true,
    description:
      "A lightly penetrating attack designed to test the target's defenses",
    tte: 3,
    cost: 1000,
    memRequired: 8,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(3));
      printSuccess(this.name);
    },
  },
  {
    name: 'set-them-up-the-bomb',
    type: 'program',
    unique: true,
    description:
      "A damaging worm that disables critical systems in targe's mainframe",
    tte: 15,
    cost: 2500,
    memRequired: 32,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(20));
      printSuccess(this.name);
    },
  },
  {
    name: 'nuke-em',
    type: 'program',
    unique: true,
    tte: 0,
    cost: 0,
    memRequired: 0,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(100));
      printSuccess(this.name);
    },
  },
  {
    name: 'death-by-a-thousand-cuts',
    type: 'program',
    unique: true,
    description: "A brutal DDoS attack that overload's the target's firewall",
    tte: 10,
    cost: 1500,
    memRequired: 16,
    program: function() {
      let timer = 12;
      const dotTimer = setInterval(() => {
        if (timer > 1) {
          isRunMode() && store.dispatch(actions.damageEnemyFirewall(3));
        }
        if (!isRunMode() || timer <= 1) {
          clearInterval(dotTimer);
        }
        timer -= 1;
      }, 2000);
      printSuccess(this.name);
    },
  },
];
