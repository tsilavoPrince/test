import Header from './Layout/Header';
import Footer from './Layout/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;