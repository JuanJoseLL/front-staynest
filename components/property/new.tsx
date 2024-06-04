'use client'
import { PropertyForm } from '@/components/property/property-form'; 

const NewPropertyPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Create New Property</h1>
            <PropertyForm />
        </div>
    );
};

export default NewPropertyPage;