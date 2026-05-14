'use client';

import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Best Time to Visit Zanzibar: A Complete Guide',
      excerpt: 'Discover the optimal seasons for your Zanzibar adventure, from dry seasons to cultural festivals.',
      image: '/zanz1.png',
      category: 'Travel Tips',
      author: 'Munuo Travels',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: '10 Essential Swahili Phrases for Travelers',
      excerpt: 'Master these basic Swahili expressions to enhance your cultural experience in Zanzibar.',
      image: '/sw1.png',
      category: 'Language Learning',
      author: 'Munuo Travels',
      date: '2024-01-12',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Stone Town: A Walking Guide to History',
      excerpt: 'Navigate the UNESCO World Heritage site with our comprehensive walking tour guide.',
      image: '/st1.jpg',
      category: 'Cultural Guide',
      author: 'Munuo Travels',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Spice Tour Guide: What to Expect',
      excerpt: 'Everything you need to know about Zanzibar\'s famous spice tours and plantations.',
      image: '/spice1.png',
      category: 'Tour Guide',
      author: 'Munuo Travels',
      date: '2024-01-08',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Zanzibar Beach Guide: Finding Your Perfect Spot',
      excerpt: 'From Nungwi to Paje, discover the best beaches for your tropical getaway.',
      image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Beach Guide',
      author: 'Munuo Travels',
      date: '2024-01-05',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Learning Swahili: Immersion vs. Classroom',
      excerpt: 'Compare different approaches to learning Swahili and find what works best for you.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Language Learning',
      author: 'Munuo Travels',
      date: '2024-01-02',
      readTime: '5 min read'
    }
  ];

  const categories = [
    'All',
    'Travel Tips',
    'Language Learning',
    'Cultural Guide',
    'Tour Guide',
    'Beach Guide'
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/zanz1.png)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Travel Tips & Insights
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              Your guide to exploring Zanzibar and learning Swahili from local experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-sky-600 text-white">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-sky-100 text-sky-700">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="w-fit bg-sky-600 hover:bg-sky-700 text-white">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="text-gray-600 hover:text-sky-600 hover:border-sky-600"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-xl text-gray-900 mb-3 leading-tight group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest travel tips, Swahili lessons, and Zanzibar insights
          </p>
          
          <Card className="border-0 shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
                <Button className="bg-sky-600 hover:bg-sky-700 text-white py-3">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
}