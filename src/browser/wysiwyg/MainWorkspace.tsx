import * as React from 'react';
import ConnectedMainImage from "./ImageComponent";
import Draggable from 'react-draggable';
import {connect} from "react-redux";

class MainWorkspaceProps {
    image: any;
}

class MainWorkspaceState {
    image: any;
}

export class MainWorkspace extends React.Component {
    state: MainWorkspaceState;
    props: MainWorkspaceProps;

    constructor(props: any) {
        super(props);
        this.state = {
            image: null
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.getDraggableImageStyles = this.getDraggableImageStyles.bind(this);
    }

    handleStart() {
        console.log('start');
    }

    handleDrag() {
        console.log('drag');
    }

    handleStop() {
        console.log('stop');
    }

    getDraggableImageStyles() {
        const image = this.props.image;
        return image === null ? {} : {
            height: image.height,
            width: image.width,
        }
    }

    render() {
        return <div className="main-workspace">
            <Draggable bounds="parent">
                <div className="draggable-image" style={this.getDraggableImageStyles()}>
                    <ConnectedMainImage/>
                </div>
            </Draggable>
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const ConnectedMainWorkspace = connect(
    mapStateToProps
)(MainWorkspace);

export default ConnectedMainWorkspace;