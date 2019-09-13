import React from 'react';
import Card from './Card';

const CardList = ({robots}: any) => {
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



