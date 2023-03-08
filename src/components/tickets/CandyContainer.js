import { useState } from 'react'
import { CandySearch } from './CandySearch'
import { CandyList } from './CandyList'

export const CandyContainer = () => {
    const [searchValue, setSearchTerms] = useState('')

    return <>
        <CandySearch setterFunction={setSearchTerms} />
        <CandyList searchTermState={searchValue} />
    </>
}