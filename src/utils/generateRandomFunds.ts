const generateRandomDate = () => {
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const randomYear = Math.floor(Math.random() * 10) + 2010;

  const formattedMonth = String(randomMonth).padStart(2, '0');
  const formattedDay = String(randomDay).padStart(2, '0');
  const formattedYear = String(randomYear);

  return `${formattedMonth}/${formattedDay}/${formattedYear}`;
};

const generateRandomFund = (name: string) => {
  const abbrTermination = 'ND';
  const randomPrice = Math.floor(Math.random() * 1000) + 1;
  const randomIncrease = Math.floor(Math.random() * 100);
  const randomChartData = Array.from(
    {length: 20},
    () => Math.floor(Math.random() * 1000) + 1,
  );
  const randomRetiredCredits = Math.floor(Math.random() * 10) + 1;

  const isPositive =
    randomChartData[randomChartData.length - 1] >=
    randomChartData[randomChartData.length - 2];

  const abbreviation =
    name
      .split(' ')
      .map(word => word.charAt(0))
      .join('') + abbrTermination;

  return {
    name,
    isPositive,
    abbr: abbreviation.toUpperCase(),
    currentPrice: `$${randomPrice}`,
    increasement: randomIncrease,
    chartData: randomChartData,
    infoStats: {
      aum: `$${randomPrice * 1000}`,
      issueData: generateRandomDate(),
      vintageRange: `${Math.floor(Math.random() * 20) + 2000}-${
        Math.floor(Math.random() * 20) + 2020
      }`,
      ter: '0',
      priceAtClose: `$${randomPrice}`,
      priceAtOpen: `$${randomPrice}`,
    },
    portfolio: {
      credits: 0,
      amount: `$${randomPrice * 100}`,
      lastPurchase: generateRandomDate(),
      increasement: randomIncrease,
      retiredCredits: randomRetiredCredits,
    },
  };
};

const generateRandomPortfolio = () => {
  const randomAmount = Math.floor(Math.random() * 100000) + 1;
  const randomIncrease = Math.floor(Math.random() * 100);

  return {
    amount: randomAmount,
    increasement: randomIncrease,
  };
};

export const generateRandomFunds = () => {
  const portfolio = generateRandomPortfolio();
  const funds = [
    generateRandomFund('Wind Fund'),
    generateRandomFund('Natural Fund'),
    generateRandomFund('Solar Fund'),
  ];

  return {
    portfolio,
    funds,
  };
};
