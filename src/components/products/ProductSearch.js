export const ProductSearch = ({ setValue }) => {
    return (
        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setValue(changeEvent.target.value)
                    }
                }
                type='text' placeholder='Search Products' />
                </div>
            
       
    )
}