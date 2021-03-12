import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { totalCountSelector, pageSizeSelector, porcionSizeSelector, porceNumberSelector, currentPageSelector, repoSelector, ownerSelector, developersSelector, errorSelector, loadingSelector } from '../../Selectors/devSelectors'
import Error from '../Error'
import MainPage from '../MainPage/MainPage'
import SearchFormContainer from '../MainPage/SearchFormContainer'
import { Paginator } from '../Paginator'
import Preloder from '../PreLoader/Preloader'
import Developer from './Developer'
import Empty from './Empty'



const Developers = () => {
    const dispatch = useDispatch()
    const totalCount = useSelector(totalCountSelector)
    const pageSize = useSelector(pageSizeSelector)
    const porcionSize = useSelector(porcionSizeSelector)
    const porceNumber = useSelector(porceNumberSelector)
    const currentPage = useSelector(currentPageSelector)
    const repo = useSelector(repoSelector)
    const owner = useSelector(ownerSelector)
    const developers = useSelector(developersSelector)
    const loading = useSelector(loadingSelector)
    const error = useSelector(errorSelector)
    return (
        <div className="text-center">
            <div className="search">
                <SearchFormContainer />
            </div>
            <div className="">
                {Paginator({ dispatch, totalCount, pageSize, porcionSize, porceNumber, currentPage, repo, owner })}
                {error
                    ? <Error />
                    : loading
                        ? <Preloder />
                        : developers.length ? <Developer developers={developers} /> : <Empty />
                }
            </div>
        </div>
    )
}

export default Developers