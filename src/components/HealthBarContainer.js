import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import HealthBar from './HealthBar';
import colors from '../utils/colors';

const HealthBarContainer = () => {
  const enemyFirewallStrength = useSelector(
    state => state.enemy.firewallStrength
  );

  const initialEnemyHealth = useRef(enemyFirewallStrength);

  const enemyHealth = parseInt(
    (enemyFirewallStrength / initialEnemyHealth.current) * 100,
    10
  );

  return (
    <div style={{ width: '100%', padding: '0.5em' }}>
      <HealthBar
        label="Your firewall strength"
        width={100}
        color={colors.green}
      />
      <HealthBar
        label="Enemy's firewall strength"
        width={enemyHealth > 0 ? enemyHealth : 0}
        color={colors.pink}
      />
    </div>
  );
};

export default HealthBarContainer;
