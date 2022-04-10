import path from 'path';
import { glob } from '@walrus/cli-utils';
import { render } from 'enzyme';
import './mockDate';
import ReactDOM from 'react-dom';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn(() => {
    return null;
  }) as typeof ReactDOM.createPortal;
});

afterAll(() => {
  (ReactDOM.createPortal as any).mockClear();
});

function demoTest(component: string) {
  const files = glob.sync(path.resolve(__dirname, `../components/${component}/__demo__/*.md`));

  files.forEach((file) => {
    const splits = file.split('/');
    const length = splits.length;
    const fileName = splits[length - 1];
    it(`renders ${component}/demo/${fileName} correctly`, () => {
      const demo = require(file).default;
      const wrapper = render(demo);
      expect(wrapper).toMatchSnapshot();
    });
  });
}

export default demoTest;
