import React from 'react'
import { DevDataType } from '../../API/api'



type PropsType = {
    developers: DevDataType[]
}
const Developer: React.FC<PropsType> = ({ developers }) => {

    return (
        <div className="developer d-flex text-center justify-content-center">
            {developers.map((dev: DevDataType) => {
                return (
                    <div key={dev.id} className="developer__item text-center  " >
                        <img src={dev.img} alt="someImage" />
                        <b>UserName : <span>{dev.userName}</span></b>
                        <b>RepoName : <span>{dev.repoName}</span></b>
                        <b>StarsCount : <span>{dev.starsCount}</span></b>
                        <b>Go to Repo!!! : <a target="_blank" href={dev.forkLink}>Go to fork</a></b>
                    </div>
                )
            })}
        </div>
    )
}

export default Developer