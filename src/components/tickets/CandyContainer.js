import { useState } from 'react'
import { CandySearch } from './CandySearch'
import { CandyList } from './CandyList'

export const CandyContainer = () => {
    const [searchTerms, setSearchTerms] = useState('')

    return <>
        <CandySearch setterFunction={setSearchTerms} />
        <CandyList searchTermState={searchTerms} />
    </>
}