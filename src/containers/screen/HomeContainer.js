import React, { Component } from 'react';
import LayoutComponent from './../../components/screen/LayoutComponent';
import RelatedComponent from './../../components/screen/RelatedComponent';
import CategoryListComponent from './../../components/category/ListComponent';
import ModalContainer from './../widgets/ModalContainer';
import ModalComponent from './../../components/widgets/ModalComponent';
import ErrorContainer from './../error/ErrorContainer';


export default class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleVisibleModal = (event, visible) => {
    this.setState({
      modalVisible: visible
    })
  }

  render() {
    const { modalVisible } = this.state;
    const { data } = this.props;
    
    return (
      <ErrorContainer>
        <LayoutComponent>
          <RelatedComponent />
          <CategoryListComponent
            data={data}
            handleVisibleModal={this.handleVisibleModal}
          />
          <ModalContainer>
            {
              modalVisible && (
                <ModalComponent
                  handleVisibleModal={this.handleVisibleModal}
                >
                  <h1>Portal Test!!!</h1>
                </ModalComponent>
              )
            }
          </ModalContainer>
        </LayoutComponent>
      </ErrorContainer>
    )
  }
}
