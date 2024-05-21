import { useLoaderData } from 'react-router-dom';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { DOMNode, Element } from 'domhandler';
import { type News } from '../types/types';
import { getGamesNews, getSingleGameNews } from '../api/api';

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if ((domNode as Element).type === 'tag') {
      const element = domNode as Element;
      if (element.name === 'a') {
        return (
          <a href={element.attribs.href} target={element.attribs.target} className='text-sky-700'>
            {domToReact(element.children, options)}
          </a>
        );
      }
      if (element.name === 'img') {
        console.log(element.attribs.src);
        return (
          <img
            className='rounded-xl my-5 md:mx-auto'
            src={element.attribs.src}
            alt={element.attribs.src}
          />
        );
      }
      if (element.name === 'iframe') {
        return (
          <iframe
            className='w-[42rem] h-[26rem] mt-5 md:mx-auto'
            src={element.attribs.src}
          ></iframe>
        );
      }
      if (element.name !== 'a' && element.name !== 'img' && element.name === 'iframe') {
        console.log(element);
        return <p className='text-red-500'>{domToReact(element.children)}</p>;
      }
    }
  },
};

const isArticle = (article: unknown): article is News => {
  return (
    typeof article === 'object' &&
    article !== null &&
    'id' in article &&
    'short_description' in article
  );
};

export async function loader({ params }: { params: { articleId: string } }) {
  const news = await getGamesNews();
  if (typeof news === 'string') {
    console.log(news);
  } else {
    const singleArticle = await getSingleGameNews(news, parseInt(params.articleId));
    if (!singleArticle) {
      console.log('cannot find article');
    } else {
      return { singleArticle };
    }
  }
}

const Article = () => {
  const { singleArticle } = useLoaderData() as { singleArticle: News };
  if (isArticle(singleArticle)) {
    return (
      <div className='container mx-auto'>
        <div>
          <small>News</small>
          <h3 className='mb-10 font-bold text-3xl'>{singleArticle.short_description}</h3>
        </div>
        <div className=''>{parse(singleArticle.article_content, options)}</div>
      </div>
    );
  }
};

export default Article;
