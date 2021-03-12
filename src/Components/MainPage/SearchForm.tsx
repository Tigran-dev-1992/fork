import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export type FormDataType = {
    owner: string
    repo: string
}
type PropsType = {}

const Form: React.FC<InjectedFormProps<FormDataType, PropsType>> = ({ handleSubmit }) => {
    return (
        <div className="text-center form pt-4" >
            <div className="form__info">Serch Form</div>
            <form onSubmit={handleSubmit}>
                <Field name="owner" component="input" type="text" className="form-control " placeholder="Enter owner name" />
                <Field name="repo" component="input" type="text" className="form-control" placeholder="Enter repository name" />
                <button className="btn btn-primary btn-lg" >Button</button>
            </form>
        </div>
    )
}
const SearchForm = reduxForm<FormDataType, PropsType>({ form: 'search' })(Form)

export default SearchForm