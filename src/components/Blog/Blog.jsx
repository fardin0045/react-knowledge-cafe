import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks,handleMarkAsRead}) => {
    console.log(blog);
    const {id,title, cover,reading_time ,author,author_img,posted_date,hashtag} = blog;
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of title  ${title}`} />
            <div className='flex justify-between' >
                <div className='flex'> 
                    <img className='w-16' src={author_img} alt="" />
                    <div className='m-6' >
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)}
                     className='ml-2 text-red-600 text-xl align-middle ' > <FaBookmark></FaBookmark> </button>

                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className='mb-6'>
                {
                    hashtag.map((hash ,idx)=> <span key={idx}> <a href=""> key{hash}</a> </span> )
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id,reading_time)}
             className='text-violet-700 font-semibold underline' >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;