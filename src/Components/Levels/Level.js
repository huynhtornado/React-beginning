import React, { Component } from 'react';

import Slideshow from './Slideshow';

import './Level.scss';
import bagImage1 from '../../assets/images/1465779980406342833.jpg';
import bagImage2 from '../../assets/images/background-2967822_960_720.png';
import bagImage3 from '../../assets/images/country-32248_960_720.png';
import bagImage4 from '../../assets/images/empty-background-nature-scenery_1308-32310.jpg';
import bagImage5 from '../../assets/images/nature-2679131_960_720.jpg';


const images = [bagImage1, bagImage2, bagImage3, bagImage4, bagImage5];

const words = [
    {
        level1: [
            { id: 1, name: 'Hello' },
            { id: 2, name: 'Hi' },
            { id: 3, name: 'Good morning' },
            { id: 4, name: 'Good afternoon' },
            { id: 5, name: 'Good night' },
            { id: 6, name: 'Good bye' },
        ],
    },
    {
        level2: [
            { id: 1, name: 'Hello Word' },
            { id: 2, name: 'Hi guys' },
            { id: 3, name: 'Good morning men' },
            { id: 4, name: 'Good afternoon girl' },
            { id: 5, name: 'Good night honey' },
            { id: 6, name: 'Good bye teacher' },
        ]
    }
]

class Level extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let level = [];
        if (this.props.level == 'easy') {
            level = words[0]['level1'];
            console.log('props level: ', words[0]['level1']);
        } else if (this.props.level == 'medium') {
            level = words[1]['level2'];
            console.log('props level: ', words);
        } else {
            console.log('props level: ', words);
        }

        let wordLevel;
        if (level !== []) {
            wordLevel = level.map((item) => 
                <div key={item.id}>{item.name}</div>
            )
        } else {
            wordLevel = '';
        }

        return (
            <React.Fragment>
                <div className="container__header">
                    <div className="header_info_user">Name: Huỳnh Nhã Tuấn</div>
                    <div className="header_info_user">Time: 5 minutes</div>
                    <div className="header_info_user">Score: 0</div>
                </div>
                <Slideshow input={images} />
                { wordLevel }
            </React.Fragment>
        );
    }

}

export default Level;