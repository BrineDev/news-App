import React from 'react'
import { getCategory } from '../../API'
import { useParams } from 'react-router-dom'
import cls from './Category.module.css'
import CategoryNews from '../../components/CategoryNews'

const Category = () => {
  const [news, setNews] = React.useState([]) 
  const [isLoading, setIsLoading] = React.useState(false)
  const { category } = useParams()

  React.useEffect(() => {
    getCategory(`${category}`)  
      .then(res => {
        const data = res.data.sources
        
        console.log(data)
        setNews(data)
        setIsLoading(true)
      })  
      .finally(() => setIsLoading(false))
  }, [news])


  return (
    <div className={cls.root}>
      <h1 className={cls.category}>{category}</h1>

      <div className={cls.newsList}>
        {
          news.map((item, index) => (
            <CategoryNews key={index}
            categoryInfo={item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Category