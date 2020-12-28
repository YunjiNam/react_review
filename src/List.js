 import React, { useState} from 'react';
 import "./List.scss";
import useInfiniteScroll from './useInfiniteScroll';

 const List = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    //const [isFetching, setIsFetching] = useState(false);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // useEffect(() => {
    //     if(!isFetching) return;
    //     fetchMoreListItems();
    // },[isFetching]);

    // function handleScroll() {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     setIsFetching(true);
    //     console.log('Fetch more list items!');
    // }

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
            setIsFetching(false);
        }, 2000);
    }


    return (
        <div className="list-wrap">
            <ul className="list-group">
                {listItems.map(listItem => <li className={"list-group-item" + (listItem === listItems.length ? " last" : "")} key={listItem}>List Item {listItem}</li>)}
            </ul>
            {isFetching && 'Fetching more list items...'}
        </div>
    );

 }

 export default List;