import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 ml-4 rounded-xl my-16  ">
            <h2 className='text-3xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark}
                    bookmark={bookmark}
                    ></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks;