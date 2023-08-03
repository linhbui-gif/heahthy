import Footer from '@/containers/Footer';
import Header from '@/containers/Header';

const Guest = ({ children }) => {
  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
      </div>
      <div className="Guest-body">
        <main>{children}</main>
      </div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
