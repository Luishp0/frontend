import React from 'react';
import perfil1 from "../img/perfil1.jpg";
import perfil2 from "../img/perfil2.jpg";
import perfil3 from "../img/perfil3.jpg";

const posts = [
  {
    id: 1,
    title: 'Comentario',
    href: '#',
    description:
      'Gracias a AcuaCode podre tener vigilado mis peceras siempre, es un gran producto para mantener a tus peces con vida.',
    date: 'Dom 14, 2024',
    datetime: '2024-04-14',
    category: { title: 'Comentario', href: '#' },
    author: {
      name: 'Raul gimenez',
      role: 'Usuario',
      href: '#',
      imageUrl:
        [perfil1],
    },
  },

  {
    id: 2,
    title: 'Comentario',
    href: '#',
    description:
      'Este producto me sirvió para tener todo en orden de mi pecera, también me ayudo a mantener mi pecera más limpia y ya no pensar tanto en si les heche comida a mis peces.',
    date: 'Mar 15, 2024',
    datetime: '2024-04-14',
    category: { title: 'Comentario', href: '#' },
    author: {
      name: 'Gorge Luis',
      role: 'Usuario',
      href: '#',
      imageUrl:
        [perfil2],
    },
  },

  {
    id: 3,
    title: 'Comentario',
    href: '#',
    description:
      'Me ayudo a tener una mejor experiencia con mis peces y una pecera más limpia y tener mejor control sobre la pecera.',
    date: 'Mar 16, 2024',
    datetime: '2024-04-14',
    category: { title: 'Comentario', href: '#' },
    author: {
      name: 'Gerardo Lopez',
      role: 'Usuario',
      href: '#',
      imageUrl:
        [perfil3],
    },
  },

  
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" style={{ marginTop: '-4cm' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id}>
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
