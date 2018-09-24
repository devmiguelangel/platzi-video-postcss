import React, { Component } from 'react';
import LayoutComponent from './../../components/screen/LayoutComponent';
import RelatedComponent from './../../components/screen/RelatedComponent';
import CategoryListComponent from './../../components/category/ListComponent';
import ModalContainer from './../widgets/ModalContainer';


export default class Home extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <LayoutComponent>
        <RelatedComponent />
        <CategoryListComponent data={data} />
        <ModalContainer>
          <h1>Portal Test!!!</h1>
        </ModalContainer>
      </LayoutComponent>
    )
  }
}
