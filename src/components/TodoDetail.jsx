import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetail(props) {
    const { key } = useParams();
    const deed = props.getDeed(key);

    return (
        <section>
            {deed.done &&
                <p className='has-text-succes'>Выполнено</p>
            }
            <h1>{deed.title}</h1>
            <p>{deed.createAdd}</p>
            {deed.desc && <p>{deed.desc}</p>}
            {deed.image && <p><img src={deed.imsage} alt='Иллюстрация' /></p>}
        </section>
    );
}

export default TodoDetail;
