import { useEffect } from 'react';

function Enfant({ callback }) {


    useEffect(() => {
        console.log('enfant rerender');
    }, [callback])

    return (
        <div>
            ENFANT
        </div>
    );
}

export default Enfant;