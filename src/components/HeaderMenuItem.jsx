import React, { Fragment } from 'react'

const Items = {
    "items" : [
        {
            "id" : "search"
            ,"iClassName" : "fa-solid fa-magnifying-glass"
        },
        {
            "id" : "alert"
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

const MenuItems = Items.items.map(item => {
    return (
        <Fragment>
            {item.id === "menu-open" ? 
                <div className="menu-item" key={item.id}>
                    <a href="#">
                        {item.img}
                        <div className={item.divClassName}>
                            <i className={item.iClassName} />
                        </div>
                    </a>
                </div>
            :
                <div className="menu-item" key={item.id}>
                    <a href="#"><i className={item.iClassName} /></a>
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