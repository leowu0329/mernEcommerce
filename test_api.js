import axios from 'axios';

const testAPI = async () => {
  try {
    // Test basic endpoint
    console.log('Testing basic endpoint...');
    const basicResponse = await axios.get('http://localhost:4000/');
    console.log('Basic endpoint response:', basicResponse.data);

    // Test admin login
    console.log('\nTesting admin login...');
    const loginResponse = await axios.post(
      'http://localhost:4000/api/user/admin',
      {
        email: 'admin@example.com',
        password: 'admin123',
      },
    );
    console.log('Login response:', loginResponse.data);

    if (loginResponse.data.success) {
      const token = loginResponse.data.token;

      // Test orders list
      console.log('\nTesting orders list...');
      const ordersResponse = await axios.post(
        'http://localhost:4000/api/order/list',
        {},
        { headers: { token } },
      );
      console.log('Orders response:', ordersResponse.data);
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

testAPI();
