import React from 'react';
import { Container, Row, Col } from './styles';

import BarChart from "../BarChart";
import PieChart from "../PieChart";
import InsuranceChart from "../BarChart/InsuranceChart";
import InvestmentChart from "../BarChart/InvestmentChart";
import MutualFundChart from "../BarChart/MutualFundChart";
import TransactionChart from "../BarChart/TransactionChart";
import TransactionTable  from "./transactionTable";

import { bar, pie } from "../../data";
import { Insurancebar, Investmentbar, MutualFundbar, Transactionbar } from "../../data";

const transactionTableData = [
  { Date: "2022-01-01", Time: "12:05", Type: "Opening", Description: "Opening Balance", Debit: "0", Credit: "0", Balance: '5000' },
  { Date: "2022-01-05", Time: "12:05", Type: "Investment", Description: "Deposit", Debit: "0", Credit: "2000", Balance: '7000' },
  { Date: "2022-01-10", Time: "13:14", Type: "Transaction", Description: "Withdrawal", Debit: "500", Credit: "0", Balance: '6500' },
  { Date: "2022-01-15", Time: "12:05", Type: "Transaction", Description: "Transfer to John Smith", Debit: "1000", Credit: "0", Balance: '5500' },
  { Date: "2022-01-20", Time: "12:05", Type: "Return", Description: "Interest earned", Debit: "0", Credit: "50", Balance: '5550' },
  { Date: "2022-01-25", Time: "12:05", Type: "Transaction", Description: "ATM withdrawal", Debit: "200", Credit: "50", Balance: '5350' },
  { Date: "2022-01-31", Time: "12:05", Type: "Transaction", Description: "Monthly maintenance fee", Debit: "10", Credit: "50", Balance: '5540' },
];


function DataViz() {
  return (
    <Container fluid>
    <h1>Customer Details Overview</h1>
    <Row debug>
      <Col debug>  
        <BarChart data={bar}/>
      </Col>
      <Col debug>
        <PieChart data={pie}/>
      </Col>
    </Row>

    <h1>Mutual Funds</h1>
    <Row debug>
      <Col debug>  
        <MutualFundChart data={ MutualFundbar }/>
      </Col>
      {/* <Col debug> 
        <PieChart data={pie}/>
      </Col> */}
    </Row>

    <h1>Insurance</h1>
    <Row debug>
      <Col debug>
        <InsuranceChart data={ Insurancebar }/>
      </Col>
    </Row>

    <h1>Transactions</h1>
    <Row debug>
      <Col debug>
        <TransactionChart data={ Transactionbar }/>
      </Col>
      <Col debug>
      <h1>My Transactions</h1>
        <TransactionTable data={ transactionTableData } />
      </Col>
    </Row>

    <h1>Investments</h1>
    <Row debug>
      <Col debug>
        <InvestmentChart data={ Investmentbar }/>
      </Col>
    </Row>

  </Container>
  )
}

export default DataViz
