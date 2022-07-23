import renderer from 'react-test-renderer';
import Search from '../components/Search';
//create a snapshot of the Search component
test('to match Search snapshot', () =>{
    const tree = renderer.create(<Search/>).toJSON();

    expect (tree).toMatchSnapshot();
})