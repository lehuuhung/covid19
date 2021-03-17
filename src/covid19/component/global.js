import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import MyContext from '../context/mycontext';

class Global extends React.Component {
    render() {

        return (
            <MyContext.Consumer>
                {context => {
                    // console.log(context);
                    if (context.loading || context.virus.Global === undefined) {
                        return (
                            <h1><Skeleton active /></h1>
                        )
                    }
                    return (
                        < Row >
                            <Col span={8}>
                                <Card title="Mac benh" bordered={true} >
                                    <p>Số ca mới nhiem : {context.virus.Global.NewConfirmed}</p>
                                    <p>Tổng số ca bị nhiễm {context.virus.Global.TotalDeaths}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Tu Vong" bordered={true}>
                                    <p>Số ca mới chet : {context.virus.Global.NewDeaths}</p>
                                    <p>Tổng số ca bị chet {context.virus.Global.TotalDeaths}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Khoi Benh" bordered={true}>
                                    <p>Số ca khoi benh : {context.virus.Global.NewRecovered}</p>
                                    <p>Tổng số ca khoi benh {context.virus.Global.TotalRecovered}</p>
                                </Card>
                            </Col>
                        </Row >
                    )
                }}

            </MyContext.Consumer>

        );
    }

}
export default Global;