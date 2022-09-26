import React from 'react';
import s from './RightComponent.module.css';

// Import Components
import CompUsers from './CompUsers/CompUsers';

// import Dates
import {user} from '../../../static/data/users';

export default function RightComponent({posts}) {

  return (
    <div className={s.RightComponents}> 
        <CompUsers 
            lastName={user.lastName}
            userName={user.username}
        />

        <div className={s.rightCompRecomends}>
            <div className={s.rightCompText}>
                <h2>Рекомендации для вас</h2> 
                <a href='#'>Все</a>
            </div>

            <div className={s.rightCompBoxes}>
                {posts.map((keyDate, index) => {
                         return <CompUsers key={index} 
                                                userName={keyDate.creator.username}
                                                avatar={keyDate.creator.avatar}
                                                lastName={keyDate.desc}
                                                paddings='.4'
                                                heights='3.1'
                                                sizes='.76'
                                            />
                        })}
            </div>            
        </div>
    </div>
  )
}
