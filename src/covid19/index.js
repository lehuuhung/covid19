import React, { Component } from 'react';
import LayoutPage from './component/layout';
import Global from './component/global';
import Country from './component/Country'
import MyProvider from './context/myprovider';
class Index extends Component {
    render() {
        return (
            <MyProvider>
                <LayoutPage>
                    <Global />
                    <Country />
                </LayoutPage>
            </MyProvider>
        );
    }
}

export default Index;
