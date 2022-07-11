import React, { Fragment } from 'react'

const MenuItemsObj = {
    "menuItems" : [
        {
            "id" : "menu-search"
            ,"iClassName" : "fa-solid fa-magnifying-glass"
        },
        {
            "id" : "menu-alert"
            ,"iClassName" : "fa-solid fa-bell"
        },
        {
            "id" : "menu-open"
            ,"iClassName" : "fa-solid fa-caret-down"
            ,"img" : <img src={process.env.PUBLIC_URL + "/resources/토끼.png"} alt="토끼" className="rabbit" />
            ,"divClassName" : "menu-open-icon"
        }
    ]
}

const MenuItems = MenuItemsObj.menuItems.map(menuItem => {
    return (
        <Fragment>
            {menuItem.id === "menu-open" ? 
                <div className="menu-item" key={menuItem.id}>
                    <a href="#">
                        {menuItem.img}
                        <div className={menuItem.divClassName}>
                            <i className={menuItem.iClassName}/>
                        </div>
                    </a>
                </div>
            :
                <div className="menu-item" key={menuItem.id}>
                    <a href="#"><i className={menuItem.iClassName}/></a>
                </div>
            }
        </Fragment>
    )
})

export default function HeaderMenuItem() {
    return (
        <Fragment>
            {MenuItems}
        </Fragment>
    )
}