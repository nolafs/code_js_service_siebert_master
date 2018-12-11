const portfolios = [
  {
    id: 1,
    name: "Investor 1"
  },
  {
    id: 2,
    name: "Investor 2"
  },
  {
    id: 3,
    name: "Investor 3"
  }
];

const positions = [
  {
    id: 1,
    portfolioId: 1,
    currency: "GBP",
    value: -2.02,
    date: "2018-06-07"
  },
  {
    id: 2,
    portfolioId: 1,
    currency: "EUR",
    value: 1906302.15,
    date: "2018-06-07"
  },
  {
    id: 3,
    portfolioId: 2,
    currency: "GBP",
    value: 1379804.1,
    date: "2018-06-07"
  },
  {
    id: 4,
    portfolioId: 2,
    currency: "CAD",
    value: 2401938.18,
    date: "2018-06-07"
  },
  {
    id: 5,
    portfolioId: 3,
    currency: "GBP",
    value: 724.29,
    date: "2018-06-07T00:00:00.000Z"
  }
];

export default { portfolios, positions };
