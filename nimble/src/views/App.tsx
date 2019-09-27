import * as React from 'react';
import Form from './components/Form';
import '../style/styles.css';
import Assets from './components/Assets';

interface Vscode {
    postMessage(message: any): void;
}

declare const vscode: Vscode;

interface Asset {
    name: string;
    size: number;
    chunks: number[];
    chunkNames: string[];
}

interface State {
    recievedMessage: boolean;
    firstBundleStats?: Asset[];
    optBundleStats?: Asset[];
    entry: string;
}

export default class App extends React.Component<{},State> {
    constructor(props: any) {
        super(props);
        this.state= {
            recievedMessage: false,
            firstBundleStats: undefined,
            optBundleStats: undefined,
            entry: '',

        };
        this.entryHandler = this.entryHandler.bind(this);
    }
    entryHandler = (event: any) =>  {
        // event.preventdefault();
        console.log('entry: ', this.state.entry);
        this.setState({entry: event.target.value});
    }
    render() {
        
        const runWebpackGetStats = (message : any) => {
            console.log ("bundling working");
            return vscode.postMessage(message);
        };

        const optimize = (message:any)  => {
            console.log("optimizing");
            return vscode.postMessage(message);
        };

        window.addEventListener('message', event => {
            // console.log(event.data)
            const message: any = event.data;
            switch (message.command) {
                case 'preOpt': 
                    let assetObj: Asset[] = JSON.parse(message.field).assets;
                    console.log('message recieved', assetObj);
                    this.setState ({
                        recievedMessage: true,
                        firstBundleStats: assetObj
                    }); 
                    break;
                }
            });
       
        return (
            <div id='mainApp'> 
                <h1 id='logoText'>snAppy</h1>
                <br/><br/>
                 <Form runFunc={runWebpackGetStats} entryFunc = {this.entryHandler} entry={this.state.entry} />
                 <Assets recievedMessage={this.state.recievedMessage} firstBundleStats={this.state.firstBundleStats} optFunc = {optimize} entry={this.state.entry} />
            </div>
        );
    }
    
}
