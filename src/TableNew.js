import React from 'react';
import {Column,Table} from 'react-virtualized';
import {SelectionControl} from 'react-md';

class TableNew extends React.Component{

    render(){
        const data = [{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'}, { id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'},{ id: 1, name: "Harshendra", description: "Code Simple", job: 'Developer', department: 'IT'} ]
        return(
            <div style={{overflow: 'hidden'}}>
                <Table
                    width={1100}
                    height={600}
                    headerHeight={20}
                    rowHeight={30}
                    rowCount={data.length}
                    rowGetter={({index}) => data[index]}
                >

                <Column
                    width={200}
                    dataKey="name"
                    label="Select Developer"
                    cellRenderer={({ rowData, rowIndex }) => {
                  
                        return (
                            <div>
                                <SelectionControl
                                    onChange={e => console.log(e)}
                                    id={rowIndex}
                                    name={rowIndex}
                                    aria-label="Select Row"
                                    type="checkbox"
                                />
                            </div>
                        );
                    }}
                />

                    <Column label="Id" dataKey="id" width={200} />
                    <Column label="Name" dataKey="name" width={100} />
                    <Column label="Job" dataKey="job" width={200} />
                    <Column label="Department" dataKey="department" width={200} />
                    <Column label="Description" dataKey="description" width={200} />

                </Table>
            </div>
            
        )
    }
}

export default TableNew;
        
    
        

    

