import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';  // Asegúrate de importar el componente Button

interface PropertyProps {
    id: string
    name: string
    cost_per_night: number
    city: string
    country: string
    image: string
}

export const PropertyList = ({ properties }: { properties: PropertyProps[] }) => {
    return (
        <Card className='w-[800px] shadow-md'>
            <CardHeader className="flex justify-between items-center">
                <p className="text-2xl font-semibold">
                    Properties
                </p>
                <Link href={`/propertyForm/`}>
                    <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700">
                                            +
                    </button>
                </Link>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 max-h-[400px] mx-auto overflow-auto">
                    {properties.map((property) => (
                        <div key={property.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={property.image} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
