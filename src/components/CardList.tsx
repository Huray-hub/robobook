import React from 'react';
import Card from './Card';
import {IRobot} from '../containers/App'

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    return(
        <div>
            {
                robots.map((user: any, i: any) => {
                    return(
                        <Card
                            key = {i}
                            id = {robots[i].id}
                            name = {robots[i].name}
                            email = {robots[i].email}
                            />
                    );
                })
            }
        </div>
    )
}

export default CardList;



