import React from 'react';
import Cards from './Cards';
import collection from './Divs';


function Amazon() {

return(
<>
<h1 className="heading">List Of top 3 amazon series in 2020</h1>

    <Cards
    key = {collection[3].id}
    imgsrc={collection[3].Divimgsrc}
    title={collection[3].Divtitle}
    sname={collection[3].Divsname}
    link={collection[3].Divlink}
    />,

<Cards
    key = {collection[4].id}
    imgsrc={collection[4].Divimgsrc}
    title={collection[4].Divtitle}
    sname={collection[4].Divsname}
    link={collection[4].Divlink}
    />,

<Cards
    key = {collection[5].id}
    imgsrc={collection[5].Divimgsrc}
    title={collection[5].Divtitle}
    sname={collection[5].Divsname}
    link={collection[5].Divlink}
    />

</>
    )

    
}
export default Amazon; 