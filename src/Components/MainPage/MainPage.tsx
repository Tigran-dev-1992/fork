import React from 'react'
import { useSelector } from 'react-redux'
import { errorSelector, loadingSelector } from '../../Selectors/devSelectors'
import Error from '../Error'
import Preloder from '../PreLoader/Preloader'
import SearchFormContainer from './SearchFormContainer'


const MainPage = () => {
    const loading = useSelector(loadingSelector)
    const error = useSelector(errorSelector)
    return (
        <div className="mainPage text-center">
            <div className="mainPage__info">
                hello!!! it`s small app for find some forks
            </div>
            <SearchFormContainer />
            {error
            ?<Error/>
            : loading
                ? <Preloder />
                : <div className="main__result">
                    Check result in developers page!!!
                   </div>
            
        }  
        </div>

    )
}

export default MainPage