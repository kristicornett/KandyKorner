import { useState } from 'react'
import { ProductList } from './ProductList'
import { ProductSearch } from './ProductSearch'

export const ProductContainer = () => {
    const [searchValue, setSearchValue] = useState('')

    return <>
        <ProductSearch setValue={setSearchValue} />
        <ProductList searchValue={searchValue} />
    </>
}