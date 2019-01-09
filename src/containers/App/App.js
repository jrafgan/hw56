import React, {Component} from 'react';
import './App.css';
import SmallSquare from "../../components/SmallSquare/SmallSquare";
import Tries from "../../components/Tries/Tries";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";
import Score from "../../components/Score/Score";

class App extends Component {

    state = {
        smallSquare: [],
        tries: 0,
        hiddenId: 0,
        active: true,
        note1: '',
        note2: '',
        score: 36,
        totalScore: 0,
    };


    createSquares() {
        const copy = this.state;
        for (let i = 0; i < 36; i++) {
            copy.smallSquare.push({id: i, squareClass: 'small_div', prize: '', hideClass: ''});
        }
        const rand = Math.round(Math.random() * 36);
        copy.hiddenId = rand;
        copy.smallSquare[rand].hideClass = 'hide';
        this.setState({copy});
        console.log(copy.hiddenId)
    }

    async waitRender() {
        await this.render;
        await this.createSquares();
    }

    gameReset() {
        let copy = this.state;
        copy.smallSquare = [];
        copy.tries = 0;
        copy.active = true;
        copy.note1 = '';
        copy.note2 = '';
        copy.totalScore += copy.score;
        copy.score = 36;
        this.setState({copy});
    }

    changeClass(event) {
        const id = event.currentTarget.id;
        let copy = this.state;
        copy.smallSquare[id].squareClass = 'toggle_div';
        copy.smallSquare[id].hideClass = 'show';
        copy.tries++;
        copy.score--;

        if (parseInt(id) === copy.hiddenId) {
            copy.active = false;
            copy.note1 = 'You Winn!!!';
            copy.note2 = 'Press RESET to continue';
            copy.smallSquare[copy.hiddenId].prize = 'O';
        }
        this.setState({copy});
    }

    render() {
        if (this.state.smallSquare.length === 0) {
            this.waitRender();
        }

        return (
            <div className="App">
                <Notification note1={this.state.note1} note2={this.state.note2}/>
                <div className="square_div">
                    {this.state.smallSquare.map((id, key) => {
                        return <SmallSquare key={key}
                                            id={this.state.smallSquare[key].id}
                                            divClass={this.state.smallSquare[key].squareClass}
                                            changeColor={(event) => {
                                                if (this.state.active === true) {
                                                    this.changeClass(event)
                                                }
                                            }}
                                            prize={this.state.smallSquare[key].prize}
                                            hide={this.state.smallSquare[key].hideClass}/>
                    })}
                </div>
                <Tries tries={this.state.tries}/>
                <Button onClick={this.gameReset.bind(this)}/>
                <Score score={this.state.score} totalScore={this.state.totalScore}/>
            </div>
        );
    }
}

export default App;