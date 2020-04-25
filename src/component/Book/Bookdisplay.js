import React from 'react'

export default function Bookdisplay(props){
    const id=props.match.params.id;
    return(
        <div className='container section Book-detail'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Book titile -{id}</span>
                    <p>dasdasdasdasdsadasdasds</p>
                </div>
            </div>
            <div className='card-actions grey lighten-4 grey-text'>
                <div>Posted</div>
                <div>2020.01.01</div>
            </div>
        </div>
    )
}