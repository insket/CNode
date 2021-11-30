import { IndexRouter } from './router'
import  MyHeader from './components/header'
import  MyFooter from './components/footer'
import { Layout, Affix } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className='page'>
      <Affix offsetTop={0}>
        <Header>
          <MyHeader />
        </Header>
      </Affix>
      <Content className='wrap content'>
        <IndexRouter />
      </Content>
      <Footer  className='my-footer'>
        <MyFooter />
      </Footer>
    </Layout>
  );
}

export default App;
