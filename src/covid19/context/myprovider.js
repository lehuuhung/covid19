import React from 'react';
import MyContext from './mycontext';
import {api} from '../component/service/api';

class MyProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            virus: [],
        }
    }
    setStateAsync = (state) =>{
        return new Promise((resolve) =>{
            this.setState(state,resolve);
        });    
         // promise sinh ra để xử lys các thao tác bất đồng bộ  promise đc sinh ra trong ES6
        // trong promise có chứa funtion
        // promise((resolve,reject)=>{})
        // nếu trả về resolve() là success
        // còn reject() là thất bại  tương ứng 

        // sẽ trả về 
        // .then(function(){
        //     //trả về khi có resolve
        // })
        // .cacth(funtion(){
        //     //trả về khi reject
        // })
        // .finnally(function(){
        //     trả về done kể cả vào then hay cacth
        // }) 
   
    }

    // componentDidMount chạy sau render khi giao diện dựng xong 
   async componentDidMount(){
    // caapj nhat state loading
    // this.setState là hàm xủ lý bất đồng bộ 
   await this.setStateAsync({loading:true});
   //đợi lấy dữ liệu từ api về
   const data = await api.getDataVirusCorona();
   await this.setStateAsync({
       ...this.state,
       loading:false,
       virus:data
   })
    }
    render() {
        return ( 
            <>
                <MyContext.Provider value={this.state}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        );
    }
}
export default MyProvider;
