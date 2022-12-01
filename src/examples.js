const stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

const getStockSymbolsForEach = (stocks) => {
  console.log("Get Stock Symbols - forEach Method \n");
  let symbolsArray = [];
  stocks.forEach((symb) => symbolsArray.push(symb.symbol));
  console.log(symbolsArray);
};

getStockSymbolsForEach(stocks);

// Array.prototype.map = (projection) => {
//   let results = [];
//   this.forEach(function (item) {
//     results.push(projection(item));
//   });
//   return results;
// };

const getStockSymbolsMap = (stocks) => {
  console.log("\n Get Stock Symbols - Map Method \n");
  return stocks.map((stock) => {
    console.log(stock.symbol);
  });
};

getStockSymbolsMap(stocks);

const getStocksOver = (stocks, minPrice) => {
  console.log("\n Get stocks - Filter Method \n");
  console.log(stocks.filter((stock) => stock.price >= minPrice));
};

getStocksOver(stocks, 150);

const filteredStockSymbols = (stocks, minPrice) => {
  console.log("\n Filtered and mapped stocks");
  stocks
    .filter((stock) => stock.price >= minPrice)
    .map((stock) => console.log(stock.symbol));
};

filteredStockSymbols(stocks, 150);

let exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 },
  ],
];

Array.prototype.concatAll = function () {
  let results = [];

  this.forEach(function (subArray) {
    subArray.forEach(function (item) {
      results.push(item);
    });
  });
  return results;
};

let concatenatedStocks = exchanges.concatAll();

console.log("\n ConcatAll \n");

concatenatedStocks.forEach((stock) => {
  console.log(JSON.stringify(stock));
});

console.log("\n");

console.log("Advanced Flattening");

let stockExchanges = [
  {
    name: "NYSE",
    stocks: [
      {
        symbol: "XFX",
        price: 240.22,
        volume: 23432,
      },
      {
        symbol: "TNZ",
        price: 332.19,
        volume: 234,
      },
    ],
  },
  {
    name: "TSX",
    stocks: [
      {
        symbol: "JXJ",
        price: 120.22,
        volume: 5323,
      },
      {
        symbol: "NYN",
        price: 88.47,
        volume: 98275,
      },
    ],
  },
];

var flattenedStocks = stockExchanges
  .map(function (exchange) {
    return exchange.stocks.filter(function (stock) {
      return stock.price >= 100;
    });
  })
  .concatAll();

flattenedStocks.forEach(function (stock) {
  console.log("flattenedStocks", stock);
});

var newStockExchanges = [
  {
    name: "NYSE",
    stocks: [
      {
        symbol: "XFX",
        closes: [
          { date: new Date(2014, 11, 24), price: 240.1 },
          { date: new Date(2014, 11, 23), price: 232.08 },
          { date: new Date(2014, 11, 22), price: 241.09 },
        ],
      },
      {
        symbol: "TNZ",
        closes: [
          { date: new Date(2014, 11, 24), price: 521.24 },
          { date: new Date(2014, 11, 23), price: 511.0 },
          { date: new Date(2014, 11, 22), price: 519.29 },
        ],
      },
    ],
  },
  {
    name: "TSX",
    stocks: [
      {
        symbol: "JXJ",
        closes: [
          { date: new Date(2014, 11, 24), price: 423.22 },
          { date: new Date(2014, 11, 23), price: 424.84 },
          { date: new Date(2014, 11, 22), price: 419.72 },
        ],
      },
      {
        symbol: "NYN",
        closes: [
          { date: new Date(2014, 11, 24), price: 16.82 },
          { date: new Date(2014, 11, 23), price: 16.12 },
          { date: new Date(2014, 11, 22), price: 15.77 },
        ],
      },
    ],
  },
];

var christmasEveCloses = newStockExchanges
  .map(function (exchange) {
    return exchange.stocks
      .map(function (stock) {
        return stock.closes
          .filter(function (close) {
            return close.date.getMonth() === 11 && close.date.getDate() === 24;
          })
          .map(function (close) {
            return {
              symbol: stock.symbol,
              price: close.price,
            };
          });
      })
      .concatAll();
  })
  .concatAll();

christmasEveCloses.forEach(function (christmasEveClose) {
  console.log("christmasEveClose", christmasEveClose);
});
