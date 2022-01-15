import React, {useState} from 'react';

const Tour = ({id, name, info, price, image, removeTicket}) => {

    const [readMore, setReadMore] = useState(false)

    const readMoreFun = () =>{
        setReadMore(!readMore)
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                    <p>
                        {readMore? info : `${info.substring(0,200)}...`}
                        <button onClick={readMoreFun}>{readMore?'Show Less':'Read More'}</button>
                    </p>
                <button className="delete-btn" onClick={()=>removeTicket(id)}>Clear</button>
            </footer>
        </article>
    );
};

export default Tour;