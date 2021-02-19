const ImageCard = ({ image, setTerm }) => {
  const tags = image.tags.split(',')
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl duration-300 mx-auto">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb2">
            photo by <a href={`https://pixabay.com/users/${image.user}-${image.user_id}/`} target="_blank" className="cursor-pointer duration-500 text-blue-900 hover:text-blue-500">{image.user}</a>
          </div>
          <ul>
            <li><strong>Views: </strong>{image.views}</li>
            <li><strong>Dowloads: </strong>{image.downloads}</li>
            <li><strong>Likes: </strong>{image.likes}</li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index} onClick={() => setTerm(tag)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1 cursor-pointer hover:bg-gray-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div >
  )
}

export default ImageCard
