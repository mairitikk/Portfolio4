import { Child } from './Child';

const Parent = () => {
    return <Child color="yellow" onClick={() => console.log('mau')}>
        </Child>
};
export default Parent;