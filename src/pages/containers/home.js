import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import RelatedLayout from '../components/related-layout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <RelatedLayout />
          <VideoPlayer />
          <Categories 
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <h1>Modal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;