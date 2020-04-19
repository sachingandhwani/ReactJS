import React from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import DataTableComponent from './DataTableComponent';


function IssueComponent() {
  return (
   <div id="issueContainer">
        <HeaderComponent></HeaderComponent>

        <SearchComponent></SearchComponent>
        
        <div id="data-table" width="800" style={{marginTop:'50px'}}>
           <DataTableComponent></DataTableComponent>
        </div>
   </div>
  );
}

export default IssueComponent;
