// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { wantSex } from '../../../../libs/utils';

export function App() {
  return (
    <>
      123 {wantSex}
      <NxWelcome title="github-actions-test-lol" />
      <div />
    </>
  );
}

export default App;
