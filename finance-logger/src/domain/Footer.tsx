import React from "react";

export const Footer = () => {
  return(
    <div>
     <footer>
      <form className="new-item-form">
        <div className="field">
          <label>Type:</label>
          <select id="type">
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label>To / From:</label>
          <input
            type="text"
            id="tofrom"
            />
        </div>
        <div className="field">
          <label>Details:</label>
            <input
            type="text"
            id="details"
            />
        </div>
        <div className="field">
          <label>Amount (£):</label>
          <input
          type="number"
          id="amount"
          />
        </div>
        <button>Add</button>
      </form>
    </footer>
    </div>
  )
};
