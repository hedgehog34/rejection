import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


// Shallow test of <App /> only
it('renders without crashing', () => {
    shallow(<App />);
});

// Shallow test of <App /> only
it('fully renders without crashing', () => {
    mount(<App />);
});