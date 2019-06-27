import playerPrograms from './playerPrograms';

export default [
  ...playerPrograms,
  {
    name: 'Firewall Booster',
    description: "A mild increase to your firewall's strength",
    cost: 1000,
    type: 'firewall-increase',
  },
  {
    name: 'Memory Upgrade',
    description: 'A mild increase to your memory capacitiy',
    cost: 2500,
    type: 'memory-increase',
  },
];
