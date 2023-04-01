import React from 'react';
import { Container, Row, Col } from './styles';

import BarChart from "../BarChart";
import PieChart from "../PieChart";
import InsuranceChart from "../BarChart/InsuranceChart";
import InvestmentChart from "../BarChart/InvestmentChart";
import MutualFundChart from "../BarChart/MutualFundChart";
import TransactionChart from "../BarChart/TransactionChart";


import { bar, pie } from "../../data";
import { Insurancebar, Investmentbar, MutualFundbar, Transactionbar } from "../../data";

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
