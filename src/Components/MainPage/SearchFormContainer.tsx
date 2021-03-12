import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from 'redux-form'
import { getDevelopers, getTotalCount } from '../../redux/dev-reducer'
import SearchForm, { FormDataType } from './SearchForm'




const SearchFormContainer  = () => {
    const dispatch = useDispatch()
    const formSubmit = (value: FormDataType) => {
        dispatch(getDevelopers(value.owner, value.repo, 1, 1))
        dispatch(getTotalCount(value.owner, value.repo))
        dispatch(reset("search"))

    }
    return (
        <div >
            <SearchForm onSubmit={formSubmit} />
        </div>
    )
}


export default SearchFormContainer