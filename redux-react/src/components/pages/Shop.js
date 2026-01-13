import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state';

export default function User(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.withdrawMoney(500))}>
          -
        </button>
        Update balance
        <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.depositMoney(500))}>
          +
        </button>
      </div>
    </div>
  );
}
