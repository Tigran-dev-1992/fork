import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { errorSelector, loadingSelector } from '../../Selectors/devSelectors'
import Error from '../Error'
import Preloder from '../PreLoader/Preloader'
import SearchFormContainer from './SearchFormContainer'
import Aos from 'aos'
import 'aos/dist/aos.css';



const MainPage = () => {
    useEffect(() => { Aos.init({ duration: 1500 }) }, [])
    const loading = useSelector(loadingSelector)
    const error = useSelector(errorSelector)
    return (
        <div className="mainPage text-center " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
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