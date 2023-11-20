import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'books',
  title: 'books',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bgImage',
      title: 'Big image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'At the Heart of Leadership', value:'philosophy'},
          {title: 'The Plot', value:'Love'},
          {title: 'Power of mental Discipline', value:'Human Behaviour'},
          {title: 'Power of Positive thinking', value:'Human Behaviour'},
          {title: 'The lincon Highway', value:'Love story'},
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'ShortDescription',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the book in USD',
      validation: (Rule) => Rule.required().positive(),
      options: {
        format: 'currency',
      }
    }),
  ],
})
