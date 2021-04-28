import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div styles={{ padding: "0 10%", textAlign: "center" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Business " : "House "}
      for {isIncome ? "Monday " : "Thursday "}
    </div>
  );
};

export default InfoCard;
