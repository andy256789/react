/* eslint-disable react/prop-types */
import { useId, useRef } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const inputRef = useRef();
    const id = useId();

    const handleSelect = () => {
        if (inputRef.current && inputRef.current.value === "0") {
            inputRef.current.select();
        }
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={id} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={id}
                    type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={Math.round(amount * 100) / 100}
                    ref={inputRef}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                    onClick={() => handleSelect()}
                    onFocus={() => handleSelect()}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value);
                    }}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
