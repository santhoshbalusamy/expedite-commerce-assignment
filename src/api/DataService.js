import axios from 'axios';

export async function getProductShowcaseMetadata() {
 return axios.get('http://localhost:8081/mocks/productShowcaseMetadata.json').then(res => res.data);
};

export async function getuserProfileMetadata() {
 return axios.get('http://localhost:8081/mocks/userProfileMetadata.json').then(res => res.data);
};
