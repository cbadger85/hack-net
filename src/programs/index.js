import store from '../store';
import * as actions from '../store/actions';

export const iceIceBaby = {
  name: 'Ice Ice Baby',
  tte: 3,
  program: () => {
    console.log('Ice Ice Baby...');
    store.dispatch(actions.damageFirewall(5));
  },
};
