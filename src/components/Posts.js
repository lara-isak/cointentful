import React from 'react'
import { Link } from 'react-router-dom'
import usePosts from '../custom-hooks/usePosts'
import dateFormat from 'dateformat'
import './Posts.scss'
import logo from '../img/c.png'

export default function Posts() {
  const [posts, isLoading] = usePosts()

  const renderPosts = () => {
    if(isLoading) return <p>Posts are loading...</p>

    console.log(posts)

    return posts.map(post => (

      <Link className='posts__post' key={post.fields.slug} to={post.fields.slug}> 

        <article>
          <div className='posts__post__img__container'>
            <img 
              className='posts__post__img__container__img'
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.postName}
            />
          </div>

          <div className='posts__post__text__container'>
            <header className='posts__post__text__container__category'>{post.fields.category.fields.categoryName}</header>
            <h3 className='posts__post__text__container__name'>{post.fields.postName}</h3> 

            <footer className='posts__post__text__container__details'>
              <p className='posts__post__text__container__details__date'>{dateFormat(post.fields.publishedDate, 'mmmm dS , yyyy')}</p>
              <p>{post.fields.author.fields.name}</p>
            </footer>
          </div>
        </article>       

      </Link>
    ))
  }

  return (
    <>
    <header className='posts__header'>
      <img src={logo} alt="" />
      <h1>cointentful</h1>
    </header>
      
    <main className='posts__container'>
      <div className='posts'>{renderPosts()}</div>
    </main>

    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#78CBD6" fill-opacity="0.5" d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,154.7C672,149,768,203,864,197.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      <p className='footer__note'>Created with 🧡 by Lara Isak</p>
    </footer>
    </>
  )

}

