
import React from 'react'
import { HeroSection, MostPopularCategories, Carousel, LoadMore } from "@/core/pages/landing-page/index"
import { Product } from "@/core/components/grid-container";

 export const products: Product[] = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/736x/67/0f/7b/670f7b404830c43a372beee9cc7c9e79.jpg",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 2,

    imageUrl: "https://i.pinimg.com/736x/a7/e1/bf/a7e1bf25c34f4ae1a0b46b3344d1785c.jpg",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 3,

    imageUrl: "https://i.pinimg.com/474x/f8/df/53/f8df53f79d76013918773134382425a4.jpg",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 4,

    imageUrl: "https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 5,

    imageUrl: "https://media.istockphoto.com/id/1663937651/fr/photo/concept-de-magasin-de-mode-ou-de-magazine-des-chaussures-classic-casual-dans-un-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQTCZ8vz6SBGaz0KM4hmDvRungwy77l7VE-MLb1i_7Q=",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 6,

    imageUrl: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 7,

    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NjI1Mzg4MDV8fGVufDB8fHx8fA%3D%3D",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 8,

    imageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTM4MjU5M3x8ZW58MHx8fHx8",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 9,

    imageUrl: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 10,

    imageUrl: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzczNzUxMnx8ZW58MHx8fHx8",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 11,

    imageUrl: "https://images.unsplash.com/photo-1594639581906-6b1850cb60a2?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTQ5Mzc5OXx8ZW58MHx8fHx8",
    description: "t test test est",
    price: 234,
    discount: 20

  },
  {
    id: 12,

    imageUrl: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fHww",
    description: "t test test est",
    price: 234,
    discount: 20

  },

]


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className='px-4 py-10 md:px10'>
        <Carousel />
        <MostPopularCategories products={products} text={'Most Popular'} />
        <LoadMore />
      </div>
    </div>
  )
}

export default HomePage