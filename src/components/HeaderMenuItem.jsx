import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import MenuItemsObj from '../data/MenuItemsObj';

const HeaderMenuItem = () => {

    const MenuItems = MenuItemsObj.menuItems.map(menuItem => {
        return (
            <Fragment>
                {menuItem.id === "menu-open" ? 
                    <div className="menu-item" key={menuItem.id}>
                        <Link to="#">
                            <img src={process.env.PUBLIC_URL + "/resources/토끼.png"} alt="토끼" className="rabbit" />
                            <div className={menuItem.divClassName}>
                                <i className={menuItem.iClassName}/>
                            </div>
                        </Link>
                    </div>
                :
                    <div className="menu-item" key={menuItem.id + "u"}>
                        <Link to="#"><i className={menuItem.iClassName}/></Link>
                    </div>
                }
            </Fragment>
        )
    })

    return (
        <Fragment>
            {MenuItems}
        </Fragment>
    )
}

export default HeaderMenuItem;