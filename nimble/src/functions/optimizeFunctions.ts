import { WorkspaceEdit, workspace, Position } from "vscode";
import { string } from "prop-types";
import { URI } from 'vscode-uri';

export const uncommentFunc = (uri: any, lines: number[]) => {
  //will use that and the starting position to comment out static imports by using workspaceEdit.insert(URI, position, string)
console.log("length", lines.length)
let edit = new WorkspaceEdit();
for (let line of lines) {
    edit.insert(uri, new Position(line-1, 0), "//");
   }
  workspace.applyEdit(edit)
  .then(res => {
    console.log("edited", res);
    const object = {
      Mantra: {
        name: 'Mantra',
        path: './Mantra',
      },
      Login: {
        name: 'Login',
        path: './Login',
      }  
    };
    let dynamicInjection = createDynamicInjection(object);
    let currURI = URI.file('/Users/courtneykwong/Documents/Codesmith/Projects/soloproject/src/client/containers/RRContainer.jsx');
    insertFunc(currURI , 106 , dynamicInjection);
  });
};

export const createDynamicInjection = (componentObject: any) => {
  console.log("inside dynamic import")
  //an outside function that loops through the object and for each key will execute the function below to create a new instance of class
  //will have a varibale "injection"  with the class declaration
  let injection = `class DynamicImport extends Component {
    state = {
      component: null
    }
    componentDidMount() {
      this.props.load()
        .then((component) => {
          this.setState(()=> ({
            component : component.default ? component.default : component
          }))
      })
    }
    render () {
      return this.props.children(this.state.component)
    }
  }
  `
    for (let val in componentObject) {
      console.log(componentObject[val].name)
      injection += newInstance(componentObject[val].name, componentObject[val].path)
    }
  //concatenate every new instance of class invoked with each key/values to injection string
  //return the resulting string with injection+ each instance of new class
    return injection;
  }
  //inside of the outside func there will be a function that injects a string literal with values from the object into string declaration of new instance of DynamicImports class
  function newInstance(name:string, path: string) {
    return `const ${name} = (props) => (
    <DynamicImport load= {() => import(/*wepbackChunkName: "${name}-chunk"*/ '${path}')}>{
      (Component) => Component === null 
      ? <p>Loading..</p>
      : <Component {...props}/>
    }</DynamicImport>
  )
  `
  }

  export const insertFunc =(uri: any, line: number, injection: string) => {
    console.log("inject", injection)
    console.log('line', line)
    let edit = new WorkspaceEdit();
    edit.insert(uri, new Position (line-2,0), injection)
      // .then(res => console.log('is it inserting?', res))
    workspace.applyEdit(edit)
      .then(res => console.log("applyedit",res))

  }