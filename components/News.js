const News = ({ article }) => {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
        <div className="space-y-0.5">
          <h6 className="font-bold text-gray-700 text-sm">{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
        <img
          className="rounded-xl object-cover"
          width="70"
          src={article.urlToImage}
          alt=""
        />
      </div>
    </a>
  );
};

export default News;
