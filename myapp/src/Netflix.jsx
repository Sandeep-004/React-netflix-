import React from 'react';
import Cards from './Cards';
import collection from './Divs';


function netflix() {

return(

    <>

    <h1 className="heading">List Of top 3 netflix series in 2020</h1>

    <Cards
    key = {collection[0].id}
    imgsrc={collection[0].Divimgsrc}
    title={collection[0].Divtitle}
    sname={collection[0].Divsname}
    link={collection[0].Divlink}
    />,

    <Cards
    key = {collection[1].id}
    imgsrc={collection[1].Divimgsrc}
    title={collection[1].Divtitle}
    sname={collection[1].Divsname}
    link={collection[1].Divlink}
    />,

    
    <Cards
    key = {collection[2].id}
    imgsrc={collection[2].Divimgsrc}
    title={collection[2].Divtitle}
    sname={collection[2].Divsname}
    link={collection[2].Divlink}
    />
    </>
    )
}
export default netflix; 