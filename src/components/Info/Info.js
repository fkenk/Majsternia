/**
 * Created by BusinessPC on 5/27/2017.
 */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Info.css';
import Link from '../Link';
import classNames from 'classnames';
import logo from '../Header/Group.svg';

class Info extends React.Component {
    render() {

        return (
            <div className={s.container}>
                    <div className={s.header}>
                        {
                            this.props.hasImage && <img src={logo} alt="Here is logo"></img>
                        }
                        <div className={s.text}>
                            <h3 className={s.text__header} >{this.props.textHeader}</h3>
                            <div className={s.text__contacts}>
                                <span className={s.text__phone}>+38 066 445 59 00</span>
                                <span className={s.text__street}>м. Мукачево, вул. Переяславська, 1</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.footer}>
                        <p><Link className={classNames(s.link)} to="/">Каталог продукції</Link></p>
                        <p><Link className={s.link} to="/">Про нас</Link></p>
                        <p><Link className={s.link} to="/">Наші роботи</Link></p>
                    </div>
                </div>
        );
    }
}

export default withStyles(s)(Info);
