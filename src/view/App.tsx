import * as React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { AppStore } from '../app';

@observer
export class TimerView extends React.Component<{store: AppStore}, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.store.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.props.store.resetTimer();
     }
};