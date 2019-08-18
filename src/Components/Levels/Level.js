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
            { id: 0, name: 'Hello' },
            { id: 1, name: 'Hi' },
            { id: 2, name: 'Good morning' },
            { id: 3, name: 'Good afternoon' },
            { id: 4, name: 'Good night' },
            { id: 5, name: 'Good bye' },
        ],
    },
    {
        level2: [
            { id: 0, name: 'Hello Word' },
            { id: 1, name: 'Hi guys' },
            { id: 2, name: 'Good morning men' },
            { id: 3, name: 'Good afternoon girl' },
            { id: 4, name: 'Good night honey' },
            { id: 5, name: 'Good bye teacher' },
        ]
    }
]

class Level extends Component {

    wordLevel;
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }
    }

    onAnimationWord = (index) => {
        if (index >= this.wordLevel.length) {
            this.setState({
                currentIndex: -1
            });
        } else {
            this.setState({
                currentIndex: index
            })
        }
    }

    componentDidMount() {
        this.numId = 0;
        if (this.numId < this.wordLevel.length) {
            this.wordId = document.getElementById(`word${this.numId}`);
            this.wordId.style.left = '0px';
            this.positionWord = 0;
            this.intervalAnimationWord = setInterval(() => {
                if (this.positionWord != 1085) {
                    this.positionWord++;
                    this.wordId.style.left = this.positionWord + 'px';
                    
                } else {
                    this.wordId.style.left = '';
                    this.wordId.style.opacity = '';
                    this.wordId.style.position = '';
                    this.numId++;
                    clearInterval(this.intervalAnimationWord);
                    this.onAnimationWord(this.numId);
                }
            }, 1);
        }
    }

    componentDidUpdate() {
        clearInterval(this.intervalAnimationWord);
        if (this.numId < this.wordLevel.length) {
            this.wordId = document.getElementById(`word${this.numId}`);
            this.wordId.style.left = '0px';
            this.positionWord = 0;
            this.intervalAnimationWord = setInterval(() => {
                if (this.positionWord != 1085) {
                    this.positionWord++;
                    this.wordId.style.left = this.positionWord + 'px';
                } else {
                    this.wordId.style.left = '';
                    this.wordId.style.opacity = '';
                    this.wordId.style.position = '';
                    this.numId++;
                    clearInterval(this.intervalAnimationWord);
                    this.onAnimationWord(this.numId);
                }
            }, 1);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalAnimationWord);
    }

    handlerKeyDownWord = (event) => {
        console.log(event.target.value);
    }

    render() {
        let level = [];
        if (this.props.level == 'easy') {
            level = words[0]['level1'];
        } else if (this.props.level == 'medium') {
            level = words[1]['level2'];
        } else {
            console.log('props level: ', words);
        }

        if (level != []) {
            this.wordLevel = level.map((item) => 
                <label id={`word${item.id}`} className={
                        `word ${this.state.currentIndex == item.id ? "active" : ""}`
                    }
                    key={item.id}
                    onKeyDown={this.handlerKeyDownWord}>
                    {item.name}
                </label>
            )
        } else {
            this.wordLevel = '';
        }

        return (
            <React.Fragment>
                <div className="container__header">
                    <div className="header_info_user">Name: Huỳnh Nhã Tuấn</div>
                    <div className="header_info_user">Time: 5 minutes</div>
                    <div className="header_info_user">Score: 0</div>
                </div>
                <Slideshow input={images} />
                <div className="container-word">
                    { this.wordLevel }
                </div>
            </React.Fragment>
        );
    }

}

export default Level;