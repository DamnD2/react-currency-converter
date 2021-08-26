const mockRate = ['USD', 'EUR', 'RUB', 'UAH', 'PLN'];

export const converter = (rates) => (
  mockRate.reduce((accum, element) => {
    const rateData = rates.find((rate) => rate.Cur_Abbreviation === element);
    const rate = rateData.Cur_Scale / rateData.Cur_OfficialRate;

    return Object.assign(accum, { [element]: rate });
  }, {})
);
