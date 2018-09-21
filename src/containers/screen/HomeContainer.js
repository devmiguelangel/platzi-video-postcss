import React, { Component } from 'react';
import LayoutComponent from './../../components/screen/LayoutComponent';
import CategoryListComponent from './../../components/category/ListComponent';


export default class Home extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <LayoutComponent>
        <CategoryListComponent data={data} />
      </LayoutComponent>
    )
  }
}
