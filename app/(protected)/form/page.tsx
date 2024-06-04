import { getProperties } from "@/actions/get-properties";
import { useCurrentToken } from "@/lib/auth";

import { PropertyList } from "@/components/property/property-list";
import { PropertyForm } from "@/components/property/property-form";


const PropertyFormC = async () =>{
    const token = await useCurrentToken();
    const properties = await getProperties(token as string); ;
    return (
            
            <PropertyForm/>
            
            
    )

}

export default PropertyFormC;