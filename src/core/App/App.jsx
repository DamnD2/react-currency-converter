import React from 'react';
import ConverterItem from '../../components/ConverterItem/ConverterItem';
import './App.scss';
import provider from '../../api/provider';

const App = () => {
  const [mainValue, setMainValue] = React.useState(1); /* BYN */
  const [rate, setRate] = React.useState({
    BYN: 1,
    USD: 0.3991,
    EUR: 0.3398,
    RUB: 29.4233,
    UAH: 10.6654,
    PLN: 1.5521,
  });

  React.useEffect(() => {
    provider.getTasks
      .then((data) => setRate(Object.assign(rate, data)));
  }, [rate]);

  const handleChangeField = (value, currentRate) => {
    const resultValue = value / currentRate;

    setMainValue(resultValue);
  };

  return (
    <div className='App'>
      <div className='converter'>
        <h1 className='converter__title'>Currency converter</h1>
        <ConverterItem type='BYN' value={mainValue} rate={rate.BYN} onChange={handleChangeField} />
        <ConverterItem type='USD' value={mainValue} rate={rate.USD} onChange={handleChangeField} />
        <ConverterItem type='EUR' value={mainValue} rate={rate.EUR} onChange={handleChangeField} />
        <ConverterItem type='RUB' value={mainValue} rate={rate.RUB} onChange={handleChangeField} />
        <ConverterItem type='UAH' value={mainValue} rate={rate.UAH} onChange={handleChangeField} />
        <ConverterItem type='PLN' value={mainValue} rate={rate.PLN} onChange={handleChangeField} />
      </div>
    </div>
  );
};

export default App;
