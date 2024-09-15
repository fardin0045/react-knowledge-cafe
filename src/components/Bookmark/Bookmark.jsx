import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-5 m-4 rounded-xl mx-5'>
            <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
    );
};

Bookmark.protoTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;