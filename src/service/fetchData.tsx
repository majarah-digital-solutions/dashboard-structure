import { apolloClient } from '~/utils/libraries';

interface Product {
    // تعريف نمط الكائن الذي ستحمله الفئة
    // يمكنك تعديله وفقًا لبيانات الفئة المسترجعة من الخادم
}

  export async function fetchData({variables, query}: any):  Promise<Product[]> {
    try {
        const { data } = await apolloClient.query( {
            query, 
            variables,
            fetchPolicy: "network-only",
        });
        return data;
        
    } catch (error) {
        throw error;
    }
  }