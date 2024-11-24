import { useState } from 'react';
import { useLocaleStorage } from './useLocaleStorage';
import { useCountDown } from './useCountDown';


const App = () => {

  const count=useCountDown(60)
  const [value, setValue] = useState('');

  const { setItem, getItem, removeItem } = useLocaleStorage('value')
  return (
    <div className='tutorial-shorts'>
      {count}
      <h1 className='mb-2 text-3xl font-bold'>useLocalStorage</h1>
      <input
        className='mb-4'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='flex flex-row gap-4'>
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())} >Get</button>
        <button onClick={() => removeItem()} >Remove</button>
      </div>
    </div>
  );
};

export default App;