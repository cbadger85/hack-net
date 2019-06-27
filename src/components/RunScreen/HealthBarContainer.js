import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import HealthBar from './HealthBar';
import colors from '../../utils/colors';

const HealthBarContainer = () => {
  const enemyFirewallStrength = useSelector(
    state => state.enemy.firewallStrength
  );
  const playerFirewallStrength = useSelector(
    state => state.player.firewallStrength
  );

  const initialEnemyHealth = useRef(enemyFirewallStrength);
  const initialPlayerHealth = useRef(playerFirewallStrength);

  const enemyHealth = parseInt(
    (enemyFirewallStrength / initialEnemyHealth.current) * 100,
    10
  );

  const playerHealth = parseInt(
    (playerFirewallStrength / initialPlayerHealth.current) * 100,
    10
  );

  return (
    <div style={{ width: '100%', padding: '0.5em' }}>
      <HealthBar
        label="Your firewall strength"
        width={playerHealth > 0 ? playerHealth : 0}
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
