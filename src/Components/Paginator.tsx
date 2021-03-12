import React from 'react'
import { Dispatch } from 'redux'
import { getDevelopers } from '../redux/dev-reducer'


type PropsType = {
    totalCount: number
    pageSize: number
    porcionSize: number
    porceNumber: number
    repo: string
    owner: string
    currentPage: number
    dispatch: Dispatch<any>
}

export const Paginator: React.FC<PropsType> = ({ totalCount, pageSize, porcionSize, porceNumber, currentPage, repo, owner, dispatch }) => {
    

    const pagesCount = Math.ceil(totalCount / pageSize)
    const porceCount = Math.ceil(pagesCount / porcionSize)

    let firstPage = (porceNumber - 1) * porcionSize + 1
    let lastPage = porceNumber * porcionSize

    let pages = []
    
    for (let i = 1; i <= pagesCount; i++) {
        if (i >= firstPage && i <= lastPage) {
            pages.push(i)
        }
    }
    const setPorceNumber = (currentPorceNumber: number) => {
        const page = (currentPorceNumber - 1) * porcionSize + 1
        debugger
        dispatch(getDevelopers(owner, repo, page, currentPorceNumber))
    }



    return (
        <div className="paginator">
            {porceNumber > 1 && <span className="toggler" onClick={() => setPorceNumber(porceNumber - 1)}>Prev</span>}
            {pages.map((p: number) => {
                return (
                    <span className={`${currentPage===p?"currentPage":""} pageNumber`} onClick={() => dispatch(getDevelopers(owner, repo, p, porceNumber))} key={p}>
                        {p}
                    </span>
                )
            })}
            {porceCount > porceNumber && <span className="toggler" onClick={() => setPorceNumber(porceNumber + 1)}>Next</span>}
        </div>
    )
}
