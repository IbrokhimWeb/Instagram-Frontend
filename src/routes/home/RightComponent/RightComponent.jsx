import React from 'react';
import s from './RightComponent.module.css';

// Import Components
import CompUsers from './CompUsers/CompUsers';

export default function RightComponent() {
    let a = [1,2,]

    let boxes = a.map(key => {
        return <CompUsers 
                        firstName='Mirzayev'
                        secondName='Alex'
                        names='Подписаться'
                        paddings='.4'
                        heights='3.1'
                        sizes='.76'
                    />
    })
  return (
    <div className={s.RightComponents}>
        <CompUsers 
            firstName='Mirzayev'
            secondName='shamsiddinmirzayev'

            names='Переключиться'
        />

        <div className={s.rightCompRecomends}>
            <div className={s.rightCompText}>
                <h2>Рекомендации для вас</h2>
                <a href='#'>Все</a>
            </div>

            <div className={s.rightCompBoxes}>
                {boxes}
            </div>            
        </div>
    </div>
  )
}
