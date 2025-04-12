import { HomeSearch } from '@/components/HomeSearch'
import { Button } from '@/components/ui/button'
import { CarIcon, ChevronRight, CreditCard, Shield } from 'lucide-react'
import CarCard from '@/components/CarCard'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { bodyTypes, carMakes, faqItems } from '@/lib/data'
import { NextPage } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SignedOut } from '@clerk/nextjs'
import { getFeaturedCars } from '@/actions/home'


interface CarMake {
  name: string;
  image: string;
}

const Page: NextPage = async () => {
  // const featuredCars: Car[] = [
  //   {
  //     id: 1,
  //     make: "Toyota",
  //     model: "Camry",
  //     year: 2023,
  //     price: 28999,
  //     images: ["/1.png"],
  //     transmission: "Automatic",
  //     fuelType: "Gasoline",
  //     bodyType: "Sedan",
  //     mileage: 15000,
  //     color: "White",
  //     wishlisted: false,
  //   },
  //   {
  //     id: 2,
  //     make: "Honda",
  //     model: "Civic",
  //     year: 2023,
  //     price: 26499,
  //     images: ["/2.webp"],
  //     transmission: "Manual",
  //     fuelType: "Gasoline",
  //     bodyType: "Sedan",
  //     mileage: 12000,
  //     color: "Blue",
  //     wishlisted: true,
  //   },
  //   {
  //     id: 3,
  //     make: "Tesla",
  //     model: "Model 3",
  //     year: 2022,
  //     price: 42999,
  //     images: ["/3.jpg"],
  //     transmission: "Automatic",
  //     fuelType: "Electric",
  //     bodyType: "Sedan",
  //     mileage: 8000,
  //     color: "Red",
  //     wishlisted: false,
  //   },
  // ];

  const featuredCars = await getFeaturedCars();

  return (
    <div className='pt-20 flex flex-col'>
      {/* Hero Section */}
      <section className='relative py-16 md:py-28 dotted-background'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <h1 className="text-5xl md:text-6xl mb-4 font-extrabold tracking-tight text-gray-50 bg-clip-text ">
              Discover Your Dream Car with VroomGo AI
            </h1>

            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Experience AI-powered car searches and virtual test drives among thousands of vehicles.
            </p>
          </div>

          <HomeSearch />
        </div>
      </section>

      {/* Featured Cars */}
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>Featured Cars</h2>
            <Button variant="ghost" className='flex items-center' asChild>
              <Link href="/cars">
                View All <ChevronRight className='ml-1 h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>Browse by Make</h2>
            <Button variant="ghost" className='flex items-center' asChild>
              <Link href="/cars">
                View All <ChevronRight className='ml-1 h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {carMakes.map((make: CarMake) => (
              <Link key={make.name} href={`/cars?make=${make.name}`} className='bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer'>
                <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image src={make.image} alt={make.name} layout="fill" objectFit="contain" />
                </div>
                <p className="mt-1 font-medium">{make.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-center mb-12'>Why Choose Our Platform</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Wide Selection */}
            <div className='text-center'>
              <div className='border-[1.5px] border-[#194d6f] text-[#194d6f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <CarIcon className='h-8 w-8' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Wide Selection</h3>
              <p className='text-gray-600'>
                Explore thousands of verified vehicles from trusted dealerships and private sellers, ensuring a variety of options for every budget.
              </p>
            </div>

            {/* Secure Transactions */}
            <div className='text-center'>
              <div className='border-[1.5px] border-[#194d6f] text-[#194d6f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <Shield className='h-8 w-8' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Secure Transactions</h3>
              <p className='text-gray-600'>
                Our platform ensures safe and transparent transactions, providing buyer and seller protection for peace of mind.
              </p>
            </div>

            {/* Financing Options */}
            <div className='text-center'>
              <div className='border-[1.5px] border-[#194d6f] text-[#194d6f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <CreditCard className='h-8 w-8' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Easy Financing</h3>
              <p className='text-gray-600'>
                Get flexible financing options and pre-approved loans to make purchasing your dream car hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by body type */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>Browse by Body Type</h2>
            <Button variant="ghost" className='flex items-center' asChild>
              <Link href="/cars">
                View All <ChevronRight className='ml-1 h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {bodyTypes.map((type) => (
              <Link key={type.name} href={`/cars?bodyType=${type.name}`} className='relative group cursor-pointer'>
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image src={type.image} alt={type.name} layout="fill" objectFit="contain" className='object-cover group-hover:scale-105 transition duration-300' />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end'>
                  <p className="text-white text-xl font-bold pl-4 pb-2">{type.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 dotted-background text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect
            vehicle through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className='hover:bg-gray-100 hover:text-gray-800' asChild>
              <Link href="/cars">View All Cars</Link>
            </Button>
            <SignedOut>
              <Button size="lg" variant="outline" className='hover:bg-gray-100 hover:text-gray-800' asChild>
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Page;
