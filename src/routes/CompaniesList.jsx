import { Avatar, Col, Collapse, Row, Typography } from "antd";
import millify from "millify";
import React from "react";
import { useGetCompanyCoinsQuery } from "../services/cryptoCoinsApi";

const { Panel } = Collapse;
const { Text } = Typography;

export function CompaniesList() {
  const { data, error, isLoading } = useGetCompanyCoinsQuery("");
  console.log(data);
  if (isLoading) return null;
  return (
    <>
      <Row>
        <Col span={5}>Exchanges</Col>
        <Col span={5}>Total Bitcoin</Col>
        <Col span={5}>Entry Value</Col>
        <Col span={5}>Current Value</Col>
        <Col span={4}>Market Share</Col>
      </Row>
      <Row>
        {data.companies.map((exchange, i) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={i}
                showArrow={false}
                header={
                  <Row key={i}>
                    <Col span={5}>
                      <Text>
                        <strong>{i + 1}. </strong>
                      </Text>
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col className="exchangeSpan" span={5}>
                      ${millify(exchange.total_holdings)}
                    </Col>
                    <Col className="exchangeSpan" span={5}>
                      {millify(exchange.total_entry_value_usd)}
                    </Col>
                    <Col className="exchangeSpan" span={5}>
                      {millify(exchange.total_current_value_usd)}
                    </Col>
                    <Col className="exchangeSpan" span={4}>
                      {exchange.percentage_of_total_supply}%
                    </Col>
                  </Row>
                }
              ></Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
}
