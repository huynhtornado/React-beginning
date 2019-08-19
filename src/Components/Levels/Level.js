import React, { Component } from 'react';

import Slideshow from './Slideshow';

import './Level.scss';
import bagImage1 from '../../assets/images/1465779980406342833.jpg';
import bagImage2 from '../../assets/images/background-2967822_960_720.png';
import bagImage3 from '../../assets/images/country-32248_960_720.png';
import bagImage4 from '../../assets/images/empty-background-nature-scenery_1308-32310.jpg';
import bagImage5 from '../../assets/images/nature-2679131_960_720.jpg';


const images = [bagImage1, bagImage2, bagImage3, bagImage4, bagImage5];

const words = {
    'easy': [
        { 0: [{ id: 0, name: 'h', color: 'black' }, { id: 1, name: 'e', color: 'black' }, { id: 2, name: 'l', color: 'black' }, { id: 3, name: 'l', color: 'black' }, { id: 4, name: 'o', color: 'black' }] },
        { 1: [{ id: 0, name: 'h', color: 'black' }, { id: 1, name: 'i', color: 'black' }] },
    ],
    'medium': [
        { 0: [{ id: 0, name: 'h', color: 'black' }, { id: 1, name: 'e', color: 'black' }, { id: 2, name: 'l', color: 'black' }, { id: 3, name: 'l', color: 'black' }, { id: 4, name: 'o', color: 'black' }] },
        { 1: [{ id: 0, name: 'h', color: 'black' }, { id: 1, name: 'i', color: 'black' }] },
    ],
    'difficult': [
        { 0: [{ id: 0, name: 'h' }, { id: 1, name: 'e' }, { id: 2, name: 'l' }, { id: 3, name: 'l' }, { id: 4, name: 'o' }] },
        { 1: [{ id: 0, name: 'h' }, { id: 1, name: 'i' }] },
    ]
}

class Level extends Component {

    wordLevel;
    keyWord = [];
    constructor(props) {
        super(props)

        this.state = {
            words: words,
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
                    document.addEventListener('keypress', this.handlerKeyDownWord, false);
                } else {
                    this.wordId.style.left = '';
                    this.wordId.style.opacity = '';
                    this.wordId.style.position = '';
                    this.numId++;
                    clearInterval(this.intervalAnimationWord);
                    this.onAnimationWord(this.numId);
                }
            }, 15);
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
                    document.addEventListener('keypress', this.handlerKeyDownWord, false);
                } else {
                    this.wordId.style.left = '';
                    this.wordId.style.opacity = '';
                    this.wordId.style.position = '';
                    this.numId++;
                    clearInterval(this.intervalAnimationWord);
                    this.onAnimationWord(this.numId);
                }
            }, 15);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handlerKeyDownWord, false);
        clearInterval(this.intervalAnimationWord);
    }

    handlerKeyDownWord = (event) => {
        let word = this.keyWord[0];
        if (event.key == word) {
            if (this.props.level === 'easy') {
                this.state.words['easy'].map((item, index) => {
                    if (index == this.state.currentIndex) {
                        item[index].forEach(element => {
                            if (element.name == event.key) {
                                element.color = 'red';
                                this.setState({
                                    words: words
                                });
                            }
                        });
                    }
                });
            } else if (this.props.level === 'medium') {
                this.state.words.map((level) => {
                    let keyword = this.state.words[0][this.state.currentIndex].indexOf(event.key);
                    this.setState({

                    });
                })
            } else {
                this.state.words.map((level) => {
                    let keyword = this.state.words[0][this.state.currentIndex].indexOf(event.key);
                    this.setState({

                    });
                })
            }
        }

    }

    render() {
        let level = [];
        if (this.props.level == 'easy') {
            level = words['easy'];
        } else if (this.props.level == 'medium') {
            level = words['medium'];
        } else {
            level = words['difficult'];
        }

        if (level != []) {
            this.wordLevel = level.map((itemLevel, index) => 
                <label key={index} id={`word${index}`} className={
                    `word ${this.state.currentIndex == index ? "active" : ""}`
                }>
                    {
                        itemLevel[index].map((itemWord) => (
                            this.keyWord.push(itemWord.name),
                            <i key={itemWord.id} style={{ color: `${itemWord.color}`}}>{itemWord.name}</i>
                        ))
                    }
                </label>
            );
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