import AxiosConfig from '../config/AxiosConfig';

export const getAllTestimonials = async () => {
    console.log('called');
    try {
        const response = await AxiosConfig.get(`/testimonial/getAllTestimonial`);
        console.log(response);
        if (response && response.data && response.status !== 200) {
            return false;
        }
        return response;
    } catch (err) {
        return false;
    }
};