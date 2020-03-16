import React from 'react';
//import {Column, List} from 'react-virtualized';
import { AutoSizer,Table,List} from 'react-virtualized';
import 'react-virtualized/styles.css';

const list=[
    {name:'Brain Vaughn', description: "software engineer"},
    {name:'Brain Vaughn', description: "software engineer"},
    {name:'Rashi ji', description: "software engineer"},
    {name:'React Virtualize', description: "software engineer"}
];



class Virtualized extends React.Component{

    myRows = (index) => {
        return(
            <div key={index.index} style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    {List[index.index].name}
                </div>
                <div style={{marginLeft: 40}}>
                    {List[index.index].description}
                </div>
                </div>
        );
    }

    render(){
        return(
            <div>
                <h1>
                    React Virtualize Example.
                </h1>
                <div>
                <AutoSizer>
                   {({height, width}) => (
                    <Table>
                        height={height}
                        width={width}
                        rowCount={list.length}
                        rowHeight={20}
                        rowRenderer={index => this.myRows(index)}
                       <Table/>
                        )}
                 </AutoSizer>,
                    
                </div>

            </div>
 
        );
 }
}


export default Virtualized;