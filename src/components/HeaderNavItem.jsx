import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavItemObj from '../data/NavItemObj';

const HeaderNavItem = () => {

    const NavItems = NavItemObj.items.map(item => {
        return (
            <div className="nav-item" key={item.id} id={item.id}>
                <Link to='#'>{item.word}</Link>
            </div>
        )
    })

    return (
        <Fragment>
            {NavItems}
        </Fragment>
    )
}

export default HeaderNavItem;

/*

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
//             <Link to='#'>{word}</Link>
//         </div>
//     );
// })

// const MyNavItem = navItemId.navItemIds.map(navItemId => {
//     return (
//         <div className="nav-item" id={navItemId}>
//             <Link to='#'>{word}</Link>
//         </div>
//     )
// })

// console.log(Object.keys(navItemId.navItemIds).length);
// const navItemIdsLength = Object.keys(navItemId.navItemIds).length

//-------------------------------------------------------------------

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
//             <Link to='#'>{word}</Link>
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

//-------------------------------------------------------------------

// const navItem = {
//     "words": [
//         "홈",
//         "시리즈",
//         "영화",
//         "NEW! 요즘 대세 콘텐츠",
//         "내가 찜한 콘텐츠"
//     ],
//     "ids" : [
//         "home",
//         "series",
//         "movie",
//         "trend",
//         "like"
//     ]
// }

// const MyNavItem = () => {

//     let result = [];

//     for(let i = 0; i < navItem.words.length; i++) {
//         result[i] = (
//             <div className="nav-item" id={navItem.words[i]}>
//                 <Link to='#'>{navItem.ids[i]}</Link>
//             </div>
//         )
//     }

//     return (
//         result
//     )
// }

// export default function HeaderNavItem() {

//     return (
//         <Fragment>
//             {MyNavItem}
//         </Fragment>
//     )
// }

//-------------------------------------------------------------------

// function NavItemList (navItems) {
//     return (
//         const {words, ids} = navItems
//         {navItems.map(navItem) => 
//             return (
//                 <HeaderNavItem
//                     words={words}
//                     ids={ids}
//                 />
//             );
//         }
//     )
// }

//

// function MyNavItems () {

//     const navItems = {
//         "words": [
//             "홈",
//             "시리즈",
//             "영화",
//             "NEW! 요즘 대세 콘텐츠",
//             "내가 찜한 콘텐츠"
//         ],
//         "ids" : [
//             "home",
//             "series",
//             "movie",
//             "trend",
//             "like"
//         ]
//     }

//     return (
//         {navItems.map(navItems) => {
//                 return (
//                     <HeaderNavItem
//                         words={words}
//                         ids={ids}
//                     />
//                 );
//             }
//         }
//     )
// }

//

// const navItems = {
//     "words": [
//         "홈",
//         "시리즈",
//         "영화",
//         "NEW! 요즘 대세 콘텐츠",
//         "내가 찜한 콘텐츠"
//     ],
//     "ids": [
//         "home",
//         "series",
//         "movie",
//         "trend",
//         "like"
//     ]
// }

// const MyNavItems = (data) => data.map((Item) => {
//     const { words, ids } = Item;
//     return (
//         <div className="nav-item" id={ids}>
//             <Link to='#'>{words}</Link>
//         </div>
//     )
// })

// export default function HeaderNavItem() {

//     return (
//         <Fragment>
//             {MyNavItems(navItems)}
//         </Fragment>
//     )
// }

//

// const navItems = {
//     items : [
//         {
//             "words": [
//                 "홈",
//                 "시리즈",
//                 "영화",
//                 "NEW! 요즘 대세 콘텐츠",
//                 "내가 찜한 콘텐츠"
//             ],
//             "ids": [
//                 "home",
//                 "series",
//                 "movie",
//                 "trend",
//                 "like"
//             ]
//         }
//     ]
// }

// const MyNavItems = (data) => data.map((items) => {
//     const { words, ids } = items;
//     return (
//         <div className="nav-item" id={ids}>
//             <Link to='#'>{words}</Link>
//         </div>
//     )
// })

// export default function HeaderNavItem() {

//     return (
//         <Fragment>
//             {MyNavItems(navItems.items)}
//         </Fragment>
//     )
// }
// //이렇게하면 id랑 word에 각각 한번에 주르륵 주르륵 들어감
//

// const navItems = 
// {
//     "words": [
//         "홈",
//         "시리즈",
//         "영화",
//         "NEW! 요즘 대세 콘텐츠",
//         "내가 찜한 콘텐츠"
//     ],
//     "ids": [
//         "home",
//         "series",
//         "movie",
//         "trend",
//         "like"
//     ]
// }

// // const Words = navItems.words.map(word => {
// //     return (
// //         <Link to='#'>{word}</Link>
// //     );
// // })

// // const Ids = navItems.ids.map(id => {
// //     return (
// //         <div className="nav-item" id={id}>
// //         </div>
// //     )
// // })

// const NavItems = navItems.map((word, id) => {
//     return (
//         <div className="nav-item" id={id}>
//             <Link to='#'>{word}</Link>
//         </div>
//     )
// })

// export default function HeaderNavItem() {

//     return (
//         <Fragment>
//             {NavItems}
//         </Fragment>
//     )
// }

//

*/