export default {
  plugins: {
    '@tailwindcss/postcss': {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
       safelist: [
        'flex', 'flex-col', 'flex-row', 'flex-wrap',
        'grid', 'grid-cols-1', 'grid-cols-2', 'lg:grid-cols-2',
        'items-center', 'justify-center', 'justify-between',
        'p-4', 'p-6', 'py-24', 'px-6',
        'm-4', 'mx-auto', 'my-4',
        'gap-10', 'gap-8',
        'w-full', 'w-64', 'lg:w-1/2', 'md:w-80',
        'h-screen', 'min-h-screen',
        'max-w-6xl', 'max-w-4xl',
        'order-1', 'order-2', 'lg:order-1', 'lg:order-2',
        'text-center', 'text-left', 'lg:text-left',
        'justify-start', 'lg:justify-start', 'lg:justify-end'
      ]
    },
  },
}