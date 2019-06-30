import playerPrograms from './playerPrograms';

export default [
  ...playerPrograms,
  {
    name: 'LightFirewall Booster',
    description: "A mild increase to your firewall's strength",
    cost: 1000,
    type: 'firewall upgrade',
    amount: 25,
  },
  {
    name: 'Light Memory Upgrade',
    description: 'A mild increase to your memory capacitiy',
    cost: 2500,
    type: 'memory upgrade',
    amount: 8,
  },
  {
    name: 'Remove bugs from game',
    type: 'game upgrade',
    description: 'This is definitely a real feature',
    cost: 100000,
  },
];
