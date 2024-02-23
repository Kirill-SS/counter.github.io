import React from "react";
import Button from "./components/Button";

class App extends React.Component {
    render() {
        return (
            <div className="counter">
                <div className="counter__bg">
                    <Button />
                </div>
            </div>
        );
    }
}

export default App;
