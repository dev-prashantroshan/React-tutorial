import React, { useState } from 'react';
import { evaluate } from 'mathjs';

export default function Calculator(props) {
  const [display, setDisplay] = useState('0');

  //   const clear = () => setDisplay('');

  const handleClick = (key) => {
    setDisplay((prev) => prev + key);
  };

  const calculateResult = () => {
    console.log(display);
    let result = evaluate(display);
    setDisplay(result);
  };

  return (
    <div className="container my-5" data-bs-theme={props.theme === 'light' ? 'light' : 'dark'}>
      <div className="card">
        {/* Calculator Display */}
        <div className="card-body">
          <div className="form-control text-end mb-3">{display || '0'}</div>
        </div>

        <div className="d-grid gap-2">
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-danger w-100" onClick={() => setDisplay('')}>
                Clear
              </button>
            </div>
            <div className="col">
              <button className="btn btn-info w-100 text-light" onClick={() => handleClick('/')}>
                /
              </button>
            </div>
            <div className="col">
              <button className="btn btn-info w-100 text-light" onClick={() => handleClick('*')}>
                x
              </button>
            </div>
          </div>
          <div className="row g-2">
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('7')}>
                7
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('8')}>
                8
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('9')}>
                9
              </button>
            </div>
            <div className="col">
              <button className="btn btn-info w-100 text-light" onClick={() => handleClick('-')}>
                -
              </button>
            </div>
          </div>
          <div className="row g-2">
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('4')}>
                4
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('5')}>
                5
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('6')}>
                6
              </button>
            </div>
            <div className="col">
              <button className="btn btn-info w-100 text-light" onClick={() => handleClick('+')}>
                +
              </button>
            </div>
          </div>
          <div className="row g-2">
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('1')}>
                1
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('2')}>
                2
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('3')}>
                3
              </button>
            </div>
            <div className="col">
              <button className="btn btn-info w-100 text-light" onClick={() => calculateResult('=')}>
                =
              </button>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-6">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('0')}>
                0
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-secondary w-100" onClick={() => handleClick('.')}>
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
