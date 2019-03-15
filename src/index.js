import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './component/navigation-bar';
import AddressBook from './component/address-book';
import './index.css';

const links = [
    {
        text: 'Courses',
        href: 'http://www.thinkful.com/courses/'
    },
    {
        text: 'Mentorship',
        href: 'http://www.thinkful.com/mentorship/'
    }
]

ReactDOM.render(
    <div>
        <NavigationBar title="Thinkful" links={links} />
        <AddressBook/>
    </div>, 
    document.getElementById('root')
    );

