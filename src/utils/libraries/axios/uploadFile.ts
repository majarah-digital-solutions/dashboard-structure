import axios from "axios";

interface props {
  domain?: string | undefined | null;
  data: any,
  url?: string | undefined | null;
}
const uploadFile = async ({ domain = process.env.BASE_CDN, data, url = "upload" }: props) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${domain}/${url}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response: { data: {} }) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

export { uploadFile };
