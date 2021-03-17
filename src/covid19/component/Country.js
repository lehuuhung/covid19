import React from 'react';
import { Table,Skeleton  } from 'antd';
import MyContext from '../context/mycontext';

const ListCountries = () => {
    // const dataSource = [];
    const columns = [
        {
            title: "STT",
            dataIndex: "ID",
            key: "ID"
        },
        {
            title: "Quốc gia",
            dataIndex: 'Country',
            key: 'Country',
        },
        {
            title: "Mã QG",
            dataIndex: 'CountryCode',
            key: 'CountryCode',
        },
        {
            title: "Mới nhiễm",
            dataIndex: 'NewConfirmed',
            key: 'NewConfirmed',
        },
        {
            title: "Tổng nhiễm",
            dataIndex: 'TotalConfirmed',
            key: 'TotalConfirmed',
        },
        {
            title: "Tử Vong",
            dataIndex: 'NewDeaths',
            key: 'NewDeaths',
        },
        {
            title: "Tổng TV",
            dataIndex: 'TotalDeaths',
            key: 'TotalDeaths',
        },
        {
            title: "Khỏi bệnh",
            dataIndex: 'NewRecovered',
            key: 'NewRecovered',
        },
        {
            title: "Tổng Khỏi bệnh",
            dataIndex: 'TotalRecovered',
            key: 'TotalRecovered',
        }
    ];
    return (
        <MyContext.Consumer>
            {context =>{
                if  (context.loading || context.virus.Countries === undefined){
                    return (<Skeleton active />)
                }
                return(<Table dataSource={context.virus.Countries} columns={columns} rowKey="CountryCode"
                Pagination ={{defaultPageSize:50,showSizeChanger:true, pageSizeOptions:['10','20','30']}}   />)
            }}
           
        </MyContext.Consumer>
       
    )
}
export default ListCountries;