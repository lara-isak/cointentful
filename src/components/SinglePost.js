import React from 'react';
// useParams allows us to read the dynamic route parameters from React Router
import { Link, useParams } from 'react-router-dom';
// MD helps convert Markdown content to HTML and renders it
import MD from 'react-markdown';
import dateFormat from 'dateformat';
import useSinglePost from '../custom-hooks/useSinglePost';
import './SinglePost.scss';

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  console.log(post)

  const renderPost = () => {
    if(isLoading) return <p>Loading...</p>

    return(
      <>
        <main>
          <div className='post__intro'>
            <h2 className='post__intro__title'>{post.postName}</h2>
            <div className='post__intro__info'>
              <p className='post__intro__info__date'>{dateFormat(post.publishedDate, 'mmmm dS , yyyy')}</p>
              <p>{post.author.fields.name}</p>
            </div>
            <MD className='post__intro__desc' children={post.intro} />

            <img 
              className='post__intro__img'
              src={post.featuredImage.fields.file.url}
              alt={post.postName}
            />
          </div>

          <div className='post__body'>
            <MD children={post.content} />
          </div>
        </main>        
      </>
    )
  }

  return (
    <div className='post'>
      <Link className='post__back' to='/'>
        {'< Back'}
      </Link>

      {renderPost()}
    </div>
  )
}