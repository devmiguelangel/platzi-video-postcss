import React, { Component } from 'react';
import LayoutComponent from './../../components/screen/LayoutComponent';
import RelatedComponent from './../../components/screen/RelatedComponent';
import CategoryListComponent from './../../components/category/ListComponent';


export default class Home extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <LayoutComponent>
        <RelatedComponent />
        <CategoryListComponent data={data} />
      </LayoutComponent>
    )
  }
}
