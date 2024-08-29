import { useState } from 'react'
import InputBox from './components/Inputbox'
import usecurrency from './hooks/usecurrency'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamt, setconvertedamt] = useState(0)

  const currencyinfo = usecurrency(from)
  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedamt(convertedamt)
    setamount(convertedamt)
  }

  const convert = () => {
    setconvertedamt(amount * currencyinfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
      style={{backgroundColor: 'red'}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5">
          <form
            onSubmit={(e) => {
             e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setamount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamt}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
