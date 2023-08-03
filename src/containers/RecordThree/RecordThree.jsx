import ListEx from '@/components/ListEx';
import './RecordThree.scss';

const RecordThree = () => {
  return (
    <div className="container">
      <section className="RecordThree">
        <div className="RecordThree-legend">
          MY <br /> EXERCISE
          <span>2021.05.21</span>
        </div>
        <ListEx />
      </section>
    </div>
  );
};

export default RecordThree;
