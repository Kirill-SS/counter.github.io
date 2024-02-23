import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div className="counter__button-wrapper">
                <span className="counter__digit">{this.state.count}</span>
                <div className="counter__buttons">
                    <button
                        className="button minus"
                        onClick={() => this.countFunc(0)}
                    >
                        Minus
                    </button>
                    <button
                        className="button plus"
                        onClick={() => this.countFunc(1)}
                    >
                        + Plus
                    </button>
                </div>
            </div>
        );
    }

    countFunc(task) {
        if (task === 1) {
            this.setState({
                count: this.state.count + 1,
            });
        } else {
            if (this.state.count == 0) {
                console.log("Nope");
            } else {
                this.setState({
                    count: this.state.count - 1,
                });
            }
        }
    }
}

export default Button;
