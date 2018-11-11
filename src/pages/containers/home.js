import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import RelatedLayout from '../components/related-layout';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <RelatedLayout />
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home;