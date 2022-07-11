import React, { Fragment } from 'react'
import '../css/Browse.css'

// const navItemWord = {
//     "navItemWords": [
//         "홈",
//         "시리즈",
//         "영화",
//         "NEW! 요즘 대세 콘텐츠",
//         "내가 찜한 콘텐츠"
//     ]
// }

// const navItemId = {
//     "navItemIds" : [
//         "home",
//         "series",
//         "movie",
//         "trend",
//         "like"
//     ]
// }


// const MyNavItemWord = navItemWord.navItemWords.map(word => {
//     return (
//         <div>
//             <a href='#'>{word}</a>
//         </div>
//     );
// })

// const MyNavItem = navItemId.navItemIds.map(navItemId => {
//     return (
//         <div className="nav-item" id={navItemId}>
//             <a href='#'>{word}</a>
//         </div>
//     )
// })

// console.log(Object.keys(navItemId.navItemIds).length);
// const navItemIdsLength = Object.keys(navItemId.navItemIds).length

//

const navItem = {
    "words": [
        "홈",
        "시리즈",
        "영화",
        "NEW! 요즘 대세 콘텐츠",
        "내가 찜한 콘텐츠"
    ],
    "ids" : [
        "home",
        "series",
        "movie",
        "trend",
        "like"
    ]
}

const MyNavItem = () => {

    let result = [];

    for(let i = 0; i < navItem.words.length; i++) {
        result[i] = (
            <div className="nav-item" id={navItem.words[i]}>
                <a href='#'>{navItem.ids[i]}</a>
            </div>
        )
    }

    return (
        result
    )
}

export default function HeaderNavItem() {

    return (
        <Fragment>
            {MyNavItem}
        </Fragment>
    )
}

//

// const navItemWord = {
//     "navItemWords": [
//         "홈",
//         "시리즈",
//         "영화",
//         "NEW! 요즘 대세 콘텐츠",
//         "내가 찜한 콘텐츠"
//     ]
// }

// const MyNavItemWord = navItemWord.navItemWords.map(word => {
//     return (
//         <div>
//             <a href='#'>{word}</a>
//         </div>
//     );
// })

// export default function HeaderNavItem() {

//     return (
//         <Fragment>
//             {MyNavItemWord}
//         </Fragment>
//     )
// }