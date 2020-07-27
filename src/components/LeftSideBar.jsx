import React from 'react';
import Ribbon from '../images/BIGBANG.png';

const LeftSideBar = () => (
    <div className="left-sidebar left-sidebar--visible">
        <div className="left-sidebar__toolbar">
           <img src={Ribbon}/>
        </div>

        <a
            href="/"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '' && 'sidebar-navigation-item--active')
            }
        >
            Dos and Don'ts
        </a>

        <a
            href="/?page=traffic-lights"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights' && 'sidebar-navigation-item--active')
            }
        >
            COVID 19
        </a>

        <a
            href="/?page=traffic-lights-controlled-btns"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-controlled-btns' && 'sidebar-navigation-item--active')
            }
        >
            Essentials
        </a>

        <a
            href="/?page=traffic-lights-controlled-auto"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-controlled-auto' && 'sidebar-navigation-item--active')
            }
        >
            Punctuality
        </a>



        <a
            href="/?page=inputs"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=inputs' && 'sidebar-navigation-item--active')
            }
        >
            Tipping
        </a>


        <a
            href="/?page=address-book"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
            }
        >
            Safety
        </a>

        <a
            href="/?page=address-book"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
            }
        >
            Communication
        </a>

        <a
            href="/?page=address-book"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
            }
        >
            Dating
        </a>
    </div>
);

export default LeftSideBar;
