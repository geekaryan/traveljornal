import React from 'react';
import NavBar from './component/NavBar'
import Main from './component/Main';
import data from './component/Data';
import Footer from './component/Footer';


export default function App(){
    const cards = data.map(item => {
        return(
            <Main 
            img={item.img}
            location={item.location}
            title={item.title}
            start={item.start}
            end={item.end}
            description={item.description}
            />
        )
    })


    return(
        <div>
        <NavBar />
        {cards}
        <Footer />
        </div>
    )
}