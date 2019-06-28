import playerPrograms from './playerPrograms';

export default [
  ...playerPrograms,
  {
    name: 'Firewall Booster',
    description: "A mild increase to your firewall's strength",
    cost: 1000,
    type: 'firewall-increase',
    amount: 25,
  },
  {
    name: 'Memory Upgrade',
    description: 'A mild increase to your memory capacitiy',
    cost: 2500,
    type: 'memory-increase',
    amount: 8,
  },
  {
    name: 'Remove bugs from game',
    description: "If you don't know, you can't afford it",
    cost: 100000,
  },
];
