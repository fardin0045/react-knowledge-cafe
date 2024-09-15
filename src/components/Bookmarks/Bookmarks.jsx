import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 ml-4 rounded-xl my-16  ">
            <div  className=' mb-3 p-4 rounded-md text-center bg-violet-200 text-violet-800 font-medium'>
                <h3 className="text-2xl">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-3xl text-start font-bold pl-4 '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx}
                    bookmark={bookmark}
                    ></Bookmark> )
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;