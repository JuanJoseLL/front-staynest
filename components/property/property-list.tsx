'use client'
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
interface PropertyProps {
    id: string
    name: string
    cost_per_night: number
    city: string
    country: string
    image:string
}


export const PropertyList = ({ properties }: { properties: PropertyProps[] }) => {
    const router = useRouter();
    const handleNewProperty = () => {
        router.push('/property'); 
    }
    return (
        <Card className='w-[800px] shadow-md'>
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    Properties
                </p>
                <Button onClick={handleNewProperty} className="bg-blue-500 text-white px-4 py-2 rounded">
                    New Property
                </Button>
            </CardHeader>
            <CardContent className='space-y-4'>
                {/* <div className="bg-white"> */}
                {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
                   
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 max-h-[400px] mx-auto overflow-auto">
                        {properties.map((property) =>( 
                            <div key={property.id}className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                                        <img src={property.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                        
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link href={`/properties/${property.id}`} key={property.id}>
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {property.city}
                                                </Link>
                                            </h3>
                                            
                                                 <p className="mt-1 text-sm text-gray-500">{property.country}</p>
                                           
                                           
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${property.cost_per_night}</p>
                                    </div>
                                </div>      
                        )) }
                            
                    </div>
                {/* </div> */}
            {/* </div> */}
            </CardContent>
        </Card>
        
    )

}