import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({name, enthusiasmLevel = 1}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :)');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

// Writing functions is one of two primary ways React allows us to make components.
// If we wanted, we could have written it out as a class as follows:
/*
class Hello extends React.Component <Props, object> {
  render() {
    const {name, enthusiasmLevel = 1} = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :)');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
// Classes are useful when our component instances have some state.
// But we don't really need to think about state in this example - in fact, we specified it as object in React.Component<Props, object>,
// so writing an SFC tends to be shorter. Local component state is more useful at the presentational level when creating generic UI elements
// that can be shared between libraries. For our application's lifecycle, we will revisit how applications manage general state with Redux in a bit.
*/

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}