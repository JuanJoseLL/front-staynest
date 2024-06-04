export async function createProperty(formData: FormData) {
    try {
        const response = await fetch('/properties', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Error creating property');
        }

        return { success: 'Property created successfully!' };
    } catch (error: any) {
        return { error: error.message };
    }
}