
import ReadWish from "../ReadWish/ReadWish";

import PropTypes from 'prop-types'


const ReadBooks = ({displayBooks}) => {
  
  
  return (
    <div>
      {
        displayBooks?.map((data, idx)=> <ReadWish key={idx} data={data}></ReadWish>)
      }
    </div>
  );
};

ReadBooks.propTypes={
  displayBooks:PropTypes.array.isRequired,
}
export default ReadBooks;