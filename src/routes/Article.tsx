import { useLoaderData, useNavigate } from 'react-router-dom';
import parse, { DOMNode, domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import { type News } from '../types/types';
import { getGamesNews, getSingleGameNews } from '../api/api';
import IconArrowLeft from '../components/LeftArrow';
import Footer from '../components/Footer';

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element) {
      const { name, attribs, children } = domNode;
      if (domNode.type === 'tag') {
        switch (name) {
          case 'a':
            return (
              <a href={attribs.href} target={attribs.target} className='text-sky-700'>
                {domToReact(children as DOMNode[], options)}
              </a>
            );
          case 'img':
            return (
              <img className='my-5 md:mx-auto' src={attribs.src} alt={attribs.alt || 'image'} />
            );
          case 'p':
            if (children[0] instanceof Text && children[0]?.data?.includes('img')) {
              return parse(children[0].data);
            }
            break;
          case 'iframe':
            return (
              <iframe
                className='items-center mt-5 mx-auto w-8/12 md:w-[42rem] md:h-[26rem]'
                src={attribs.src}
              ></iframe>
            );
        }
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
  const navigate = useNavigate();
  if (isArticle(singleArticle)) {
    return (
      <>
        <div className='container mx-auto'>
          <div className='m-4'>
            <div>
              <button onClick={() => navigate(-1)} className='flex items-center hover:text-red-700'>
                <IconArrowLeft /> <p>Go back</p>
              </button>
            </div>
            <small className='m-1 text-red-700'>News</small>
            <h3 className='mb-10 font-bold text-3xl'>{singleArticle.short_description}</h3>
          </div>
          <div className='m-4'>{parse(singleArticle.article_content, options)}</div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Article;
