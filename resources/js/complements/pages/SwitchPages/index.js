import React, {useEffect} from 'react'
import Home from '../Home'
import Create from '../Create'
import Edit from '../Edit'
import {useLocation} from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SwitchPages = () => {
    const query = useQuery()

    return (
        <>
            {
                !query.get('a') && <Home query={query} />
            }

            {
                query.get('a') === '1' && <Create query={query} />
            }

            {
                query.get('a') === '2' && <Edit query={query} />
            }
        </>
    )
}

export default SwitchPages
