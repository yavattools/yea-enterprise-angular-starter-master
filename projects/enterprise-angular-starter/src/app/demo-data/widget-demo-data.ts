import * as moment from 'moment';

const today = moment().minutes(0);
const now = moment();

export const salesChartDemoValues = [
  193, 82, 195, 62, 112, 73, 193, 199, 111, 177, 34, 143
];

export const salesChartDemoLabels = () => {
  return salesChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const salesChartMonthyDemoValues = [
  186, 34, 172, 161, 27, 163, 87, 119, 123, 15, 180, 7
];

export const salesChartMonthlyDemoLabels = () => {
  return salesChartMonthyDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};


export const returnsChartDemoValues = [
  55, 128, 155, 26, 37, 136, 91, 12, 7, 184, 88, 107
];


export const returnsChartDemoLabels = () => {
  return returnsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const membersChartDemoValues = [
  55, 18, 15, 126, 237, 36, 191, 12, 17, 84, 88, 107
];


export const membersChartDemoLabels = () => {
  return membersChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const subscriptionsChartDemoValues = [
  160, 45, 77, 162, 55, 87, 102, 159, 87, 34, 98, 88
];

export const subscriptionsChartDemoLabels = () => {
  return subscriptionsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};


export const salesMonthlyTrendChartDemoValues = [
  186, 34, 172, 161, 27, 163, 87, 119, 123, 15, 180, 7
];

export const salesMonthlyTrendChartDemoLabels = () => {
  return salesMonthlyTrendChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const returnsMonthlyTrendChartDemoValues = [
  55, 128, 155, 26, 37, 136, 91, 12, 7, 184, 88, 107
];

export const returnsMonthlyTrendChartDemoLabels = () => {
  return returnsMonthlyTrendChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const membersMonthlyTrendChartDemoValues = [
  55, 18, 15, 126, 237, 36, 191, 12, 17, 84, 88, 107
];

export const membersMonthlyTrendChartDemoLabels = () => {
  return returnsMonthlyTrendChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const subscriptionsMonthlyTrendChartDemoValues = [
  160, 45, 77, 162, 55, 87, 102, 159, 87, 34, 98, 88
];

export const subscriptionsMonthlyTrendChartDemoLabels = () => {
  return subscriptionsMonthlyTrendChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};






export const salesSummaryDemoData = { revenue: [6, 4, 8, 3, 10, 8, 4], expenses: [6, 4, 8, 3, 10, 8, 4] };
export const salesSummaryDemoLabels = () => {
  return salesSummaryDemoData.revenue.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};


export let productSaleShareDemoData = [
  {
    'label': 'Product 1',
    'value': 124
  },
  {
    'label': 'Product 2',
    'value': 25
  },
  {
    'label': 'Product 3',
    'value': 18
  },
  {
    'label': 'Product 4',
    'value': 12
  },
  {
    'label': 'Product 5',
    'value': 22
  },
  {
    'label': 'Product 6',
    'value': 124
  },
  {
    'label': 'Product 7',
    'value': 25
  },
  {
    'label': 'Product 8',
    'value': 18
  },
  {
    'label': 'Product 9',
    'value': 12
  },
  {
    'label': 'Product 10',
    'value': 22
  }
];

export let productReturnsShareDemoData = [
  {
    'label': 'Product 1',
    'value': 24
  },
  {
    'label': 'Product 2',
    'value': 25
  },
  {
    'label': 'Product 3',
    'value': 118
  },
  {
    'label': 'Product 4',
    'value': 112
  },
  {
    'label': 'Product 5',
    'value': 220
  },
  {
    'label': 'Product 6',
    'value': 24
  },
  {
    'label': 'Product 7',
    'value': 25
  },
  {
    'label': 'Product 8',
    'value': 18
  },
  {
    'label': 'Product 9',
    'value': 52
  },
  {
    'label': 'Product 10',
    'value': 22
  }
];



// export const audienceOverviewUsersDemoDataLastWeek = [81, 71, 98, 54, 99, 120, 132];
// export const audienceOverviewUsersDemoData = [108, 78, 63, 119, 85, 140, 101];
// export const audienceOverviewUsersDemoLabels = () => {
//   return audienceOverviewUsersDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
// };

// export const audienceOverviewSessionsDemoDataLastWeek = [81, 46, 99, 102, 66, 140, 173];
// export const audienceOverviewSessionsDemoData = [125, 43, 87, 150, 120, 100, 164];
// export const audienceOverviewSessionsDemoLabels = () => {
//   return audienceOverviewSessionsDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
// };

// export const audienceOverviewBounceRateDemoDataLastWeek = [8.8, 14.5, 12.3, 16.7, 7.2, 6.1, 8.4];
// export const audienceOverviewBounceRateDemoData = [5.5, 12.3, 8.4, 7.3, 9.8, 6.6, 9.2];
// export const audienceOverviewBounceRateDemoLabels = () => {
//   return audienceOverviewBounceRateDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
// };

// export const audienceOverviewSessionDurationDemoLastWeek = [80, 98, 87, 102, 120, 108, 145];
// export const audienceOverviewSessionDurationDemoData = [125, 43, 87, 150, 120, 100, 164];
// export const audienceOverviewSessionDurationDemoLabels = () => {
//   return audienceOverviewSessionDurationDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
// };

export const recentSalesTableDemoData = [
  {
    name: 'Product 1',
    price: '$199.99',
    quantity: 120,
    timestamp: now.clone().subtract(2, 'minutes').fromNow()
  },
  {
    name: 'Product 2',
    price: '$18.99',
    quantity: 20,
    timestamp: now.clone().subtract(6, 'minutes').fromNow()
  },
  {
    name: 'Product 3',
    price: '$1299.99',
    quantity: 100,
    timestamp: now.clone().subtract(14, 'minutes').fromNow()
  },
  {
    name: 'Product 4',
    price: '$199.99',
    quantity: 30,
    timestamp: now.clone().subtract(17, 'minutes').fromNow()
  },
  {
    name: 'Product 5',
    price: '$161.99',
    quantity: 20,
    timestamp: now.clone().subtract(25, 'minutes').fromNow()
  },
  {
    name: 'Product 6',
    price: '$99.99',
    quantity: 220,
    timestamp: now.clone().subtract(42, 'minutes').fromNow()
  },
  {
    name: 'Product 1',
    price: '$199.99',
    quantity: 120,
    timestamp: now.clone().subtract(2, 'minutes').fromNow()
  },
  {
    name: 'Product 2',
    price: '$18.99',
    quantity: 20,
    timestamp: now.clone().subtract(6, 'minutes').fromNow()
  },
  {
    name: 'Product 3',
    price: '$1299.99',
    quantity: 100,
    timestamp: now.clone().subtract(14, 'minutes').fromNow()
  },
  {
    name: 'Product 4',
    price: '$199.99',
    quantity: 30,
    timestamp: now.clone().subtract(17, 'minutes').fromNow()
  },
  {
    name: 'Product 5',
    price: '$161.99',
    quantity: 20,
    timestamp: now.clone().subtract(25, 'minutes').fromNow()
  },
  {
    name: 'Product 6',
    price: '$99.99',
    quantity: 220,
    timestamp: now.clone().subtract(42, 'minutes').fromNow()
  },
  {
    name: 'Product 1',
    price: '$199.99',
    quantity: 120,
    timestamp: now.clone().subtract(2, 'minutes').fromNow()
  },
  {
    name: 'Product 2',
    price: '$18.99',
    quantity: 20,
    timestamp: now.clone().subtract(6, 'minutes').fromNow()
  },
  {
    name: 'Product 3',
    price: '$1299.99',
    quantity: 100,
    timestamp: now.clone().subtract(14, 'minutes').fromNow()
  },
  {
    name: 'Product 4',
    price: '$199.99',
    quantity: 30,
    timestamp: now.clone().subtract(17, 'minutes').fromNow()
  },
  {
    name: 'Product 5',
    price: '$161.99',
    quantity: 20,
    timestamp: now.clone().subtract(25, 'minutes').fromNow()
  },
  {
    name: 'Product 6',
    price: '$99.99',
    quantity: 220,
    timestamp: now.clone().subtract(42, 'minutes').fromNow()
  }
];

export const recentSalesChartDemoValues = [
  13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22,
  26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17
];
export const recentSalesChartDemoLabels = () => {
  return recentSalesChartDemoValues.map((value, index) => now.clone().subtract(index * 10, 'minutes').fromNow()).reverse();
};

