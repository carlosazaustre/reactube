import React from 'react';
import { render } from 'react-dom';

import data from './src/api.json';
import PlayList from './src/playlist/components/playlist';

const app = document.getElementById('app');
render(<PlayList data={data} />, app)